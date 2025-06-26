"use client";
import { useState } from 'react';
import expert from "/public/newsletter-icon.svg";
import rightmostimage from "/public/orignal-logo-.jpg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-300 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-sky-400 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        {/* Top Section */}
        <div className="text-center mb-12">
          <div className="flex flex-col items-center justify-center gap-3 mb-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300">
                <span className="text-white font-bold text-lg">Aj</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Ajayaa <span className="text-white">EdTech</span>
              </h2>
            </div>
            <p className="text-sm text-blue-300 font-medium mt-2 animate-pulse">
              Transforming Education, Empowering Futures
            </p>
          </div>
          <p className="max-w-3xl mx-auto text-slate-300 leading-relaxed text-sm md:text-base">
            We understand that every student has different needs and capabilities, which is why we create such a wonderful and
            unique curriculum that is the best fit for every student.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* More About Us Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">More About Us</h3>
            <div className="space-y-3">
              {['About Us', 'Blogs', 'Contact Us'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-slate-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 text-sm md:text-base group"
                >
                  <span className="group-hover:underline">{item}</span>
                </a>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              {['Email Us', 'Talk to a Counsellor'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2 text-sm md:text-base group"
                >
                  <span className="group-hover:underline">{item}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Country Selection */}
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4 p-4 rounded-lg bg-white shadow-md border border-gray-200 max-w-md">
              {/* Text */}
              <div>
                <h3 className="text-base font-semibold text-gray-800">
                  Know more about our courses. <br />
                  Book a free counselling session.
                </h3>
                <button className="mt-3 px-4 py-2 text-white text-sm font-medium bg-orange-500 hover:bg-orange-600 rounded-md transition duration-300">
                  Speak to an expert
                </button>
              </div>

              {/* Expert Image */}
              <div className="min-w-[60px] w-16 h-16 rounded-full overflow-hidden bg-orange-100 flex items-center justify-center">
                <Image
                  src={expert}
                  alt="Expert Icon"
                  className="object-contain w-12 h-12"
                />
              </div>
            </div>

            {/* Quick Links for mobile */}
            <div className="mt-8 lg:hidden">
              <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {['Courses', 'Pricing', 'Support'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-slate-300 hover:text-blue-400 transition-all duration-300 text-sm"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mascot Section - Modified for mobile centering */}
          <div className="flex justify-center lg:justify-end items-end">
            <div className="relative group w-full max-w-xs mx-auto lg:mx-0">
              <Image
                src={rightmostimage}
                alt="Ajayaa EdTech Mascot"
                className="object-contain w-full h-auto"
                width={300}
                height={300}
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-slate-400">
              <p>Copyright © 2025 Ajayaa EdTech Ltd. All rights reserved.</p>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300 hover:underline"
              >
                Privacy Policy
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300 hover:underline"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}