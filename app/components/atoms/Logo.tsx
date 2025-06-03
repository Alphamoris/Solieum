"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/app/styles/utils';

interface LogoProps {
  variant?: 'default' | 'small' | 'medium' | 'large';
  withText?: boolean;
  className?: string;
  animated?: boolean;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'default',
  withText = true, 
  className,
  animated = false,
  size
}) => {
  // Size configuration based on variant
  const sizes = {
    small: {
      container: 'h-8 w-auto',
      logoWidth: 32,
      logoHeight: 32,
    },
    medium: {
      container: 'h-10 w-auto',
      logoWidth: 40, 
      logoHeight: 40,
    },
    default: {
      container: 'h-12 w-auto',
      logoWidth: 48,
      logoHeight: 48,
    },
    large: {
      container: 'h-16 w-auto',
      logoWidth: 144,
      logoHeight: 144,
    },
  };

  const { container, logoWidth: defaultWidth, logoHeight: defaultHeight } = sizes[variant];
  
  // Use custom size if provided, otherwise use default from variant
  const logoWidth = size || defaultWidth;
  const logoHeight = size || defaultHeight;

  return (
    <div className={cn("flex items-center", size ? '' : container, className)}>
      {/* SVG container with gradients and effects */}
      <div className="relative">
        {/* Background glow effect */}
        <div className="absolute inset-0 blur-md rounded-full bg-gradient-to-br from-primary-purple-500/30 to-primary-blue-500/30 opacity-70 -z-10"></div>
        
        {/* SVG wrapper for the logo */}
        <svg 
          width={logoWidth} 
          height={logoHeight} 
          viewBox="0 0 64 64" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          {/* Definitions for gradients and filters */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#843dff" />
              <stop offset="50%" stopColor="#36a4ff" />
              <stop offset="100%" stopColor="#0ce69e" />
            </linearGradient>
            
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            <clipPath id="logoClip">
              <circle cx="32" cy="32" r="28" />
            </clipPath>
          </defs>
          
          {/* Outer ring with gradient - animated if requested */}
          {animated ? (
            <motion.circle 
              cx="32" 
              cy="32" 
              r="30" 
              stroke="url(#logoGradient)" 
              strokeWidth="2"
              strokeDasharray="180"
              strokeDashoffset="0"
              fill="transparent"
              filter="url(#glow)"
              animate={{ 
                rotate: [0, 360],
                strokeDashoffset: [0, -180]
              }}
              transition={{ 
                rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                strokeDashoffset: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
            />
          ) : (
            <circle 
              cx="32" 
              cy="32" 
              r="30" 
              stroke="url(#logoGradient)" 
              strokeWidth="2" 
              fill="transparent"
              filter="url(#glow)"
            />
          )}
          
          {/* Inner circle with subtle background */}
          <motion.circle 
            cx="32" 
            cy="32" 
            r="28" 
            fill="#0f0b24" 
            animate={animated ? { 
              opacity: [0.8, 1, 0.8],
              scale: [0.98, 1, 0.98],
            } : {}}
            transition={animated ? { 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut" 
            } : {}}
          />
          
          {/* Logo image clipped to circle */}
          <foreignObject 
            x="4" 
            y="4" 
            width="56" 
            height="56" 
            clipPath="url(#logoClip)"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: animated ? [0.95, 1, 0.95] : 1
              }}
              transition={animated ? { 
                duration: 5, 
                repeat: Infinity,
                ease: "easeInOut" 
              } : { 
                duration: 0.5 
              }}
              style={{ width: '100%', height: '100%' }}
            >
              <Image
                src="/images/sul2.jpg"
                alt="Solieum Logo"
                width={144}
                height={144}
                quality={100}
                className="w-full h-full fit"
              />
            </motion.div>
          </foreignObject>
        </svg>
      </div>
      
      {/* Logo text */}
      {withText && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="ml-3"
        >
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-purple-200 to-white">
            Solieum
          </h1>
          <p className="text-xs text-primary-blue-300">Layer 2 Protocol</p>
        </motion.div>
      )}
    </div>
  );
}; 