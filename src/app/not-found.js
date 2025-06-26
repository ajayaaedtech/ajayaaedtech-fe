"use client"
import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiFrown } from 'react-icons/fi';

export default function Custom404() {
  useEffect(() => {
    // Add any initialization logic here
  }, []);

  return (
    <>
      <Head>
        <title>Page Not Found | 404 Error</title>
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 flex flex-col items-center justify-center p-6 text-white">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl"
        >
          {/* Animated Emoji */}
          <motion.div
            animate={{
              rotate: [0, 10, -10, 10, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="text-8xl mb-6"
          >
            <FiFrown className="inline-block" />
          </motion.div>

          {/* Error Code */}
          <motion.h1 
            className="text-9xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            404
          </motion.h1>

          {/* Error Message */}
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-xl mb-8 opacity-90">
            Oops! The page youre looking for has vanished into the digital void.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" passHref>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-indigo-900 font-medium rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                Go Home <FiArrowRight />
              </motion.a>
            </Link>
            
            <Link href="/contact" passHref>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-white text-white font-medium rounded-full flex items-center justify-center gap-2 hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                Report Issue
              </motion.a>
            </Link>
          </div>

          {/* Fun Easter Egg */}
          <motion.p 
            className="mt-12 text-sm opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1 }}
          >
            Go to home page ..
          </motion.p>
        </motion.div>

        {/* Floating particles background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white bg-opacity-10"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, (Math.random() - 0.5) * 100],
                x: [0, (Math.random() - 0.5) * 50],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}