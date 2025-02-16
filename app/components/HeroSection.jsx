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
    <div className="px-4 sm:px-6 lg:px-36 relative bg-white">
      {/* Pink About Us Button */}
      <div className="absolute top-0 left-4 sm:left-6 lg:left-36">
        <button className="bg-[#FF0076] text-white px-6 py-5 text-sm hover:bg-[#FF0076]/90 font-bold lg:text-[26px]">
          About Us
        </button>
      </div>

      <div className="mx-auto">
        <div className="flex">
          {/* Left Content */}
          <div className="text-center lg:text-left pt-20 w-[775px]">
            <h1 className="mt-16 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[102px] font-semibold text-[#3C6DBC] mb-4 sm:mb-6">
              WELCOME
            </h1>

            <h2 className="leading-[44px] tracking-wide mb-6 font-medium text-[36px] ">
              TO ST. XAVIER'S HIGH SCHOOL &
              <br className="hidden sm:block" />
              JUNIOR COLLEGE, PANCHGANI
              <br className="hidden sm:block" />
              (RESIDENTIAL)
            </h2>
            <p className="leading-[30px]  md:text-[24px] text-black font-light w-[775px]">
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
          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] mt-8 lg:mt-0 w-1/3">
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
