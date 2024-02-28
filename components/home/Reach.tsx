import React from "react";
import collegeStudentsImage from "@/public/african-college-student.svg";
import dotDesign2 from "@/public/dots-home-hero-2.svg";
import dotDesign3 from "@/public/dots-home-hero-3.svg";
import Image from "next/image";
import Stats from "./Stats";

const Reach = () => {
  return (
    <div className="mb-64 font-neue">
      <div className="w-full flex justify-center">
        <div className="flex justify-between w-[90%]">
          <Image src={dotDesign2} alt="dotDesign2" />
          <Image
            src={dotDesign3}
            alt="dotDesign2"
            className="mr-16 -mb-16 z-10"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Image src={collegeStudentsImage} alt="collegeStudentsImage" />
      </div>
      <div className="mt-16">
        <h3 className="text-center text-3.5xl leading-[2.4rem] font-semibold text-primaryBlack mb-4">
          REACH
        </h3>
        <Stats />
      </div>
    </div>
  );
};

export default Reach;
