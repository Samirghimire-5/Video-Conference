import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app: Application = express();
app.use(cors());
app.use(express.json());


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
})