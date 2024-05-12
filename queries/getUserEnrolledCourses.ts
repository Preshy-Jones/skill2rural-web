import Api from "@/api";
import {
  Course,
  CourseReview,
  GetCourseReviewResponse,
  GetUserEnrolledCourses,
} from "@/types/course";
import { useQuery } from "@tanstack/react-query";

interface ApiError {
  message: string;
}
export function useGetUserEnrolledCourses(token: string) {
  return useQuery<GetUserEnrolledCourses, ApiError>({
    queryKey: ["userEnrolledCourses"],
    queryFn: async () => {
      const api = new Api();
      api.setToken(token);
      const response = await api.getUsersEnrolledCourses();
      return response.data;
    },
    enabled: token ? true : false,
  });
}
