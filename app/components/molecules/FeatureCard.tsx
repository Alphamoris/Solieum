"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/app/styles/utils';
import { Typography } from '../atoms/Typography';
import { cardHover } from '@/app/lib/animations/motion-variants';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'bordered' | 'filled' | 'gradient';
  iconBackground?: 'purple' | 'blue' | 'green' | 'gradient';
  className?: string;
}

const variantClasses = {
  default: 'bg-[rgba(25,20,50,0.5)] border border-[rgba(140,60,240,0.2)] shadow-md shadow-primary-purple-500/5 backdrop-blur-sm',
  bordered: 'border border-[rgba(54,164,255,0.2)] backdrop-blur-sm bg-[rgba(20,25,50,0.4)] shadow-md shadow-primary-blue-500/5',
  filled: 'bg-[rgba(15,25,45,0.6)] backdrop-blur-sm border border-[rgba(12,230,158,0.2)] shadow-md shadow-primary-green-500/5',
  gradient: 'bg-gradient-to-br from-[rgba(90,30,170,0.3)] to-[rgba(30,120,220,0.3)] backdrop-blur-sm border border-[rgba(100,70,220,0.15)] shadow-md shadow-primary-purple-500/5',
};

const iconBgClasses = {
  purple: 'bg-[rgba(90,30,180,0.3)] text-primary-purple-300 border border-primary-purple-700/20',
  blue: 'bg-[rgba(20,80,200,0.3)] text-primary-blue-300 border border-primary-blue-700/20',
  green: 'bg-[rgba(20,150,100,0.3)] text-primary-green-300 border border-primary-green-700/20',
  gradient: 'bg-gradient-to-r from-primary-purple-500 via-primary-blue-500 to-primary-green-500 text-white',
};

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  variant = 'default',
  iconBackground = 'purple',
  className,
}) => {
  return (
    <motion.div
      className={cn(
        'rounded-2xl p-7 transition-all h-full flex flex-col relative overflow-hidden group',
        variantClasses[variant],
        className
      )}
      initial="initial"
      whileHover="hover"
      variants={cardHover}
    >
      {/* Enhanced background glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-purple-500/0 via-transparent to-primary-blue-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* Enhanced decorative corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-primary-purple-500/30 rounded-bl-[50px] -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Enhanced bottom decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-primary-purple-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-1 group-hover:translate-y-0"></div>
      
      {/* Icon with enhanced background */}
      {icon && (
        <div className="mb-6 relative flex justify-center md:justify-start">
          <div className={cn(
            'w-16 h-16 rounded-2xl mb-5 flex items-center justify-center relative z-10 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary-purple-500/10 group-hover:scale-105',
            iconBgClasses[iconBackground]
          )}>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 0 }}
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {icon}
            </motion.div>
          </div>
          
          {/* Enhanced decorative elements behind icon */}
          <motion.div 
            className="absolute w-3 h-3 rounded-full bg-primary-purple-500/40 -left-1 top-1/2 transform -translate-y-1/2 md:block hidden"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute w-6 h-1 rounded-full bg-primary-blue-500/40 left-10 -bottom-1"
            animate={{
              width: [24, 30, 24],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute w-2 h-2 rounded-full bg-primary-green-500/40 right-0 top-0"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </div>
      )}
      
      {/* Enhanced content */}
      <div className="flex-grow flex flex-col">
        <Typography
          as="h3"
          variant="h4"
          className="mb-3 font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-purple-300 group-hover:to-primary-blue-300 transition-colors duration-300 text-center md:text-left"
        >
          {title}
        </Typography>
        
        <Typography
          color="muted"
          className="mt-1 flex-grow text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-center md:text-left"
        >
          {description}
        </Typography>
        
        {/* Enhanced indicator for hover */}
        <div className="mt-6 flex items-center justify-center md:justify-start text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">
          <span className="bg-gradient-to-r from-primary-purple-400 to-primary-blue-400 bg-clip-text text-transparent">Learn more</span>
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="url(#learnMoreGradient)" 
            className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1"
          >
            <defs>
              <linearGradient id="learnMoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#843dff" />
                <stop offset="100%" stopColor="#36a4ff" />
              </linearGradient>
            </defs>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </motion.svg>
        </div>
      </div>
    </motion.div>
  );
}; 