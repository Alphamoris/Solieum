"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Footer } from '../organisms/Footer';
import { Navbar } from '../organisms/Navbar';
import { cn } from '@/app/styles/utils';
import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ScrollToTopButton } from '../atoms/ScrollToTopButton';
import { NavigationProgress } from '../atoms/NavigationProgress';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  withFooter?: boolean;
  withNavbar?: boolean;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  className,
  withFooter = true,
  withNavbar = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  // Mouse tracking with smooth physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Add a state variable to track client-side mounting
  const [isMounted, setIsMounted] = useState(false);
  
  // Generate particles for the dynamic starfield
  const particleCount = 80;
  const particles = Array.from({ length: particleCount }).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    speed: Math.random() * 40 + 10,
    delay: Math.random() * 5,
    color: Math.floor(Math.random() * 3), // 0: purple, 1: blue, 2: green
  }));
  
  useEffect(() => {
    // Set mounted state to true once component mounts on client
    setIsMounted(true);
    
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      if (containerRef.current) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        containerRef.current.style.setProperty('--mouse-x', `${x}`);
        containerRef.current.style.setProperty('--mouse-y', `${y}`);
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);
  
  // Generate SVG paths for the flowing curves
  const generateFlowingPath = (index: number) => {
    const basePathPoints = [
      [0.1, 0.3],
      [0.3, 0.1],
      [0.5, 0.4],
      [0.7, 0.2],
      [0.9, 0.5],
      [0.7, 0.7],
      [0.5, 0.6],
      [0.3, 0.8],
      [0.1, 0.7],
    ];
    
    // Slightly vary the path for each instance
    const pathPoints = basePathPoints.map(([x, y]) => {
      const variance = 0.1;
      return [
        x + (Math.random() * variance - variance / 2) * (index % 2 === 0 ? 1 : -1),
        y + (Math.random() * variance - variance / 2) * (index % 2 === 0 ? -1 : 1),
      ];
    });
    
    // Create SVG path string
    return `M${pathPoints.map(([x, y]) => `${x * dimensions.width},${y * dimensions.height}`).join(' L')}`;
  };
  
  // Generate data flow lines (moved out of render to avoid different values during hydration)
  const dataFlowLines = [...Array(15)].map((_, i) => {
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const length = Math.random() * 20 + 5;
    const angle = Math.random() * 360;
    const color = i % 3 === 0 
      ? 'rgba(220, 31, 255, 0.3)' 
      : i % 3 === 1 
        ? 'rgba(3, 225, 255, 0.3)' 
        : 'rgba(0, 255, 163, 0.3)';
    
    return { startX, startY, length, angle, color, duration: Math.random() * 2 + 2, delay: Math.random() * 5 };
  });
  
  return (
    <div 
      ref={containerRef}
      className={cn(
        "min-h-screen flex flex-col relative overflow-hidden",
        className
      )}
    >
      {/* Base background */}
      <div className="fixed inset-0 bg-black -z-50"></div>
      
      {/* Dynamic noise texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none -z-40 mix-blend-soft-light">
        <svg width="100%" height="100%" className="opacity-20">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
      
      {/* Dynamic flow fields - Liquid-like animations */}
      <div className="fixed inset-0 -z-40">
        <svg 
          width="100%" 
          height="100%" 
          className="w-full h-full"
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(220, 31, 255, 0.15)" />
              <stop offset="50%" stopColor="rgba(3, 225, 255, 0.12)" />
              <stop offset="100%" stopColor="rgba(0, 255, 163, 0.15)" />
            </linearGradient>
            <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 255, 163, 0.12)" />
              <stop offset="50%" stopColor="rgba(220, 31, 255, 0.10)" />
              <stop offset="100%" stopColor="rgba(3, 225, 255, 0.14)" />
            </linearGradient>
            <linearGradient id="gradient3" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="rgba(3, 225, 255, 0.12)" />
              <stop offset="50%" stopColor="rgba(0, 255, 163, 0.10)" />
              <stop offset="100%" stopColor="rgba(220, 31, 255, 0.14)" />
            </linearGradient>
            
            {/* Animated filters */}
            <filter id="glow1" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="20" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="glow2" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="40" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Flowing curves - These create the liquid-like effect */}
          <g filter="url(#glow1)">
            {[...Array(3)].map((_, i) => (
              <motion.path
                key={`flow-path-${i}`}
                d={generateFlowingPath(i)}
                fill="none"
                stroke={`url(#gradient${i+1})`}
                strokeWidth={i === 1 ? 3 : 2}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: 0.7,
                  pathOffset: [0, 1],
                }}
                transition={{
                  pathLength: { duration: 3, ease: "easeInOut" },
                  opacity: { duration: 1, ease: "easeIn" },
                  pathOffset: { 
                    repeat: Infinity, 
                    duration: 20 + i * 5, 
                    ease: "linear",
                    repeatType: "loop"
                  }
                }}
              />
            ))}
          </g>
        </svg>
      </div>
      
      {/* Animated light beams */}
      <div className="fixed inset-0 -z-30 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-20"
          style={{
            background: `radial-gradient(
              circle at ${useTransform(smoothMouseX, [0, dimensions.width], ['0%', '100%'])} 
              ${useTransform(smoothMouseY, [0, dimensions.height], ['0%', '100%'])}, 
              rgba(220, 31, 255, 0.3) 0%, 
              transparent 70%
            )`,
          }}
        />
        
        {/* Dynamic light beams */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`beam-${i}`}
            className="absolute"
            style={{
              width: '100%',
              height: '2px',
              background: i === 0 
                ? 'linear-gradient(90deg, transparent, rgba(220, 31, 255, 0.5), transparent)'
                : i === 1 
                  ? 'linear-gradient(90deg, transparent, rgba(3, 225, 255, 0.5), transparent)'
                  : 'linear-gradient(90deg, transparent, rgba(0, 255, 163, 0.5), transparent)',
              top: `${(i + 1) * 25}%`,
              opacity: 0.4,
              filter: 'blur(3px)',
              boxShadow: i === 0 
                ? '0 0 20px rgba(220, 31, 255, 0.5)' 
                : i === 1 
                  ? '0 0 20px rgba(3, 225, 255, 0.5)'
                  : '0 0 20px rgba(0, 255, 163, 0.5)',
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              x: { 
                repeat: Infinity, 
                duration: 8 + i * 4, 
                ease: "easeInOut",
                repeatType: "loop",
                repeatDelay: 5,
              },
              opacity: {
                repeat: Infinity,
                duration: 8 + i * 4,
                ease: "easeInOut",
                repeatType: "loop",
                repeatDelay: 5,
                times: [0, 0.5, 1]
              }
            }}
          />
        ))}
      </div>
      
      {/* Animated interactive particles - Only render on client side */}
      {isMounted && (
        <div className="fixed inset-0 -z-30 overflow-hidden">
          {particles.map((particle, i) => (
            <motion.div
              key={`particle-${i}`}
              className={`absolute rounded-full ${
                particle.color === 0 
                  ? 'bg-primary-purple-500' 
                  : particle.color === 1 
                    ? 'bg-primary-blue-500' 
                    : 'bg-primary-green-500'
              }`}
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                filter: `blur(${particle.size > 2 ? '1px' : '0'})`,
                boxShadow: particle.color === 0 
                  ? '0 0 10px rgba(220, 31, 255, 0.8)' 
                  : particle.color === 1 
                    ? '0 0 10px rgba(3, 225, 255, 0.8)'
                    : '0 0 10px rgba(0, 255, 163, 0.8)',
                opacity: 0, // Start with opacity 0 to match initial
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                ease: "easeOut",
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: Math.random() * 10 + 10
              }}
            />
          ))}
        </div>
      )}
      
      {/* Interactive hexagon grid */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <svg width="100%" height="100%" className="opacity-20">
          <pattern id="hexagons" width="50" height="50" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <path 
              d="M12.5 0L25 6.25V18.75L12.5 25L0 18.75V6.25L12.5 0Z" 
              fill="none" 
              stroke="rgba(255, 255, 255, 0.1)" 
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>
      
      {/* Pulsing gradient circles */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <motion.div
          className="absolute w-[60vw] h-[60vw] rounded-full opacity-10 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(220, 31, 255, 0.3) 0%, transparent 70%)',
            top: useTransform(smoothMouseY, [0, dimensions.height], ['0%', '60%']),
            left: useTransform(smoothMouseX, [0, dimensions.width], ['0%', '60%']),
            translateX: '-30%',
            translateY: '-30%',
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            scale: {
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
            }
          }}
        />
        
        <motion.div
          className="absolute w-[40vw] h-[40vw] rounded-full opacity-10 blur-[80px]"
          style={{
            background: 'radial-gradient(circle, rgba(3, 225, 255, 0.3) 0%, transparent 70%)',
            bottom: useTransform(smoothMouseY, [0, dimensions.height], ['60%', '0%']),
            right: useTransform(smoothMouseX, [0, dimensions.width], ['60%', '0%']),
            translateX: '30%',
            translateY: '30%',
          }}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            scale: {
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
              delay: 1,
            }
          }}
        />
        
        <motion.div
          className="absolute w-[30vw] h-[30vw] rounded-full opacity-10 blur-[60px]"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 163, 0.3) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            scale: [1, 1.4, 1],
          }}
          transition={{
            scale: {
              repeat: Infinity,
              duration: 12,
              ease: "easeInOut",
              delay: 2,
            }
          }}
        />
      </div>
      
      {/* Dynamic data flow lines */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {isMounted && dataFlowLines.map((line, i) => (
          <motion.div
            key={`data-line-${i}`}
            className="absolute h-[1px] origin-left"
            style={{
              left: `${line.startX}%`,
              top: `${line.startY}%`,
              width: `${line.length}%`,
              background: `linear-gradient(to right, ${line.color}, transparent)`,
              rotate: `${line.angle}deg`,
              filter: 'blur(0.5px)',
            }}
            animate={{
              opacity: [0, 0.7, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              opacity: {
                repeat: Infinity,
                duration: line.duration,
                ease: "easeInOut",
                delay: line.delay,
              },
              scaleX: {
                repeat: Infinity,
                duration: line.duration,
                ease: "easeOut",
                delay: line.delay,
              }
            }}
          />
        ))}
      </div>
      
      {/* Main content */}
      {withNavbar && <Navbar />}
      <main className={cn(
        "flex-grow z-10", 
        !isHomePage && "flex flex-col items-center justify-center"
      )} style={{ marginTop: '2rem' }}>
        <div className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8",
          isHomePage ? "max-w-7xl" : "max-w-5xl w-full"
        )}>
          {children}
        </div>
      </main>
      {withFooter && <Footer />}
      
      {/* Scroll to top button */}
      <ScrollToTopButton />
      
      {/* Navigation Progress */}
      <NavigationProgress />
    </div>
  );
}; 