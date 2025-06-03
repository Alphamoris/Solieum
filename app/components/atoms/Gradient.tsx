"use client";

import React from 'react';
import { cn } from '@/app/styles/utils';

interface GradientProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'purple-blue' | 'blue-purple' | 'purple-green' | 'blue-green';
  intensity?: 'low' | 'medium' | 'high';
  animated?: boolean;
  blur?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
  size?: 'sm' | 'md' | 'lg' | 'full';
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  colors?: string[];
  width?: number;
  height?: number;
}

const variantClasses = {
  'purple-blue': 'bg-gradient-purple-blue',
  'blue-purple': 'bg-gradient-blue-purple',
  'purple-green': 'bg-gradient-purple-green',
  'blue-green': 'bg-gradient-blue-green',
};

const intensityClasses = {
  low: 'opacity-10',
  medium: 'opacity-20',
  high: 'opacity-30',
};

const blurClasses = {
  none: '',
  sm: 'blur-sm',
  md: 'blur',
  lg: 'blur-lg',
  xl: 'blur-xl',
};

const sizeClasses = {
  sm: 'w-[200px] h-[200px]',
  md: 'w-[400px] h-[400px]',
  lg: 'w-[600px] h-[600px]',
  full: 'w-full h-full',
};

const positionClasses = {
  'top': 'top-0 left-1/2 -translate-x-1/2',
  'bottom': 'bottom-0 left-1/2 -translate-x-1/2',
  'left': 'left-0 top-1/2 -translate-y-1/2',
  'right': 'right-0 top-1/2 -translate-y-1/2',
  'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  'top-left': 'top-0 left-0',
  'top-right': 'top-0 right-0',
  'bottom-left': 'bottom-0 left-0',
  'bottom-right': 'bottom-0 right-0',
};

export const Gradient = React.forwardRef<HTMLDivElement, GradientProps>(
  ({ 
    className, 
    variant = 'purple-blue', 
    intensity = 'medium', 
    animated = true, 
    blur = 'md', 
    opacity,
    size = 'lg',
    position = 'center',
    colors,
    width,
    height,
    style,
    ...props 
  }, ref) => {
    const customOpacity = opacity !== undefined ? { opacity } : {};
    const customSize = (width || height) ? { 
      width: width ? `${width}px` : undefined,
      height: height ? `${height}px` : undefined
    } : {};
    
    const customGradient = colors ? {
      background: `linear-gradient(135deg, ${colors.join(', ')})`
    } : {};
    
    const animationClass = animated ? 'animate-gradient-slow' : '';
    
    return (
      <div
        ref={ref}
        className={cn(
          'absolute rounded-full',
          !colors && variantClasses[variant],
          !opacity && intensityClasses[intensity],
          blurClasses[blur],
          !(width || height) && sizeClasses[size],
          positionClasses[position],
          animationClass,
          className
        )}
        style={{
          ...style,
          ...customOpacity,
          ...customSize,
          ...customGradient
        }}
        {...props}
      />
    );
  }
);

Gradient.displayName = 'Gradient'; 