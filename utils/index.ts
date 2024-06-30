import { HttpStatus } from "@/types/global";

export const handleErrorResponse = (error: any) => {
  if (error.statusCode === HttpStatus.BAD_REQUEST) {
    return error.message[0];
  }
  return error.message;
};

//create function to convert date to the format of February 10, 2024
export const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const convertToHourseAndMinutesAndSeconds = (
  durationInSeconds: number
) => {
  if (durationInSeconds < 60) {
    return `${durationInSeconds} seconds`;
  } else if (durationInSeconds < 3600) {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds % 60;
    return `${minutes} minutes ${seconds} seconds`;
  } else {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = durationInSeconds % 60;
    return `${hours} hours ${minutes} minutes ${seconds} seconds`;
  }
};

export const getInitials = (name: string) => {
  const names = name.split(" ");
  let initials = names[0].substring(0, 1).toUpperCase();
  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};
