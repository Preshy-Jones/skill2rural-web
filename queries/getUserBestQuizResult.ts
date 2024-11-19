import Api from "@/api";
import { GetQuizResultResponse } from "@/types/course";
import { useQuery } from "@tanstack/react-query";

interface ApiError {
  message: string;
}
export function useGetUserBestQuizResult(token: string, courseId: string) {
  return useQuery<GetQuizResultResponse, ApiError>({
    queryKey: ["userBestQuizResult"],
    queryFn: async () => {
      const api = new Api();
      api.setToken(token);
      const response = await api.getUserBestQuizResult(courseId);
      return response.data;
    },
    enabled: token ? true : false,
  });
}
