import React from "react";

const VisionMissionSection = () => {
  return (
    <div className="lg:px-40 mx-auto p-8">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Vision Section */}
        <div className="space-y-6">
          <div className="inline-block bg-pink-500 text-white px-6 py-2 text-lg font-bold mb-6">
            Vision
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            St. Xavier's envisions an integral and holistic development of the
            child, so as to enable him/her to live a free, just and honest life,
            empowering him/her to face the world with zest and contribute to the
            welfare of humanity.
          </p>

          <div className="relative">
            <img
              src="/assets/home/vision.png"
              alt="Student using microscope"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="space-y-6">
          <div className="inline-block bg-pink-500 text-white px-6 py-2 text-lg font-bold mb-6">
            Mission
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Empower the students to be on constant pursuit of knowledge by
                strengthening their intellectual capacities and seeking better
                ways to assimilate knowledge.
              </p>
              <div className="border-b border-pink-300 my-4"></div>
            </div>

            <div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Enable the students to understand the changes and explosions
                taking place in the field of knowledge.
              </p>
              <div className="border-b border-pink-300 my-4"></div>
            </div>

            <div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Develop a creative mind, which will search for a new way of
                being and doing at every point of life.
              </p>
              <div className="border-b border-pink-300 my-4"></div>
            </div>

            <div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Instill in their minds an aspiration for leadership towards
                growth and change.
              </p>
              <div className="border-b border-pink-300 my-4"></div>
            </div>

            <div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Develop a generation who will be ambassadors of peace, joy and
                altruism.
              </p>
              <div className="border-b border-pink-300 my-4"></div>
            </div>

            <div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Develop a balanced emotional character and personality, leading
                to self-awareness, motivation, self control.
              </p>
              <div className="border-b border-pink-300 my-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSection;
