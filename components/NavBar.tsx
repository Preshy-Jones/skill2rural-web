import React from "react";
import skill2rural from "@/public/skill2rural-logo.svg";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="bg-white pt-3">
      <div className="flex justify-between px-12">
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
          <Link href={"/login"}>
            <h3 className="mr-8 font-semibold leading-fifth">Login</h3>
          </Link>
          <button className="bg-primary text-white rounded-btn px-8 h-12 ">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
