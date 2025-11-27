import { GoogleGenerativeAI } from "@google/generative-ai";

export const getSummaryFromGemini = async(text:string, length:string, format:string) => {

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

    const prompt = `
    Summarize the text below in ${length} length using ${format} format.
  
    Requirements:
    - If format = "bulletPoints", return using "- " for each point.
    - If format = "paragraph", return a clean paragraph.
    - Maintain accuracy and preserve key details.
    - Do not add additional context.

    Text:
    """
    ${text}
    """
    `;

    const model = genAI.getGenerativeModel({ 
        model: "gemini-2.0-flash",
    });

    const result = await model.generateContent(prompt);

    return result.response.text();
}