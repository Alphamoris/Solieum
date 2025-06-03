"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToTop } from '@/app/lib/utils/smoothScroll';

interface ScrollToTopButtonProps {
  showAtHeight?: number;
}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  showAtHeight = 300,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > showAtHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAtHeight]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-primary-purple-500 to-primary-blue-500 text-white z-50 shadow-lg hover:shadow-xl transition-shadow"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}; 