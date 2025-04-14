"use client";
import mockup from "../../../../public/phoneMockUpWithoutQRCode.png";
import verificationMobile from "../../../../public/phoneMockupMobileWithoutQRCode.png";
import Image from "next/image";
import Step from "./Step";
import bot from "../../../../public/bot2.svg";
import React, { useEffect, useState } from "react";
import { steps } from "@/data/steps";
import Link from "next/link";

export default function Process() {
  const [visibleSteps, setVisibleSteps] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleSteps((prev) => {
        if (prev < steps.length) {
          return prev + 1;
        } else {
          return 1;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={
        "grid md:grid-cols-2 gap-10 md:gap-[5rem] px-[1rem] lg:px-[4rem] relative"
      }
    >
      <Image
        src={bot}
        alt=""
        className="absolute top-0 right-0 z-0 hidden lg:flex"
        style={{ zIndex: 0 }}
      />
      <div className="flex justify-center">
        <Image src={mockup} alt="" className="hidden w-full h-full md:flex" />
        <Image
          src={verificationMobile}
          alt=""
          className="flex w-full md:hidden"
        />
      </div>
      <div className="flex flex-col justify-between">
        <h1 className="text-[32px] md:text-[42px] font-bold mb-5 md:mb-0">
          How it Works
        </h1>
        <div className="space-y-5" style={{ zIndex: 40 }}>
          {steps.map((step, index) => (
            <Step
              key={step.number}
              title={step.title}
              text={step.text}
              number={step.number}
              isBlurred={index >= visibleSteps}
            />
          ))}
        </div>
        <button className="bg-primary text-white w-[200px] h-[48px] md:w-[15rem] md:h-[3.75rem] mt-10 py-2 rounded-btn font-semibold text-[9px] md:text-base text-sm sm:leading-fifth leading-seventh">
          <a
            href={
              "https://wa.me/+15557228341?text=Hello%20Rafiki%2C%20I%20need%20career%20guidance"
            }
            target="blank"
          >
            Try it now
          </a>
        </button>
      </div>
    </div>
  );
}
