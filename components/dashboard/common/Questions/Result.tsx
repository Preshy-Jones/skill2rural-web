import React from "react";

const Result = () => {
  const [success, setSuccess] = React.useState(false);
  return (
    <div className="flex justify-center w-full font-neue">
      <div className="w-[89.51%] py-10">
        <h1 className="mb-12 text-3.5xl font-medium leading-tertiary">
          Take Practice Quiz
        </h1>
        <h3>Quiz submitted</h3>

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
                    success === true ? "text-correct" : "text-wrong"
                  } font-semibold text-3.5xl  leading-tertiary`}
                >
                  90%
                </h1>
              </div>
              <button
                className={`${
                  success === true ? "bg-correct" : "bg-primary"
                } h-[3.75rem] text-white rounded-btn w-60`}
              >
                View Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
