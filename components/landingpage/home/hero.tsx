"use client";
import React from "react";
import MobileHalfCircle from "../mobileHalfCircle";
import HalfCircle from "../halfCircle";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { HomeHeroText } from "./HeroText";

const Hero = () => {
  const { status } = useSession();

  return (
    <div className="relative ">
      <div
        className="absolute top-0 left-0 w-full h-auto max-h-[50vh]"
        style={{ zIndex: 0 }}
      >
        <MobileHalfCircle />
        <HalfCircle />
      </div>
      <div>
        <div
          className="relative h-[35vh] md:h-[40vh] lg:h-[45vh] flex justify-end flex-col pb-[2rem] lg:pb-[5rem] items-center"
          style={{ zIndex: 10 }}
        >
          <HomeHeroText />
          <p className="text-center text-[14px] md:text-[20px] lg:text-[24px] font-normal w-[80%] md:w-[50%]">
            Welcome to a revolution in education! Skill2Rural Bootcamp is not
            just a program; it&apos;s a pathway to your brighter future.
          </p>
        </div>

        {/* Button  */}
        <div className="flex justify-center md:mt-6">
          {status === "authenticated" ? (
            <Link href={"/dashboard/courses"}>
              <button className="bg-primary text-white w-[15rem] h-[3.75rem] py-2 rounded-btn font-semibold sm:text-base text-sm sm:leading-fifth leading-seventh">
                View Dashboard
              </button>
            </Link>
          ) : (
            <Link href={"/register"}>
              <button className="bg-primary text-white w-[15rem] h-[3.75rem] py-2 rounded-btn font-semibold sm:text-base text-sm sm:leading-fifth leading-seventh">
                Get Started Now
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
