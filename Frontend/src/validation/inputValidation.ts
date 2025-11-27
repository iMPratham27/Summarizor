import {z} from "zod";

export const inputSchema = z.object({
    text: z.string().min(10, "Minimum 10 characters required"),

    length: z.enum(["short", "long"]).optional(),

    format: z.enum(["paragraph", "bulletPoints"]).optional(),
});

export type InputType = z.infer<typeof inputSchema>;