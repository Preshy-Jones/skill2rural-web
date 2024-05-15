"use client";
import Image from "next/image";
import caretRight from "@/public/caret-right-plain.svg";
import verifiedTick from "@/public/verified-tick.svg";
import certificateImage from "@/public/certificate.svg";
import certifiedLogo from "@/public/certified-logo.svg";
import React from "react";
import { useSession } from "next-auth/react";
import skill2ruralLogo from "@/public/skill2rural-logo-certificate.svg";
import certificateOfCompletion from "@/public/certificate-of-completion.svg";
import { useGetCertificate } from "@/queries/getCertificate";
import { convertToHourseAndMinutes, formatDate } from "@/utils";
import Certificate from "@/components/dashboard/Certificate";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import certificateBg from "@/public/certificatebg.svg";
import Link from "next/link";

const AcommplishmentDetails = ({
  params,
}: {
  params: {
    courseId: string;
  };
}) => {
  const { data: session } = useSession();

  const courseId = params.courseId;
  const {
    isLoading,
    isError,
    error,
    data: certificate,
    isSuccess,
  } = useGetCertificate(
    //@ts-ignore
    session?.user.token || "",
    courseId
  );

  const inputRef = React.useRef(null);
  const downloadCertificate = async () => {
    const input = inputRef.current;
    //remove hidden class
    // input.classList.remove("hidden");

    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");

    // const pdf = new jsPDF("p", "pt", "a4");
    const pdf = new jsPDF({
      unit: "px",
      format: [canvas.width, canvas.height], // Use the canvas dimensions directly
    });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth * ratio, imgHeight * ratio);
    // pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("certificate.pdf");
    //add hidden class
    // input.classList.add("hidden");
  };

  const downloadImage = async () => {
    const input = inputRef.current;
    // input.classList.remove("hidden");
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png"); // or 'image/jpeg'

    // Create a link element
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "certificate.png"; // Set your desired filename

    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    //add hidden class
    // input.classList.add("hidden");
  };
  //@ts-ignore
  if (isLoading || !session?.user.token) {
    return <div>Loading Accomplishments...</div>;
  }

  //@ts-ignore
  if (session.user.token && isSuccess && certificate) {
    return (
      <div className="flex justify-center w-full font-neue">
        <div className="w-[89.51%] py-10">
          <div className="flex mb-14 font-medium leading-fifth items-center">
            <Link  href={"/dashboard/my-learnings"} className="">My Learnings</Link>
            <Image src={caretRight} alt="caret-right" />
            <h3>Accomplishments</h3>
          </div>

          <div className="flex">
            <div className="relative w-[3.5rem] h-[3.5rem] mr-4">
              <Image
                className="rounded-full w-full h-full "
                alt="profile-picture"
                src="https://preshyjonesbucket.s3.eu-west-1.amazonaws.com/photo_2023-09-29+11.13.53.jpeg"
                width={56}
                height={56}
              />
              <Image
                src={verifiedTick}
                alt="verified-tick"
                className="absolute bottom-0 right-0"
              />
            </div>
            <div className="">
              <h1 className="font-inter">{certificate.user.name}</h1>
              <h2 className="text-greyText4 font-inter">
                {certificate.user.email}
              </h2>
            </div>
          </div>
          <div className="flex justify-between font-neue mt-12">
            <div className="bg-white self-start pl-5 w-[38.9%] rounded-lgx py-6">
              <h2 className=" font-semibold text-lg leading-ninth mb-4">
                {certificate.course.title}
              </h2>
              <div className=" font-medium text-sm mb-9">
                <h2 className="leading-seventh mb-2">
                  Completed on {formatDate(certificate.createdAt)}
                </h2>
                <h2 className="leading-seventh mb-2">
                  Grade Achieved: {certificate.gradeInPercentage}%
                </h2>
                <h2 className="leading-seventh mb-2">
                  {convertToHourseAndMinutes(certificate.course.duration)}{" "}
                  approximately{" "}
                </h2>
              </div>
              <div className="flex">
                <Image
                  src={certifiedLogo}
                  alt="certified-logo"
                  className="mr-3"
                />
                <h2>Completed by {certificate.user.name}</h2>
              </div>
            </div>
            <div className="w-[58.74%] ">
              {/* <pre className="text-black">{JSON.stringify(certificate)}</pre> */}
              {/* <Certificate /> */}
              {/* <Image src={certificateImage} alt="certificate-bg1" /> */}
              <div className="relative h-[30rem]">
                <div
                  className="bg-white w-[46.625rem] h-[29.75rem] absolute top-0"
                  ref={inputRef}
                >
                  <Image
                    src={certificateBg}
                    alt="certificateBg2"
                    className=" right-0 absolute bottom-0"
                  />
                  <div className="pl-16 pt-16 w-[70%]">
                    <div className="mb-12">
                      <Image src={skill2ruralLogo} alt="skill2rural-logo" />
                      <h3 className="text-xxs leading-[13.66px] ml-11">
                        Lorem ipsum dolor sit amet consectetur
                      </h3>
                    </div>
                    <Image
                      className="mb-12"
                      src={certificateOfCompletion}
                      alt="certificateOfCompletion"
                    />
                    <div className="mb-3">
                      <div className=" border-b-[0.09375rem] border-black w-[90%] pb-3">
                        <h1 className=" text-2xl leading-thirteenth font-inter">
                          {certificate.user.name.toUpperCase()}
                        </h1>
                      </div>
                      {/* <div className="h-[0.09375rem] w-[60%] bg-black"></div> */}
                    </div>
                    <p className="mb-12 text-xxs leading-twelfth  font-avenir">
                      On the Completion of Course in{" "}
                      {certificate.course.title.toUpperCase()} ipsum dolor isit
                      amet, consectetur adipiscing elit, sed du eiusmod tempor
                      incididunt ut labore
                    </p>
                    <div className=" h-[1px] bg-black w-[25%] mb-1.5"></div>
                    <div className="flex justify-between">
                      <h2 className="text-xxs leading-fourteenth">
                        MANAGEMENT
                      </h2>
                      <h2 className="text-xxs leading-fourteenth">
                        {formatDate(certificate.createdAt)}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              {/* <Image src={certificateImage} alt="certificat-image" /> */}
              <button
                onClick={downloadImage}
                className=" bg-primary text-white leading-fifth font-semibold w-[15rem] h-[3.75rem] rounded-[6.25rem] mt-16 cursor-pointer"
              >
                Download Certificate
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AcommplishmentDetails;
