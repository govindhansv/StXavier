import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Star } from "lucide-react";

export default function MTestimonials() {
  return (
    <div className="px-4 lg:px-36 mx-auto py-8 lg:py-12 bg-gray-50">
      {/* Section Title */}
      <div className="mb-4 lg:mb-8">
        <button className="bg-[#FF0076] text-white px-4 lg:px-6 py-3 lg:py-5 text-sm lg:text-[26px] hover:bg-[#FF0076]/90 font-bold">
          Testimonials
        </button>
      </div>

      <div className="shadow-xl p-4 lg:p-8 bg-white mt-8 lg:mt-16">
        <div className="lg:px-36 mx-auto p-4 lg:p-6 bg-white relative">
          {/* Star Rating - Responsive positioning */}
          <div className="absolute top-4 lg:top-12 right-4 lg:right-12">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 lg:w-6 lg:h-6 fill-current" />
              ))}
            </div>
            <div className="hidden lg:block absolute right-0 -top-4">
              <span className="quote text-[#FF0076] text-[160px] font-serif">"</span>
            </div>
          </div>

          {/* Profile Section - Responsive layout */}
          <div className="flex flex-col lg:flex-row items-center mt-8 mb-4">
            <img
              src="/assets/home/director.png"
              alt="Dr. Josephine Samson"
              className="w-24 h-24 lg:w-[162px] lg:h-[162px] mb-4 lg:mb-0 lg:mr-4 border-2 border-[#FF0076] rounded-full"
            />
            <div className="text-center lg:text-left lg:pl-8">
              <h2 className="text-xl lg:text-[20px] font-bold text-gray-800">
                Dr. Josephine Samson
              </h2>
              <p className="text-lg lg:text-[20px] font-medium text-gray-800">
                M.D. Community Medicine
              </p>
              <p className="text-lg lg:text-[20px] font-medium text-gray-800">
                Krishna Institute of Medical Sciences,
                <br className="hidden lg:block" /> Karad
              </p>
            </div>
          </div>

          {/* Testimonial Text - Responsive font size */}
          <blockquote className="text-sm lg:text-[20px] leading-relaxed lg:leading-snug font-light mb-4">
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

          {/* Navigation Arrows - Responsive positioning */}
          <div className="absolute inset-y-0 left-0 lg:left-10 flex items-center">
            <button className="bg-gray-200/50 p-1 lg:p-2 text-xl lg:text-3xl">←</button>
          </div>
          <div className="absolute inset-y-0 right-0 lg:right-10 flex items-center">
            <button className="bg-gray-200/50 p-1 lg:p-2 text-xl lg:text-3xl">→</button>
          </div>
        </div>
      </div>
    </div>
  );
}