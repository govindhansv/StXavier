import Image from "next/image";
import React from "react";

const StatsDashboard = () => {
  return (
    <div
      className="md:px-40 mt-8 md:mt-16 "
      style={{ background: "#F0F0F0 0% 0% no-repeat padding-box" }}
    >
      <Image
        src="/assets/images/statsnew.jpg"
        alt="Stats"
        width={1000}
        height={1000}
        className="rounded-lg w-full object-cover"
      />
    </div>
  );
};

export default StatsDashboard;
