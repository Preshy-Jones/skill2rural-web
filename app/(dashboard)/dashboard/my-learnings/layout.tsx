import InfoCard from "@/components/dashboard/InfoCard";
import React from "react";

const MyLearningLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="flex justify-center">
      <div className="w-[89.51%]">
        <InfoCard />
        {children}
      </div>
    </main>
  );
};

export default MyLearningLayout;
