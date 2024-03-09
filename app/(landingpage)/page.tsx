import Courses from "@/components/home/Courses";
import Faq from "@/components/home/Faq";
import Info from "@/components/home/Info";
import Reach from "@/components/home/Reach/Reach";
import Reviews from "@/components/home/Reviews/Reviews";
import Hero from "@/components/home/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Reach />
      <Info />
      <Courses />
      <Reviews />
    </main>
  );
}
