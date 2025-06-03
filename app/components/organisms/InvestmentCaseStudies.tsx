"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import { cn } from '@/app/styles/utils';
import { fadeIn } from '@/app/lib/animations/motion-variants';

interface CaseStudy {
  company: string;
  logo: string;
  quote: string;
  person: string;
  position: string;
  result: string;
}

interface InvestmentCaseStudiesProps {
  className?: string;
}

export const InvestmentCaseStudies: React.FC<InvestmentCaseStudiesProps> = ({ className }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const caseStudies: CaseStudy[] = [
    {
      company: "BlockVenture Capital",
      logo: "/images/case-studies/blockventure.svg", // This would be a placeholder, replace with actual logo
      quote: "Solieum's technology represents a critical scaling solution for the Solana ecosystem. Their team's deep technical expertise and clear vision for the future of blockchain infrastructure made this an easy investment decision for us.",
      person: "Alexandra Chen",
      position: "Managing Partner",
      result: "Early Investor, Seed Round"
    },
    {
      company: "Crypto Innovation Fund",
      logo: "/images/case-studies/cryptoinnovation.svg", // This would be a placeholder, replace with actual logo
      quote: "We've invested in numerous Layer 2 solutions across multiple blockchain ecosystems, and Solieum stands out with its unique approach to scalability and data availability. The ROI potential here is significant.",
      person: "Michael Novogratz",
      position: "Lead Investment Strategist",
      result: "Strategic Partner"
    },
    {
      company: "Solana Ecosystem Ventures",
      logo: "/images/case-studies/solanaventures.svg", // This would be a placeholder, replace with actual logo
      quote: "As a fund focused exclusively on the Solana ecosystem, we immediately recognized the value Solieum brings to the table. Their Layer 2 solution addresses critical scalability challenges while maintaining Solana's core value propositions.",
      person: "David Park",
      position: "Principal",
      result: "Lead Investor, Series A"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className={cn(" overflow-hidden relative", className)}
    >
      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Typography 
            as="span" 
            variant="label" 
            className="text-primary-purple-500 mb-2 block"
          >
            SUCCESS STORIES
          </Typography>
          <Typography 
            as="h2" 
            variant="h2" 
            className="mb-4"
          >
            Why Top Investors Choose Solieum
          </Typography>
          <Typography as="p" variant="lead" className="max-w-3xl mx-auto">
            Hear from our strategic partners and investors about why they decided to back Solieum.
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeIn}
              custom={index * 0.2}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="h-12 mb-6 flex items-center">
                <div className="w-full h-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded flex items-center justify-center">
                  <Typography as="p" variant="label" className="text-white">
                    {study.company}
                  </Typography>
                </div>
              </div>
              
              <div className="mb-6">
                <svg className="text-primary-purple-400 mb-2" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <Typography as="p" variant="body" className="italic text-neutral-300">
                  {study.quote}
                </Typography>
              </div>
              
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <Typography as="p" variant="small" className="font-semibold">
                    {study.person}
                  </Typography>
                  <Typography as="p" variant="small" className="text-neutral-400">
                    {study.position}
                  </Typography>
                </div>
                
                <div className="bg-white/10 px-3 py-1 rounded-full">
                  <Typography as="p" variant="small" className="text-primary-purple-400">
                    {study.result}
                  </Typography>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}; 