import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      //   style={{ backgroundImage: "url('/assets/home/homebanner.png')" }}
    >
      <Image
        src="/assets/home/homebanner.png"
        alt="Home Banner"
        layout="fill"
        objectFit="cover"
      />
      {/* <div className="absolute inset-0 bg-black opacity-50"></div>{" "} */}
      {/* Overlay */}
      {/* <div className="relative z-10 flex justify-center items-center w-full h-full">
        <h1 className="text-4xl font-bold text-white">Welcome to My Website</h1>
      </div> */}
    </section>
  );
}

export default Banner;
