import { NextResponse } from "next/server";
import { userSchema } from "@/lib/schemas/userSchema";
import { ZodError } from "zod";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";


/**
 * POST /api/users
 * Create a new user (validated with Zod)
 */
export async function POST(req: Request) {
  const body = await req.json();
  const result = userSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Validation Error",
        errors: result.error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      },
      { status: 400 }
    );
  }

  const data = result.data;

  // 👉 DB logic would go here (e.g. prisma.user.create)

  return NextResponse.json(
    { success: true, data },
    { status: 201 }
  );
}

/**
 * PUT /api/users
 * Update an existing user (same schema reused)
 */
export async function PUT(req: Request) {
  const body = await req.json();

  const result = userSchema.safeParse(body);

  if (!result.success) {
    // 1️⃣ Validate input using Zod
    const data = userSchema.parse(body);
    const { name, email, password } = data;

    // 2️⃣ Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "User already exists" },
        { status: 400 }
      );
    }

    // 3️⃣ Hash password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4️⃣ Save user in DB
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { success: true, message: "Signup successful", user },
      { status: 201 }
    );
  } catch (error) {
    // Zod validation errors
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation Error",
          errors: error.issues.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    // Server errors
    return NextResponse.json(
      {
        success: false,
        message: "Validation Error",
        errors: result.error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      },
      { status: 400 }
    );
  }

  const data = result.data;

  // 👉 DB update logic would go here (e.g. prisma.user.update)

  return NextResponse.json(
    { success: true, data },
    { status: 200 }
  );
}
