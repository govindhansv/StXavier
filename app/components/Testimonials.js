// components/Testimonials.js
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

export default function Testimonials() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Section Title */}
      <div className="mb-8">
        <span className="bg-[#FF1493] text-white px-6 py-2 text-xl font-medium">
          Testimonials
        </span>
      </div>

      {/* Testimonial Card */}
      <div className="relative bg-white rounded-lg shadow-sm p-8">
        {/* Navigation Arrows */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
          <ChevronLeftIcon className="h-8 w-8" />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
          <ChevronRightIcon className="h-8 w-8" />
        </button>

        <div className="max-w-3xl mx-auto">
          {/* Stars and Quote */}
          <div className="flex justify-between mb-6">
            <div className="flex text-orange-400">
              {"★".repeat(5)}
            </div>
            <div className="text-[#FF1493] text-6xl font-serif">"</div>
          </div>

          {/* Profile */}
          <div className="flex items-center mb-6">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image
                src="/assets/home/teacher.png"
                alt="Ms. Priya Malhotra"
                fill
                className="object-cover"
              />
            </div>
            <div className="ml-4">
              <h3 className="font-medium text-gray-800">Ms. Priya Malhotra,</h3>
              <p className="text-gray-600">Software Engineer, TCS</p>
            </div>
          </div>

          {/* Testimonial Text */}
          <div className="text-gray-600 leading-relaxed">
            St. Xavier's School, Panchgani played a pivotal role in shaping 
            my career and personal development. The school's emphasis 
            on academic excellence, moral values, and holistic education 
            provided me with a strong foundation that I carry with pride. 
            The supportive environment and dedicated faculty inspired me 
            to pursue a career in technology, and I am grateful for the skills 
            and values that St. Xavier's instilled in me. My journey from St. 
            Xavier's to becoming a Software Engineer at TCS has been truly 
            rewarding, and I credit much of my success to the strong 
            educational base I received at the school.
          </div>
        </div>
      </div>
    </div>
  )
}