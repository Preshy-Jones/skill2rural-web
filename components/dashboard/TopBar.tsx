import React from "react";

const TopBar = () => {
  return (
    <div className="bg-primary text-white font-neue pt-4 flex justify-center">
      <div className="w-[89%]">
        <h1 className=" text-3.5xl font-semibold">My learnings</h1>
        <div className="flex justify-between mt-3">
          <div className="flex">
            <h3 className=" font-medium leading-fifth mr-3">Courses</h3>
            <h3 className=" font-medium leading-fifth mr-3">My Learning</h3>
            <h3 className=" font-medium leading-fifth">Settings</h3>
          </div>
          <div className="pb-3">
            <p className=" leading-fifth font-medium ">
              Welcome Back Emmanuel Adebayo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
