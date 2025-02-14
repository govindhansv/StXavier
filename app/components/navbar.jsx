"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
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
    <nav className="bg-white fixed top-0 w-full z-50 h-40">
      <div className="mx-auto px-4 sm:px-6 lg:px-24 flex flex-col justify-center">
        {/* Main navbar content */}
        <div className="flex justify-between items-center h-20 md:h-40">
          {/* Logo and School Name */}
          <div className="flex items-center space-x-2 md:space-x-4 flex-1 md:w-2/5">
            <div className="w-12 h-12 md:w-full md:h-auto relative flex-shrink-0">
              <Image
                src="/assets/logo/logo.png"
                alt="St. Xavier's Logo"
                className="object-contain"
                width={500}
                height={500}
              />
            </div>
            {/* <div>
              <h1 className="text-gray-600 font-bold text-sm md:text-lg lg:text-2xl">
                ST. XAVIER'S
              </h1>
              <p className="text-gray-600 font-bold text-xs lg:text-sm hidden md:block">
                HIGH SCHOOL & JUNIOR COLLEGE
              </p>
              <p className="font-bold text-xs lg:text-sm hidden md:block">
                PANCHGANI
              </p>
            </div> */}
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
            className="md:hidden p-2  text-gray-600 hover:bg-gray-100 focus:outline-none"
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
          className={`md:hidden transition-all duration-300 ease-in-out ${
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
                className="block px-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 py-3">
              <button className="w-full bg-[#FF0076] text-white px-6 py-2 rounded text-sm font-medium hover:bg-[#FF0076]/90">
                Admission
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
