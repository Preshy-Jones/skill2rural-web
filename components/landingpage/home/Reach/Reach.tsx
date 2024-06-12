import React from "react";
import collegeStudentsImage from "@/public/african-college-student.svg";
import dotDesign2 from "@/public/dots-home-hero-2.svg";
import dotDesign3 from "@/public/dots-home-hero-3.svg";
import Image from "next/image";
import Stats from "./Stats";

const Reach = () => {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
  ];
  return (
    <div className="font-neue">
      <div className="w-full flex justify-center">
        <div className="flex justify-between w-[90%]">
          <Image src={dotDesign2} alt="dotDesign2" className="sm:w-auto sm:h-auto w-[1.25rem] h-[1.25rem]" />
          <Image
            src={dotDesign3}
            alt="dotDesign2"
            className="sm:mr-16 -mb-24 sm:-mb-16 z-10 sm:w-auto sm:h-auto w-[2.6875rem] h-[1.333125rem]"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Image src={collegeStudentsImage} alt="collegeStudentsImage" className="w-[90%] sm:w-full" />
      </div>
      <div className="pt-16 bg-greyBg2">
        <h3 className="text-center text-lg sm:text-3.5xl leading-[2.4rem] font-semibold text-primaryBlack mb-6">
          REACH
        </h3>
        <Stats />
        {/* <CarouselContainer items={items} /> */}
      </div>
    </div>
  );
};

export default Reach;
