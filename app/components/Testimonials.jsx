// components/Testimonials.js
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <div className="px-6 lg:px-36 mx-auto py-12 bg-gray-50">
      {/* Section Title */}
      <div className="mb-8">
        <button className="bg-[#FF0076] text-white px-6 py-5 text-sm hover:bg-[#FF0076]/90 font-bold lg:text-[26px]">
          Testimonials
        </button>
      </div>

      <div className="shadow-xl p-8 bg-white mt-16">
        <div className="lg:px-36 mx-auto p-6 bg-white   relative">
          {/* Star Rating - Moved to top right */}
          <div className="absolute top-12 right-12">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <div className="hidden lg:block absolute right-0 -top-4">
              <span className="quote text-[#FF0076] text-[160px] font-serif ">"</span>
            </div>
          </div>

          {/* Profile Section */}
          <div className="flex items-center mt-8 mb-4">
            <img
              src="/assets/home/director.png"
              alt="Dr. Josephine Samson"
              className="w-[162px] h-[162px]  mr-4 border-2 border-pink-[#FF0076] rounded-full"
            />
            <div className="pl-8">
              <h2 className="text-[24px] font-bold text-gray-800">
                Dr. Josephine Samson
              </h2>
              <p className="text-[24px] font-medium text-gray-800">
                M.D. Community Medicine
              </p>
              <p className="text-[24px] font-medium text-gray-800">
                Krishna Institute of Medical Sciences ,<br /> Karad
              </p>
            </div>
          </div>

          {/* Testimonial Text */}
          <blockquote className="  text-base lg:text-[24px] leading-snug font-light  mb-4">
            In 2004, I entered my residential school as a quiet, unsure student,
            overwhelmed by the transition. Initially, I struggled academically
            and hesitated in sports and extracurriculars, but the constant
            encouragement of my teachers and peers transformed me. Over time, I
            improved academically, excelled in sports with medals at various
            levels, and discovered hidden talents in performing arts and
            leadership roles. These experiences taught me resilience, teamwork,
            and creativity, shaping me into a confident, empowered individual. I
            am deeply grateful to my school community for being the foundation
            of my transformation and helping me realize my true potential.
          </blockquote>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-10 flex items-center">
            <button className="bg-gray-200/50 p-2  text-3xl">←</button>
          </div>
          <div className="absolute inset-y-0 right-10 flex items-center">
            <button className="bg-gray-200/50 p-2 text-3xl ">→</button>
          </div>
        </div>
      </div>
    </div>
  );
}
