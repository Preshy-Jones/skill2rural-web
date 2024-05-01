import React from "react";
import caretRight from "@/public/caret-right-plain.svg";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import wrongIcon from "@/public/wrong-icon.svg";
import correctIcon from "@/public/correct-icon.svg";

const Questions = () => {
  return (
    <div className="flex justify-center w-full font-neue">
      <div className="w-[89.51%] py-10">
        <div className="flex">
          <h3>My Learnings</h3>
          <Image src={caretRight} alt="caret-right" />
          <h3>Course</h3>
        </div>
        <div className="flex justify-between mt-6 mb-16">
          <h2 className=" font-semibold leading-primary text-2xl">
            Design Thinking
          </h2>
        </div>

        <div className=" mb-10">
          <h2 className=" font-semibold leading-ninth text-lg text-greyText font-neue mb-4">
            Practical Questions
          </h2>
          <h2 className="text-greyText2">Practical Questions - 4points</h2>
        </div>

        <div className="pl-2 w-5/6">
          {[3, 4, 5, 45, 5, 5, 5].map((_, index) => (
            <div key={index} className="mb-16">
              <div className="flex justify-between items-center">
                <div className="mb-4 text-greyText">
                  {index + 1}. Hello if i miss assignment deadline or fail an
                  assignment, i fail this course.
                </div>
                <div className="bg-primaryLightBg w-[3.875rem] h-[2.4375rem] flex items-center justify-center">
                  <h3 className="text-greyText font-medium leading-fifth">
                    1 point
                  </h3>
                </div>
              </div>
              <div className="flex">
                <Checkbox className="text-white data-[state=checked]:bg-checkbox mr-3 rounded-full" />
                <h3 className=" leading-fifth font-medium text-greyText">
                  True
                </h3>
              </div>
              <div className="flex">
                <Checkbox className="text-white data-[state=checked]:bg-checkbox mr-3 rounded-full" />
                <h3 className=" leading-fifth font-medium text-greyText">
                  False
                </h3>
              </div>
              <div className="bg-wrong bg-opacity-20 border-opacity-5 border-[0.5px] border-wrong px-6 py-2 mt-4 rounded-sm">
                <div className="flex items-center mb-2">
                  <Image src={wrongIcon} alt="wrong" className="mr-2" />
                  <h3 className=" text-sm leading-seventh text-wrong">
                    Incorrect
                  </h3>
                </div>
                <p className="text-greyText2 text-sm leading-seventh font-medium">
                  You didn&apos;t select an answer
                </p>
              </div>
              <div className="bg-correct bg-opacity-20 border-opacity-5 border-[0.5px] border-correct px-6 py-2 mt-4 rounded-sm">
                <div className="flex items-center mb-2">
                  <Image src={correctIcon} alt="correct" className="mr-2" />
                  <h3 className=" text-sm leading-seventh text-correct">
                    Incorrect
                  </h3>
                </div>
                <p className="text-greyText2 text-sm leading-seventh font-medium">
                  You didn&apos;t select an answer
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex">
          <button className="bg-primary h-[3.75rem] w-60  text-white rounded-btn mt-14 mr-4">
            Submit
          </button>
          <button className="border border-primary h-[3.75rem] w-60 text-primary rounded-btn mt-14">
            Return to course
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
