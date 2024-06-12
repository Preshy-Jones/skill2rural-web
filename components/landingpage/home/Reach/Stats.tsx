"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Stats = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        {content.map((data, index) => (
          <div key={index} className="slide flex flex-col items-center">
            <h3 className=" sm:text-6xl text-3.5xl text-primaryBlack font-bold">
              {data.value}
            </h3>
            <h3 className="text-sm sm:text-2xl font-medium text-primaryBlack">
              {data.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;

const content = [
  {
    title: "Students reached",
    value: "50+",
  },
  {
    title: "Students reached",
    value: "7550+",
  },
  {
    title: "Facilitators onboarded",
    value: "10+",
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
    title: "Workshops",
    value: "30+",
  },
  {
    title: "Communities",
    value: "17+",
  },
];
