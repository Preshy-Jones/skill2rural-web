"use client";
import React, { useEffect, useState } from "react";
import studentBackgroundImage from "@/public/african-college-student-big.svg";
import logo from "@/public/sk2rural-logo-onboarding.svg";
import Image from "next/image";
import Link from "next/link";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

const ResetPassword = ({
  params,
}: {
  params: {
    token: string;
  };
}) => {
  return (
    <div className=" font-neue">
      <div className="relative">
        <Image
          src={studentBackgroundImage}
          alt="african-student"
          className=""
        />

        <div className="absolute z-10 top-0 flex justify-end w-full h-full">
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
                  Enter your email address and we&apos;ll send you an email with
                  a link to reset your password.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-12"></div>
            <ResetPasswordForm token={params.token} />
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

export default ResetPassword;
