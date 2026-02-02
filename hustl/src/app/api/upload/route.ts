import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export async function POST(req: Request) {
  try {
    const { filename, fileType, fileSize } = await req.json();

    // 1️⃣ Validate file type
    if (
      !fileType.startsWith("image/") &&
      fileType !== "application/pdf"
    ) {
      return NextResponse.json(
        { success: false, message: "Unsupported file type" },
        { status: 400 }
      );
    }

    // 2️⃣ Validate file size
    if (fileSize > MAX_FILE_SIZE) {
      return NextResponse.json(
        { success: false, message: "File too large (max 5MB)" },
        { status: 400 }
      );
    }

    // 3️⃣ Create pre-signed PUT command
    const command = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: filename,
      ContentType: fileType,
      ACL: "public-read",
    });

    const uploadURL = await getSignedUrl(s3, command, {
      expiresIn: 60, // 1 minute
    });

    return NextResponse.json({
      success: true,
      uploadURL,
    });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to generate upload URL" },
      { status: 500 }
    );
  }
}
