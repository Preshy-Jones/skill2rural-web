import React from "react";
import bgImage from "../../../public/action-section-bg.svg";
import Image from "next/image";
import hammed from "../../../public/hammed.svg";
import Link from "next/link";

const ActionSection = () => {
  return (
    <div
      className="mx-[1rem] lg:mx-[4rem] my-[4rem] md:h-[470px] p-5 rounded-[20px] flex flex-col justify-center items-center py-10 mt-[7rem]"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <Image src={bgImage} alt="" className="absolute z-10" /> */}
      <div className="flex flex-col justify-center items-center text-white">
        <h1 className="w-[90%] md:w-[70%] text-center text-[20px] md:text-[32px] font-semibold text-white leading-9">
          If you need a career companion, coach, advisor or counsellor, Rafiki
          can be all for you and can walk with you on your career journey. You
          do not have to walk alone
        </h1>
        <div className="my-5 flex gap-5 items-center">
          <Image src={hammed} alt="" />
          <div>
            <p className="font-pinkBloom text-[40px]">Hammed Kayode Alabi</p>
            <p className="text-[14px] font-semibold">
              FOUNDER & CEO, SKILL2RURAL
            </p>
          </div>
        </div>
        <div className="font-semibold text-[16px] md:space-x-5 space-x-0  mt-6 space-y-5">
          <button className="text-primary w-full md:w-fit bg-white px-[5rem] py-3 rounded-[100px]">
            Try Rafiki Now
          </button>

          <Link href={"/register"}>
            <button className="border w-full md:w-fit px-10 py-3 rounded-[100px]">
              Sign up on Skill2Rural
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActionSection;
