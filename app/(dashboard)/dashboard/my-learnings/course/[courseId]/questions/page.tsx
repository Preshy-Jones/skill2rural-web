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
  const [certificateId, setCertificateId] = React.useState<number | null>(null);
  return (
    <div>
      {activePage === 0 && (
        <Questions
          courseId={params.courseId}
          result={result}
          setResult={setResult}
          setActivePage={setActivePage}
          setCertificateId={setCertificateId}
        />
      )}
      {activePage === 1 && (
        <Result
          result={result}
          setActivePage={setActivePage}
          certificateId={certificateId}
        />
      )}
    </div>
  );
};

export default Quiz;
