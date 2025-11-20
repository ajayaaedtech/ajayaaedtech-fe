// src/app/dashboard/components/DetailOnlinePage.jsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import { BASE_API } from "../../Api";
import dynamic from "next/dynamic";
import "plyr-react/plyr.css";
import { Email } from "@mui/icons-material";
import { type } from "os";

const Plyr = dynamic(() => import("plyr-react"), { ssr: false });

export default function DetailOnlinePage({ course, onBack }) {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [loadingVideo, setLoadingVideo] = useState(false);
  const [showMobileContent, setShowMobileContent] = useState(false);
  const [userEmail, setUserEmail] = useState(null);

  const videoObjectUrlRef = useRef(null);

  useEffect(() => {
    if (!course) return;
    if (course.units?.length && course.units[0].chapters?.length) {
      const first = course.units[0].chapters[0];
      setSelectedChapter({
        ...first,
        courseId: course.courseId,
        unitId: course.units[0].unitId,
      });
    }
  }, [course]);

useEffect(() => {
  if (typeof window === "undefined") return;
  try {
    const stored = localStorage.getItem("user");
    console.log("user", stored);
    
    if (stored) {
      const userData = JSON.parse(stored); // Parse the JSON string
      console.log("user01", typeof userData);
      console.log("user02", userData.email);
      setUserEmail(userData.email);
    }
  } catch (e) {
    console.error("Error parsing user data:", e);
  }
}, []);

  useEffect(() => {
    function revokePrevious() {
      if (videoObjectUrlRef.current) {
        URL.revokeObjectURL(videoObjectUrlRef.current);
        videoObjectUrlRef.current = null;
      }
    }

    if (!selectedChapter) {
      revokePrevious();
      setVideoUrl(null);
      setLoadingVideo(false);
      return;
    }

    let cancelled = false;
    async function load() {
      try {
        setLoadingVideo(true);
        setVideoUrl(null);
        revokePrevious();

        const apiBase = typeof window !== "undefined" && BASE_API;

        const endpoint = `${apiBase}/video/stream/${selectedChapter.courseId}/${selectedChapter.unitId}/${selectedChapter.chapterId}`;

        const res = await fetch(endpoint, {
          method: "GET",
          headers: { "Cache-Control": "no-store" },
        });

        if (!res.ok) {
          console.error("Video fetch failed", res.status, res.statusText);
          if (!cancelled) setVideoUrl(null);
          return;
        }

        const blob = await res.blob();
        if (cancelled) {
          URL.revokeObjectURL(blob);
          return;
        }

        const objUrl = URL.createObjectURL(blob);
        videoObjectUrlRef.current = objUrl;
        if (!cancelled) setVideoUrl(objUrl);
      } catch (err) {
        console.error("Error loading video blob:", err);
        if (!cancelled) setVideoUrl(null);
      } finally {
        if (!cancelled) setLoadingVideo(false);
      }
    }

    load();

    return () => {
      cancelled = true;
      if (videoObjectUrlRef.current) {
        URL.revokeObjectURL(videoObjectUrlRef.current);
        videoObjectUrlRef.current = null;
      }
    };
  }, [selectedChapter]);

  if (!course) return null;

  const playerOptions = {
    controls: [
      "play",
      "rewind",
      "fast-forward",
      "progress",
      "current-time",
      "mute",
      "volume",
      "settings",
      "fullscreen",
    ],
    disableContextMenu: true,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 py-6">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="group hover:cursor-pointer flex items-center gap-2 text-slate-700 hover:text-slate-900 font-medium transition-all duration-300 px-4 py-2 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm hover:shadow border border-slate-200/60 hover:border-slate-300"
          >
            <svg
              className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Courses
          </button>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center text-sm text-slate-600 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm border border-slate-200/60">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
              {userEmail || <span className="italic">Guest User</span>}
            </div>
          </div>
        </div>

        {/* Course Header Card */}
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg p-6 border border-white/60 mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full -translate-y-12 translate-x-12"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-emerald-500/10 to-teal-600/10 rounded-full translate-y-10 -translate-x-10"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div className="flex-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-3 border border-blue-200/50">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {course.duration} • Self-paced
                </div>
                <h1 className="text-2xl xl:text-3xl font-bold text-slate-900 tracking-tight leading-tight bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  {course.name}
                </h1>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed max-w-4xl">
                  {course.overview}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowMobileContent((s) => !s)}
            className="w-full bg-white/90 backdrop-blur-sm rounded-xl shadow-md py-3 px-4 text-center text-slate-800 font-medium flex items-center justify-center gap-2 border border-slate-200/60 hover:border-slate-300 transition-all duration-300"
          >
            <svg 
              className={`w-4 h-4 transform transition-transform ${showMobileContent ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            {showMobileContent ? "Hide Content" : "Show Content"}
          </button>

          {showMobileContent && (
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-4 mt-3 space-y-4 border border-slate-200/60 max-h-96 overflow-y-auto">
              {course.units?.map((unit, unitIndex) => (
                <div key={unit.unitId} className="border-l border-blue-500/20 pl-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {unitIndex + 1}
                    </div>
                    <p className="font-semibold text-slate-900 text-sm">{unit.title}</p>
                  </div>
                  <div className="space-y-2">
                    {unit.chapters.map((ch, chapterIndex) => (
                      <div
                        key={ch.chapterId}
                        onClick={() => {
                          setSelectedChapter({
                            ...ch,
                            courseId: course.courseId,
                            unitId: unit.unitId,
                          });
                          setShowMobileContent(false);
                        }}
                        className={`p-3 rounded-lg cursor-pointer border transition-all duration-200 group ${
                          selectedChapter?.chapterId === ch.chapterId
                            ? "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-300 shadow-sm"
                            : "bg-white/50 border-slate-200 hover:border-blue-200 hover:shadow-sm"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium transition-all ${
                              selectedChapter?.chapterId === ch.chapterId
                                ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white"
                                : "bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600"
                            }`}>
                              {chapterIndex + 1}
                            </div>
                            <span className={`text-sm ${
                              selectedChapter?.chapterId === ch.chapterId
                                ? "text-blue-900 font-medium"
                                : "text-slate-700 group-hover:text-slate-900"
                            }`}>
                              {ch.title}
                            </span>
                          </div>
                          <span className="text-slate-500 text-xs bg-slate-100/80 px-1.5 py-0.5 rounded">
                            {ch.duration}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="hidden lg:block col-span-1">
            <div className="bg-white/90 backdrop-blur-xl rounded-xl shadow-lg border border-white/60 p-4 sticky top-6 h-fit">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200/60">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 text-base">
                  Course Content
                </h3>
              </div>

              <div className="space-y-4 max-h-[calc(100vh-180px)] overflow-y-auto custom-scrollbar pr-2">
                {course.units?.map((unit, unitIndex) => (
                  <div key={unit.unitId} className="border-l border-blue-400/20 pl-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {unitIndex + 1}
                      </div>
                      <p className="font-semibold text-slate-900 text-sm uppercase tracking-wide">
                        {unit.title}
                      </p>
                    </div>
                    <div className="space-y-1.5">
                      {unit.chapters.map((ch, chapterIndex) => (
                        <div
                          key={ch.chapterId}
                          onClick={() =>
                            setSelectedChapter({
                              ...ch,
                              courseId: course.courseId,
                              unitId: unit.unitId,
                            })
                          }
                          className={`p-2.5 rounded-lg cursor-pointer border transition-all duration-200 group ${
                            selectedChapter?.chapterId === ch.chapterId
                              ? "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-300 shadow-sm"
                              : "bg-white/50 border-slate-200 hover:border-blue-200 hover:shadow-sm"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className={`w-4 h-4 rounded-full flex items-center justify-center text-xs font-medium transition-all ${
                                selectedChapter?.chapterId === ch.chapterId
                                  ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white"
                                  : "bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600"
                              }`}>
                                {chapterIndex + 1}
                              </div>
                              <span className={`text-xs ${
                                selectedChapter?.chapterId === ch.chapterId
                                  ? "text-blue-900 font-medium"
                                  : "text-slate-700 group-hover:text-slate-900"
                              }`}>
                                {ch.title}
                              </span>
                            </div>
                            <span className="text-slate-500 text-xs bg-slate-100/80 px-1.5 py-0.5 rounded">
                              {ch.duration}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Player Section */}
          <main className="col-span-1 lg:col-span-3">
            <div className="bg-white/90 backdrop-blur-xl rounded-xl shadow-lg p-4 border border-white/60">
              {/* Video Player Container */}
              <div className="relative bg-slate-900 rounded-lg overflow-hidden aspect-video flex items-center justify-center shadow-lg">
                {loadingVideo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900/95">
                    <div className="text-center">
                      <div className="w-12 h-12 border-3 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-3"></div>
                      <div className="text-slate-300 text-sm font-medium">Loading video...</div>
                    </div>
                  </div>
                )}

                {!loadingVideo &&
                  videoUrl &&
                  typeof window !== "undefined" && (
                    <div className="w-full h-full">
                      <Plyr
                        source={{
                          type: "video",
                          sources: [{ src: videoUrl, type: "video/mp4" }],
                        }}
                        options={playerOptions}
                      />
                    </div>
                  )}

                {!loadingVideo && !videoUrl && (
                  <div className="text-center text-slate-400 p-6">
                    <svg className="w-12 h-12 mx-auto mb-3 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <div className="text-slate-300 text-sm font-medium mb-1">Video not available</div>
                    <div className="text-slate-500 text-xs">Select another chapter</div>
                  </div>
                )}

                <div className="absolute top-3 right-3 text-white/60 text-xs font-medium bg-black/30 px-2 py-1 rounded backdrop-blur-sm">
                  AJAYAA EDTECH
                </div>
              </div>

              {/* Chapter Info */}
              {selectedChapter && (
                <div className="border-t border-slate-200/60 mt-4 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
                    <h2 className="text-lg font-semibold text-slate-900">
                      {selectedChapter.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <div className="flex items-center gap-1.5 bg-slate-100/80 px-2 py-1 rounded text-xs">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">Duration: {selectedChapter.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-blue-100/80 px-2 py-1 rounded text-blue-700 text-xs">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">Playing</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
}