import Image from "next/image";
import React, { useState } from "react";
import caretDown from "@/public/caret-down.svg";
import sortIcon from "@/public/sort-icon.svg";
import window from "@/public/windom.svg";

const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState("ongoing");
  const handleTabClick = (tab: CourseStatus) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="flex mt-6">
        <div className="relative h-[6.1875rem] w-[33.4375rem]">
          <div className="border border-black rounded-btn h-[5.1875rem] w-[33.4375rem] flex items-center px-4 absolute top-0 left-1/2 transform -translate-x-1/2 z-20 bg-white">
            <button
              className={`${
                activeTab === CourseStatus.ONGOING
                  ? "bg-primary text-white"
                  : "text-primary"
              } w-[15rem] h-[3.75rem] py-2 rounded-btn font-bold`}
              onClick={() => handleTabClick(CourseStatus.ONGOING)}
            >
              Ongoing
            </button>
            <button
              className={`${
                activeTab === CourseStatus.COMPLETED
                  ? "bg-primary text-white"
                  : "text-primary"
              } w-[15rem] h-[3.75rem] py-2 rounded-btn font-bold`}
              onClick={() => handleTabClick(CourseStatus.COMPLETED)}
            >
              Completed
            </button>
          </div>
          <div className="h-[5.1875rem] w-[33.4375rem] absolute top-1 left-1 bg-primary rounded-btn "></div>
        </div>
      </div>
      <h2>Continue Watching</h2>
      <div className="flex justify-between">
        <p>1 out of 3 completed</p>
        <div className="flex">
          <p className=" tracking-[0,1px]">
            Sort by:{" "}
            <span className=" font-semibold leading-tenth">Latest item</span>
          </p>
          <Image src={caretDown} alt="sort-icon" />
          <Image src={sortIcon} alt="sort-icon" />
          <Image src={window} alt="sort-icon" />
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;

export enum CourseStatus {
  ONGOING = "ongoing",
  COMPLETED = "completed",
}
