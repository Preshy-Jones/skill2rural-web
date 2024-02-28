"use client";
import React from "react";
import Carousel from "../Carousel";
import dotDesign1 from "@/public/dots-home-hero.svg";

import Image from "next/image";

const Hero = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <div className="h-[80vh] flex flex-col justify-center font-neue">
      <div>
        <div className="flex justify-center">
          <div className="w-[50%] relative">
            <p className="text-[4rem] leading-[4.8rem] text-center mt-4 font-semibold text-primaryBlack">
              Bridging Opportunities, Transforming Lives
            </p>
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
