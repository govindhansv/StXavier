import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <section className="relative w-full h-[500px]">
      <Image
        src="/assets/home/homebanner.png"
        alt="Home Banner"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
      />
    </section>
  );
}

export default Banner;
