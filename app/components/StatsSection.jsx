import React from "react";

const StatsDashboard = () => {
  return (
    <div
      className="p-8 rounded-lg px-40 mt-24 pb-16"
      style={{ background: "#F0F0F0 0% 0% no-repeat padding-box" }}
    >
      {/* Top Row */}
      <div className="flex justify-between mb-8 border-b pb-4">
        <div className="w-1/2 text-center">
          <div className="flex items-baseline gap-2">
            <span className="text-pink-600 text-[40px] font-bold">
              PASSED OUT
            </span>
            <span className="text-blue-600 pl-5 xl:text-[65px] font-bold">
              1.48K+
            </span>
          </div>
        </div>
        <div className="w-1/2 text-start">
          <div className="flex items-baseline gap-2">
            <span className="text-pink-600 text-[40px] font-bold">
              TOTAL STAFF
            </span>
            <span className="text-blue-600 pl-5 xl:text-[65px] font-bold">
              348+
            </span>
          </div>
        </div>
      </div>

      {/* Academic Awards Row */}
      <div className="flex justify-between pb-6 mb-6 border-b">
        <div className="flex items-center gap-4 w-1/2">
          <div className="text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div className="flex text-start items-center gap-4">
            <div className="text-pink-600 font-bold text-[30px] leading-tight px-8">
              NATIONAL <br /> ACADEMIC <br /> AWARD
            </div>
            <div className="text-blue-600 text-[65px] font-bold">1</div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex items-center">
            <div className="text-pink-600 font-bold text-[30px] leading-tight">
              STATE <br /> ACADEMIC <br /> AWARD
            </div>
            <span className="text-blue-600 text-[65px] font-bold pl-8">5</span>
          </div>
        </div>
      </div>

      {/* Sports Awards Row */}
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="flex text-start items-center gap-4">
            <div className="text-pink-600 font-bold text-[30px] leading-tight px-8">
              NATIONAL <br /> SPORTS <br /> AWARD
            </div>
            <div className="text-blue-600 text-[65px] font-bold">2</div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex items-center">
            <div className="text-pink-600 font-bold text-[30px] leading-tight">
              STATE <br /> SPORTS <br /> AWARD
            </div>
            <span className="text-blue-600 text-[65px] font-bold pl-20">5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsDashboard;
