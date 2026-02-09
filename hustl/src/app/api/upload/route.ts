import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { sendSuccess, sendError } from "@/lib/responseHandler";

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

    // ✅ Basic validation
    if (!filename || !fileType || !fileSize) {
      return sendError(
        "Missing required fields",
        "INVALID_INPUT",
        400
      );
    }

    // ✅ Validate file type
    if (
      !fileType.startsWith("image/") &&
      fileType !== "application/pdf"
    ) {
      return sendError(
        "Unsupported file type",
        "INVALID_FILE_TYPE",
        400
      );
    }

    // ✅ Validate file size
    if (fileSize > MAX_FILE_SIZE) {
      return sendError(
        "File too large (max 5MB)",
        "FILE_TOO_LARGE",
        400
      );
    }

    // ✅ Prevent filename collisions
    const uniqueKey = `${Date.now()}-${filename}`;

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: uniqueKey,
      ContentType: fileType,
      ACL: "public-read",
    });

    const uploadURL = await getSignedUrl(s3, command, {
      expiresIn: 60,
    });

    const fileURL = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${uniqueKey}`;

    return sendSuccess(
      {
        uploadURL,
        fileURL,
        key: uniqueKey,
      },
      "Upload URL generated successfully"
    );
  } catch (error) {
    console.error("Upload URL generation failed:", error);

    return sendError(
      "Failed to generate upload URL",
      "UPLOAD_ERROR",
      500,
      error
    );
  }
}
