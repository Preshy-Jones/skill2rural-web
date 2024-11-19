import React from "react";
import chatBot_banner from "@/public/chatBot-banner.svg";
import Image from "next/image";

const ChatBot = () => {
  return (
    <div className="md:flex bg-greyBg2 p-[5rem] justify-between items-center">
      <div className="md:w-1/2 space-y-6">
        <div className="bg-primary text-white rounded-btn w-fit px-7 py-[2px] text-[16px] font-thin">
          Skill2Rural Chatbot
        </div>
        <div className="space-y-3">
          <h1 className="text-[32px] font-semibold leading-[40px]">
            Skill2Rural personalized career buddy “Rafiki” powrered by ISLP
            model
          </h1>
          <p className="text-[16px] font-thin">
            Meet Rafiki, your personalized career companion, here to make career
            discovery inspiring and straightforward. With the ISLP
            model—Interest, Strength, Limitation, and Purpose—Rafiki is designed
            to understand you. Whether you’re exploring new paths or seeking
            clarity, Rafiki will help map out options that match your skills and
            goals. Start your journey to a fulfilling career today
          </p>
        </div>

        <button className="bg-primary text-white w-full md:w-[15rem] h-[3.75rem] py-2 rounded-btn font-bold">
          Coming Soon
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <Image
          src={chatBot_banner}
          alt="Chat bot"
          width={600}
          height={400}
          className="w-[600px] h-[400px]"
        />
      </div>
    </div>
  );
};

export default ChatBot;
