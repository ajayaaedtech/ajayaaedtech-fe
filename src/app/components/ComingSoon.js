"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const phrases = [
  " New Era of Learning",
  "Innovating Education",
  "Launching Soon",
  "Ajayaa EdTech",
];

export default function ComingSoon() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center w-full max-w-3xl"
      >
        {/* Logo/Brand */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 tracking-tight mb-2">
            AJAYAA <span className="text-sky-600">EdTECH</span>
          </h1>
          <div className="w-24 h-1 mx-auto rounded-full" />
        </motion.div>

        {/* Animated Phrase */}
        <div className="min-h-[4rem] md:min-h-[5rem] flex items-center justify-center my-6">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-3xl font-semibold text-blue-800"
          >
            {phrases[index]}
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-gray-600 text-sm md:text-base max-w-md mx-auto"
        >
          We are re building an innovative educational platform to transform learning experiences. Stay tuned for our launch!
        </motion.p>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 w-full max-w-md mx-auto"
        >
          <div className="mb-2 flex justify-between text-xs text-gray-500">
            <span>Loading</span>
            <span>{Math.round(((index + 1) / phrases.length) * 100)}%</span>
          </div>
          <div className="w-full h-2 bg-blue-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-sky-400 to-blue-600"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
            />
          </div>
        </motion.div>

        {/* Countdown or CTA (optional) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12"
        >
          <button className="px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
            COMMING SOON
          </button>
        </motion.div>

        {/* Social Links (optional) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-8 flex justify-center space-x-4"
        >
          {['Twitter', 'Facebook', 'Instagram', 'LinkedIn'].map((social) => (
            <a
              key={social}
              href="#"
              className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
              aria-label={social}
            >
              <span className="text-xs font-medium">{social[0]}</span>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}