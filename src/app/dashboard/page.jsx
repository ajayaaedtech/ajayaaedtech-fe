"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCourses,
  fetchCourseDetails,
  clearSelectedCourse,
} from "../../redux/slice/courseSlice";
import { ToastContainer, toast } from "react-toastify";
import DetailOnlinePage from "./components/DetailOnlinePage";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  const dispatch = useDispatch();
  const { courses, selectedCourse, loading, error } = useSelector(
    (state) => state.courses
  );
  console.log("selectedcourse", selectedCourse)

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  const handleCardClick = (course) => {
    console.log("button click", course)
    if (!course.courseId) {
      toast.warn("Course details not available for this item.");
      return;
    }
    dispatch(fetchCourseDetails(course?.courseId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl font-bold text-indigo-700 text-center mb-4">
          Ajayaa EdTech Dashboard
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Explore courses designed for innovators, dreamers, and achievers.
        </p>

        {/* Loader */}
        {loading && <p className="text-center text-gray-500">Loading data...</p>}

        {/* Course Grid or Detail Page */}
        {selectedCourse && selectedCourse.success ? (
          <DetailOnlinePage
            course={selectedCourse}
            onBack={() => dispatch(clearSelectedCourse())}
          />
        ) : (
          <>
            {/* Course Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {courses.map((course) => (
                <div
                  key={course._id}
                  onClick={() => handleCardClick(course)}
                  className="cursor-pointer bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border border-indigo-100 transition transform hover:-translate-y-1"
                >
                  <h2 className="text-xl font-semibold text-indigo-700 mb-2">
                    {course.name || "Unnamed Course"}
                  </h2>
                  <p className="text-gray-600 text-sm mb-3">
                    {course.overview ||
                      "Expand your knowledge with expert guidance."}
                  </p>
                  <p className="font-bold text-gray-800">
                    ₹{course.price?.toLocaleString() || 0}
                  </p>
                </div>
              ))}
            </div>

            {/* Mentor Section */}
            <div className="bg-gradient-to-r from-indigo-100 via-white to-indigo-100 py-12 rounded-3xl shadow-inner text-center">
              <h2 className="text-3xl font-bold text-indigo-700 mb-3">
                Learn from the best Data Science mentors and instructors
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Our mentors are industry experts guiding you through every step
                — from foundational theory to real-world projects. At Ajayaa
                EdTech, we don’t just teach, we nurture brilliance.
              </p>

              <div className="flex justify-center gap-4 mt-8">
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition-all font-semibold">
                  Explore More
                </button>
                <button className="bg-white border border-indigo-300 text-indigo-700 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-all font-semibold">
                  Meet Our Mentors
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <ToastContainer />
    </div>
  );
}
