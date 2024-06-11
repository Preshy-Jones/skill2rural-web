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
import Link from "next/link";
import { Course, GetUserEnrolledCourses } from "@/types/course";
import freeIcon from "@/public/free.svg";

const MyLearningCoursesSection = ({
  data,
}: {
  data: GetUserEnrolledCourses;
}) => {
  return (
    <div>
      <div className="flex mt-6">
        <div className="relative h-[6.1875rem] w-[33.4375rem]">
          <div className="border border-black rounded-btn h-[5.1875rem] w-[33.4375rem] flex items-center px-4 absolute top-0 left-1/2 transform -translate-x-1/2 z-20 bg-white">
            <button className="text-white bg-primary w-[15rem] h-[3.75rem] py-2 rounded-btn font-bold">
              Ongoing
            </button>
            <Link href={"/dashboard/my-learnings/accomplishments"}>
              <button className="text-primary w-[15rem] h-[3.75rem] py-2 rounded-btn font-bold">
                Completed
              </button>
            </Link>
          </div>
          <div className="h-[5.1875rem] w-[33.4375rem] absolute top-1 left-1 bg-primary rounded-btn "></div>
        </div>
      </div>
      <h2 className=" font-medium text-2xl leading-primary mt-4">
        Continue Watching
      </h2>
      <div className="flex justify-between">
        <p className=" font-medium">
          {data.number_of_completed_courses} out of{" "}
          {data.total_courses_enrolled} completed
        </p>
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
        {data.courses.map((item, index) => (
          <Link
            href={`my-learnings/course/${item.id}`}
            key={index}
            className={`cursor-pointer border border-borderGrey rounded-lg px-3 py-3 hover:shadow-form bg-white`}
          >
            <div className="w-full h-[15.75rem] relative">
              <Image
                className=" rounded-tl-lg rounded-tr-lg rounded-bl-primary rounded-br-primary"
                src={item.thumbnail_image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }} // optional
                alt={item.title}
                // width={342.67}
                // height={350}
              />
              <Image
                src={freeIcon}
                alt="free-icon"
                className="absolute top-3 right-3"
              />
            </div>
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
                {item.progress[0].progressPercentage}% complete
              </h3>
              <Progress
                value={item.progress[0].progressPercentage}
                className="h-[0.375rem] bg-textFourth"
              />
            </div>
            <div className="flex justify-end items-center">
              <h2>
                <h2 className="text-end text-primary text-xs leading-[14px] font-semibold">
                  Continue Watching
                </h2>
              </h2>
              <Image alt="right-arrow" src={rightArrow} />
            </div>
          </Link>
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
