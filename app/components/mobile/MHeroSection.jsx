import React from "react";

const MHeroSection = () => {
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
        <button className="bg-[#FF0076] text-white px-4 py-3 lg:px-6 lg:py-5 text-sm lg:text-[26px] hover:bg-[#FF0076]/90 font-bold">
          About Us
        </button>
      </div>

      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Left Content */}
          <div className="text-center lg:text-left pt-20 lg:w-[775px] w-full">
            <h1 className="mt-8 lg:mt-16 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[102px] font-semibold text-[#3C6DBC] mb-4 sm:mb-6">
              WELCOME
            </h1>

            <h2 className="leading-normal lg:leading-[44px] tracking-wide mb-6 font-medium text-2xl lg:text-[36px] px-4 lg:px-0">
              TO ST. XAVIER'S HIGH SCHOOL &
              <br className="hidden sm:block" />
              JUNIOR COLLEGE, PANCHGANI
              <br className="hidden sm:block" />
              (RESIDENTIAL)
            </h2>
            <p className="leading-relaxed lg:leading-[34px] text-base lg:text-[24px] text-black font-light lg:w-[775px] w-full px-4 lg:px-0">
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
          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] mt-8 lg:mt-0 w-full lg:w-1/3">
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

export default MHeroSection;