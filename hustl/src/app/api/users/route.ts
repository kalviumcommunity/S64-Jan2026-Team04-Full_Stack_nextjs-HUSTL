import { sendSuccess, sendError } from "@/lib/responseHandler";
import { userSchema } from "@/lib/schemas/userSchema";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

/**
 * POST /api/users
 * Create a new user
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = userSchema.safeParse(body);

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

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return sendSuccess(user, "User created successfully", 201);
  } catch (error) {
    return sendError("Internal Server Error", "INTERNAL_ERROR", 500, error);
  }
}

/**
 * PUT /api/users
 * Update user
 */
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const result = userSchema.safeParse(body);

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

    const user = await prisma.user.update({
      where: { email },
      data: {
        name,
        password: await bcrypt.hash(password, 10),
      },
    });

    return sendSuccess(user, "User updated successfully", 200);
  } catch (error) {
    return sendError("Internal Server Error", "INTERNAL_ERROR", 500, error);
  }
}
