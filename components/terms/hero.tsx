import Image from "next/image";
import React from "react";
import lightBulbLogo from "@/public/light-bulb.svg";
import arrowPracticeLogo from "@/public/arrow-target-practice.svg";

const Hero = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center font-neue">
      <div>
        <h4 className=" text-2xl leading-primary font-semibold text-center">
          Legal
        </h4>
        <p className="text-[4rem] leading-[4.8rem] text-center mt-4 font-semibold text-primaryBlack">
          At Skill2Rural, Dreams find their wings
        </p>
      </div>
    </div>
  );
};

export default Hero;
``