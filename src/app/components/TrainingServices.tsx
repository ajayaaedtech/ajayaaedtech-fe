"use client";
import { Grid, Triangle, Layers, Monitor, SquareStack } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: <Grid className="w-10 h-10 text-red-600 transition-all duration-500 group-hover:rotate-[360deg] group-hover:text-black" />,
    title: "Software Training",
    desc: "Empower your team with hands-on software training tailored to today’s development tools and industry best practices.",
  },
  {
    icon: <Triangle className="w-10 h-10 text-red-600 transition-all duration-500 group-hover:rotate-[360deg] group-hover:text-black" />,
    title: "Project Training",
    desc: "Experience live, real-world project scenarios with guided mentoring and interactive lab sessions.",
  },
  {
    icon: <SquareStack className="w-10 h-10 text-red-600 transition-all duration-500 group-hover:rotate-[360deg] group-hover:text-black" />,
    title: "Weekend Workshops",
    desc: "Intensive weekend workshops at your workplace — we deliver custom content that fits your schedule and goals.",
  },
  {
    icon: <Monitor className="w-10 h-10 text-red-600 transition-all duration-500 group-hover:rotate-[360deg] group-hover:text-black" />,
    title: "IT Consulting",
    desc: "Strategic IT consulting services to align technology, process and business needs for optimal performance.",
  },
  {
    icon: <Grid className="w-10 h-10 text-red-600 transition-all duration-500 group-hover:rotate-[360deg] group-hover:text-black" />,
    title: "Classroom Training",
    desc: "Interactive classroom sessions with expert instructors and state-of-the-art lab infrastructure.",
  },
  {
    icon: <Triangle className="w-10 h-10 text-red-600 transition-all duration-500 group-hover:rotate-[360deg] group-hover:text-black" />,
    title: "Online Training",
    desc: "Flexible virtual classrooms allowing you to learn from anywhere with full support and engaging content.",
  },
  {
    icon: <SquareStack className="w-10 h-10 text-red-600 transition-all duration-500 group-hover:rotate-[360deg] group-hover:text-black" />,
    title: "Corporate Training",
    desc: "Tailored corporate training programs designed to boost your professionals’ technology skills and productivity.",
  },
];

export default function TrainingServices() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-lg font-bold text-gray-600 tracking-widest mb-8">
          OUR TRAINING SERVICES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl shadow-sm bg-white hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-gray-100 rounded-full p-6 mb-4 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
