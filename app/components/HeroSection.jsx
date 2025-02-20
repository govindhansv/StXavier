"use client";
import React, { useEffect, useState } from "react";
import { useCallback } from "react";

const heroImages = [
  "/assets/images/carousel/asian-doctor-female-isolated-white-background.jpg",
  "/assets/images/carousel/cheerful-little-skateboarder-posing-with-thumbs-up.jpg",
  "/assets/images/carousel/little-doctor.jpg",
  "/assets/images/carousel/man-office-clothes-playing-basketball-white-space-unusual-look-businessman-motion-action-sport-healthy-lifestyle.jpg",
];

// Choose one of these animation styles by changing the className in the image container
const animationStyles = {
  // 1. Fade transition
  fade: `
    opacity-0 transition-opacity duration-500 ease-in-out
    [&.active]:opacity-100
  `,

  // 2. Zoom fade
  zoomFade: `
    opacity-0 scale-95 transition-all duration-500 ease-in-out
    [&.active]:opacity-100 [&.active]:scale-100
  `,

  // 3. Flip effect
  flip: `
    opacity-0 rotateY-90 transition-all duration-500 ease-in-out
    [&.active]:opacity-100 [&.active]:rotate-0
  `,

  // 4. Slide and fade
  slideFade: `
    opacity-0 translate-y-4 transition-all duration-500 ease-in-out
    [&.active]:opacity-100 [&.active]:translate-y-0
  `,
};

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="px-4 sm:px-6 lg:px-36 relative bg-white">
      <div className="absolute top-0 left-4 sm:left-6 lg:left-36">
        <button className="bg-[#FF0076] text-white px-6 py-5 text-sm hover:bg-[#FF0076]/90 font-bold lg:text-[26px]">
          About Us
        </button>
      </div>
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left pt-20 lg:w-2/3">
            <h1 className="mt-16 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] font-semibold text-[#3C6DBC] mb-4 sm:mb-6">
              WELCOME
            </h1>
            <h2 className="leading-[40px] tracking-wide mb-6 font-medium text-[32px]">
              TO ST. XAVIER'S HIGH SCHOOL &<br className="hidden sm:block" />
              JUNIOR COLLEGE, PANCHGANI
              <br className="hidden sm:block" />
              (RESIDENTIAL)
            </h2>
            <p className="leading-[30px] md:text-[24px] text-black font-light lg:max-w-[800px]">
              St. Xavier's High School, Panchgani, is a residential educational
              institution of St. Xavier's Education Trust. Panchgani, an
              evergreen hill station, is a well-known education centre. Located
              4300 feet above sea level in the Western Ghats, it is 300 km south
              of Bombay and 100 km south of Pune. St. Xavier's provides a unique
              environment to impart value-based education with opportunities for
              moral upbringing.
            </p>
          </div>
          {/* Right Image Carousel */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] mt-8 lg:mt-0 bottom-0 w-full lg:w-1/3 overflow-hidden">
            <div className="relative w-full h-full flex items-end bottom-0">
              {heroImages.map((src, index) => (
                <div
                  key={index}
                  // Choose one of the animation styles here
                  className={`absolute w-full h-full ${animationStyles.fade} ${
                    index === currentIndex ? "active" : ""
                  }`}
                >
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className={`object-contain object-bottom w-full h-[500px] absolute bottom-0 ${
                      index === 0 || index === 2 ? "h-[400px]" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
