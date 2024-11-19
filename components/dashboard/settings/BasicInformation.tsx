import { useUpdateUserSettings } from "@/queries/useUpdateUser";
import { User, UserType } from "@/types/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import imageUploadIcon from "@/public/icon.svg";
import { getInitials } from "@/utils";
const BasicInformation = ({ user }: { user: User }) => {
  const { data: session } = useSession();
  const updateUser = useUpdateUserSettings(
    //@ts-ignore
    session?.user.email || ""
  );
  const schema = z.object({
    name: z.string(),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email(),
    organisation: z.string().optional(),
    file: z.any().optional(),
  });
  // .refine(
  //   (data) => {
  //     if (user.type === UserType.EDUCATOR && !data.organisation) {
  //       return false;
  //     }
  //     return true;
  //   },
  //   {
  //     message: "Organisation is requiredd",
  //     path: ["organisation"],
  //   }
  // );
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
    defaultValues: {
      // email: user?.email,
      // name: user?.name,
      // organisation: user?.organisation || "",
    },
    resolver: zodResolver(schema),
  });

  const handleSubmitQuery = async (data: FormFields) => {
    updateUser.mutate(data);
  };
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    // simulate 5 second delay
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("hdhdhdhh");

    console.log(data);

    try {
      const response = await handleSubmitQuery(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const [fileName, setFileName] = useState("");
  useEffect(() => {
    if (user) {
      setValue("email", user.email);
      setValue("name", user.name);
      if (user.type === UserType.EDUCATOR) {
        setValue("organisation", user.organisation);
      }
    }
  }, [user, setValue]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="settings:divide-x divide-formInputBorder  py-12 rounded-lg flex settings2:flex-row flex-col w-full"
    >
      {/* <pre>{JSON.stringify(session?.user, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
      <div className="px-6 mb-20 settings2:mb-0">
        {user?.profile_photo ? (
          <Image
            className="rounded-full w-[6.25rem] h-[6.25rem]"
            alt="profile-picture"
            src={user?.profile_photo}
            width={100}
            height={100}
          />
        ) : (
          <div className="rounded-full  w-[3.5rem] h-[3.5rem] flex justify-center items-center bg-primary">
            <div className="text-white text-center leading-5 font-semibold">
              {getInitials(user.name)}
            </div>
          </div>
        )}
        <div className="mt-5">
          <h3>Profile photo</h3>
          <p className=" text-greyText3 text-sm leading-eleventh">
            This image will be displayed on your profile
          </p>
        </div>
        <div
          onClick={() => {
            document.getElementById("fileInput")?.click();
          }}
          className="cursor-pointer border-primary border-[2px] flex justify-between w-[9.25rem] h-9 items-center rounded-lg mt-4 px-1"
        >
          <Image src={imageUploadIcon} alt="upload-img-icon" />
          <h3 className=" text-primary font-semibold">Change Photo</h3>
        </div>
        <h2>{fileName}</h2>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          // {...register("file")}
          onChange={(e) => {
            //@ts-ignore
            if (e.target.files.length > 0) {
              //@ts-ignore
              setFileName(e.target.files[0].name);
              setValue("file", e.target.files);
            }
          }}
        />
      </div>
      <div className="w-full px-6 pb-48">
        <div className="mb-4">
          <h3 className="font-semibold mb-1">Full Name</h3>
          <input
            type="text"
            placeholder="your Full name"
            className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
            {...register("name")}
          />
          {errors.name && (
            <div className="text-red-500">{errors.name?.message}</div>
          )}
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-1">Email Address</h3>
          <input
            type="email"
            placeholder="your email Address"
            className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
            {...register("email")}
          />
          {errors.email && (
            <div className="text-red-500">{errors.email?.message}</div>
          )}
        </div>
        {user.type === UserType.EDUCATOR && (
          <div className="mb-4">
            <h3 className="font-semibold mb-1">Organisation</h3>
            <input
              type="text"
              placeholder="your organisation"
              className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
              {...register("organisation")}
            />
            {errors.organisation && (
              <div className="text-red-500">{errors.organisation?.message}</div>
            )}
          </div>
        )}
        <button
          className=" cursor-pointer bg-primary text-white leading-fifth font-semibold w-[15rem] h-[3.75rem] rounded-[6.25rem] mt-16"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? <div className="spinner"></div> : "Save Changes"}
        </button>
      </div>
    </form>
  );
};

export default BasicInformation;
