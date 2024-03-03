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
    <Carousel
      className="w-full"
      opts={{
        loop: false,
      }}
    >
      <CarouselContent className="-ml-12">
        {reviews.map((review, index) => (
          <CarouselItem key={index} className="pl-12 md:basis-1/2 lg:basis-1/3">
            <div key={index} className="relative mt-10">
              <Image
                src={review.image}
                alt={review.name}
                className=" mb-5 rounded-tertiary border border-primary relative z-20"
              />
              <div className="relative -mt-12  z-0 ml-8 h-[12rem]">
                <div className="  absolute h-[10.8125rem] z-10 bg-white border  border-black rounded-2xl px-8 py-10 flex flex-col justify-between ">
                  <p className="text-sm leading-seventh font-medium text-greyText">
                    {review.review}
                  </p>
                  <h3 className="font-bold text-sm leading-seventh mt-4">
                    {review.name}
                  </h3>
                </div>
                <div className="bg-primary absolute top-2 left-2 mx-auto w-full z-0 h-[10.8125rem] rounded-2xl"></div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

{
  /* <div className="ml-8 -mt-12">
<div className="bg-primary mx-auto h-[10.8125rem] rounded-2xl"></div>
<div className="bg-white border -mt-[10.8rem] border-black rounded-2xl px-8 py-10 flex flex-col justify-between h-[10.8125rem]">
  <p className="text-sm leading-seventh font-medium text-greyText">
    {review.review}
  </p>
  <h3 className="font-bold text-sm leading-seventh mt-4">
    {review.name}
  </h3>
</div>
</div> */
}

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
