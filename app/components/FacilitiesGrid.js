import React from 'react';

const FacilitiesGrid = () => {
  const facilities = [
    {
      title: "Class Room",
      image: "/assets/home/library.png",
      alt: "Students in classroom"
    },
    {
      title: "Library",
      image: "/assets/home/library.png",
      alt: "Student reading in library"
    },
    {
      title: "Laboratories",
      image: "/assets/home/library.png",
      alt: "Students in laboratory"
    },
    {
      title: "Computer Lab",
      image: "/assets/home/library.png",
      alt: "Students using computers"
    },
    {
      title: "Audio - Visual Room",
      image: "/assets/home/library.png",
      alt: "Students in cultural costumes"
    },
    {
      title: "Art & Crafts",
      image: "/assets/home/library.png",
      alt: "Student doing art project"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((facility, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
              <img
                src={facility.image}
                alt={facility.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="mt-4 text-xl text-gray-700 font-medium text-center">
              {facility.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesGrid;