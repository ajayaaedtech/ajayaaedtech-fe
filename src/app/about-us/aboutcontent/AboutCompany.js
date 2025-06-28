import React from 'react'
const AboutCompany = () => {


  const objectives = [
    {
      number: 1,
      title: "Early Tech Exposure",
      text: "Empower high school students with real-world technologies like coding, robotics, AI, and data science in an engaging, practical format that bridges classroom learning with industry applications.",
      icon: "🚀",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },

  ];
  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 mb-11 overflow-hidden rounded-3xl bg-white/30 backdrop-blur-xl border border-white/20 shadow hover:shadow-2xl transition duration-500 hover:bg-white/50">
      {/* gradient circle like your cards */}
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-20 rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 opacity-20 rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004EA5] to-[#5598B5]">Us</span>
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We are committed to equip high school students and college learners with essential technical,
          digital, and career-ready skills that go beyond traditional education. From early exposure to coding
          and AI in high school to industry-relevant upskilling for B.Tech graduates and other course learners,
          we are dedicated to nurturing practical competencies, fostering innovation, and preparing students for the future.
        </p>
      </div>
    </div>

  )
}

export default AboutCompany