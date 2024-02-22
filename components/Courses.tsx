import React from "react";
import designThinking from "@/public/design-thinking.svg";
import moneyInPurse from "@/public/money-purse.svg";
import sdgs from "@/public/sdgs.svg";
import Image from "next/image";

const Courses = () => {
  return (
    <div className="mt-24 flex justify-center">
      <div className="w-[84.86%]">
        <h1 className="text-[2.625rem] leading-[3.15rem] text-center font-semibold">
          Courses
        </h1>
        <p className="text-center font-medium leading-fifth">
          The world is your classroom, Explore, Learn, Achieve knowledge knows
          no bounds. Online learning unleashed
        </p>
        <div className="grid grid-cols-3 gap-12 mt-12">
          {contentKey.map((item, index) => (
            <div
              key={index}
              className="border border-borderGrey rounded-lg px-2 py-2"
            >
              <Image src={contentKey[index].image} alt={item.title} />
              <div>
                <h2 className="font-medium text-xl leading-fourth">
                  Design Thinking
                </h2>
                <h4 className="text-sm ">Earn a certificate</h4>
              </div>
              <h2 className="text-end text-primary text-sm leading-seventh">
                View Course
              </h2>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button className="bg-primary text-white w-[15rem] h-[3.75rem] py-2 rounded-btn font-semibold">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;

const contentKey = [
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
