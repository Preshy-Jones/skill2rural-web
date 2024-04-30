import Api from "@/api";
import { Course } from "@/types/course";
import { useQuery } from "@tanstack/react-query";

export function useGetCourses(token: string) {
  return useQuery<Course[]>({
    queryKey: ["courses"],
    queryFn: async () => {
      const api = new Api();
      api.setToken(token);
      const response = await api.getCourses();

      return response.data;
    },
    enabled: token ? true : false,
  });
}
