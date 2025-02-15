import React from "react";

const MStatsDashboard = () => {
  return (
    <div
      className="p-4 md:p-8 md:px-40 mt-4 md:mt-24 pb-8 md:pb-16"
      style={{ background: "#F0F0F0 0% 0% no-repeat padding-box" }}
    >
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between mb-8 border-b pb-4">
        <div className="w-full md:w-1/2 text-center mb-8 md:mb-0">
          <div className="flex flex-col items-center md:items-baseline md:flex-row gap-2">
            <span className="text-2xl md:text-[40px] text-[#FF0076] font-bold">
              PASSED OUT
            </span>
            <span className="text-4xl md:text-[65px] text-blue-600 md:pl-5 font-bold">
              1.48K+
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-start lg:pl-20">
          <div className="flex flex-col items-center md:items-baseline md:flex-row gap-2">
            <span className="text-2xl md:text-[40px] text-[#FF0076] font-bold">
              TOTAL STAFF
            </span>
            <span className="text-4xl md:text-[65px] text-blue-600 md:pl-5 font-bold">
              348+
            </span>
          </div>
        </div>
      </div>

      {/* Academic Awards Row */}
      <div className="flex flex-col md:flex-row justify-between pb-8 md:pb-6 mb-8 md:mb-6 border-b">
        <div className="flex flex-col items-center md:items-start md:flex-row gap-6 md:gap-4 w-full md:w-1/2 mb-8 md:mb-0">
          <div className="text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 md:h-24 md:w-24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="text-[#FF0076] font-bold text-2xl md:text-[30px] leading-tight text-center md:text-start md:px-8">
              NATIONAL <br /> ACADEMIC <br /> AWARD
            </div>
            <div className="text-blue-600 text-4xl md:text-[65px] font-bold">
              1
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:pl-20">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-0">
            <div className="text-[#FF0076] font-bold text-2xl md:text-[30px] leading-tight text-center md:text-start">
              STATE <br /> ACADEMIC <br /> AWARD
            </div>
            <span className="text-blue-600 text-4xl md:text-[65px] font-bold md:pl-8">
              5
            </span>
          </div>
        </div>
      </div>

      {/* Sports Awards Row */}
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col items-center md:items-start md:flex-row gap-6 md:gap-4 mb-8 md:mb-0">
          <div className="text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 md:h-24 md:w-24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="text-[#FF0076] font-bold text-2xl md:text-[30px] leading-tight text-center md:text-start md:px-8">
              NATIONAL <br /> SPORTS <br /> AWARD
            </div>
            <div className="text-blue-600 text-4xl md:text-[65px] font-bold">
              2
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:pl-20">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-0">
            <div className="text-[#FF0076] font-bold text-2xl md:text-[30px] leading-tight text-center md:text-start">
              STATE <br /> SPORTS <br /> AWARD
            </div>
            <span className="text-blue-600 text-4xl md:text-[65px] font-bold md:pl-20">
              5
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MStatsDashboard;