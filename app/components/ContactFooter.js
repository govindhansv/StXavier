// components/ContactFooter.js
import Image from 'next/image'

export default function ContactFooter() {
  return (
    <div className="bg-gray-50 py-12">
      {/* Contact Section Header */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <span className="bg-[#FF1493] text-white px-6 py-2 text-xl font-medium">
          Contact Us
        </span>
      </div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          {/* School Logo */}
          <div className="flex items-center gap-4">
            <Image
              src="/assets/home/logo.png"
              alt="St. Xavier's High School Logo"
              width={80}
              height={80}
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">ST. XAVIER'S</h2>
              <h3 className="text-lg text-gray-700">HIGH SCHOOL</h3>
              <p className="text-gray-600">PANCHGANI</p>
            </div>
          </div>

          {/* Address */}
          <div className="text-gray-600">
            <p>St. Xaviers High School, <span className="font-semibold">Panchgani</span> P. O.,</p>
            <p>Tal - Mahabaleshwar, Dist - Satara, Maharashtra</p>
            <p>India - 412 805</p>
          </div>
        </div>

        {/* Contact Info and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          {/* Social Icons */}
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fas fa-map-marker-alt text-xl"></i>
            </a>
          </div>

          {/* Contact Details */}
          <div className="text-center md:text-right">
            <div className="text-gray-600 mb-2">
              <span className="text-gray-800">+91 9975064585</span> | 
              <span className="text-gray-800"> +91 8390850053</span> | 
              <span className="text-gray-800"> +91 7066090694</span>
            </div>
            <div>
              <span className="text-gray-600">Email: </span>
              <a href="mailto:xvierspanchgani@gmail.com" className="text-gray-800">
                xvierspanchgani@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm border-t pt-4">
          © All copyright reserved to St. Xaviers High School, Panchgani
        </div>
      </div>
    </div>
  )
}