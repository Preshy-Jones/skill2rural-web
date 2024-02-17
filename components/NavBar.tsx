import React from "react";
import skill2rural from "@/public/skill2rural-logo.svg";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-between px-12">
        <Image src={skill2rural} alt="skill2rural" />
        <div className="flex items-center ">
          <h3 className="mr-12">Home</h3>
          <h3 className="mr-12">Courses</h3>
          <h3 className="mr-12">About</h3>
          <h3 className="mr-12">Contact</h3>
        </div>
        <div className="flex items-center">
          <h3 className="mr-8">Login</h3>
          <button className="bg-primary text-white px-4 py-2 ">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
