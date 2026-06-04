import logo from "@/assets/images/logo.svg";

import { Button, FormField, Input } from "@/components/common";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useMutation } from "@tanstack/react-query";

import { useAppDispatch } from "@/hooks/redux";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import { loginUser } from "@/api/auth.api";

import { loginSuccess } from "@/store/auth/authSlice";

import { loginSchema, type LoginFormData } from "@/schemas/login.schema";

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const loginMutation = useMutation({
    mutationFn: loginUser,

    onSuccess: (response) => {
      dispatch(loginSuccess(response.data.token));

      toast.success(response.message || "Login successful");

      navigate("/dashboard");
    },

    onError: () => {
      toast.error("Invalid credentials");
    },
  });

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data);
  };

  return (
    <div className="w-full max-w-[640px]">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 md:p-10 lg:p-12">
        <img src={logo} alt="Preproute" className="mb-8 h-10 w-auto" />

        <h1 className="mb-2 text-3xl font-semibold text-slate-800">Login</h1>

        <p className="mb-10 text-sm text-slate-500">
          Use your company provided Login credentials
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <FormField label="User ID" required>
            <Input
              placeholder="Enter User ID"
              error={errors.userId?.message}
              {...register("userId")}
            />
          </FormField>

          <FormField label="Password" required>
            <Input
              type="password"
              placeholder="Enter Password"
              error={errors.password?.message}
              {...register("password")}
            />
          </FormField>

          <Button
            type="submit"
            className="w-full"
            isLoading={loginMutation.isPending}
            disabled={loginMutation.isPending}
            loadingText="Authenticating..."
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
