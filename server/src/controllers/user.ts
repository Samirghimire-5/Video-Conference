import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel";
import { Request, Response } from "express";

const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, agreeToTerms } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ error: "User already exists" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      agreeToTerms,
    });
    res.status(201).json({ message: "User registered successfully" });
    return;
  } catch (error) {
    // console.log("registrationerror", error);
    res.status(500).json({ error: "Failed to register user" });
  }
};

const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, rememberMe } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ error: "Invalid password" });
      return;
    }
    const token = jwt.sign({ userId: user._id }, `${process.env.JWT_SECRET}`, {
      expiresIn: rememberMe ? "30d" : "1d",
    });

    res.cookie("userToken", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: rememberMe ? 30 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ message: "User logged in successfully", user });
  } catch (error) {
    res.status(500).json({ error: "Failed to login user" });
  }
};

const logoutUser = async (req: Request, res: Response): Promise<void> => {
  try {
    res.clearCookie("userToken");
    res.status(200).json({ message: "User logged out successfully" });
    return;
  } catch (error) {
    res.status(500).json({ error: "Failed to logout user" });
  }
};

export { registerUser, loginUser, logoutUser };
