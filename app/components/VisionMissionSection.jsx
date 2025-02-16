import React from "react";

const VisionMissionSection = () => {
  return (
    <div className="lg:px-36 mx-auto p-8">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Vision Section */}
        <div className="space-y-6">
          <button className="bg-[#FF0076] text-white px-6 py-5 text-sm hover:bg-[#FF0076]/90 font-bold lg:text-[26px]">
            Vision
          </button>

          <p className="text-black text-lg  lg:text-[20px] lg:w-[550px]  leading-[29px] font-light  mb-8">
            St. Xavier's envisions an integral and holistic development of the
            child, so as to enable him/her to live a free, just and honest life,
            empowering him/her to face the world with zest and contribute to the
            welfare of humanity.
          </p>

          <div className="relative">
            <img
              src="/assets/home/vision.png"
              alt="Student using microscope"
              className="w-full object-cover h-[555px]"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="space-y-6 pl-8">
          <button className="bg-[#FF0076] text-white px-6 py-5 text-sm hover:bg-[#FF0076]/90 font-bold lg:text-[26px]">
            Mission
          </button>

          <div className="space-y-6">
            <div>
              <p className="text-black text-lg  lg:text-[20px] lg:w-[479px]  leading-[29px] font-light ">
                Empower the students to be on constant pursuit of knowledge by
                strengthening their intellectual capacities and seeking better
                ways to assimilate knowledge.
              </p>
              <div className="border-b border-[1.5px] w-32 border-[#FF0076] my-4"></div>
            </div>

            <div>
              <p className="text-black text-lg  lg:text-[20px] lg:w-[479px]  leading-[29px] font-light ">
                Enable the students to understand the changes and explosions
                taking place in the field of knowledge.
              </p>
              <div className="border-b border-[1.5px] w-32 border-[#FF0076] my-4"></div>
            </div>

            <div>
              <p className="text-black text-lg  lg:text-[20px] lg:w-[479px]  leading-[29px] font-light ">
                Develop a creative mind, which will search <br /> for a new way of
                being and doing at every <br /> point of life.
              </p>
              <div className="border-b border-[1.5px] w-32 border-[#FF0076] my-4"></div>
            </div>

            <div>
              <p className="text-black text-lg  lg:text-[20px] lg:w-[479px]  leading-[29px] font-light ">
                Instill in their minds an aspiration for leadership towards
                growth and change.
              </p>
              <div className="border-b border-[1.5px] w-32 border-[#FF0076] my-4"></div>
            </div>

            <div>
              <p className="text-black text-lg  lg:text-[20px] lg:w-[479px]  leading-[29px] font-light ">
                Develop a generation who will be ambassadors of peace, joy and
                altruism.
              </p>
              <div className="border-b border-[1.5px] w-32 border-[#FF0076] my-4"></div>
            </div>

            <div>
              <p className="text-black text-lg  lg:text-[20px] lg:w-[479px]  leading-[29px] font-light ">
                Develop a balanced emotional character and personality, leading
                to self-awareness, motivation, self control, empathy and good
                social skills.
              </p>
              {/* <div className="border-b border-[1.5px] w-32 border-[#FF0076] my-4"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSection;
