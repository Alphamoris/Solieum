"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from '../atoms/Container';
import { Heading, Text } from '../atoms/Typography';
import { Button } from '../atoms/Button';
import { LogoBackground } from '../atoms/LogoBackground';

export const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[rgba(15,10,40,0.95)] via-[rgba(20,15,50,0.95)] to-[rgba(8,15,35,0.95)] flex justify-center items-center"
    >
      {/* Divider between sections */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-blue-500/30 to-transparent"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      
      {/* Background glow elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-purple-500/10 blur-[100px] rounded-full"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-blue-500/10 blur-[100px] rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-green-500/5 blur-[120px] rounded-full"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-1/4 right-10 w-32 h-32 rounded-full bg-primary-blue-500/5 border border-primary-blue-500/10"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-10 w-24 h-24 rounded-full bg-primary-purple-500/5 border border-primary-purple-500/10"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      
      {/* Floating decorative shapes */}
      <motion.div 
        className="absolute top-20 left-[5%] w-3 h-3 bg-primary-purple-400/30 rounded-full hidden md:block"
        animate={{ y: [0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute top-40 right-[15%] w-2 h-2 bg-primary-blue-400/30 rounded-full hidden md:block"
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-[10%] w-4 h-4 bg-primary-green-400/30 rounded-full hidden md:block"
        animate={{ y: [0, 12, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      {/* Background logo */}
      <LogoBackground size={600} opacity={0.04} />
      
      <Container className="relative z-10 mx-auto flex flex-col items-center justify-center">
        <motion.div 
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center"
          >
            <Text
              as="p"
              className="text-primary-green-300 font-medium mb-3 uppercase tracking-wide bg-primary-green-500/10 inline-block px-4 py-1 rounded-full border border-primary-green-500/20"
            >
              Network Performance
            </Text>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <Heading 
              as="h2" 
              level="h2" 
              color="gradient-tri"
              className="mb-6 text-center"
            >
              Setting New Standards in Scalability
            </Heading>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center"
          >
            <Text
              className="text-gray-300 max-w-2xl mx-auto text-center"
            >
              Experience unprecedented transaction throughput and near-zero latency with Solieum&apos;s cutting-edge Layer 2 protocol.
            </Text>
          </motion.div>
        </motion.div>
        
        {/* Decorative line */}
        <motion.div 
          className="w-full h-px max-w-sm mx-auto mb-16 bg-gradient-tri"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 w-full max-w-5xl mx-auto">
          {[
            { 
              value: '150,000+', 
              label: 'Transactions Per Second', 
              color: 'bg-gradient-to-br from-primary-purple-500/20 to-primary-blue-500/20',
              borderColor: 'border-primary-purple-500/20',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-purple-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              ),
              valueColor: 'text-primary-purple-300',
            },
            { 
              value: '0.5s', 
              label: 'Average Finality Time', 
              color: 'bg-gradient-to-br from-primary-blue-500/20 to-primary-green-500/20',
              borderColor: 'border-primary-blue-500/20',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-blue-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              valueColor: 'text-primary-blue-300',
            },
            { 
              value: '99.99%', 
              label: 'Network Uptime', 
              color: 'bg-gradient-to-br from-primary-green-500/20 to-primary-purple-500/20',
              borderColor: 'border-primary-green-500/20',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-green-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              valueColor: 'text-primary-green-300',
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className={`${stat.color} rounded-xl p-6 border ${stat.borderColor} backdrop-blur-sm flex flex-col items-center justify-center relative group shadow-md hover:shadow-glow-tri`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              whileHover={{ y: -5 }}
            >
              {/* Top pill indicator with pulse */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-[rgba(20,20,40,0.6)] border border-white/10 px-3 py-1 rounded-full flex items-center">
                {stat.icon}
                <div className="ml-2 w-2 h-2 rounded-full bg-primary-green-500 relative">
                  <span className="absolute inset-0 bg-primary-green-500 rounded-full animate-ping opacity-75"></span>
                </div>
              </div>
              
              {/* Content */}
              <p className={`text-4xl md:text-5xl font-bold mb-2 ${stat.valueColor} text-center`}>
                {stat.value}
              </p>
              <p className="text-gray-300 text-center">
                {stat.label}
              </p>
              
              {/* Decorative bottom line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-tri opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button
            variant="gradient-tri"
            size="lg"
            href="/technology"
            className="w-full md:w-auto"
          >
            View Technical Details
          </Button>
          
          <Text className="text-gray-400 text-center md:text-left flex items-center">
            <span className="w-2 h-2 rounded-full bg-gradient-tri mr-2"></span>
            Enterprise-grade performance with Solana&apos;s security guarantees
          </Text>
        </motion.div>
      </Container>
    </section>
  );
}; 