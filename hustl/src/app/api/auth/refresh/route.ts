import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "@/lib/jwt";

export async function POST() {
  const refreshToken = (await cookies()).get("refreshToken")?.value;

  if (!refreshToken) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const payload = verifyRefreshToken(refreshToken) as any;

    // ROTATION
    const newAccessToken = generateAccessToken({
      id: payload.id,
      email: payload.email,
    });

    const newRefreshToken = generateRefreshToken({
      id: payload.id,
      email: payload.email,
    });

    console.log("Refresh token rotated");

    const response = NextResponse.json({ message: "Token refreshed" });

    response.cookies.set("accessToken", newAccessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 15,
    });

    response.cookies.set("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch {
    return NextResponse.json({ message: "Invalid refresh token" }, { status: 401 });
  }
}
