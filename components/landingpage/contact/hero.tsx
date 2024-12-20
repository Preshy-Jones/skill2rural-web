import Image from "next/image";
import React from "react";
import lightBulbLogo from "@/public/light-bulb.svg";
import arrowPracticeLogo from "@/public/arrow-target-practice.svg";
import curvedArrow from "@/public/curved-arrow.svg";
import dotDesign1 from "@/public/dots-home-hero.svg";

const Hero = () => {
  return (
    <div className="h-[55vh] sm:h-[80vh] flex flex-col justify-center font-neue relative overflow-hidden">
      <div className="flex flex-col justify-center items-center absolute top-0 z-20 w-full h-full">
        <div className=" mt-24  w-full">
          <h4 className=" text-[1.2rem] iphone:text-2xl leading-primary font-semibold text-center mb-4">
            Contact Us
          </h4>
          <div className="flex justify-center">
            <div className="sm:w-[50%] relative w-full">
              <p className="text-[2rem] iphone:text-[3rem] leading-[3.6rem] w-full text-center mt-4 font-semibold text-primaryBlack">
                At Skill2Rural, Dreams find their wings
              </p>
              <Image
                src={dotDesign1}
                alt="dot-1"
                className="absolute top-0 -right-12 "
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[93%] hidden sm:flex justify-end">
              <Image
                src={curvedArrow}
                alt="curved-arrow"
                className="motion-safe:animate-bounce"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded-b-[70vw] absolute top-[10%] sm:-top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[70vw] w-[140vw] bg-greyBg2"></div>
    </div>
  );
};

export default Hero;
