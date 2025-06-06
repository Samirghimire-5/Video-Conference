"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { ArrowLeft, AtSign, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import BackgroundAnimation from "@/components/background-animation";
import { registerSchema } from "./schema";
import { useRegistration } from "@/lib/api/userApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
type FormData = yup.InferType<typeof registerSchema>;

export default function RegisterPage() {
  const { mutate, isPending } = useRegistration();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  });

  const onSubmit = (data: FormData) => {
    mutate(data, {
      onSuccess: (response) => {
        toast.success(`${response?.message}`);
        router.push("/login");
      },
      onError: (error: any) => {
        const errorMessage = error?.response?.data?.error || "Registration failed try again";
        toast.error(errorMessage);
      }
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setValue("agreeToTerms", checked);
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">
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
            <h1 className="text-3xl font-bold mb-2">Register for YapYap</h1>
            <p className="text-gray-400">
              Create your account and start connecting
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="name"
                  {...register("name")}
                  type="text"
                  placeholder="John Doe"
                  className={`pl-10 bg-white/5 border-white/10 text-white ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

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
              <Label htmlFor="password">Password</Label>
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
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="confirmPassword"
                  {...register("confirmPassword")}
                  type="password"
                  placeholder="••••••••"
                  className={`pl-10 bg-white/5 border-white/10 text-white ${
                    errors.confirmPassword ? "border-red-500" : ""
                  }`}
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={watch("agreeToTerms")}
                  onCheckedChange={handleCheckboxChange}
                  className="data-[state=checked]:bg-[#0070f3] data-[state=checked]:border-[#0070f3] mt-1"
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-300 leading-tight"
                >
                  I agree to the{" "}
                  <Link href="#" className="text-[#0070f3] hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-[#0070f3] hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              {errors.agreeToTerms && (
                <p className="text-red-500 text-sm">
                  {errors.agreeToTerms.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-[#0070f3] hover:bg-[#0060d3]"
              disabled={isPending}
            >
              {isPending ? "Creating..." : "Create Account"}
            </Button>

            <div className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="text-[#0070f3] hover:underline">
                Login
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
