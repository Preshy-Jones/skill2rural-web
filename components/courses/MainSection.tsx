import Image from "next/image";
import React from "react";
import { contentKey } from "../home/Courses";

const MainSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[84.86%]">
        <h1 className="text-[2.875rem] font-bold">Our Courses</h1>
        <h3 className="text-2xl font-semibold">
          Learn from the best in the industry
        </h3>
        <div className="grid grid-cols-3 gap-12 mt-12">
          {contentKey.map((item, index) => (
            <div
              key={index}
              className="border border-borderGrey rounded-lg px-2 py-2"
            >
              <Image src={contentKey[index].image} alt={item.title} />
              <div className="py-3">
                <h2 className="font-medium text-xl leading-fourth">
                  Design Thinking
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
    </div>
  );
};

export default MainSection;
