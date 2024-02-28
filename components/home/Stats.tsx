"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Stats = () => {
  return (
    // <div className="logos">
    //   <div className="logos-slide">
    //     {content.map((data, index) => (
    //       <div key={index} className="">
    //         <h3 className=" text-6xl text-primaryBlack font-bold">
    //           {data.value}
    //         </h3>
    //         <h3 className=" text-2xl font-medium text-primaryBlack">
    //           {data.title}
    //         </h3>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div
      x-data="{}"
      x-init="$nextTick(() => {
            let ul = $refs.logos;
            ul.insertAdjacentHTML('afterend', ul.outerHTML);
            ul.nextSibling.setAttribute('aria-hidden', 'true');
        })"
      className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <ul
        x-ref="logos"
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        {content.map((data, index) => (
          <li key={index} className="">
            <h3 className=" text-6xl text-primaryBlack font-bold">
              {data.value}
            </h3>
            <h3 className=" text-2xl font-medium text-primaryBlack">
              {data.title}
            </h3>
          </li>
        ))}
        {/* <li>
          <img src="./3m.svg" alt="Facebook" />
        </li>
        <li>
          <img src="./budweiser.svg" alt="Disney" />
        </li>
        <li>
          <img src="./buzzfeed.svg" alt="Airbnb" />
        </li>
        <li>
          <img src="./forbes.svg" alt="Apple" />
        </li>
        <li>
          <img src="./mrbeast.svg" alt="Spark" />
        </li>
        <li>
          <img src="./menshealth.svg" alt="Samsung" />
        </li>
        <li>
          <img src="./barstool-store.svg" alt="Sass" />
        </li> */}
      </ul>
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
