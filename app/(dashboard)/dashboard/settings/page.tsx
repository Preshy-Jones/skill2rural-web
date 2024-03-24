"use client";
import Image from "next/image";
import imageUploadIcon from "@/public/icon.svg";
import React, { useState } from "react";
import TextField from "@/components/ui/icons/TextField";

const Settings = () => {
  const [active, setActive] = useState("basic");
  return (
    <div className="flex justify-center mt-16">
      <div className="w-[90%] flex justify-between">
        <div className="basis-[28.5%] bg-white divide-y divide-borderGrey self-start rounded-lg">
          <div
            className=" h-[3.5625rem] flex items-center pl-6 cursor-pointer relative "
            onClick={() => setActive("basic")}
          >
            {active === "basic" && (
              <div className="absolute bg-primary h-full w-1.5 left-0 rounded-tl-lg"></div>
            )}
            <h2
              className={`text-sm leading-seventh  ${
                active === "basic"
                  ? "font-semibold text-primary"
                  : "text-greyText"
              }`}
            >
              Basic Information
            </h2>
          </div>
          <div
            className=" h-[3.5625rem] flex items-center pl-6 cursor-pointer relative"
            onClick={() => setActive("password")}
          >
            <h2
              className={`text-sm leading-seventh  ${
                active === "password"
                  ? "font-semibold text-primary"
                  : "text-greyText"
              }`}
            >
              Password
            </h2>
            {active === "password" && (
              <div className="absolute bg-primary h-full w-1.5 left-0"></div>
            )}
          </div>
          <div className=" h-24"></div>
        </div>
        {active === "basic" ? (
          <div className="basis-[70%] bg-white flex divide-x divide-formInputBorder  py-12 rounded-lg">
            <div className="px-6">
              <Image
                className="rounded-full w-[100px] h-[100px]"
                alt="profile-picture"
                src="https://preshyjonesbucket.s3.eu-west-1.amazonaws.com/photo_2023-09-29+11.13.53.jpeg"
                width={100}
                height={100}
              />
              <div className="mt-5">
                <h3>Profile photo</h3>
                <p className=" text-greyText3 text-sm leading-eleventh">
                  This image will be displayed on your profile
                </p>
              </div>
              <div className=" border-primary border-[2px] flex justify-between w-[9.25rem] h-9 items-center rounded-lg mt-4 px-1">
                <Image src={imageUploadIcon} alt="upload-img-icon" />
                <h3 className=" text-primary font-semibold">Change Photo</h3>
              </div>
            </div>
            <div className="w-full px-6 pb-48">
              <div className="mb-3">
                <h3 className="font-semibold mb-1">Full Name</h3>
                <TextField
                  type="email"
                  placeholder="your email Address"
                  className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
                />
              </div>
              <div className="mb-3">
                <h3 className="font-semibold mb-1">Email Address</h3>
                <TextField
                  type="email"
                  placeholder="your email Address"
                  className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
                />
              </div>
              <div className="mb-3">
                <h3 className="font-semibold mb-1">Organisation</h3>
                <TextField
                  type="email"
                  placeholder="your email Address"
                  className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
                />
              </div>
              <button className=" bg-primary text-white leading-fifth font-semibold w-[15rem] h-[3.75rem] rounded-[6.25rem] mt-16">
                Save Changes
              </button>
            </div>
          </div>
        ) : (
          <div className="basis-[70%] bg-white py-12 pl-12 pb-48 rounded-lg">
            <h2 className=" font-semibold leading-6 text-xl mb-6">
              Password Settings
            </h2>
            <div>
              <div className="mb-3">
                <h3 className="font-semibold mb-1">Current Password</h3>
                <TextField
                  type="text"
                  placeholder=""
                  className="border border-formInputBorder w-[70%] h-[3.4375rem] rounded-btn pl-4"
                />
              </div>
              <div className="mb-3">
                <h3 className="font-semibold mb-1">New Password</h3>
                <TextField
                  type="text"
                  placeholder="Enter password"
                  className="border border-formInputBorder w-[70%] h-[3.4375rem] rounded-btn pl-4"
                />
              </div>
              <div className="mb-3">
                <h3 className="font-semibold mb-1">Confirm Password</h3>
                <TextField
                  type="text"
                  placeholder="Enter password"
                  className="border border-formInputBorder w-[70%] h-[3.4375rem] rounded-btn pl-4"
                />
              </div>
              <button className=" bg-primary text-white leading-fifth font-semibold w-[15rem] h-[3.75rem] rounded-[6.25rem] mt-16">
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
