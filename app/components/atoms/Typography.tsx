"use client";

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/app/styles/utils';

type ColorScheme = 
  | 'default' 
  | 'muted' 
  | 'primary' 
  | 'secondary' 
  | 'accent' 
  | 'gradient' 
  | 'purple' 
  | 'blue' 
  | 'green' 
  | 'gradient-purple-blue' 
  | 'gradient-blue-green' 
  | 'gradient-purple-green' 
  | 'gradient-tri';

const headingVariants = cva('font-bold tracking-tight', {
  variants: {
    level: {
      h1: 'text-4xl md:text-5xl lg:text-6xl',
      h2: 'text-3xl md:text-4xl lg:text-5xl',
      h3: 'text-2xl md:text-3xl lg:text-4xl',
      h4: 'text-xl md:text-2xl lg:text-3xl',
      h5: 'text-lg md:text-xl lg:text-2xl',
      h6: 'text-base md:text-lg lg:text-xl',
    },
    colorScheme: {
      default: 'text-foreground',
      muted: 'text-neutral-400',
      primary: 'text-primary-purple-500',
      secondary: 'text-primary-blue-500',
      accent: 'text-secondary-orange-500',
      purple: 'text-primary-purple-400',
      blue: 'text-primary-blue-400',
      green: 'text-primary-green-400',
      gradient: 'text-transparent bg-clip-text bg-gradient-purple-blue',
      'gradient-purple-blue': 'text-transparent bg-clip-text bg-gradient-to-r from-primary-purple-400 to-primary-blue-400',
      'gradient-blue-green': 'text-transparent bg-clip-text bg-gradient-to-r from-primary-blue-400 to-primary-green-400',
      'gradient-purple-green': 'text-transparent bg-clip-text bg-gradient-to-r from-primary-purple-400 to-primary-green-400',
      'gradient-tri': 'text-transparent bg-clip-text bg-gradient-to-r from-primary-purple-400 via-primary-blue-400 to-primary-green-400',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
    },
  },
  defaultVariants: {
    level: 'h1',
    colorScheme: 'default',
    align: 'left',
    weight: 'bold',
  },
});

const textVariants = cva('', {
  variants: {
    variant: {
      default: 'text-base',
      lead: 'text-lg md:text-xl',
      large: 'text-lg',
      small: 'text-sm',
      muted: 'text-sm text-neutral-400',
      mono: 'font-mono text-sm',
      label: 'text-sm font-medium uppercase tracking-wider',
      body: 'text-base leading-relaxed',
      h1: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
      h2: 'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight',
      h3: 'text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight',
      h4: 'text-xl md:text-2xl lg:text-3xl font-bold tracking-tight',
      h5: 'text-lg md:text-xl lg:text-2xl font-bold tracking-tight',
      h6: 'text-base md:text-lg lg:text-xl font-bold tracking-tight',
    },
    colorScheme: {
      default: 'text-foreground',
      muted: 'text-neutral-400',
      primary: 'text-primary-purple-500',
      secondary: 'text-primary-blue-500',
      accent: 'text-secondary-orange-500',
      purple: 'text-primary-purple-400',
      blue: 'text-primary-blue-400',
      green: 'text-primary-green-400',
      gradient: 'text-transparent bg-clip-text bg-gradient-purple-blue',
      'gradient-purple-blue': 'text-transparent bg-clip-text bg-gradient-to-r from-primary-purple-400 to-primary-blue-400',
      'gradient-blue-green': 'text-transparent bg-clip-text bg-gradient-to-r from-primary-blue-400 to-primary-green-400',
      'gradient-purple-green': 'text-transparent bg-clip-text bg-gradient-to-r from-primary-purple-400 to-primary-green-400',
      'gradient-tri': 'text-transparent bg-clip-text bg-gradient-to-r from-primary-purple-400 via-primary-blue-400 to-primary-green-400',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    weight: {
      thin: 'font-thin',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    variant: 'default',
    colorScheme: 'default',
    align: 'left',
    weight: 'normal',
  },
});

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'>,
    Omit<VariantProps<typeof headingVariants>, 'colorScheme'> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: ColorScheme;
  colorScheme?: ColorScheme;
}

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'>,
    Omit<VariantProps<typeof textVariants>, 'colorScheme'> {
  as?: 'p' | 'span' | 'div';
  color?: ColorScheme;
  colorScheme?: ColorScheme;
}

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    Omit<VariantProps<typeof textVariants>, 'variant' | 'colorScheme'> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'label';
  variant?: 'default' | 'lead' | 'large' | 'small' | 'muted' | 'mono' | 'label' | 'body' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: ColorScheme;
  colorScheme?: ColorScheme;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className = 'text-center', level, color, colorScheme, align, weight, as, ...props }, ref) => {
    const Component = as || level || 'h1';
    return React.createElement(
      Component,
      {
        className: cn(headingVariants({ level, colorScheme: color || colorScheme, align, weight, className })),
        ref,
        ...props
      }
    );
  }
);

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, color, colorScheme, align, weight, as = 'p', ...props }, ref) => {
    const Component = as;
    return React.createElement(
      Component,
      {
        className: cn(textVariants({ variant, colorScheme: color || colorScheme, align, weight, className })),
        ref,
        ...props
      }
    );
  }
);

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = 'default', color, colorScheme, align, weight, as, ...props }, ref) => {
    const getElement = () => {
      if (as) return as;
      if (variant && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(variant)) return variant;
      return 'p';
    };
    
    const Component = getElement();
    
    return React.createElement(
      Component,
      {
        className: cn(textVariants({ 
          variant, 
          colorScheme: color || colorScheme, 
          align, 
          weight, 
          className 
        })),
        ref,
        ...props
      }
    );
  }
);

Heading.displayName = 'Heading';
Text.displayName = 'Text';
Typography.displayName = 'Typography'; 