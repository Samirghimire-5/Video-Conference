export interface RegisterInput {
  name: string;
  email: string;
  password: string;
  agreeToTerms: boolean;
}

export interface RegisterResponse {
  message: string;
}

export interface LoginInput {
  email: string;
  password: string;
  rememberMe: boolean;
}
