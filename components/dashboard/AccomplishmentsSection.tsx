import Image from "next/image";
import React, { useState } from "react";
import caretDown from "@/public/caret-down.svg";
import sortIcon from "@/public/sort-icon.svg";
import window from "@/public/windom.svg";
import anyImage from "@/public/designThinking.svg";
import { CourseStatus } from "./MyLearningCoursesSection";
import { Progress } from "../ui/progress";
import Link from "next/link";
import { GetUserCertificates } from "@/types/course";
import freeIcon from "@/public/free.svg";
import rightArrow from "@/public/arrow-right.svg";

const AccomplishmentsSection = ({ data }: { data: GetUserCertificates }) => {
  return (
    <div>
      <div className="flex mt-6">
        <div className="relative h-[10.375rem] sm:h-[6.1875rem] w-full sm:w-[33.4375rem]">
          <div className="border border-black sm:pt-0 pt-4 rounded-[1.25rem] sm:rounded-btn h-[9.375rem] sm:h-[5.1875rem] w-full sm:w-[33.4375rem] flex sm:flex-row flex-col justify-center items-center px-4 absolute top-0 left-1/2 transform -translate-x-1/2 z-20 bg-white">
            <Link href={"/dashboard/my-learnings"}>
              <button className="text-primary w-[15rem] h-[3.75rem] py-2 rounded-btn font-bold">
                Ongoing
              </button>
            </Link>
            <div>
              <button className="text-white bg-primary w-[15rem] h-[3.75rem] py-2 rounded-btn font-bold">
                Completed
              </button>
            </div>
          </div>
          <div className="h-[9.375rem] sm:h-[5.1875rem] w-full sm:w-[33.4375rem] absolute top-1 left-1 bg-primary rounded-[1.25rem] sm:rounded-btn "></div>
        </div>
      </div>
      <h2 className=" font-medium text-2xl leading-primary mt-4">
        Accomplishments
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
      <div className="mt-12 sm:block hidden">
        {data.certificates.map((accomplishment, index) => (
          <div
            className="bg-white flex items-center py-12 px-8 mb-4"
            key={index}
          >
            <Image
              alt="somimage"
              src={anyImage}
              className="w-[165px] h-[10rem] rounded-[0.264375rem] mr-4 "
            />
            <div className="flex flex-col settings:flex-row ">
              <div className="flex flex-col justify-between mr-4 w-full">
                <h2 className=" font-semibold leading-fifth mb-3">
                  {accomplishment.course.title}
                </h2>
                <p className="leading-fifth mb-4">
                  {accomplishment.course.description}
                </p>
                <div className="mb-4">
                  <h3 className=" font-medium text-xs leading-tenth">
                    {accomplishment.course.progress[0].progressPercentage}%
                    Complete
                  </h3>
                  <Progress
                    value={accomplishment.course.progress[0].progressPercentage}
                    className="h-[0.375rem] bg-textFourth"
                  />
                </div>
                <h3 className="text-primary font-semibold text-lg leading-ninth">
                  Free
                </h3>
              </div>
              <div>
                <Link
                  href={`/dashboard/my-learnings/accomplishments/${accomplishment.course.id}`}
                >
                  <button className="w-[9rem] h-[2.4375rem] font-semibold bg-primary px-2 text-white rounded-tertiary">
                    View Certificate
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 sm:hidden grid  grid-cols-1">
        {data.certificates.map((item, index) => (
          <Link
          href={`/dashboard/my-learnings/accomplishments/${item.course.id}`}
            key={index}
            className={`cursor-pointer border border-borderGrey rounded-lg px-3 py-3 hover:shadow-form bg-white`}
          >
            <div className="w-full h-[15.75rem] relative">
              <Image
                className=" rounded-tl-lg rounded-tr-lg rounded-bl-primary rounded-br-primary"
                src={item.course.thumbnail_image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }} // optional
                alt={item.course.title}
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
                {item.course.title}
              </h2>
              <h4 className="text-sm leading-seventh text-greyText">
                Earn a certificate
              </h4>
            </div>
            <div className="mb-4">
              <h3 className=" font-medium text-xs leading-tenth">
                {item.course.progress[0].progressPercentage}% complete
              </h3>
              <Progress
                value={item.course.progress[0].progressPercentage}
                className="h-[0.375rem] bg-textFourth"
              />
            </div>
            <div className="flex justify-end items-center">
              <h2>
                <h2 className="text-end text-primary text-xs leading-[14px] font-semibold">
                  View Certificate
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

export default AccomplishmentsSection;
