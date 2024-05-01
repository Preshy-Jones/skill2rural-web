import { Course } from "@/types/course";
import React from "react";

const Details = ({ course }: { course: Course }) => {
  return (
    <div>
      <p className="mt-4">{course.description}</p>
    </div>
  );
};

export default Details;
