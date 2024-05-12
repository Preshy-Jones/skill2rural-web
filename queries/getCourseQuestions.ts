import Api from "@/api";
import { CourseQuestion, GetCourseQuestionResponse } from "@/types/course";
import { useQuery } from "@tanstack/react-query";
import { ApiError } from "next/dist/server/api-utils";

export function useGetCourseQuestions(token: string, courseId: string) {
  return useQuery<CourseQuestion[], ApiError>({
    queryKey: ["courseQuestions"],
    queryFn: async () => {
      const api = new Api();
      api.setToken(token);
      const response = await api.getCourseQuestions(courseId);
      return response.data;
    },
    retry: false,
    enabled: token ? true : false,
  });
}
