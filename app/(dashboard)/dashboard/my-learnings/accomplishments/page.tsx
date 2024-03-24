"use client";
import AccomplishmentsSection from "@/components/dashboard/AccomplishmentsSection";
import InfoCard from "@/components/dashboard/InfoCard";
import React from "react";

const Accomplishments = () => {
  return (
    <main className="flex justify-center">
      <div className="w-[89.51%]">
        <InfoCard />
        <AccomplishmentsSection />
      </div>
    </main>
  );
};

export default Accomplishments;
