"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from './components/atoms/Typography';
import { Button } from './components/atoms/Button';

export default function Error({ 
  error, 
  reset 
}: { 
  error: Error; 
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center"
      >
        <div className="mb-6 flex justify-center">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-full flex items-center justify-center bg-red-500/20"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-red-500"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12" y2="16"></line>
            </svg>
          </motion.div>
        </div>

        <Typography as="h1" variant="h3" className="mb-2">
          Something went wrong!
        </Typography>
        
        <Typography as="p" variant="body" className="mb-6 text-gray-300">
          {error?.message || "We encountered an error while processing your request."}
        </Typography>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button onClick={() => reset()} variant="default">
            Try again
          </Button>
          
          <Button href="/" variant="outline">
            Go back home
          </Button>
        </div>
      </motion.div>
    </div>
  );
} 