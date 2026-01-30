import { NextResponse } from "next/server";
import { userSchema } from "@/lib/schemas/userSchema";

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
