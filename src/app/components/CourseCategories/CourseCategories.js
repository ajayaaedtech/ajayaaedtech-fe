import Image from 'next/image';
import React from 'react';
import { FaChalkboardTeacher, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

export default function CourseCategories() {
   const categories = [
    {
      level: "Primary",
      classes: "Class 6 – 12",
      title: "School Students",
      topics: ["CBSE", "State Boards", "NCERT Foundation", "Olympiads"],
      icon: "https://i.ibb.co/YFzDjFKs/1.png" ,
      bg: "bg-blue-50",
    },
    {
      level: "Secondary",
      classes: "UG Students",
      title: "Undergraduates",
      topics: ["B.Tech", "B.Sc", "BCA", "Entrance Exams"],
      icon: "https://i.ibb.co/YFzDjFKs/1.png" ,
      bg: "bg-purple-50",
    },
    {
      level: "Tertiary",
      classes: "Graduates | Teachers",
      title: "Professional Learners",
      topics: ["Diploma Courses", "Skill Training", "ToT Model", "Job Prep"],
      icon: "https://i.ibb.co/YFzDjFKs/1.png" ,
      bg: "bg-green-50",
    },
  ];

  return (
    <div className="px-4 py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Explore courses 
          <span className="text-lg font-normal text-gray-600 ml-2">(Class 3 - 13)</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${category.bgColor} p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}
              style={{ minHeight: '500px' }}
            >
              {/* Content Section - Left Side */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="mb-6">
                  <p className={`text-sm font-semibold ${category.levelColor} mb-2`}>
                    {category.level}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Topics */}
                <div className="flex flex-col space-y-3 mb-8 flex-grow pr-20">
                  {category.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="relative">
                      <span className="inline-flex items-center bg-white text-orange-500 px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        {topic}
                        {topic === "Summer Camp" && category.hasNewBadge && (
                          <span className="ml-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                            NEW
                          </span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-xl w-full md:w-auto transition-colors duration-200 shadow-md hover:shadow-lg">
                    Explore Courses
                  </button>
                </div>
              </div>

              {/* Person Image - Right Side */}
              <div className="absolute top-0 right-0 bottom-0 w-40 md:w-48 lg:w-52 flex items-center justify-end">
                <div className="w-full h-full relative">
                  <Image
                  width={100}
                  height={100}
                    src={category.icon}
                    alt="Teacher"
                    className=" absolute right-0 top-1/2 transform -translate-y-1/2 w-full h-auto max-h-full object-contain"
                  />
                </div>
              </div>

              {/* Decorative Background Shape */}
              <div className="absolute top-0 right-0 w-3/5 h-full opacity-20">
                <div className="w-full h-full rounded-l-full bg-white"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Find the perfect course for your learning journey</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl">
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
}