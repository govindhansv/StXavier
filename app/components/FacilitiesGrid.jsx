import React from "react";

const FacilitiesGrid = () => {
  const facilities = [
    {
      title: "Class Room",
      // image: "/assets/home/library.png",
      alt: "Students in classroom",
    },
    {
      title: "Library",
      image: "/assets/homeimg/library.jpg",
      alt: "Student reading in library",
    },
    {
      title: "Laboratories",
      // image: "/assets/home/library.png",
      alt: "Students in laboratory",
    },
    {
      title: "Computer Lab",
      // image: "/assets/home/library.png",
      alt: "Students using computers",
    },
    {
      title: "Audio - Visual Room",
      image: "/assets/homeimg/audiovisualroom.jpg",
      alt: "Students in cultural costumes",
    },
    {
      title: "Art & Crafts",
      // image: "/assets/home/library.png",
      alt: "Student doing art project",
    },
    {
      title: "Music Room",
      image: "/assets/homeimg/musicroom.jpg",
      alt: "Students using computers",
    },
    {
      title: "Play Grounds",
      image: "/assets/homeimg/playgrounds.jpeg",
      alt: "Students in cultural costumes",
    },
    {
      title: "Hostel",
      image: "/assets/homeimg/hostel.jpg",
      alt: "Student doing art project",
    },
  ];

  return (
    <div className="lg:px-36 mx-auto py-8 flex flex-col items-center">
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

export default FacilitiesGrid;
