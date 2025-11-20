import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import "plyr-react/plyr.css";
import { BASE_API } from "../../Api";

const Plyr = dynamic(() => import("plyr-react"), { ssr: false });

// Mock BASE_API for demo
// const BASE_API = "https://api.example.com";

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
      const stored =
        localStorage.getItem("userEmail") || localStorage.getItem("email");
      if (stored) setUserEmail(stored);
    } catch (e) {}
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Header with Back Button */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-white/5 backdrop-blur-sm"
          >
            <svg
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
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
            <span>Back to Courses</span>
          </button>

          {userEmail && (
            <div className="hidden sm:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm text-white">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">{userEmail}</span>
            </div>
          )}
        </div>

        {/* Course Header Card */}
        <div className="relative overflow-hidden rounded-3xl mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          
          <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-xs font-semibold mb-4">
                  ONLINE COURSE
                </div>
                <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
                  {course.name}
                </h1>
                <p className="text-slate-300 text-base lg:text-lg leading-relaxed max-w-3xl">
                  {course.overview}
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-6">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="font-medium">Self-paced learning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Content Toggle */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setShowMobileContent((s) => !s)}
            className="w-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 rounded-2xl py-4 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span>{showMobileContent ? "Hide Course Content" : "Show Course Content"}</span>
            <svg 
              className={`w-5 h-5 transform transition-transform duration-300 ${showMobileContent ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showMobileContent && (
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mt-4 space-y-5 animate-in fade-in slide-in-from-top-4 duration-300">
              {course.units?.map((unit, unitIndex) => (
                <div key={unit.unitId}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-500/20 border border-blue-400/30 rounded-lg text-blue-300 font-bold text-sm">
                      {unitIndex + 1}
                    </div>
                    <h3 className="font-bold text-white text-base tracking-wide">
                      {unit.title}
                    </h3>
                  </div>
                  <div className="space-y-2 pl-11">
                    {unit.chapters.map((ch, chIndex) => (
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
                        className={`group p-4 rounded-xl cursor-pointer border transition-all duration-300 ${
                          selectedChapter?.chapterId === ch.chapterId
                            ? "bg-blue-500/20 border-blue-400/40 shadow-lg shadow-blue-500/20"
                            : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-semibold text-slate-400">
                                {unitIndex + 1}.{chIndex + 1}
                              </span>
                              <span className={`text-sm font-semibold ${
                                selectedChapter?.chapterId === ch.chapterId
                                  ? "text-white"
                                  : "text-slate-200 group-hover:text-white"
                              }`}>
                                {ch.title}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-slate-400">
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{ch.duration}</span>
                            </div>
                          </div>
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block col-span-1">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sticky top-6 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
              <h3 className="font-bold text-xl text-white mb-6 tracking-wide flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Course Content
              </h3>

              <div className="space-y-6">
                {course.units?.map((unit, unitIndex) => (
                  <div key={unit.unitId}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white font-bold text-sm shadow-lg shadow-blue-500/20">
                        {unitIndex + 1}
                      </div>
                      <h4 className="font-bold text-white text-sm tracking-wide uppercase">
                        {unit.title}
                      </h4>
                    </div>
                    <div className="space-y-2 pl-11">
                      {unit.chapters.map((ch, chIndex) => (
                        <div
                          key={ch.chapterId}
                          onClick={() =>
                            setSelectedChapter({
                              ...ch,
                              courseId: course.courseId,
                              unitId: unit.unitId,
                            })
                          }
                          className={`group p-4 rounded-xl cursor-pointer border transition-all duration-300 ${
                            selectedChapter?.chapterId === ch.chapterId
                              ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-400/40 shadow-lg shadow-blue-500/20"
                              : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-lg"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-semibold text-slate-400">
                                  {unitIndex + 1}.{chIndex + 1}
                                </span>
                                <span className={`text-sm font-medium truncate ${
                                  selectedChapter?.chapterId === ch.chapterId
                                    ? "text-white"
                                    : "text-slate-200 group-hover:text-white"
                                }`}>
                                  {ch.title}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-slate-400">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{ch.duration}</span>
                              </div>
                            </div>
                            {selectedChapter?.chapterId === ch.chapterId && (
                              <div className="flex-shrink-0">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Video Player */}
          <main className="col-span-1 lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl overflow-hidden aspect-video flex items-center justify-center shadow-inner">
                {loadingVideo && (
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm font-medium animate-pulse">
                      Preparing your session...
                    </p>
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
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-slate-400 text-sm font-medium">
                      Video not available
                    </p>
                  </div>
                )}

                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="text-white/90 text-xs font-bold tracking-wider">
                    AJAYAA EDTECH
                  </span>
                </div>
              </div>

              {selectedChapter && (
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
                        {selectedChapter.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-4 mt-3">
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-medium">{selectedChapter.duration}</span>
                        </div>
                      </div>
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
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}