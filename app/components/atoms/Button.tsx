"use client";

import React from 'react';
import Link from 'next/link';
import { cn } from '@/app/styles/utils';

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  variant?: 
    | 'default' 
    | 'outline' 
    | 'ghost' 
    | 'link' 
    | 'gradient' 
    | 'gradient-tri' 
    | 'gradient-blue-green' 
    | 'secondary' 
    | 'primary' 
    | 'primary-purple' 
    | 'primary-blue' 
    | 'primary-green';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  glow?: boolean;
}

// Define button variants using proper Tailwind classes
const variants = {
  default: 'bg-primary-purple-500 text-white hover:bg-primary-purple-600 shadow-sm shadow-primary-purple-500/20',
  outline: 'border border-primary-purple-400/30 text-primary-purple-300 hover:bg-primary-purple-500/10 hover:border-primary-purple-400/50',
  ghost: 'text-primary-purple-300 hover:bg-primary-purple-500/10',
  link: 'text-primary-purple-300 underline-offset-4 hover:underline',
  gradient: 'bg-gradient-purple-blue text-white hover:shadow-glow-purple',
  'gradient-tri': 'bg-gradient-tri text-white hover:shadow-glow-purple',
  'gradient-blue-green': 'bg-gradient-blue-green text-white hover:shadow-glow-blue',
  secondary: 'bg-primary-blue-500 text-white hover:bg-primary-blue-600 shadow-sm shadow-primary-blue-500/20',
  destructive: 'bg-red-500 text-white hover:bg-red-600',
  primary: 'bg-primary-purple-500 text-white hover:bg-primary-purple-600 shadow-sm shadow-primary-purple-500/20',
  'primary-purple': 'bg-primary-purple-500 text-white hover:bg-primary-purple-600 shadow-sm shadow-primary-purple-500/20',
  'primary-blue': 'bg-primary-blue-500 text-white hover:bg-primary-blue-600 shadow-sm shadow-primary-blue-500/20',
  'primary-green': 'bg-primary-green-500 text-white hover:bg-primary-green-600 shadow-sm shadow-primary-green-500/20',
};

const glowEffects = {
  default: 'shadow-glow-purple',
  outline: 'shadow-glow-purple',
  ghost: 'shadow-glow-purple',
  link: '',
  gradient: 'shadow-glow-purple',
  'gradient-tri': 'shadow-glow-tri',
  'gradient-blue-green': 'shadow-glow-blue',
  secondary: 'shadow-glow-blue',
  destructive: 'shadow-[0_0_15px_rgba(239,68,68,0.5)]',
  primary: 'shadow-glow-purple',
  'primary-purple': 'shadow-glow-purple',
  'primary-blue': 'shadow-glow-blue',
  'primary-green': 'shadow-glow-green',
};
  
const sizes = {
  sm: 'h-9 min-h-9 px-3 text-sm',
  md: 'h-10 min-h-10 px-4 py-2',
  lg: 'h-12 min-h-12 px-6 py-2 text-lg',
  xl: 'h-14 min-h-14 px-8 py-3 text-xl',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className = '', 
    variant = 'default', 
    size = 'md', 
    fullWidth = false, 
    isLoading, 
    leftIcon, 
    rightIcon, 
    href, 
    glow = false,
    children, 
    ...props 
  }, ref) => {
    // Use the cn utility correctly
    const buttonClasses = cn(
      'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-purple-500/50 focus-visible:ring-offset-2',
      'hover:scale-[1.02] active:scale-[0.98] touch-none',
      variants[variant],
      sizes[size],
      glow ? glowEffects[variant] : '',
      fullWidth ? 'w-full' : '',
      className
    );
    
    const content = (
      <>
        {isLoading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {leftIcon && !isLoading && <span className="mr-2">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </>
    );
    
    if (href) {
      return (
        <Link href={href} className={buttonClasses}>
          {content}
        </Link>
      );
    }
    
    return (
      <button
        className={buttonClasses}
        ref={ref}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, type ButtonProps }; 