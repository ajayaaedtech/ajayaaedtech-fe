"use client";
import React, { useState, useCallback, useMemo } from 'react';
import {
  ChevronDown, BookOpen, Users, Target, Award, Lightbulb, TrendingUp,
  CheckCircle, GraduationCap, Building, Star, ArrowRight, Sparkles,
  Shield, Zap, Plus, Minus, Calendar, Phone, Mail
} from 'lucide-react';

const EdTechConsultancy = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [showMore, setShowMore] = useState({
    schoolAcademics: false,
    schoolAdmin: false,
    college: false
  });

  const toggleSection = useCallback((section) => {
    setExpandedSection(prev => prev === section ? null : section);
  }, []);

  const toggleShowMore = useCallback((section) => {
    setShowMore(prev => ({ ...prev, [section]: !prev[section] }));
  }, []);

  // Optimized data structure
  const consultancyData = useMemo(() => ({
    school: {
      title: "School Consultancy",
      icon: Building,
      gradient: "from-blue-600 via-blue-700 to-indigo-700",
      academics: [
        { title: "Academic Planning – MACRO & MICRO", icon: Target, description: "Comprehensive macro & micro level institutional planning" },
        { title: "Execution of Plan", icon: BookOpen, description: "Modern, industry-aligned course development" },
        { title: "Assess current programs through Audit", icon: Award, description: "Diagnostic testing and holistic evaluation" },
        { title: "Identifying areas for improvement", icon: Users, description: "Professional development and training programs" },
        { title: "Enhanced teaching and Learning culture", icon: Sparkles, description: "Collaborative learning environments", highlight: true },
        { title: "Curriculum Development", icon: CheckCircle, description: "Centralized planning systems" },
        { title: "Lesson Plan – Centralised", icon: Zap, description: "Digital transformation strategies" },
        { title: "Guidance in having balanced Time Table", icon: Star, description: "Life skills and character building" },
        { title: "Diagnostic test and holistic report card ", icon: Star, description: "Data-driven decision making" },
      ],
      administrative: [
        {
          title: "Strategic Operations",
          icon: Target,
          description: "Advising in preparing SOPs aligned with mission & vision."
        },
        {
          title: "Culture Development",
          icon: Building,
          description: "SOPs setting tone for positive institutional culture."
        },
        {
          title: "Educational Environment",
          icon: BookOpen,
          description: "Policies & procedures to enhance the learning ecosystem."
        },
        {
          title: "Technology Strategy",
          icon: Lightbulb,
          description: "Integrating EdTech to boost skill-based, future-ready learning."
        },
        {
          title: "Global EdTech Alignment",
          icon: Sparkles,
          description: "Bridging the gap with global trends for student preparedness."
        },
        {
          title: "Resource Optimization",
          icon: TrendingUp,
          description: "Strategic planning & resource allocation for learning impact."
        },
        {
          title: "Revenue Management",
          icon: Award,
          description: "Guidance in revenue generation & efficient collection."
        }
      ]

    },
    college: {
      title: "College Consultancy",
      icon: GraduationCap,
      gradient: "from-purple-600 via-purple-700 to-pink-700",
      services: [
        { title: "IT Skills Development", icon: Lightbulb, description: "Advanced technology training programs" },
        { title: "Career Guidance", icon: GraduationCap, description: "Personalized pathway planning" },
        { title: "Academic Strategy", icon: Target, description: "Strategic academic roadmaps" },
        { title: "Special Needs Support", icon: Users, description: "Inclusive learning systems" },
        { title: "Test Preparation", icon: BookOpen, description: "SAT, ACT, GRE mastery programs" },
        { title: "Financial Aid", icon: Award, description: "Scholarship and funding guidance" }
      ]
    },
    approach: {
      title: "Our Approach",
      icon: Sparkles,
      gradient: "from-emerald-600 via-teal-700 to-cyan-700",
      principles: [
        {
          title: "Faculty Excellence",
          icon: Users,
          description: "Strategic hiring of top-tier educators",
          metric: "Expert Staff"
        },
        {
          title: "Teacher Training",
          icon: GraduationCap,
          description: "Ongoing skill-building for educators",
          metric: "UpSkill Program"
        },
        {
          title: "Leadership Growth",
          icon: ArrowRight,
          description: "Leadership development for school heads",
          metric: "Vision Ready"
        },
        {
          title: "Academic Audits",
          icon: CheckCircle,
          description: "Holistic review of academic & admin systems",
          metric: "100% Coverage"
        },
        {
          title: "Tech Programs",
          icon: Lightbulb,
          description: "Smart integration of digital tools",
          metric: "AI-Driven"
        },
        {
          title: "Skill-Based Learning",
          icon: Award,
          description: "Focus on employable future-ready skills",
          metric: "Future Skills"
        },
        {
          title: "Data-Driven Research",
          icon: Shield,
          description: "Insights-backed educational strategies",
          metric: "Evidence-Based"
        }
      ]
    }

  }), []);

  // ✅ CORRECTED: ServiceItem component
  const ServiceItem = ({ item, showDescription = false }) => {
    // Assign the component to a capitalized variable
    const Icon = item.icon;

    return (
      <div className={`group flex items-start space-x-3 p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-md ${item.highlight ? 'bg-gradient-to-r from-blue-100 to-indigo-100 border-l-4 border-blue-600' : ''
        }`}>
        <div className={`flex-shrink-0 p-2 rounded-lg transition-all duration-300 ${item.highlight
          ? 'bg-blue-600 text-white'
          : 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
          }`}>
          {/* Use the capitalized variable here */}
          <Icon className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className={`font-semibold text-sm leading-tight mb-1 ${item.highlight ? 'text-gray-900' : 'text-gray-800 group-hover:text-gray-900'
            }`}>
            {item.title}
          </h4>
          {showDescription && (
            <p className="text-xs text-gray-600 group-hover:text-gray-700">{item.description}</p>
          )}
          {item.metric && (
            <span className="inline-block mt-1 px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
              {item.metric}
            </span>
          )}
        </div>
      </div>
    );
  };

  // underline 
  // A component to create a colorful, curved underline effect
  const UnderlineHighlight = ({ children }) => {
    return (
      <span className="relative inline-block">
        {children}
        <svg
          className="absolute -bottom-1.5 left-0 w-full"
          width="100%"
          height="8"
          viewBox="0 0 100 8"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Define the colorful gradient */}
            <linearGradient id="underline-gradient" x1="0%" y1="10%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#3b82f6' }} /> {/* Blue */}
              <stop offset="80%" style={{ stopColor: '#a855f7' }} /> {/* Purple */}
              <stop offset="100%" style={{ stopColor: '#ec4899' }} /> {/* Pink */}
            </linearGradient>
          </defs>
          {/* The curved path that uses the gradient */}
          <path
            d="M0,6 Q50,0 100,6"
            stroke="url(#underline-gradient)"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </span>
    );
  };
  // Compact Show More Button
  const ShowMoreButton = ({ isExpanded, onClick, count = 0 }) => (
    <button
      onClick={onClick}
      className="w-full mt-3 p-2 border border-dashed border-blue-300 rounded-lg text-blue-600 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
    >
      {isExpanded ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
      <span className="font-medium">{isExpanded ? 'Show Less' : `+${count} More`}</span>
    </button>
  );

  // Compact Mobile Accordion
  const MobileAccordionSection = ({ title, children, sectionKey, icon: Icon, gradient }) => (
    <div className="bg-white border border-gray-200 rounded-2xl mb-4 overflow-hidden shadow-lg">
      <button
        onClick={() => toggleSection(sectionKey)}
        className={`w-full flex items-center justify-between p-4 bg-gradient-to-r ${gradient} text-white hover:shadow-md transition-all duration-300`}
      >
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white bg-opacity-20 rounded-lg">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedSection === sectionKey ? 'rotate-180' : ''
          }`} />
      </button>
      <div className={`transition-all duration-500 ease-in-out ${expandedSection === sectionKey ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
        <div className="p-4 bg-gray-50">{children}</div>
      </div>
    </div>
  );

  // ✅ CORRECTED: DesktopCard component
  const DesktopCard = ({ data, type }) => {
    // Assign the component to a capitalized variable
    const Icon = data.icon.displayName;

    return (
      <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col h-full">
        <div className={`bg-gradient-to-br ${data.gradient} text-white p-5`}>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white bg-opacity-20 rounded-xl">
              {/* Use the capitalized variable here */}
              <Icon className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold">{data.title}</h2>
          </div>
        </div>

        <div className="p-5 flex-1 flex flex-col space-y-4">
          {type === 'school' && (
            <>
              <div>
                <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  {/* ✅ Use the component here */}
                  <UnderlineHighlight>Academics</UnderlineHighlight>
                </h3>
                <div className="space-y-2">
                  {data.academics.slice(0, showMore.schoolAcademics ? undefined : 4).map((item, index) => (
                    <ServiceItem key={index} item={item} />
                  ))}
                </div>
                {data.academics.length > 4 && (
                  <ShowMoreButton
                    isExpanded={showMore.schoolAcademics}
                    onClick={() => toggleShowMore('schoolAcademics')}
                    count={data.academics.length - 4}
                  />
                )}
              </div>

              <div className="mt-auto">
                <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  {/* ✅ And also here */}
                  <UnderlineHighlight>Administrative</UnderlineHighlight>
                </h3>
                <div className="space-y-2">
                  {data.administrative.slice(0, showMore.schoolAdmin ? undefined : 3).map((item, index) => (
                    <ServiceItem key={index} item={item} />
                  ))}
                </div>
                {data.administrative.length > 3 && (
                  <ShowMoreButton
                    isExpanded={showMore.schoolAdmin}
                    onClick={() => toggleShowMore('schoolAdmin')}
                    count={data.administrative.length - 3}
                  />
                )}
              </div>
            </>
          )}

          {type === 'college' && (
            <div className="space-y-2 flex-1">
              {data.services.slice(0, showMore.college ? undefined : 6).map((item, index) => (
                <ServiceItem key={index} item={item} />
              ))}
              {data.services.length > 6 && (
                <ShowMoreButton
                  isExpanded={showMore.college}
                  onClick={() => toggleShowMore('college')}
                  count={data.services.length - 6}
                />
              )}
            </div>
          )}

          {type === 'approach' && (
            <div className="space-y-2 flex-1">
              {data.principles.map((item, index) => (
                <ServiceItem key={index} item={item} showDescription={true} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 relative overflow-hidden">
      {/* Minimal Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            <span>Trusted by 500+ Institutions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Transform Your
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent block">
              Educational Impact
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            One-stop solution for K12 Schools and College students
          </p>
        </div>

        {/* Mobile View */}
        <div className="block lg:hidden space-y-4">
          <MobileAccordionSection
            title={consultancyData.school.title}
            sectionKey="school"
            icon={consultancyData.school.icon.displayName}
            gradient={consultancyData.school.gradient}
          >
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />Academics
                </h4>
                <div className="space-y-2">
                  {consultancyData.school.academics.slice(0, showMore.schoolAcademics ? undefined : 5).map((item, index) => (
                    <ServiceItem key={index} item={item} showDescription={true} />
                  ))}
                </div>
                {consultancyData.school.academics.length > 5 &&
                  <ShowMoreButton
                    isExpanded={showMore.schoolAcademics}
                    onClick={() => toggleShowMore('schoolAcademics')}
                    count={consultancyData.school.academics.length - 5}
                  />
                }
              </div>

              <div>
                <h4 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
                  <Users className="w-5 h-5 mr-2" />Administrative
                </h4>
                <div className="space-y-2">
                  {consultancyData.school.administrative.slice(0, showMore.schoolAdmin ? undefined : 3).map((item, index) => (
                    <ServiceItem key={index} item={item} showDescription={true} />
                  ))}
                </div>
                {consultancyData.school.administrative.length > 3 &&
                  <ShowMoreButton
                    isExpanded={showMore.schoolAdmin}
                    onClick={() => toggleShowMore('schoolAdmin')}
                    count={consultancyData.school.administrative.length - 3}
                  />
                }
              </div>
            </div>
          </MobileAccordionSection>

          <MobileAccordionSection
            title={consultancyData.college.title}
            sectionKey="college"
            icon={consultancyData.college.icon.displayName}
            gradient={consultancyData.college.gradient}
          >
            <div className="space-y-2">
              {consultancyData.college.services.slice(0, showMore.college ? undefined : 3).map((item, index) => (
                <ServiceItem key={index} item={item} showDescription={true} />
              ))}
            </div>
            {consultancyData.college.services.length > 3 &&
              <ShowMoreButton
                isExpanded={showMore.college}
                onClick={() => toggleShowMore('college')}
                count={consultancyData.college.services.length - 3}
              />
            }
          </MobileAccordionSection>

          <MobileAccordionSection
            title={consultancyData.approach.title}
            sectionKey="approach"
            icon={consultancyData.approach.icon.displayName}
            gradient={consultancyData.approach.gradient}
          >
            <div className="space-y-2">
              {consultancyData.approach.principles.map((item, index) => (
                <ServiceItem key={index} item={item} showDescription={true} />
              ))}
            </div>
          </MobileAccordionSection>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          <DesktopCard data={consultancyData.school} type="school" />
          <DesktopCard data={consultancyData.college} type="college" />
          <DesktopCard data={consultancyData.approach} type="approach" />
        </div>


      </div>
    </div>
  );
};

export default EdTechConsultancy;