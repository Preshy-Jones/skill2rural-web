import React from "react";
import TextField from "../ui/icons/TextField";

const StudentsForm = () => {
  return (
    <div>
      <form action="" className="px-6 pt-16">
        <h2 className=" font-semibold text-lg mb-8">Fill in the form below</h2>
        <div className="mb-8">
          <div className="mb-7">
            <h3 className="font-semibold">Email address</h3>
            <TextField
              type="email"
              placeholder="your email Address"
              className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
            />
          </div>
          <div className="mb-7">
            <h3 className="font-semibold">Password</h3>
            <TextField
              placeholder="your Password"
              type="password"
              className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
            />
          </div>
        </div>
        <button className="bg-primary h-[3.75rem] text-white rounded-btn w-full">
          Log in
        </button>
      </form>
    </div>
  );
};

export default StudentsForm;
