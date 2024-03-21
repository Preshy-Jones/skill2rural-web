"use client";
import CoursesSection from "@/components/dashboard/CoursesSection";
import InfoCard from "@/components/dashboard/InfoCard";
import Image from "next/image";

export default function Dashboard() {
  return (
    <main className="flex justify-center">
      <div className="w-[89.51%]">
        <InfoCard />
        <CoursesSection />
      </div>
    </main>
  );
}
