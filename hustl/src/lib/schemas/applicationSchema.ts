import { z } from "zod";

export const applicationSchema = z.object({
  userId: z.number().int().positive("Invalid userId"),
  internshipId: z.number().int().positive("Invalid internshipId"),
  status: z.enum(["PENDING", "APPLIED", "INTERVIEW", "OFFER"]),
});

export type ApplicationInput = z.infer<typeof applicationSchema>;
