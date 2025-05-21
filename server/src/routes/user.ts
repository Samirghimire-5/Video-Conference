import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user";
const app: Router = Router();

app.post("register", registerUser)
app.post("login", loginUser)

export default app