"use client";
import React from "react";
import dotDesign1 from "@/public/dots-home-hero.svg";
import dotDesign1Mobile from "@/public/dots-home-hero-mobile.svg";
import arc from "@/public/arc.svg";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <div className="h-[55vh] sm:h-[80vh] hero pt-[5rem] relative  overflow-x-hidden">
      <div className="flex sm:flex-col justify-center absolute sm:top-0 iphone:top-40 top-20 z-20 w-full h-full">
        <div className=" xl:mt-40 bridge">
          <div className="flex justify-center">
            <div className="sm:w-[50%] relative w-full">
              <div className="relative h-[9.5625rem] iphone:bottom-28 lgx:bottom-10 1.5xl:bottom-0 xl:bottom-10">
                <p className=" text-[2rem] iphone:text-[3.5rem] sm:text-[4rem] iphone:leading-[3rem] leading-tertiary sm:leading-[4.8rem] text-center mt-4 font-semibold text-primaryBlack absolute top-0">
                  Bridging Opportunities, Transforming Lives
                </p>
                <p className=" text-[2rem] iphone:text-[3.5rem] sm:text-[4rem] iphone:leading-[3rem] leading-tertiary sm:leading-[4.8rem] text-center mt-4 font-semibold text-pinkText text-opacity-30 absolute left-1 top-1">
                  Bridging Opportunities, Transforming Lives
                </p>
              </div>
              <Image
                src={dotDesign1}
                alt="dot-1"
                className="absolute top-0 -right-12 sm:block hidden"
              />
              <Image
                src={dotDesign1Mobile}
                alt="dot-1"
                className="absolute -top-16 -right-28 sm:hidden block"
              />
            </div>
          </div>
          <div className=" flex justify-center">
            <p className="sm:w-[60%] iphone:text-2xl leading-[1.8rem] text-center sm:mt-16 font-medium">
              Welcome to a revolution in education! Skill2Rural Bootcamp is not
              just a program; it&apos;s a pathway to your brighter future.
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <Link href={"/register"}>
              <button className="bg-primary text-white w-[15rem] h-[3.75rem] py-2 rounded-btn font-semibold sm:text-base text-sm sm:leading-fifth leading-seventh">
                Get Started Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" rounded-b-[70vw] absolute top-[10%] sm:-top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[70vw] w-[140vw] bg-greyBg2"></div>
    </div>
  );
};

export default Hero;
