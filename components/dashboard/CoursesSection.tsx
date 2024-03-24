import React from "react";
import designThinking from "@/public/design-thinking.svg";
import moneyInPurse from "@/public/money-purse.svg";
import sdgs from "@/public/sdgs.svg";
import Image from "next/image";

const CoursesSection = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-12 mt-12">
        {contentKey.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer border border-borderGrey rounded-lg px-3 py-3 hover:shadow-form`}
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
            <h2 className="text-end text-primary text-sm leading-seventh">
              View Course
            </h2>
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
