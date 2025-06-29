"use client";
import rightmostimage from "/public/b.png";
import Image from "next/image";
import Link from "next/link";
import expert from "/public/newsletter-icon.svg";
import imagehalf from "../../../../public/half-logo.png";

export default function Footer() {
  const links = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-300 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-sky-400 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        {/* Top Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex flex-col items-center justify-center gap-3 mb-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center overflow-hidden transform hover:scale-110 transition-all duration-300">
                <Image
                  src={imagehalf}
                  alt="Ajayaa Logo"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Ajayaa <span className="text-white">EdTech</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-blue-300 font-medium mt-1 sm:mt-2 animate-pulse">
              Transforming Education, Empowering Futures
            </p>
          </div>
          <p className="max-w-3xl mx-auto text-slate-300 leading-relaxed text-xs sm:text-sm md:text-base px-2 sm:px-0">
            We understand that every student has different needs and capabilities, which is why we create such a wonderful and
            unique curriculum that is the best fit for every student.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* More About Us Section */}
          <div className="space-y-4 sm:space-y-6 px-4 sm:px-0">
            <div className="relative inline-block">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 relative z-10">
                More About Us
              </h3>
              <svg
                viewBox="0 0 200 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-0 bottom-1 w-full h-3 sm:h-4 z-0"
              >
                <path
                  d="M2 15 C 50 5, 150 25, 198 10"
                  stroke="#FFA500"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>

            <div className="space-y-2 sm:space-y-3">
              {links.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="block text-slate-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 text-sm sm:text-base group"
                >
                  <span className="flex items-center gap-2 group-hover:underline">
                    <span className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 bg-orange-400 rounded-full"></span>
                    {label}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
              {[
                { label: 'Email Us', href: 'mailto:your@email.com' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2 text-sm sm:text-base group"
                >
                  <span className="flex items-center gap-2 group-hover:underline">
                    <span className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 bg-orange-400 rounded-full"></span>
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Expert Counselling Card */}
          <div className="flex justify-center px-4 sm:px-0">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-lg bg-white shadow-md border border-gray-200 max-w-md w-full text-center sm:text-left">
              {/* Text Content */}
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                  Know more about our courses. <br />
                  Book a free counselling session.
                </h3>
                <button className="mt-2 sm:mt-3 px-3 py-1.5 sm:px-4 sm:py-2 text-white text-xs sm:text-sm font-medium bg-orange-500 hover:bg-orange-600 rounded-md transition duration-300">
                  Speak to an expert
                </button>
              </div>

              {/* Expert Image */}
              <div className="min-w-[50px] sm:min-w-[60px] w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-orange-100 flex items-center justify-center">
                <Image
                  src={expert}
                  alt="Expert Icon"
                  className="object-contain w-10 h-10 sm:w-12 sm:h-12"
                />
              </div>
            </div>
          </div>

          {/* Mascot Section */}
          <div className="flex justify-center items-center h-full py-2 sm:py-4 px-4 sm:px-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-center bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 text-transparent bg-clip-text drop-shadow-md">
              With you, every step of the way
            </h2>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 px-4 sm:px-0">
            <div className="flex flex-col md:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-400 text-center md:text-left">
              <p>Copyright © 2025 Ajayaa EdTech Ltd. All rights reserved.</p>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link
                href="/privacy-policy"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300 hover:underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}