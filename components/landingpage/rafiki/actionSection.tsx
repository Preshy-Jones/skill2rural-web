import React from "react";
import bgImage from "../../../public/action-section-bg.svg";
import Image from "next/image";
import hammed from "../../../public/hammed.jpeg";
import Link from "next/link";

const ActionSection = () => {
  return (
    <section
      className="mx-[1rem] lg:mx-[4rem] my-[4rem] md:h-[470px] p-5 rounded-[20px] flex flex-col justify-center items-center py-10 mt-[7rem] relative"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 50,
      }}
    >
      {/* <Image src={bgImage} alt="" className="absolute z-10" /> */}
      <div className="flex flex-col items-center justify-center text-white">
        <h1 className="w-[90%] md:w-[70%] text-center text-[20px] md:text-[32px] font-semibold text-white leading-9">
          If you need a career companion, coach, advisor or counsellor, Rafiki
          can be all for you and can walk with you on your career journey. You
          do not have to walk alone
        </h1>
        <div className="flex items-center gap-5 my-5">
          <Image
            src={hammed}
            alt=""
            width={30}
            height={40}
            className="rounded-full w-[80px] h-[70px]  md:w-[70px] md:h-[70px]"
          />
          <div>
            <p className="font-pinkBloom text-[40px] leading-tight">
              Hammed Kayode Alabi
            </p>
            <p className="text-[14px] font-semibold">
              FOUNDER & CEO, SKILL2RURAL
            </p>
          </div>
        </div>
        <div className="font-semibold text-[16px] space-x-0 md:space-x-5 mt-6 ">
          <a
            href="https://wa.me/+15557228341?text=Hello%20Rafiki%2C%20I%20need%20career%20guidance"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary w-full md:w-fit bg-white px-[5rem] py-3 rounded-[100px] inline-block text-center"
          >
            Try it now
          </a>

          <Link href={"/register"}>
            <button className="border mt-[10px] md:mt-0 w-full md:w-fit px-10 py-3 rounded-[100px]">
              Sign up on Skill2Rural
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ActionSection;
