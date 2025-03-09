import Image from "next/image";
import React from "react";
import bot from "../../../public/bot.svg";

const Bot = () => {
  return (
    <div className="flex justify-center items-center mb-[7rem]">
      <Image src={bot} alt="Chat Bot" style={{ zIndex: 40 }} />
    </div>
  );
};

export default Bot;
