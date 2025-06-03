"use client";

import React from 'react';
import { cn } from '@/app/styles/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'none';
  padding?: boolean;
  centered?: boolean;
}

const maxWidthClasses = {
  xs: 'max-w-[20rem]',
  sm: 'max-w-[36rem]',
  md: 'max-w-[48rem]',
  lg: 'max-w-[64rem]',
  xl: 'max-w-[80rem]',
  '2xl': 'max-w-[96rem]',
  full: 'max-w-full',
  none: ''
};

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, maxWidth = 'xl', padding = true, centered = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          maxWidthClasses[maxWidth],
          padding && '',
          centered && 'mx-auto',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container'; 