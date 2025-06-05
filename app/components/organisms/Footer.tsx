"use client";

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/app/styles/utils';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import { Logo } from '../atoms/Logo';
import { motion, useInView } from 'framer-motion';


interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterProps {
  className?: string;
  columns?: FooterColumn[];
  socialLinks?: SocialLink[];
}

export const Footer: React.FC<FooterProps> = ({
  className,
  columns = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#footer' },
        { label: 'Architecture', href: '#footer' },
        { label: 'Scalability', href: '#footer' },
        { label: 'Security', href: '#footer' },
        { label: 'Performance', href: '#footer' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#footer' },
        { label: 'API Reference', href: '#footer' },
        { label: 'Tutorials', href: '#footer' },
        { label: 'Blog', href: '#footer' },
        { label: 'FAQs', href: '#footer' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#footer' },
        { label: 'Careers', href: '#footer' },
        { label: 'Team', href: '#footer' },
        { label: 'Press Kit', href: '#footer' },
        { label: 'Contact', href: '#footer' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms of Service', href: '#footer' },
        { label: 'Privacy Policy', href: '#footer' },
        { label: 'Cookie Policy', href: '#footer' },
        { label: 'Licenses', href: '#footer' },
      ],
    },
  ],
  socialLinks = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      ),
      href: '#footer',
      label: 'Twitter',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      ),
      href: '#footer',
      label: 'Telegram',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      href: '#footer',
      label: 'LinkedIn',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
      href: '#footer',
      label: 'GitHub',
    },
    {
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-5 h-5"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      href: '#footer',
      label: 'Instagram',
    },
    
  ],
}) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: false, amount: 0.1 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [clientParticles, setClientParticles] = useState<React.ReactNode[]>([]);
  
  useEffect(() => {
    setIsClient(true);
    
    // Generate client-side particles
    const particles = [];
    for (let i = 0; i < 15; i++) {
      const size = Math.random() * 4 + 2;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = i * 0.2;
      const duration = Math.random() * 20 + 10;
      const color = i % 3 === 0 ? 'purple' : i % 3 === 1 ? 'blue' : 'green';
      
      particles.push(
        <motion.div
          key={`particle-${i}`}
          className={`absolute rounded-full pointer-events-none z-10 ${
            color === 'purple' ? 'bg-primary-purple-500' : 
            color === 'blue' ? 'bg-primary-blue-500' : 
            'bg-primary-green-500'
          }`}
          style={{
            width: size,
            height: size,
            left: `${x}%`,
            top: `${y}%`,
            boxShadow: color === 'purple' ? '0 0 10px rgba(220, 31, 255, 0.8)' :
                      color === 'blue' ? '0 0 10px rgba(3, 225, 255, 0.8)' :
                      '0 0 10px rgba(0, 255, 163, 0.8)',
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            y: {
              repeat: Infinity,
              duration: duration,
              delay: delay,
              ease: "easeInOut"
            },
            opacity: {
              repeat: Infinity,
              duration: duration,
              delay: delay,
              ease: "easeInOut"
            }
          }}
        />
      );
    }
    
    setClientParticles(particles);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Server-safe static decoration elements for initial render
  const staticDecorations = (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.97)] via-[rgba(25,10,60,0.98)] to-[rgba(0,0,0,0.97)] -z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-purple-500/40 via-primary-blue-500/60 to-primary-green-500/40"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </>
  );

  return (
    <footer id="footer" ref={footerRef} className={cn('relative py-16 overflow-hidden', className)}>
      {/* Static background elements (both server and client) */}
      {staticDecorations}
      
      {/* Interactive and animated elements (client-only) */}
      {isClient && (
        <>
          <motion.div 
            className="absolute w-[40vw] h-[40vw] rounded-full opacity-[0.07] blur-[100px] pointer-events-none -z-5"
            style={{
              background: 'radial-gradient(circle, rgba(220, 31, 255, 0.5) 0%, transparent 70%)',
              left: mousePosition.x - 300,
              top: mousePosition.y - 300,
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 30,
            }}
          />
          
          <motion.div 
            className="absolute -bottom-20 right-0 w-80 h-80 rounded-full bg-primary-blue-500/10 blur-3xl -z-5"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.2, 0.15],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 15,
              ease: "easeInOut" 
            }}
          />
          
          <motion.div 
            className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-primary-green-500/10 blur-3xl -z-5"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.15, 0.1],
              x: [0, 30, 0],
              y: [0, 40, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 18,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          {/* Client-side particles */}
          {clientParticles}
          
          {/* Decorative geometric elements */}
          <motion.div 
            className="absolute right-20 top-40 w-32 h-32 border border-primary-purple-500/20 rounded-full"
            style={{ 
              background: 'linear-gradient(135deg, rgba(220, 31, 255, 0.05) 0%, transparent 70%)' 
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.05, 1]
            }}
            transition={{
              rotate: { repeat: Infinity, duration: 60, ease: "linear" },
              scale: { repeat: Infinity, duration: 5, ease: "easeInOut" }
            }}
          />
          
          <motion.div 
            className="absolute left-20 bottom-40 w-24 h-24 border border-primary-blue-500/20 rounded-lg rotate-45"
            style={{ 
              background: 'linear-gradient(135deg, rgba(3, 225, 255, 0.05) 0%, transparent 70%)' 
            }}
            animate={{
              rotate: [45, 405],
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotate: { repeat: Infinity, duration: 50, ease: "linear" },
              scale: { repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }
            }}
          />
        </>
      )}
      
      <Container className="relative z-10">
        {/* Logo and company info section with enhanced animations */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-12  items-start mx-3"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="lg:w-1/3">
            <Link href="/" className="inline-block mb-6 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Logo variant="medium" />
              </motion.div>
            </Link>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography as="p" variant="body" className="text-gray-300 max-w-md mb-8">
                Building the future of Layer 2 infrastructure for the Solana ecosystem, enabling infinite scalability, zero downtime, and lower fees with a seamless developer and user experience.
              </Typography>
            </motion.div>
            
            {/* Enhanced social links */}
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl backdrop-blur-sm bg-[rgba(220,31,255,0.15)] hover:bg-[rgba(220,31,255,0.25)] text-white transition-all"
                  aria-label={link.label}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 0 15px rgba(220, 31, 255, 0.5)' 
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
            
            {/* CTA buttons */}
            <motion.div 
              className="flex items-center gap-4 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link 
                href="#footer" 
                className="px-5 py-3 text-sm bg-primary-purple-500/20 text-primary-purple-300 rounded-xl hover:bg-primary-purple-500/30 transition-colors hover:shadow-[0_0_15px_rgba(220,31,255,0.5)]"
              >
                Subscribe to newsletter
              </Link>
              <Link 
                href="#footer" 
                className="px-5 py-3 text-sm bg-primary-blue-500/20 text-primary-blue-300 rounded-xl hover:bg-primary-blue-500/30 transition-colors hover:shadow-[0_0_15px_rgba(3,225,255,0.5)]"
              >
                Whitepaper
              </Link>
            </motion.div>
          </div>
          
          {/* Enhanced link columns with staggered animations */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 lg:flex-1">
            {columns.map((column, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="col-span-1"
              >
                <Typography 
                  as="h3" 
                  variant="label" 
                  className={cn(
                    "mb-6 font-medium text-lg",
                    idx % 4 === 0 ? "text-primary-purple-300" :
                    idx % 4 === 1 ? "text-primary-blue-300" :
                    idx % 4 === 2 ? "text-primary-green-300" :
                    "text-primary-purple-300"
                  )}
                >
                  {column.title}
                </Typography>
                <ul className="space-y-4">
                  {column.links.map((link, linkIndex) => (
                    <motion.li 
                      key={linkIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 + linkIndex * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-primary-blue-300 transition-colors flex items-center group"
                      >
                        <div className={cn(
                          "w-2 h-2 rounded-full mr-3 transition-all",
                          idx % 4 === 0 ? "bg-primary-purple-500/50 group-hover:bg-primary-purple-500 group-hover:shadow-[0_0_8px_rgba(220,31,255,0.8)]" :
                          idx % 4 === 1 ? "bg-primary-blue-500/50 group-hover:bg-primary-blue-500 group-hover:shadow-[0_0_8px_rgba(3,225,255,0.8)]" :
                          idx % 4 === 2 ? "bg-primary-green-500/50 group-hover:bg-primary-green-500 group-hover:shadow-[0_0_8px_rgba(0,255,163,0.8)]" :
                          "bg-primary-purple-500/50 group-hover:bg-primary-purple-500 group-hover:shadow-[0_0_8px_rgba(220,31,255,0.8)]"
                        )}></div>
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Enhanced footer bottom with interactive elements */}
        <motion.div 
          className="pt-8 border-t border-[rgba(255,255,255,0.1)] flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div 
            className="text-center sm:text-left mb-6 sm:mb-0 relative"
            whileHover={{ scale: 1.02 }}
          >
            <Typography as="p" variant="small" className="text-gray-400">
              © {new Date().getFullYear()} Solieum Protocol. All rights reserved.
            </Typography>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Accessibility'].map((item, i) => (
              <motion.div
                key={`legal-${i}`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
              >
                <Link 
                  href="#footer" 
                  className={`text-sm text-gray-400 hover:${
                    i === 0 ? 'text-primary-purple-300' : 
                    i === 1 ? 'text-primary-blue-300' : 
                    i === 2 ? 'text-primary-green-300' : 
                    'text-primary-purple-300'
                  } transition-colors`}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}; 