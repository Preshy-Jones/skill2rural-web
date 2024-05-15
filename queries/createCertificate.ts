import Api from "@/api";
import { Certificate } from "@/types/course";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

// export const useCreateCertificate = <Tda>(token: string, courseId: string) => {
//   return useMutation({
//     mutationFn: async (formData: { gradeInPercentage: number }) => {
//       // console.log("gradeInPercentage", formData.gradeInPercentage);

//       const api = new Api();
//       api.setToken(token);
//       const response = await api.createCertificate(courseId, formData);
//       return response.data;
//     },
//     onSuccess: (data) => {
//       console.log("success", data);
//       toast.success("Certificate created successfully");
//     },
//     onError: async (error) => {
//       console.log("error", error);
//       toast.error(error.message);
//     },
//   });
// };

export const useCreateCertificate = <TData = Certificate>(
  token: string,
  courseId: string
) => {
  return useMutation<TData, unknown, { gradeInPercentage: number }>({
    mutationFn: async (formData) => {
      const api = new Api();
      api.setToken(token);
      const response = await api.createCertificate(courseId, formData);
      return response.data as TData; // Ensure the correct type
    },
    onSuccess: (data) => {
      console.log("success", data);
      toast.success("Certificate created successfully");
    },
    onError: async (error: unknown) => {
      // Explicitly type as unknown
      console.log("error", error);
      toast.error((error as { message: string }).message);
    },
  });
};
