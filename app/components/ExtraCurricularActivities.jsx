import React from "react";

const ExtraCurricularActivities = () => {
  const activities = [
    {
      title: "Sports & Games",
      image: "/assets/images/Extra curricular/Sports.png",
      alt: "Students playing badminton",
    },
    {
      title: "Athletics",
      image: "/assets/images/Extra curricular/Athletics.JPG",
      alt: "Athletic training session",
    },
    {
      title: "Archery",
      image: "/assets/homeimg/archery.jpg",
      alt: "Student practicing archery",
    },
    {
      title: "Swimming",
      image: "/assets/images/Extra curricular/220-SM997039.png",
      alt: "Students playing badminton",
    },
    {
      title: "Horse Riding",
      image: "/assets/images/Extra curricular/1-SM220210.png",
      alt: "Athletic training session",
    },
    {
      title: "Yoga",
      image: "/assets/images/Extra curricular/19-SM942212.png",
      alt: "Student practicing archery",
    },
    {
      title: "Debates",
      image: "/assets/images/Extra curricular/1-SM980789.png",
      alt: "Students playing badminton",
    },
    {
      title: "Expedition",
      image: "/assets/images/Extra curricular/5-SM336401.png",
      alt: "Athletic training session",
    },
    {
      title: "Choir & Band",
      image: "/assets/images/Extra curricular/20-SM278850.png",
      alt: "Student practicing archery",
    },
    {
      title: "Music",
      image: "/assets/images/Extra curricular/120-SM713648.png",
      alt: "Students playing badminton",
    },
    {
      title: "Dance and Drama",
      image: "/assets/images/Extra curricular/120-SM938188.png",
      alt: "Athletic training session",
    },
    {
      title: "Drawing & Painting",
      image: "/assets/images/Extra curricular/20-SM92061.png",
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
          <p className="lg:text-[20px] font-light leading-[30px]">
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
              <h3 className="mt-4 text-xl text-[#00000080] font-bold lg:text-[22px] text-start">
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
