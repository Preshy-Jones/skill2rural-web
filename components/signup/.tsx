import React, { useState } from "react";
import Image from "next/image";
import ArrowIcon from "@/public/arrow-icon.svg";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import Api from "@/api";
import { Checkbox } from "../ui/checkbox";

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

const FacilitatorForm = () => {
  const [currentStep, setCurrentStep] = useState<Number>(1);

  const [decision, setDecision] = useState<boolean>(false);

  const router = useRouter();
  const registerUser = useMutation({
    mutationFn: async (formData: RegistrationData) => {
      const api = new Api();
      const response = api.registerStudent(formData);
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
      toast.error(error.response.data.message);
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
    organization: z
      .string()
      .optional()
      .refine(
        (value) => {
          if (currentStep === 2) {
            return value !== undefined;
          }
          return true;
        },
        {
          message: "Organization is required",
        }
      ),
    role: z
      .string()
      .optional()
      .refine(
        (value) => {
          if (currentStep === 2) {
            return value !== undefined;
          }
          return true;
        },
        {
          message: "Role is required",
        }
      ),
    no_of_students_to_reach: z
      .string()
      .optional()
      .refine(
        (value) => {
          if (currentStep === 2) {
            return value !== undefined;
          }
          return true;
        },
        {
          message: "Number of students to reach is required",
        }
      ),
    work_with_maginalized_populations: z
      .boolean()
      .optional()
      .refine(
        (value) => {
          // return value !== false && currentStep === 1;
          if (currentStep === 2) {
            return value !== false;
          }
          return true;
        },
        {
          message: "This field is required",
        }
      ),
    // agree: z.boolean().refine((value) => value === true, {
    //   message: "You must agree to the terms and conditions",
    // }),
    agree: z
      .boolean()
      .optional()
      .refine(
        (value) => {
          // return value === false && currentStep === 1;
          if (currentStep === 2) {
            return value !== false;
          }
          return true;
        },
        {
          message: "You must agree to the terms and conditions",
        }
      ),
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
      organization: "",
      role: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log(data);
    console.log("dhdhhd");
    if (currentStep === 1) {
      setCurrentStep(2);
      return;
    }

    try {
      // const response = await handleSubmitQuery(data);
      console.log(data);
      console.log("submitted");
    } catch (error) {
      // setError("root", {
      //   message: "This email is already taken",
      // });
      console.log(error);
    }
  };

  console.log(errors);

  return (
    <div className=" font-neue">
      <div className="my-12">
        <div className="grid grid-cols-2 gap-x-2">
          <div
            className="bg-primary rounded-lgx h-1 w-full cursor-pointer"
            onClick={() => setCurrentStep(1)}
          ></div>
          <div
            className={`${
              currentStep === 2 ? "bg-primary" : "bg-textFourth"
            } rounded-lgx h-1 w-full`}
          ></div>
        </div>
        <h2 className=" font-semibold text-lg leading-fourth mt-2">
          Step {currentStep.toString()} of 2
        </h2>
      </div>
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
      {/* <pre>{JSON.stringify(errors, null, 2)}</pre> */}
      <form action="" className="px-6" onSubmit={handleSubmit(onSubmit)}>
        {currentStep === 1 ? (
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
              <input
                {...register("password")}
                placeholder="your Password"
                type="password"
                className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
              />
              {errors.password && (
                <div className="text-red-500">{errors.password?.message}</div>
              )}
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-7">
              <h3 className="font-semibold">Organization</h3>
              <input
                type="text"
                {...register("organization")}
                placeholder="Enter organization name"
                className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
              />
              {errors.organization && (
                <div className="text-red-500">
                  {errors.organization?.message}
                </div>
              )}
            </div>
            <div className="mb-7">
              <h3 className="font-semibold">Role</h3>
              <input
                type="text"
                {...register("role")}
                placeholder="Enter your role"
                className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
              />
              {errors.role && (
                <div className="text-red-500">{errors.role?.message}</div>
              )}
            </div>
            <div className="mb-7">
              <h3 className="font-semibold">
                No of students you want to reach
              </h3>
              <input
                type="number"
                {...register("no_of_students_to_reach")}
                placeholder="Enter no of students"
                className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
              />
              {errors.no_of_students_to_reach && (
                <div className="text-red-500">
                  {errors.no_of_students_to_reach?.message}
                </div>
              )}
            </div>
            {/* <div className="mb-10">
              <h3 className="font-semibold">
                Do you work with marginalised populations
              </h3>
              <div className="mt-2 mb-6 bg-textFourth h-[1.875rem] w-[13rem] rounded-[3.90625rem]">
                {decision ? (
                  <div className=" h-full w-full flex ">
                    <div className="bg-white h-full rounded-[3.90625rem] shadow-toggleBtn left-0 w-[7.34375rem] flex justify-center items-center">
                      <h3 className=" text-primary font-semibold text-">YES</h3>
                    </div>
                    <div
                      onClick={() => {
                        setDecision(false);
                      }}
                      className=" flex items-center justify-center w-[5.65625rem] cursor-pointer"
                    >
                      <h3 className=" text-toggleTxt font-medium text-">NO</h3>
                    </div>
                  </div>
                ) : (
                  <div className=" h-full w-full flex cursor-pointer">
                    <div
                      onClick={() => {
                        setDecision(true);
                      }}
                      className=" flex items-center justify-center w-[5.65625rem] cursor-pointer"
                    >
                      <h3 className=" text-toggleTxt font-medium text-">YES</h3>
                    </div>
                    <div className="bg-white h-full rounded-[3.90625rem] shadow-toggleBtn left-0 w-[7.34375rem] flex justify-center items-center">
                      <h3 className=" text-primary font-semibold text-">NO</h3>
                    </div>
                  </div>
                )}
              </div>
              {errors.work_with_maginalized_populations && (
                <div className="text-red-500">
                  {errors.work_with_maginalized_populations?.message}
                </div>
              )}
            </div> */}
          </div>
        )}
        {currentStep === 1 ? (
          <button
            // onClick={() => setCurrentStep(2)}
            type="submit"
            className="bg-primary w-full h-[3.75rem] py-2 rounded-btn flex items-center justify-center cursor-pointer"
          >
            <h3 className="text-white font-semibold mr-2">Next Step</h3>
            <Image src={ArrowIcon} alt="arrow-icon" />
          </button>
        ) : (
          <button
            className="bg-primary h-[3.75rem] text-white rounded-btn w-full"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? <div className="spinner"></div> : "Sign Up"}
          </button>
        )}
        {errors.root && (
          <div className="text-red-500">{errors.root.message}</div>
        )}
        {currentStep === 2 && (
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
                  <span className=" text-ash2 font-semibold">
                    Privacy Policy
                  </span>
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
        )}
      </form>
    </div>
  );
};

export default FacilitatorForm;
