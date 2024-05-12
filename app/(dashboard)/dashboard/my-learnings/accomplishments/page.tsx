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
    session?.user.token || ""
  );

  //@ts-ignore
  if (isLoading || !session?.user.token) {
    return <div>Loading Accomplishments...</div>;
  }

  //@ts-ignore
  if (session.user.token && isSuccess) {
    return <AccomplishmentsSection data={data} />;
  }
};

export default Accomplishments;
