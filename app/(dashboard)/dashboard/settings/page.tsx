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
import ChangePassword from "@/components/dashboard/settings/ChangePassword";

const Settings = () => {
  const { data: session } = useSession();
  const [active, setActive] = useState("basic");

  const {
    isLoading,
    isSuccess,
    data: user,
  } = useGetUserSettings(
    //@ts-ignore
    session?.user.email || ""
  );

  const updateUser = useUpdateUserSettings(
    //@ts-ignore
    session?.user.email || ""
  );

  //@ts-ignore
  if (isLoading || !session?.user.email) {
    return <div>Loading Settings...</div>;
  }
  //@ts-ignore
  if (session.user.email && isSuccess && user) {
    return (
      <div className="flex justify-center mt-16">
        <div className="w-[90%] flex justify-between">
          <div className=" settings2:block hidden settings:basis-[26.5%] basis-[19%] bg-white divide-y divide-borderGrey self-start rounded-lg ">
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
          <div className="settings:basis-[70%] basis-[45%] bg-white w">
            {active === "basic" ? (
              <BasicInformation user={user} />
            ) : (
              <ChangePassword />
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default Settings;
