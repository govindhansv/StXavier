import React from "react";

const DirectorsMessage = () => {
  return (
    <div
      className="relative px-4 lg:px-40 py-12"
      style={{ background: "#F0F0F0 0% 0% no-repeat padding-box" }}
    >
      <div className="mx-auto">
        {/* Header */}
        <div className="absolute top-0 left-8 lg:left-40">
          <button className="bg-[#FF0076] text-white px-8 py-2 text-lg font-bold">
            Director's Message
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start relative mt-12">
          {/* Image */}
          <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
            <img
              src="/assets/home/director.png"
              alt="Fr. Tomy Kariyilakulam"
              className="h-48 lg:h-64 object-contain"
            />
          </div>

          {/* Message Content */}
          <div className="w-full lg:w-2/3 relative">
            <h2 className="text-xl lg:text-2xl font-bold mb-4 text-gray-800 text-center lg:text-left">
              Fr. Tomy Kariyilakulam
            </h2>

            {/* Quote mark */}
            <div className="hidden lg:block absolute right-0 -top-20">
              <span className="text-[#FF0076] text-[200px] font-serif">"</span>
            </div>

            <p className="text-gray-700 text-base  lg:text-[22px]  leading-snug font-light  font-light pt-4 text-center lg:text-left ">
              When I founded St. Xavier's in Panchgani, which is known as the
              education hub of Maharashtra, I had a dream. That was to create
              transformative excellence in character and quality. I do think
              that many parents in India are obsessed with grades and admission
              to top professional colleges. But our experience tell that success
              and happiness comes only with character and hard work. I am really
              proud to say that Xavierites are proving time and again that we
              can change lives beyond imaginations. Dr. APJ Abdul Kalam, who
              visited us in Panchgani in 2003 as the President of India
              continues to be my inspiration to strive to keep St. Xavier's at
              the top.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorsMessage;
