import React from "react";

import { Checkbox } from "../ui/checkbox";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSession, signIn, signOut } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const schema = z.object({
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
      console.log("dfgdfdfgddfdgf");

      const response = await handleSubmitQuery(data);
      console.log(data);
      console.log("submitted");
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };

  const handleSubmitQuery = async (formData: {
    email: string;
    password: string;
    agree: boolean;
  }) => {
    console.log("shshhshs");

    const response = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });
    console.log(response);

    if (response?.error) {
      console.log(response.error);

      toast.error(response.error);
    }

    if (response?.ok && !response?.error) {
      toast.success("User logged in successfully");
      router.push("/dashboard/courses");
    }
  };

  return (
    <div>
      <form action="" className="px-6 pt-16" onSubmit={handleSubmit(onSubmit)}>
        <h2 className=" font-semibold text-lg mb-8">Fill in the form below</h2>
        <div className="mb-8">
          <div className="mb-3">
            <h3 className="font-semibold">Email address</h3>
            <input
              type="email"
              placeholder="your email Address"
              className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
              {...register("email")}
            />
            {errors.email && (
              <div className="text-red-500">{errors.email?.message}</div>
            )}
          </div>
          <div className="mb-3">
            <h3 className="font-semibold">Password</h3>
            <input
              placeholder="your Password"
              type="password"
              className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
              {...register("password")}
            />
            {errors.password && (
              <div className="text-red-500">{errors.password?.message}</div>
            )}
          </div>
        </div>
        <div className="flex justify-between mb-10">
          <div className="flex items-center">
            <Checkbox className="text-white mr-3" />
            <h3 className=" font-semibold text-ash leading-fifth">
              Remember me
            </h3>
          </div>
          <h3 className=" leading-fifth font-medium text-primary">
            Forgot Password?
          </h3>
        </div>
        <button
          className="bg-primary h-[3.75rem] text-white rounded-btn w-full"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? <div className="spinner"></div> : "Login"}
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

export default LoginForm;
