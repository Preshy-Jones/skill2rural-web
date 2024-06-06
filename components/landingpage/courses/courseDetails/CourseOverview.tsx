import Image from "next/image";
import Link from "next/link";
import caretRight from "@/public/caret-right-plain.svg";
import React from "react";
import { useGetSingleCoursePublic } from "@/queries/useGetSingleCoursePublic";

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
      <div className="flex justify-center w-full">
        <div className="w-[89.51%] py-10">
          {/* <pre>{JSON.stringify(course, null, 2)}</pre> */}
          <div className="flex mb-6">
            <Link href={"/courses"}>Courses</Link>
            <Image src={caretRight} alt="caret-right" />
            <h3 className="text-primary font-semibold">{course.title}</h3>
          </div>

          <div className="w-full h-[33.75rem]">
            <Image
              src={course.thumbnail_image}
              alt={course.title}
              className=" rounded-tl-lg rounded-tr-lg rounded-bl-primary rounded-br-primary"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }} // optional
            />
            <div className="mt-10 mb-12">
              <div className="flex justify-between mb-12">
                <div>
                  <h1 className="font-semibold text-3.5xl text-greyText">{course.title}</h1>
                  <p className=" text-lg text-greyText">Earn a certificate</p>
                </div>
                <Link href={`/dashboard/courses/course/${courseId}/`}>
                  <button className="bg-primary h-[3.75rem] text-white rounded-btn w-60 ">
                    Start Course
                  </button>
                </Link>
              </div>

              <p>{course.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CourseOverview;
