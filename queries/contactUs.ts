import Api from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useContactUs = () => {
  return useMutation({
    mutationFn: async (formData: {
      name: string;
      email: string;
      message: string;
    }) => {
      const api = new Api();
      const response = await api.contactUs(formData);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success("Message sent successfully");
    },
    onError: (error) => {
      console.log("error", error);
      toast.error((error as { message: string }).message);
    },
  });
};
