import Image from "next/image";
import Link from "next/link";
import caretRight from "@/public/caret-right-plain.svg";
import React from "react";
import { useGetSingleCoursePublic } from "@/queries/useGetSingleCoursePublic";
import { makeFirstLettersCapital } from "@/utils";

const CourseOverview = ({ courseId }: { courseId: string }) => {
  const {
    isLoading,
    isError,
    error,
    //rename data to course
    data: course,
    isSuccess,
    //@ts-ignore
  } = useGetSingleCoursePublic(courseId);

  if (isLoading) {
    return <div>Loading course details</div>;
  }
  if (isSuccess && course) {
    return (
      <div className="flex justify-center">
        <div className="w-[89.51%] pt-10">
          {/* <pre>{JSON.stringify(course, null, 2)}</pre> */}
          <div className="flex mb-6 items-center">
            <Link href={"/courses"}>Courses</Link>
            <Image src={caretRight} alt="caret-right" />
            <h3 className="text-primary font-semibold leading-fifth">
              {makeFirstLettersCapital(course.title.toLowerCase())}
            </h3>
          </div>

          <div className="w-full">
            <Image
              src={course.thumbnail_image}
              alt={course.title}
              className=" rounded-tl-lg rounded-tr-lg rounded-bl-primary rounded-br-primary"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }} // optional
            />
          </div>
          <div className="mt-10">
            <div className="flex  sm:justify-between mb-14 sm:flex-row flex-col w-full">
              <div className="sm:mb-0 mb-6">
                <h1 className="font-semibold text-3.5xl text-greyText">
                  {makeFirstLettersCapital(course.title.toLowerCase())}
                </h1>
                <p className=" text-lg text-greyText">Earn a certificate</p>
              </div>
              <Link
                href={`/dashboard/courses/${courseId}/`}
                className="w-full sm:w-auto"
              >
                <button className="bg-primary h-[3.75rem] text-white rounded-btn sm:w-60 w-full">
                  Start Course
                </button>
              </Link>
            </div>
            <p>{course.description}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default CourseOverview;
