// components/UpcomingEvents.js
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

export default function UpcomingEvents() {
  return (
    <div className="border rounded-lg p-6 max-w-6xl mx-auto mb-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-gray-600 font-medium text-lg">UPCOMING EVENTS</h2>
        <div className="flex gap-2">
          <button className="text-[#FF1493] hover:opacity-80">
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button className="text-[#FF1493] hover:opacity-80">
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Event 1 */}
        <div className="text-center border-r last:border-r-0">
          <div className="mb-4">
            <div className="text-gray-500 font-medium">AUG</div>
            <div className="text-5xl text-gray-600 font-light">15</div>
            <div className="text-[#FF1493] text-2xl mt-2">▼</div>
          </div>
          <p className="text-gray-600">
            Independence Day Celebration, starting at 8:30 AM on the school grounds.
          </p>
        </div>

        {/* Event 2 */}
        <div className="text-center border-r last:border-r-0">
          <div className="mb-4">
            <div className="text-gray-500 font-medium">NOV</div>
            <div className="text-5xl text-gray-600 font-light">14</div>
            <div className="text-[#FF1493] text-2xl mt-2">▼</div>
          </div>
          <p className="text-gray-600">
            Children's Day Celebration, starting at 8:30 AM in the auditorium.
          </p>
        </div>

        {/* Event 3 */}
        <div className="text-center border-r last:border-r-0">
          <div className="mb-4">
            <div className="text-gray-500 font-medium">DEC</div>
            <div className="text-5xl text-gray-600 font-light">25</div>
            <div className="text-[#FF1493] text-2xl mt-2">▼</div>
          </div>
          <p className="text-gray-600">
            Christmas Celebration, starting at 8:30 PM at St. Mary's Church.
          </p>
        </div>
      </div>
    </div>
  )
}