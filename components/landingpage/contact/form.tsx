import React from "react";
import TextField from "../../ui/icons/TextField";
import blueRectangle from "@/public/blue-rectangle.svg";
import sampleVideoImage from "@/public/contact-image.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const ContactForm = () => {
  return (
    <div className=" font-neue">
      <div className="grid sm:grid-cols-2 grid-cols-1  sm:w-[95%]">
        <div>
          <div className="flex sm:justify-end sm:mr-10 mb-6 justify-center">
            <div className="sm:w-[80%] w-[90%]">
              <h1 className=" font-semibold text-[2.875rem] text-primaryBlack  sm:mb-0 mb-4">
                We&apos;re here to help, whatever your needs
              </h1>
              <p className=" font-semibold text-lg leading-ninth text-greyText">
                Whether you have questions about our programs, want to
                collaborate, or simply wish to connect, we&apos;re here for you.
                Reach out to Skill2Rural
              </p>
            </div>
          </div>
          <Image src={sampleVideoImage} alt="blue-rectangle" />
        </div>
        <Form />
      </div>
    </div>
  );
};

export default ContactForm;

const Form = () => {
  const schema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
  });

  type FormFields = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    setError,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "test@email.com",
    },
    resolver: zodResolver(schema),
  });

  return (
    <div>
      <form
        action=""
        className="bg-white px-6 shadow-form pt-16 pb-12 rounded-2xc"
      >
        <h2 className=" font-semibold text-lg mb-8">Fill in the form below</h2>
        <div className="mb-12">
          <div className="mb-3">
            <h3 className="font-semibold">Full Name</h3>
            <TextField
              placeholder="your Full Name"
              className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
            />
          </div>
          <div className="mb-3">
            <h3 className="font-semibold">Email address</h3>
            <TextField
              placeholder="your email Address"
              className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
            />
          </div>
          <div className="mb-3">
            <h3 className="font-semibold">Subject</h3>
            <TextField
              placeholder="your Subject"
              className="border border-formInputBorder w-full h-[3.4375rem] rounded-btn pl-4"
            />
          </div>
          <div>
            <h3 className="font-semibold">Message</h3>
            <textarea
              placeholder="Email your message"
              cols={32}
              rows={10}
              className="border border-formInputBorder  rounded-2xc w-full pt-3 pl-5"
            ></textarea>
          </div>
        </div>
        <button className="bg-primary h-[3.75rem] text-white rounded-btn w-full">
          Submit Now
        </button>
      </form>
    </div>
  );
};
