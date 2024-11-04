import Api from "@/api";
import { Course } from "@/types/course";
import { useQuery } from "@tanstack/react-query";

export function useGetCourses() {
  return useQuery<Course[]>({
    queryKey: ["courses"],
    queryFn: async () => {
      const api = new Api();
      const response = await api.getCourses();

      return response.data;
    },
  });
}
