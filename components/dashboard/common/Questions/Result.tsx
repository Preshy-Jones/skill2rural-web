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
      <div className="w-[96%] sm:w-[89.51%] py-10">
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
          <div className="sm:w-3/4 w-full flex justify-between sm:flex-row flex-col">
            <div className="mb-4 sm:border-none border-b border-b-formInputBorder pb-10 sm:pb-0">
              <h3 className="text-greyText leading-fifth mb-6">
                Receive Grade
              </h3>
              <p className="text-greyText2  text-sm leading-seventh">
                To pass and be issued a certificate, you need a grade point of
                70% and above.
              </p>
            </div>
            <div className="flex sm:flex-row flex-col pt-10 sm:pt-0">
              <div className="mr-3 sm:mb-0 mb-6">
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
                <Link
                  href={`/dashboard/my-learnings/course/${courseId}`}
                  className="bg-primary h-[3.75rem] text-white rounded-btn sm:w-60 w-full flex justify-center items-center"
                >
                  View Feedback
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
