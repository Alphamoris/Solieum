"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import { fadeIn, slideInBottom } from '@/app/lib/animations/motion-variants';
import { cn } from '@/app/styles/utils';

interface TechSectionProps {
  className?: string;
}

export const TechSection: React.FC<TechSectionProps> = ({ className }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const techFeatures = [
    {
      title: "Zero-Knowledge Proofs",
      description: "Our Layer 2 solution utilizes advanced cryptographic techniques to enhance privacy while maintaining security and transparency.",
      delay: 0.1,
      color: "purple",
    },
    {
      title: "Parallel Transaction Processing",
      description: "Solieum processes transactions in parallel, significantly increasing throughput compared to sequential processing.",
      delay: 0.2,
      color: "blue",
    },
    {
      title: "State Channels",
      description: "Off-chain state channels enable instant transactions with minimal gas fees, settling on-chain only when necessary.",
      delay: 0.3,
      color: "green",
    },
    {
      title: "Optimistic Rollups",
      description: "Transactions are bundled and processed off-chain, with only the final state committed to the Solana blockchain.",
      delay: 0.4,
      color: "purple",
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      className={cn("overflow-hidden relative", className)}
    >
      {/* Static background elements (work on both server and client) */}
      <div className="absolute inset-0 bg-[rgba(15,10,40,0.3)] -z-10"></div>
      
      <div className="absolute inset-0 -z-5">
        <svg width="100%" height="100%" className="opacity-10">
          <pattern id="techDots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.3)" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#techDots)" />
        </svg>
      </div>
      
      {/* Dynamic gradient elements - only render on client */}
      {isMounted && (
        <>
          <motion.div 
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full"
            style={{ 
              background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(65, 105, 225, 0.2))',
              filter: 'blur(30px)'
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full"
            style={{ 
              background: 'linear-gradient(135deg, rgba(65, 105, 225, 0.2), rgba(12, 230, 158, 0.2))',
              filter: 'blur(30px)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          {/* Decorative elements */}
          <motion.div 
            className="absolute top-1/4 right-10 w-32 h-32 border border-primary-blue-500/20 rounded-full"
            animate={{
              rotate: [0, 180],
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear"
            }}
          />
          
          <motion.div 
            className="absolute bottom-1/4 left-10 w-24 h-24 border border-primary-purple-500/20 rounded-lg rotate-45"
            animate={{
              rotate: [45, 225],
              scale: [1, 0.95, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear"
            }}
          />
        </>
      )}
      
      <Container className="relative z-10">
        <motion.div
          initial={isMounted ? "hidden" : false}
          animate={isMounted && isInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Typography 
            as="h2" 
            variant="h2" 
            className="mb-4 bg-gradient-to-r from-primary-purple-400 via-primary-blue-400 to-primary-green-400 bg-clip-text text-transparent font-bold"
          >
            Advanced Technology Stack
          </Typography>
          <Typography as="p" variant="lead" className="max-w-3xl mx-auto text-gray-200">
            Solieum&apos;s technology combines cutting-edge cryptography, distributed systems, and blockchain innovations to create a seamless Layer 2 experience.
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={isMounted ? "hidden" : false}
              animate={isMounted && isInView ? "visible" : "hidden"}
              variants={slideInBottom}
              custom={feature.delay}
              className={cn(
                "rounded-2xl p-8 border border-primary-purple-500/20 transition-all duration-300 relative overflow-hidden group",
                feature.color === "purple" ? "bg-gradient-to-br from-[rgba(90,30,170,0.2)] to-[rgba(60,20,110,0.1)]" :
                feature.color === "blue" ? "bg-gradient-to-br from-[rgba(30,90,220,0.2)] to-[rgba(20,60,150,0.1)]" :
                "bg-gradient-to-br from-[rgba(20,150,100,0.2)] to-[rgba(10,120,80,0.1)]"
              )}
            >
              {/* Static elements for server side */}
              <div className="mb-3"></div>
              
              {/* Client-side animated elements */}
              {isMounted && (
                <>
                  {/* Animated highlight effect */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: feature.color === "purple" ? 
                        "linear-gradient(135deg, rgba(138, 43, 226, 0.1), transparent 70%)" :
                        feature.color === "blue" ? 
                        "linear-gradient(135deg, rgba(65, 105, 225, 0.1), transparent 70%)" :
                        "linear-gradient(135deg, rgba(12, 230, 158, 0.1), transparent 70%)"
                    }}
                  />
                  
                  {/* Animated border highlight */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-500 ease-in-out" style={{
                    background: feature.color === "purple" ? 
                      "linear-gradient(to right, transparent, rgba(138, 43, 226, 0.5), transparent)" :
                      feature.color === "blue" ? 
                      "linear-gradient(to right, transparent, rgba(65, 105, 225, 0.5), transparent)" :
                      "linear-gradient(to right, transparent, rgba(12, 230, 158, 0.5), transparent)"
                  }}></div>
                </>
              )}
              
              <Typography 
                as="h3" 
                variant="h3" 
                className={cn(
                  "mb-3 font-semibold",
                  feature.color === "purple" ? "text-primary-purple-300" :
                  feature.color === "blue" ? "text-primary-blue-300" :
                  "text-primary-green-300"
                )}
              >
                {feature.title}
              </Typography>
              <Typography as="p" variant="body" className="text-gray-300 group-hover:text-white transition-colors duration-300">
                {feature.description}
              </Typography>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={isMounted ? "hidden" : false}
          animate={isMounted && isInView ? "visible" : "hidden"}
          variants={fadeIn}
          custom={0.5}
          className="mt-16 rounded-3xl p-8 border-2 border-primary-blue-500/20 relative overflow-hidden group"
        >
          {/* Static background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(20,15,40,0.7)] to-[rgba(15,20,60,0.7)] -z-10"></div>
          <div className="absolute inset-0 opacity-5 -z-5"></div>
          
          {/* Animated elements - client side only */}
          {isMounted && (
            <motion.div 
              className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-1"
              animate={{
                background: [
                  'radial-gradient(circle at 0% 0%, rgba(132, 61, 255, 0.2), transparent 50%)',
                  'radial-gradient(circle at 100% 0%, rgba(54, 164, 255, 0.2), transparent 50%)',
                  'radial-gradient(circle at 100% 100%, rgba(12, 230, 158, 0.2), transparent 50%)',
                  'radial-gradient(circle at 0% 100%, rgba(132, 61, 255, 0.2), transparent 50%)',
                  'radial-gradient(circle at 0% 0%, rgba(132, 61, 255, 0.2), transparent 50%)'
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear"
              }}
            />
          )}
          
          <Typography as="h3" variant="h3" className="mb-4 text-center text-white font-semibold relative z-10">
            Architecture Overview
          </Typography>
          <div className="aspect-video rounded-xl overflow-hidden relative z-10 border border-white/10 bg-[rgba(20,15,40,0.5)] backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-purple-900/10 via-primary-blue-900/10 to-primary-green-900/10"></div>
            
            {/* Interactive architecture diagram placeholder with decorative elements */}
            <div className="flex flex-col items-center justify-center h-full p-4">
              <Typography as="p" variant="body" className="text-center text-gray-200 mb-4">
                Interactive architecture diagram will be displayed here
              </Typography>
              
              {/* Decorative diagram elements */}
              <div className="relative w-full max-w-md h-40">
                {/* Layer 1 */}
                <div className="absolute bottom-0 left-0 right-0 h-16 rounded-lg border border-primary-blue-500/20 bg-[rgba(15,25,50,0.3)] flex items-center justify-center">
                  <span className="text-primary-blue-300 text-sm font-medium">Solana Layer 1</span>
                </div>
                
                {/* Connecting lines - client-side only */}
                {isMounted && (
                  <>
                    <motion.div 
                      className="absolute left-1/2 bottom-16 w-px h-8 bg-gradient-to-t from-primary-blue-500/50 to-primary-purple-500/50"
                      animate={{ height: [20, 35, 20] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    />
                    <motion.div 
                      className="absolute left-1/4 bottom-16 w-px h-6 bg-gradient-to-t from-primary-blue-500/50 to-primary-purple-500/50"
                      animate={{ height: [15, 25, 15] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.3 }}
                    />
                    <motion.div 
                      className="absolute right-1/4 bottom-16 w-px h-6 bg-gradient-to-t from-primary-blue-500/50 to-primary-purple-500/50"
                      animate={{ height: [15, 25, 15] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.6 }}
                    />
                  </>
                )}
                
                {/* Layer 2 components */}
                <div className="absolute top-0 left-0 w-1/3 h-12 rounded-lg border border-primary-purple-500/20 bg-[rgba(40,20,80,0.3)] flex items-center justify-center transform -translate-x-1/4">
                  <span className="text-primary-purple-300 text-xs font-medium">ZK Proofs</span>
                </div>
                <div className="absolute top-0 left-1/2 w-1/3 h-12 rounded-lg border border-primary-purple-500/20 bg-[rgba(40,20,80,0.3)] flex items-center justify-center transform -translate-x-1/2">
                  <span className="text-primary-purple-300 text-xs font-medium">Optimistic Rollups</span>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-12 rounded-lg border border-primary-purple-500/20 bg-[rgba(40,20,80,0.3)] flex items-center justify-center transform translate-x-1/4">
                  <span className="text-primary-purple-300 text-xs font-medium">State Channels</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}; 