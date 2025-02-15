"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About Us", href: "/about" },
    { label: "Why Us", href: "/why-us" },
    { label: "Facilities", href: "/facilities" },
    { label: "EUMIND", href: "/eumind" },
    { label: "Admissions", href: "/admissions" },
    { label: "Our Teachers", href: "/ourteachers" },
    { label: "News & Events", href: "/news" },
    { label: "Downloads", href: "/downloads" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-white fixed top-0 w-full z-50 h-20 md:h-40">
      <div className=" flex flex-col justify-center">
        {/* Main navbar content */}
        <div className="flex justify-between items-center h-20 md:h-40">
          {/* Logo and School Name */}
          <div className="flex items-center space-x-2 md:space-x-4 flex-1">
  <div className=" md:w-full md:h-auto relative flex-shrink-0"> {/* Increased width and height for mobile */}
    <Image
      src="/assets/logo/logo.png"
      alt="St. Xavier's Logo"
      className="object-contain"
      width={150} // Increased from 80 to 150 for mobile
      height={150} // Increased from 80 to 150 for mobile
      sizes="(max-width: 768px) 150px, 500px"
    />
  </div>
</div>
          <div className="w-16"></div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-col items-center w-3/7">
            {/* Top row */}
            <div className="flex items-center py-2 ">
              {navItems.slice(0, 4).map((item, index) => (
                <React.Fragment key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-gray-900 px-3 text-[20px] font-medium"
                  >
                    {item.label}
                  </Link>
                  {index < 3 && <span className="text-[#707070]">|</span>}
                </React.Fragment>
              ))}
            </div>

            <div className="w-full border-t border-gray-400 my-1"></div>

            {/* Bottom row */}
            <div className="flex items-center py-2">
              {navItems.slice(6, 9).map((item, index) => (
                <React.Fragment key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-gray-900 px-3 text-[20px] font-medium"
                  >
                    {item.label}
                  </Link>
                  {index < 2 && <span className="text-gray-400">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Admission Button - Desktop */}
          <div className="hidden md:flex w-1/5 justify-end">
            <Link href="/admissions">
              <button className="bg-[#FF0076] text-white px-3 py-3 text-sm hover:bg-[#FF0076]/90 font-bold lg:text-[20px]">
                Admission
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none absolute right-4"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden fixed top-20 left-0 right-0 bg-white transition-all duration-300 ease-in-out shadow-lg ${
            isMenuOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="py-2 space-y-1 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-6 py-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-6 py-4">
              <Link href="/admissions" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full bg-[#FF0076] text-white px-6 py-3 text-base font-medium hover:bg-[#FF0076]/90">
                  Admission
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MNavbar;