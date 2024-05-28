"use client";
import InfoCard from "@/components/dashboard/InfoCard";
import React from "react";
import MyLearningCoursesSection from "@/components/dashboard/MyLearningCoursesSection";
import CoursesSection from "@/components/dashboard/CoursesSection";
import { useSession } from "next-auth/react";
import Api from "@/api";
import { useQuery } from "@tanstack/react-query";
import { useGetCourses } from "@/queries/getCourses";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// const getCourses = async (accessToken: string) => {
//   const res = await fetch("http://localhost:4000/courses", {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });
//   const data = await res.json();
//   return data;
// };

const DashboardCourses = () => {
  const { data: session } = useSession();

  const { isLoading, isError, error, data, isSuccess } = useGetCourses(
    //@ts-ignore
    session?.user.token || ""
  );
  //@ts-ignore
  // if (isLoading || !session?.user.token) {
  const rows = Array(12).fill(null);
  return (
    <div>
      <pre className="text-black">{JSON.stringify(session?.user, null, 2)}</pre>
      <SkeletonTheme
        baseColor="rgba(184, 193, 213, 0.19)"
        highlightColor="white"
      >
        <div className="flex justify-center">
          <div className="w-[89.51%]">
            <Skeleton height={187} width={824} className="mt-6" />

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
  // }
  //@ts-ignore
  if (session.user.token && isSuccess && data.length > 0) {
    return (
      <div className="flex justify-center">
        <div className="w-[89.51%]">
          <pre className="text-black">
            {/* {JSON.stringify(session?.user, null, 2)} */}
          </pre>
          {/* <pre className="text-black">{JSON.stringify(isError, null, 2)}</pre> */}

          <InfoCard />
          <CoursesSection courses={data} />
        </div>
      </div>
    );
  }
  return <div>Not logged in</div>;
};

export default DashboardCourses;
