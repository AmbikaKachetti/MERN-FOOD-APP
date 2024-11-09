import {z} from "zod";

export const userSignupSchema = z.object({
    fullname: z.string().min(1, "Fullname is required"),
    email:z.string().email("Invalid email address"),
    password:z.string().min(6, "Password must be at least 6 characters."),
    contact: z
    .string()
    .regex(/^\d{10}$/, "Contact number must be exactly 10 digits") // Example for a 10-digit phone number
}
);
export type SignupInputState = z.infer<typeof userSignupSchema>;

export const userLoginSchema = z.object({
    email:z.string().email("Invalid email address"),
    password:z.string().min(6, "Password must be at least 6 characters.")
}
);
export type LoginInputState = z.infer<typeof userLoginSchema>;