"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaLayerGroup,
  FaRocket,
  FaUsers,
  FaGraduationCap,
  FaTools,
  FaCertificate,
  FaCode,
  FaRobot,
  FaBrain,
  FaCloud,
  FaShieldAlt,
  FaMobile,
  FaGamepad,
  FaChartLine,
  FaStar,
  FaArrowRight,
  FaPlay,
  FaLightbulb,
  FaHandshake,

  FaGlobe
} from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";

const offerings = [
  {
    title: "Hybrid Learning Experience",
    desc: "Online & Hybrid delivery model via LMS and local partner institutions.",
    icon: <FaLaptopCode className="text-white text-3xl" />,
    highlights: ["24/7 Access", "Live Sessions", "Online Labs"],
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Progressive Learning Modules",
    desc: "Carefully crafted age-appropriate content that grows with your child's learning journey.",
    icon: <FaLayerGroup className="text-white text-3xl" />,
    highlights: ["Age 6-8", "Age 9-12", "Age 13-16"],
    color: "from-green-500 to-teal-600"
  },
  {
    title: "Industry Certifications",
    desc: "Earn recognized credentials from beginner to advanced levels, valued by top tech companies.",
    icon: <PiCertificateBold className="text-white text-3xl" />,
    highlights: ["Beginner", "Intermediate", "Advanced"],
    color: "from-orange-500 to-red-600"
  },
];

const objectives = [
  {
    title: "Real-World Tech Exposure",
    desc: "To empower high school students withearly exposure to real-world technologies such as coding, robotics, AI, and data science in an engaging, practical, and age-appropriate manner.",
    icon: <FaRocket />,
    skills: ["AI & ML", "IoT Projects", "Web Development", "Mobile Apps"],
    stats: ""
  },
  {
    title: "Vibrant Creator Community",
    desc: "To build a community of passionate learners, creators, and change-makers who can contribute meaningfully to the digital economy.",
    icon: <FaUsers />,
    skills: ["Peer Learning", "Mentorship", "Competitions", "Showcases"],
    stats: "10,000+ Members"
  },
  {
    title: "Future-Ready Mindset",
    desc: "To ensure that our learners are equipped for both present and future job markets. To foster a lifelong learning mindset by encouraging innovation, critical thinking, and problem-solving beyond the traditional curriculum",
    icon: <FaGraduationCap />,
    skills: ["Critical Thinking", "Problem Solving", "Creativity", "Leadership"],
    stats: "95% Success Rate"
  },
  {
    title: "Industry-Grade Learning",
    desc: "To bridge the industry-academia gap by providing students with hands-on training, project-based learning, and mentorship in high-demand skills including software development, cloud computing, cybersecurity, and more.",
    icon: <FaTools />,
    skills: ["Cloud Computing", "Cybersecurity", "DevOps", "And More"],
    stats: "10+ Technologies"
  },
];

const techStack = [
  { icon: <FaCode />, name: "Programming", color: "text-blue-500" },
  { icon: <FaRobot />, name: "Robotics", color: "text-green-500" },
  { icon: <FaBrain />, name: "AI/ML", color: "text-purple-500" },
  { icon: <FaCloud />, name: "Cloud", color: "text-cyan-500" },
  { icon: <FaMobile />, name: "Mobile Dev", color: "text-indigo-500" },
];

const OfferingsComponent = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#01319E] via-[#004EA5] to-[#5598B5] py-20 px-4 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-[#004EA5]/30 to-[#5598B5]/30 rounded-full blur-3xl top-0 left-0 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-[#5598B5]/20 to-[#004EA5]/20 rounded-full blur-2xl bottom-0 right-0 translate-x-1/2 translate-y-1/2 animate-pulse" />
      <div className="absolute w-[300px] h-[300px] bg-gradient-to-br from-[#004EA5]/15 to-[#01319E]/15 rounded-full blur-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 tracking-tight">
            Your Learning
            <br />
            <span className="text-5xl md:text-6xl">Journey Starts Here</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Unlock your potential with cutting-edge technology education designed for the next generation of innovators
          </p>

          {/* Tech Stack Carousel */}
          <motion.div
            className="flex justify-center items-center gap-8 mt-12 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/10 backdrop-blur-sm ${tech.color}`}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl">{tech.icon}</div>
                <span className="text-sm font-medium text-white">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Offerings Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              🚀 What We Offer
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {offerings.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8 text-center hover:shadow-cyan-500/25 transition-all duration-300"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className={`flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${item.color} rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300`}>
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-300 font-medium mb-6 leading-relaxed">
                  {item.desc}
                </p>

                <div className="flex justify-center gap-2 flex-wrap">
                  {item.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/20 rounded-full text-sm text-white font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaArrowRight className="text-cyan-400 text-xl" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Objectives Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-20">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              🎯 Our Mission & Vision
            </span>
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-500  rounded-full" />

            <div className="space-y-20">
              {objectives.map((obj, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-20"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 top-8 w-18 h-18 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white text-xl shadow-lg border-1 border-slate-900 z-10">
                    {obj.icon}
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02]"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {obj.title}
                      </h4>
                      <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full">
                        <FaStar className="text-yellow-400" />
                        <span className="text-white font-bold">{obj.stats}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg font-medium leading-relaxed mb-6">
                      {obj.desc}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {obj.skills.map((skill, skillIdx) => (
                        <motion.div
                          key={skillIdx}
                          className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-xl text-white text-sm font-medium hover:bg-white/20 transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          <FaLightbulb className="text-yellow-400 text-xs" />
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-32"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-xl border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Shape the Future?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of young innovators who are already building tomorrow&rsquo;s technology
            </p>
            {/* <div className="flex justify-center gap-6 flex-wrap">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPlay /> Start Your Journey
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaGlobe /> Explore Programs
              </motion.button>
            </div> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OfferingsComponent;