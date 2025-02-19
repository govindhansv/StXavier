// components/UpcomingEvents.js
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";

const Event = ({ month, date, title, className }) => (
  <div className={`${className} flex flex-col items-center relative `}>
    <div className="text-[#00000080] uppercase text-sm lg:text-[28px] font-bold  mb-4">
      {month}
    </div>
    <div className="text-[#00000080] text-5xl mb-4 lg:text-[85px] font-bold ">
      {date}
    </div>
    <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-[#FF0076] mb-4"></div>
    <div className="text-cente text-center text-[22px] leading-[30px] max-w-[200px] font-medium">
      {title}
    </div>
  </div>
);

const UpcomingEvents = () => {
  return (
    <div
      style={{ background: "#F0F0F0 0% 0% no-repeat padding-box" }}
      className="pb-2"
    >
      <div className="lg:mx-36 border bg-white mb-16 px-16 mx-6 py-12">
        <div className="flex justify-between items-start mb-4">
          <h2 className="font-bold text-[#00000080] lg:text-[20px] text-lg mb-8">
            UPCOMING EVENTS
          </h2>
          <div className="flex gap-2">
            <button className="text-[#FF1493] hover:opacity-80 font-bold">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[12px] border-r-[#00000080] mb-4"></div>
            </button>
            <button className="text-[#FF1493] hover:opacity-80">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[12px] border-l-[#00000080] mb-4"></div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <Event
            month="JUN"
            date="02"
            title="ACADEMIC YEAR STARTS"
            className={"lg:border-r-2 border-b-2 lg:border-b-0 pb-8 lg:pb-0"}
          />
          <Event
            month="OCT"
            date="18"
            title="ANNUAL ATHLETIC MEET"
            className="lg:border-r-2 lg:border-b-0  pb-8 lg:pb-0"
          />
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
    </div>
  );
};

export default UpcomingEvents;
