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
    <div>
      <div className="flex justify-between items-center mb-12">
        <h1 className=" font-semibold leading-fifth ">Reviews</h1>
        <button
          className=" border border-primary text-sm px-4 h-11 rounded-btn font-neue font-semibold text-primary"
          onClick={() => setOpen(true)}
        >
          Write a review
        </button>
      </div>
      <div>
        <Dialog open={open} onOpenChange={setOpen}>
          {/* <DialogTrigger></DialogTrigger> */}
          <DialogContent
            className="w-[55.33%] sm:rounded-review rounded-3xl"
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
      </div>
    </div>
  );
};

export default ReviewForm;
