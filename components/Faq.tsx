import React from "react";
import FaqCloseButton from "@/public/faq-close.svg";
import Image from "next/image";

const Faq = () => {
  return (
    <div className="mt-28 flex justify-center font-neue">
      <div className="w-[53.33%]">
        <div className="mb-16">
          <h1 className="text-primaryGrey text-center text-[2.375rem] leading-eight  font-semibold">
            Frequently asked questions
          </h1>
          <h3 className="text-lightGrey text-center text-xl leading-[1.875rem] font-medium">
            Everything you need to know about Skill2Rural
          </h3>
        </div>
        <div>
          {faqOptions.map((item, index) => (
            <div className="flex items-start justify-between" key={index}>
              <div>
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <h2 className="text-lightGrey leading-6 mt-2">
                  {item.summary}
                </h2>
              </div>
              <Image src={FaqCloseButton} alt="Close button" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

const faqOptions = [
  {
    title: "What are the benefits of taking the courses on this platform? ",
    summary:
      "You will learn from experts who are professionals in their field and they will be sharing examples of how you can take your personal and professional development journey forward. You will also earn a certificate after completing all the modules.",
  },
  {
    title: "What topics would I benefit from? ",
    summary:
      "The courses on the platform range from Money Management, Storytelling, Servant Leadership, Design Thinking, Vision Boarding, etc. There are currently seven courses hosted on the platform. We will be adding more courses soon.",
  },
  {
    title: "Are these courses just for young people? ",
    summary:
      "Yes from 16 - 25 years old. However, those above the age range can benefit from it. ",
  },
  {
    title: "I am an educator and teacher, can I sign up for the courses",
    summary:
      "Yes from 16 - 25 years old. However, those above the age range can benefit from it. ",
  },
  {
    title: "Do I have to pay to sign up for the courses?",
    summary:
      "No, this is an open free online course. We will be introducing high-tier courses soon that would require a fee.",
  },
];
