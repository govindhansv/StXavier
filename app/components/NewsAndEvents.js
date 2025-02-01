// components/NewsAndEvents.js
export default function NewsAndEvents() {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Section Title */}
        <div className="mb-8">
          <span className="bg-[#FF1493] text-white px-6 py-2 text-xl font-medium">
            News & Events
          </span>
        </div>
  
        {/* Announcement Card */}
        <div className="border rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-gray-600 font-medium text-lg">ANNOUNCEMENT</h2>
            <button className="text-gray-400 hover:text-gray-600">
              <span className="text-2xl">...</span>
            </button>
          </div>
  
          <p className="text-gray-600 leading-relaxed">
            St. Xavier's Junior College, Panchgani Performance in the XII exam and the CET 
            thereafter has become the gateway to high quality professional education and 
            success. St. Xavier's Junior College offers cutting edge training at the Junior College 
            level with balanced preparation for various entrance exams. We offer Science and 
            Commerce streams in the junior college. The junior college is affiliated to 
            Maharashtra HSC Board. The campus facilities and best guidance of qualified 
            professionals provide a unique environment for competitive learning.
          </p>
        </div>
      </div>
    )
  }