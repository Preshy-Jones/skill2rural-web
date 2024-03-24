"use client";
import InfoCard from "@/components/dashboard/InfoCard";
import MyLearningCoursesSection from "@/components/dashboard/MyLearningCoursesSection";
import Image from "next/image";

export default function Dashboard() {
  return (
    <main className="flex justify-center">
      <div className="w-[89.51%]">
        <InfoCard />
        <MyLearningCoursesSection />
      </div>
    </main>
  );
}
