import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import {
  generateAccessToken,
  generateRefreshToken,
} from "@/lib/jwt";
import { sendSuccess, sendError } from "@/lib/responseHandler";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // 1️⃣ Find user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return sendError("User not found", "USER_NOT_FOUND", 404);
    }

    // 2️⃣ Validate password
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return sendError("Invalid credentials", "INVALID_CREDENTIALS", 401);
    }

    // 3️⃣ Generate tokens
    const accessToken = generateAccessToken({
  id: user.id,
  email: user.email,
});


const refreshToken = generateRefreshToken({
  id: user.id,
  email: user.email,
});


    // 4️⃣ Store refresh token in HTTP-only cookie
    const response = NextResponse.json(
      sendSuccess(
        {
          accessToken,
          user: {
            id: user.id,
            email: user.email,
          },
        },
        "Login successful"
      )
    );

    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/api/auth/refresh",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error) {
    return sendError("Login failed", "LOGIN_ERROR", 500, error);
  }
}
