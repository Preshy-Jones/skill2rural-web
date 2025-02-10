"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Marquee from "react-fast-marquee";

const Stats = () => {
  return (
    <div>
      <div>
        <Marquee
          className="flex gap-10"
          gradientColor="black"
          gradientWidth="200px"
        >
          {content.map((data, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[150px] md:w-[240px]"
            >
              <h3 className=" sm:text-6xl text-3.5xl text-primaryBlack font-bold">
                {data.value}
              </h3>
              <h3 className="text-sm sm:text-2xl font-medium text-primaryBlack text-center">
                {data.title}
              </h3>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Stats;

const content = [
  {
    title: "Facilitators onboarded",
    value: "10+",
  },
  {
    title: "Communities",
    value: "17+",
  },
  {
    title: "Students & Youths",
    value: "100k+",
  },
  {
    title: "Courses uploaded",
    value: "7",
  },
  {
    title: "Hours of content",
    value: "100+",
  },
  {
    title: "Bootcamp",
    value: "13+",
  },
  {
    title: "Students reached",
    value: "50+",
  },
  {
    title: "Workshops",
    value: "30+",
  },
];
