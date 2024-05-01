import Api from "@/api";
import { CourseReview, GetCourseReviewResponse } from "@/types/course";
import { useQuery } from "@tanstack/react-query";

interface ApiError {
  message: string;
}
export function useGetCourseReviews(token: string, courseId: string) {
  return useQuery<GetCourseReviewResponse, ApiError>({
    queryKey: ["courseReviews"],
    queryFn: async () => {
      const api = new Api();
      api.setToken(token);
      const response = await api.getCourseReviews(courseId);
      return response.data;
    },
    enabled: token ? true : false,
  });
}
