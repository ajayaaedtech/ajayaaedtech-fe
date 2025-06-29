"use client";
import React, { useState } from 'react';
import { ChevronRight, GraduationCap, Apple, Clock } from 'lucide-react';
import Image from 'next/image';

const
  TeacherShowcase = () => {
    const [imageErrors, setImageErrors] = useState({});

    const teachers = [
      {
        name: "Shreyas",
        subject: "Physics master teacher",
        location: "NIT Nagpur",
        experience: "11+ years exp",
        image: "https://i.ibb.co/bMzCVtQY/3.png" // Replace with actual image path
      },
      {
        name: "Nidhi Sharma",
        subject: "Chemistry master teacher",
        location: "Jamia Hamdard",
        experience: "4+ years exp",
        image: "https://i.ibb.co/j9JXSCj3/Chat-GPT-Image-Jun-25-2025-12-47-40-AM.png" // Replace with actual image path
      },
      {
        name: "Luv Mehan",
        subject: "Chemistry Master Teacher",
        location: "IISc Bangalore",
        experience: "12+ years exp",
        image: "https://i.ibb.co/YFzDjFKs/1.png" // Replace with actual image path
      },
      {
        name: "Rachita Sachde...",
        subject: "Chemistry master teacher",
        location: "IIS University",
        experience: "5+ years exp",
        image: "https://i.ibb.co/YFzDjFKs/1.png" // Replace with actual image path
      }
    ];

    const handleImageError = (index) => {
      setImageErrors(prev => ({ ...prev, [index]: true }));
    };

    return (
      <div className="bg-white min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#004EA5' }}>
              Teaching is common But
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              <span style={{ color: '#004EA5' }}>Greatest </span>
              <span
                className="relative inline-block"
                style={{ color: '#01319E' }}
              >
                teacher&#39;s

                {/* Desktop Underline - Wavy/Brush Effect */}
                <div className=" block absolute -bottom-2 left-0 w-full">
                  <svg
                    viewBox="0 0 200 20"
                    className="w-full h-4"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M5,15 Q50,5 100,12 T195,8"
                      stroke="#FFEB3B"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8,18 Q55,8 105,15 T192,11"
                      stroke="#FFC107"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      opacity="0.7"
                    />
                  </svg>
                </div>
                {/* Mobile Underline - Simple Gradient */}

              </span>
              <span style={{ color: '#004EA5' }}> inspire</span>
            </h2>
          </div>

          {/* Feature Points */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 ">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 rounded-xl shadow-sm" style={{ backgroundColor: '#E3F2FD' }}>
                <GraduationCap size={28} style={{ color: '#004EA5' }} />
              </div>
              <div>
                <p className="text-base md:text-lg font-medium leading-relaxed" style={{ color: '#01319E' }}>
                  Our dedicated teachers from top institutions have years of experience guiding learners of every age — from curious kids to lifelong learners.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 rounded-xl shadow-sm" style={{ backgroundColor: '#FFF3E0' }}>
                <Apple size={28} style={{ color: '#FF9800' }} />
              </div>
              <div>
                <p className="text-base md:text-lg font-medium leading-relaxed" style={{ color: '#01319E' }}>
                  Specially-trained teachers to bring out the best in every student.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 rounded-xl shadow-sm" style={{ backgroundColor: '#E8F5E8' }}>
                <Clock size={28} style={{ color: '#4CAF50' }} />
              </div>
              <div>
                <p className="text-base md:text-lg font-medium leading-relaxed" style={{ color: '#01319E' }}>
                  Experienced faculty from premier institutions, skilled in teaching students of all age groups.
                </p>
              </div>
            </div>
          </div>

          {/* Teachers Grid */}
          <div className="relative ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {teachers.map((teacher, index) => (
                <div key={index} className="relative group bg-gray-700 rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  {/* Teacher Image */}
                  <div className="relative mb-4  overflow-hidden rounded-2xl md:rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-300 h-120 md:h-80">
                    {!imageErrors[index] ? (
                      <Image
                        fill
                        src={teacher?.image}
                        alt={teacher.name}
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        onError={() => handleImageError(index)}
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center text-white font-semibold text-lg transition-all duration-300 group-hover:brightness-110 "
                        style={{ backgroundColor: '#5598B5' }}
                      >
                        <div className="text-center">
                          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                            <GraduationCap size={32} className="text-white" />
                          </div>
                          <span className="text-sm md:text-base">{teacher.name}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Teacher Info Card */}
                  <div
                    className="p-4 md:p-6 rounded-xl md:rounded-2xl text-white shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 "
                    style={{ backgroundColor: '#01319E' }}
                  >
                    <h3 className="text-lg md:text-xl font-bold mb-2 truncate">{teacher.name}</h3>
                    <p className="text-sm md:text-base mb-1 opacity-90 leading-relaxed">{teacher.subject}</p>
                    <p className="text-sm md:text-base opacity-90">{teacher.location}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrow - Hidden on mobile */}
            <button
              className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 p-3 md:p-4 rounded-full text-white hover:opacity-80 hover:scale-110 transition-all duration-300 shadow-lg"
              style={{ backgroundColor: '#004EA5' }}
              aria-label="View more teachers"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    );
  };

export default TeacherShowcase;