import Image from "next/image";
import React from "react";
import lightBulbLogo from "@/public/light-bulb.svg";
import arrowPracticeLogo from "@/public/arrow-target-practice.svg";
import dotDesignPurple from "@/public/courses-dots.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center font-neue relative overflow-hidden">
      <div className="flex flex-col justify-center items-center absolute top-0 z-20 w-full h-full">
        <div className=" mt-24 w-full">
          <h4 className=" text-2xl leading-primary font-semibold text-center mb-4">
            Courses
          </h4>
          <div className="flex justify-center">
            <div className="w-[60%] relative">
              <p className="text-[3rem] leading-[3.6rem] w-full text-center mt-4 font-semibold text-primaryBlack">
                At Skill2Rural, Dreams find their wings
              </p>
              <Image
                src={dotDesignPurple}
                alt="dot-1"
                className="absolute top-0 -right-12"
              />
            </div>
          </div>
          <div className="flex justify-center mt-24">
            <Link href={"/register"}>
              <button className="bg-primary text-white w-[15rem] h-[3.75rem] py-2 rounded-btn font-semibold">
                Get Started Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="rounded-b-[70vw] absolute -top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[70vw] w-[140vw] bg-greyBg2"></div>
    </div>
  );
};

export default Hero;
