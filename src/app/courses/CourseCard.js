"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export default function CourseCard({ course }) {
  return (
    <Link href={`/courses/${course.slug}`} className="no-underline">
      <motion.div
        whileHover={{ scale: 1.03, y: -4 }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        className="group relative bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-500 p-6 flex flex-col text-gray-800 cursor-pointer"
      >
        {/* Featured Badge */}
        {course.featured && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-[11px] font-bold px-3 py-[4px] rounded-full shadow-md tracking-wide">
              🌟 Featured
            </span>
          </div>
        )}

        {/* Centered Circular Image */}
        <div className="flex justify-center mb-5 mt-2">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gray-100 flex items-center justify-center shadow-inner border border-gray-200 overflow-hidden">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28">
              <Image
                src={course.logo || "/placeholder-course.jpg"}
                alt={course.name}
                fill
                className="object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        </div>

        {/* Course Name */}
        <h3 className="text-lg sm:text-xl font-semibold text-center text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
          {course.name}
        </h3>

        {/* Duration */}
        <div className="flex justify-center items-center gap-1 text-sm text-blue-600 font-medium mb-3">
          <Clock className="w-4 h-4 text-blue-500" />
          {course.duration}
        </div>

        {/* Overview */}
        <p className="text-gray-600 text-sm leading-relaxed text-center mb-4 line-clamp-3">
          {course.overview}
        </p>

        {/* Highlights */}
        {course.importantItems?.length > 0 && (
          <div className="bg-gray-50 rounded-xl border border-gray-100 px-4 py-3 mb-6">
            <h4 className="text-[13px] font-semibold text-gray-900 mb-2 text-center">
              ✨ Key Highlights
            </h4>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 text-left">
              {course.importantItems.slice(0, 4).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Button / Footer */}
        <div className="mt-auto flex justify-center">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md group-hover:from-indigo-600 group-hover:to-blue-700 transition-all duration-300">
            View Full Course →
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
