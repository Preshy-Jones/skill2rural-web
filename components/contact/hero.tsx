import Image from "next/image";
import React from "react";
import lightBulbLogo from "@/public/light-bulb.svg";
import arrowPracticeLogo from "@/public/arrow-target-practice.svg";
import curvedArrow from "@/public/curved-arrow.svg";

const Hero = () => {
  return (
    <div className="pt-28 pb-12 flex flex-col justify-center font-neue">
      <div>
        <h4 className=" text-2xl leading-primary font-semibold text-center">
          Contact Us
        </h4>
        <p className="text-[4rem] leading-[4.8rem] text-center mt-4 font-semibold text-primaryBlack">
          At Skill2Rural, Dreams find their wings
        </p>
        <div className="flex justify-center">
          <div className="w-[93%] flex justify-end">
            <Image src={curvedArrow} alt="curved-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
