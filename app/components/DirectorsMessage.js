import React from 'react';

const DirectorsMessage = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header */}
        <div className="mb-8">
          <span className="inline-block bg-pink-500 text-white px-6 py-2 text-lg font-bold">
            Director's Message
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start relative">
          {/* Image */}
          <div className="w-full md:w-1/3">
            <img
              src="/assets/home/director.png"
              alt="Fr. Tomy Kariyilakulam"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Message Content */}
          <div className="w-full md:w-2/3 relative">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Fr. Tomy Kariyilakulam
            </h2>

            {/* Quote mark */}
            <div className="absolute right-0 -top-4">
              <span className="text-pink-500 text-6xl font-serif">"</span>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              When I founded St. Xavier's in Panchgani, which is known as the 
              education hub of Maharashtra, I had a dream. That was to create 
              transformative excellence in character and quality. I do think that 
              many parents in India are obsessed with grades and admission to 
              top professional colleges. But our experience tell that success and 
              happiness comes only with character and hard work. I am really 
              proud to say that Xavierites are proving time and again that we can 
              change lives beyond imaginations. Dr. APJ Abdul Kalam, who 
              visited us in Panchgani in 2003 as the President of India continues 
              to be my inspiration to strive to keep St. Xavier's at the top.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorsMessage;