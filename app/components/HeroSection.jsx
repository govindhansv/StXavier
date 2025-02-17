"use client";

import React, { useEffect } from "react";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const heroImages = [
  "/assets/images/carousel/asian-doctor-female-isolated-white-background.jpg",
  "/assets/images/carousel/cheerful-little-skateboarder-posing-with-thumbs-up.jpg",
  "/assets/images/carousel/little-doctor.jpg",
  "/assets/images/carousel/man-office-clothes-playing-basketball-white-space-unusual-look-businessman-motion-action-sport-healthy-lifestyle.jpg",
];

const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const autoplay = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  useEffect(() => {
    const interval = setInterval(autoplay, 3000); // Changes slide every 3 seconds
    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <div className="px-4 sm:px-6 lg:px-36 relative bg-white">
      {/* Pink About Us Button */}
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
            <p className="leading-[30px] md:text-[24px] text-black font-light lg:max-w-[675px]">
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
          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] mt-8 lg:mt-0 w-full lg:w-1/3">
            <div ref={emblaRef} className="w-full h-full overflow-hidden">
              <div className="flex h-full">
                {heroImages.map((src, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                    <img
                      src={src}
                      alt="Student on skateboard"
                      className="object-contain w-full h-[600px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
