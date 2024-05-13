"use client";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import caretRight from "@/public/caret-right-plain.svg";
import expandVideoIcon from "@/public/expand-video-icon.svg";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Player } from "video-react";
import { motion } from "framer-motion";
import Details from "@/components/dashboard/common/Course/Details";
import Questions from "@/components/dashboard/common/Course/QuestionsSection";
import Reviews from "@/components/dashboard/common/Course/Reviews";
import { useSession } from "next-auth/react";
import { useGetSingleCourse } from "@/queries/getSingleCourse";
import { useUpdateProgress } from "@/queries/updateCourseProgress";
import VideoPlayer from "@/components/VideoPlayer";
import Link from "next/link";
// import videoReactCss from "video-react/dist/video-react.css";
// import ReactPlayer from 'react-player'

const CourseDetailPage = ({
  params,
}: {
  params: {
    courseId: string;
  };
}) => {
  const options = ["Course details", "Questions", "Reviews"];
  const [active, setActive] = useState(0);

  const { data: session } = useSession();

  const courseId = params.courseId;
  const {
    isLoading,
    isError,
    error,
    //rename data to course
    data: course,
    isSuccess,
    //@ts-ignore
  } = useGetSingleCourse(session?.user.token || "", courseId);

  // useEffect(() => {
  //   if (playerRef.current && course && course?.progress[0]?.lastWatchedTime) {
  //     playerRef.current.seekTo(course?.progress[0].lastWatchedTime);
  //   }
  // }, []);
  //@ts-ignore
  if (isLoading || !session?.user.token) {
    return <div>Loading course details</div>;
  }

  //@ts-ignore
  if (session.user.token && isSuccess && course) {
    return (
      <div className="flex justify-center w-full">
        <div className="w-[89.51%] py-10">
          {/* <pre>{JSON.stringify(course, null, 2)}</pre> */}

          <div className="flex">
            <Link href={"/dashboard/my-learnings"}>My Learnings</Link>
            <Image src={caretRight} alt="caret-right" />
            <h3>Course</h3>
          </div>
          <div className="flex justify-between mt-6 mb-4">
            <h2 className=" font-semibold leading-primary text-2xl">
              {course.title}
            </h2>
            <Image src={expandVideoIcon} alt="expand-video" />
          </div>
          {/* <ReactPlayer
            url={course.video_url}
            controls
            width="640"
            height="360"
            onProgress={onProgress}
            ref={playerRef}
            onSeek={(e) => {
              console.log(e);
            }}
          /> */}
          <VideoPlayer course={course} />
          {/* <Player>
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        </Player> */}
          <div className="w-[40%]">
            <div className="grid grid-cols-3 pt-6">
              {course &&
                options.map((item, index) => {
                  if (
                    item === "Questions" &&
                    course?.progress[0]?.progressPercentage < 90
                  ) {
                    return;
                  }
                  return (
                    <div
                      key={index}
                      className="h-[3rem] flex flex-col items-center justify-between w-full cursor-pointer"
                      onClick={() => setActive(index)}
                    >
                      <h2
                        className={`${
                          index === active
                            ? "text-primary font-semibold"
                            : "text-greyText2"
                        }`}
                      >
                        {item}
                      </h2>
                      {active === index && (
                        <motion.div
                          // animate={{ x: active === 1 ? "100%" : 0 }}
                          // transition={{ type: "tween", duration: 0.4 }}
                          layoutId="navbar"
                          className="h-[4px] bg-primary w-full rounded-md"
                        ></motion.div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
          {active === 0 && <Details course={course} />}
          {active === 1 && <Questions courseId={courseId} />}
          {active === 2 && <Reviews courseId={courseId} />}
        </div>
      </div>
    );
  }
};

export default CourseDetailPage;

interface MyPlayerProps {
  url: string; // assuming other props you want to pass
  controls: boolean;
  width: string;
  height: string;
  onProgress: (progress: any) => void;
  ref: any;
}

// const MyPlayer = React.forwardRef<typeof ReactPlayer, MyPlayerProps>(
//   (props, ref) => {
//     return <ReactPlayer ref={ref} {...props} />;
//   }
// );

// MyPlayer.displayName = "MyPlayer";