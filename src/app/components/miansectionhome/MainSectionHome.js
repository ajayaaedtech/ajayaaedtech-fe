"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import HorizontalScrollingCards from './HorizontalScrollingCards';

const MainSectionHome = () => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Header with Logo */}
        <div className="flex items-center mb-6 md:mb-8">
          <div className="w-10 h-10 relative">
            <Image
              src="/half-logo.png"
              alt="TOI Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl md:text-2xl font-bold text-gray-900 ml-2">AJAYAA EDTECH</span>
        </div>

        {/* Live Sessions Badge */}
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 shadow-sm rounded-2xl border-red-500 border-l-2 mb-6">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
          <span className="text-red-500 font-medium">&nbsp;Upcoming Recorded Sessions</span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Content - Info Section */}
          <div className="flex-1">
            {/* Main Heading */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-gray-700 text-lg md:text-xl font-bold mb-2">AI Bootcamp For Students</h2>
              <h1 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-black leading-tight md:leading-[46px]">
                Make Your <span className="text-blue-600">Future-Ready With Technology</span>
              </h1>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12">
              {/* Feature 1 */}
              <div className="bg-white rounded-lg p-3 md:p-4 text-center shadow-sm border border-gray-100">
                <div className="text-blue-600 mb-2 mx-auto w-6 h-6">
                  <svg className="w-6 w-6 " fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <p className="font-semibold text-sm md:text-base">Eligibility</p>
                <p className="text-xs md:text-sm text-gray-700 mt-1">Grades 6–12</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-lg p-3 md:p-4 text-center shadow-sm border border-gray-100">
                <div className="text-blue-600 mb-2 mx-auto w-6 h-6">
                  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                    <path d="M12 3L13.9101 4.87147L16.5 4.20577L17.2184 6.78155L19.7942 7.5L19.1285 10.0899L21 12L19.1285 13.9101L19.7942 16.5L17.2184 17.2184L16.5 19.7942L13.9101 19.1285L12 21L10.0899 19.1285L7.5 19.7942L6.78155 17.2184L4.20577 16.5L4.87147 13.9101L3 12L4.87147 10.0899L4.20577 7.5L6.78155 6.78155L7.5 4.20577L10.0899 4.87147L12 3Z" stroke="#155DFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="font-semibold text-sm md:text-base">Get Certified</p>
                <p className="text-xs md:text-sm text-gray-700 mt-1">By Ajayaa Edtech</p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-lg p-3 md:p-4 text-center shadow-sm border border-gray-100">
                <div className="text-blue-600 mb-2 mx-auto w-6 h-6">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"  stroke="#155DFC" strokeWidth="1"  />
                  </svg>
                </div>
                <p className="font-semibold text-sm md:text-base">Pick a Slot</p>
                <p className="text-xs md:text-sm text-gray-700 mt-1">11AM–1PM<br />5PM–7PM</p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-lg p-3 md:p-4 text-center shadow-sm border border-gray-100">
                <div className="text-blue-600 mb-2 mx-auto w-6 h-6">
                  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M15.24 2H8.76004C5.00004 2 4.71004 5.38 6.74004 7.22L17.26 16.78C19.29 18.62 19 22 15.24 22H8.76004C5.00004 22 4.71004 18.62 6.74004 16.78L17.26 7.22C19.29 5.38 19 2 15.24 2Z" stroke="#292D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="font-semibold text-sm md:text-base">Duration</p>
                <p className="text-xs md:text-sm text-gray-700 mt-1">4 Weekends<br /></p>
              </div>
            </div>
          </div>

          {/* Right Content - Video/Image Section (Full width on mobile only) */}
          <div className="w-full md:flex-1 md:max-w-lg">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ">
              {/* Main Image */}
              <div className="relative aspect-video">
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                  </div>
                )}
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/small.png"
                    alt="AI Instructor"
                    fill
                    className="object-cover object-top"
                    onLoad={() => setImageLoading(false)}
                  />
                </div>

              </div>

              {/* CTA Button */}
              <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-yellow-400 to-transparent ">
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 transition-colors text-black font-bold py-1 px-1 rounded-lg shadow-lg text-sm md:text-base">
                  <div className='flex flex-col p-4 items-end'>
                    <p>Be a Star Learner   </p>
                    <p>— Powered by Ajayaa EdTech</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <HorizontalScrollingCards />

    </div>
  );
};

export default MainSectionHome;