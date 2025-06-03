"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import { FeatureCard } from '../molecules/FeatureCard';
import { staggerContainer, listItem } from '@/app/lib/animations/motion-variants';
import { cn } from '@/app/styles/utils';

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
  iconBackground?: 'purple' | 'blue' | 'green' | 'gradient';
}

interface FeaturesSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  features: Feature[];
  className?: string;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  title,
  subtitle,
  description,
  features,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [particles, setParticles] = useState<React.ReactNode[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  
  // Generate dynamic particle animations - only run on client side
  useEffect(() => {
    setIsMounted(true);
    const generatedParticles = [];
    const colors = ['#843dff', '#36a4ff', '#0ce69e'];
    
    // Generate fewer particles for better performance (15 instead of 30)
    for (let i = 0; i < 15; i++) {
      const size = Math.random() * 3 + 1; // Smaller size range
      const color = colors[Math.floor(Math.random() * colors.length)];
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const duration = Math.random() * 10 + 10; // Slightly shorter animations
      const delay = Math.random() * 3;
      
      generatedParticles.push(
        <motion.div
          key={i}
          className="absolute rounded-full z-0"
          style={{
            width: size,
            height: size,
            backgroundColor: color,
            left,
            top,
            opacity: 0.4,
          }}
          animate={{
            y: [Math.random() * 10, Math.random() * -20, Math.random() * 10],
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration,
            delay,
            ease: "easeInOut",
          }}
        />
      );
    }
    
    setParticles(generatedParticles);
  }, []);
  
  return (
    <section className={cn('relative overflow-hidden md:py-32', className)}>
      {/* Enhanced background with glass effect */}
      <div className="absolute inset-0 bg-[rgba(15,12,35,0.85)] backdrop-blur-sm -z-10"></div>
      
      {/* Animated particle background - only render on client */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden -z-5">
          {particles}
        </div>
      )}
      
      {/* Enhanced gradient lines */}
      <div className="absolute top-0 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-primary-blue-500/50 to-transparent -z-5"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-primary-purple-500/50 to-transparent -z-5"></div>
      
      {/* Animated geometric shapes */}
      <motion.div
        className="absolute top-10 right-10 w-40 h-40 border-2 border-primary-purple-500/10 rounded-full -z-5"
        animate={{
          rotate: [0, 360],
          borderColor: ['rgba(132, 61, 255, 0.1)', 'rgba(54, 164, 255, 0.1)', 'rgba(12, 230, 158, 0.1)', 'rgba(132, 61, 255, 0.1)']
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-10 w-24 h-24 border-2 border-primary-blue-500/10 rounded-lg rotate-45 -z-5"
        animate={{
          rotate: [45, 405],
          borderColor: ['rgba(54, 164, 255, 0.1)', 'rgba(12, 230, 158, 0.1)', 'rgba(132, 61, 255, 0.1)', 'rgba(54, 164, 255, 0.1)']
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      />
      
      {/* Pulsing glow spots */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full -z-10"
        animate={{
          background: [
            'radial-gradient(circle, rgba(132, 61, 255, 0.05), transparent 70%)',
            'radial-gradient(circle, rgba(132, 61, 255, 0.1), transparent 70%)',
            'radial-gradient(circle, rgba(132, 61, 255, 0.05), transparent 70%)',
          ],
          scale: [1, 1.2, 1]
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full -z-10"
        animate={{
          background: [
            'radial-gradient(circle, rgba(12, 230, 158, 0.05), transparent 70%)',
            'radial-gradient(circle, rgba(12, 230, 158, 0.1), transparent 70%)',
            'radial-gradient(circle, rgba(12, 230, 158, 0.05), transparent 70%)',
          ],
          scale: [1, 1.1, 1]
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 px-4 sm:px-6 relative">
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <Typography
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple-300 via-primary-blue-300 to-primary-green-300 font-semibold mb-3 tracking-wide uppercase text-center"
              >
                {subtitle}
              </Typography>
            </motion.div>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center"
          >
            <Typography
              as="h2"
              variant="h2"
              className="mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-purple-200 via-white to-primary-blue-200 text-center"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundImage: "linear-gradient(to right, var(--color-primary-purple-200), white, var(--color-primary-blue-200))"
              }}
            >
              {title}
            </Typography>
          </motion.div>
          
          {description && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center text-center"
            >
              <Typography
                variant="lead"
                color="muted"
                className="max-w-2xl mx-auto text-gray-300 text-center"
              >
                {description}
              </Typography>
            </motion.div>
          )}
          
          {/* Decorative line with animated gradient */}
          <motion.div 
            className="w-full h-px max-w-sm mx-auto mb-16 md:mb-20 overflow-hidden"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div 
              className="w-full h-full bg-gradient-to-r from-primary-purple-500 via-primary-blue-500 to-primary-green-500"
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
        
        <motion.div
          ref={containerRef}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-6"
        >
          {features.map((feature, index) => {
            // Define a more vibrant color for each feature based on index
            const iconBg = index % 3 === 0 ? 'purple' : 
                          index % 3 === 1 ? 'blue' : 'green';
            
            return (
              <motion.div
                key={index}
                variants={listItem}
                custom={index * 0.1}
                className="h-full"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  iconBackground={feature.iconBackground || iconBg}
                  variant={index % 3 === 0 ? 'default' : index % 3 === 1 ? 'filled' : 'gradient'}
                  className="h-full"
                />
              </motion.div>
            );
          })}
        </motion.div>
        
        
      </Container>
    </section>
  );
}; 