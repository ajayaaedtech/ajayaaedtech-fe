"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChalkboardTeacher, FaGraduationCap, FaRobot, FaCode, FaPlay } from "react-icons/fa";
import { MdOutlineSchool, MdTrendingUp, MdVerified } from "react-icons/md";
import { HiSparkles, HiAcademicCap } from "react-icons/hi";
import cbseIcon from '../herosection/CBSE_new_logo.png';
import collages from '../herosection/collages.png';
import students from '../herosection/students-group.avif';
import privateinstitues from '../herosection/private-institute.jpg';
import Image from "next/image";

const rotatingWords = [
  { text: "Future-Ready", color: "from-[#0047FF] to-[#00B386]" },
  { text: "Job-Oriented", color: "from-[#FF6B6B] to-[#FF8E8E]" },
  { text: "Industry-Oriented", color: "from-[#FFA500] to-[#FFB84D]" },
  { text: "Skill-Based", color: "from-[#9C27B0] to-[#BA68C8]" },
  { text: "Career-Focused", color: "from-[#00BCD4] to-[#4DD0E1]" }
];

export default function HeroAjayaa() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const currentWord = rotatingWords[currentWordIndex].text;
    const typingSpeed = isDeleting ? 80 : 120;
    const pauseTime = isDeleting ? 1000 : 2500;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentWord) {
        // Word is complete, pause then start deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText === "") {
        // Deletion complete, move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
      } else {
        // Continue typing or deleting
        setDisplayText(prev => {
          if (isDeleting) {
            return currentWord.substring(0, prev.length - 1);
          } else {
            return currentWord.substring(0, prev.length + 1);
          }
        });
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  // Cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#F8FAFF] via-white to-[#F5F8FF] relative overflow-hidden min-h-screen">
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-[#0047FF]/8 to-[#00B386]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-gradient-to-tr from-[#FFA500]/8 to-[#FF6B6B]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Floating Particles - Hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-[#0047FF]/20 to-[#00B386]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-12 md:pb-20">
        {/* Enhanced Top Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6 md:mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {[
            { icon: <MdVerified className="text-[#00B386] text-sm md:text-lg" />, text: "Batch 2025", bg: "from-[#00B386]/10 to-[#00B386]/5" },
            { icon: <MdTrendingUp className="text-[#0047FF] text-sm md:text-lg" />, text: "95% Success", bg: "from-[#0047FF]/10 to-[#0047FF]/5" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className={`bg-gradient-to-r ${item.bg} backdrop-blur-lg rounded-xl md:rounded-2xl px-3 py-2 md:px-6 md:py-3 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm font-semibold">
                {item.icon}
                <span className="text-gray-700">{item.text}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Enhanced Left Side - Always Centered on Mobile */}
          <motion.div
            className="flex-1 max-w-3xl text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-[#0047FF]/15 to-[#00B386]/15 rounded-full px-4 py-2 md:px-6 md:py-3 mb-6 md:mb-8 border border-white/20 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <HiAcademicCap className="text-[#0047FF] text-lg md:text-xl" />
              <span className="text-xs md:text-sm font-bold text-[#0047FF] tracking-wide">FUTURE-READY EDUCATION</span>
            </motion.div>

            {/* Mobile-Responsive Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
              <span className="text-gray-900 block mb-2">Upskill Students with</span>

              {/* Fixed Typewriter Container - No Extra Space */}
              <div className="relative min-h-[1.2em] flex items-center justify-center lg:justify-start mb-2">
                <span
                  className={`bg-gradient-to-r ${rotatingWords[currentWordIndex].color} bg-clip-text text-transparent font-extrabold`}
                  style={{
                    fontSize: 'inherit',
                    lineHeight: '1.2',
                    display: 'inline-block',
                    whiteSpace: 'nowrap',
                    overflow: 'visible'
                  }}
                >
                  {displayText}
                  <span
                    className={`inline-block w-0.5 md:w-1 bg-current ml-1 transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
                    style={{ height: '1em', verticalAlign: 'baseline' }}
                  />
                </span>
              </div>

              <span className="text-gray-900 block">Tech Courses</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-10 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
              AJAYAA EdTech provides comprehensive educational programs in{" "}
              <span className="text-[#0047FF] font-semibold">coding</span>,{" "}
              <span className="text-[#00B386] font-semibold">AI</span>,{" "}
              <span className="text-[#FFA500] font-semibold">DevOps</span>, and emerging technologies.
            </p>

            {/* Mobile-Responsive Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#003399] to-[#00A0ED]/90 text-white font-bold px-6 py-3 md:px-10 md:py-5 rounded-xl md:rounded-2xl shadow-2xl border border-[#0047FF]/20 group overflow-hidden relative"
              >
                <span className="flex items-center justify-center gap-2 md:gap-3 relative z-10">
                  <span className="text-lg md:text-2xl"></span>
                  <span className="text-sm md:text-lg">Explore Courses Now</span>
                  <FaPlay className="text-xs md:text-sm group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>


            </div>
          </motion.div>

          {/* Enhanced Right Side Image - Better Mobile Layout */}
          <motion.div
            className="flex-1 max-w-md lg:max-w-lg relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="relative group ">
              {/* Image Container with better mobile styling */}
              <div className="overflow-hidden rounded-none md:mt-20 mt-10">
                <img
                  src="/full-ajayaa-hero.png"
                  alt="Learning Hero Illustration"
                  className="w-full h-auto object-cover object-center block scale-[1.01] -translate-x-[0.5px]"
                  style={{
                    minHeight: '250px'
                  }}
                />
              </div>




              {/* Floating Badges - Responsive Positioning */}
              <motion.div
                className="absolute -top-3 -left-3 md:-top-6 md:-left-6 bg-gradient-to-r from-[#0047FF] to-[#00B386] text-white px-3 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl"
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm font-bold">
                  <span className="text-sm md:text-lg">🚀</span>
                  <span className="hidden sm:inline">Tech Vision India</span>
                  <span className="sm:hidden">Tech Vision</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 bg-gradient-to-r from-[#FFA500] to-[#FF6B6B] text-white px-3 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl"
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm font-bold">
                  <span className="text-sm md:text-lg">🎓</span>
                  <span>Future Skills</span>
                </div>
              </motion.div>

              {/* Additional floating element - Hidden on small screens */}
              <motion.div
                className="hidden md:block absolute top-1/4 -right-6 lg:-right-8 bg-gradient-to-r from-[#9C27B0] to-[#BA68C8] text-white px-3 py-2 md:px-4 md:py-2 rounded-lg md:rounded-xl shadow-lg"
                animate={{ x: [-3, 3, -3], rotate: [-1, 1, -1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex items-center gap-1 text-xs font-semibold">
                  <FaCode className="text-xs md:text-sm" />
                  <span>Coding</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Institution Logos - Mobile Responsive */}
        <motion.div
          className="mt-12 md:mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="mb-6 md:mb-8">
            <p className="text-sm md:text-lg text-gray-500 mb-2 font-medium">Trusted by leading educational institutions</p>
            <div className="w-16 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-[#0047FF] to-[#00B386] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
            {[
              { img: cbseIcon, label: "CBSE Schools", color: "from-[#0047FF]/10 to-[#0047FF]/5" },
              { img: collages, label: "Engineering Colleges", color: "from-[#00B386]/10 to-[#00B386]/5" },
              { img: students, label: "Polytechnics", color: "from-[#FFA500]/10 to-[#FFA500]/5" },
              { img: privateinstitues, label: "Private Institutes", color: "from-[#FF6B6B]/10 to-[#FF6B6B]/5" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className={`bg-gradient-to-r ${item.color} backdrop-blur-lg border border-white/30 rounded-xl md:rounded-2xl px-3 py-3 md:px-8 md:py-4 flex flex-col sm:flex-row items-center gap-2 md:gap-4 shadow-lg hover:shadow-2xl transition-all duration-300 group`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + idx * 0.1 }}
              >
                <Image
                  src={item.img}
                  alt={item.label}
                  width={24}
                  height={24}
                  className="w-6 h-6 md:w-8 md:h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-xs md:text-sm font-bold text-gray-700 group-hover:text-gray-900 transition-colors text-center sm:text-left">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}