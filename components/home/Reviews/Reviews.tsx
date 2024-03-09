"use client";

import Image from "next/image";
import React, { useState } from "react";
import animoji1 from "@/public/animoji-1.svg";
import animoji2 from "@/public/animoji-2.svg";
import animoji3 from "@/public/animoji-3.svg";
import CaretLeftIcon from "@/public/caret-left.svg";
import CaretRightIcon from "@/public/caret-right.svg";
import { motion, AnimatePresence } from "framer-motion";
import { CarouselSpacing } from "./carousel";

const Reviews = () => {
  const reviews = [
    {
      name: "Adekunle Ahmed",
      review:
        '"The money management session exposed me to the need to properly manage how I spend the funds I get from family and friends. Now, I plan to start saving after this boot camp"',
      color: "bg-cardBlue",
      image: animoji1,
    },
    {
      name: "Abdulahi Nimat",
      review:
        '"Before, I didn\'t keep my money when I got money from my parents. I spend them immediately. Now, I understand the difference between savings, income, and investment. I know what I should put into assets and liabilities"',
      color: "bg-cardRed",
      image: animoji2,
    },
    {
      name: "Haruna Khadijat",
      review:
        '"I learned the differences between assets and liabilities. Now, I know how to save from the money my parents give me for my upkeep."',
      color: "bg-cardAsh",
      image: animoji3,
    },
    {
      name: "Haruna Khadijat",
      review:
        '"I learned the differences between assets and liabilities. Now, I know how to save from the money my parents give me for my upkeep."',
      color: "bg-cardAsh",
      image: animoji3,
    },
    {
      name: "Haruna Khadijat",
      review:
        '"I learned the differences between assets and liabilities. Now, I know how to save from the money my parents give me for my upkeep."',
      color: "bg-cardAsh",
      image: animoji2,
    },
    {
      name: "Haruna Khadijat",
      review:
        '"I learned the differences between assets and liabilities. Now, I know how to save from the money my parents give me for my upkeep."',
      color: "bg-cardAsh",
      image: animoji1,
    },

    // {
    //   name: "Emmanuel Adebayo",
    //   review:
    //     "orem ipsum dolor sit amet consectetur. Libero adipiscing lacus tellus proin feugiat pharetra facilisis lectus. Nunc viverra eget venenatis libero amet. Fermentum aenean commodo imperdiet vitae pulvinar duis. Felis auctor feugiat porttitor tincidunt proin non quam accumsan sed.",
    //   color: "bg-cardPurple",
    // },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 3 : prevIndex - 3
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 3 ? 0 : prevIndex + 3
    );
  };
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
            <CarouselSpacing reviews={reviews} />
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
