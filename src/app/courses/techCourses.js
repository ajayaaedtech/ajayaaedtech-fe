import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Code, Brain, Cpu, Globe, Shield, Users, BookOpen, Award, Zap, Target, Star, ArrowRight, BookOpenCheck  } from 'lucide-react';

const techCourses = {
  middleSchool: [
    {
      title: 'Introduction to AI (Grade 7–8)',
      concepts: ['What is AI', 'History', 'Real-World Use', 'AI Ethics', 'Future Trends'],
      tools: ['Teachable Machine', 'QuickDraw'],
      output: 'AI Activity Workbook + Project',
      icon: Brain,
      color: 'from-violet-500 to-purple-600',
      bgColor: 'bg-violet-50',
      textColor: 'text-violet-800',
      borderColor: 'border-violet-200'
    },
    {
      title: 'Python Essentials (Grade 8–9)',
      concepts: ['Variables', 'Loops', 'Conditionals', 'Functions', 'Data Types'],
      activity: ['Build a Calculator', 'Quiz App'],
      output: 'Python mini projects',
      icon: Code,
      color: 'from-emerald-500 to-green-600',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-800',
      borderColor: 'border-emerald-200'
    },
    {
      title: 'Web Design Basics (Grade 8–9)',
      concepts: ['HTML Structure', 'CSS Styling', 'Basic JavaScript', 'Responsive Design'],
      activity: ['Create Personal Page', 'Simple Games'],
      output: 'Personal website portfolio',
      icon: Globe,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-200'
    },
  ],
  highSchool: [
    {
      title: 'Robotics & Automation with DIY Kits (Grade 9–10)',
      concepts: ['Sensors', 'Motors', 'Logic', 'Programming', 'Circuit Design'],
      activities: ['Line-follower robot', 'Smart light'],
      output: 'DIY robotics model with report',
      icon: Cpu,
      color: 'from-orange-500 to-amber-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-800',
      borderColor: 'border-orange-200'
    },
    {
      title: 'Mobile App Development (Grade 10–11)',
      concepts: ['App Design', 'User Interface', 'Basic Programming', 'Testing'],
      activities: ['Simple Calculator App', 'To-Do List App'],
      output: 'Working mobile application',
      icon: Target,
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-800',
      borderColor: 'border-pink-200'
    },
  ],
  seniorAndCollege: [
    {
      title: 'Advanced Python with Problem Solving',
      concepts: ['Real coding problems', 'Logic building', 'Algorithms', 'Data Structures'],
      output: 'Real-world Python apps',
      icon: Code,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-200'
    },
    {
      title: 'AI & Machine Learning (ML) Foundations',
      useCases: ['Face recognition', 'Chatbots', 'Recommendation Systems'],
      tools: ['scikit-learn', 'Jupyter', 'Teachable Machine'],
      output: 'AI model demo project',
      icon: Brain,
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-800',
      borderColor: 'border-indigo-200'
    },
    {
      title: 'Web Development (HTML, CSS, JavaScript, React)',
      concepts: ['Build static and dynamic websites', 'Responsive Design', 'User Experience'],
      output: 'Personal portfolio website',
      icon: Globe,
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-800',
      borderColor: 'border-teal-200'
    },
    {
      title: 'Data Science & Visualization',
      concepts: ['Data cleaning', 'Graphing', 'Insights', 'Statistical Analysis'],
      tools: ['Pandas', 'Matplotlib', 'Excel'],
      output: 'Mini analytics dashboard project',
      icon: Target,
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-800',
      borderColor: 'border-pink-200'
    },
    {
      title: 'DevOps & Cloud Tools (For B.Tech/IT)',
      tools: ['Git', 'Docker', 'Jenkins', 'CI/CD pipelines'],
      output: 'Deploy an app using DevOps pipeline',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-800',
      borderColor: 'border-yellow-200'
    },
    {
      title: 'Cybersecurity Essentials',
      concepts: ['Phishing', 'Encryption', 'Password protection', 'Network Security'],
      activity: ['Simulate a secure login system'],
      output: 'Cyber Hygiene Report & Simulation',
      icon: Shield,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-800',
      borderColor: 'border-red-200'
    },
  ],
  teachers: [
    {
      title: 'Pedagogy for Tech Teaching',
      concepts: ['Teach coding, AI, ML using stories & simulations', 'Interactive Learning', 'Assessment Methods'],
      output: 'Sample lesson plans, classroom activity bank',
      icon: BookOpen,
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-800',
      borderColor: 'border-purple-200'
    },
    {
      title: 'Curriculum Integration & Evaluation',
      concepts: ['Align with NEP 2020', 'Create rubrics', 'Learning Outcomes'],
      output: 'Sample school tech curriculum',
      icon: Award,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-800',
      borderColor: 'border-emerald-200'
    },
    {
      title: 'Tools & LMS Training',
      concepts: ['LMS operation', 'Assessment', 'Live sessions', 'Digital Tools'],
      output: 'Recorded demo + LMS certification',
      icon: Users,
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-cyan-50',
      textColor: 'text-cyan-800',
      borderColor: 'border-cyan-200'
    },
  ],
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