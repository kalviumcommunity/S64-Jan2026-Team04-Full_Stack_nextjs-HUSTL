import { prisma } from "@/lib/prisma";
import redis from "@/lib/redis";
import { userSchema } from "@/lib/schemas/userSchema";
import { sendSuccess, sendError } from "@/lib/responseHandler";
import { handleError } from "@/lib/errorHandler";
import { applyCorsHeaders } from "@/lib/cors";
import { Role } from "@prisma/client";
import bcrypt from "bcrypt";

/**
 * GET /api/users
 * Fetch all users (Redis Cached)
 */
export async function GET() {
  try {
    const cacheKey = "users:list";

    const cachedUsers = await redis.get(cacheKey);
    if (cachedUsers) {
      return applyCorsHeaders(
        sendSuccess(
          JSON.parse(cachedUsers),
          "Users fetched from cache",
          200
        )
      );
    }

    const users = await prisma.user.findMany();

    await redis.set(cacheKey, JSON.stringify(users), "EX", 60);

    return applyCorsHeaders(
      sendSuccess(users, "Users fetched from database", 200)
    );
  } catch (error) {
    return applyCorsHeaders(
      handleError(error, "GET /api/users")
    );
  }
}

/**
 * POST /api/users
 * Create a new user
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = userSchema.safeParse(body);

    if (!result.success) {
      return applyCorsHeaders(
        sendError(
          "Validation Error",
          "VALIDATION_ERROR",
          400,
          result.error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          }))
        )
      );
    }

    const { name, email, password } = result.data;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return applyCorsHeaders(
        sendError(
          "User already exists",
          "USER_ALREADY_EXISTS",
          400
        )
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: Role.STUDENT,
      },
    });

    await redis.del("users:list");

    return applyCorsHeaders(
      sendSuccess(user, "User created successfully", 201)
    );
  } catch (error) {
    return applyCorsHeaders(
      handleError(error, "POST /api/users")
    );
  }
}

/**
 * PUT /api/users
 * Update existing user
 */
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const result = userSchema.safeParse(body);

    if (!result.success) {
      return applyCorsHeaders(
        sendError(
          "Validation Error",
          "VALIDATION_ERROR",
          400,
          result.error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          }))
        )
      );
    }

    const { name, email, password } = result.data;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!existingUser) {
      return applyCorsHeaders(
        sendError(
          "User not found",
          "USER_NOT_FOUND",
          404
        )
      );
    }

    const updatedUser = await prisma.user.update({
      where: { email },
      data: {
        name,
        password: await bcrypt.hash(password, 10),
      },
    });

    await redis.del("users:list");

    return applyCorsHeaders(
      sendSuccess(updatedUser, "User updated successfully", 200)
    );
  } catch (error) {
    return applyCorsHeaders(
      handleError(error, "PUT /api/users")
    );
  }
}
