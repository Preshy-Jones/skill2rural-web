"use client";
import Image from "next/image";
import caretRight from "@/public/caret-right-plain.svg";
import verifiedTick from "@/public/verified-tick.svg";
import certificateImage from "@/public/certificate.svg";
import certifiedLogo from "@/public/certified-logo.svg";
import React from "react";
import { useSession } from "next-auth/react";

import { useGetCertificate } from "@/queries/getCertificate";
import { convertToHourseAndMinutes, formatDate } from "@/utils";

const AcommplishmentDetails = ({
  params,
}: {
  params: {
    courseId: string;
  };
}) => {
  const { data: session } = useSession();

  const courseId = params.courseId;
  const {
    isLoading,
    isError,
    error,
    data: certificate,
    isSuccess,
  } = useGetCertificate(
    //@ts-ignore
    session?.user.token || "",
    courseId
  );

  //@ts-ignore
  if (isLoading || !session?.user.token) {
    return <div>Loading Accomplishments...</div>;
  }

  //@ts-ignore
  if (session.user.token && isSuccess && certificate) {
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
              <h1 className="font-inter">{certificate.user.name}</h1>
              <h2 className="text-greyText4 font-inter">
                {certificate.user.email}
              </h2>
            </div>
          </div>
          <div className="flex justify-between font-neue mt-12">
            <div className="bg-white self-start pl-5 w-[38.9%] rounded-lgx py-6">
              <h2 className=" font-semibold text-lg leading-ninth mb-4">
                {certificate.course.title}
              </h2>
              <div className=" font-medium text-sm mb-9">
                <h2 className="leading-seventh mb-2">
                  Completed on {formatDate(certificate.createdAt)}
                </h2>
                <h2 className="leading-seventh mb-2">
                  Grade Achieved: {certificate.gradeInPercentage}%
                </h2>
                <h2 className="leading-seventh mb-2">
                  {convertToHourseAndMinutes(certificate.course.duration)}{" "}
                  approximately{" "}
                </h2>
              </div>
              <div className="flex">
                <Image
                  src={certifiedLogo}
                  alt="certified-logo"
                  className="mr-3"
                />
                <h2>Completed by {certificate.user.name}</h2>
              </div>
            </div>
            <div className="w-[58.74%]">
              {/* <pre className="text-black">{JSON.stringify(certificate)}</pre> */}
              <Image src={certificateImage} alt="certificate" />
              <button className=" bg-primary text-white leading-fifth font-semibold w-[15rem] h-[3.75rem] rounded-[6.25rem] mt-16">
                Download Certificate
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AcommplishmentDetails;
