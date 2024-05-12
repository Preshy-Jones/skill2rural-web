import { useUpdateProgress } from "@/queries/updateCourseProgress";
import { Course } from "@/types/course";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import React, { forwardRef, useEffect, useRef } from "react";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

// const MyPlayer = forwardRef((props, ref) => {
//   return <ReactPlayer ref={ref} {...props} />;
// });

const VideoPlayer = ({ course }: { course: Course }) => {
  const { data: session } = useSession();
  const updateCourseProgress = useUpdateProgress(
    //@ts-ignore
    session?.user.token || "",
    course.id
  );
  const playerRef = useRef(null);
  const onProgress = (progress: any) => {
    console.log(progress);
    const currentTime = progress.playedSeconds;
    // Make API call to update progress on backend
    if (currentTime !== 0) {
      updateCourseProgress.mutate({ current_time: currentTime });
    }
  };
  // const startTime = 300;
  // useEffect(() => {
  //   if (startTime && playerRef.current) {
  //     playerRef.current.seekTo(startTime);
  //   }
  // }, [startTime]);

  // useEffect(() => {
  //   if (playerRef.current && course && course?.progress[0]?.lastWatchedTime) {
  //     playerRef.current.seekTo(course?.progress[0].lastWatchedTime);
  //   }
  // }, []);
  return (
    <div>
      {/* <button
        className="text-red-500 cursor-pointer bg-primary px-4"
        onClick={() => {
          playerRef.current.seekTo(400);
        }}
      >
        Seek
      </button> */}
      <div>
        <ReactPlayer
          url={course.video_url}
          controls
          width="640"
          height="360"
          onProgress={onProgress}
          ref={playerRef}
          onSeek={(e) => {
            console.log(e);
          }}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
