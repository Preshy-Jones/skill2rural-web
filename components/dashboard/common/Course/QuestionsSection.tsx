import { Button } from "@/components/ui/button";
import hyphen from "@/public/dash.svg";
import { useGetUserBestQuizResult } from "@/queries/getUserBestQuizResult";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const QuestionsSection = ({ courseId }: { courseId: string }) => {
  const { data: session } = useSession();

  const { isLoading, isError, error, data, isSuccess } =
    useGetUserBestQuizResult(
      //@ts-ignore
      session?.user.email || "",
      courseId
    );
    

  //@ts-ignore
  if (isLoading || !session?.user.email) {
    return <div>Loading course Questions...</div>;
  }
  if (session.user.email && isSuccess) {
    return (
      <div className="font-neue mt-7">
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <h1 className="mb-2 text-3.5xl font-medium">Take Practice Quiz</h1>
        <Link href={`/dashboard/my-learnings/course/${courseId}/questions`}>
          <button className="bg-primary h-[3.75rem] text-white rounded-btn w-60 ">
            Start Quiz
          </button>
        </Link>
        <div className="border-t border-t-formInputBorder mt-10 border-b border-b-formInputBorder py-10 font-medium w-3/4">
          <div className="w-3/4">
            <div className=" flex justify-between mb-4">
              <h3 className="text-greyText leading-fifth">Receive Grade</h3>
              <h3 className=" leading-fifth">Your grade</h3>
            </div>
            <div className=" flex justify-between">
              <p className="text-greyText2  text-sm leading-seventh">
                To pass and be issued a certificate, you need a grade point of
                70% and above.
              </p>
              {data?.gradeInPercentage ? (
                <h1
                  className={`${
                    data.gradeInPercentage > 70 ? "text-correct" : "text-wrong"
                  } font-semibold text-3.5xl  leading-tertiary`}
                >
                  {data?.gradeInPercentage}%
                </h1>
              ) : (
                <Image src={hyphen} alt="hyphen" />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default QuestionsSection;
