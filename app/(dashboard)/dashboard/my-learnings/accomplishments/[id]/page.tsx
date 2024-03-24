import Image from "next/image";
import caretRight from "@/public/caret-right-plain.svg";
import verifiedTick from "@/public/verified-tick.svg";
import certificate from "@/public/certificate.svg";
import certifiedLogo from "@/public/certified-logo.svg";
import React from "react";

const AcommplishmentDetails = () => {
  return (
    <div className="flex justify-center w-full font-neue">
      <div className="w-[89.51%] py-10">
        <div className="flex mb-14">
          <h3>My Learnings</h3>
          <Image src={caretRight} alt="caret-right" />
          <h3>Accomplishments</h3>
        </div>
        <div className="flex">
          <div className="relative w-[3.5rem] h-[3.5rem] mr-4">
            <Image
              className="rounded-full w-full h-full "
              alt="profile-picture"
              src="https://preshyjonesbucket.s3.eu-west-1.amazonaws.com/photo_2023-09-29+11.13.53.jpeg"
              width={56}
              height={56}
            />
            <Image
              src={verifiedTick}
              alt="verified-tick"
              className="absolute bottom-0 right-0"
            />
          </div>
          <div className="">
            <h1 className="font-inter">Emmanuel Adebayo</h1>
            <h2 className="text-greyText4 font-inter">
              emmanueladebayo@gmail.com
            </h2>
          </div>
        </div>
        <div className="flex justify-between font-neue mt-12">
          <div className="bg-white self-start pl-5 w-[38.9%] rounded-lgx py-6">
            <h2 className=" font-semibold text-lg leading-ninth mb-4">
              Design Thinking Certificate
            </h2>
            <div className=" font-medium text-sm mb-9">
              <h2 className="leading-seventh mb-2">
                Completed on February 10, 2024
              </h2>
              <h2 className="leading-seventh mb-2">Grade Achieved: 90%</h2>
              <h2 className="leading-seventh mb-2">1 hour approximately </h2>
            </div>
            <div className="flex">
              <Image
                src={certifiedLogo}
                alt="certified-logo"
                className="mr-3"
              />
              <h2>Completed by Emmanuel Adebayo</h2>
            </div>
          </div>
          <div className="w-[58.74%]">
            <Image src={certificate} alt="certificate" />
            <button className=" bg-primary text-white leading-fifth font-semibold w-[15rem] h-[3.75rem] rounded-[6.25rem] mt-16">
            Download Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcommplishmentDetails;
