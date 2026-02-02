import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { fileName, fileURL } = await req.json();

  const file = await prisma.file.create({
    data: {
      name: fileName,
      url: fileURL,
    },
  });

  return NextResponse.json({
    success: true,
    file,
  });
}
