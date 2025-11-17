"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyCourses } from "../../redux/slice/courseSlice";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";

export default function Page() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { myCourses, loading, error } = useSelector((state) => state.courses);
  const [userName, setUserName] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user") || "{}");

    if (userData?.email) {
      dispatch(
        fetchMyCourses({
          type: "email",
          value: userData.email,
        })
      );
    }

    setUserName(userData?.name || "Student");

    window.addEventListener("user-updated", updateUser);
    return () => window.removeEventListener("user-updated", updateUser);
  }, [dispatch]);

  const updateUser = () => {
    const updated = JSON.parse(localStorage.getItem("user") || "{}");
    setUserName(updated.name);
  };

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setGreeting("Good Morning");
    else if (hour >= 12 && hour < 17) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  const handleCardClick = (course) => {
    if (!course.slug) {
      toast.warn("Slug missing for this course.");
      return;
    }
    router.push(`/dashboard/${course.slug}?id=${course.courseId}`);
  };

  const SkeletonLoader = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/50 shadow-lg animate-pulse"
        >
          <div className="h-6 bg-gray-200 rounded-full mb-4"></div>
          <div className="space-y-2 mb-4">
            <div className="h-4 bg-gray-200 rounded-full"></div>
            <div className="h-4 bg-gray-200 rounded-full w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded-full w-4/6"></div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="h-10 w-10 bg-gray-300 rounded-2xl"></div>
            <div className="h-8 bg-gray-200 rounded-full w-24"></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-8 font-sans">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="mb-12">
              <header className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                      {greeting},{" "}
                      <span className="text-blue-600">{userName}</span>
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base max-w-2xl">
                      Welcome back! Ready to continue your learning journey?
                    </p>
                  </div>

                  {/* Enrolled Count */}
                  <div className="mt-4 md:mt-0">
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                            <svg
                              className="w-5 h-5 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6.253v13M12 6.253C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13c1.168-.776 2.754-1.253 4.5-1.253s3.332.477 4.5 1.253c1.746-.776 3.332-1.253 4.5-1.253s3.332.477 4.5 1.253v-13C19.832 5.477 18.247 5 16.5 5s-3.332.477-4.5 1.253"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                              Enrolled Courses
                            </p>
                            <p className="text-2xl font-bold text-gray-900">
                              {myCourses.length}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
            </div>

            {/* Course Grid Title */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Your Learning Path
              </h2>
              <p className="text-gray-600 text-lg">
                Discover courses tailored for your growth and success
              </p>
            </div>

            {/* Display My Courses */}
            {loading ? (
              <SkeletonLoader />
            ) : error ? (
              <div className="text-center py-16 bg-red-50/80 rounded-3xl shadow-lg border border-red-200">
                <h3 className="text-2xl font-bold text-red-800 mb-3">
                  Failed to Load Courses
                </h3>
                <p className="text-red-600 max-w-md mx-auto text-lg">
                  {error}
                </p>
              </div>
            ) : myCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                {myCourses.map((course) => (
                  <div
                    key={course.courseId}
                    onClick={() => handleCardClick(course)}
                    className="group cursor-pointer bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden flex flex-col h-full"
                  >
                    {/* Hover Layer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                    {/* Icon */}
                    <div className="relative z-10 flex items-center justify-between mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                        <svg
                          className="w-7 h-7 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13"
                          />
                        </svg>
                      </div>
                      <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        Active
                      </div>
                    </div>

                    {/* Text */}
                    <div className="relative z-10 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                        {course.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                        {course.overview}
                      </p>

                      {/* Footer */}
                      <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="text-sm text-gray-500 flex items-center gap-2">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3"
                            />
                          </svg>
                          Self Paced
                        </div>

                        <div className="text-indigo-600 font-semibold flex items-center gap-1 group-hover:text-indigo-700">
                          Start  
                          <svg
                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white/80 rounded-3xl shadow-lg border border-white/50">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  No Enrolled Courses Found
                </h3>
                <p className="text-gray-600 text-lg">
                  Explore new learning paths and enroll to begin your journey!
                </p>
              </div>
            )}
          </div>
        </>
      )}

      <ToastContainer position="bottom-right" />
    </div>
  );
}
