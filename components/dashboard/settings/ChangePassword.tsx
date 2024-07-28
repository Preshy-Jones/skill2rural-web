import { useChangePassword } from "@/queries/useChangePassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const ChangePassword = () => {
  const { data: session } = useSession();
  //@ts-ignore
  const changePasswordMutation = useChangePassword(session?.user.email || "");

  const schema = z.object({
    oldPassword: z.string(),
    newPassword: z.string(),
    confirmPassword: z.string(),
  });

  type FormFields = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    setError,
    watch,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {},
    resolver: zodResolver(schema),
  });

  const handleSubmitQuery = async (data: FormFields) => {
    changePasswordMutation.mutate(data);
  };
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    // simulate 5 second delay
    await new Promise((resolve) => setTimeout(resolve, 5000));

    try {
      const response = await handleSubmitQuery(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="py-12 settings2:pl-12 pb-48 rounded-lg"
    >
      <h2 className=" font-semibold leading-6 text-xl mb-6">
        Password Settings
      </h2>
      {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
      <div>
        <div className="mb-3">
          <h3 className="font-semibold mb-1">Current Password</h3>
          <input
            type="text"
            placeholder="Current Password"
            className="border border-formInputBorder w-[70%] h-[3.4375rem] rounded-btn pl-4"
            {...register("oldPassword")}
          />
        </div>
        <div className="mb-3">
          <h3 className="font-semibold mb-1">New Password</h3>
          <input
            type="text"
            placeholder="Enter password"
            className="border border-formInputBorder w-[70%] h-[3.4375rem] rounded-btn pl-4"
            {...register("newPassword")}
          />
        </div>
        <div className="mb-3">
          <h3 className="font-semibold mb-1">Confirm Password</h3>
          <input
            type="text"
            placeholder="Enter password"
            className="border border-formInputBorder w-[70%] h-[3.4375rem] rounded-btn pl-4"
            {...register("confirmPassword")}
          />
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className=" bg-primary text-white leading-fifth font-semibold w-[15rem] h-[3.75rem] rounded-[6.25rem] mt-16"
        >
          {isSubmitting ? <div className="spinner"></div> : "Save Changes"}
        </button>
      </div>
    </form>
  );
};

export default ChangePassword;
