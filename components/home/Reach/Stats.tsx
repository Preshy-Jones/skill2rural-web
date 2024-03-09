"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Stats = () => {
  return (
    // <div
    //   x-data="{}"
    //   x-init="$nextTick(() => {
    //         let ul = $refs.logos;
    //         ul.insertAdjacentHTML('afterend', ul.outerHTML);
    //         ul.nextSibling.setAttribute('aria-hidden', 'true');
    //     })"
    //   classNameName="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    // >
    //   <ul
    //     x-ref="logos"
    //     classNameName="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
    //   >
    //     {content.map((data, index) => (
    //       <li key={index} classNameName="">
    //         <h3 classNameName=" text-6xl text-primaryBlack font-bold">
    //           {data.value}
    //         </h3>
    //         <h3 classNameName=" text-2xl font-medium text-primaryBlack">
    //           {data.title}
    //         </h3>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div className="slider">
      <div className="slide-track">
        {content.map((data, index) => (
          <div key={index} className="slide flex flex-col items-center">
            <h3 className=" text-6xl text-primaryBlack font-bold">
              {data.value}
            </h3>
            <h3 className=" text-2xl font-medium text-primaryBlack">
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
