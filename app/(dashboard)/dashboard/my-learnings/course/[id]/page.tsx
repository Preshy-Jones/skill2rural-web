"use client";
import React, { useState } from "react";
import caretRight from "@/public/caret-right-plain.svg";
import expandVideoIcon from "@/public/expand-video-icon.svg";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Player } from "video-react";
import { motion } from "framer-motion";
import Details from "@/components/dashboard/Course/Details";
import Questions from "@/components/dashboard/Course/Questions";
import Reviews from "@/components/dashboard/Course/Reviews";
// import videoReactCss from "video-react/dist/video-react.css";
// import ReactPlayer from 'react-player'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const CourseDetailPage = () => {
  const options = ["Course details", "Questions", "Reviews"];
  const [active, setActive] = useState(0);
  return (
    <div className="flex justify-center w-full">
      <div className="w-[89.51%] py-10">
        <div className="flex">
          <h3>My Learnings</h3>
          <Image src={caretRight} alt="caret-right" />
          <h3>Course</h3>
        </div>
        <div className="flex justify-between mt-6 mb-4">
          <h2 className=" font-semibold leading-primary text-2xl">
            Design Thinking
          </h2>
          <Image src={expandVideoIcon} alt="expand-video" />
        </div>
        <ReactPlayer
          url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          controls
          width="640"
          height="360"
        />
        {/* <Player>
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        </Player> */}
        <div className="w-[40%]">
          <div className="grid grid-cols-3 pt-6">
            {options.map((item, index) => (
              <div
                key={index}
                className="h-[3rem] flex flex-col items-center justify-between w-full cursor-pointer"
                onClick={() => setActive(index)}
              >
                <h2
                  className={`${
                    index === active
                      ? "text-primary font-semibold"
                      : "text-greyText2"
                  }`}
                >
                  {item}
                </h2>
                {active === index && (
                  <motion.div
                    // animate={{ x: active === 1 ? "100%" : 0 }}
                    // transition={{ type: "tween", duration: 0.4 }}
                    layoutId="navbar"
                    className="h-[4px] bg-primary w-full rounded-md"
                  ></motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
        {active === 0 && <Details />}
        {active === 1 && <Questions />}
        {active === 2 && <Reviews />}
      </div>
    </div>
  );
};

export default CourseDetailPage;