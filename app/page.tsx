import Courses from "@/components/Courses";
import Faq from "@/components/Faq";
import Info from "@/components/Info";
import Reach from "@/components/Reach";
import Reviews from "@/components/Reviews";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Reach />
      <Info />
      <Courses />
      <Reviews />
      <Faq/>
    </main>
  );
}
