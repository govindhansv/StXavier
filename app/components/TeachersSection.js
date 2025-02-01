// pages/components/TeachersSection.js
import Image from 'next/image'

export default function TeachersSection() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="mb-8">
          <span className="bg-[#FF1493] text-white px-6 py-2 text-xl font-medium">
            Our Teachers
          </span>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {/* Teacher 1 */}
          <div className="relative h-72 overflow-hidden">
            <Image
              src="/assets/home/teacher.png"
              alt="Teacher"
              fill
              className="object-cover"
            />
          </div>

          {/* Teacher 2 */}
          <div className="relative h-72 overflow-hidden">
            <Image
              src="/assets/home/teacher.png"
              alt="Teacher"
              fill
              className="object-cover"
            />
          </div>

          {/* Plus Icon Overlay */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-[#FF1493] rounded-full w-12 h-12 flex items-center justify-center">
              <span className="text-white text-3xl">+</span>
            </div>
          </div>

          {/* Teacher 3 */}
          <div className="relative h-72 overflow-hidden">
            <Image
              src="/assets/home/teacher.png"
              alt="Teacher"
              fill
              className="object-cover"
            />
          </div>

          {/* Teacher 4 */}
          <div className="relative h-72 overflow-hidden">
            <Image
              src="/assets/home/teacher.png"
              alt="Teacher"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}