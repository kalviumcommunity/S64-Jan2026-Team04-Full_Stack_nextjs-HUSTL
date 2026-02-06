import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sanitizeInput } from "@/lib/security/sanitize";

export async function POST(req: Request) {
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

  return NextResponse.json({ success: true, feedback });
}
