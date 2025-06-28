"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import AboutCompany from '../aboutcontent/AboutCompany';
import { CheckCircleIcon } from 'lucide-react';

const OfferingsCommComponent = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeObjective, setActiveObjective] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    if (!isAutoScrolling) return;
    const timer = setInterval(() => {
      setActiveObjective((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoScrolling]);

  const handleObjectiveClick = (index) => {
    setActiveObjective(index);
    setIsAutoScrolling(false);
  };

  const offerings = [
    {
      title: "Flexible Learning Models",
      description: "Online & Hybrid delivery model via LMS and local partner institutions with seamless integration and real-time collaboration tools.",
      icon: "📚",
      bgGradient: "from-[#004EA5] to-[#01319E]"
    },
    {
      title: "Tailored Curriculum",
      description: "Modules customized per age group and proficiency level with adaptive learning pathways and personalized assessments.",
      icon: "🎯",
      bgGradient: "from-[#01319E] to-[#5598B5]"
    },
    {
      title: "Certification Pathways",
      description: "Tiered certification (Beginner, Intermediate, Advanced) with industry recognition and blockchain-verified credentials.",
      icon: "🏆",
      bgGradient: "from-[#5598B5] to-[#004EA5]"
    }
  ];

  const objectives = [
    {
      number: 1,
      title: "Early Tech Exposure",
      text: "Empower high school students with real-world technologies like coding, robotics, AI, and data science in an engaging, practical format that bridges classroom learning with industry applications.",
      icon: "🚀",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      number: 2,
      title: "Community Building",
      text: "Create a network of passionate learners, creators, and change-makers who contribute to the digital economy through collaborative projects and peer-to-peer learning.",
      icon: "🌐",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      number: 3,
      title: "Future-Ready Skills",
      text: "Equip learners for evolving job markets with innovation, critical thinking, and problem-solving capabilities that go beyond traditional curriculum boundaries.",
      icon: "🔮",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      number: 4,
      title: "Industry Alignment",
      text: "Bridge the industry-academia gap with hands-on training in software development, cloud computing, cybersecurity, and emerging technologies through industry partnerships.",
      icon: "⚙️",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];
  const advantages = [
    "Online + Hybrid Training Sessions",
    "Access via mobile app and web platform",
    "Recorded sessions for revision and flexible learning",
    "Certification on course completion"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-slate-100 relative overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#004EA5] opacity-5 rounded-full filter blur-3xl transform translate-x-64 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#5598B5] opacity-8 rounded-full filter blur-3xl transform -translate-x-96 translate-y-96"></div>
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#01319E] opacity-6 rounded-full filter blur-2xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            <div className="w-2 h-2 bg-[#004EA5] rounded-full opacity-20"></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24 relative z-10">
        {/* Header Section */}

        <div className="text-center mb-20 lg:mb-28">
          <div className="inline-block mb-6">
            <span className="px-8 py-3 bg-gradient-to-r from-[#004EA5] to-[#01319E] text-white rounded-full text-sm font-bold tracking-wider uppercase shadow-lg">
              Excellence in Education
            </span>
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004EA5] to-[#5598B5]">Offerings</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Comprehensive technology education designed to prepare students for the digital future with cutting-edge curriculum and industry partnerships
          </p>
        </div>

        {/* Offerings Cards - Desktop Optimized 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-24 lg:mb-32">
          {offerings.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              <div className={`relative overflow-hidden rounded-3xl p-8 lg:p-10 bg-white shadow-xl border border-gray-100 transition-all duration-700 transform ${hoveredCard === index
                ? 'scale-105 shadow-2xl border-[#5598B5]/30'
                : 'hover:scale-102 hover:shadow-xl'
                }`}>

                {/* Gradient Background Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 transition-opacity duration-700 ${hoveredCard === index ? 'opacity-5' : ''
                  }`}></div>

                {/* Large Background Icon */}
                <div className={`absolute -right-6 -top-6 text-8xl lg:text-9xl opacity-5 transition-all duration-700 ${hoveredCard === index ? 'opacity-10 scale-110 rotate-12' : ''
                  }`}>
                  {item.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${item.bgGradient} flex items-center justify-center text-3xl lg:text-4xl mb-6 lg:mb-8 shadow-lg transition-all duration-500 ${hoveredCard === index ? 'shadow-xl scale-110' : ''
                    }`}>
                    {item.icon}
                  </div>
                  <h3 className={`text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 transition-colors duration-300 ${hoveredCard === index ? 'text-[#004EA5]' : 'text-gray-800'
                    }`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-[#004EA5]/10 to-[#5598B5]/10 opacity-0 transition-opacity duration-700 ${hoveredCard === index ? 'opacity-100' : ''
                  }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Objectives Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-block mb-6">
            <span className="px-8 py-3 bg-gradient-to-r from-[#01319E] to-[#5598B5] text-white rounded-full text-sm font-bold tracking-wider uppercase shadow-lg">
              Strategic Vision
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004EA5] to-[#5598B5]">Objectives</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Clear goals that drive our educational approach and ensure exceptional student outcomes in the digital age
          </p>
        </div>

        {/* Objectives - Desktop-Optimized Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Navigation Cards */}
          <div className="space-y-6">
            {objectives.map((item, index) => (
              <div
                key={index}
                onClick={() => handleObjectiveClick(index)}
                className={`group p-6 lg:p-8 rounded-2xl cursor-pointer transition-all duration-500 border ${activeObjective === index
                  ? 'bg-gradient-to-r from-[#004EA5] to-[#01319E] text-white shadow-2xl scale-105 border-[#004EA5]'
                  : 'bg-white hover:bg-gray-50 shadow-lg text-gray-400 hover:shadow-xl border-gray-200 hover:border-[#5598B5]/30'
                  }`}
              >
                <div className="flex items-center space-x-6">
                  <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center text-xl lg:text-2xl font-bold shadow-lg transition-all duration-300 ${activeObjective === index
                    ? 'bg-white text-[#004EA5] scale-110'
                    : 'bg-gradient-to-br from-[#004EA5] to-[#01319E] text-white'
                    }`}>
                    {item.number}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl lg:text-2xl font-bold mb-2 transition-colors duration-300`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm lg:text-base opacity-80 line-clamp-2`}>
                      {item.text.substring(0, 100)}...
                    </p>
                  </div>
                  <div className={`text-3xl lg:text-4xl transition-all duration-300 ${activeObjective === index ? 'scale-125' : 'opacity-60'
                    }`}>
                    {item.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Content Display */}
          <div className="sticky top-8">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100">
              {/* Image Section */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  src={objectives[activeObjective].image}
                  alt={objectives[activeObjective].title}
                  className="w-full h-full object-cover transition-transform duration-700 scale-105 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-4xl lg:text-5xl mb-2">{objectives[activeObjective].icon}</div>
                  <h3 className="text-xl lg:text-2xl font-bold">{objectives[activeObjective].title}</h3>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#004EA5] to-[#01319E] flex items-center justify-center text-white text-xl font-bold mr-4">
                    {objectives[activeObjective].number}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800">
                    {objectives[activeObjective].title}
                  </h3>
                </div>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  {objectives[activeObjective].text}
                </p>

                {/* Progress Indicators */}
                <div className="flex justify-center mt-8 space-x-3">
                  {objectives.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleObjectiveClick(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeObjective
                        ? 'bg-[#004EA5] scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 lg:mt-32">
          <button className="group relative px-12 py-4 lg:px-16 lg:py-5 bg-gradient-to-r from-[#004EA5] via-[#01319E] to-[#5598B5] text-white font-bold text-lg lg:text-xl rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Explore Our Programs</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#5598B5] via-[#004EA5] to-[#01319E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

     
        

      </div>
    </div>
  );
};

export default OfferingsCommComponent;
