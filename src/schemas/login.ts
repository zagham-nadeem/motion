import { z } from "zod";

export const loginSchema = z.object({
  name: z
    .string()
    .min(3, "3 letter add kro")
    .max(10, "Enter maximum 20 letters"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(20, "Password must be at most 20 characters long")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
      "Password must contain at least one letter, one number, and one special character"
    ),
});
