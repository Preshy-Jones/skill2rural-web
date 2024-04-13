import React, { useState } from "react";
import Image from "next/image";
import ArrowIcon from "@/public/arrow-icon.svg";
import { Controller, SubmitHandler, set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import Api from "@/api";
import { Checkbox } from "../ui/checkbox";
import { handleErrorResponse } from "@/utils";
import { UserType } from "@/types/global";

interface RegistrationData {
  email: string;
  password: string;
  name: string;
}

const FacilitatorFormTwo = () => {
  const [currentStep, setCurrentStep] = useState<Number>(1);

  const [decision, setDecision] = useState<boolean>(false);

  const router = useRouter();
  const registerUser = useMutation({
    mutationFn: async (formData: RegistrationData) => {
      const api = new Api();
      const response = api.registerEducator(formData);
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
      const errorMessage = handleErrorResponse(error);
      toast.error(errorMessage);
    },
  });
  const handleSubmitQuery = (formData: {
    name: string;
    email: string;
    password: string;
    organisation: string;
    role: string;
    no_of_students_to_reach: number;
    work_with_maginalized_populations: boolean;
  }) => {
    registerUser.mutate(formData);
  };

  const schema1 = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
  });

  const schema2 = z.object({
    organisation: z.string().min(3),
    role: z.string().min(3),
    no_of_students_to_reach: z.string(),
    work_with_maginalized_populations: z.boolean(),
    agree: z
      .boolean({
        required_error: "You must agree to the terms and conditions",
      })
      .refine((value) => value === true, {
        message: "You must agree to the terms and conditions",
      }),
  });

  type FormFields = z.infer<typeof schema1>;
  type FormFields2 = z.infer<typeof schema2>;

  const {
    register,
    handleSubmit,
    setError,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {},
    resolver: zodResolver(schema1),
  });

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    setError: setError2,
    watch: watch2,
    control: control2,
    setValue: setValue2,
    formState: { errors: errors2, isSubmitting: isSubmitting2 },
  } = useForm<FormFields2>({
    defaultValues: {
      work_with_maginalized_populations: false,
    },
    resolver: zodResolver(schema2),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log(data);
    console.log("dhdhhd");
    setCurrentStep(2);
  };

  const onSubmit2: SubmitHandler<FormFields2> = async (data) => {
    const payload = { ...data, ...watch(), type: UserType.EDUCATOR };

    //change the no_of_students_to_reach to number in a new object
    const finalPayload = {
      ...payload,
      no_of_students_to_reach: parseInt(payload.no_of_students_to_reach),
    };

    try {
      const response = await handleSubmitQuery(finalPayload);
      //console.log(data);
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
      {/* <pre>{JSON.stringify({ ...watch(), ...watch2() }, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(errors, null, 2)}</pre> */}
      {currentStep === 1 && (
        <form action="" className="px-6" onSubmit={handleSubmit(onSubmit)}>
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
            <button
              // onClick={() => setCurrentStep(2)}
              type="submit"
              className="bg-primary w-full h-[3.75rem] py-2 rounded-btn flex items-center justify-center cursor-pointer"
            >
              <h3 className="text-white font-semibold mr-2">Next Step</h3>
              <Image src={ArrowIcon} alt="arrow-icon" />
            </button>
          </div>
        </form>
      )}
      {currentStep === 2 && (
        <form action="" onSubmit={handleSubmit2(onSubmit2)}>
          <div>
            <div className="mb-7">
              <h3 className="font-semibold">Organisation</h3>
              <input
                type="text"
                {...register2("organisation")}
                placeholder="Enter organisation name"
                className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
              />
              {errors2.organisation && (
                <div className="text-red-500">
                  {errors2.organisation?.message}
                </div>
              )}
            </div>
            <div className="mb-7">
              <h3 className="font-semibold">Role</h3>
              <input
                type="text"
                {...register2("role")}
                placeholder="Enter your role"
                className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
              />
              {errors2.role && (
                <div className="text-red-500">{errors2.role?.message}</div>
              )}
            </div>
            <div className="mb-7">
              <h3 className="font-semibold">
                No of students you want to reach
              </h3>
              <input
                type="number"
                {...register2("no_of_students_to_reach")}
                placeholder="Enter no of students"
                className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
              />
              {errors2.no_of_students_to_reach && (
                <div className="text-red-500">
                  {errors2.no_of_students_to_reach?.message}
                </div>
              )}
            </div>
            <div className="mb-10">
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
                        setValue2("work_with_maginalized_populations", false);
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
                        setValue2("work_with_maginalized_populations", true);
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
              {errors2.work_with_maginalized_populations && (
                <div className="text-red-500">
                  {errors2.work_with_maginalized_populations?.message}
                </div>
              )}
            </div>
            <button
              className="bg-primary h-[3.75rem] text-white rounded-btn w-full"
              disabled={isSubmitting2}
              type="submit"
            >
              {isSubmitting2 ? <div className="spinner"></div> : "Sign Up"}
            </button>
            <div className="flex justify-center">
              <div className="w-[70%] mt-4 ">
                <div className="flex">
                  <Controller
                    control={control2}
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
                {errors2.agree && (
                  <div className="text-red-500">{errors2.agree?.message}</div>
                )}
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default FacilitatorFormTwo;
