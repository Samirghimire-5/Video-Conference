"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { ArrowLeft, AtSign, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import BackgroundAnimation from "@/components/background-animation";
import { loginSchema } from "./schema";
import { uselogin } from "@/lib/api/userApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAppDispatch } from "@/lib/redux/hooks";
import { onLogin } from "@/lib/redux/user/userSlice";

type FormData = yup.InferType<typeof loginSchema>;

export default function LoginPage() {
  const { mutate, isPending } = uselogin();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data: FormData) => {
    mutate(data, {
      onSuccess: (response) => {
        toast.success(`${response?.message}`);
        dispatch(onLogin(response.user))
        router.push("/dashboard");
      },
      onError: (error: any) => {
        const errorMessage = error?.response?.data?.error || "Login failed try again";
        toast.error(errorMessage);
      }
    })
  };

  const handleCheckboxChange = (checked: boolean) => {
    setValue("rememberMe", checked);
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center px-4">
      <BackgroundAnimation />

      <div className="w-full max-w-md z-10">
        <div className="mb-8">
          <Link
            href="/"
            className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Login to YapYap</h1>
            <p className="text-gray-400">
              Welcome back! Please enter your details.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="email"
                  {...register("email")}
                  type="email"
                  placeholder="name@example.com"
                  className={`pl-10 bg-white/5 border-white/10 text-white ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="text-sm text-[#0070f3] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="password"
                  {...register("password")}
                  type="password"
                  placeholder="••••••••"
                  className={`pl-10 bg-white/5 border-white/10 text-white ${
                    errors.password ? "border-red-500" : ""
                  }`}
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={watch("rememberMe")}
                onCheckedChange={handleCheckboxChange}
                className="data-[state=checked]:bg-[#0070f3] data-[state=checked]:border-[#0070f3]"
              />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me for 30 days
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#0070f3] hover:bg-[#0060d3]"
            >
              Sign in
            </Button>

            <div className="text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <Link href="/register" className="text-[#0070f3] hover:underline">
                Register
              </Link>
            </div>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-black px-2 text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="bg-black/10 border-white/10 hover:bg-white/5 hover:text-white text-white"
              >
                Google
              </Button>
              <Button
                variant="outline"
                className="bg-black/10 border-white/10 hover:bg-white/5 hover:text-white text-white"
              >
                Microsoft
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}