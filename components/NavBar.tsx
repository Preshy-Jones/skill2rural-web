import React from "react";
import skill2rural from "@/public/skill2rural-logo.svg";
import Image from "next/image";

const NavBar = () => {
  return (
    <div>
      <div className="flex">
        <Image src={skill2rural} alt="skill2rural" />
        <div className="flex">
          <h3>Home</h3>
          <h3>Courses</h3>
          <h3>About</h3>
          <h3>Contact</h3>
        </div>
        <div className="flex">
          <h3>Login</h3>
          <button className="bg-primary text-white">Get Started Now</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
