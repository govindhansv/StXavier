// rose box like above widget

// components/NewsAndEvents.js
export default function NewsAndEvents() {
  return (
    <div className="px-6 lg:px-36 mx-auto py-12">
      {/* Section Title */}
      <div className="mb-8">
        <button className="bg-[#FF0076] text-white px-6 py-5 text-sm hover:bg-[#FF0076]/90 font-bold lg:text-[26px]">
          News & Events
        </button>
      </div>

      {/* Announcement Card */}
      <div className="border  p-6 px-16 py-8">
        <div className="flex justify-between items-start mb-4 ">
          <h2 className="font-bold text-[#00000080] lg:text-[24px] text-lg">
            ANNOUNCEMENT
          </h2>
          <button className="text-gray-600 hover:text-gray-600">
            <span className="text-4xl">...</span>
          </button>
        </div>

        <p className=" lg:text-[24px]  leading-snug font-light ">
          St. Xavier's Junior College, Panchgani Performance in the XII exam and
          the CET thereafter has become the gateway to high quality professional
          education and success. St. Xavier's Junior College offers cutting edge
          training at the Junior College level with balanced preparation for
          various entrance exams. We offer Science and Commerce streams in the
          junior college. The junior college is affiliated to Maharashtra HSC
          Board. The campus facilities and best guidance of qualified
          professionals provide a unique environment for competitive learning.
        </p>
      </div>
    </div>
  );
}
