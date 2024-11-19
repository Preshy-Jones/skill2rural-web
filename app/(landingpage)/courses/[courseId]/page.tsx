"use client";
import CourseOverview from "@/components/landingpage/courses/courseDetails/CourseOverview";
import CoursesSection from "@/components/landingpage/courses/courseDetails/CourseSection";
import Hero from "@/components/landingpage/courses/courseDetails/Hero";
import React from "react";

const CourseDetails = ({
  params,
}: {
  params: {
    courseId: string;
  };
}) => {
  return (
    <div>
      <Hero />
      <CourseOverview courseId={params.courseId} />
      <CoursesSection />
    </div>
  );
};

export default CourseDetails;
