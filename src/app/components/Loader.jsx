"use client";
import React from "react";

export default function Loader({
  title = "Loading Your Dashboard...",
  message = "Please wait, we’re preparing your courses.",
  
  icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-white animate-pulse"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6l3 3m-9 6h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v13a2 2 0 002 2z"
      />
    </svg>
  ),
}) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center 
      bg-white/10 backdrop-blur-md z-50">

      <div className="h-20 w-20 bg-gradient-to-r from-indigo-50 to-sky-500

        rounded-full flex items-center justify-center shadow-lg">
        {icon}
      </div>

      <h2 className="mt-10 text-2xl font-semibold text-gray-800 animate-pulse tracking-wide">
        {title}
      </h2>

      <p className="mt-3 text-gray-600 text-sm">
        {message}
      </p>
    </div>
  );
}
