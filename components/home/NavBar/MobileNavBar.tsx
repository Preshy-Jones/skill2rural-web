import React from "react";
import Image from "next/image";
import navBarLogoMobile from "@/public/navbar-logo-mobile.svg";
import hamburger from "@/public/hamburger.svg";

const MobileNavBar = () => {
  return (
    <div className="z-50 w-full sticky top-0 bg-white block md:hidden py-3">
      <div className="flex justify-between px-10">
        <Image src={navBarLogoMobile} alt="skill2rural" />
        <Image src={hamburger} alt="hamburger" />
      </div>
    </div>
  );
};

export default MobileNavBar;
