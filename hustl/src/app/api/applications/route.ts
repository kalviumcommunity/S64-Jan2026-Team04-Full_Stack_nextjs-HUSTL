import { NextResponse } from "next/server";
import { applicationSchema } from "@/lib/schemas/applicationSchema";
import { ZodError } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = applicationSchema.parse(body);

    return NextResponse.json(
      { success: true, data },
      { status: 201 }
    );
  } catch (error) {
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

    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
