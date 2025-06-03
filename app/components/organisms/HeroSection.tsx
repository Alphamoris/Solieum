"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '../atoms/Container';
import { Button } from '../atoms/Button';
import { Logo } from '../atoms/Logo';
import { LogoBackground } from '../atoms/LogoBackground';
import { cn } from '@/app/styles/utils';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  className?: string;
}

// Floating elements to add visual interest
const FloatingElements = () => {
  return (
    <>
      {/* Abstract floating shapes */}
      <motion.div 
        className="absolute w-16 h-16 rounded-full bg-primary-purple-600/20 blur-xl"
        style={{ top: '15%', left: '12%' }}
        animate={{ 
          y: [0, 20, 0], 
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 6,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute w-24 h-24 rounded-full bg-primary-blue-500/20 blur-xl"
        style={{ top: '55%', right: '8%' }}
        animate={{ 
          y: [0, -25, 0], 
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 8,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      <motion.div 
        className="absolute w-20 h-20 rounded-full bg-primary-green-500/20 blur-xl"
        style={{ bottom: '12%', left: '20%' }}
        animate={{ 
          y: [0, 15, 0], 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 7,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Line decorations */}
      <motion.div 
        className="absolute h-60 w-px bg-gradient-to-b from-transparent via-primary-purple-500/40 to-transparent"
        style={{ top: '5%', left: '25%' }}
        animate={{ 
          height: [220, 260, 220],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 5,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute h-px w-60 bg-gradient-to-r from-transparent via-primary-blue-500/40 to-transparent"
        style={{ top: '30%', right: '10%' }}
        animate={{ 
          width: [200, 240, 200],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 6,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Additional decorative elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-5 h-5 rotate-45 border-2 border-primary-purple-400/30"
        animate={{
          rotate: [45, 225, 45],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary-blue-500/30 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut"
        }}
      />
    </>
  );
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  primaryCta = { label: 'Get Started', href: '/contact' },
  secondaryCta = { label: 'Learn More', href: '/technology' },
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const [animationRun, setAnimationRun] = useState(false);
  
  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // Text animation with GSAP
  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current || typeof window === 'undefined' || animationRun) return;
    
    // Import GSAP and plugins dynamically
    const loadGSAP = async () => {
      try {
        // Dynamic imports
        const gsapModule = await import('gsap');
        const gsap = gsapModule.default;
        
        const ScrollTriggerModule = await import('gsap/ScrollTrigger');
        const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;
        
        const SplitTextModule = await import('gsap/SplitText');
        const SplitText = SplitTextModule.SplitText;
        
        // Register plugins
        gsap.registerPlugin(ScrollTrigger, SplitText);
        
        // Make sure refs are still valid after async imports
        if (!titleRef.current || !subtitleRef.current) return;
        
        // Split title text into chars for animation
        const titleSplit = new SplitText(titleRef.current, { type: 'chars,words' });
        const subtitleSplit = new SplitText(subtitleRef.current, { type: 'chars,words' });
        
        // Animate title chars
        gsap.from(titleSplit.chars, {
          opacity: 0,
          y: 20,
          rotateX: -90,
          stagger: 0.02,
          duration: 1,
          ease: 'back.out(1.7)',
          delay: 0.3,
        });
        
        // Animate subtitle chars with delay
        gsap.from(subtitleSplit.chars, {
          opacity: 0,
          y: 20,
          stagger: 0.01,
          duration: 0.8,
          ease: 'back.out(1.7)',
          delay: 1,
          onComplete: () => {
            setAnimationRun(true);
          }
        });
        
        return () => {
          if (titleSplit && titleSplit.revert) titleSplit.revert();
          if (subtitleSplit && subtitleSplit.revert) subtitleSplit.revert();
        };
      } catch (error) {
        console.error('GSAP animation error:', error);
      }
    };
    
    loadGSAP();
  }, [animationRun]);
  
  return (
    <section
      ref={containerRef}
      className={cn(
        'relative overflow-hidden pt-8 pb-24 md:pb-36 lg:pb-44 bg-gradient-to-b from-transparent via-[rgba(93,29,196,0.05)] to-transparent', 
        className
      )}
    >
      
      
      <LogoBackground size={800} opacity={0.025} className="hidden lg:block" />
      
      {/* Floating Elements */}
      <FloatingElements />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            className="text-center lg:text-left"
            style={{ y, opacity }}
          >
            <motion.div
              className="mb-4 inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center px-2 pe-3 py-1.5 text-xs font-medium rounded-full bg-primary-purple-500/15 text-primary-purple-300 border border-primary-purple-500/30 shadow-sm shadow-primary-purple-500/10">
                <span className="w-2 h-2 bg-primary-blue-500 me-1 rounded-full animate-pulse-slow"></span>
                {subtitle}
              </span>
            </motion.div>
            
            <motion.h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-purple-300 via-white to-primary-blue-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {title}
            </motion.h1>
            
            <motion.h2
              ref={subtitleRef}
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {description}
            </motion.h2>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button variant="ghost" size="lg" href={primaryCta.href}>
                {primaryCta.label}
              </Button>
              <Button variant="outline" size="lg" href={secondaryCta.href}>
                {secondaryCta.label}
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right Column: Large Logo Showcase */}
          <motion.div
            className="hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          >
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary-purple-500/30 via-primary-blue-500/30 to-primary-green-500/20 blur-xl"></div>
              
              {/* Animated ring */}
              <svg width="420" height="420" viewBox="0 0 420 420" className="absolute -inset-4">
                <defs>
                  <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#843dff" stopOpacity="0.7" />
                    <stop offset="50%" stopColor="#36a4ff" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#0ce69e" stopOpacity="0.7" />
                  </linearGradient>
                </defs>
                <circle 
                  cx="210" 
                  cy="210" 
                  r="200" 
                  fill="none" 
                  stroke="url(#ringGradient)" 
                  strokeWidth="2"
                  strokeDasharray="40 8"
                  className="animate-spin"
                  style={{ animationDuration: '60s' }}
                />
              </svg>
              
              {/* Orbiting dots */}
              <motion.div
                className="absolute w-5 h-5 rounded-full bg-primary-blue-500/80 shadow-md shadow-primary-blue-500/30"
                animate={{
                  x: [0, 120, 0, -120, 0],
                  y: [120, 0, -120, 0, 120],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear"
                }}
              />
              
              <motion.div
                className="absolute w-3 h-3 rounded-full bg-primary-purple-500/80 shadow-md shadow-primary-purple-500/30"
                animate={{
                  x: [0, -80, 0, 80, 0],
                  y: [-80, 0, 80, 0, -80],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 15,
                  ease: "linear"
                }}
              />
              
              <motion.div
                className="absolute w-4 h-4 rounded-full bg-primary-green-500/80 shadow-md shadow-primary-green-500/30"
                animate={{
                  x: [100, 0, -100, 0, 100],
                  y: [0, 100, 0, -100, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 25,
                  ease: "linear"
                }}
              />
              
              {/* Large logo */}
              <Logo variant="large" withText={false} className="scale-[2.5] transform-gpu" />
              
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}; 