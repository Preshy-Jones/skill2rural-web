import Api from "@/api";
import { Certificate, Course } from "@/types/course";
import { useQuery } from "@tanstack/react-query";

export function useGetCertificate(token: string, courseId: string) {
  return useQuery<Certificate>({
    queryKey: ["getCertificate"],
    queryFn: async () => {
      const api = new Api();
      api.setToken(token);
      const response = await api.getCourseCertificate(courseId);
      return response.data;
    },
    enabled: token ? true : false,
  });
}
