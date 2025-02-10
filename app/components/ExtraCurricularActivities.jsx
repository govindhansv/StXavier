import React from 'react';

const ExtraCurricularActivities = () => {
  const activities = [
    {
      title: "Sports & Games",
      image: "/assets/home/library.png",
      alt: "Students playing badminton"
    },
    {
      title: "Athletics",
      image: "/assets/home/library.png",
      alt: "Athletic training session"
    },
    {
      title: "Archery",
      image: "/assets/home/library.png",
      alt: "Student practicing archery"
    },
    {
      title: "Sports & Games",
      image: "/assets/home/library.png",
      alt: "Students playing badminton"
    },
    {
      title: "Athletics",
      image: "/assets/home/library.png",
      alt: "Athletic training session"
    },
    {
      title: "Archery",
      image: "/assets/home/library.png",
      alt: "Student practicing archery"
    },
    {
      title: "Sports & Games",
      image: "/assets/home/library.png",
      alt: "Students playing badminton"
    },
    {
      title: "Athletics",
      image: "/assets/home/library.png",
      alt: "Athletic training session"
    },
    {
      title: "Archery",
      image: "/assets/home/library.png",
      alt: "Student practicing archery"
    },
    {
      title: "Sports & Games",
      image: "/assets/home/library.png",
      alt: "Students playing badminton"
    },
    {
      title: "Athletics",
      image: "/assets/home/library.png",
      alt: "Athletic training session"
    },
    {
      title: "Archery",
      image: "/assets/home/library.png",
      alt: "Student practicing archery"
    }
  ];

  return (
    <div style={{ background: "#F0F0F0 0% 0% no-repeat padding-box" }}  className=" pb-12 lg:px-40 ">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-8">
          <span className="inline-block bg-[#FF0076] text-white px-6 py-2 text-lg font-bold">
            EXTRA CURRICULAR ACTIVITIES
          </span>
        </div>
            {/* Header */}
            <div className="absolute top-0">
          <button className="bg-[#FF0076] text-white px-8 py-2 text-lg font-bold">
            Director's Message
          </button>
        </div>

        {/* Description */}
        <div className="mb-12">
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Sports and Physical Education play a major role in students' lives at St. Xavier's. We provide 
            a professional touch that accentuates the value of extracurricular activities, and each 
            student's participation is effectively encouraged. Students of St. Xavier's have achieved 
            many laurels at state and national level competitions.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {activities.map((activity, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
                <img
                  src={activity.image}
                  alt={activity.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-4 text-xl text-gray-700 font-medium text-center">
                {activity.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraCurricularActivities;