import { Progress } from "@/components/ui/progress";
import { Ratings } from "@/components/ui/rating";
import Image from "next/image";

import React from "react";

const Reviews = () => {
  return (
    <div className="font-neue mt-14">
      <h1 className=" font-semibold leading-fifth">Reviews Summary</h1>
      <div className="flex">
        <div className="mr-4">
          <h1 className="text-primary text-[4rem] font-bold">4.5</h1>
          <h2 className=" font-medium text-lg leading-ninth">Course rating</h2>
          <Ratings rating={4.5} variant="starColor" totalStars={5} size={24} />
        </div>
        <div className="w-full ">
          <div className="flex items-center mb-3">
            <Progress value={67} className="h-[0.375rem] bg-textFourth mr-4" />
            <Ratings rating={5} variant="starColor" totalStars={5} size={24} />
          </div>
          <div className="flex items-center mb-3">
            <Progress value={40} className="h-[0.375rem] bg-textFourth mr-4" />
            <Ratings rating={4} variant="starColor" totalStars={5} size={24} />
          </div>
          <div className="flex items-center mb-3">
            <Progress value={33} className="h-[0.375rem] bg-textFourth mr-4" />
            <Ratings rating={3} variant="starColor" totalStars={5} size={24} />
          </div>
          <div className="flex items-center mb-3">
            <Progress value={25} className="h-[0.375rem] bg-textFourth mr-4" />
            <Ratings rating={2} variant="starColor" totalStars={5} size={24} />
          </div>
          <div className="flex items-center mb-3">
            <Progress value={15} className="h-[0.375rem] bg-textFourth mr-4" />
            <Ratings rating={1} variant="starColor" totalStars={5} size={24} />
          </div>
        </div>
      </div>

      <div className="mt-2">
        <h1 className=" font-semibold leading-fifth mb-12">Reviews</h1>
        <div className=" divide-y divide-formInputBorder">
          {reviews.map((review) => (
            <div key={review.id} className="pt-6 pb-2">
              <div className="flex items-center mb-4">
                <Image
                  src={review.user.image}
                  alt={review.user.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <h2 className=" font-semibold">{review.user.name}</h2>
              </div>
              <div className="flex items-center mb-6">
                <div className="mr-5">
                  <Ratings
                    rating={review.rating}
                    variant="starColor"
                    totalStars={5}
                    size={24}
                  />
                </div>
                <p className=" text-sm leading-fifth">{timeAgo(review.date)}</p>
              </div>
              <p className="text-greyText font-medium leading-fifth">
                {review.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

const reviews = [
  {
    id: 1,
    rating: 5,
    review:
      "Design thinking is a human centered approach to problem solving. It starts with the users in mind and ends with a solution designed specially to meet their needs. The core of design thinking is empathy. All other key factors needed to make design thinking work include; team work, iteration and curiosity, as well as testing the solution.",
    user: {
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    date: "2022-10-28T12:15:41.000Z",
  },
  {
    id: 2,
    rating: 4,
    review:
      "Design thinking is a human centered approach to problem solving. It starts with the users in mind and ends with a solution designed specially to meet their needs. The core of design thinking is empathy. All other key factors needed to make design thinking work include; team work, iteration and curiosity, as well as testing the solution.",
    user: {
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/19.jpg",
    },
    date: "2024-03-20T12:15:41.000Z",
  },
  {
    id: 3,
    rating: 3,
    review:
      "Design thinking is a human centered approach to problem solving. It starts with the users in mind and ends with a solution designed specially to meet their needs. The core of design thinking is empathy. All other key factors needed to make design thinking work include; team work, iteration and curiosity, as well as testing the solution.",
    user: {
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    date: "2023-10-28T12:15:41.000Z",
  },
  {
    id: 4,
    rating: 2,
    review:
      "Design thinking is a human centered approach to problem solving. It starts with the users in mind and ends with a solution designed specially to meet their needs. The core of design thinking is empathy. All other key factors needed to make design thinking work include; team work, iteration and curiosity, as well as testing the solution.",
    user: {
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    date: "2024-03-24T12:15:41.000Z",
  },
];

//a date formatting function which takes a date string and returns a string which says how long ago the date was, for example 2 days ago, 3 weeks ago,  4 months ago, 5 years ago, 2 hours ago, 3 minutes ago, 4 seconds ago.
const timeAgo = (date: string) => {
  const currentDate = new Date();
  const reviewDate = new Date(date);
  const diff = currentDate.getTime() - reviewDate.getTime();

  if (diff < 1000) {
    return "just now";
  }

  const seconds = Math.floor(diff / 1000);
  if (seconds < 60) {
    return `${seconds} seconds ago`;
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} minutes ago`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} hours ago`;
  }

  const days = Math.floor(hours / 24);
  if (days < 30) {
    return `${days} days ago`;
  }

  const months = Math.floor(days / 30);
  if (months < 12) {
    return `${months} months ago`;
  }

  const years = Math.floor(months / 12);
  return `${years} years ago`;
};
