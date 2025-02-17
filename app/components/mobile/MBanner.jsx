"use client";

import Image from "next/image";
import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const mBannerImages = [
  "/assets/home/homebanner.png",
  "/assets/images/Hero image/1.JPG",
  "/assets/images/Hero image/2.JPG",
  "/assets/images/Hero image/3.JPG",
  "/assets/images/Hero image/4.JPG",
  "/assets/images/Hero image/5.JPG",
  "/assets/images/Hero image/6.JPG",
  "/assets/images/Hero image/7.JPG",
  "/assets/images/Hero image/8.JPG",
  "/assets/images/Hero image/9.JPG",
  "/assets/images/Hero image/10.JPG",
  "/assets/images/Hero image/11.JPG",
];

function MBanner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

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
    <section className="relative w-full min-h-[50vh] sm:min-h-[70vh] lg:h-screen">
      <div className="w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {mBannerImages.map((src, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 relative min-h-[50vh] sm:min-h-[70vh] lg:h-screen"
            >
              <Image
                src={src}
                alt={`M Banner ${index + 1}`}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
        {/* <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg z-10"
        >
          ←
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg z-10"
        >
          →
        </button> */}
      </div>
    </section>
  );
}

export default MBanner;
