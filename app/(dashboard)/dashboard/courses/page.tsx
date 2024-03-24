"use client";
import InfoCard from "@/components/dashboard/InfoCard";
import React from "react";
import MyLearningCoursesSection from "@/components/dashboard/MyLearningCoursesSection";
import CoursesSection from "@/components/dashboard/CoursesSection";

const DashboardCourses = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[89.51%]">
        <InfoCard />
        <CoursesSection />
      </div>
    </div>
  );
};

export default DashboardCourses;
