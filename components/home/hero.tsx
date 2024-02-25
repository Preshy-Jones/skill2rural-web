import React from "react";

const Hero = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center font-neue">
      <div>
        <p className="text-[4rem] leading-[4.8rem] text-center mt-4 font-semibold text-primaryBlack">
          Bridging Opportunities, Transforming Lives
        </p>
        <p className=" text-2xl leading-[1.8rem] text-center mt-12 font-medium">
          Welcome to a revolution in education! Skill2Rural Bootcamp is not just
          a program; it&apos;s a pathway to your brighter future.
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
