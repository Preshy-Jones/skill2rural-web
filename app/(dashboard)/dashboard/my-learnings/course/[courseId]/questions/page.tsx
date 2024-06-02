"use client";

import Questions from "@/components/dashboard/common/Questions/Questions";
import Result from "@/components/dashboard/common/Questions/Result";
import { QuizResult } from "@/types/course";
import React from "react";

const Quiz = ({
  params,
}: {
  params: {
    courseId: string;
  };
}) => {
  const [activePage, setActivePage] = React.useState(0);
  const [result, setResult] = React.useState<QuizResult>({});
  const [passed, setPassed] = React.useState<boolean>(false);
  const [gradePercentage, setGradePercentage] = React.useState<number>(0);

  return (
    <div>
      {activePage === 0 && (
        <Questions
          courseId={params.courseId}
          result={result}
          setResult={setResult}
          setActivePage={setActivePage}
          setPassed={setPassed}
          setGradePercentage={setGradePercentage}
        />
      )}
      {activePage === 1 && (
        <Result
          result={result}
          setActivePage={setActivePage}
          courseId={params.courseId}
          passed={passed}
          gradePercentage={gradePercentage}
        />
      )}
    </div>
  );
};

export default Quiz;
