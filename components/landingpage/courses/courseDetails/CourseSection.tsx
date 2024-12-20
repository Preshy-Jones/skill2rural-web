import React from "react";
import designThinking from "@/public/design-thinking.svg";
import moneyInPurse from "@/public/money-purse.svg";
import sdgs from "@/public/sdgs.svg";
import ArrowIcon from "@/public/arrow-icon.svg";
import Image from "next/image";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useGetCourses } from "@/queries/getCourses";
import Link from "next/link";
import { makeFirstLettersCapital } from "@/utils";

const CoursesSection = () => {
  const {
    isLoading,
    isError,
    error,
    data: courses,
    isSuccess,
  } = useGetCourses();

  //@ts-ignore
  if (isLoading) {
    const rows = Array(12).fill(null);
    return (
      <div>
        <SkeletonTheme
          baseColor="rgba(184, 193, 213, 0.19)"
          highlightColor="white"
        >
          <div className="flex justify-center">
            <div className="w-[89.51%]">
              <Skeleton height={187} width={824} className="mt-6" />
              {/* <pre>{JSON.stringify(session?.user)}</pre> */}
              <div className="grid grid-cols-3 gap-12 mt-12">
                {rows.map((_, index) => (
                  <Skeleton key={index} height={366} width={396} />
                ))}
              </div>
            </div>
          </div>
        </SkeletonTheme>
      </div>
    );
  }
  if (isSuccess && courses.length > 0) {
    return (
      <div className=" flex justify-center font-neue mt-11 sm:mt-[5.1875rem]">
        <div className="w-[89.51%]">
          <h1 className="sm:text-[2.625rem] text-lg leading-[3.15rem]  font-semibold">
            Other Courses
          </h1>
          <div className="grid grid-cols-1 iphone:grid-cols-2 gap-12 mt-8 sm:grid-cols-3">
            {courses.map((item, index) => (
              <Link
                href={`/courses/${item.id}`}
                key={index}
                className={`cursor-pointer border border-borderGrey rounded-lg px-3 py-3 hover:shadow-form`}
              >
                <div className="w-full h-[15.75rem] ">
                  <Image
                    src={item.thumbnail_image}
                    alt={item.title}
                    className=" rounded-tl-lg rounded-tr-lg rounded-bl-primary rounded-br-primary"
                    width={0}
                    height={0}
                    style={{ width: "100%", height: "100%" }} // optional
                  />
                </div>
                <div className="py-3">
                  <h2 className="font-medium text-xl leading-fourth text-left">
                    {makeFirstLettersCapital(item.title.toLowerCase())}
                  </h2>
                  <h4 className="text-sm leading-seventh text-greyText">
                    Earn a certificate
                  </h4>
                </div>
                <Link
                  href={`/courses/${item.id}`}
                  className="text-end text-primary text-sm leading-seventh"
                >
                  View Course
                </Link>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default CoursesSection;
