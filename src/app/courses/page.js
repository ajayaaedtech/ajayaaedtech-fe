"use client";
import { useState } from "react";
import { courses } from "./data/courses";
import CourseCard from "./CourseCard";

export default function CoursesPage() {
  const [expandedCourse, setExpandedCourse] = useState(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 py-12 px-6">
      <h1 className="text-center text-4xl font-extrabold text-gray-800 mb-12">
        Our Training Courses
      </h1>

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
