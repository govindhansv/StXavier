import React from 'react';
import ContactFooter from '../components/ContactFooter';

const DownloadsPage = () => {
  const downloads = [
    { name: 'APPLICATION FORM' },
    { name: 'JOURNALS' },
    { name: 'LEAVE APPLICATION' },
    { name: 'EBOOKS' }
  ];

  return (
    <>
    <div className=" "  >
      <div className="flex justify-between mb-6 p-6 bg-white">
        <button className="text-gray-600 font-medium">← BACK</button>
        <h1 className="text-2xl font-bold text-blue-600">DOWNLOADS</h1>
      </div>

      <div className="grid grid-cols-2 gap-4 p-8  justify-center items-center"  style={{ background: "#F0F0F0" }}>
        {downloads.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center space-x-3  p-4 rounded-lg"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-[#FF0076]"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
            <span className="text-gray-700">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
    <ContactFooter/>
    </>

  );
};

export default DownloadsPage;