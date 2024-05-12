import Api from "@/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateProgress = (token: string, courseId: number) => {
  return useMutation({
    mutationFn: async (formData: { current_time: number }) => {
      const api = new Api();
      api.setToken(token);
      const response = await api.updateCourseProgress(courseId, formData);
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
