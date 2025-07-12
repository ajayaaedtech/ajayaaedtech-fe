"use client";
import React, { useState } from "react";
import { FaChalkboardTeacher, FaGraduationCap, FaLaptopCode, FaArrowRight, FaUsers, FaClock, FaTrophy } from "react-icons/fa";

export default function ProjectOverview() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    {
      title: "Grade (6–9)",
      subtitle: "Foundation Building",
      description: "Basics of Programming, Coding, Scratch, Python Essentials etc.",
      icon: <FaLaptopCode className="text-2xl" />,
      gradient: "from-blue-500 to-cyan-400",
      bg: "bg-gradient-to-br from-blue-50 to-cyan-50",
      border: "border-blue-200",
      participants: "500+",
      duration: "3 months",
      level: "Beginner"
    },
    {
      title: "Senior School (11–12)",
      subtitle: "Advanced Concepts",
      description: "Python, Logic Design, Data Structures, Intro to AI",
      icon: <FaGraduationCap className="text-2xl" />,
      gradient: "from-purple-500 to-pink-400",
      bg: "bg-gradient-to-br from-purple-50 to-pink-50",
      border: "border-purple-200",
      participants: "300+",
      duration: "4 months",
      level: "Intermediate"
    },
    {
      title: "College (B.Tech & Above)",
      subtitle: "Professional Development",
      description: "Python Advanced, DevOps Tools, ML, NLP, AI for real-world apps",
      icon: <FaLaptopCode className="text-2xl" />,
      gradient: "from-green-500 to-emerald-400",
      bg: "bg-gradient-to-br from-green-50 to-emerald-50",
      border: "border-green-200",
      participants: "200+",
      duration: "6 months",
      level: "Advanced"
    },
    {
      title: "Teacher Training (ToT)",
      subtitle: "Educator Excellence",
      description: "Pedagogy, Curriculum Implementation, AI in Education",
      icon: <FaChalkboardTeacher className="text-2xl" />,
      gradient: "from-orange-500 to-red-400",
      bg: "bg-gradient-to-br from-orange-50 to-red-50",
      border: "border-orange-200",
      participants: "150+",
      duration: "2 months",
      level: "Expert"
    },
  ];

  const stats = [
    { label: "Total Participants", value: "1150+", icon: <FaUsers /> },
    { label: "Programs Completed", value: "24", icon: <FaTrophy /> },
    { label: "Success Rate", value: "94%", icon: <FaGraduationCap /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <FaLaptopCode className="text-white text-2xl" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
            Project Overview
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering minds through comprehensive educational programs designed for every learning stage
          </p>
        </div>


        {/* Main Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`group relative ${cat.bg} rounded-3xl p-8 shadow-lg border-2 ${cat.border} hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden`}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-current"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 rounded-full bg-current"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${cat.gradient} text-white shadow-lg transform transition-transform duration-300 ${hoveredCard === idx ? 'scale-110 rotate-3' : ''}`}>
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{cat.title}</h3>
                      <p className="text-sm font-medium text-gray-600">{cat.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className={`transform transition-all duration-300 ${hoveredCard === idx ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'}`}>
                    <FaArrowRight className="text-gray-400" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-6 text-base">
                  {cat.description}
                </p>

                {/* Stats Bar */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Participants</div>
                    <div className="font-semibold text-gray-900">{cat.participants}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Duration</div>
                    <div className="font-semibold text-gray-900">{cat.duration}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Level</div>
                    <div className="font-semibold text-gray-900">{cat.level}</div>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="mt-6 pt-6 border-t border-gray-200/50">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Program Status</span>
                    <span className="text-green-600 font-medium">● Active</span>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${cat.gradient} opacity-0 transition-opacity duration-300 ${hoveredCard === idx ? 'opacity-5' : ''}`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of learners who have transformed their careers through our comprehensive programs
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Explore Programs
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}