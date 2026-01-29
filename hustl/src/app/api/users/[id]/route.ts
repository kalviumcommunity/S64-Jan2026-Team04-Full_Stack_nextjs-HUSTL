import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  return NextResponse.json({
    id: params.id,
    name: "Sample User"
  });
}

export async function DELETE() {
  return NextResponse.json(
    { message: "User deleted" },
    { status: 200 }
  );
}
