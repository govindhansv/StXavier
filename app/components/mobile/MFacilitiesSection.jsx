import React from "react";

const MFacilitiesSection = () => {
  return (
    <div className="px-4 md:px-8 lg:px-36 mx-auto">
      {/* Header - Adjusted padding and font size for mobile */}
      <div className="mb-4 lg:mb-8">
        <button className="bg-[#FF0076] text-white px-4 py-3 lg:px-6 lg:py-5 text-base lg:text-[26px] hover:bg-[#FF0076]/90 font-bold">
          Facilities
        </button>
      </div>

      {/* Image Section - Adjusted for better mobile display */}
      <div className="relative w-full aspect-video overflow-hidden">
        <img
          src="/assets/images/Hero image/0.JPG"
          alt="Students collaborating outdoors with laptop"
          className="w-full h-full object-cover lg:w-[1100px] lg:h-[619px]"
        />

        {/* Play Button Overlay - Adjusted size for mobile */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            className="w-12 h-12 lg:w-16 lg:h-16 bg-white bg-opacity-80 flex items-center justify-center hover:bg-opacity-100 transition-opacity"
            aria-label="Play video"
          >
            <div className="w-0 h-0 border-t-6 lg:border-t-8 border-t-transparent border-l-8 lg:border-l-12 border-l-[#FF0076] border-b-6 lg:border-b-8 border-b-transparent ml-1"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MFacilitiesSection;
