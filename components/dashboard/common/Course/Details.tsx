import { Course } from "@/types/course";
import React from "react";

const Details = ({ course }: { course: Course }) => {
  return (
    <div>
      <p className="mt-4 leading-6 font-medium">{course.description}</p>
      <div className="mt-6">
        <h2>Objectives</h2>
        <p>At the end of this lesson, participants are expected to;</p>
        <ul className="list-disc ml-4">
          {course.objectives.map((objective, index) => (
            <li className="leading-6" key={index}>{objective}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
