import Api from "@/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useChangePassword = (token: string) => {
  const queryClient = useQueryClient();
  return useMutation<
    any,
    unknown,
    { oldPassword: string; newPassword: string; confirmPassword: string }
  >({
    mutationFn: async (payload) => {
      const api = new Api();
      api.setToken(token);

      const response = await api.changePassword(payload);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success("Password changed successfully");
    },
    onError: async (error: unknown) => {
      // Explicitly type as unknown
      toast.error((error as { message: string }).message);
    },
  });
};
