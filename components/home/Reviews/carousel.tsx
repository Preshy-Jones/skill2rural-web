import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselSpacing({
  reviews,
}: {
  reviews: {
    name: string;
    review: string;
    image: string;
  }[];
}) {
  return (
    <Carousel className="w-full">
      <CarouselContent className="ml-7">
        {reviews.map((review, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div key={index} className="relative h-[12rem] mr-16 mt-10">
              <Image
                src={review.image}
                alt={review.name}
                className="absolute z-50 -top-10 -left-7 rounded-tertiary border border-primary"
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
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
