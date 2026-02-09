import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page") || "1");
    const limit = Number(searchParams.get("limit") || "10");

    const skip = (page - 1) * limit;

    const internships = await prisma.internship.findMany({
      skip,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });

    const total = await prisma.internship.count();

    return NextResponse.json({
      success: true,
      page,
      limit,
      total,
      data: internships,
    });
  } catch (error) {
    console.error("Fetch internships failed:", error);

    return NextResponse.json(
      { success: false, message: "Failed to fetch internships" },
      { status: 500 }
    );
  }
}
