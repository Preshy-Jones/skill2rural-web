import Api from "@/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useUpdateUserSettings = (token: string) => {
  const queryClient = useQueryClient();
  return useMutation<
    any,
    unknown,
    { email: string; name: string; organisation?: string; file?: any }
  >({
    mutationFn: async (payload) => {
      const api = new Api();
      api.setToken(token);

      console.log("payload", payload);

      const formData = new FormData();
      formData.append("email", payload.email);
      formData.append("name", payload.name);

      if (payload.organisation) {
        formData.append("organisation", payload.organisation);
      }

      if (payload.file) {
        formData.append("file", payload.file[0]);
      }
      const response = await api.updateUser(formData);
      return response.data;
    },
    onSuccess: (data) => {
      console.log("success", data);
      toast.success("Profile updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["userSettings"],
      });
    },
    onError: async (error: unknown) => {
      // Explicitly type as unknown
      console.log("error", error);
      toast.error((error as { message: string }).message);
    },
  });
};
