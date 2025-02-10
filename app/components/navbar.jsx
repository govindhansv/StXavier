"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const topNavItems = [
    { label: "About Us", href: "/about" },
    { label: "Why Us", href: "/why-us" },
    { label: "Facilities", href: "/facilities" },
    { label: "EUMIND", href: "/eumind" },
  ];

  const bottomNavItems = [
    { label: "News & Events", href: "/news" },
    { label: "Downloads", href: "/downloads" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md py-5 fixed top-0 w-full z-50 h-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row with logo and first set of navigation items */}
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 relative">
              <Image
                src="/assets/home/logo.png"
                alt="St. Xavier's Logo"
                className="object-contain"
                width={90}  
                height={90}
              />
            </div>
            <div className="hidden md:block">
              <h1 className="text-gray-800 font-semibold text-lg">
                ST. XAVIER'S
              </h1>
              <p className="text-gray-600 text-xs">
                HIGH SCHOOL & JUNIOR COLLEGE
              </p>
              <p className="text-gray-600 text-xs">PANCHGANI</p>
            </div>
          </div>

          {/* Desktop Navigation - Top Row */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-6 mr-6">
              {topNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <button className="bg-[#FF0076] text-white px-6 py-2 rounded text-sm font-medium hover:bg-[#FF0076]">
              Admission
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {[...topNavItems, ...bottomNavItems].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-50"
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 py-3">
              <button className="w-full bg-[#FF0076] text-white px-6 py-2 rounded text-sm font-medium hover:bg-[#FF0076]">
                Admission
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
