import { QuizResult } from "@/types/course";
import Link from "next/link";
import React from "react";

const Result = ({
  result,
  setActivePage,
  courseId,
  passed,
  gradePercentage,
}: {
  result: QuizResult;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
  courseId: string;
  passed: boolean;
  gradePercentage: number;
}) => {
  const [success, setSuccess] = React.useState(false);
  // const totalPoints = Object.keys(result).reduce(
  //   (acc, key) => acc + result[key].point,
  //   0
  // );
  // //add up points in which the .correct field is equal to true
  // const totalPointsScored = Object.keys(result).reduce((total, questionId) => {
  //   return result[questionId].correct
  //     ? total + result[questionId].point
  //     : total;
  // }, 0);

  // const gradeInPercentage = Number(
  //   ((totalPointsScored / totalPoints) * 100).toFixed(2)
  // );

  // const passed = gradeInPercentage >= 70;
  return (
    <div className="flex justify-center w-full font-neue">
      <div className="w-[89.51%] py-10">
        <h1 className="mb-12 text-3.5xl font-medium leading-tertiary">
          Take Practice Quiz
        </h1>
        {/* <pre>{JSON.stringify(result, null, 2)}</pre> */}
        <div className="flex justify-between">
          <h3 className="font-semibold leading-fifth font-neue text-greyText">
            Quiz submitted
          </h3>
          {!passed && (
            <h3
              className="font-semibold leading-fifth font-neue text-primary cursor-pointer"
              onClick={() => setActivePage(0)}
            >
              Try again
            </h3>
          )}
        </div>

        <div className="border-t border-t-formInputBorder mt-10 border-b border-b-formInputBorder py-10 font-medium">
          <div className="w-3/4 flex justify-between">
            <div className="mb-4">
              <h3 className="text-greyText leading-fifth mb-6">
                Receive Grade
              </h3>
              <p className="text-greyText2  text-sm leading-seventh">
                To pass and be issued a certificate, you need a grade point of
                70% and above.
              </p>
            </div>
            <div className="flex">
              <div className="mr-3">
                <h4 className=" font-medium leading-fifth">Your grade</h4>
                <h1
                  className={`${
                    passed ? "text-correct" : "text-wrong"
                  } font-semibold text-3.5xl  leading-tertiary`}
                >
                  {gradePercentage}%
                </h1>
              </div>
              {passed ? (
                <Link
                  href={`/dashboard/my-learnings/accomplishments/${courseId}`}
                >
                  <button className="bg-correct h-[3.75rem] text-white rounded-btn w-60">
                    View Certificate
                  </button>
                </Link>
              ) : (
                <button className="bg-primary h-[3.75rem] text-white rounded-btn w-60">
                  View Feedback
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
