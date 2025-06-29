'use client';

import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

export default function ContactInfo() {
  const [showGoUp, setShowGoUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoUp(window.scrollY > 200);
    };

    // Debounce scroll event for better performance
    const debouncedScroll = () => {
      let ticking = false;
      return () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      };
    };

    window.addEventListener('scroll', debouncedScroll(), { passive: true });
    return () => window.removeEventListener('scroll', debouncedScroll());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showGoUp && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onClick={scrollToTop}
            className="bg-gradient-to-br from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white p-3 rounded-full shadow-xl transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
            aria-label="Go to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <MdOutlineKeyboardDoubleArrowUp className="animate-jump" size={22} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* <motion.a
        href="https://wa.me/+918019037799"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-3 rounded-full shadow-xl transition-all flex items-center justify-center relative overflow-hidden"
        aria-label="WhatsApp us"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', delay: 0.2 }}
      >
        <FaWhatsapp size={20} />
        <motion.span
          className="absolute inset-0 bg-white opacity-0 hover:opacity-10 rounded-full"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.1 }}
        />
      </motion.a> */}
    </div>
  );
}