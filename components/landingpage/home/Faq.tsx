"use client";
import React, { useState } from "react";
import FaqCloseButton from "@/public/faq-close.svg";
import FaqOpenButton from "@/public/faq-open.svg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { faqOptions, rafikiFaqOptions } from "@/data/faqData";

const Faq = () => {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const faq = pathname.includes("rafiki") ? rafikiFaqOptions : faqOptions;
  return (
    <>
      <div className="mt-28 flex justify-center font-neue flex-col items-center">
        <div className="sm:w-[53.33%] w-[90%]">
          <div className="mb-16">
            <h1 className="text-primaryGrey text-center text-[2.375rem] leading-eight  font-semibold">
              Frequently asked questions
            </h1>
            <h3 className="text-lightGrey text-center text-xl leading-[1.875rem] font-medium">
              Everything you need to know about{" "}
              {pathname.includes("rafiki") ? "Rafiki" : "Skill2Rural"}
            </h3>
          </div>
          <div className="divide-y">
            {faq.map((item, index) => (
              <FaqItem key={index} title={item.title} summary={item.summary} />
            ))}
          </div>
        </div>
      </div>
    </>
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
