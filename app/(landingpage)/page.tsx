"use client";
import Courses from "@/components/landingpage/home/Courses";
import Faq from "@/components/landingpage/home/Faq";
import Info from "@/components/landingpage/home/Info";
import Reach from "@/components/landingpage/home/Reach/Reach";
import Reviews from "@/components/landingpage/home/Reviews/Reviews";
import Hero from "@/components/landingpage/home/hero";
import ChatBot from "@/components/landingpage/home/ChatBot";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full">
      <Hero />
      <Reach />
      <ChatBot />
      <Info />
      <Courses />
      <Reviews />
    </main>
  );
}
