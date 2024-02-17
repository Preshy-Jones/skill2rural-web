import React from "react";
import collegeStudentsImage from "@/public/african-college-student.svg";
import Image from "next/image";

const Reach = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Image src={collegeStudentsImage} alt="collegeStudentsImage" />
      </div>
      <div>
        <h3>REACH</h3>
        <div>
          <div>
            <h3>50+</h3>
            <h3>Students reached</h3>
          </div>
          <div>
            <h3>7550+</h3>
            <h3>Students reached</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reach;


const content = [
  {
    title:"Students reached",
    value:"50+"
  },
  
]