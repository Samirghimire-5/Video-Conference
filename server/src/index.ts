import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connection from "./dataBase/connection";
dotenv.config();
connection();

const app: Application = express();
app.use(cors());
app.use(express.json());

(async () => {
  const userRoute = await import("./routes/user");
  app.use(userRoute.default);
})();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});