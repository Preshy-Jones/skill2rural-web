"use client";
import AccomplishmentsSection from "@/components/dashboard/AccomplishmentsSection";
import InfoCard from "@/components/dashboard/InfoCard";
import { useGetUserCertificates } from "@/queries/useGetCourseCertificates";
import { useSession } from "next-auth/react";
import React from "react";

const Accomplishments = () => {
  const { data: session } = useSession();

  const { isLoading, isError, error, data, isSuccess } = useGetUserCertificates(
    //@ts-ignore
    session?.user.email || ""
  );

  //@ts-ignore
  if (isLoading || !session?.user.email) {
    return <div>Loading Accomplishments...</div>;
  }

  //@ts-ignore
  if (session.user.email && isSuccess) {
    return <AccomplishmentsSection data={data} />;
  }
};

export default Accomplishments;
