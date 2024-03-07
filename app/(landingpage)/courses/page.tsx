import MainSection from "@/components/courses/MainSection";
import Hero from "@/components/courses/hero";
import gradientBg from "@/public/gradient.svg";
import React from "react";

const Courses = () => {
  return (
    <div className="relative">
      <div className="z-10 relative">
        <Hero />
        <MainSection />
      </div>
      <div
        style={{
          backgroundImage: "url('/gradientBg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute top-[23.5rem] w-[100vw] h-[58.0625rem] flex justify-center z-0"
      ></div>
    </div>
  );
};

export default Courses;
