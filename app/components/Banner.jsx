"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const bannerImages = [
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

function Banner() {
  return (
    <section className="relative w-full h-[500px]">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {bannerImages.map((src, index) => (
            <CarouselItem key={index} className="w-full h-[500px] relative">
              <Image
                src={src}
                alt={`Banner ${index + 1}`}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
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

export default Banner;
