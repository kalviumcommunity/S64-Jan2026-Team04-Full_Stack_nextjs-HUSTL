import { prisma } from "@/lib/prisma";
import { sendSuccess, sendError } from "@/lib/responseHandler";

/**
 * GET /api/users/[id]
 */
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const userId = Number(params.id);

    if (isNaN(userId)) {
      return sendError("Invalid user id", "INVALID_ID", 400);
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return sendError("User not found", "USER_NOT_FOUND", 404);
    }

    return sendSuccess(user, "User fetched successfully", 200);
  } catch (error) {
    return sendError(
      "Failed to fetch user",
      "FETCH_USER_ERROR",
      500,
      error
    );
  }
}

/**
 * DELETE /api/users/[id]
 */
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const userId = Number(params.id);

    if (isNaN(userId)) {
      return sendError("Invalid user id", "INVALID_ID", 400);
    }

    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      return sendError("User not found", "USER_NOT_FOUND", 404);
    }

    await prisma.user.delete({
      where: { id: userId },
    });

    return sendSuccess(null, "User deleted successfully", 200);
  } catch (error) {
    return sendError(
      "Failed to delete user",
      "DELETE_USER_ERROR",
      500,
      error
    );
  }
}
