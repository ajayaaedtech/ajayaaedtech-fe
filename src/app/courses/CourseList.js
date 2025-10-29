"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { courses } from "./data";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function CourseList() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="max-w-6xl mx-auto mt-10 bg-white shadow-xl rounded-2xl overflow-hidden">
      <h2 className="text-center text-3xl font-bold text-blue-600 py-6 border-b">
        Available Courses
      </h2>

      <div className="divide-y divide-gray-200">
        {courses.map((course, index) => (
          <div key={index} className="p-5">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">{course.name}</h3>

              <div className="flex gap-4 items-center">
                <button
                  onClick={() =>
                    setSelectedCourse(selectedCourse === index ? null : index)
                  }
                  className="text-blue-600 font-medium hover:underline"
                >
                  {selectedCourse === index ? "Hide Details" : "View Course"}
                </button>

                {selectedCourse === index ? (
                  <ChevronUp className="text-gray-500" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}
              </div>
            </div>

            <AnimatePresence>
              {selectedCourse === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-6 bg-gray-50 p-6 rounded-xl"
                >
                  <CourseDetails course={course} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

function CourseDetails({ course }) {
  return (
    <div className="text-gray-800 space-y-5 leading-relaxed">
      <section>
        <h4 className="text-xl font-semibold text-blue-700 mb-2">
          {course.name} Training Overview
        </h4>
        <p>{course.overview}</p>
      </section>

      <section>
        <h5 className="font-semibold text-lg mt-4">Objectives of the Course</h5>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {course.objectives.map((obj, i) => (
            <li key={i}>{obj}</li>
          ))}
        </ul>
      </section>

      <section>
        <h5 className="font-semibold text-lg mt-4">Who Can Attend</h5>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {course.whoCanAttend.map((attend, i) => (
            <li key={i}>{attend}</li>
          ))}
        </ul>
      </section>

      <section>
        <h5 className="font-semibold text-lg mt-4">Prerequisites</h5>
        <p className="text-gray-700">{course.prerequisites}</p>
      </section>

      <section>
        <h5 className="font-semibold text-lg mt-4">Course Duration</h5>
        <p>{course.duration}</p>
      </section>

      <section>
        <h5 className="font-semibold text-lg mt-4">Course Content</h5>
        {course.content.map((section, i) => (
          <div key={i} className="mt-2">
            <h6 className="font-medium text-gray-900">{section.title}</h6>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
              {section.topics.map((topic, j) => (
                <li key={j}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
