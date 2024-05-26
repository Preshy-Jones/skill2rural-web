import React from "react";
import DashboardIcon from "@/public/dashboard-icon.svg";
import SettingsIcon from "@/public/settings-icon.svg";
import LogoutIcon from "@/public/log-out-icon.svg";
import MyCoursesIcon from "@/public/my-courses-icon.svg";
import AccomplishmentsIcon from "@/public/my-accomplishments.svg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const LoggedInMenu = () => {
  return (
    <div className=" py-8">
      {itemData.map((item, index) => (
        <MenuItem
          key={index}
          icon={item.icon}
          title={item.title}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default LoggedInMenu;

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
        <Link href={link} className="navmenuitem">
          <Image src={icon} alt="dashboard-icon" className="mr-3" />
          <h3>{title}</h3>
        </Link>
      ) : (
        <div className="navmenuitem">
          <Image src={icon} alt="dashboard-icon" className="mr-3" />
          <h3 onClick={() => signOut()}>{title}</h3>
        </div>
      )}
    </div>
  );
};

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
