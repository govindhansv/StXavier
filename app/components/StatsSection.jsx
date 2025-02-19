import Image from "next/image";
import React from "react";

const StatsDashboard = () => {
  return (
    <div
      className="mt-8 md:mt-16 py-8 w-full overflow-hidden"
      style={{ background: "#F0F0F0 0% 0% no-repeat padding-box" }}
    >
      <Image
        src="/assets/images/awards/award.png"
        alt="Stats"
        width={1000}
        height={1000}
        className="rounded-lg w-full object-cover scale-110 overflow-hidden"
      />
    </div>
  );
};

export default StatsDashboard;
