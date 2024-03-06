import Image from "next/image";
import React from "react";
import lightBulbLogo from "@/public/light-bulb.svg";
import arrowPracticeLogo from "@/public/arrow-target-practice.svg";
import dotDesign1 from "@/public/dots-home-hero.svg";
import curvedArrow from "@/public/curved-arrow.svg";

const Hero = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center font-neue">
      <div>
        <h4 className=" text-2xl leading-primary font-semibold text-center text-black">
          About Us
        </h4>
        <div className="flex justify-center">
          <div className="w-[50%] relative">
            <p className="text-[4rem] leading-[4.8rem] text-center mt-4 font-semibold text-primaryBlack">
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
          <div className="w-[93%] flex justify-end">
            <Image src={curvedArrow} alt="curved-arrow" />
          </div>
        </div>

        <p className="text-center leading-primary font-semibold text-2xl">
          Skill2Rural Bootcamp is an initiative of Kayode Alabi Leadership and
          Career Initiative:
        </p>
      </div>
      <div className="flex justify-center">
        <div className="w-[85.56%] flex mt-14">
          <div className="bg-infoBg px-6 py-6 rounded-lgx border border-primary mr-8 flex items-center">
            <div className="relative mb-8 h-[3.6875rem] w-[3.6875rem] mr-16">
              <div className="bg-white flex justify-center w-[3.5rem] h-[3.5rem] absolute top-0 inset-x-0 mx-auto z-10">
                <Image src={lightBulbLogo} alt="lightBulbLogo" />
              </div>
              <div className="bg-primary w-[3.5rem] h-[3.5rem] absolute top-1 right-0 left-1 mx-auto z-0 rounded-tertiary"></div>
            </div>

            <p className="leading-fifth font-semibold text-primaryBlack">
              Embrace a comprehensive learning experience that goes beyond
              textbooks. Acquire skills that matter in the real world.
            </p>
          </div>
          <div className="bg-infoBg px-6 py-6 rounded-lgx border border-primary flex items-center">
            <div className="relative mb-8 h-[3.6875rem] w-[3.6875rem] mr-16">
              <div className="bg-white flex justify-center w-[3.5rem] h-[3.5rem] absolute top-0 inset-x-0 mx-auto z-10">
                <Image src={arrowPracticeLogo} alt="lightBulbLogo" />
              </div>
              <div className="bg-primary w-[3.5rem] h-[3.5rem] absolute top-1 right-0 left-1 mx-auto z-0 rounded-tertiary"></div>
            </div>

            <p className="leading-fifth font-semibold text-primaryBlack">
              Embrace a comprehensive learning experience that goes beyond
              textbooks. Acquire skills that matter in the real world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
