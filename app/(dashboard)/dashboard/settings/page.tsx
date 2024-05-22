"use client";
import Image from "next/image";
import imageUploadIcon from "@/public/icon.svg";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useGetUserSettings } from "@/queries/useGetUserSettings";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { UserType } from "@/types/global";
import { useUpdateUserSettings } from "@/queries/useUpdateUser";
import BasicInformation from "@/components/dashboard/settings/BasicInformation";

const Settings = () => {
  const { data: session } = useSession();
  const [active, setActive] = useState("basic");

  const {
    isLoading,
    isSuccess,
    data: user,
  } = useGetUserSettings(
    //@ts-ignore
    session?.user.token || ""
  );

  const updateUser = useUpdateUserSettings(
    //@ts-ignore
    session?.user.token || "",
    //@ts-ignore
    session?.user.id
  );

  //@ts-ignore
  if (isLoading || !session?.user.token) {
    return <div>Loading Settings...</div>;
  }
  //@ts-ignore
  if (session.user.token && isSuccess && user) {
    return (
      <div className="flex justify-center mt-16">
        <div className="w-[90%] flex justify-between">
          <div className="basis-[28.5%] bg-white divide-y divide-borderGrey self-start rounded-lg">
            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
            {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
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
            <BasicInformation user={user} />
          ) : (
            <div className="basis-[70%] bg-white py-12 pl-12 pb-48 rounded-lg">
              <h2 className=" font-semibold leading-6 text-xl mb-6">
                Password Settings
              </h2>
              <div>
                <div className="mb-3">
                  <h3 className="font-semibold mb-1">Current Password</h3>
                  <input
                    type="text"
                    placeholder=""
                    className="border border-formInputBorder w-[70%] h-[3.4375rem] rounded-btn pl-4"
                  />
                </div>
                <div className="mb-3">
                  <h3 className="font-semibold mb-1">New Password</h3>
                  <input
                    type="text"
                    placeholder="Enter password"
                    className="border border-formInputBorder w-[70%] h-[3.4375rem] rounded-btn pl-4"
                  />
                </div>
                <div className="mb-3">
                  <h3 className="font-semibold mb-1">Confirm Password</h3>
                  <input
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
  }
};

export default Settings;
