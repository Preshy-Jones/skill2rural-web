import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <motion.button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
          onClick={goToPreviousSlide}
        >
          {"<"}
        </motion.button>
        <motion.button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
          onClick={goToNextSlide}
        >
          {">"}
        </motion.button>
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="flex overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                className={`w-full ${
                  index === currentIndex
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Carousel;
