import {z} from "zod";

export const inputSchema = z.object({
    text: z.string().min(10, "Minimum 10 characters"),

    length: z.enum(["short", "long"]).default("short"),

    format: z.enum(["paragraph", "bulletPoints"]).default("paragraph"),
});

export type input = z.infer<typeof inputSchema>;