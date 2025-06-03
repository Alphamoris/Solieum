"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface LogoBackgroundProps {
  size?: number;
  opacity?: number;
  className?: string;
}

export const LogoBackground: React.FC<LogoBackgroundProps> = ({
  size = 600,
  opacity = 0.05,
  className,
}) => {
  return (
    <div 
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none ${className}`}
      style={{ width: `${size}px`, height: `${size}px`, opacity }}
    >
      <div className="relative w-full h-full">
        {/* SVG filter for the logo */}
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <filter id="logoBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="15" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            <linearGradient id="logoBackgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#843dff" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#36a4ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0ce69e" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Animated glow effect */}
        <motion.div 
          className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-purple-500/20 via-primary-blue-500/20 to-primary-green-500/20"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut"
          }}
        />
        
        {/* Logo image with SVG mask and filter */}
        <div className="relative w-full h-full">
          <div 
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{ filter: 'url(#logoBlur)' }}
          >
            <Image 
              src="/images/sul3.jpg"
              alt="Solieum Background Logo"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Overlay gradient to blend with site colors */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{ 
              background: 'url(#logoBackgroundGradient)',
              mixBlendMode: 'color-dodge'
            }}
          />
        </div>
      </div>
    </div>
  );
}; 