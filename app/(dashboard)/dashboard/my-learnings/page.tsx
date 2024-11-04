"use client";
import InfoCard from "@/components/dashboard/InfoCard";
import MyLearningCoursesSection from "@/components/dashboard/MyLearningCoursesSection";
import { useGetCourses } from "@/queries/getCourses";
import { useGetUserEnrolledCourses } from "@/queries/getUserEnrolledCourses";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Dashboard() {
  const { data: session } = useSession();

  const { isLoading, isError, error, data, isSuccess } =
    useGetUserEnrolledCourses(
      //@ts-ignore
      session?.user.email || ""
    );

  //@ts-ignore
  if (isLoading || !session?.user.email) {
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

  //@ts-ignore
  if (session.user.email && isSuccess) {
    return <MyLearningCoursesSection data={data} />;
  }

  return <div>Not logged in</div>;
}
