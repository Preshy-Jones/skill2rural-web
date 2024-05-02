"use client";

import Questions from "@/components/dashboard/common/Questions/Questions";
import Result from "@/components/dashboard/common/Questions/Result";
import React from "react";

const Quiz = () => {
  const [activePage, setActivePage] = React.useState(0);
  return (
    <div>
      {activePage === 0 && <Questions />}
      {activePage === 1 && <Result />}
    </div>
  );
};

export default Quiz;
