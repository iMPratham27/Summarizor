
export const SummarizerInput = () => {
    return (
        <form 
            className="w-full max-w-3xl"
        >
            <div className="flex gap-2 p-3 border border-gray-200 rounded-2xl shadow-sm bg-white">
                <textarea
                    placeholder="Add your text..."
                    className="flex-1 resize-none outline-gray-100 p-3 rounded-xl 
                        bg-gray-100 focus:bg-white border-gray-50 transition"
                />

                <div className="flex flex-col justify-between gap-2">
                    <div className="flex gap-2">
                        <select className="px-3 py-2 rounded-lg outline-none bg-gray-50 border border-gray-200 ">
                            <option>Select Length</option>
                            <option>Short</option>
                            <option>Long</option>
                        </select>

                        <select className="px-3 py-2 rounded-lg outline-none bg-gray-50 border border-gray-200 ">
                            <option>Select Format</option>
                            <option>Paragraph</option>
                            <option>Bullet Points</option>
                        </select>
                    </div>

                    <button 
                        type="submit"
                        className="px-4 py-2 rounded-lg bg-black text-white hover:opacity-80 transition"
                    >
                        Summarize
                    </button>
                </div>
            </div>
        </form>
    );
};
