"use client";
import React from "react";
import dotDesign1 from "@/public/dots-home-hero.svg";
import arc from "@/public/arc.svg";

import Image from "next/image";

const Hero = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <div className="h-[80vh]  bg-white relative overflow-hidden">
      <div className="flex flex-col justify-center absolute top-0 z-20 w-full h-full">
        <div className=" mt-40">
          <div className="flex justify-center ">
            <div className="w-[50%] relative">
              <div className="relative h-[9.5625rem]">
                <p className="text-[4rem] leading-[4.8rem] text-center mt-4 font-semibold text-primaryBlack absolute top-0">
                  Bridging Opportunities, Transforming Lives
                </p>
                <p className="text-[4rem] leading-[4.8rem] text-center mt-4 font-semibold text-pinkText text-opacity-30 absolute left-1 top-1">
                  Bridging Opportunities, Transforming Lives
                </p>
              </div>
              <Image
                src={dotDesign1}
                alt="dot-1"
                className="absolute top-0 -right-12"
              />
            </div>
          </div>
          <div className=" flex justify-center">
            <p className="w-[60%] text-2xl leading-[1.8rem] text-center mt-12 font-medium">
              Welcome to a revolution in education! Skill2Rural Bootcamp is not
              just a program; it&apos;s a pathway to your brighter future.
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <button className="bg-primary text-white w-[15rem] h-[3.75rem] py-2 rounded-btn font-semibold">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1/2-screen w-full rounded-b-3xl bg-green"></div> */}
      <div className=" rounded-b-[70vw] absolute -top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[70vw] w-[140vw] bg-greyBg2"></div>
      {/* <div className="absolute left-0 right-0 -top-16 bg-greyBg2 h-[100vw] w-[100vw] z-0 rounded-circle"></div> */}
    </div>

    // <div className="container mx-auto mt-8">
    //   <h1 className="text-center text-2xl font-bold mb-4">Animated Carousel</h1>
    //   <Carousel
    //     items={items.map((item, index) => (
    //       <div key={index}>{item}</div>
    //     ))}
    //   />
    // </div>
  );
};

export default Hero;
