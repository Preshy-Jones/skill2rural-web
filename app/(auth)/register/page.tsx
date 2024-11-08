"use client";
import React, { useState } from "react";
import studentsBackgroundImage from "@/public/african-college-student-big.svg";
import logo from "@/public/sk2rural-logo-onboarding.svg";
import Image from "next/image";
import TextField from "@/components/ui/icons/TextField";
import { UserType } from "@/types/global";
import { Checkbox } from "@/components/ui/checkbox";

import Link from "next/link";
import StudentsForm from "@/components/auth/register/StudentsForm";
import { useMutation } from "@tanstack/react-query";
import FacilitatorFormTwo from "@/components/auth/register/FacilitatorFormTwo";

const Signup = () => {
  const [activeTab, setActiveTab] = useState(UserType.EDUCATOR);
  const handleTabClick = (tab: UserType) => {
    setActiveTab(tab);
  };

  return (
    <div className=" font-neue">
      <div className="relative">
        <Image
          src={studentsBackgroundImage}
          alt="african-students"
          className="tablet:block hidden"
        />

        <div className="absolute z-10 top-0 flex tablet:justify-end w-full justify-center">
          <div className="bg-white rounded-tl-[4.375rem] rounded-bl-[4.375rem] tablet:px-12 pb-44 pt-20 w-full tablet:w-auto">
            <div className="flex flex-col items-center">
              <Link href={"/"}>
                <Image src={logo} alt="skrural-logo-onboarding" />
              </Link>
              <h1 className=" font-neue text-3.5xl leading-tertiary font-semibold">
                Sign up
              </h1>
            </div>
            <div className="flex justify-center mt-12">
              <div className="border border-black rounded-btn h-[5rem] flex items-center px-4">
                <button
                  className={`${
                    activeTab === UserType.EDUCATOR
                      ? "bg-primary text-white"
                      : "text-primary"
                  } tablet:w-[15rem] w-[10rem] h-[3.75rem] py-2 rounded-btn font-bold`}
                  onClick={() => handleTabClick(UserType.EDUCATOR)}
                >
                  EDUCATOR
                </button>
                <button
                  className={`${
                    activeTab === UserType.STUDENT
                      ? "bg-primary text-white"
                      : "text-primary"
                  } tablet:w-[15rem] w-[10rem] h-[3.75rem] py-2 rounded-btn font-bold`}
                  onClick={() => handleTabClick(UserType.STUDENT)}
                >
                  Students
                </button>
              </div>
            </div>
            {activeTab === UserType.EDUCATOR ? (
              <FacilitatorFormTwo />
            ) : (
              <StudentsForm />
            )}

            <div className=" flex justify-center leading-fifth font-neue mt-8">
              <p className="mr-3 text-ash2">Already have an account?</p>
              <Link href={"/login"}>
                <span className="text-primary font-bold"> Login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
