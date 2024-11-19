"use client";
import React from "react";
import skill2rural from "@/public/skill2rural-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "../../../ui/menubar";
import LoggedInMenu from "./LoggedInMenu";
import { useGetUserSettings } from "@/queries/useGetUserSettings";
import { getInitials } from "@/utils";

const NavBar = () => {
  const { data: session, status } = useSession();

  const {
    isLoading,
    isSuccess,
    data: user,
  } = useGetUserSettings(
    //@ts-ignore
    session?.user.email || ""
  );

  return (
    <div className="bg-white pt-3 pb-3 z-50 top-0 w-full md:block hidden sticky">
      <div className="flex justify-between px-20">
        {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
        <Link href={"/"}>
          <Image src={skill2rural} alt="skill2rural" />
        </Link>
        <div className="flex items-center ">
          <Link href={"/"}>
            <h3 className="mr-12 font-semibold leading-fifth">Home</h3>
          </Link>
          <Link href={"/courses"}>
            <h3 className="mr-12 font-semibold leading-fifth">Courses</h3>
          </Link>
          <Link href={"/about"}>
            <h3 className="mr-12 font-semibold leading-fifth">About</h3>
          </Link>
          <Link href={"/contact"}>
            <h3 className="mr-12 font-semibold leading-fifth">Contact</h3>
          </Link>
        </div>
        <div className="flex items-center">
          {status === "unauthenticated" && (
            <Link href={"/login"}>
              <h3 className="mr-8 font-semibold leading-fifth">Login</h3>
            </Link>
          )}
          {status === "authenticated" && (
            // <h3
            //   onClick={() => {
            //     signOut();
            //   }}
            //   className="mr-8 font-semibold leading-fifth cursor-pointer"
            // >
            //   Sign out
            // </h3>
            <Menubar className=" bg-transparent">
              <MenubarMenu>
                <MenubarTrigger>
                  {user?.profile_photo ? (
                    <Image
                      className="rounded-full w-[3.75rem] h-[3.75rem] cursor-pointer"
                      alt="profile-picture"
                      src={user?.profile_photo}
                      width={60}
                      height={60}
                    />
                  ) : (
                    <div className="rounded-full  w-[3.5rem] h-[3.5rem] flex justify-center items-center bg-primary">
                      <div className="text-white text-center leading-5 font-semibold">
                        {user && getInitials(user.name)}
                      </div>
                    </div>
                  )}
                </MenubarTrigger>
                <MenubarContent className="px-0">
                  <LoggedInMenu
                    logout={() => {
                      signOut();
                    }}
                  />
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          )}
          {status === "unauthenticated" && (
            <Link href={"/register"}>
              <button className="bg-primary text-white rounded-btn px-8 h-12 ">
                Get Started Now
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
