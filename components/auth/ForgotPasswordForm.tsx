import Api from "@/api";
import { handleErrorResponse } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { SubmitHandler, set, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

const ForgotPasswordForm = ({
  setActivePage,
  setEmail,
}: {
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const schema = z.object({
    email: z
      .string({
        required_error: "Email is required",
      })
      .email(),
  });
  type FormFields = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    setError,
    watch,
    control,
    setValue,
    formState: { errors, isLoading, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      //simulate 10 seconds delay
      // await new Promise((resolve) => setTimeout(resolve, 10000));
      await handleSubmitQuery(data);
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };

  const forgotPassword = useMutation({
    mutationFn: async (formData: { email: string }) => {
      const api = new Api();
      const response = await api.forgotPassword(formData);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
      setActivePage(1);
    },
    onError: (error: any) => {
      // Handle error, for example, show error message
      console.error("Error registering user:", error.response.data.message);
      const errorMessage = handleErrorResponse(error.response.data);
      toast.error(errorMessage);
    },
  });

  const handleSubmitQuery = async (formData: { email: string }) => {
    //sim
    return await forgotPassword.mutate(formData);
  };
  return (
    <div>
      <div className="mb-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-semibold">Email address</h3>
          <input
            type="email"
            placeholder="your email Address"
            className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
            {...register("email")}
            onChange={(e) => {
              setValue("email", e.target.value);
              setEmail(e.target.value);
            }}
          />
          {errors.email && (
            <div className="text-red-500">{errors.email?.message}</div>
          )}

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

export default ForgotPasswordForm;
