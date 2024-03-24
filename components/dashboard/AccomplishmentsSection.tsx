import Image from "next/image";
import React, { useState } from "react";
import caretDown from "@/public/caret-down.svg";
import sortIcon from "@/public/sort-icon.svg";
import window from "@/public/windom.svg";
import anyImage from "@/public/designThinking.svg";
import { CourseStatus } from "./MyLearningCoursesSection";
import { Progress } from "../ui/progress";

const AccomplishmentsSection = () => {
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
        Accomplishments
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
      <div className="mt-12">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            className="bg-white flex items-center py-12 px-8 mb-4"
            key={index}
          >
            <Image
              alt="somimage"
              src={anyImage}
              className="w-[165px] h-[10rem] rounded-[0.264375rem] mr-4"
            />
            <div className="flex flex-col justify-between mr-4">
              <h2 className=" font-semibold leading-fifth mb-3">
                Design Thinking
              </h2>
              <p className="leading-fifth mb-4">
                Lorem ipsum dolor sit amet consectetur. Ut cursus in
                sollicitudin a rhoncus orci aliquam lacinia nisl. Morbi mi
                ultrices velit consectetur sed lectus nunc porta. Neque amet a
                sit id auctor congue vitae ultricies est. Senectus vestibulum
                adipiscing consectetur quis scelerisque elit. Lorem iaculis dui
                nibh ultrices neque ac gravida......
              </p>
              <div className="mb-4">
                <h3 className=" font-medium text-xs leading-tenth">
                  40% Complete
                </h3>
                <Progress value={33} className="h-[0.375rem] bg-textFourth" />
              </div>
              <h3 className="text-primary font-semibold text-lg leading-ninth">
                Free
              </h3>
            </div>
            <div>
              <button className="w-[9rem] h-[2.4375rem] font-semibold bg-primary px-2 text-white rounded-tertiary">
                View Certificate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccomplishmentsSection;