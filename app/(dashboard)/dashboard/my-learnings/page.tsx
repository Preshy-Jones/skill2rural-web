"use client";
import InfoCard from "@/components/dashboard/InfoCard";
import MyLearningCoursesSection from "@/components/dashboard/MyLearningCoursesSection";
import { useGetCourses } from "@/queries/getCourses";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Dashboard() {
  const { data: session } = useSession();

  const { isLoading, isError, error, data, isSuccess } = useGetCourses(
    session?.user.token || ""
  );

  if (isLoading || !session?.user.token) {
    return <div>Loading courses...</div>;
  }

  if (session.user.token && isSuccess) {
    return (
      <main className="flex justify-center">
        <div className="w-[89.51%]">
          <InfoCard />
          <MyLearningCoursesSection courses={data} />
        </div>
      </main>
    );
  }
}
