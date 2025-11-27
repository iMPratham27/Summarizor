import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { inputSchema, type InputType } from "../validation/inputValidation";
import { summarizeText } from "../utils/apiHelper";

export const SummarizerInput = ({setSummary}: {setSummary: (data: string) => void}) => {

    const [loading, setLoading] = useState(false);

    const {
        register, handleSubmit
    } = useForm({
        resolver: zodResolver(inputSchema),
        defaultValues: {
            length: "short",
            format: "paragraph"
        }
    });

    const onSubmit = async(data: InputType) => {
        try{
            setLoading(true);
            const response = await summarizeText(data);
            
            if(response?.success) {
                setSummary(response?.data?.summary ?? "No summary content received");
            } else {
                setSummary(response?.message || "Failed to generate summary");
            }


        }catch(err){
            console.error(err, "Error in submitting input");
        }finally{
            setLoading(false);
        }
    }

    return (
        <form 
            className="w-full max-w-3xl"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex gap-2 p-3 border border-gray-200 rounded-2xl shadow-sm bg-white">
                <textarea
                    {...register("text")}
                    placeholder="Add your text..."
                    className="flex-1 resize-none outline-gray-100 p-3 rounded-xl 
                        bg-gray-100 focus:bg-white border-gray-50 transition"
                />

                <div className="flex flex-col justify-between gap-2">
                    <div className="flex gap-2">
                        <select 
                            className="px-3 py-2 rounded-lg outline-none bg-gray-50 border border-gray-200 "
                            {...register("length")}
                        >
                            <option value="short">Short</option>
                            <option value="long">Long</option>
                        </select>

                        <select 
                            className="px-3 py-2 rounded-lg outline-none bg-gray-50 border border-gray-200 "
                            {...register("format")}
                        >
                            <option value="paragraph">Paragraph</option>
                            <option value="bulletPoints">Bullet Points</option>
                        </select>
                    </div>

                    <button 
                        type="submit"
                        className="px-4 py-2 rounded-lg bg-black text-white hover:opacity-80 transition"
                        disabled={loading}
                    >
                        {loading ? "Summarizing...." : "Summarize"}
                    </button>
                </div>
            </div>
        </form>
    );
};
