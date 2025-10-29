"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function CourseCard({ course }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      className={`relative bg-white shadow-md rounded-2xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-xl hover:scale-[1.01] ${
        expanded ? "z-20 scale-[1.02]" : "z-0"
      }`}
      style={{
        alignSelf: "start", // 👈 KEY: prevents grid row stretching
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-4 p-5 border-b border-gray-100">
        <div className="w-16 h-16 flex-shrink-0 relative">
          <Image
            src={course.logo}
            alt={course.name}
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {course.name}
          </h3>
          <p className="text-sm text-gray-500">{course.duration}</p>
        </div>
      </div>

      {/* Overview */}
      <div className="px-5 pt-3 pb-2 text-gray-700 text-sm leading-relaxed">
        {course.overview.length > 180 ? (
          <>
            {expanded
              ? course.overview
              : `${course.overview.slice(0, 180)}...`}
          </>
        ) : (
          course.overview
        )}
      </div>

      {/* Important Items */}
      <div className="px-5 pb-4">
        <h4 className="text-sm font-semibold text-gray-800 mb-1">
          Key Highlights:
        </h4>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
          {course.importantItems
            .slice(0, expanded ? undefined : 3)
            .map((item, i) => (
              <li key={i}>{item}</li>
            ))}
        </ul>
      </div>

      {/* Expanded Content */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="expanded-content"
            initial={{ maxHeight: 0, opacity: 0 }}
            animate={{ maxHeight: 1000, opacity: 1 }}
            exit={{ maxHeight: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden px-5 pb-5"
          >
            <div className="border-t border-gray-200 pt-4 space-y-4">
              {course.content.map((section, idx) => (
                <div key={idx}>
                  <h5 className="text-gray-800 font-semibold text-sm mb-1">
                    {section.title}
                  </h5>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-0.5">
                    {section.topics.map((topic, j) => (
                      <li key={j}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div className="border-t border-gray-100 p-4 flex justify-between items-center">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
        >
          {expanded ? (
            <>
              Read Less <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Read More <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>

        {course.featured && (
          <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>
    </motion.div>
  );
}
