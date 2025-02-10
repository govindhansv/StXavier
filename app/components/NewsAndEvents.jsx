// rose box like above widget

// components/NewsAndEvents.js
export default function NewsAndEvents() {
    return (
      <div className="lg:px-40 mx-auto py-12">
        {/* Section Title */}
        <div className="mb-8">
          <span className="bg-[#FF1493] text-white px-6 py-2 text-xl font-medium">
            News & Events
          </span>
        </div>
  
        {/* Announcement Card */}
        <div className="border rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h2 className="font-bold text-gray-600 text-lg">ANNOUNCEMENT</h2>
            <button className="text-gray-600 hover:text-gray-600">
              <span className="text-4xl">...</span>
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