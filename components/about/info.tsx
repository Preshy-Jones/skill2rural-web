import React from "react";
import studentsImage from "@/public/students.svg";
import Image from "next/image";

const Info = () => {
  return (
    <div>
      <div className=" flex justify-between w-[94.44%] items-center">
        <Image src={studentsImage} alt="studentsImage" className="w-[49.78%]" />
        <div className="w-[46.18%]">
          <p className="font-semibold mb-8">
            Our tech platform is a simple-to-use digital platform for
            facilitators and young people to explore courses that enable them to
            develop life and 21st-century skills.
          </p>
          <p className="font-semibold mb-8">
            Once you complete all the modules, you will earn a certification
            from us showing that you are ready to engage with the workforce and
            take your personal and development journey into your hands.
          </p>
          <p className="font-semibold mb-8">
            For facilitators: you don&apos;t necessarily need to take the course,
            however, the resources can guide you to support your students or
            young people within your community. Get started below.{" "}
          </p>
          <p className="font-semibold">
            For young people: get started and earn certification toward starting
            your journey to personal and professional development
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
