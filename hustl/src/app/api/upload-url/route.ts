import { NextResponse } from "next/server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3Client } from "@/lib/aws/s3";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ALLOWED_TYPES = ["image/jpeg", "image/png"];

export async function POST(req: Request) {
  const { fileName, fileType, fileSize } = await req.json();

  // 🔐 Validate file type
  if (!ALLOWED_TYPES.includes(fileType)) {
    return NextResponse.json(
      { error: "Only JPG and PNG files are allowed" },
      { status: 400 }
    );
  }

  // 🔐 Validate file size
  if (fileSize > MAX_FILE_SIZE) {
    return NextResponse.json(
      { error: "File too large (max 2MB)" },
      { status: 400 }
    );
  }

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: fileName,
    ContentType: fileType,
  });

  const uploadUrl = await getSignedUrl(s3Client, command, {
    expiresIn: 60, // 1 minute
  });

  return NextResponse.json({ uploadUrl });
}
