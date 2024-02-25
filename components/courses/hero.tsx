import Image from "next/image";
import React from "react";
import lightBulbLogo from "@/public/light-bulb.svg";
import arrowPracticeLogo from "@/public/arrow-target-practice.svg";

const Hero = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center font-neue">
      <div>
        <h4 className=" text-2xl leading-primary font-semibold text-center">
          Courses
        </h4>
        <p className="text-[4rem] leading-[4.8rem] text-center mt-4 font-semibold text-primaryBlack">
          At Skill2Rural, Dreams find their wings
        </p>
        <div className="flex justify-center mt-6">
          <button className="bg-primary text-white w-[15rem] h-[3.75rem] py-2 rounded-btn font-semibold">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
