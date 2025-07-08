"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';

const HorizontalScrollingCards = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);
  const scrollSpeed = 1; // Adjust speed as needed

  const cards = [
    {
      title: "AI Can Be Your Homework Helper",
      description: "Personal Study Buddy with AI assistance",
      icon: "📚",
    },
    {
      title: "Create Stories, Videos & Art",
      description: "with AI — Fuel Your Imagination",
      icon: "🎨",
    },
    {
      title: "Prepare School Presentations",
      description: "Confidence Using AI Tools",
      icon: "📊",
    },
    {
      title: "Captivate Audience",
      description: "With AI-enhanced presentations",
      icon: "👏",
    }
  ];

  const animateScroll = useCallback(() => {
    if (!isHovered && scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollSpeed;

      if (scrollContainerRef.current.scrollLeft >= 
          scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth) {
        scrollContainerRef.current.scrollLeft = 0;
      }
    }
    animationRef.current = requestAnimationFrame(animateScroll);
  }, [isHovered]); // ← include any variables it uses from outer scope


 useEffect(() => {
    animationRef.current = requestAnimationFrame(animateScroll);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animateScroll]); // ← safe now

  return (
    <div className="py-8 px-4 bg-gray-50">
       <h2 className="text-2xl font-bold text-center mb-8">AI Learning Features</h2>
      
      <div 
        ref={scrollContainerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex overflow-x-auto hide-scrollbar py-4"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="flex space-x-4 px-4">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
                  {card.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Duplicate cards for infinite scroll effect */}
          {cards.map((card, index) => (
            <div 
              key={`duplicate-${index}`}
              className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
                  {card.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default HorizontalScrollingCards;