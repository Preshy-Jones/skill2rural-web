"use client";

import React, { useState } from "react";
import FaqCloseButton from "@/public/faq-close.svg";
import FaqOpenButton from "@/public/faq-open.svg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const [open, setOpen] = React.useState(false);
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
        <div className="divide-y">
          {faqOptions.map((item, index) => (
            <FaqItem key={index} title={item.title} summary={item.summary} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

const FaqItem = ({ title, summary }: { title: string; summary: string }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      className="flex items-start justify-between py-6 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div>
        <h2 className="font-semibold text-lg">{title}</h2>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <AnimatePresence>
            {open && (
              <motion.p
                className="text-lightGrey leading-6 py-4 font-neue"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {summary}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      {open ? (
        <Image src={FaqCloseButton} alt="Close button" />
      ) : (
        <Image src={FaqOpenButton} alt="Open button" />
      )}
    </div>
  );
};

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
      "Yes, you can sign up as a facilitator to use the courses to teach your students. The facilitator's login is different. You can also earn a certificate for your dedication to education and community service. ",
  },
  {
    title: "Do I have to pay to sign up for the courses?",
    summary:
      "No, this is an open free online course. We will be introducing high-tier courses soon that would require a fee.",
  },
];
