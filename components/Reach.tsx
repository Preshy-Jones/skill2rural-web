import React from "react";
import collegeStudentsImage from "@/public/african-college-student.svg";
import Image from "next/image";

const Reach = () => {
  return (
    <div className=" mb-64">
      <div className="flex justify-center">
        <Image src={collegeStudentsImage} alt="collegeStudentsImage" />
      </div>
      <div className="mt-16">
        <h3 className="text-center text-3.5xl leading-[2.4rem] font-bold text-primaryBlack mb-4">
          REACH
        </h3>
        <div className="flex justify-around">
          {content.map((data, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className=" text-6xl text-primaryBlack">{data.value}</h3>
              <h3 className=" text-2xl font-medium">{data.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reach;

const content = [
  {
    title: "Students reached",
    value: "50+",
  },
  {
    title: "Students reached",
    value: "7550+",
  },
  {
    title: "Facilitators onboarded",
    value: "10+",
  },
  {
    title: "Courses uploaded",
    value: "7",
  },
  {
    title: "Hours of content",
    value: "100+",
  },
  {
    title: "Bootcamp",
    value: "13+",
  },
  {
    title: "Workshops",
    value: "30+",
  },
  {
    title: "Communities",
    value: "17+",
  },
];
