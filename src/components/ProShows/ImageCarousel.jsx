import React, { useState, useEffect } from "react";
import { carouselData } from "./data/carouselData";
import Navigation from "./Navigation";
import ProgressBar from "./ProgressBar";
import Timeline from "./Timeline";
import CarouselSlide from "./CarouselSlide";
import Thumbnails from "./Thumbnails";
import NavigationArrows from "./NavigationArrows";

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSubIndex, setCurrentSubIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubIndex((prevSubIndex) => {
        const images = carouselData[currentIndex]?.image || []; // Handle undefined cases
        const isLastImage = prevSubIndex + 1 >= images.length;
  
        if (isLastImage) {
          // Update both index and subindex when reaching the last image
          setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
          return 0; // Reset subindex
        }
  
        return prevSubIndex + 1; // Only update subindex
      });
    }, 5000);
  
    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex, carouselData]); // Depend on `currentIndex` and `carouselData`
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselData.length);
    setCurrentSubIndex(0);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    );
    setCurrentSubIndex(0);
    setProgress(0);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  return (
    <div className=" h-screen relative overflow-hidden font-mysticalFont">
      <div className="relative h-full">
        {carouselData.map((item, index) => (
          <CarouselSlide
            key={item.id}
            item={item}
            index={currentSubIndex}
            isActive={index === currentIndex}
          />
        ))}
      </div>

      {/* Navigation arrows - adjusted padding for different screen sizes */}
      <NavigationArrows
        onPrev={handlePrev}
        onNext={handleNext}
        className="absolute inset-y-0 w-full flex items-center justify-between px-4 sm:px-6 lg:px-4 z-2"
      />

      {/* Mobile-only indicators */}
      <div className="flex md:hidden justify-center absolute bottom-4 left-0 right-0 z-30">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
              currentIndex === index ? "bg-[#F7E290] w-4" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
