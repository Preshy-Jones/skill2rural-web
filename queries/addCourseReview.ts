import Api from "@/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

interface AddCourseReview {
  token: string;
  courseId: string;
  setOpen: (value: boolean) => void;
}

export const useAddCourseReview = ({
  token,
  courseId,
  setOpen,
}: AddCourseReview) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (formData: { rating: number; comment: string }) => {
      const api = new Api();
      api.setToken(token);
      const response = await api.addCourseReview(courseId, formData);
      return response.data;
    },
    onSuccess: (data) => {
      console.log("success", data);
      setOpen(false);
      toast.success("Review added successfully");
      queryClient.invalidateQueries({
        queryKey: ["courseReviews"],
      });
    },
    onError: (error) => {
      console.log("error", error);
      toast.error((error as { message: string }).message);
    },
  });
};
