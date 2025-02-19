import React from "react";

const MDirectorsMessage = () => {
  return (
    <div
      className="relative px-4 lg:px-36 py-12"
      style={{ background: "#F0F0F0 0% 0% no-repeat padding-box" }}
    >
      <div className="mx-auto">
        {/* Header */}
        <div className="absolute top-0 left-4 lg:left-36">
          <button className="bg-[#FF0076] text-white px-4 lg:px-6 py-3 lg:py-5 text-sm lg:text-[26px] font-bold">
            Director's Message
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start relative mt-16">
          {/* Image */}
          <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
            <img
              src="/assets/home/director.png"
              alt="Fr. Tomy Kariyilakulam"
              className="h-40 lg:h-64 object-contain"
            />
          </div>

          {/* Message Content */}
          <div className="w-full lg:w-2/3 relative px-4 lg:px-0">
            <h2 className="text-xl lg:text-[36px] font-bold mb-4 text-center lg:text-left">
              Fr. Tomy Kariyilakulam
            </h2>

            {/* Quote mark - Hidden on mobile */}
            <div className="hidden lg:block absolute right-0 -top-20">
              <span className="quote text-[#FF0076] text-[160px] font-serif">"</span>
            </div>

            {/* Mobile Quote mark */}
            <div className="block lg:hidden text-center mb-2">
              <span className="quote text-[#FF0076] text-6xl font-serif">"</span>
            </div>

            <p className="text-base lg:text-[20px] lg:w-[796px] font-light pt-2 lg:pt-4 text-center lg:text-left leading-relaxed lg:leading-[30px]">
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

export default MDirectorsMessage;
