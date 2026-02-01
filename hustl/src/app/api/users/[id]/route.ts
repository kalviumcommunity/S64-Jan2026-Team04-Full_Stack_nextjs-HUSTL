import { sendSuccess, sendError } from "@/lib/responseHandler";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    return sendSuccess(
      {
        id: params.id,
        name: "Sample User",
      },
      "User fetched successfully"
    );
  } catch (error) {
    return sendError(
      "Failed to fetch user",
      "USER_FETCH_ERROR",
      500,
      error
    );
  }
}

export async function DELETE() {
  try {
    return sendSuccess(
      null,
      "User deleted successfully",
      200
    );
  } catch (error) {
    return sendError(
      "Failed to delete user",
      "USER_DELETE_ERROR",
      500,
      error
    );
  }
}

