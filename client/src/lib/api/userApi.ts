import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { LoginInput, RegisterInput } from "../types/userTypes";

export const registerUser = async (userData: RegisterInput) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API}/register`,
    userData,
  );
  return response.data;
};

export const loginUser = async (userData: LoginInput) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API}/login`,
    userData,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const useRegistration = () =>
  useMutation({
    mutationKey: ["register"],
    mutationFn: registerUser,
  });

export const uselogin = () =>
  useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
  });
