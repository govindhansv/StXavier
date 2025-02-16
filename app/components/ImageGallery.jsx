// components/ImageGallery.js
export default function ImageGallery() {
  return (
    <div className="lg:px-36 mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* New Year */}
        <div className="text-center">
          <div className="border border-gray-300 aspect-square flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <p className=" text-start text-[22px] leading-[30px] max-w-[200px] font-bold text-[#00000080]">
            New Year
          </p>
        </div>

        {/* School Festival */}
        <div className="text-center">
          <div className="border border-gray-300 aspect-square flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <p className=" text-start text-[22px] leading-[30px] max-w-[200px] font-bold text-[#00000080]">
            School Festival
          </p>
        </div>

        {/* Study Tour */}
        <div className="text-center">
          <div className="border border-gray-300 aspect-square flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <p className=" text-start text-[22px] leading-[30px] max-w-[200px] font-bold text-[#00000080]">
            Study Tour
          </p>
        </div>
      </div>
    </div>
  );
}
