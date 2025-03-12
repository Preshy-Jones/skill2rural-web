"use client";

import Image from "next/image";
import React, { useState } from "react";

import { CarouselSpacing } from "./carousel";
import { rafikiReviews, reviews } from "@/data/review";
import { usePathname } from "next/navigation";

const Reviews = () => {
  const pathname = usePathname();
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentReview = pathname.includes("rafiki") ? rafikiReviews : reviews;
  return (
    <div className="flex justify-center mt-36 font-neue">
      <div className="w-[90.69%]">
        <div className="mb-28">
          <h5 className="text-primary leading-fifth font-semibold text-center">
            Reviews
          </h5>
          <h2 className="text-center font-semibold text-3.5xl leading-tertiary">
            What People Are Saying
          </h2>
        </div>
        <div className="relative h-[20rem]">
          {/* <div className=" grid grid-cols-3 gap-x-12 mt-12 ">
            {reviews
              .slice(currentIndex, currentIndex + 3)
              .map((review, index) => (
                <div key={index} className="relative h-[10.8125rem]">
                  <Image
                    src={review.image}
                    alt={review.name}
                    className="absolute z-30 -top-10 -left-7 rounded-tertiary border border-primary"
                  />
                  <div className="absolute top-0 z-20 bg-white border border-black rounded-2xl px-8 py-10 flex flex-col justify-between h-[10.8125rem]">
                    <p className="text-sm leading-seventh font-medium text-greyText">
                      {review.review}
                    </p>
                    <h3 className="font-bold text-sm leading-seventh mt-4">
                      {review.name}
                    </h3>
                  </div>
                  <div className="bg-primary absolute w-full top-2 right-0 left-2 mx-auto z-0 h-[10.8125rem] rounded-2xl"></div>
                </div>
              ))}
          </div> */}
          <div className="relative w-full">
            <CarouselSpacing reviews={currentReview} />
          </div>

          <div className="absolute z-40 flex justify-end w-full top-1/2 transform -translate-y-1/2">
            {/* <motion.div
              onClick={goToPreviousSlide}
              className="border border-primary bg-white w-[3.25rem] h-[4.125rem] flex justify-center items-center rounded-btn cursor-pointer"
            >
              <Image src={CaretLeftIcon} alt="caret-left" className="" />
            </motion.div> */}
            {/* <motion.div
              onClick={goToNextSlide}
              className="border border-primary bg-white w-[3.25rem] h-[4.125rem] flex justify-center items-center rounded-btn cursor-pointer"
            >
              <Image src={CaretRightIcon} alt="caret-left" className="" />
            </motion.div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
