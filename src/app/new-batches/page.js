"use client";

import { useState, useEffect } from "react";
import { Rocket, Gift, FireIcon, Phone, Mail, BadgeCheck   } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";


export default function NewBatches() {
  // Countdown Logic (kept fully intact, just not displayed)
  const targetDate = new Date("2025-11-15T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-blue-100 via-orange-50 to-red-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full bg-white shadow-xl rounded-3xl border border-red-200 p-10 space-y-12"
      >
        {/* HEADER */}
        <div className="text-center space-y-4">
          {/* <FireIcon className="w-12 h-12 text-red-600 mx-auto animate-pulse" /> */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-700 tracking-wide">
            🔥 Our Batch is live ..
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            The winds of opportunity are blowing strong, and the gates of growth stand wide open.
            <br />
            Join <span className="text-red-700 font-bold">Ajayaa EdTech</span> and unlock a future
            built on skill, clarity, and ambition.
          </p>
        </div>

        {/* OFFER BOX */}
        <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white p-8 rounded-2xl shadow-xl text-center space-y-6">
          <div className="flex justify-center">
            <Gift className="w-10 h-10 text-yellow-300" />
          </div>

          <h2 className="text-3xl font-bold">Limited-Time Learning Carnival</h2>

          <p className="text-lg">
            Early registrations unlock:
            <br />
            {/* <span className="font-bold text-yellow-300">
              50% OFF • Free Study Material • Live Mentorship • Bonus Skill Kit
            </span> */}
          </p>

          <div className="mt-6">
            <Link
              href="/auth"
              className="inline-flex items-center gap-2 bg-yellow-300 text-red-800 px-10 py-3.5 rounded-full font-bold shadow-lg hover:bg-yellow-200 transition-all duration-300"
            >
              <Rocket className="w-5 h-5" />
              Register Now — Don’t Miss Out
            </Link>
          </div>
        </div>

        {/* HIGHLIGHTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { icon: BadgeCheck, title: "Running Batches", desc: "Fresh live sessions daily" },
            { icon: Rocket, title: "Next Batch", desc: "waiting.." },
            { icon: Gift, title: "Offer Ends Soon", desc: "Grab it before it's gone" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white border border-red-100 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <item.icon className="w-8 h-8 text-red-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-red-700">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CONTACT */}
        <div className="text-center space-y-3 text-gray-700">
          <p className="font-medium">Need help choosing the right course?</p>
          <div className="flex justify-center gap-6 flex-wrap text-red-700 font-semibold">
            <a href="tel:+919505051524" className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +91 9505051524
            </a>
            <a href="mailto:info@ajayaaedtech.com" className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> info@ajayaaedtech.com
            </a>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm">
          Next batch begins on{" "}
          <span className="text-red-700 font-semibold">15 November 2025</span>.
        </p>
      </motion.div>
    </section>
  );
}
