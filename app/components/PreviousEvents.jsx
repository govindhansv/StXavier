import React from 'react';

const PreviousEvents = () => {
  return (
    <div className="px-6 lg:px-36 mx-auto pt-8">
      {/* Header */}
      <div className="mb-8">
      
        <h2 className="font-bold text-gray-600 text-lg uppercase ">  Previous Events</h2>
      </div>

      {/* Image Section */}
      <div className="relative w-full aspect-video  overflow-hidden">
        <img 
          src="/assets/images/Hero image/0.JPG"
          alt="Students collaborating outdoors with laptop"
          className="w-full h-full object-cover"
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button 
            className="w-16 h-16 bg-white bg-opacity-80  flex items-center justify-center hover:bg-opacity-100 transition-opacity"
            aria-label="Play video"
          >
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-pink-[#FF0076] border-b-8 border-b-transparent ml-1">
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviousEvents;
