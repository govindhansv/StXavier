import React from "react";

const ImageGallery = () => {
  const facilities = [
    {
      title: "New Year",
      image: "/assets/images/prev/New Year.jpg",
      alt: "New Year",
    },
    {
      title: "School Festival",
      image: "/assets/images/prev/School Festival.jpg",
      alt: "School Festival",
    },
    {
      title: "Study Tour",
      image: "/assets/images/prev/Study Tour.jpeg",
      alt: "Study Tour",
    },
  ];

  return (
    <div className="lg:px-36 px-4 mx-auto py-8 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[74px] mb-8 ">
        {facilities.map((facility, index) => (
          <div key={index} className="flex flex-col mb-4">
            <div className="relative  aspect-[4/3]">
              <img
                src={facility.image}
                alt={facility.alt}
                className="w-full h-full lg:h-[310px] lg:w-[303px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="mt-4 text-xl text-[#00000080] font-bold lg:text-[22px] text-start">
              {facility.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
