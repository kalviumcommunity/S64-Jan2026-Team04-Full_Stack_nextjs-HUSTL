import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ]);
}

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json(
    { message: "User created", data: body },
    { status: 201 }
  );
}
