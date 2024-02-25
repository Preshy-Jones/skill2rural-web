import React from "react";
import studentsBackgroundImage from "@/public/african-college-student-big.svg";
import logo from "@/public/sk2rural-logo-onboarding.svg";
import Image from "next/image";
import TextField from "@/components/ui/icons/TextField";

const Login = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={studentsBackgroundImage}
          alt="african-students"
          className=""
        />
        <div className="absolute z-10 top-0 flex justify-end w-full">
          <div className="bg-white rounded-tl-[4.375rem] rounded-bl-[4.375rem] px-12  pt-20">
            <div className="flex flex-col items-center">
              <Image src={logo} alt="skrural-logo-onboarding" />
              <h1 className=" font-neue text-3.5xl leading-tertiary font-semibold">
                Login
              </h1>
            </div>
            <div className="flex justify-center mt-12">
              <div className="border border-black rounded-btn h-[5rem] flex items-center px-4">
                <button className="bg-primary text-white w-[15rem] h-[3.75rem] py-2 rounded-btn font-bold">
                  Facilitators
                </button>
                <button className=" text-primary w-[15rem] h-[3.75rem] py-2 rounded-btn font-bold">
                  Students
                </button>
              </div>
            </div>
            <Form />
            <p>
              By clicking sign in, you agree to our Privacy Policy and Terms of
              Service
            </p>
            <div>
              <p>New to SkillHat?</p>
              <span className="text-primary"> Sign Up</span>
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
        <div className="mb-12">
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
        <button className="bg-primary h-[3.75rem] text-white rounded-btn w-full">
          Log in
        </button>
      </form>
    </div>
  );
};
