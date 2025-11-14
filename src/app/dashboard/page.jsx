"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../redux/slice/courseSlice";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader"; // ✅ Custom Loader Component

export default function Page() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { courses, loading, error } = useSelector((state) => state.courses);
  console.log("statusofloading", loading)
  const [userName, setUserName] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    dispatch(fetchCourses());

    // Get user data from localStorage
    const userData = localStorage.getItem("user");
    // {console.log("sssssssss", userData)}
    const updateUser = () => {
      const updated = JSON.parse(localStorage.getItem("user") || "{}");
      setUserName(updated.name);
    };

    window.addEventListener("user-updated", updateUser);
    return () => window.removeEventListener("user-updated", updateUser);

    // if (userData) {
    //   try {
    //     const user = JSON.parse(userData);
    //     setUserName(user.name || "Student");
    //   } catch (err) {
    //     console.error("Error parsing user data:", err);
    //     setUserName("Student");
    //   }
    // }
  }, [dispatch]);

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
      {loading ? <><Loader /></> : <>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Section with Greeting */}

          <div className="mb-12">
            <header className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                    {greeting}, <span className="text-blue-600">{userName}</span>
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base max-w-2xl">
                    Welcome back! Ready to continue your learning journey?
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Enrolled Courses</p>
                          <p className="text-2xl font-bold text-gray-900">{courses.length}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>

          {/* Courses Section Title */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Learning Path</h2>
            <p className="text-gray-600 text-lg">Discover courses tailored for your growth and success</p>
          </div>

          {/* Course Grid / Loading State / Error State */}
          {loading ? (
            <SkeletonLoader />
          ) : error ? (
            <div className="text-center py-16 bg-red-50/80 backdrop-blur-sm rounded-3xl shadow-lg border border-red-200">
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.772-1.333-2.682-1.333-3.454 0L4.29 16c-.772 1.333.196 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-red-800 mb-3">Failed to Load Courses</h3>
              <p className="text-red-600 max-w-md mx-auto text-lg">
                {error} - Please try refreshing the page or check your connection.
              </p>
            </div>
          ) : courses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
              {courses.map((course) => (
                <div
                  key={course._id}
                  onClick={() => handleCardClick(course)}
                  className="group cursor-pointer bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden flex flex-col h-full"
                >
                  {/* Gradient Border Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                  {/* Course Icon & Status */}
                  <div className="relative z-10 flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                      Available
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="relative z-10 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-700 transition-colors duration-300 line-clamp-2">
                      {course.name}
                    </h3>

                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                      {course.overview}
                    </p>

                    {/* Action Footer */}
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100/50">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Self Paced</span>
                      </div>

                      <div className="flex items-center space-x-2 text-indigo-600 group-hover:text-indigo-700 font-semibold transition-colors duration-300">
                        <span>Start Learning</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Highlight Bar on Hover */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/50">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">No Courses Available</h3>
              <p className="text-gray-600 max-w-md mx-auto text-lg">
                We're preparing amazing learning content for you. Check back soon for new courses!
              </p>
            </div>
          )}
        </div>

      </>}
      <ToastContainer position="bottom-right" />
    </div>
  );
}