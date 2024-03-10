"use client";
import React, { useState } from "react";
import learningLogo from "@/public/learning.svg";
import careerGrowth from "@/public/career-growth.svg";
import earthGrowth from "@/public/earth-planet.svg";
import laptop from "@/public/laptop.svg";
import womanComputer from "@/public/womanoncomputer.svg";
import fineGirl from "@/public/fine-girl.svg";
import number1 from "@/public/number1.svg";
import number2 from "@/public/number2.svg";
import number3 from "@/public/number3.svg";
import number4 from "@/public/number4.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import netSmall from "@/public/net-sm.svg";
import netBig from "@/public/net-lg.svg";
import { UserType } from "@/types/global";

const Info = () => {
  const [activeTab, setActiveTab] = useState(UserType.FACILITATORS);
  const handleTabClick = (tab: UserType) => {
    setActiveTab(tab);
  };
  return (
    <div className="relative">
      <div className="pb-24 bg-greyBg2 pt-72 relative overflow-hidden">
        <h2 className="font-bold text-3.5xl leading-tertiary text-center relative z-30">
          Everything you need to know about Skill2rural
        </h2>
        <div className=" rounded-t-[70vw] shadow-circle absolute top-[38rem] z-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[70vw] w-[140vw] bg-white"></div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-custom gap-x-7 gap-y-10 w-[76.94%]">
          <div className="bg-infoBg px-6 py-6 rounded-lgx border border-primary relative col-start-1 col-end-3">
            <div className="relative mb-8">
              <div className="h-[4.375rem] "></div>
              <div className="bg-white flex justify-center w-[5.15625rem] h-[4.375rem] absolute top-0 inset-x-0 mx-auto z-10">
                <Image src={learningLogo} alt="learning" />
              </div>
              <div className="bg-primary w-[5.15625rem] h-[4.375rem] absolute top-1 right-0 left-2 mx-auto z-0 rounded-tertiary"></div>
            </div>
            <h3 className="font-semibold text-xl leading-6 mb-3">
              Holistic Learning
            </h3>
            <p className="leading-fifth font-medium text-primaryBlack">
              Embrace a comprehensive learning experience that goes beyond
              textbooks. Acquire skills that matter in the real world.
            </p>
            <div className="absolute h-full w-full top-0 flex justify-center">
              <div className="w-[61.041%]">
                <Image src={netSmall} alt="net-bg" />
              </div>
            </div>
          </div>
          <div className="bg-infoBg px-6 py-6 rounded-lgx border border-primary relative col-start-3 col-end-6">
            <div className="relative mb-8">
              <div className="h-[4.375rem] "></div>
              <div className="bg-white flex justify-center w-[5.15625rem] h-[4.375rem] absolute top-0 inset-x-0 mx-auto z-10">
                <Image src={earthGrowth} alt="learning" />
              </div>
              <div className="bg-primary w-[5.15625rem] h-[4.375rem] absolute top-1 right-0 left-2 mx-auto z-0 rounded-tertiary"></div>
            </div>
            <h3 className="font-semibold text-xl leading-6 mb-3">
              Global Community
            </h3>
            <p className="leading-fifth font-medium text-primaryBlack">
              Embrace a comprehensive learning experience that goes beyond
              textbooks. Acquire skills that matter in the real world.
            </p>
            <div className="absolute h-full w-full top-0 flex justify-center">
              <div className="w-[61.041%]">
                <Image src={netBig} alt="net-bg" />
              </div>
            </div>
          </div>
          <div className="bg-infoBg px-6 py-6 rounded-lgx border border-primary relative col-start-1 col-end-4">
            <div className="relative mb-8">
              <div className="h-[4.375rem] "></div>
              <div className="bg-white flex justify-center w-[5.15625rem] h-[4.375rem] absolute top-0 inset-x-0 mx-auto z-10">
                <Image src={earthGrowth} alt="learning" />
              </div>
              <div className="bg-primary w-[5.15625rem] h-[4.375rem] absolute top-1 right-0 left-2 mx-auto z-0 rounded-tertiary"></div>
            </div>
            <h3 className="font-semibold text-xl leading-6 mb-3">
              Blended Learning
            </h3>
            <p className="leading-fifth font-medium text-primaryBlack">
              Embrace a comprehensive learning experience that goes beyond
              textbooks. Acquire skills that matter in the real world.
            </p>
            <div className="absolute h-full w-full top-0 flex justify-center">
              <div className="w-[61.041%]">
                <Image src={netBig} alt="net-bg" />
              </div>
            </div>
          </div>
          <div className="bg-infoBg px-6 py-6 rounded-lgx border border-primary relative col-start-4 col-end-6">
            <div className="relative mb-8">
              <div className="h-[4.375rem] "></div>
              <div className="bg-white flex justify-center w-[5.15625rem] h-[4.375rem] absolute top-0 inset-x-0 mx-auto z-10">
                <Image src={earthGrowth} alt="learning" />
              </div>
              <div className="bg-primary w-[5.15625rem] h-[4.375rem] absolute top-1 right-0 left-2 mx-auto z-0 rounded-tertiary"></div>
            </div>
            <h3 className="font-semibold text-xl leading-6 mb-3">
              Career Ready
            </h3>
            <p className="leading-fifth font-medium text-primaryBlack">
              Be more than just job-ready; be career-ready. Skill2Rural Bootcamp
              equips you with the tools and mindset to excel in any professional
              environment.
            </p>
            <div className="absolute h-full w-full top-0 flex justify-center">
              <div className="w-[61.041%]">
                <Image src={netBig} alt="net-bg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28 flex justify-center">
        <div className="w-[85.4%]">
          <h1 className="font-bold text-5xl leading-sixth text-center">
            Ready to redefine your future? Let&apos;s make it happen together.
          </h1>
          {/* <Tabs /> */}
          <div className="flex justify-center mt-12">
            <div className="relative h-[5.1875rem] w-[33.4375rem]">
              <div className="border border-black rounded-btn h-[5.1875rem] w-[33.4375rem] flex items-center px-4 absolute top-0 left-1/2 transform -translate-x-1/2 z-20 bg-white">
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
              <div className="h-[5.1875rem] w-[33.4375rem] absolute top-1 left-1 bg-primary rounded-btn "></div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <Image
              src={
                activeTab === UserType.FACILITATORS ? womanComputer : fineGirl
              }
              alt="womanComputer"
            />
            <div className="self-end">
              <div className="mb-12">
                <div className="flex items-start mb-4">
                  <Image src={number1} alt="number1" className="mr-5" />
                  <p>
                    Acquire essential skills demanded by today&apos;s job
                    market, including critical thinking, problem-solving,
                    communication, collaboration, and adaptability. Skill2Rural
                    focuses on preparing students for the dynamic challenges of
                    the modern workforce.
                  </p>
                </div>
                <div className="flex items-start mb-4">
                  <Image src={number2} alt="number2" className="mr-5" />
                  <p>
                    Acquire essential skills demanded by today&apos;s job
                    market, including critical thinking, problem-solving,
                    communication, collaboration, and adaptability. Skill2Rural
                    focuses on preparing students for the dynamic challenges of
                    the modern workforce.
                  </p>
                </div>
                <div className="flex items-start mb-4">
                  <Image src={number3} alt="number3" className="mr-5" />
                  <p>
                    Engage in immersive, real-world scenarios during in-person
                    bootcamps. This hands-on experience provides practical
                    insights and allows students to apply their knowledge in a
                    simulated professional environment.
                  </p>
                </div>
                <div className="flex items-start">
                  <Image src={number4} alt="number4" className="mr-5" />
                  <p>
                    Engage in immersive, real-world scenarios during in-person
                    bootcamps. This hands-on experience provides practical
                    insights and allows students to apply their knowledge in a
                    simulated professional environment.
                  </p>
                </div>
              </div>
              <button className="bg-primary text-white w-[15rem] h-[3.75rem] py-2 rounded-btn font-bold">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
