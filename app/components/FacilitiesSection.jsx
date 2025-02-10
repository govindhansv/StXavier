import React from "react";

const FacilitiesSection = () => {
  return (
    <div className="lg:px-40 mx-auto p-8">
      {/* Header */}
      <div className="mb-8">
        <span className="inline-block bg-[#FF0076] text-white px-6 py-2 text-lg font-bold">
          Facilities
        </span>
      </div>

      {/* Image Section */}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
        <img
          src="/assets/home/homebanner.png"
          alt="Students collaborating outdoors with laptop"
          className="w-full h-full object-cover"
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-opacity"
            aria-label="Play video"
          >
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-pink-[#FF0076] border-b-8 border-b-transparent ml-1"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesSection;
