import { NextResponse } from "next/server";
import { userSchema } from "@/lib/schemas/userSchema";
import { ZodError } from "zod";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

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
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
