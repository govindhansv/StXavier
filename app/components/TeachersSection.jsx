// pages/components/TeachersSection.js
import Image from "next/image";

export default function TeachersSection() {
  return (
    <div
      className="relative px-4 lg:px-40 pb-16"
      style={{ background: "#F0F0F0 0% 0% no-repeat padding-box" }}
    >
      <div className="absolute top-0 left-4 lg:left-40">
        <button className="bg-[#FF0076] text-white px-6 lg:px-8 py-2 text-base lg:text-lg font-bold">
          Our Teachers
        </button>
      </div>
      <div className="mx-auto pt-20 lg:pt-24">
        {/* Teachers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 relative">
          {/* Teacher 1 */}
          <div className="relative h-[300px] lg:h-[400px] overflow-hidden">
            <Image
              src="/assets/home/teacher.png"
              alt="Teacher"
              fill
              className="object-cover"
            />
          </div>

          {/* Teacher 2 */}
          <div className="relative h-[300px] lg:h-[400px] overflow-hidden">
            <Image
              src="/assets/home/teacher.png"
              alt="Teacher"
              fill
              className="object-cover"
            />
          </div>

          {/* Plus Icon Overlay */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <button
              className={`
                bg-[#FF1493] 
                rounded-full 
                w-8 
                h-8 
                lg:w-12 
                lg:h-12 
                flex 
                items-center 
                justify-center 
                text-white 
                text-xl 
                lg:text-3xl 
                transition-all 
                duration-300 
                ease-in-out
                hover:scale-110 
                hover:shadow-lg 
                hover:bg-[#FF69B4]
                active:scale-95
                focus:outline-none
                focus:ring-2
                focus:ring-pink-300
              `}
            >
              {"+"}
            </button>
          </div>

          {/* Teacher 3 */}
          <div className="relative h-[300px] lg:h-[400px] overflow-hidden">
            <Image
              src="/assets/home/teacher.png"
              alt="Teacher"
              fill
              className="object-cover"
            />
          </div>

          {/* Teacher 4 */}
          <div className="relative h-[300px] lg:h-[400px] overflow-hidden">
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
  );
}
