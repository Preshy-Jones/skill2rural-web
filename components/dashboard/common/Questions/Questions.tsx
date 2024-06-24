import React, { useEffect } from "react";
import caretRight from "@/public/caret-right-plain.svg";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import wrongIcon from "@/public/wrong-icon.svg";
import correctIcon from "@/public/correct-icon.svg";
import { useSession } from "next-auth/react";
import { useGetCourseQuestions } from "@/queries/getCourseQuestions";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import CustomRadio from "@/components/ui/CustomRadio";
import {
  Certificate,
  CourseQuestion,
  QuizResult,
  SubmitQuizResponse,
} from "@/types/course";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useSubmitQuiz } from "@/queries/submitQuiz";
import { useGetSingleCoursePublic } from "@/queries/useGetSingleCoursePublic";

const Questions = ({
  courseId,
  result,
  setResult,
  setActivePage,
  setPassed,
  setGradePercentage,
}: {
  courseId: string;
  result: QuizResult;
  setResult: React.Dispatch<React.SetStateAction<QuizResult>>;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
  setPassed: React.Dispatch<React.SetStateAction<boolean>>;
  setGradePercentage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  // const [isNotValidated, setIsNotValidated] = React.useState(true);
  const { data: session } = useSession();

  const {
    isLoading,
    isError,
    error,
    data: questions,
    isSuccess,
  } = useGetCourseQuestions(
    //@ts-ignore
    session?.user.email || "",
    courseId
  );

  const {
    isLoading: isLoadingCourse,
    isError: isErrorCourse,

    //rename data to course
    data: course,
    isSuccess: isSuccessCourse,
    //@ts-ignore
  } = useGetSingleCoursePublic(courseId);

  const submitQuiz = useSubmitQuiz<SubmitQuizResponse>(
    //@ts-ignore
    session?.user.email || "",
    courseId
  );

  React.useEffect(() => {
    // Clear the result state when the component is mounted
    setResult({});
    setIsSubmitted(false);
  }, []); // Empty dependency array to run the effect only once after mount

  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message);
      router.push(`/dashboard/my-learnings/course/${courseId}`);
    }
  }, [error, isError]); // Emp

  //@ts-ignore
  if (isLoading) {
    return <div>Loading course questions...</div>;
  }
  //@ts-ignore
  if (isError || !session?.user.email) {
    // Accessing details about the error:
    console.error("Error details:", error);
    return <div>Error: {error?.message}</div>;
  }

  const handleOnAnswer = (value: number | null, question: CourseQuestion) => {
    setResult({
      ...result,
      [question.id]: {
        point: question.point,
        correct: question.answer === value,
      },
    });
  };

  const totalPoints = Object.keys(result).reduce(
    (acc, key) => acc + result[key].point,
    0
  );

  //add up points in which the .correct field is equal to true
  const totalPointsScored = Object.keys(result).reduce((total, questionId) => {
    return result[questionId].correct
      ? total + result[questionId].point
      : total;
  }, 0);

  const gradeInPercentage = Number(
    ((totalPointsScored / totalPoints) * 100).toFixed(2)
  );

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleResult = async () => {
    try {
      const response = await submitQuiz.mutateAsync({
        gradeInPercentage,
      });
      console.log("response", response);
      setPassed(response.passed);
      setGradePercentage(response.gradeInPercentage);
      setActivePage(1);
    } catch (error) {
      console.error("Error creating certificate", error);
    }
  };

  //@ts-ignore
  if (session.user.email && isSuccess) {
    return (
      <div className="flex justify-center w-full font-neue">
        <div className="w-[89.51%] py-10">
          <div className="flex">
            <Link href={"/dashboard/my-learnings"}>My Learnings</Link>
            <Image src={caretRight} alt="caret-right" />
            <h3>Course</h3>
          </div>
          {course && (
            <div className="flex justify-between mt-6 mb-16">
              <h2 className=" font-semibold leading-primary text-2xl">
                {course?.title}
              </h2>
            </div>
          )}

          <div className=" mb-10">
            <h2 className=" font-semibold leading-ninth text-lg text-greyText font-neue mb-4">
              Practical Questions
            </h2>
            <h2 className="text-greyText2">Practical Questions - 4points</h2>
          </div>

          <div>
            {/* <pre>{JSON.stringify(result, null, 2)}</pre> */}
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          </div>
          <div className="pl-2 w-5/6">
            {questions.map((question, index) => (
              <div key={index} className="mb-16">
                <div className="flex justify-between items-center">
                  <div className="mb-4 text-greyText">
                    {index + 1}. {question.question}
                  </div>
                  <div className="bg-primaryLightBg w-[3.875rem] h-[2.4375rem] flex items-center justify-center">
                    <h3 className="text-greyText font-medium leading-fifth">
                      {question.point}
                    </h3>
                  </div>
                </div>
                {/* <div className="flex">
                  <Checkbox className="text-white data-[state=checked]:bg-checkbox mr-3 rounded-full" />
                  <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="default" id="r1" />
                      <Label htmlFor="r1">Default</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="comfortable" id="r2" />
                      <Label htmlFor="r2">Comfortable</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="compact" id="r3" />
                      <Label htmlFor="r3">Compact</Label>
                    </div>
                  </RadioGroup>

                  <h3 className=" leading-fifth font-medium text-greyText">
                    True
                  </h3>
                </div>
                <div className="flex">
                  <Checkbox className="text-white data-[state=checked]:bg-checkbox mr-3 rounded-full" />
                  <h3 className=" leading-fifth font-medium text-greyText">
                    False
                  </h3>
                </div> */}
                <QuestionAttempt
                  onAnswer={(value) => handleOnAnswer(value, question)}
                  options={question.options}
                  isSubmitted={isSubmitted}
                />
                {isSubmitted &&
                  result[question.id] &&
                  !result[question.id].correct && (
                    <div className="bg-wrong bg-opacity-20 border-opacity-5 border-[0.5px] border-wrong px-6 py-2 mt-4 rounded-sm">
                      <div className="flex items-center mb-2">
                        <Image src={wrongIcon} alt="wrong" className="mr-2" />
                        <h3 className=" text-sm leading-seventh text-wrong">
                          Incorrect
                        </h3>
                      </div>
                    </div>
                  )}
                {isSubmitted && !result[question.id] && (
                  <div className="bg-wrong bg-opacity-20 border-opacity-5 border-[0.5px] border-wrong px-6 py-2 mt-4 rounded-sm">
                    <div className="flex items-center mb-2">
                      <Image src={wrongIcon} alt="wrong" className="mr-2" />
                    </div>
                    <p className="text-greyText2 text-sm leading-seventh font-medium">
                      You didn&apos;t select an answer
                    </p>
                  </div>
                )}

                {isSubmitted &&
                  result[question.id] &&
                  result[question.id].correct && (
                    <div className="bg-correct bg-opacity-20 border-opacity-5 border-[0.5px] border-correct px-6 py-2 mt-4 rounded-sm">
                      <div className="flex items-center mb-2">
                        <Image
                          src={correctIcon}
                          alt="correct"
                          className="mr-2"
                        />
                        <h3 className=" text-sm leading-seventh text-correct">
                          Correct
                        </h3>
                      </div>
                    </div>
                  )}
              </div>
            ))}
          </div>
          {!isSubmitted ? (
            <div className="flex">
              <button
                onClick={handleSubmit}
                className="bg-primary h-[3.75rem] w-60  text-white rounded-btn mt-14 mr-4"
              >
                Submit
              </button>
              <Link href={`/dashboard/my-learnings/course/${courseId}`}>
                <button className="border border-primary h-[3.75rem] w-60 text-primary rounded-btn mt-14">
                  Return to course
                </button>
              </Link>
            </div>
          ) : (
            <button
              onClick={handleResult}
              className="bg-primary h-[3.75rem] w-60  text-white rounded-btn mt-14 mr-4"
            >
              See result
            </button>
          )}
        </div>
      </div>
    );
  }
};

export default Questions;

const QuestionAttempt = ({
  onAnswer,
  options,
  isSubmitted,
}: {
  onAnswer: (value: number | null) => void;
  options: string[];
  isSubmitted: boolean;
}) => {
  const [selectedOption, setSelectedOption] = React.useState<number | null>(
    null
  );

  return (
    <div>
      {options.map((option, index) => (
        <div key={index}>
          <div className="flex mb-4">
            <CustomRadio
              checked={selectedOption === index}
              onChange={onAnswer}
              setSelectedOption={setSelectedOption}
              index={index}
              disabled={isSubmitted && selectedOption !== index ? true : false}
            />
            <h3 className=" leading-fifth font-medium text-greyText ml-4">
              {option}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};
