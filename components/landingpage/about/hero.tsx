import Image from "next/image";
import React from "react";
import dotDesign1 from "@/public/dots-home-hero.svg";
import curvedArrow from "@/public/curved-arrow.svg";

const Hero = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center font-neue relative overflow-hidden">
      <div className="flex flex-col justify-center items-center absolute top-0 z-20 w-full h-full">
        <div className=" mt-24 w-full">
          <h4 className=" text-2xl leading-primary font-semibold text-center mb-4">
            About Us
          </h4>
          <div className="flex justify-center">
            <div className="w-[50%] relative">
            <p className=" text-[2rem] iphone:text-[3.5rem] sm:text-[4rem] iphone:leading-[3rem] leading-tertiary sm:leading-[4.8rem] text-center mt-4 font-semibold text-primaryBlack absolute top-0">
                At Skill2Rural, Dreams find their wings
              </p>
              <Image
                src={dotDesign1}
                alt="dot-1"
                className="absolute top-0 -right-12"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex justify-end w-[90%]">
              <Image
                src={curvedArrow}
                alt="curved-arrow"
                className="motion-safe:animate-bounce"
              />
            </div>
          </div>

          <p className="text-center leading-primary font-semibold text-2xl">
            Skill2Rural Bootcamp is an initiative of Kayode Alabi Leadership and
            Career Initiative:
          </p>
        </div>
      </div>
      <div className="rounded-b-[70vw] absolute -top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[70vw] w-[140vw] bg-greyBg2"></div>
    </div>
  );
};

export default Hero;
