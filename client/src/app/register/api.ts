import axios from "axios";

interface RegisterData {
  name: string;
  email: string;
  password: string;
  agreeToTerms: boolean;
}

interface RegisterResponse {
  message: string;
  user: RegisterData;
}

export const registerUser = async () => {
  // const response = axios.post()
}