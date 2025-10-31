"use client";

import { useState, useEffect } from "react";
import { Clock, Rocket, AlertCircle, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NewBatches() {
  const targetDate = new Date("2025-11-15T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-white via-blue-50/40 to-blue-100/30">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full space-y-10"
      >
        {/* Header */}
        <div>
          <div className="flex justify-center mb-2">
            <Rocket className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-3">
            New Batch Launch — 15 November 2025
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Join our upcoming batch and take your next step toward professional success. <br />
            Learn from experts at{" "}
            <span className="text-blue-700 font-semibold">Ajayaa EdTech</span> — where innovation
            meets opportunity.
          </p>
        </div>

        {/* Info Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2 text-blue-600">
              <Clock className="w-5 h-5" />
              <span>
                Starts: <span className="font-semibold text-gray-900">15 Nov 2025</span>
              </span>
            </div>

            <div className="flex items-center gap-2 text-amber-500">
              <AlertCircle className="w-5 h-5" />
              <span>Hurry Up — Few Seats Left!</span>
            </div>

            <Link
              href="/courses"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium px-6 py-2.5 rounded-full shadow hover:shadow-blue-400/40 transition-all"
            >
              <Rocket className="w-4 h-4" />
              Enroll Now
            </Link>
          </div>

          {/* Countdown Timer */}
          <div className="mt-8 grid grid-cols-4 gap-3 md:gap-4 text-center">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-blue-50 rounded-xl py-3 md:py-4 flex flex-col items-center justify-center"
              >
                <span className="text-2xl md:text-3xl font-bold text-blue-700">
                  {item.value.toString().padStart(2, "0")}
                </span>
                <span className="text-xs md:text-sm text-gray-500">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-3 text-gray-600">
          <p>For more details, contact us:</p>
          <div className="flex justify-center gap-5 text-blue-700 font-medium flex-wrap">
            <a href="tel:+919505051524" className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +91 9505051524
            </a>
            <a href="mailto:info@ajayaaedtech.com" className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> info@ajayaaedtech.com

            </a>
          </div>
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-sm">
          Next enrollment starts on{" "}
          <span className="text-blue-700 font-semibold">15 November 2025</span> — Don’t miss it!
        </p>
      </motion.div>
    </section>
  );
}
