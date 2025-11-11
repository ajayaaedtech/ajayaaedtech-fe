"use client";

import React from "react";

export default function DetailOnlinePage({ course, onBack }) {
  if (!course) return null;

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-6xl mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="mb-6 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        ← Back to Courses
      </button>

      {/* Course Header */}
      <h2 className="text-3xl font-bold text-indigo-700 mb-2">{course.name}</h2>
      <p className="text-gray-600 mb-4">{course.overview}</p>
      <p className="text-sm text-gray-500 mb-8">Duration: {course.duration}</p>

      {/* Units & Chapters */}
      <div className="space-y-8">
        {course.units?.map((unit) => (
          <div key={unit.unitId}>
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">
              {unit.title}
            </h3>
            <div className="space-y-3">
              {unit.chapters.map((chapter) => (
                <div
                  key={chapter.chapterId}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-indigo-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{chapter.title}</h4>
                    <p className="text-sm text-gray-500">Duration: {chapter.duration}</p>
                  </div>

                  {chapter.isFree ? (
                    chapter.videoUrl ? (
                      <video
                        controls
                        src={chapter.videoUrl}
                        className="w-full sm:w-64 rounded-lg mt-3 sm:mt-0 border border-indigo-200"
                      />
                    ) : (
                      <span className="text-green-600 mt-3 sm:mt-0">Free Preview</span>
                    )
                  ) : (
                    <span className="text-gray-500 italic mt-3 sm:mt-0">Locked 🔒</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

   
    </div>
  );
}
