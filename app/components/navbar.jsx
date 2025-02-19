"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { label: "About Us", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "Facilities", href: "#facilities" },
    { label: "EUMIND", href: "#eumind" },
    { label: "Admissions", href: "/admissions" },
    { label: "Our Teachers", href: "/ourteachers" },
    { label: "News & Events", href: "#news" },
    { label: "Downloads", href: "/downloads" },
    { label: "Contact Us", href: "#contact" },
  ];

  const scrollToSection = (id) => {
    if (id === "downloads") {
      router.push("/downloads");
    } else {
      const element = document.getElementById(id);
      const navbarHeight = document.querySelector('nav').offsetHeight;
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white fixed top-0 w-full z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-36 flex flex-col justify-center">
        {/* Main navbar content */}
        <div className="flex justify-between items-center h-20 md:h-32">
          {/* Logo and School Name */}
          <div className="md:w-2/5">
            <a href="/">
              <div className="w-12 h-12 md:w-full md:h-auto relative flex-shrink-0 pr-12">
                <Image
                  src="/assets/logo/logo.png"
                  alt="St. Xavier's Logo"
                  className="object-contain h-28"
                  width={500}
                  height={500}
                />
              </div>
            </a>
          </div>
          <div className="w-16"></div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-col items-start w-3/7">
            {/* Top row */}
            <div className="flex items-start justify-start py-2 ">
              {navItems.slice(0, 4).map((item, index) => (
                <React.Fragment key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.href.slice(1))}
                    className={`text-gray-500 hover:text-gray-900 text-[16px] font-medium ${
                      index == 0 ? `pr-3` : `pl-3`
                    } ${index == 3 ? `pl-3` : `pr-3`} `}
                  >
                    {item.label}
                  </button>
                  {index < 3 && <span className="text-[#707070]">|</span>}
                </React.Fragment>
              ))}
            </div>

            <div className="w-full border-t border-gray-400 -my-1"></div>

            {/* Bottom row */}
            <div className="flex items-center py-2">
              {navItems.slice(6, 9).map((item, index) => (
                <React.Fragment key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.href.slice(1))}
                    className={`text-gray-500 hover:text-gray-900 text-[16px] font-medium ${
                      index == 0 ? `pr-3` : `pl-3`
                    } ${index == 2 ? `pl-3` : `pr-3`} `}
                  >
                    {item.label}
                  </button>
                  {index < 2 && <span className="text-gray-400">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Admission Button - Desktop */}
          <div className="hidden md:flex w-[160px] justify-end">
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
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href.slice(1))}
                className="block px-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 py-3">
              <Link href="/admissions">
                <button className="w-full bg-[#FF0076] text-white px-6 py-2 rounded text-sm font-medium hover:bg-[#FF0076]/90">
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

export default Navbar;
