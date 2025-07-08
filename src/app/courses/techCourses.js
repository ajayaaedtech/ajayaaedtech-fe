import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Code, Brain, Cpu, Globe, Shield, Users, BookOpen, Award, Zap, Target, Star, ArrowRight, BookOpenCheck  } from 'lucide-react';

const techCourses = {
  middleSchool: [
    {
      title: 'AI Foundations (Grades 6–8)',
      concepts: ['What is AI?', 'Applications in daily life', 'Types of AI (ANI, AGI, ASI)', 'AI vs. Human Intelligence', 'AI in Phones, Games, TVs, Hospitals, Farming'],
      tools: ['Voice Assistants', 'AI-powered games', 'Smart devices'],
      output: 'AI daily-life journal + presentation',
      icon: Brain,
      color: 'from-violet-500 to-purple-600',
      bgColor: 'bg-violet-50',
      textColor: 'text-violet-800',
      borderColor: 'border-violet-200'
    },
    {
      title: 'Scratch Programming (Grades 6–7)',
      concepts: ['Block-based coding', 'Animation basics', 'Game design logic', 'Problem solving'],
      activity: ['Build a simple animation', 'Create an interactive game'],
      output: 'Scratch projects',
      icon: Code,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-800',
      borderColor: 'border-yellow-200'
    },
    {
      title: 'Python Essentials (Grade 8–9)',
      concepts: ['Variables', 'Loops', 'Conditionals', 'Functions'],
      activity: ['Simple calculator', 'Mini quiz app'],
      output: 'Python practice programs',
      icon: Code,
      color: 'from-emerald-500 to-green-600',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-800',
      borderColor: 'border-emerald-200'
    }
  ],
  highSchool: [
    {
      title: 'AI Applications & Ethics (Grades 9–10)',
      concepts: ['Machine Learning', 'Deep Learning', 'Narrow vs General AI', 'AI Ethics', 'Bias and Fairness'],
      tools: ['Teachable Machine', 'QuickDraw'],
      output: 'AI use-case research + infographic',
      icon: Brain,
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-800',
      borderColor: 'border-indigo-200'
    },
    {
      title: 'Data Science with Python (Grade 10)',
      concepts: ['Data types', 'Lists and Dictionaries', 'Basic data visualization'],
      tools: ['Pandas', 'Matplotlib', 'Jupyter Notebook'],
      output: 'Mini data insights project',
      icon: Cpu,
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-800',
      borderColor: 'border-pink-200'
    },
    {
      title: 'Web Development Basics',
      concepts: ['HTML & CSS', 'JavaScript intro', 'Page structure', 'Responsive design'],
      activity: ['Build a personal web page'],
      output: 'Static portfolio website',
      icon: Globe,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-200'
    }
  ],
  seniorAndCollege: [
    {
      title: 'Advanced Python & Algorithms',
      concepts: ['OOP in Python', 'Recursion', 'Sorting & Searching', 'Problem-solving techniques'],
      output: 'Python-based problem sets & challenges',
      icon: Code,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Machine Learning Foundations',
      concepts: ['Supervised vs Unsupervised Learning', 'Model training', 'Evaluation'],
      tools: ['scikit-learn', 'Jupyter', 'Teachable Machine'],
      output: 'Simple AI model demo',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-800',
      borderColor: 'border-purple-200'
    },
    {
      title: 'DevOps & Cloud Tools',
      tools: ['Git', 'Docker', 'Jenkins', 'CI/CD pipeline basics'],
      output: 'Deploy a sample project using CI/CD tools',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-800',
      borderColor: 'border-yellow-200'
    },
    {
      title: 'Cybersecurity Awareness',
      concepts: ['Digital hygiene', 'Phishing & Passwords', 'Encryption basics'],
      activity: ['Create a safe login simulation'],
      output: 'Cyber Safety Report',
      icon: Shield,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-800',
      borderColor: 'border-red-200'
    }
  ],
  teachers: [
    {
      title: 'Pedagogy for Tech Education',
      concepts: ['Teaching through projects', 'Using storytelling for tech topics', 'Creating engaging classroom simulations'],
      output: 'Lesson plans + interactive teaching toolkit',
      icon: BookOpen,
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-800',
      borderColor: 'border-purple-200'
    },
    {
      title: 'Curriculum Integration (NEP 2020)',
      concepts: ['Linking tech topics to core subjects', 'Learning Outcomes', 'Rubric design'],
      output: 'Integrated curriculum samples',
      icon: Award,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-800',
      borderColor: 'border-emerald-200'
    },
    {
      title: 'Tools & LMS Mastery',
      concepts: ['Digital classroom tools', 'Running live & recorded sessions', 'Assessment via LMS'],
      output: 'Demo class recordings + certification',
      icon: Users,
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-cyan-50',
      textColor: 'text-cyan-800',
      borderColor: 'border-cyan-200'
    }
  ]
};


const CourseCard = ({ course }) => {
  const [showAllConcepts, setShowAllConcepts] = useState(false);
  const IconComponent = course.icon;

  return (
    <div className={`${course.bgColor}  rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border ${course.borderColor} transform hover:-translate-y-1 h-full flex flex-col group relative overflow-hidden`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-8 transition-opacity duration-300`}></div>
      
      <div className="flex items-start gap-3 mb-4 relative z-10">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${course.color} text-white shadow-md group-hover:scale-105 transition-transform duration-300`}>
          <IconComponent size={20} />
        </div>
        <div className="flex-1">
          <h3 className={`text-lg font-bold ${course.textColor} leading-tight`}>
            {course.title}
          </h3>
        </div>
      </div>

      <div className="flex-1 space-y-4 relative z-10">
        {course.concepts && (
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-3 border border-white/50">
            <div className="flex items-center gap-2 mb-2">
              <BookOpenCheck  className={`w-5 h-5 ${course.textColor}`} />
              <h4 className={`text-md font-bold ${course.textColor}`}>
                Core Ideas
              </h4>
            </div>
            <div className="space-y-1">
              {course.concepts.slice(0, showAllConcepts ? course.concepts.length : 3).map((c, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${course.color}`}></div>
                  <span className="text-md font-semibold text-gray-700">{c}</span>
                </div>
              ))}
              {course.concepts.length > 3 && (
                <button 
                  onClick={() => setShowAllConcepts(!showAllConcepts)}
                  className={`mt-2 text-md font-medium ${course.textColor} flex items-center gap-1 hover:underline`}
                >
                  {showAllConcepts ? 'Show less' : `Load more (${course.concepts.length - 3})`}
                  {showAllConcepts ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                </button>
              )}
            </div>
          </div>
        )}

        {course.tools && (
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-3 border border-white/40">
            <h4 className={`text-md font-bold ${course.textColor} mb-2 flex items-center gap-1`}>
              <Cpu className="w-6 h-6" />
              Tools & Technologies
            </h4>
            <div className="flex  flex-wrap gap-1">
              {course.tools.map((tool, idx) => (
                <span key={idx} className={`bg-gradient-to-r ${course.color} text-white px-2 py-1 rounded-full text-xs font-medium shadow-sm`}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        {(course.activity || course.activities) && (
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-3 border border-white/40">
            <h4 className={`text-md font-bold ${course.textColor} mb-2 flex items-center gap-1`}>
              <ArrowRight className="w-3 h-3" />
              Hands-on Activities
            </h4>
            <div className="space-y-1">
              {(course.activity || course.activities).map((act, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${course.color}`}></div>
                  <span className="text-sm font-medium text-gray-700">{act}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {course.useCases && (
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-3 border border-white/40">
            <h4 className={`text-xs font-bold ${course.textColor} mb-2 flex items-center gap-1`}>
              <Target className="w-3 h-3" />
              Applications
            </h4>
            <div className="space-y-1">
              {course.useCases.map((uc, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${course.color}`}></div>
                  <span className="text-xs font-medium text-gray-700">{uc}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-white/30 relative z-10">
        <div className={`flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r ${course.color} text-white shadow-md`}>
          <div className="p-1.5 bg-white/20 rounded-lg">
            <Target size={16} className="flex-shrink-0" />
          </div>
          <div>
            <p className="text-xs font-bold mb-1 tracking-wide">PROJECT OUTCOME</p>
            <p className="text-xs font-medium leading-relaxed">{course.output}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionHeader = ({ children, icon: Icon, gradient }) => (
  <div className="relative mb-8">
    <div className={`flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r ${gradient} text-white shadow-lg`}>
      <div className="p-2 bg-white/20 rounded-xl">
        <Icon size={24} className="flex-shrink-0" />
      </div>
      <h2 className="text-xl sm:text-2xl font-bold">{children}</h2>
    </div>
  </div>
);

const CoursesSection = ({ section }) => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/60 to-purple-50/60 rounded-2xl transform rotate-1 blur-sm"></div>
      <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
        <SectionHeader icon={section.icon} gradient={section.gradient}>
          {section.title}
        </SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {section.courses.map((course, idx) => (
            <CourseCard key={idx} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function TechCourses() {
  const sections = [
    {
      key: 'middleSchool',
      title: 'Middle School (Grades 7–9)',
      icon: BookOpen,
      gradient: 'from-violet-600 to-purple-700',
      courses: techCourses.middleSchool
    },
    {
      key: 'highSchool',
      title: 'High School (Grades 9–10)',
      icon: Award,
      gradient: 'from-orange-600 to-amber-700',
      courses: techCourses.highSchool
    },
    {
      key: 'seniorAndCollege',
      title: 'Senior & College Students (Grades 11–12, UG)',
      icon: Users,
      gradient: 'from-blue-600 to-indigo-700',
      courses: techCourses.seniorAndCollege
    },
    {
      key: 'teachers',
      title: 'For Teachers (ToT)',
      icon: Users,
      gradient: 'from-emerald-600 to-teal-700',
      courses: techCourses.teachers
    }
  ];

  return (
    <>
       <style jsx global>{`
        html, body {
          overflow-x: hidden;
          width: 100%;
        }
      `}</style>
      
    <div className="w-full  min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <div className="relative">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-800 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-4">
              Tech Education Curriculum
            </h1>
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology courses designed for different educational levels and teacher training programs
          </p>
        </header>

        <div className="space-y-12">
          {sections.map((section) => (
            <CoursesSection key={section.key} section={section} />
          ))}
        </div>

        <footer className="mt-16 text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl transform rotate-1 blur-sm"></div>
            <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <p className="text-gray-700 font-medium">
                © {new Date().getFullYear()} Tech Education Program. All rights reserved.
              </p>
              <div className="mt-4 flex justify-center gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-pulse delay-600"></div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </>
  );
}