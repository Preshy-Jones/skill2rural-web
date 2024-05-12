"use client";
import InfoCard from "@/components/dashboard/InfoCard";
import React from "react";
import MyLearningCoursesSection from "@/components/dashboard/MyLearningCoursesSection";
import CoursesSection from "@/components/dashboard/CoursesSection";
import { useSession } from "next-auth/react";
import Api from "@/api";
import { useQuery } from "@tanstack/react-query";
import { useGetCourses } from "@/queries/getCourses";

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
  if (isLoading || !session?.user.token) {
    return <div>Loading courses...</div>;
  }
  //@ts-ignore
  if (session.user.token && isSuccess && data.length > 0) {
    return (
      <div className="flex justify-center">
        <div className="w-[89.51%]">
          {/* <pre className="text-black">{JSON.stringify(data, null, 2)}</pre> */}
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
