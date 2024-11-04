import Api from "@/api";
import {
  Course,
  CourseReview,
  GetCourseReviewResponse,
  GetUserCertificates,
  GetUserEnrolledCourses,
} from "@/types/course";
import { useQuery } from "@tanstack/react-query";

interface ApiError {
  message: string;
}
export function useGetUserCertificates(token: string) {
  return useQuery<GetUserCertificates, ApiError>({
    queryKey: ["userCertificates"],
    queryFn: async () => {
      const api = new Api();
      api.setToken(token);
      const response = await api.getUserCertificates();
      return response.data;
    },
    enabled: token ? true : false,
  });
}
