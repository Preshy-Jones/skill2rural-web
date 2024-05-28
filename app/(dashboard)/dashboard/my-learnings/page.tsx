"use client";
import InfoCard from "@/components/dashboard/InfoCard";
import MyLearningCoursesSection from "@/components/dashboard/MyLearningCoursesSection";
import { useGetCourses } from "@/queries/getCourses";
import { useGetUserEnrolledCourses } from "@/queries/getUserEnrolledCourses";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Dashboard() {
  const { data: session } = useSession();

  const { isLoading, isError, error, data, isSuccess } =
    useGetUserEnrolledCourses(
      //@ts-ignore
      session?.user.email || ""
    );

  //@ts-ignore
  if (isLoading || !session?.user.email) {
    return <div>Loading courses...</div>;
  }

  //@ts-ignore
  if (session.user.email && isSuccess) {
    return <MyLearningCoursesSection data={data} />;
  }
}
