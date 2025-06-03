"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-background bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center"
      >
        <div className="relative w-24 h-24">
          {/* Animated circles */}
          <motion.div
            animate={{
              rotate: 360,
              transition: { duration: 2, ease: "linear", repeat: Infinity }
            }}
            className="absolute inset-0"
          >
            <div className="absolute top-0 left-1/2 w-4 h-4 -ml-2 -mt-2 rounded-full bg-gradient-to-r from-primary-purple-500 to-primary-blue-500"></div>
          </motion.div>
          
          <motion.div
            animate={{
              rotate: -360,
              transition: { duration: 2.5, ease: "linear", repeat: Infinity }
            }}
            className="absolute inset-0"
          >
            <div className="absolute bottom-0 left-1/2 w-6 h-6 -ml-3 -mb-3 rounded-full bg-gradient-to-r from-primary-blue-500 to-primary-green-500"></div>
          </motion.div>
          
          <motion.div
            animate={{
              rotate: 360,
              transition: { duration: 3, ease: "linear", repeat: Infinity }
            }}
            className="absolute inset-0"
          >
            <div className="absolute top-1/2 right-0 w-5 h-5 -mt-2.5 -mr-2.5 rounded-full bg-gradient-to-r from-primary-purple-500 to-primary-green-500"></div>
          </motion.div>
          
          {/* Center circle */}
          <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-background border border-white/10 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                transition: { duration: 2, repeat: Infinity }
              }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-purple-500 via-primary-blue-500 to-primary-green-500"
            ></motion.div>
          </div>
        </div>
        
        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
            transition: { duration: 1.5, repeat: Infinity }
          }}
          className="mt-8 text-white font-medium"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
} 