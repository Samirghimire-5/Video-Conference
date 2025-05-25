import express, { Application } from "express";
import { createServer } from "node:http";
import cors from "cors";
import dotenv from "dotenv";
import connection from "./dataBase/connection";
import { Server } from "socket.io";
dotenv.config();
connection();

const app: Application = express();
const server = createServer(app)
const io = new Server(server)

app.use(cors());
app.use(express.json());

(async () => {
  const userRoute = await import("./routes/user");
  app.use(userRoute.default);
})();

io.on("connection", (socket) => {
  console.log(("user connected"))
})

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});