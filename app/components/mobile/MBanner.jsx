import Image from "next/image";
import React from "react";

function MBanner() {
  return (
    <section className="relative w-full min-h-[50vh] sm:min-h-[70vh] lg:h-screen">
      <Image
        src="/assets/home/homebanner.png"
        alt="Home Banner"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute"
      />
    </section>
  );
}

export default MBanner;
