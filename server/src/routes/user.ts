import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/user";
const app: Router = Router();

app.post("/api/register", registerUser)
app.post("/api/login", loginUser)
app.delete("/api/logout", logoutUser)

export default app