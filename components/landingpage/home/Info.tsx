"use client";
import React, { useState } from "react";
import learningLogo from "@/public/learning.svg";
import careerGrowth from "@/public/career-growth.svg";
import earthGrowth from "@/public/earth-planet.svg";
import laptop from "@/public/laptop.svg";
import womanWithComputer from "@/public/womanoncomputer.svg";
import fineGirl from "@/public/fine-girl.svg";
import number1 from "@/public/number1.svg";
import number2 from "@/public/number2.svg";
import number3 from "@/public/number3.svg";
import number4 from "@/public/number4.svg";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import netSmall from "@/public/net-sm.svg";
import netBig from "@/public/net-lg.svg";
import { UserType } from "@/types/global";

const Info = () => {
  const [activeTab, setActiveTab] = useState(UserType.EDUCATOR);
  const handleTabClick = (tab: UserType) => {
    setActiveTab(tab);
  };
  const variants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  };
  return (
    <div className="relative">
      <div className="pb-24 bg-greyBg2 pt-20 sm:pt-72 relative overflow-hidden">
        <h2 className="font-bold text-3.5xl leading-tertiary text-center relative z-30">
          Everything you need to know about Skill2rural
        </h2>
        <div className=" rounded-t-[70vw] shadow-circle absolute top-[38rem] z-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[70vw] w-[140vw] bg-white"></div>
      </div>
      <div className="flex justify-center">
        <div className="grid sm:grid-cols-custom grid-cols-1 sm:gap-x-7 gap-y-10 w-[76.94%]">
          <div className="bg-infoBg px-6 py-6 rounded-lgx border border-primary relative sm:col-start-1 sm:col-end-3">
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
          <div className="bg-infoBg px-6 py-6 rounded-lgx border border-primary relative sm:col-start-3 sm:col-end-6">
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
          <div className="bg-infoBg px-6 py-6 rounded-lgx border border-primary relative sm:col-start-1 sm:col-end-4">
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
          <div className="bg-infoBg px-6 py-6 rounded-lgx border border-primary relative sm:col-start-4 sm:col-end-6">
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
          <div className="flex justify-center mt-12 h-[9.625rem]">
            <div className="relative sm:h-[5.1875rem] w-[33.4375rem]">
              <div className="sm:py-0 py-4 border border-black sm:rounded-btn rounded-2xc sm:h-[5.1875rem] sm:w-[33.4375rem] flex sm:flex-row flex-col w-full items-center px-4 absolute top-0 left-1/2 transform -translate-x-1/2 z-20 bg-white">
                <button
                  className={`${
                    activeTab === UserType.EDUCATOR
                      ? "bg-primary text-white"
                      : "text-primary"
                  } w-full sm:w-[15rem] h-[3.75rem] py-2 rounded-btn font-bold`}
                  onClick={() => handleTabClick(UserType.EDUCATOR)}
                >
                  Educator
                </button>
                <button
                  className={`${
                    activeTab === UserType.STUDENT
                      ? "bg-primary text-white"
                      : "text-primary"
                  } w-full sm:w-[15rem] h-[3.75rem] py-2 rounded-btn font-bold`}
                  onClick={() => handleTabClick(UserType.STUDENT)}
                >
                  Students
                </button>
              </div>
              <div className="sm:h-[5.1875rem] w-full sm:w-[33.4375rem] absolute top-1 left-1 bg-primary rounded-btn "></div>
            </div>
          </div>
          <div className="sm:relative w-full">
            <AnimatePresence>
              {activeTab === UserType.STUDENT ? (
                <motion.div
                  key="student"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.5 }}
                >
                  <StudentInfo />
                </motion.div>
              ) : (
                <motion.div
                  key="educator"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.5 }}
                >
                  <EducatorInfo />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

const StudentInfo = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-y-0 gap-y-8">
      <Image src={fineGirl} alt="womanComputer" height={716} />
      <div className="self-end">
        <div className="mb-12">
          <div className="flex items-start mb-4">
            <Image src={number1} alt="number1" className="mr-5" />
            <p>
              Acquire essential skills demanded by today&apos;s job market,
              including critical thinking, problem-solving, communication,
              collaboration, and adaptability. Skill2Rural focuses on preparing
              students for the dynamic challenges of the modern workforce.
            </p>
          </div>
          <div className="flex items-start mb-4">
            <Image src={number2} alt="number2" className="mr-5" />
            <p>
              Have access to world-class facilitators who will bring a blend of
              lived experience and share practical experiences to thrive in the
              21st-century skills workforce. Learn from those who have gone
              ahead and share similar experiences as you.
            </p>
          </div>
          <div className="flex items-start mb-4">
            <Image src={number3} alt="number3" className="mr-5" />
            <p>
              Engage in immersive, real-world scenarios during in-person
              bootcamps. This hands-on experience provides practical insights
              and allows students to apply their knowledge in a simulated
              professional environment.
            </p>
          </div>
          <div className="flex items-start">
            <Image src={number4} alt="number4" className="mr-5" />
            <p>
              Gain certification through our 21st-century and life skills
              courses that would not only get you into the workforce but allow
              you to transition into more fulfilling roles.
            </p>
          </div>
        </div>
        <button className="bg-primary text-white w-[15rem] h-[3.75rem] py-2 rounded-btn font-bold">
          Get Started Now
        </button>
      </div>
    </div>
  );
};

const EducatorInfo = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-y-0 gap-y-8">
      <Image src={womanWithComputer} alt="womanComputer" height={716} />
      <div className="self-end">
        <div className="mb-12">
          <div className="flex items-start mb-4">
            <Image src={number1} alt="number1" className="mr-5" />
            <p>
              Support your students in acquiring essential skills demanded by
              today&apos;s job market, including critical thinking,
              problem-solving, communication, collaboration, and adaptability.
              Skill2Rural focuses on preparing students for the dynamic
              challenges of the modern workforce.
            </p>
          </div>
          <div className="flex items-start mb-4">
            <Image src={number2} alt="number2" className="mr-5" />
            <p>
              Have access to world-class facilitators who will bring a blend of
              lived experience and share practical experiences to thrive in the
              21st-century skills workforce. Learn from those who have gone
              ahead and shared similar experiences as you.
            </p>
          </div>
          <div className="flex items-start mb-4">
            <Image src={number3} alt="number3" className="mr-5" />
            <p>
              Enhance your facilitation skills through cascading the courses to
              your students. Facilitation skills are essential for professional
              and personal development in the 21st century. You can explore the
              resources from SessionLab to develop your facilitation skills.
            </p>
          </div>
          <div className="flex items-start">
            <Image src={number4} alt="number4" className="mr-5" />
            <p>
              By gaining certification through the platform for your
              contribution to community and education development, you are
              creating or generating impact or projects that can be added to
              your CV.
            </p>
          </div>
        </div>
        <button className="bg-primary text-white w-[15rem] h-[3.75rem] py-2 rounded-btn font-bold">
          Get Started Now
        </button>
      </div>
    </div>
  );
};
