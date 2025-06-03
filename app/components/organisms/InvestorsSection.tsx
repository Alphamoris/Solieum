"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import { fadeIn } from '@/app/lib/animations/motion-variants';
import { cn } from '@/app/styles/utils';
import { Gradient } from '../atoms/Gradient';
import { Button } from '../atoms/Button';

interface InvestorsSectionProps {
  className?: string;
}

export const InvestorsSection: React.FC<InvestorsSectionProps> = ({ className }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const investmentHighlights = [
    {
      metric: "1.2M+",
      label: "Transactions Per Second",
      description: "Solieum's Layer 2 solution dramatically increases Solana's already impressive TPS."
    },
    {
      metric: "$50M+",
      label: "Total Value Locked Target",
      description: "Projected TVL within first 6 months of mainnet launch based on partner commitments."
    },
    {
      metric: "200+",
      label: "Ecosystem Partners",
      description: "Growing network of DeFi protocols, gaming platforms, and enterprise partners."
    },
    {
      metric: "10x",
      label: "Cost Reduction",
      description: "Average reduction in transaction fees compared to Layer 1 operations."
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className={cn(" overflow-hidden relative", className)}
    >
      <Gradient
        variant="purple-blue"
        position="top-left"
        size="lg"
        className="opacity-15 -z-10"
        blur="lg"
      />
      <Gradient
        variant="blue-green"
        position="bottom-right"
        size="md"
        className="opacity-10 -z-10"
        blur="md"
      />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <Typography 
              as="span" 
              variant="label" 
              className="text-blue-500 mb-2 block"
            >
              Investment Opportunity
            </Typography>
            <Typography 
              as="h2" 
              variant="h2" 
              className="mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"
            >
              Join the Future of Solana Infrastructure
            </Typography>
            <Typography as="p" variant="lead" className="mb-6">
              Solieum represents a unique opportunity to invest in critical blockchain infrastructure that will power the next generation of Solana applications.
            </Typography>
            
            <div className="space-y-4">
              {[
                "Strategic positioning in the rapidly growing Solana ecosystem",
                "Revenue from transaction fees, staking rewards, and protocol services",
                "Token utility across the entire Solieum ecosystem",
                "Governance rights in the Solieum DAO"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={fadeIn}
                  custom={index * 0.1}
                  className="flex items-start"
                >
                  <div className="mr-3 mt-1 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <Typography as="p" variant="body">
                    {item}
                  </Typography>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" variant="primary">
                Investment Deck
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Call
              </Button>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {investmentHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeIn}
                custom={index * 0.15}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <Typography as="p" variant="h2" className="text-gradient mb-1">
                  {highlight.metric}
                </Typography>
                <Typography as="p" variant="label" className="mb-2 text-blue-500">
                  {highlight.label}
                </Typography>
                <Typography as="p" variant="small">
                  {highlight.description}
                </Typography>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}; 