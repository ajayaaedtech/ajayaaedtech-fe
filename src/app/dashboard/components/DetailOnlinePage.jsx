// src/app/dashboard/components/DetailOnlinePage.jsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import "plyr-react/plyr.css";

/**
 * Plyr is loaded only on the client to avoid server-side access to `document`.
 * This prevents "document is not defined" and avoids hydration mismatches caused
 * by trying to initialize a DOM-based player during SSR.
 */
const Plyr = dynamic(() => import("plyr-react"), { ssr: false });

export default function DetailOnlinePage({ course, onBack }) {
  // UI state
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null); // Object URL for blob
  const [loadingVideo, setLoadingVideo] = useState(false);
  const [showMobileContent, setShowMobileContent] = useState(false);
  const [userEmail, setUserEmail] = useState(null); // read from localStorage in effect

  const videoObjectUrlRef = useRef(null);

  // 1) Auto-select first chapter (deterministic on first render)
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

  // 2) Read localStorage only on client (to avoid SSR mismatch)
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = localStorage.getItem("userEmail") || localStorage.getItem("email");
      if (stored) setUserEmail(stored);
    } catch (e) {
      // ignore localStorage errors
    }
  }, []);

  // 3) Fetch video blob and create object URL (client-only)
  useEffect(() => {
    // cleanup previous object URL
    function revokePrevious() {
      if (videoObjectUrlRef.current) {
        URL.revokeObjectURL(videoObjectUrlRef.current);
        videoObjectUrlRef.current = null;
      }
    }

    if (!selectedChapter) {
      // if no chapter selected, ensure previous url revoked and cleared
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

        // Use environment variable for API base if provided; fallback to absolute local host if needed.
        const apiBase =
          (typeof window !== "undefined" && process.env.NEXT_PUBLIC_API_URL) ||
          "http://localhost:5001";

        const endpoint = `${apiBase}/api/video/stream/${selectedChapter.courseId}/${selectedChapter.unitId}/${selectedChapter.chapterId}`;

        const res = await fetch(endpoint, {
          method: "GET",
          headers: { "Cache-Control": "no-store" },
        });

        if (!res.ok) {
          // gracefully handle not found or server errors
          console.error("Video fetch failed", res.status, res.statusText);
          if (!cancelled) setVideoUrl(null);
          return;
        }

        const blob = await res.blob();
        if (cancelled) {
          // If user switched chapter, discard the blob
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
      // cleanup object URL when selectedChapter changes or component unmounts
      if (videoObjectUrlRef.current) {
        URL.revokeObjectURL(videoObjectUrlRef.current);
        videoObjectUrlRef.current = null;
      }
    };
  }, [selectedChapter]);

  // If course not provided, render nothing (server and client consistent)
  if (!course) return null;

  // Plyr options are constant and deterministic
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
    <div className="min-h-screen bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back */}
        <button
          onClick={onBack}
          className="flex cursor-pointer items-center gap-2 text-gray-600 hover:text-gray-900 mb-5 font-medium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Courses
        </button>

        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{course.name}</h1>
              <p className="text-gray-600 mt-2">{course.overview}</p>
              <p className="text-gray-500 text-sm mt-2">
                Duration: {course.duration} • Self Paced
              </p>
            </div>

            {/* subtle user email display (client-only state) */}
            <div className="hidden sm:flex items-center text-sm text-gray-500">
              {userEmail ? userEmail : <span className="italic">Guest</span>}
            </div>
          </div>
        </div>

        {/* Mobile Toggle for Course Content */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowMobileContent((s) => !s)}
            className="w-full bg-white shadow rounded-lg py-3 text-center font-medium text-gray-700"
            aria-expanded={showMobileContent}
          >
            {showMobileContent ? "Hide Course Content ▲" : "Show Course Content ▼"}
          </button>

          {showMobileContent && (
            <div className="bg-white rounded-lg shadow-sm p-4 mt-3 space-y-4">
              {course.units?.map((unit) => (
                <div key={unit.unitId}>
                  <p className="font-semibold text-gray-900 mb-2">{unit.title}</p>
                  <div className="space-y-2">
                    {unit.chapters.map((ch) => (
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
                        className={`p-3 rounded-lg cursor-pointer ${
                          selectedChapter?.chapterId === ch.chapterId ? "bg-blue-50 border border-blue-200" : "hover:bg-gray-50"
                        }`}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            setSelectedChapter({
                              ...ch,
                              courseId: course.courseId,
                              unitId: unit.unitId,
                            });
                            setShowMobileContent(false);
                          }
                        }}
                      >
                        <div className="flex justify-between">
                          <span className="text-gray-700 font-medium">{ch.title}</span>
                          <span className="text-gray-500 text-xs">{ch.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-4">
              <h3 className="font-semibold text-gray-900 mb-4">Course Content</h3>
              <div className="space-y-4">
                {course.units?.map((unit) => (
                  <div key={unit.unitId}>
                    <p className="font-medium text-gray-800 mb-2">{unit.title}</p>
                    <div className="space-y-1">
                      {unit.chapters.map((ch) => (
                        <div
                          key={ch.chapterId}
                          onClick={() =>
                            setSelectedChapter({
                              ...ch,
                              courseId: course.courseId,
                              unitId: unit.unitId,
                            })
                          }
                          className={`p-3 rounded-lg cursor-pointer ${
                            selectedChapter?.chapterId === ch.chapterId ? "bg-blue-50 border border-blue-200" : "hover:bg-gray-50"
                          }`}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              setSelectedChapter({
                                ...ch,
                                courseId: course.courseId,
                                unitId: unit.unitId,
                              });
                            }
                          }}
                        >
                          <div className="flex justify-between">
                            <span className="text-gray-700 font-medium">{ch.title}</span>
                            <span className="text-gray-500 text-xs">{ch.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Player Area */}
          <main className="col-span-1 lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="relative bg-black rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                {/* stable, deterministic markup while client effects run */}
                {loadingVideo && (
                  <div className="text-gray-300 text-sm animate-pulse">Fetching your video…</div>
                )}

                {/* Render Plyr only if it is available (dynamic import) and we have videoUrl */}
                {!loadingVideo && videoUrl && typeof window !== "undefined" && (
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

                {/* Friendly fallback if video not present */}
                {!loadingVideo && !videoUrl && (
                  <div className="text-gray-400 text-sm">Video not available</div>
                )}

                <div className="absolute top-2 right-4 text-white/70 text-xs font-semibold select-none">AJAYAA EDTECH</div>
              </div>

              {/* Chapter info */}
              {selectedChapter && (
                <div className="border-t mt-4 pt-4">
                  <h2 className="text-xl font-semibold text-gray-900">{selectedChapter.title}</h2>
                  <p className="text-gray-600 text-sm mt-1">Duration: {selectedChapter.duration}</p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
