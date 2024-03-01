import React, { useState } from "react";
import TextField from "../ui/icons/TextField";
import Image from "next/image";
import ArrowIcon from "@/public/arrow-icon.svg";

const FacilitatorForm = () => {
  const [currentStep, setCurrentStep] = useState<Number>(1);
  enum Decision {
    YES = "yes",
    NO = "no",
  }
  const [decision, setDecision] = useState(Decision.NO);

  return (
    <div className=" font-neue">
      <div className="my-12">
        <div className="grid grid-cols-2 gap-x-2">
          <div className="bg-primary rounded-lgx h-1 w-full"></div>
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
      <form action="" className="px-6">
        {currentStep === 1 ? (
          <div className="mb-8">
            <div className="mb-7">
              <h3 className="font-semibold">Full Name</h3>
              <TextField
                type="text"
                placeholder="Enter your full name"
                className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
              />
            </div>
            <div className="mb-7">
              <h3 className="font-semibold">Email address</h3>
              <TextField
                type="email"
                placeholder="your email Address"
                className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
              />
            </div>
            <div className="mb-7">
              <h3 className="font-semibold">Password</h3>
              <TextField
                placeholder="your Password"
                type="password"
                className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-7">
              <h3 className="font-semibold">Organization</h3>
              <TextField
                type="text"
                placeholder="Enter your full name"
                className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
              />
            </div>
            <div className="mb-7">
              <h3 className="font-semibold">Role</h3>
              <TextField
                type="text"
                placeholder="Enter your role"
                className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
              />
            </div>
            <div className="mb-7">
              <h3 className="font-semibold">
                No of students you want to reach
              </h3>
              <TextField
                type="text"
                placeholder="Enter no of students"
                className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
              />
            </div>
            <div className="mb-10">
              <h3 className="font-semibold">
                Do you work with marginalised populations
              </h3>
              <div className="mt-2 mb-6 bg-textFourth h-[1.875rem] w-[13rem] rounded-[3.90625rem]">
                {decision === Decision.YES ? (
                  <div className=" h-full w-full flex ">
                    <div className="bg-white h-full rounded-[3.90625rem] shadow-toggleBtn left-0 w-[7.34375rem] flex justify-center items-center">
                      <h3 className=" text-primary font-semibold text-">YES</h3>
                    </div>
                    <div
                      onClick={() => {
                        setDecision(Decision.NO);
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
                        setDecision(Decision.YES);
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
            </div>
          </div>
        )}

        {currentStep === 1 ? (
          <div
            onClick={() => setCurrentStep(2)}
            className="bg-primary w-full h-[3.75rem] py-2 rounded-btn flex items-center justify-center cursor-pointer"
          >
            <h3 className="text-white font-semibold mr-2">Next Step</h3>
            <Image src={ArrowIcon} alt="arrow-icon" />
          </div>
        ) : (
          <button className="bg-primary h-[3.75rem] text-white rounded-btn w-full">
            Sign Up
          </button>
        )}
      </form>
    </div>
  );
};

export default FacilitatorForm;
