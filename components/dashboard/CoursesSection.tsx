import React from "react";
import designThinking from "@/public/design-thinking.svg";
import moneyInPurse from "@/public/money-purse.svg";
import sdgs from "@/public/sdgs.svg";
import Image, { StaticImageData } from "next/image";
import freeIcon from "@/public/free.svg";
import { Course } from "@/types/course";
import Link from "next/link";

const CoursesSection = ({ courses }: { courses: Course[] }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-12 mt-12">
        {courses.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer border border-borderGrey rounded-lg px-3 py-3 hover:shadow-form`}
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
            <div className="w-full h-full">
              <div className="py-3 ">
                <h2 className="font-medium text-xl leading-fourth">
                  {item.title}
                </h2>
                <h4 className="text-sm leading-seventh text-greyText">
                  Earn a certificate
                </h4>
              </div>
              <Link
                href={`/dashboard/courses/${item.id}`}
                className="text-end text-primary text-sm leading-seventh"
              >
                View Course
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;

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
