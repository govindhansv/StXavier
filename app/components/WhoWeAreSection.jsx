import React from "react";

const WhoWeAreSection = () => {
  return (
    <div className="lg:px-36 mx-auto p-8">
      <div className="mb-8">
        <button className="bg-[#FF0076] text-white px-6 py-5 text-sm hover:bg-[#FF0076]/90 font-bold lg:text-[26px]">
          WHO WE ARE
        </button>
      </div>

      <div className="text-gray-800 text-lg lg:text-[24px]  leading-[34px] lg:w-[1100px] font-light ">
        <p>
          St. Xavier's High School is affiliated to ICSE and Maharashtra State
          Board. St. Xavier's Junior College is Maharashtra State Board and It
          has become the gateway to high quality professional education and
          success. St. Xavier's Junior College offers cutting edge training with
          balanced preparation for various entrance examinations. The campus
          facilities and best guidance of qualified professionals provide a
          unique environment for competitive learning.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
