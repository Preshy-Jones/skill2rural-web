import React from "react";
import HeroText from "./HeroText";
import HalfCircle from "../halfCircle";
import MobileHalfCircle from "../mobileHalfCircle";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-auto">
          <MobileHalfCircle />
          <HalfCircle />
        </div>
        <div className="flex flex-col justify-end lg:h-[400px] xl:h-[50vh] 2xl:h-[60vh]">
          <div className="relative flex items-center justify-center">
            <div className="">
              <div className="h-auto mt-10 md:mt-[4rem] lg:mt-0">
                <HeroText />
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <p className="w-[90%] sm:w-[45%] lg:w-[50%] text-[16px] lg:text-[24px] md:text-[18px] leading-[1.8rem] text-center sm:mb-16 mt-[4rem] md:mt-0 font-light z-30">
              Africa&apos;s first GenAI career advisor for underserved and
              displaced young people.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[5rem] z-40">
        <button className="bg-primary text-white w-[15rem] h-[3.75rem] py-2 rounded-btn font-semibold sm:text-base text-sm sm:leading-fifth leading-seventh">
          Try Rafiki Now
        </button>
      </div>
    </div>
  );
}
