"use client";
import React, { useState } from "react";
import studentsBackgroundImage from "@/public/african-college-student-big.svg";
import logo from "@/public/sk2rural-logo-onboarding.svg";
import Image from "next/image";
import TextField from "@/components/ui/icons/TextField";
import { UserType } from "@/types/global";
import { Checkbox } from "@/components/ui/checkbox";

const Login = () => {
  const [activeTab, setActiveTab] = useState(UserType.FACILITATORS);
  const handleTabClick = (tab: UserType) => {
    setActiveTab(tab);
  };
  return (
    <div className=" font-neue">
      <div className="relative">
        <Image
          src={studentsBackgroundImage}
          alt="african-students"
          className=""
        />
        <div className="absolute z-10 top-0 flex justify-end w-full">
          <div className="bg-white rounded-tl-[4.375rem] rounded-bl-[4.375rem] px-12 pb-44 pt-20">
            <div className="flex flex-col items-center">
              <Image src={logo} alt="skrural-logo-onboarding" />
              <h1 className=" font-neue text-3.5xl leading-tertiary font-semibold">
                Login
              </h1>
            </div>
            <div className="flex justify-center mt-12">
              <div className="border border-black rounded-btn h-[5rem] flex items-center px-4">
                <button
                  className={`${
                    activeTab === UserType.FACILITATORS
                      ? "bg-primary text-white"
                      : "text-primary"
                  } w-[15rem] h-[3.75rem] py-2 rounded-btn font-bold`}
                  onClick={() => handleTabClick(UserType.FACILITATORS)}
                >
                  Facilitators
                </button>
                <button
                  className={`${
                    activeTab === UserType.STUDENTS
                      ? "bg-primary text-white"
                      : "text-primary"
                  } w-[15rem] h-[3.75rem] py-2 rounded-btn font-bold`}
                  onClick={() => handleTabClick(UserType.STUDENTS)}
                >
                  Students
                </button>
              </div>
            </div>
            <Form />
            <div className="flex justify-center">
              <div className="w-[70%] mt-4">
                <p className=" leading-fifth text-ash2 text-center">
                  By clicking sign in, you agree to our{" "}
                  <span className=" text-ash2 font-semibold">
                    Privacy Policy
                  </span>
                  and{" "}
                  <span className=" text-ash2 font-semibold">
                    Terms of Service
                  </span>
                </p>
              </div>
            </div>
            <div className=" flex justify-center leading-fifth font-neue mt-8">
              <p className="mr-3 text-ash2">New to SkillHat?</p>
              <span className="text-primary font-bold"> Sign Up</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

const Form = () => {
  return (
    <div>
      <form action="" className="px-6 pt-16">
        <h2 className=" font-semibold text-lg mb-8">Fill in the form below</h2>
        <div className="mb-8">
          <div className="mb-3">
            <h3 className="font-semibold">Email address</h3>
            <TextField
              type="email"
              placeholder="your email Address"
              className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
            />
          </div>
          <div className="mb-3">
            <h3 className="font-semibold">Password</h3>
            <TextField
              placeholder="your Password"
              type="password"
              className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
            />
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
        <button className="bg-primary h-[3.75rem] text-white rounded-btn w-full">
          Log in
        </button>
      </form>
    </div>
  );
};
