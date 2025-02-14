import React from "react";

const ExtraCurricularActivities = () => {
  const activities = [
    {
      title: "Sports & Games",
      image: "/assets/home/library.png",
      alt: "Students playing badminton",
    },
    {
      title: "Athletics",
      image: "/assets/home/library.png",
      alt: "Athletic training session",
    },
    {
      title: "Archery",
      image: "/assets/home/library.png",
      alt: "Student practicing archery",
    },
    {
      title: "Sports & Games",
      image: "/assets/home/library.png",
      alt: "Students playing badminton",
    },
    {
      title: "Athletics",
      image: "/assets/home/library.png",
      alt: "Athletic training session",
    },
    {
      title: "Archery",
      image: "/assets/home/library.png",
      alt: "Student practicing archery",
    },
    {
      title: "Sports & Games",
      image: "/assets/home/library.png",
      alt: "Students playing badminton",
    },
    {
      title: "Athletics",
      image: "/assets/home/library.png",
      alt: "Athletic training session",
    },
    {
      title: "Archery",
      image: "/assets/home/library.png",
      alt: "Student practicing archery",
    },
    {
      title: "Sports & Games",
      image: "/assets/home/library.png",
      alt: "Students playing badminton",
    },
    {
      title: "Athletics",
      image: "/assets/home/library.png",
      alt: "Athletic training session",
    },
    {
      title: "Archery",
      image: "/assets/home/library.png",
      alt: "Student practicing archery",
    },
  ];

  return (
    <div
      style={{ background: "#F0F0F0 0% 0% no-repeat padding-box" }}
      className="px-6 sm:px-6 lg:px-36 pb-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button className="bg-[#FF0076] text-white px-6 py-5 text-sm hover:bg-[#FF0076]/90 font-bold lg:text-[26px]">
            EXTRA CURRICULAR ACTIVITIES
          </button>
        </div>

        {/* Description */}
        <div className="mb-12">
          <p className="lg:text-[24px] font-light leading-[34px]">
            Sports and Physical Education play a major role in students' lives
            at St. Xavier's. We provide a professional touch that accentuates
            the value of extracurricular activities, and each student's
            participation is effectively encouraged. Students of St. Xavier's
            have achieved many laurels at state and national level competitions.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {activities.map((activity, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative aspect-[4/3]">
                <img
                  src={activity.image}
                  alt={activity.alt}
                  className="w-full h-full lg:h-[310px] lg:w-[303px] object-cover"
                  loading="lazy" // Add lazy loading for better performance
                />
              </div>
              <h3 className="mt-4 text-xl text-[#00000080] font-bold lg:text-[26px] text-start">
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
