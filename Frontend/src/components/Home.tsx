import { useState } from "react";
import {SummarizerInput} from "../components/SummarizerInput";

export const Home = () => {

    const [summary, setSummary] = useState("Your summary will appear here...");

    return (
        <div className="flex flex-col w-full h-screen bg-gray-100 font-[Geist Sans] ">

            <div className="flex-1 overflow-y-auto justify-center pt-6 pb-36">
                <div className="w-full max-w-5xl mx-auto p-4 bg-white border border-gray-200 
                    rounded-xl shadow-sm min-h-[30vh] text-gray-700 whitespace-pre-wrap">
                    {
                        summary.includes("- ") 
                        ? (
                        <ul className="list-disc pl-6 space-y-2">
                            {summary.split("- ").map((p, i) => 
                                p && <li key={i}>{p}</li>
                            )}
                        </ul>
                        ) : (<p className="text-gray-600">{summary}</p>)
                    }
                </div>
            </div>

            <div className="fixed bottom-0 w-full flex justify-center bg-gray-100 p-2">
                <div className="w-full max-w-3xl mx-auto">
                    <SummarizerInput setSummary={setSummary} />
                </div>
            </div>
        </div>
    );
};
