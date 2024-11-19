import Api from "@/api";
import {
  Certificate,
  GetQuizResultResponse,
  SubmitQuizResponse,
} from "@/types/course";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useSubmitQuiz = <TData = SubmitQuizResponse>(
  token: string,
  courseId: string
) => {
  return useMutation<TData, unknown, { gradeInPercentage: number }>({
    mutationFn: async (formData) => {
      const api = new Api();
      api.setToken(token);
      const response = await api.submitQuiz(courseId, formData);
      return response.data as TData; // Ensure the correct type
    },
    onSuccess: (data) => {
      console.log("success", data);
      toast.success("Quiz submitted successfully");
    },
    onError: async (error: unknown) => {
      // Explicitly type as unknown
      console.log("error", error);
      toast.error((error as { message: string }).message);
    },
  });
};
