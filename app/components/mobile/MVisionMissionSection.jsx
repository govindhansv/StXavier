import React from "react";

const MVisionMissionSection = () => {
  return (
    <div className="lg:px-36 mx-auto p-4 lg:p-8">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Vision Section */}
        <div className="space-y-6">
          <button className="bg-[#FF0076] text-white px-4 lg:px-6 py-3 lg:py-5 text-base lg:text-[26px] hover:bg-[#FF0076]/90 font-bold">
            Vision
          </button>

          <p className="text-black text-base lg:text-[20px] max-w-full lg:w-[550px] leading-relaxed lg:leading-[29px] font-light mb-6 lg:mb-8">
            St. Xavier's envisions an integral and holistic development of the
            child, so as to enable him/her to live a free, just and honest life,
            empowering him/her to face the world with zest and contribute to the
            welfare of humanity.
          </p>

          <div className="relative">
            <img
              src="/assets/home/vision.png"
              alt="Student using microscope"
              className="w-full"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="space-y-6 pl-0 lg:pl-8">
          <button className="bg-[#FF0076] text-white px-4 lg:px-6 py-3 lg:py-5 text-base lg:text-[26px] hover:bg-[#FF0076]/90 font-bold">
            Mission
          </button>

          <div className="space-y-6">
            {[
              "Empower the students to be on constant pursuit of knowledge by strengthening their intellectual capacities and seeking better ways to assimilate knowledge.",
              "Enable the students to understand the changes and explosions taking place in the field of knowledge.",
              "Develop a creative mind, which will search for a new way of being and doing at every point of life.",
              "Instill in their minds an aspiration for leadership towards growth and change.",
              "Develop a generation who will be ambassadors of peace, joy and altruism.",
              "Develop a balanced emotional character and personality, leading to self-awareness, motivation, self control, empathy and good social skills."
            ].map((text, index, array) => (
              <div key={index}>
                <p className="text-black text-base lg:text-[20px] max-w-full lg:w-[479px] leading-relaxed lg:leading-[29px] font-light">
                  {text}
                </p>
                {index !== array.length - 1 && (
                  <div className="border-b border-2 w-24 lg:w-32 border-[#FF0076] my-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MVisionMissionSection;