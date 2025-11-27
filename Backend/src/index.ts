import express, { Application } from "express";
import { connectDB } from "./config/db";
import cors from "cors";
import { summaryRouter } from "./routes/summaryRoutes";

connectDB();

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api", summaryRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server started at port:${process.env.PORT}.`)
})