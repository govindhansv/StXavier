// components/Testimonials.js
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { Star } from 'lucide-react'

export default function Testimonials() {
  return (
    <div className="lg:px-40 mx-auto py-12">
      {/* Section Title */}
      <div className="mb-8">
        <span className="bg-[#FF1493] text-white px-6 py-2 text-xl font-medium">
          Testimonials
        </span>
      </div>

      <div className="lg:px-40 mx-auto p-6 bg-white shadow-lg rounded-lg relative">
   

      {/* Profile Section */}
      <div className="flex items-center mt-8 mb-4">
        <img 
          src="/assets/home/director.png" 
          alt="Dr. Josephine Samson" 
          className="w-20 h-20 rounded-full mr-4 border-2 border-pink-500"
        />
        <div>
          <h2 className="text-xl font-bold text-gray-800">Dr. Josephine Samson</h2>
          <p className="text-xl font-bold text-gray-800">M.D. Community Medicine</p>
          <p className="text-xl font-bold text-gray-800">Krishna Institute of Medical Sciences</p>
          <p className="text-xl font-bold text-gray-800"> Karad</p>
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex text-yellow-500 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-6 h-6 fill-current" />
        ))}
      </div>

      {/* Testimonial Text */}
      <blockquote className="italic text-gray-700 text-base leading-relaxed mb-4">
        In 2004, I entered my residential school as a quiet, unsure student, overwhelmed by the transition. Initially, I struggled academically and hesitated in sports and extracurriculars, but the constant encouragement of my teachers and peers transformed me. Over time, I improved academically, excelled in sports with medals at various levels, and discovered hidden talents in performing arts and leadership roles. These experiences taught me resilience, teamwork, and creativity, shaping me into a confident, empowered individual. I am deeply grateful to my school community for being the foundation of my transformation and helping me realize my true potential.
      </blockquote>

      {/* Navigation Arrows */}
      {/* <div className="absolute inset-y-0 left-0 flex items-center">
        <button className="bg-gray-200/50 p-2 rounded-full">
          ←
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button className="bg-gray-200/50 p-2 rounded-full">
          →
        </button>
      </div> */}
    </div>

    </div>
  )
}