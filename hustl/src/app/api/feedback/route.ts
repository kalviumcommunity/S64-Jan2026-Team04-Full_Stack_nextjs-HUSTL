import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sanitizeInput } from "@/lib/security/sanitize";
import { applyCorsHeaders } from "@/lib/cors";

export async function POST(req: Request) {
  try {
    const { comment, applicationId, mentorId } = await req.json();

    // 🛡️ Sanitize user input BEFORE DB write
    const cleanComment = sanitizeInput(comment);

    const feedback = await prisma.feedback.create({
      data: {
        comment: cleanComment,
        applicationId,
        mentorId,
      },
    });

    return applyCorsHeaders(
      NextResponse.json({ success: true, feedback })
    );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return applyCorsHeaders(
      NextResponse.json(
        { success: false, message: "Feedback creation failed" },
        { status: 500 }
      )
    );
  }
}
