import Api from "@/api";
import { Course } from "@/types/course";
import { useQuery } from "@tanstack/react-query";

export function useGetSingleCoursePublic(courseId: string) {
  return useQuery<Course>({
    queryKey: ["singleCoursePublic"],
    queryFn: async () => {
      const api = new Api();

      const response = await api.getSingleCoursePublic(courseId);
      return response.data;
    },
  });
}
