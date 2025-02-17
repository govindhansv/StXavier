import React from 'react';

export default function EumindGallery() {
  return (
    <div className="container mx-auto px-12 py-8">
      <div className="flex items-center mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-[#FF0076] text-xl">←</span>
          <span className="text-[#FF0076] font-medium">BACK</span>
        </div>
        <div className="flex-grow text-right">
          <span className="text-blue-600 font-bold text-2xl">EUMIND</span>
        </div>
      </div>
      
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        <div className="row-span-2 bg-gray-100 ">
          <img 
            src="https://www.claudeusercontent.com/api/placeholder/400/800" 
            alt="Left Side Image" 
            className="w-full h-full object-cover "
          />
        </div>
        
        <div className="bg-gray-100 ">
          <img 
            src="https://www.claudeusercontent.com/api/placeholder/400/400" 
            alt="Top Middle Image" 
            className="w-full h-full object-cover "
          />
        </div>
        
        <div className="row-span-2 bg-gray-100 ">
          <img 
            src="https://www.claudeusercontent.com/api/placeholder/400/800" 
            alt="Right Side Image" 
            className="w-full h-full object-cover "
          />
        </div>
        
        <div className="bg-gray-100 ">
          <img 
            src="https://www.claudeusercontent.com/api/placeholder/400/400" 
            alt="Bottom Middle Image" 
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </div>
  );
}
