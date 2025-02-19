"use client";

import Image from "next/image";
import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const bannerImages = [
  "/assets/images/Hero image/0.JPG",
  "/assets/images/Hero image/1.JPG",
  "/assets/images/Hero image/2.JPG",
  "/assets/images/Hero image/3.JPG",
  "/assets/images/Hero image/4.JPG",
  "/assets/images/Hero image/5.JPG",
  "/assets/images/Hero image/6.JPG",
  "/assets/images/Hero image/7.JPG",
  "/assets/images/Hero image/8.jpeg",
  "/assets/images/Hero image/9.JPG",
  "/assets/images/Hero image/10.jpeg",
  "/assets/images/Hero image/11.JPG",
];

function Banner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
    containScroll: "trimSnaps",
  });

  const autoplay = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  useEffect(() => {
    const interval = setInterval(autoplay, 3000);
    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <section className="relative w-full max-w-full h-[80vh] overflow-hidden lg:mt-32">
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {bannerImages.map((src, index) => (
            <div key={index} className="flex-[0_0_100%] h-[80vh] relative">
              <Image
                src={src}
                alt={`Banner ${index + 1}`}
                fill
                priority={index === 0}
                className={`object-cover   ${
                  index === 0 ? `object-top` : `object-center`
                }`}
                sizes="100vw"
                quality={90}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Banner;
