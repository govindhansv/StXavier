import React from 'react';

const LightbulbIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
    <path d="M9 18h6m-5 4h4M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
  </svg>
);

const RunnerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
    <path d="M13 4v16M17 4v16M21 4v16" />
    <path d="M8 8c0 4.4-3.6 8-8 8M8 8c0-4.4-3.6-8-8-8" />
  </svg>
);

const StatsDashboard = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      {/* Top Stats Row */}
      <div className="grid grid-cols-2 gap-8 mb-12 text-center">
        <div>
          <h2 className="text-pink-500 font-bold text-2xl mb-2">PASSED OUT</h2>
          <p className="text-blue-600 text-4xl font-bold">1.48K+</p>
        </div>
        <div>
          <h2 className="text-pink-500 font-bold text-2xl mb-2">TOTAL STAFF</h2>
          <p className="text-blue-600 text-4xl font-bold">348+</p>
        </div>
      </div>

      {/* Academic Awards Row */}
      <div className="grid grid-cols-2 gap-8 mb-12">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 text-blue-600">
            <LightbulbIcon />
          </div>
          <div>
            <h2 className="text-pink-500 font-bold text-xl">NATIONAL ACADEMIC AWARD</h2>
            <p className="text-blue-600 text-3xl font-bold">1</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <h2 className="text-pink-500 font-bold text-xl">STATE ACADEMIC AWARD</h2>
            <p className="text-blue-600 text-3xl font-bold">5</p>
          </div>
        </div>
      </div>

      {/* Sports Awards Row */}
      <div className="grid grid-cols-2 gap-8">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 text-blue-600">
            <RunnerIcon />
          </div>
          <div>
            <h2 className="text-pink-500 font-bold text-xl">NATIONAL SPORTS AWARD</h2>
            <p className="text-blue-600 text-3xl font-bold">2</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <h2 className="text-pink-500 font-bold text-xl">STATE SPORTS AWARD</h2>
            <p className="text-blue-600 text-3xl font-bold">5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsDashboard;