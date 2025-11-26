import {SummarizerInput} from "../components/SummarizerInput";

export const Home = () => {
    return (
        <div className="flex flex-col w-full h-screen bg-gray-100 font-[Geist Sans] ">

            <div className="flex-1 overflow-auto px-4 pt-6 pb-32 flex mb-4 justify-center">
                <div className="w-full max-w-3xl p-4 bg-white border border-gray-200 
                    rounded-xl shadow-sm min-h-[30vh]">
                    <p className="text-gray-500">
                        Your summary will appear here...
                    </p>
                </div>
            </div>

            <div className="fixed bottom-4 w-full flex justify-center px-4">
                <div className="w-full max-w-3xl">
                    <SummarizerInput />
                </div>
            </div>
        </div>
    );
};

export default Home;
