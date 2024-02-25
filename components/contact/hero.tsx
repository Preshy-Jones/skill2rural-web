import Image from "next/image";
import React from "react";
import lightBulbLogo from "@/public/light-bulb.svg";
import arrowPracticeLogo from "@/public/arrow-target-practice.svg";

const Hero = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center font-neue">
      <div>
        <h4 className=" text-2xl leading-primary font-semibold text-center">
          Contact Us
        </h4>
        <p className="text-[4rem] leading-[4.8rem] text-center mt-4 font-semibold text-primaryBlack">
          At Skill2Rural, Dreams find their wings
        </p>

        <p className="text-center leading-primary font-semibold text-2xl mt-32">
          Skill2Rural Bootcamp is an initiative of Kayode Alabi Leadership and
          Career Initiative:
        </p>
      </div>
    </div>
  );
};

export default Hero;
