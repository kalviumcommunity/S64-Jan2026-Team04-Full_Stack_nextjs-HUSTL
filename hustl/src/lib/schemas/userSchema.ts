import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long"),

  email: z
    .string()
    .email("Invalid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long"),

  role: z.enum(["STUDENT", "MENTOR", "ADMIN"]),
});

// Useful for reuse
export type UserInput = z.infer<typeof userSchema>;
