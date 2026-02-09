import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import { applyCorsHeaders } from "@/lib/cors";
import { Role } from "@prisma/client";



export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return applyCorsHeaders(
        NextResponse.json(
          { message: "All fields are required" },
          { status: 400 }
        )
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return applyCorsHeaders(
        NextResponse.json(
          { message: "User already exists" },
          { status: 400 }
        )
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: Role.STUDENT


      },
    });

    return applyCorsHeaders(
      NextResponse.json(
        { message: "Signup successful", user },
        { status: 201 }
      )
    );
  } catch (error) {
    return applyCorsHeaders(
      NextResponse.json(
        { message: "Signup failed", error },
        { status: 500 }
      )
    );
  }
}
