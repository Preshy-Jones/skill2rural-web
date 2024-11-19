"use client";
import MainSection from "@/components/landingpage/courses/MainSection";
import Hero from "@/components/landingpage/courses/hero";
import gradientBg from "@/public/gradient.svg";
import Image from "next/image";
import React from "react";

const Courses = () => {
  return (
    <div className="relative">
      <div className="z-10 relative">
        <Hero />
        <MainSection />
      </div>
      {/* <div
        // style={{
        //   backgroundImage: "url('/gradientBg.svg')",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
        className="absolute top-0 w-[100vw] h-[58.0625rem] bg-customGradient flex justify-center z-0"
      ></div> */}
      <Image
        src={gradientBg}
        alt="gradient-bg"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 w-[100vw] z-0"
      />
    </div>
  );
};

export default Courses;
