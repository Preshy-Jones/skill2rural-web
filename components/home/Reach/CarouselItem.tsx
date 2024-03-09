import React from "react";

interface CarouselItemProps {
  content: string;
}

const CarouselItem = ({ content }) => {
  return <div className="bg-black">{content}</div>;
};

export default CarouselItem;
