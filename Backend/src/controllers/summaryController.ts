import { Request, Response } from "express"
import { inputSchema } from "../validation/inputSchema"
import { getSummaryFromGemini } from "./geminiController";
import { summaryModel } from "../models/summaryModel";

export const summaryHandler = async(req: Request, res: Response) => {
    try{
        const {text, length="short", format="paragraph"} = inputSchema.parse(req.body);

        const summary = await getSummaryFromGemini(text, length, format);

        if (!summary) console.log("Gemini returned no summary");

        const saved = await summaryModel.create({inputText: text, summary, length, format});

        return res.status(200).json({
            success: true,
            message: "Summary and Input data saved successfully",
            data: saved
        });

    }catch(err){
        console.error("Backend error:", err);
        return res.status(500).json({
            success: false,
            message: err instanceof Error ? err.message : "Unknown error",
        });
    }
}