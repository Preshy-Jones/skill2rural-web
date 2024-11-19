"use client";
import React, { useEffect, useState } from "react";
import studentBackgroundImage from "@/public/african-college-student-big.svg";
import logo from "@/public/sk2rural-logo-onboarding.svg";
import Image from "next/image";
import Link from "next/link";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import checkMark from "@/public/checkmark.svg";

const ForgotPassword = () => {
  const [activePage, setActivePage] = useState(0);
  const [email, setEmail] = useState("");

  return (
    <div className=" font-neue">
      {activePage === 0 && (
        <div className="relative">
          <Image
            src={studentBackgroundImage}
            alt="african-student"
            className="lg:block hidden"
          />
          <div className="absolute z-10 top-0 flex justify-center lg:justify-end w-full h-full">
            <div className="bg-white rounded-tl-[4.375rem] rounded-bl-[4.375rem] px-12 pb-44 pt-20  h-full">
              <div className="flex flex-col items-center">
                <Link href={"/"}>
                  <Image src={logo} alt="skrural-logo-onboarding" />
                </Link>
                <div className="mt-16">
                  <h1 className=" font-neue text-3.5xl leading-tertiary font-semibold text-center mb-3">
                    Reset Password
                  </h1>
                  <p className=" text-ash2 text-center">
                    Enter your email address and we&apos;ll send you an email
                    with a link to reset your password.
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-12"></div>
              <ForgotPasswordForm
                setActivePage={setActivePage}
                setEmail={setEmail}
              />
              <div className=" flex justify-center leading-fifth font-neue mt-8">
                <p className="mr-3 text-ash2">Already have an account?</p>
                <Link href={"/login"}>
                  <span className="text-primary font-bold"> Login</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {activePage === 1 && (
        <div className="bg-white flex justify-center items-center h-screen w-screen">
          <div className="w-[35%] h-1/2 flex flex-col items-center ">
            <Image src={checkMark} alt="checkmark" />
            <h1 className=" font-semibold mt-3">Check your email</h1>
            <p className="mt-5 text-center">
              We&apos;ve sent an email to <strong>{email}</strong> with
              instructions to reset your password. If it doesn&apos;t show up
              soon, check your spam folder or <strong>Contact Help Desk</strong>
            </p>

            <Link
              href={"/"}
              className="text-primary font-semibold mt-5 leading-6"
            >
              GO BACK
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
