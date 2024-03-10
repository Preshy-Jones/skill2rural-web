import React from "react";
import studentsImage from "@/public/students.svg";
import lightBulbLogo from "@/public/light-bulb.svg";
import arrowPracticeLogo from "@/public/arrow-target-practice.svg";
import Image from "next/image";

const Info = () => {
  return (
    <div>
      <div className="flex justify-center mb-20">
        <div className="w-[85.56%] flex mt-14">
          <div className="relative mr-8">
            <div className="bg-infoBg px-6 relative z-20 h-[12.3125rem] rounded-lgx border border-primary flex items-center">
              <div className="relative mb-8 h-[3.6875rem] w-[3.6875rem] mr-16">
                <div className="bg-white flex justify-center w-[3.5rem] h-[3.5rem] absolute top-0 inset-x-0 mx-auto z-10">
                  <Image src={lightBulbLogo} alt="lightBulbLogo" />
                </div>
                <div className="bg-primary w-[3.5rem] h-[3.5rem] absolute top-1 right-0 left-1 mx-auto z-0 rounded-tertiary"></div>
              </div>
              <p className="leading-fifth font-semibold text-primaryBlack">
                A social enterprise that adopts blended learning (ed-tech and
                in-person bootcamp) to prepare underserved young people in
                Africa and the UK such as displaced young people, and young
                people from low-income communities for the 21st-century
                workforce.
              </p>
            </div>
            <div className="absolute top-2 left-1.5 z-0 w-full px-6 h-[12.3125rem] rounded-lgx border bg-primary mr-8 flex items-center"></div>
          </div>
          <div className="relative mr-8">
            <div className="bg-infoBg px-6 h-[12.3125rem] rounded-lgx border border-primary flex items-center z-20 relative">
              <div className="relative mb-8 h-[3.6875rem] w-[3.6875rem] mr-16">
                <div className="bg-white flex justify-center w-[3.5rem] h-[3.5rem] absolute top-0 inset-x-0 mx-auto z-10">
                  <Image src={arrowPracticeLogo} alt="lightBulbLogo" />
                </div>
                <div className="bg-primary w-[3.5rem] h-[3.5rem] absolute top-1 right-0 left-1 mx-auto z-0 rounded-tertiary"></div>
              </div>
              <p className="leading-fifth font-semibold text-primaryBlack">
                Our story is one of passion, purpose, and a deep commitment to
                empowering underserved youth. It aims to prepare 1 million
                underserved young people by 2030 for the workforce and with the
                21st-century skills needed to integrate into the workforce.
              </p>
            </div>
            <div className="absolute top-2 left-1.5 z-0 w-full px-6 h-[12.3125rem] rounded-lgx border bg-primary mr-8 flex items-center"></div>
          </div>
        </div>
      </div>
      <div className=" flex justify-between w-[94.44%] items-center">
        <Image src={studentsImage} alt="studentsImage" className="w-[49.78%]" />
        <div className="w-[46.18%]">
          <p className="font-semibold mb-8">
            Our tech platform is a simple-to-use digital platform for
            facilitators and young people to explore courses that enable them to
            develop life and 21st-century skills.
          </p>
          <p className="font-semibold mb-8">
            Once you complete all the modules, you will earn a certification
            from us showing that you are ready to engage with the workforce and
            take your personal and development journey into your hands.
          </p>
          <p className="font-semibold mb-8">
            For facilitators: you don&apos;t necessarily need to take the
            course, however, the resources can guide you to support your
            students or young people within your community. Get started below.{" "}
          </p>
          <p className="font-semibold">
            For young people: get started and earn certification toward starting
            your journey to personal and professional development
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
