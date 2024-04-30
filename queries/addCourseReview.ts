import Api from "@/api";
import { useMutation } from "@tanstack/react-query";

export const useAddCourseReview = (token: string, courseId: string) => {
  return useMutation({
    mutationFn: async (formData: { rating: number; review: string }) => {
      const api = new Api();
      api.setToken(token);
      const response = await api.addCourseReview(courseId, formData);
      return response.data;
    },
    onSuccess: (data) => {
      console.log("success", data);
    },
    onError: (error) => {
      console.log("error", error);
    },
  });
};
