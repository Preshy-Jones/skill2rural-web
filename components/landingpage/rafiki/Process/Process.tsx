"use client";
import verification from "../../../../public/verification.svg";
import verificationMobile from "../../../../public/verificationMobile.svg";
import Image from "next/image";
import Step from "./Step";
import bot from "../../../../public/bot2.svg";
import { useEffect, useState } from "react";

const steps = [
  {
    number: 1,
    title: "Tell us about your interest",
    text: "Share what excites and motivates you.",
  },
  {
    number: 2,
    title: "Highlight your Strenghts",
    text: "Identify what you’re naturally good at.",
  },
  {
    number: 3,
    title: "Acknowledge your Limitations",
    text: "Recognize challenges to find the right fit",
  },

  {
    number: 4,
    title: "Define your Purpose",
    text: "Clarify the impact you want to make.",
  },
  {
    number: 5,
    title: "Get Personalised Career Options!",
    text: "Explore career paths tailored to you.",
  },
];

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
        className="hidden lg:flex absolute right-0 top-0 z-0"
        style={{ zIndex: 0 }}
      />
      <div className="flex justify-center">
        <Image
          src={verification}
          alt=""
          className="w-full hidden  md:flex h-auto"
        />
        <Image
          src={verificationMobile}
          alt=""
          className="w-full flex md:hidden"
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
          Try Rafiki Now
        </button>
      </div>
    </div>
  );
}
