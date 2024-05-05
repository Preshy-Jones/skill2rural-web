import React from "react";
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
import { CourseQuestion, QuizResult } from "@/types/course";
import Link from "next/link";

const Questions = ({
  courseId,
  result,
  setResult,
}: {
  courseId: string;
  result: QuizResult[];
  setResult: React.Dispatch<React.SetStateAction<QuizResult[]>>;
}) => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const { data: session } = useSession();

  const { isLoading, isError, error, data, isSuccess } = useGetCourseQuestions(
    //@ts-ignore
    session?.user.token || "",
    courseId
  );

  //@ts-ignore
  if (isLoading || !session?.user.token) {
    return <div>Loading course questions...</div>;
  }

  const handleOnAnswer = (value: boolean, question: CourseQuestion) => {
    const questionIndex = result.findIndex(
      (item) => item.questionId === question.id
    );
    if (questionIndex === -1) {
      setResult([
        ...result,
        {
          questionId: question.id,
          point: question.point,
          correct: question.answer === value,
        },
      ]);
    }

    if (questionIndex !== -1) {
      console.log("heleld ddddd");
      console.log("correct answer", question.answer);
      console.log("selected answer", value);

      setResult([
        ...result.slice(0, questionIndex),
        {
          questionId: question.id,
          point: question.point,
          correct: question.answer === value,
        },
        ...result.slice(questionIndex + 1),
      ]);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };
  //@ts-ignore
  if (session.user.token && isSuccess) {
    return (
      <div className="flex justify-center w-full font-neue">
        <div className="w-[89.51%] py-10">
          <div className="flex">
            <h3>My Learnings</h3>
            <Image src={caretRight} alt="caret-right" />
            <h3>Course</h3>
          </div>
          <div className="flex justify-between mt-6 mb-16">
            <h2 className=" font-semibold leading-primary text-2xl">
              Design Thinking
            </h2>
          </div>

          <div className=" mb-10">
            <h2 className=" font-semibold leading-ninth text-lg text-greyText font-neue mb-4">
              Practical Questions
            </h2>
            <h2 className="text-greyText2">Practical Questions - 4points</h2>
          </div>

          <div>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
          <div className="pl-2 w-5/6">
            {data.map((question, index) => (
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
                />
                <div className="bg-wrong bg-opacity-20 border-opacity-5 border-[0.5px] border-wrong px-6 py-2 mt-4 rounded-sm">
                  <div className="flex items-center mb-2">
                    <Image src={wrongIcon} alt="wrong" className="mr-2" />
                    <h3 className=" text-sm leading-seventh text-wrong">
                      Incorrect
                    </h3>
                  </div>
                  <p className="text-greyText2 text-sm leading-seventh font-medium">
                    You didn&apos;t select an answer
                  </p>
                </div>
                <div className="bg-correct bg-opacity-20 border-opacity-5 border-[0.5px] border-correct px-6 py-2 mt-4 rounded-sm">
                  <div className="flex items-center mb-2">
                    <Image src={correctIcon} alt="correct" className="mr-2" />
                    <h3 className=" text-sm leading-seventh text-correct">
                      Incorrect
                    </h3>
                  </div>
                  <p className="text-greyText2 text-sm leading-seventh font-medium">
                    You didn&apos;t select an answer
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex">
            <button
              onClick={handleSubmit}
              className="bg-primary h-[3.75rem] w-60  text-white rounded-btn mt-14 mr-4"
            >
              Submit
            </button>
            <Link
              href={`/dashboard/my-learnings/course/${courseId}`}
              className="border border-primary h-[3.75rem] w-60 text-primary rounded-btn mt-14"
            >
              Return to course
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default Questions;

const QuestionAttempt = ({
  onAnswer,
}: {
  onAnswer: (value: boolean) => void;
}) => {
  const [checked, setChecked] = React.useState<boolean | null>(null);

  return (
    <div>
      <div className="flex">
        <CustomRadio
          checked={checked}
          onChange={onAnswer}
          setChecked={setChecked}
          selected={true}
        />
        <h3 className=" leading-fifth font-medium text-greyText">True</h3>
      </div>
      <div className="flex">
        <CustomRadio
          checked={checked === null || checked === true ? false : true}
          onChange={onAnswer}
          setChecked={setChecked}
          selected={false}
        />
        <h3 className=" leading-fifth font-medium text-greyText">False</h3>
      </div>
    </div>
  );
};
