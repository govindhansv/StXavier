import React from "react";
import Image from "next/image";

const HeroSection = () => {
  const stats = [
    { value: "12K+", label: "Students" },
    { value: "150+", label: "Faculty" },
    { value: "4", label: "Programs", icon: "💡" },
    { value: "5", label: "Sports", icon: "🏃" },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-40 relative bg-white">
      {/* Pink About Us Button */}
      <div className="absolute top-0 left-4 sm:left-6 lg:left-40">
        <button className="bg-[#FF0076] text-white px-6 sm:px-8 py-2 text-base sm:text-lg font-bold">
          About Us
        </button>
      </div>

      <div className="mx-auto pt-16 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="mt-16 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[102px] font-semibold text-[#3C6DBC] mb-4 sm:mb-6">
              WELCOME
            </h1>

            <h2 className="text-2xl sm:text-3xl font-medium text-gray-800 mb-4 sm:mb-6 leading-tight">
              TO ST. XAVIER'S HIGH SCHOOL &
              <br className="hidden sm:block" />
              JUNIOR COLLEGE, PANCHGANI
              <br className="hidden sm:block" />
              (RESIDENTIAL)
            </h2>
            <p className="text-base sm:text-lg md:text-[24px] font-light leading-relaxed px-4 sm:px-0">
              St. Xavier's High School, Panchgani, is a residential educational
              institution of St. Xavier's Education Trust. Panchgani, an
              evergreen hill station is a well-known education centre. Located
              4300 feet above sea level in the Western Ghats, it is 300 kms
              south of Bombay and 100 kms south of Pune. St. Xaviers provides a
              unique environment to impart value-based education with
              opportunities for moral upbringing
            </p>
          </div>

          {/* Right Image */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] mt-8 lg:mt-0">
            <img
              src="/assets/home/welcome.png"
              alt="Student on skateboard"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
