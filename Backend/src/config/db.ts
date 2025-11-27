import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("Mongodb is successfully connected!");

    }catch(err){
        console.error("Failed to connect mongodb. ", err);
        process.exit(1);
    }
}