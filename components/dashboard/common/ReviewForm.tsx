import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Ratings } from "@/components/ui/rating";
import { useAddCourseReview } from "@/queries/addCourseReview";
import xCloseButton from "@/public/x-close.svg";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const ReviewForm = ({ courseId }: { courseId: string }) => {
  const [ratingValue, setRatingValue] = React.useState(1);
  const [comment, setComment] = React.useState("");
  const [error, setError] = React.useState("");
  const { data: session } = useSession();
  const [open, setOpen] = React.useState(false);
  const addReview = useAddCourseReview({
    courseId,
    //@ts-ignore
    token: session?.user.email || "",
    setOpen,
  });

  const handleSubmit = () => {
    if (!comment) {
      setError("Please write a review");
      return;
    }
    addReview.mutate({ rating: ratingValue, comment });
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (error) setError("");
    setComment(e.target.value);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <button className=" border border-primary text-sm p-4 rounded-btn font-neue font-semibold text-primary">
          Write a review
        </button>
      </DialogTrigger>
      <DialogContent
        closeButtonComponent={<Image src={xCloseButton} alt="x-close" />}
      >
        <DialogHeader>
          <DialogTitle className=" text-black text-3.5xl font-neue font-medium text-center mb-4">
            Rate this course
          </DialogTitle>

          <DialogDescription className="flex flex-col items-center justify-center">
            <Ratings
              rating={ratingValue}
              variant="starColor"
              totalStars={5}
              size={24}
              setRating={(rating) => setRatingValue(rating)}
            />
            <textarea
              placeholder="Write a review..."
              name=""
              id=""
              cols={30}
              rows={10}
              value={comment}
              onChange={handleOnChange}
              className="border border-borderGrey w-full mt-7 p-4 rounded-2xc text-primaryBlack"
            ></textarea>
            {error && <p className="text-red-500">{error}</p>}
            <button
              className="bg-primary h-[3.75rem] text-white rounded-btn w-full mt-6"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewForm;
