// components/UpcomingEvents.js
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";

const Event = ({ month, date, title }) => (
  <div className="flex flex-col items-center relative">
    <div className="text-gray-500 uppercase text-sm lg:text-[24px] font-bold text-[#00000080] mb-1">
      {month}
    </div>
    <div className="text-gray-700 text-5xl mb-4 lg:text-[60px] font-bold text-[#00000080]">
      {date}
    </div>
    <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-pink-600 mb-4"></div>
    <div className="text-center text-sm font-normal text-[26px] leading-tight max-w-[180px]">
      {title}
    </div>
  </div>
);

const UpcomingEvents = () => {
  return (
    <div className="lg:mx-40 mx-auto border bg-white mb-16 px-8 py-8">
      <div className="flex justify-between items-start mb-4">
        <h2 className="font-bold text-[#00000080] lg:text-[22px] text-lg">
          UPCOMING EVENTS
        </h2>
        <div className="flex gap-2">
          <button className="text-[#FF1493] hover:opacity-80 font-bold">
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button className="text-[#FF1493] hover:opacity-80">
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <Event month="JUN" date="02" title="ACADEMIC YEAR STARTS" />
        <Event month="OCT" date="18" title="ANNUAL ATHLETIC MEET" />
        <Event
          month="DEC"
          date="21"
          title={
            <>
              25<sup>TH</sup> ANNIVERSARY CELEBRATIONS AND ANNUAL DAY
            </>
          }
        />
      </div>
    </div>
  );
};

export default UpcomingEvents;
