import Hero from "@/components/landingpage/rafiki/Hero";
import Process from "@/components/landingpage/rafiki/Process/Process";
import Reviews from "@/components/landingpage/home/Reviews/Reviews";
import Bot from "@/components/landingpage/rafiki/Bot";
import ActionSection from "@/components/landingpage/rafiki/actionSection";
import BackgroundVector from "@/components/landingpage/rafiki/backgroundVector";

export default function Rafiki() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <Bot />
      <div
        className="absolute -top-[40vh] left-0 md:top-[20vh]"
        style={{ zIndex: 0 }}
      >
        <BackgroundVector />
      </div>
      <Process />
      <ActionSection />
      <Reviews />
    </div>
  );
}
