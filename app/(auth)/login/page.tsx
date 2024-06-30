"use client";
import React, { useEffect, useState } from "react";
import studentBackgroundImage from "@/public/african-college-student-big.svg";
import logo from "@/public/sk2rural-logo-onboarding.svg";
import Image from "next/image";
import TextField from "@/components/ui/icons/TextField";
import { UserType } from "@/types/global";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(UserType.EDUCATOR);
  const handleTabClick = (tab: UserType) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard/courses");
    }
  }, [router, status]);
  return (
    <div className=" font-neue">
      <div className="relative">
        <Image
          src={studentBackgroundImage}
          alt="african-student"
          className="tablet:block hidden"
        />

        <div className="absolute z-10 top-0 flex tablet:justify-end w-full justify-center">
          <div className="bg-white rounded-tl-[4.375rem] rounded-bl-[4.375rem] tablet:px-12 pb-44 pt-20 w-full tablet:w-auto">
            <div className="flex flex-col items-center w-full">
              <Link href={"/"}>
                <Image src={logo} alt="skrural-logo-onboarding" />
              </Link>
              <h1 className=" font-neue text-3.5xl leading-tertiary font-semibold">
                Login
              </h1>
            </div>
            <div className="flex justify-center mt-12 w-full">
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
                  Student
                </button>
              </div>
            </div>
            <LoginForm activeTab={activeTab} />

            <div className=" flex justify-center leading-fifth font-neue mt-8">
              <p className="mr-3 text-ash2">New to Skill2rural?</p>
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
