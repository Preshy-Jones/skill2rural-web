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

const Courses = () => {
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
      <div className="mt-24 flex justify-center font-neue">
        <div className="w-[84.86%]">
          <h1 className="text-[2.625rem] leading-[3.15rem] text-center font-semibold">
            Courses
          </h1>
          <p className="text-center font-medium leading-fifth">
            The world is your classroom. Explore, reflect, and learn how you can
            move a step forward in your career and life.
          </p>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-12 md:grid-cols-3 justify-items-center">
              {courses.slice(0, 6).map((item, index) => (
                <Link
                  href={`/courses/${item.id}`}
                  key={index}
                  className={`border border-borderGrey rounded-lg px-3 py-3 hover:shadow-form`}
                >
                  <div className="w-full h-[15.75rem] relative">
                    <Image
                      src={item.thumbnail_image}
                      alt={item.title}
                      className=" rounded-tl-lg rounded-tr-lg rounded-bl-primary rounded-br-primary"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "100%" }} // optional
                    />
                  </div>
                  <div className="py-3">
                    <h2 className="font-medium text-xl leading-fourth">
                      {makeFirstLettersCapital(item.title.toLowerCase())}
                    </h2>
                    <h4 className="text-sm leading-seventh text-greyText">
                      Earn a certificate
                    </h4>
                  </div>
                  <h2 className="text-end text-primary text-sm leading-seventh">
                    View Course
                  </h2>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <div className="bg-primary w-[15rem] h-[3.75rem] py-2 rounded-btn flex items-center justify-center">
              <Link href={"/courses"}>
                <h3 className="text-white font-semibold mr-2">See More</h3>
              </Link>
              <Image src={ArrowIcon} alt="arrow-icon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Courses;

export const contentKey = [
  {
    title: "Design Thinking",
    image: designThinking,
  },
  {
    title: "Servant Leadership",
    image: moneyInPurse,
  },
  {
    title: "Vision Boarding",
    image: designThinking,
  },
  {
    title: "Sustainable Development Goals",
    image: sdgs,
  },
  {
    title: "Sustainable Development Goals",
    image: sdgs,
  },
  {
    title: "Money Management",
    image: moneyInPurse,
  },
];
