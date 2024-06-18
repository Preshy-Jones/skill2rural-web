import { useUpdateProgress } from "@/queries/updateCourseProgress";
import { Course } from "@/types/course";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import {
  MediaPlayer,
  MediaPlayerInstance,
  MediaProvider,
  useMediaState,
} from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import React, { forwardRef, use, useEffect, useRef } from "react";
import expandVideoIcon from "@/public/expand-video-icon.svg";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

const VideoPlayer = ({ course }: { course: Course }) => {
  const { data: session } = useSession();
  const updateCourseProgress = useUpdateProgress(
    //@ts-ignore
    session?.user.email || "",
    course.id
  );

  const queryClient = useQueryClient();

  const handleTimeUpdate = (currentTime: any) => {
    console.log("currentTime", currentTime.currentTime);
    console.log("duration", course);
    const progressPercentage =
      (currentTime.currentTime / course.duration) * 100;
    console.log("progressPercentage", progressPercentage);
    if (
      progressPercentage > 90 &&
      course.progress.length > 0 &&
      course.progress[0].progressPercentage < 90
    ) {
      queryClient.invalidateQueries({
        queryKey: ["singleCourse"],
      });
    }

    if (currentTime !== 0) {
      updateCourseProgress.mutate({ current_time: currentTime.currentTime });
    }
  };
  const player = useRef<MediaPlayerInstance>(null);

  const currentTime = useMediaState("currentTime", player);

  //  const { canFullscreen, fullscreen, currentTime } = useMediaStore(player);

  return (
    <div className="font-neue">
      {/* <pre>{JSON.stringify(course.progress, null, 2)}</pre> */}
      <div className="flex justify-between mt-6 mb-4">
        <h2 className=" font-semibold leading-primary text-2xl">
          {course.title}
        </h2>
        <h3>currentTime {currentTime}</h3>
        <h3>duration {course.duration}</h3>
        <Image
          src={expandVideoIcon}
          alt="expand-video"
          className="cursor-pointer"
          onClick={async () => {
            //@ts-ignore
            await player.current.enterFullscreen();
          }}
        />
      </div>
      <div className="relative">
        <MediaPlayer
          title={course.title}
          src={course.video_url}
          ref={player}
          onTimeUpdate={handleTimeUpdate}
          currentTime={course.progress[0]?.lastWatchedTime || 0}
          className="relative"
        >
          <MediaProvider />
          <DefaultVideoLayout
            // thumbnails={course.video_url}
            icons={defaultLayoutIcons}
          />
          {course.duration - currentTime < 10 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Link
                href={`/dashboard/my-learnings/course/${course.id}/questions`}
              >
                <button className="bg-primary h-[4.0625rem] text-white rounded-btn  text-sm leading-seventh px-6">
                  Take Quiz & Earn Course Certificate
                </button>
              </Link>
            </div>
          )}
        </MediaPlayer>
      </div>
    </div>
  );
};

export default VideoPlayer;
