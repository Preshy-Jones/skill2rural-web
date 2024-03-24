import Image from "next/image";
import React, { useState } from "react";
import caretDown from "@/public/caret-down.svg";
import sortIcon from "@/public/sort-icon.svg";
import window from "@/public/windom.svg";
import designThinking from "@/public/design-thinking.svg";
import moneyInPurse from "@/public/money-purse.svg";
import sdgs from "@/public/sdgs.svg";
import rightArrow from "@/public/arrow-right.svg";
import { Progress } from "@/components/ui/progress";

const MyLearningCoursesSection = () => {
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
      <h2 className=" font-medium text-2xl leading-primary mt-4">
        Continue Watching
      </h2>
      <div className="flex justify-between">
        <p className=" font-medium">1 out of 3 completed</p>
        <div className="flex items-center">
          <p className=" tracking-[0,1px]">
            Sort by:
            <span className=" font-semibold leading-tenth">Latest item</span>
          </p>
          <Image src={caretDown} alt="sort-icon" className="mx-3" />
          <Image src={sortIcon} alt="sort-icon" className="mx-3" />
          <Image src={window} alt="sort-icon" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-12 mt-12">
        {contentKey.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer border border-borderGrey rounded-lg px-3 py-3 hover:shadow-form bg-white`}
          >
            <Image src={contentKey[index].image} alt={item.title} />
            <div className="py-3">
              <h2 className="font-medium text-xl leading-fourth">
                {item.title}
              </h2>
              <h4 className="text-sm leading-seventh text-greyText">
                Earn a certificate
              </h4>
            </div>
            <div className="mb-4">
              <h3 className=" font-medium text-xs leading-tenth">
                40% Complete
              </h3>
              <Progress value={33} className="h-[0.375rem] bg-textFourth" />
            </div>
            <div className="flex justify-end items-center">
              <h2 className="text-end text-primary text-xs leading-[14px] font-semibold">
                Continue Watching
              </h2>
              <Image alt="right-arrow" src={rightArrow} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyLearningCoursesSection;

export enum CourseStatus {
  ONGOING = "ongoing",
  COMPLETED = "completed",
}

export const contentKey = [
  {
    title: "Design Thinking",
    image: designThinking,
  },
  {
    title: "Servant Leadership",
    image: moneyInPurse,
  },
  {
    title: "Vision Boarding",
    image: designThinking,
  },
  {
    title: "Sustainable Development Goals",
    image: sdgs,
  },
  {
    title: "Sustainable Development Goals",
    image: sdgs,
  },
  {
    title: "Money Management",
    image: moneyInPurse,
  },
];