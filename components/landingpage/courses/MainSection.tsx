import Image from "next/image";
import React from "react";
import { contentKey } from "../home/Courses";
import { useSession } from "next-auth/react";
import { useGetCourses } from "@/queries/getCourses";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Link from "next/link";

const MainSection = () => {
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
      <div className="z-20">
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
      <div className="mt-24 flex justify-center font-neue z-20">
        <div className="w-[84.86%]">
          <h1 className="text-[2.625rem] leading-[3.15rem] text-center font-semibold">
            Courses
          </h1>
          <p className="text-center font-medium leading-fifth">
            The world is your classroom, Explore, Learn, Achieve knowledge knows
            no bounds. Online learning unleashed
          </p>
          <div className="grid grid-cols-1 iphone:grid-cols-2 gap-12 mt-12 sm:grid-cols-3">
            {courses.map((item, index) => (
              <Link
                href={`/courses/${item.id}`}
                key={index}
                className={` border border-borderGrey rounded-lg px-3 py-3 hover:shadow-form`}
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
                    {item.title}
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
      </div>
    );
  }
};

export default MainSection;
