"use client";

import React, { useRef, useState } from "react";
import CarouselItem from "./CarouselItem";

interface CarouselItemProps {
  content: string; // Assuming content is a string for now
}

const CarouselContainer = ({ items }: { items: string[] }) => {
  const carouselTrackRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    const trackWidth = carouselTrackRef.current!.scrollWidth;
    const contentWidth = carouselTrackRef.current!.offsetWidth;

    // Check if reached the end of the list (assuming items.length > 1)
    if (scrollPosition + contentWidth >= trackWidth) {
      setScrollPosition(contentWidth); // Jump to the beginning
    } else if (scrollPosition === 0) {
      // Check if reached the beginning of the list (duplicate items)
      setScrollPosition(trackWidth - 2 * contentWidth); // Jump to the end
    }
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        ref={carouselTrackRef}
        onScroll={handleScroll}
      >
        {/* Render duplicate items before and after the actual data */}
        {items.slice(-2).map((item, index) => (
          <CarouselItem key={`duplicate-${index}`} content={item.content} />
        ))}
        {items.map((item) => (
          <CarouselItem key={item.id} content={item.content} />
        ))}
        {items.slice(0, 2).map((item, index) => (
          <CarouselItem key={`duplicate-${index + 2}`} content={item.content} />
        ))}
      </div>
      {/* Add navigation buttons if needed */}
    </div>
  );
};

export default CarouselContainer;
