import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

type JwtPayload = {
  userId: number;
  role: "STUDENT" | "MENTOR" | "ADMIN";
};

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  // 1. No token → 401
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json(
      { success: false, message: "Authentication required" },
      { status: 401 }
    );
  }

  const token = authHeader.split(" ")[1];

  try {
    // 2. Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as JwtPayload;

    const { role } = decoded;
    const pathname = req.nextUrl.pathname;

    // 3. RBAC checks
    if (pathname.startsWith("/api/admin") && role !== "ADMIN") {
      return NextResponse.json(
        { success: false, message: "Access denied" },
        { status: 403 }
      );
    }

    // 4. Allow request
    return NextResponse.next();
  } catch {
    // Invalid / expired token
    return NextResponse.json(
      { success: false, message: "Invalid or expired token" },
      { status: 401 }
    );
  }
}

export const config = {
  matcher: ["/api/users/:path*", "/api/admin/:path*"],
};
