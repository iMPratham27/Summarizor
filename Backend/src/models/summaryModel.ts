import mongoose from "mongoose";

const summarySchema = new mongoose.Schema({
    inputText: {
        type: String,
        required: true,
    },

    summary: {
        type: String,
        required: true,
    },

    length: {
        type: String,
        default: "short",
    },

    format: {
        type: String,
        default: "paragraph"
    },
}, { timestamps: true });

export const summaryModel = mongoose.model("summary", summarySchema);