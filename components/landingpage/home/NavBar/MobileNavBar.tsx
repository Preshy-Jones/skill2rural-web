"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import navBarLogoMobile from "@/public/navbar-logo-mobile.svg";
import hamburger from "@/public/hamburger.svg";
import skill2ruralMobileLogo from "@/public/skill2rural-logo-mobile-nav.svg";
import closeIcon from "@/public/close-x.svg";
import DashboardIcon from "@/public/dashboard-icon-mobile.svg";
import SettingsIcon from "@/public/settings-icon-mobile.svg";
import LogoutIcon from "@/public/logout-icon.svg";
import MyCoursesIcon from "@/public/course-icon.svg";
import AccomplishmentsIcon from "@/public/accomplishments-icon.svg";
import AboutIcon from "@/public/about-icon-nav.svg";
import ContactIcon from "@/public/contact-icon-nav.svg";
import CaretRight from "@/public/caret-right-mobile-nav.svg";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { data: session, status } = useSession();
  const variants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };
  return (
    <div className="z-50 w-full sticky top-0 block md:hidden ">
      <div className="flex justify-between px-10 bg-white h-full py-3">
        <Link href={"/"}>
          <Image src={navBarLogoMobile} alt="skill2rural" />
        </Link>
        <Image
          src={hamburger}
          alt="hamburger"
          className="cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-primary h-screen pt-12 absolute top-0 w-full flex justify-center"
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={{ type: "tween" }}
          >
            <div className="w-[90%]">
              <div className="flex justify-between">
                <Link href={"/"}>
                  <Image src={skill2ruralMobileLogo} alt="skill2rural" />
                </Link>
                <Image
                  src={closeIcon}
                  alt="close"
                  className="cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              </div>
              {status === "authenticated" && (
                <div className="mt-12">
                  <div className="flex border-b-[0.5px] border-formInputBorder border-opacity-50 mb-7 pb-2">
                    <Image
                      className="rounded-full w-[2.375rem] h-[2.375rem] cursor-pointer mr-4"
                      alt="profile-picture"
                      src={session?.user.image || ""}
                      width={38}
                      height={38}
                    />
                    <div className="text-white">
                      <h1 className="text-sm">John Doe</h1>
                      <h2 className="text-xs">johndoe@gmail.com</h2>
                    </div>
                  </div>
                  {loggedInItemsData.map((item, index) => (
                    <MenuItem
                      key={index}
                      icon={item.icon}
                      title={item.title}
                      link={item.link}
                      setIsOpen={setIsOpen}
                    />
                  ))}
                  <div className="border-t-[0.5px] border-t-formInputBorder border-opacity-50">
                    <MenuItem icon={LogoutIcon} title={"Log Out"} />
                  </div>
                </div>
              )}
              {status === "unauthenticated" && (
                <div className="mt-12">
                  {loggedOutItemsData.map((item, index) => (
                    <MenuItem
                      key={index}
                      icon={item.icon}
                      title={item.title}
                      link={item.link}
                      setIsOpen={setIsOpen}
                    />
                  ))}
                  <div className="border-t-[0.5px] border-t-formInputBorder border-opacity-50 w-full">
                    <Link href={"/login"} className="w-full ">
                      <div className="bg-white px-8 h-12 mb-4 text-primary w-full flex justify-center items-center rounded-lg">
                        <h3>Log In</h3>
                      </div>
                    </Link>
                    <Link href={"/register"} className="w-full">
                      <div className="bg-primary border border-white px-8 h-12 text-white font-semibold w-full flex justify-center items-center rounded-lg">
                        <h3>Get Started Now</h3>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavBar;

const loggedInItemsData = [
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
];

const loggedOutItemsData = [
  {
    icon: DashboardIcon,
    title: "Home",
    link: "/",
  },
  {
    icon: MyCoursesIcon,
    title: "Courses",
    link: "/courses",
  },
  {
    icon: AboutIcon,
    title: "About",
    link: "/about",
  },
  {
    icon: ContactIcon,
    title: "Contact",
    link: "/contact",
  },
];

const MenuItem = ({
  icon,
  title,
  link,
  setIsOpen,
}: {
  icon: StaticImageData;
  title: string;
  link?: string;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (link) {
      router.push(link);
    }
    if (setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      {title !== "Log Out" ? (
        <div
          onClick={handleClick}
          className="flex justify-between py-3  cursor-pointer font-medium w-full"
        >
          <div className="flex items-center">
            <Image src={icon} alt="dashboard-icon" className="mr-3" />
            <h3 className="text-white">{title}</h3>
          </div>
          <Image src={CaretRight} alt="caret-right" />
        </div>
      ) : (
        //  @ts-ignore
        <div
          className=" text-white flex items-center py-3 cursor-pointer font-medium"
          onClick={() => signOut()}
        >
          <Image src={icon} alt="dashboard-icon" className="mr-3" />

          <h3>{title}</h3>
        </div>
      )}
    </div>
  );
};
