import React from 'react';
import Image from 'next/image';
import { BulbIcon, User2Icon } from 'lucide-react';

const HeroStats = () => {
  const stats = [
    { value: '12K+', label: 'PASSED OUT', color: '#4A90E2' },
    { value: '150+', label: 'TEACHERS', color: '#4A90E2' },
    { 
      value: '4', 
      label: 'AWARDS',
      color: '#4A90E2',
      icon: <BulbIcon className="w-6 h-6 text-blue-500" />
    },
    { 
      value: '5', 
      label: 'AWARDS',
      color: '#4A90E2',
      icon: <User2Icon className="w-6 h-6 text-blue-500 transform rotate-45" />
    },
  ];

  return (
    <div className="relative bg-white">
      {/* Pink About Us Button */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <button className="bg-pink-500 text-white px-8 py-2 rounded-md text-lg font-medium">
          About Us
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-6xl font-bold text-blue-600 mb-6">
              WELCOME
            </h1>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
              TO ST. XAVIER'S HIGH SCHOOL &<br />
              JUNIOR COLLEGE, PANCHGANI<br />
              (RESIDENTIAL)
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              St. Xavier's High School, Panchgani, is a residential educational
              institution of St. Xavier's Education Trust. Panchgani, an
              evergreen hill station is a well-known education centre. Located
              4300 feet above sea level in the Western Ghats, it is 300 kms
              south of Bombay and 100 kms south of Pune. St. Xaviers provides
              a unique environment to impart value-based education with
              opportunities for moral upbringing
            </p>
          </div>

          {/* Right Image */}
          <div className="relative h-[500px]">
            <Image
              src="/api/placeholder/600/500"
              alt="Student on skateboard"
              className="object-contain"
              fill
            />
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center border-r last:border-r-0 border-pink-300"
              >
                <div 
                  className="text-4xl font-bold mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                  {stat.icon && (
                    <div className="mb-1">
                      {stat.icon}
                    </div>
                  )}
                  <span className="text-pink-500 font-semibold">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroStats;