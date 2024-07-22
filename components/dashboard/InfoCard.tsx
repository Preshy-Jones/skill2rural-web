import React from "react";
import flowers from "@/public/flowers.svg";
import smallFlower from "@/public/small-flower.svg";
import Image from "next/image";

const InfoCard = () => {
  return (
    <div className=" text-white mt-6">
      <div className=" bg-primary w-[64%] h-[6.8125rem] sm:h-[13.0625rem] items-end pl-4 rounded-2xc flex  justify-between">
        <div className="sm:pb-[2.875rem] pb-[1.75rem]">
          <h3 className=" font-bold leading-6 text-base sm:text-xl">
            Skill2Rural Bootcamp
          </h3>
          <p className=" text-sm sm:text-3.5xl font-light leading-seventh sm:leading-tertiary">
            Sharpen Your Skills with Professional Online Courses
          </p>
        </div>
        <Image src={flowers} alt="flowers" className="sm:block hidden" />
        <Image src={smallFlower} alt="flowers" className="sm:hidden block" />
      </div>
    </div>
  );
};

export default InfoCard;
