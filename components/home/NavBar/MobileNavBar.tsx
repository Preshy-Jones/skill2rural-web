"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import navBarLogoMobile from "@/public/navbar-logo-mobile.svg";
import hamburger from "@/public/hamburger.svg";
import skill2ruralMobileLogo from "@/public/skill2rural-logo-mobile-nav.svg";
import closeIcon from "@/public/close-x.svg";
import DashboardIcon from "@/public/dashboard-icon-mobile.svg";
import SettingsIcon from "@/public/settings-icon.svg";
import LogoutIcon from "@/public/log-out-icon.svg";
import MyCoursesIcon from "@/public/my-courses-icon.svg";
import AccomplishmentsIcon from "@/public/my-accomplishments.svg";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="z-50 w-full sticky top-0 block md:hidden ">
      <div className="flex justify-between px-10 bg-white h-full py-3">
        <Image src={navBarLogoMobile} alt="skill2rural" />
        <Image src={hamburger} alt="hamburger" />
      </div>
      <div className="bg-primary absolute top-0 w-full flex justify-center">
        <div className="w-[90%]">
          <div className="flex justify-between">
            <Image src={skill2ruralMobileLogo} alt="skill2rural" />
            <Image src={closeIcon} alt="close" />
          </div>
          {itemData.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              title={item.title}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;

const itemData = [
  {
    icon: DashboardIcon,
    title: "Dashboard",
    link: "/dashboard/courses",
  },
  {
    icon: MyCoursesIcon,
    title: "My Courses",
    link: "/dashboard/my-learnings",
  },
  {
    icon: AccomplishmentsIcon,
    title: "My Accomplishments",
    link: "/dashboard/my-learnings/accomplishments",
  },
  {
    icon: SettingsIcon,
    title: "Settings",
    link: "/dashboard/settings",
  },
  {
    icon: LogoutIcon,
    title: "Log Out",
    link: "/dashboard/courses",
  },
];

const MenuItem = ({
  icon,
  title,
  link,
}: {
  icon: StaticImageData;
  title: string;
  link: string;
}) => {
  return (
    <div>
      {title !== "Log Out" ? (
        <Link
          href={link}
          className="group text-white flex items-center py-3 pl-8 pr-24 cursor-pointer font-medium"
        >
          <Image src={icon} alt="dashboard-icon" className="mr-3" />
          <h3>{title}</h3>
        </Link>
      ) : (
        //  @ts-ignore
        <div
          className="group text-white flex items-center py-3 pl-8 pr-24 cursor-pointer font-medium"
          onClick={() => signOut()}
        >
          <Image src={icon} alt="dashboard-icon" className="mr-3" />

          <h3>{title}</h3>
        </div>
      )}
    </div>
  );
};
