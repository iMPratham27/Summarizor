import axios from "axios";
import { type InputType } from "../validation/inputValidation";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const summarizeText = async(data: InputType) => {
    try{
        const res = await axios.post(`${API_BASE_URL}/summarize`, data);
        return res.data;
    }catch(err){
        console.error("Request failed", err);
    }
}