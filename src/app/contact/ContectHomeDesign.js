"use client";
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function ContectHomeDesign() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 lg:p-6 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">

        {/* Left Side - Content */}
        <div className="space-y-8 text-white order-2 lg:order-1">
          <div className="space-y-6">
            <div className="relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent leading-tight animate-fade-in">
                Tech Vision India
              </h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-cyan-300/20 blur-xl -z-10 opacity-75"></div>
            </div>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-200 animate-fade-in-delay-1">
              Training the Future
            </h2>
          </div>

          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-full shadow-lg shadow-blue-400/50 animate-fade-in-delay-2"></div>

          <div className="space-y-4 animate-fade-in-delay-3">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed">
              A Nationwide Initiative to Upskill Students from{' '}
              <span className="text-blue-300 font-semibold bg-blue-500/10 px-2 py-1 rounded-lg">6th Grade</span>{' '}
              to{' '}
              <span className="text-cyan-300 font-semibold bg-cyan-500/10 px-2 py-1 rounded-lg">Engineering and above Level</span>{' '}
              in{' '}
              <span className="text-blue-200 font-semibold bg-blue-400/10 px-2 py-1 rounded-lg">Emerging Technologies</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-6 animate-fade-in-delay-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 active:scale-95">
              <Link href="/" >
                <span className="flex items-center gap-2">
                  Get Started
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>

              </Link>
            </button>


          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-3 pt-4 animate-fade-in-delay-5">
            {['AI/ML', 'Web Dev', 'Data Science', 'Coading Fundamentals'].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-full text-sm font-medium text-blue-200 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side - Enhanced Image Section */}
        <div className="relative flex items-center justify-center order-1 lg:order-2">
          <div className="relative w-full max-w-lg">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-indigo-500/20 rounded-3xl blur-2xl animate-pulse"></div>
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/10 via-cyan-400/10 to-indigo-400/10 rounded-3xl blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            {/* Main image container */}
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-2 border border-blue-500/20 shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                {/* <img 
                  src="./bt.png" 
                  alt="Tech Vision India - Classroom Training Session"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                /> */}
                <Image
                  src="/bt.png"
                  alt="Tech Vision India - Classroom Training Session"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Image overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Floating info badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                  <p className="text-sm font-semibold text-slate-700"> Training Session</p>
                  <p className="text-xs text-slate-500">Interactive Learning</p>
                </div>
              </div>
            </div>

            {/* Floating particles with improved animations */}
            <div className="absolute top-8 right-8 w-4 h-4 bg-blue-400 rounded-full animate-bounce shadow-lg shadow-blue-400/50" style={{ animationDelay: '0s' }}></div>
            <div className="absolute bottom-16 left-8 w-3 h-3 bg-cyan-400 rounded-full animate-bounce shadow-lg shadow-cyan-400/50" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-24 left-12 w-2 h-2 bg-indigo-400 rounded-full animate-bounce shadow-lg shadow-indigo-400/50" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-32 right-16 w-5 h-5 bg-blue-300 rounded-full animate-ping opacity-75"></div>
            <div className="absolute bottom-32 right-8 w-3 h-3 bg-cyan-300 rounded-full animate-ping opacity-75" style={{ animationDelay: '1.5s' }}></div>

            {/* Orbital rings */}
            <div className="absolute inset-0 border-2 border-blue-400/20 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-8 border border-cyan-400/20 rounded-full animate-spin-reverse-slow"></div>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse-slow {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-fade-in-delay-1 {
          opacity: 0;
          animation: fade-in 0.8s ease-out 0.2s forwards;
        }
        
        .animate-fade-in-delay-2 {
          opacity: 0;
          animation: fade-in 0.8s ease-out 0.4s forwards;
        }
        
        .animate-fade-in-delay-3 {
          opacity: 0;
          animation: fade-in 0.8s ease-out 0.6s forwards;
        }
        
        .animate-fade-in-delay-4 {
          opacity: 0;
          animation: fade-in 0.8s ease-out 0.8s forwards;
        }
        
        .animate-fade-in-delay-5 {
          opacity: 0;
          animation: fade-in 0.8s ease-out 1s forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 15s linear infinite;
        }
      `}</style>
    </div>
  );
}