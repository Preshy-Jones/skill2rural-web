import ContactForm from "@/components/contact/form";
import Hero from "@/components/contact/hero";
import gradientBg from "@/public/gradient.svg";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="relative">
      <div className="z-10 relative">
        <Hero />
        <ContactForm />
      </div>
      <Image
        src={gradientBg}
        alt="gradient-bg"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 w-[100vw] z-0"
      />
    </div>
  );
};

export default Contact;
