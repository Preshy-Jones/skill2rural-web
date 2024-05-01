"use client";
import React, { useState } from "react";
import studentBackgroundImage from "@/public/african-college-student-big.svg";
import logo from "@/public/sk2rural-logo-onboarding.svg";
import Image from "next/image";
import TextField from "@/components/ui/icons/TextField";
import { UserType } from "@/types/global";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  const [activeTab, setActiveTab] = useState(UserType.EDUCATOR);
  const handleTabClick = (tab: UserType) => {
    setActiveTab(tab);
  };
  return (
    <div className=" font-neue">
      <div className="relative">
        <Image
          src={studentBackgroundImage}
          alt="african-student"
          className=""
        />

        <div className="absolute z-10 top-0 flex justify-end w-full">
          <div className="bg-white rounded-tl-[4.375rem] rounded-bl-[4.375rem] px-12 pb-44 pt-20">
            <div className="flex flex-col items-center">
              <Link href={"/"}>
                <Image src={logo} alt="skrural-logo-onboarding" />
              </Link>
              <h1 className=" font-neue text-3.5xl leading-tertiary font-semibold">
                Login
              </h1>
            </div>
            <div className="flex justify-center mt-12">
              <div className="border border-black rounded-btn h-[5rem] flex items-center px-4">
                <button
                  className={`${
                    activeTab === UserType.EDUCATOR
                      ? "bg-primary text-white"
                      : "text-primary"
                  } w-[15rem] h-[3.75rem] py-2 rounded-btn font-bold`}
                  onClick={() => handleTabClick(UserType.EDUCATOR)}
                >
                  EDUCATOR
                </button>
                <button
                  className={`${
                    activeTab === UserType.STUDENT
                      ? "bg-primary text-white"
                      : "text-primary"
                  } w-[15rem] h-[3.75rem] py-2 rounded-btn font-bold`}
                  onClick={() => handleTabClick(UserType.STUDENT)}
                >
                  Student
                </button>
              </div>
            </div>
            <LoginForm />

            <div className=" flex justify-center leading-fifth font-neue mt-8">
              <p className="mr-3 text-ash2">New to SkillHat?</p>
              <Link href={"/register"}>
                <span className="text-primary font-bold"> Sign Up</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
