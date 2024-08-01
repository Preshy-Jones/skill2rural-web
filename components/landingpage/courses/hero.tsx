import Image from "next/image";
import React from "react";
import lightBulbLogo from "@/public/light-bulb.svg";
import arrowPracticeLogo from "@/public/arrow-target-practice.svg";
import dotDesignPurple from "@/public/courses-dots.svg";
import Link from "next/link";
import curvedArrow from "@/public/curved-arrow-2.svg";

const Hero = () => {
  return (
    <div className="h-[60vh] iphone:h-[70vh] iphone sm:h-[65vh] hero pt-[5rem] relative overflow-x-hidden overflow-y-hidden">
      <div className="flex flex-col justify-center items-center absolute top-0 z-20 w-full h-full">
        <div className=" mt-24 w-full">
          <h4 className=" text-[1.2rem] iphone:text-2xl leading-primary font-semibold text-center mb-4">
            Courses
          </h4>
          <div className="flex justify-center">
            <div className="sm:w-[60%] relative iphone:w-[80%] w-[95%]">
              <p className="text-[2rem] iphone:text-[3rem] leading-[3.6rem] w-full text-center mt-4 font-semibold text-primaryBlack">
                At Skill2Rural, Dreams find their wings
              </p>
              <Image
                src={dotDesignPurple}
                alt="dot-1"
                className="absolute iphone:top-0 top-3 iphone:-right-12 -right-2 w-[1.875rem] h-[1.875rem]"
              />
            </div>
          </div>
          <div className=" justify-center sm:flex hidden">
            <div className="flex justify-end w-[90%]">
              <Image
                src={curvedArrow}
                alt="curved-arrow"
                className="motion-safe:animate-bounce"
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
      <div className=" rounded-b-[70vw] absolute top-[10%] sm:-top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[70vw] w-[140vw] bg-greyBg2"></div>
    </div>
  );
};

export default Hero;
