import Api from "@/api";
import {
  Course,
  CourseReview,
  GetCourseReviewResponse,
  GetUserEnrolledCourses,
} from "@/types/course";
import { User } from "@/types/global";
import { useQuery } from "@tanstack/react-query";

interface ApiError {
  message: string;
}
export function useGetUserSettings(token: string) {
  return useQuery<User, ApiError>({
    queryKey: ["userSettings"],
    queryFn: async () => {
      const api = new Api();
      api.setToken(token);
      const response = await api.getUserSettings();
      return response.data;
    },
    enabled: token ? true : false,
  });
}
