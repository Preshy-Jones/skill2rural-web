import React from "react";
import flowers from "@/public/flowers.svg";
import Image from "next/image";

const InfoCard = () => {
  return (
    <div className=" text-white mt-6">
      <div className=" bg-primary w-[64%] pt-12 pl-4 rounded-2xc flex">
        <div>
          <h3 className=" font-bold leading-6 text-xl">Skill2Rural Bootcamp</h3>
          <p className=" text-3.5xl font-light leading-tertiary">
            Sharpen Your Skills with Professional Online Courses
          </p>
        </div>
        <Image src={flowers} alt="flowers" />
      </div>
    </div>
  );
};

export default InfoCard;
