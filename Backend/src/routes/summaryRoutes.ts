import { Router } from "express";
import { summaryHandler } from "../controllers/summaryController";

export const summaryRouter = Router();

summaryRouter.post("/summarize", summaryHandler);