"use client";

import React, { FormEvent } from "react";
import TextField from "../../ui/icons/TextField";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Checkbox } from "../../ui/checkbox";
import Api from "@/api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { handleErrorResponse } from "@/utils";
import Image from "next/image";
import passwordVisibilityToggler from "@/public/show-password.svg";

interface FormData {
  email: string;
  password: string;
  name: string;
  agree: boolean;
}

interface RegistrationData {
  email: string;
  password: string;
  name: string;
}

const StudentsForm = () => {
  const router = useRouter();
  const registerUser = useMutation({
    mutationFn: async (formData: RegistrationData) => {
      const api = new Api();
      const response = await api.registerStudent(formData);
      console.log(response);

      return response;
    },
    onSuccess: () => {
      // Handle success, for example, redirect user or show success message
      console.log("User registered successfully");
      toast.success("User registered successfully");
      //route to login page
      router.push("/login");
    },
    onError: (error: any) => {
      // Handle error, for example, show error message
      console.error("Error registering user:", error.response.data.message);
      const errorMessage = handleErrorResponse(error.response.data)
      toast.error(errorMessage);
    },
  });
  const handleSubmitQuery = (formData: {
    name: string;
    email: string;
    password: string;
    agree: boolean;
  }) => {
    registerUser.mutate(formData);
  };
  const schema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
    agree: z
      .boolean({
        required_error: "You must agree to the terms and conditions",
      })
      .refine((value) => value === true, {
        message: "You must agree to the terms and conditions",
      }),
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
      email: "test@email.com",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log(data);

    try {
      const response = await handleSubmitQuery(data);
      console.log(data);
      console.log("submitted");
    } catch (error) {
      // setError("root", {
      //   message: "This email is already taken",
      // });
      console.log(error);
    }
  };

  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div>
      <form action="" className="px-6 pt-16" onSubmit={handleSubmit(onSubmit)}>
        {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
        <h2 className=" font-semibold text-lg mb-8">Fill in the form below</h2>
        <div className="mb-8">
          <div className="mb-7">
            <h3 className="font-semibold">Full Name</h3>
            <input
              type="text"
              {...register("name")}
              placeholder="Enter your full name"
              className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
            />
            {errors.name && (
              <div className="text-red-500">{errors.name?.message}</div>
            )}
          </div>
          <div className="mb-7">
            <h3 className="font-semibold">Email address</h3>
            <input
              type="email"
              {...register("email")}
              placeholder="your email Address"
              className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
            />
            {errors.email && (
              <div className="text-red-500">{errors.email?.message}</div>
            )}
          </div>
          <div className="mb-7">
            <h3 className="font-semibold">Password</h3>
            <div className="relative">
              <input
                placeholder="your Password"
                type={showPassword ? "text" : "password"}
                className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
                {...register("password")}
              />
              <Image
                className="absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
                src={passwordVisibilityToggler}
                alt="password-toggler"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            {errors.password && (
              <div className="text-red-500">{errors.password?.message}</div>
            )}
          </div>
        </div>
        <button
          className="bg-primary h-[3.75rem] text-white rounded-btn w-full"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? <div className="spinner"></div> : "Sign Up"}
        </button>
        {errors.root && (
          <div className="text-red-500">{errors.root.message}</div>
        )}
        <div className="flex justify-center">
          <div className="w-[70%] mt-4 ">
            <div className="flex">
              {/* <Checkbox
                className="text-white border-ashBorder"
                {...register("agree")}
              /> */}
              <Controller
                control={control}
                name="agree"
                render={({ field }) => (
                  //@ts-ignore
                  <Checkbox
                    className="text-white border-ashBorder"
                    {...field}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <p className=" leading-fifth text-ash2 text-center">
                By clicking sign in, you agree to our{" "}
                <span className=" text-ash2 font-semibold">Privacy Policy</span>
                and
                <span className=" text-ash2 font-semibold">
                  Terms of Service
                </span>
              </p>
            </div>
            {errors.agree && (
              <div className="text-red-500">{errors.agree?.message}</div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentsForm;
