import express, { Application } from "express";
import { createServer } from "node:http";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connection from "./dataBase/connection";
import { Server } from "socket.io";

// environment variables
dotenv.config();

// database connection
connection();

// Create Express app and HTTP server
const app: Application = express();
const server = createServer(app);

// Create Socket.IO server
const io = new Server(server);

// Configure Express app
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Load user routes
(async () => {
  const userRoute = await import("./routes/user");
  app.use(userRoute.default);
})();

// Set up Socket.IO connection event handler
io.on("connection", (socket) => {
  console.log("User connected");
});

// Start server
server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});