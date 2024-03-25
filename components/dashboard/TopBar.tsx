"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";

const TopBar = () => {
  const pathname = usePathname();
  //dashboard/:path
  // get the path from the url

  const path = pathname.split("/")[2];

  return (
    <div className="bg-primary text-white font-neue pt-4 flex justify-center">
      <div className="w-[89%]">
        <h1 className=" text-3.5xl font-semibold">My learnings</h1>
        <div className="flex justify-between mt-3">
          <div className="grid grid-cols-3 mb-1.5">
            <Link
              href={"/dashboard/courses"}
              className="h-[2rem] flex flex-col items-center justify-between w-full"
            >
              <h3 className=" font-medium leading-fifth mr-3">Courses</h3>
              {path === "courses" && (
                <motion.div
                  layoutId="dashboard"
                  className="h-[2px] bg-white w-full rounded-md"
                ></motion.div>
              )}
            </Link>
            <Link
              href={"/dashboard/my-learnings"}
              className="h-[2rem] flex flex-col items-center justify-between w-full"
            >
              <h3 className=" font-medium leading-fifth mr-3">My Learning</h3>
              {path === "my-learnings" && (
                <motion.div
                  layoutId="dashboard"
                  className="h-[2px] bg-white w-full rounded-md"
                ></motion.div>
              )}
            </Link>
            <Link
              href={"/dashboard/settings"}
              className="h-[2rem] flex flex-col items-center justify-between w-full"
            >
              <h3 className=" font-medium leading-fifth">Settings</h3>
              {path === "settings" && (
                <motion.div
                  layoutId="dashboard"
                  className="h-[2px] bg-white w-full rounded-md"
                ></motion.div>
              )}
            </Link>
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
