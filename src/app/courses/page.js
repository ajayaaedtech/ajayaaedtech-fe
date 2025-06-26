'use client';
import { motion } from 'framer-motion';

export default function Courses() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#004EA5] via-[#01319E] to-[#5598B5] px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-md w-full"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-4xl font-bold text-white mb-4"
        >
        Comming Soon !
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-white text-lg"
        >
          This page is under construction. Please check back later!
        </motion.p>
      </motion.div>
    </div>
  );
}
