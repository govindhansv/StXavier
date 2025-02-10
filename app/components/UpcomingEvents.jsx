// components/UpcomingEvents.js
import React from "react";

const Event = ({ month, date, title }) => (
  <div className="flex flex-col items-center relative">
    <div className="text-gray-500 uppercase text-sm mb-1">{month}</div>
    <div className="text-gray-700 text-5xl font-light mb-4">{date}</div>
    <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-pink-500 mb-4"></div>
    <div className="text-center text-sm font-medium max-w-[150px]">{title}</div>
  </div>
);

const UpcomingEvents = () => {
  return (
    <div className="lg:mx-40 mx-auto border bg-white my-16 px-16 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-gray-600 text-xl font-bold ">UPCOMING EVENTS</h2>
        <div className="flex gap-2">
          <button className="text-pink-600 text-3xl">◄</button>
          <button className="text-pink-600 text-3xl">►</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
