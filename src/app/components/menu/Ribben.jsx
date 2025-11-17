"use client";

import { Phone, Mail, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function Ribben() {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}

      className="w-full bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white py-3 px-5 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-end gap-6 flex-wrap">

        {/* Phone */}
        <div className="flex items-center gap-2 group transition text-xs sm:text-sm md:text-base font-medium cursor-pointer">
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-yellow-300 transition" />
          <a
            href="tel:+919505051524"
            className="hover:text-yellow-300 transition"
          >
            +91 9505051524
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 group transition text-xs sm:text-sm md:text-base font-medium cursor-pointer">
          <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-green-300 transition" />
          <a
            href="mailto:info@ajayaaedtech.com"
            className="hover:text-green-300 transition break-all"
          >
            info@ajayaaedtech.com
          </a>
        </div>

        {/* Instagram - icon only with animation */}
        <motion.a
          href="https://www.instagram.com/ajayaa_edtech/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0.6, rotate: -10, opacity: 0 }}
          animate={{
            scale: [0.6, 1.3, 1],
            rotate: [-10, 10, 0],
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          whileHover={{ scale: 1.15, rotate: 5 }}
          className="transition cursor-pointer"
        >
          <Instagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
        </motion.a>
      </div>
    </motion.div>
  );
}
  