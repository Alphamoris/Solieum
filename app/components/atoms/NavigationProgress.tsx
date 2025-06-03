"use client";

import React, { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export const NavigationProgress = () => {
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    const handleRouteChangeStart = () => {
      setIsNavigating(true);
      setProgress(0);
      
      interval = setInterval(() => {
        setProgress(prev => {
          // Slow down progress as it approaches 90%
          if (prev >= 90) {
            return prev;
          } else if (prev >= 80) {
            return prev + 0.2;
          } else if (prev >= 70) {
            return prev + 0.5;
          } else {
            return prev + 2;
          }
        });
      }, 50);
    };
    
    // Listen for click events on links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && 
          link.href && 
          !link.target && 
          !link.download && 
          !link.rel?.includes('external') &&
          link.href.includes(window.location.origin)) {
        handleRouteChangeStart();
      }
    };
    
    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
      clearInterval(interval);
    };
  }, []);
  
  // Reset progress when route changes
  useEffect(() => {
    if (isNavigating) {
      setProgress(100);
      setTimeout(() => {
        setIsNavigating(false);
        setProgress(0);
      }, 200);
    }
  }, [pathname, searchParams, isNavigating]);

  if (!isNavigating) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[9999]">
      <div 
        className="h-full bg-gradient-to-r from-primary-purple-500 via-primary-blue-500 to-primary-green-500 transition-all ease-out duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}; 