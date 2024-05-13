import React from "react";
import skill2ruralLogo from "@/public/skill2rural-logo-certificate.svg";
import certificateOfCompletion from "@/public/certificate-of-completion.svg";
import Image from "next/image";

const Certificate = () => {
  return (
    <div className="bg-white">
      <div>
        <Image src={skill2ruralLogo} alt="skill2rural-logo" />
        <h3 className="text-xxs leading-[13.66px]">
          Lorem ipsum dolor sit amet consectetur
        </h3>
      </div>
      <Image src={certificateOfCompletion} alt="certificateOfCompletion" />
      <div className=" h-[0.09375rem[ bg-black"></div>
      <p>
        On the Completion of Course in PROJECT MANAGEMENT ipsum dolor isit amet,
        consectetur adipiscing elit, sed du eiusmod tempor incididunt ut labore
      </p>
      <div></div>
      <div className="flex justify-between">
        <h2>MANAGEMENT</h2>
        <h2>14-01-2023</h2>
      </div>
    </div>
  );
};

export default Certificate;
