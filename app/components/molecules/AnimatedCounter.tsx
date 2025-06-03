"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { cn } from '@/app/styles/utils';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  textSize?: 'default' | 'large' | 'xl' | '2xl' | '3xl';
  textColor?: 'default' | 'primary' | 'secondary' | 'gradient';
  textWeight?: 'normal' | 'medium' | 'semibold' | 'bold';
}

const textSizeClasses = {
  default: 'text-2xl',
  large: 'text-3xl',
  xl: 'text-4xl',
  '2xl': 'text-5xl',
  '3xl': 'text-6xl',
};

const textColorClasses = {
  default: 'text-foreground',
  primary: 'text-primary-purple-500',
  secondary: 'text-primary-blue-500',
  gradient: 'text-transparent bg-clip-text bg-gradient-purple-blue',
};

const textWeightClasses = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  duration = 2000,
  className,
  textSize = 'xl',
  textColor = 'default',
  textWeight = 'bold',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = value;
    const incrementTime = duration / end;
    
    // Don't run if value is zero
    if (end === 0) return;
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    
    return () => {
      clearInterval(timer);
    };
  }, [isInView, value, duration]);
  
  return (
    <div ref={ref} className={cn('flex items-center justify-center', className)}>
      <span
        className={cn(
          textSizeClasses[textSize],
          textColorClasses[textColor],
          textWeightClasses[textWeight]
        )}
      >
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </span>
    </div>
  );
}; 