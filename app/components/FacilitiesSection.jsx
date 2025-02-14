import React from "react";

const FacilitiesSection = () => {
  return (
    <div className="lg:px-36 mx-auto p-8">
      {/* Header */}
      <div className="mb-8">
        <button className="bg-[#FF0076] text-white px-6 py-5 text-sm hover:bg-[#FF0076]/90 font-bold lg:text-[26px]">
          Facilities
        </button>
      </div>

      {/* Image Section */}
      <div className="relative w-full aspect-video  overflow-hidden">
        <img
          src="/assets/home/homebanner.png"
          alt="Students collaborating outdoors with laptop"
          className="w-full h-full lg:w-[1100px] lg:h-[619px] object-cover"
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            className="w-16 h-16 bg-white bg-opacity-80  flex items-center justify-center hover:bg-opacity-100 transition-opacity"
            aria-label="Play video"
          >
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#FF0076] border-b-8 border-b-transparent ml-1"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesSection;
