import React, { forwardRef } from "react";
import skill2ruralLogo from "@/public/skill2rural-logo-certificate.svg";
import certificateOfCompletion from "@/public/certificate-of-completion.svg";
import Image from "next/image";

interface CertificateProps extends React.HTMLProps<HTMLDivElement> {}

const Certificate = forwardRef<HTMLDivElement, CertificateProps>(
  (props, ref) => {
    return (
      <div className="bg-white w-[47rem] h-[30rem] absolute top-0" ref={ref}>
        <div></div>
        <div className=""></div>
        <div className="pl-16 pt-16 w-[75%]">
          <div className="mb-12">
            <Image src={skill2ruralLogo} alt="skill2rural-logo" />
            <h3 className="text-xxs leading-[13.66px]">
              Lorem ipsum dolor sit amet consectetur
            </h3>
          </div>
          <Image
            className="mb-12"
            src={certificateOfCompletion}
            alt="certificateOfCompletion"
          />
          <div className="h-[0.09375rem] w-[60%] bg-black"></div>
          <p className="mb-12">
            On the Completion of Course in PROJECT MANAGEMENT ipsum dolor isit
            amet, consectetur adipiscing elit, sed du eiusmod tempor incididunt
            ut labore
          </p>
          <div className=" h-[1px] bg-black w-[20%]"></div>
          <div className="flex justify-between">
            <h2>MANAGEMENT</h2>
            <h2>14-01-2023</h2>
          </div>
        </div>
      </div>
    );
  }
);

Certificate.displayName = "Certificate";

export default Certificate;
