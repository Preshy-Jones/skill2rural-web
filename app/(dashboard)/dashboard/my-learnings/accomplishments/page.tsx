"use client";
import AccomplishmentsSection from "@/components/dashboard/AccomplishmentsSection";
import InfoCard from "@/components/dashboard/InfoCard";
import { useGetUserCertificates } from "@/queries/useGetCourseCertificates";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Accomplishments = () => {
  const { data: session } = useSession();

  const { isLoading, isError, error, data, isSuccess } = useGetUserCertificates(
    //@ts-ignore
    session?.user.email || ""
  );

  //@ts-ignore
  if (isLoading || !session?.user.email) {
    const rows = Array(12).fill(null);
    return (
      <div className="w-full">
        <div className="flex mt-6">
          <div className="relative h-[10.375rem] sm:h-[6.1875rem] w-[21.0625rem] sm:w-[33.4375rem]">
            <div className="border border-black sm:pt-0 pt-4 rounded-[1.25rem] sm:rounded-btn h-[9.375rem] sm:h-[5.1875rem] w-[21.0625rem] sm:w-[33.4375rem] flex sm:flex-row flex-col justify-center items-center px-4 absolute top-0 left-1/2 transform -translate-x-1/2 z-20 bg-white">
              <Link href={"/dashboard/my-learnings"}>
                <button className="text-primary bg-white w-[15rem] h-[3.75rem] py-2 rounded-btn font-bold">
                  Ongoing
                </button>
              </Link>
              <div>
                <button className="text-white bg-primary w-[15rem] h-[3.75rem] py-2 rounded-btn font-bold">
                  Completed
                </button>
              </div>
            </div>
            <div className="h-[9.375rem] sm:h-[5.1875rem] w-[21.0625rem] sm:w-[33.4375rem] absolute top-1 left-1 bg-primary rounded-[1.25rem] sm:rounded-btn "></div>
          </div>
        </div>
        <h2 className=" font-medium text-2xl leading-primary mt-4">
          Accomplishments
        </h2>
        <SkeletonTheme
          baseColor="rgba(184, 193, 213, 0.19)"
          highlightColor="white"
        >
          <div className="mt-12">
            <Skeleton
              height={256}
              className=""
              containerClassName="max-container"
            />
          </div>
        </SkeletonTheme>
      </div>
    );
  }

  //@ts-ignore
  if (session.user.email && isSuccess) {
    return <AccomplishmentsSection data={data} />;
  }
};

export default Accomplishments;
