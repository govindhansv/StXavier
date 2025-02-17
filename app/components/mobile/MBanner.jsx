"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  return (
    <section className="relative w-full min-h-[50vh] sm:min-h-[70vh] lg:h-screen">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {mBannerImages.map((src, index) => (
            <CarouselItem
              key={index}
              className="w-full min-h-[50vh] sm:min-h-[70vh] lg:h-screen relative"
            >
              <Image
                src={src}
                alt={`M Banner ${index + 1}`}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
      </Carousel>
    </section>
  );
}

export default MBanner;
