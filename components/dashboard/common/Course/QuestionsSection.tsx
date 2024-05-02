import { Button } from "@/components/ui/button";
import hyphen from "@/public/dash.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const QuestionsSection = ({ courseId }: { courseId: string }) => {
  return (
    <div className="font-neue mt-7">
      <h1 className="mb-2 text-3.5xl font-medium">Take Practice Quiz</h1>
      <Link href={`/dashboard/my-learnings/course/${courseId}/questions`}>
        <button className="bg-primary h-[3.75rem] text-white rounded-btn w-60 ">
          Start Quiz
        </button>
      </Link>
      <div className="border-t border-t-formInputBorder mt-10 border-b border-b-formInputBorder py-10 font-medium w-3/4">
        <div className="w-3/4">
          <div className=" flex justify-between mb-4">
            <h3 className="text-greyText leading-fifth">Receive Grade</h3>
            <h3 className=" leading-fifth">Your grade</h3>
          </div>
          <div className=" flex justify-between">
            <p className="text-greyText2  text-sm leading-seventh">
              To pass and be issued a certificate, you need a grade point of 70%
              and above.
            </p>
            <Image alt="dash" src={hyphen} className="mr-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsSection;
