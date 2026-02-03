import { prisma } from "@/lib/prisma";
import redis from "@/lib/redis";
import { userSchema } from "@/lib/schemas/userSchema";
import { sendSuccess, sendError } from "@/lib/responseHandler";
import bcrypt from "bcrypt";

/**
 * GET /api/users
 * Fetch all users (Redis Cached)
 */
export async function GET() {
  try {
    const cacheKey = "users:list";

    // 1️⃣ Check Redis cache
    const cachedUsers = await redis.get(cacheKey);
    if (cachedUsers) {
      console.log("Cache Hit");
      return sendSuccess(
        JSON.parse(cachedUsers),
        "Users fetched from cache",
        200
      );
    }

    // 2️⃣ Cache miss → fetch from DB
    console.log("Cache Miss - Fetching from DB");
    const users = await prisma.user.findMany();

    // 3️⃣ Store in Redis with TTL (60 seconds)
    await redis.set(cacheKey, JSON.stringify(users), "EX", 60);

    return sendSuccess(users, "Users fetched from database", 200);
  } catch (error) {
    return sendError(
      "Failed to fetch users",
      "FETCH_USERS_ERROR",
      500,
      error
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

    // 1️⃣ Validate request body
    if (!result.success) {
      return sendError(
        "Validation Error",
        "VALIDATION_ERROR",
        400,
        result.error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        }))
      );
    }

    const { name, email, password } = result.data;

    // 2️⃣ Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return sendError(
        "User already exists",
        "USER_ALREADY_EXISTS",
        400
      );
    }

    // 3️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4️⃣ Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // 5️⃣ Invalidate cache
    await redis.del("users:list");

    return sendSuccess(user, "User created successfully", 201);
  } catch (error) {
    return sendError(
      "Internal Server Error",
      "INTERNAL_ERROR",
      500,
      error
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

    // 1️⃣ Validate request body
    if (!result.success) {
      return sendError(
        "Validation Error",
        "VALIDATION_ERROR",
        400,
        result.error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        }))
      );
    }

    const { name, email, password } = result.data;

    // 2️⃣ Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!existingUser) {
      return sendError(
        "User not found",
        "USER_NOT_FOUND",
        404
      );
    }

    // 3️⃣ Update user
    const updatedUser = await prisma.user.update({
      where: { email },
      data: {
        name,
        password: await bcrypt.hash(password, 10),
      },
    });

    // 4️⃣ Invalidate cache
    await redis.del("users:list");

    return sendSuccess(updatedUser, "User updated successfully", 200);
  } catch (error) {
    return sendError(
      "Internal Server Error",
      "INTERNAL_ERROR",
      500,
      error
    );
  }
}
