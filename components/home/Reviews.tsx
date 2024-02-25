import React from "react";

const Reviews = () => {
  return (
    <div className="flex justify-center mt-36">
      <div className="w-[95.83%]">
        <h5 className="text-primary leading-fifth font-semibold text-center">
          Reviews
        </h5>
        <h2 className="text-center font-semibold text-3.5xl leading-tertiary">
          What People Are Saying
        </h2>
        <div className=" grid grid-cols-4 mt-12">
          {reviews.map((review, index) => (
            <div key={index} className={`${review.color}`}>
              <p className=" text-sm leading-seventh text-white font-medium">
                {review.review}
              </p>
              <div>
                <div className="border-2 border-white"></div>
              </div>
              <h3 className="">{review.name}</h3>
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
    name: "Adekunle Ahmed",
    review:
      "The money management session exposed me to the need to properly manage how I spend the funds I get from family and friends. Now, I plan to start saving after this boot camp",
    color: "bg-cardBlue",
  },
  {
    name: "Abdulahi Nimat",
    review:
      "Before, I didn't keep my money when I got money from my parents. I spend them immediately. Now, I understand the difference between savings, income, and investment. I know what I should put into assets and liabilities.",
    color: "bg-cardRed",
  },
  {
    name: "Haruna Khadijat",
    review:
      "I learned the differences between assets and liabilities. Now, I know how to save from the money my parents give me for my upkeep.",
    color: "bg-cardAsh",
  },
  {
    name: "Emmanuel Adebayo",
    review:
      "orem ipsum dolor sit amet consectetur. Libero adipiscing lacus tellus proin feugiat pharetra facilisis lectus. Nunc viverra eget venenatis libero amet. Fermentum aenean commodo imperdiet vitae pulvinar duis. Felis auctor feugiat porttitor tincidunt proin non quam accumsan sed.",
    color: "bg-cardPurple",
  },
];
