import Image from "next/image";

export default function MTeachersSection() {
  return (
    <div
      className="relative px-4 lg:px-36 pb-8 lg:pb-16"
      style={{ background: "#F0F0F0 0% 0% no-repeat padding-box" }}
    >
      <div className="absolute top-0 left-4 lg:left-36">
        <button className="bg-[#FF0076] text-white px-4 lg:px-6 py-3 lg:py-5 text-base lg:text-[26px] hover:bg-[#FF0076]/90 font-bold">
          Our Teachers
        </button>
      </div>
      <div className="mx-auto pt-16 lg:pt-24">
        {/* Teachers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-2 relative">
          {/* Teacher 1 */}
          <div className="relative w-full aspect-[2/3] lg:w-[267px] lg:h-[394px]">
            <Image
              src="/assets/home/teacher.png"
              alt="Teacher"
              fill
              className="object-cover"
            />
          </div>

          {/* Teacher 2 */}
          <div className="relative w-full aspect-[2/3] lg:w-[267px] lg:h-[394px]">
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
                border-4
                lg:border-8
                text-4xl
                lg:text-[96px]
                border-white
                w-12
                h-12
                lg:w-28 
                lg:h-28 
                flex 
                items-center 
                justify-center 
                text-white 
                transition-all 
                duration-300 
                ease-in-out
                hover:scale-110 
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
          <div className="relative w-full aspect-[2/3] lg:w-[267px] lg:h-[394px]">
            <Image
              src="/assets/home/teacher.png"
              alt="Teacher"
              fill
              className="object-cover"
            />
          </div>

          {/* Teacher 4 */}
          <div className="relative w-full aspect-[2/3] lg:w-[267px] lg:h-[394px]">
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