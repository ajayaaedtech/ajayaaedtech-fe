"use client";
import { useState } from "react";
import { courses } from "./data";
import CourseCard from "./CourseCard";

export default function CoursesPage() {
  const [expandedCourse, setExpandedCourse] = useState(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 py-12 px-6">
        <header className="mb-12 text-center">
          <div className="relative">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-800 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-4">
              Tech Education Curriculum
            </h1>
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology courses designed for different educational levels and teacher training programs
          </p>
        </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {courses.map((course) => (
          <CourseCard
            key={course.slug}
            course={course}
            expandedCourse={expandedCourse}
            setExpandedCourse={setExpandedCourse}
          />
        ))}
      </div>
    </main>
  );
}
