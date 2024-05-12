import { HttpStatus } from "@/types/global";

export const handleErrorResponse = (error: any) => {
  if (error.response.data.statusCode === HttpStatus.BAD_REQUEST) {
    return error.response.data.message[0];
  }
  return error.response.data.message;
};

//create function to convert date to the format of February 10, 2024
export const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const convertToHourseAndMinutes = (duration: number) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours} hours ${minutes} minutes`;
};
