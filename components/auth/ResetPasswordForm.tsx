import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import Api from "@/api";
import { toast } from "react-toastify";
import { handleErrorResponse } from "@/utils";
import passwordVisibilityToggler from "@/public/show-password.svg";
import Image from "next/image";

const ResetPasswordForm = ({ token }: { token: string }) => {
  const router = useRouter();

  const schema = z
    .object({
      newPassword: z.string().min(8),
      confirmPassword: z.string().min(8),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });
  type FormFields = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    setError,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      newPassword: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log(data);

    //simulate 5 second delay
    // await new Promise((resolve) => setTimeout(resolve, 5000));

    try {
      console.log("dfgdfdfgddfdgf");

      await handleSubmitQuery(data);
    } catch (error) {
      // setError("root", {
      //   message: "This email is already taken",
      // });
      console.log(error);
    }
  };

  const forgotPassword = useMutation({
    mutationFn: async (formData: {
      newPassword: string;
      confirmPassword: string;
    }) => {
      const api = new Api();
      const response = await api.resetPassword(token, formData);
      return response.data;
    },
    onSuccess: (data) => {
      console.log("forgot password success");
      console.log("success", data);
      router.push("/login");
      toast.success(data.message);
    },
    onError: (error: any) => {
      // Handle error, for example, show error message
      console.error("Error registering user:", error.response.data.message);
      const errorMessage = handleErrorResponse(error);
      toast.error(errorMessage);
    },
  });

  const handleSubmitQuery = async (formData: {
    newPassword: string;
    confirmPassword: string;
  }) => {
    forgotPassword.mutate(formData);
  };
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div>
      <div className="mb-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h3 className="font-semibold">Password</h3>

            <div className="relative">
              <input
                placeholder="your Password"
                type={showPassword ? "text" : "password"}
                className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
                {...register("newPassword")}
              />
              <Image
                className="absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
                src={passwordVisibilityToggler}
                alt="password-toggler"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            {errors.newPassword && (
              <div className="text-red-500">{errors.newPassword?.message}</div>
            )}
          </div>
          <div className="mt-8">
            <h3 className="font-semibold">Confirm Password</h3>

            <div className="relative">
              <input
                placeholder="your Password"
                type={showPassword ? "text" : "password"}
                className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
                {...register("confirmPassword")}
              />
              <Image
                className="absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
                src={passwordVisibilityToggler}
                alt="password-toggler"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            {errors.confirmPassword && (
              <div className="text-red-500">
                {errors.confirmPassword?.message}
              </div>
            )}
          </div>
          <button
            className="bg-primary h-[3.75rem] text-white rounded-btn w-full mt-14"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? <div className="spinner"></div> : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
