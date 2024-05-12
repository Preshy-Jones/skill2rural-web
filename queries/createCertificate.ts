import Api from "@/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useCreateCertificate = (token: string, courseId: string) => {
  return useMutation({
    mutationFn: async (formData: { gradeInPercentage: number }) => {
      // console.log("gradeInPercentage", formData.gradeInPercentage);

      const api = new Api();
      api.setToken(token);
      const response = await api.createCertificate(courseId, formData);
      return response.data;
    },
    onSuccess: (data) => {
      console.log("success", data);
      toast.success("Certificate created successfully");
    },
    onError: async (error) => {
      console.log("error", error);
      toast.error(error.message);
    },
  });
};
