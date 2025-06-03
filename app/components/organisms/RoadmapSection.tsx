"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import { fadeIn } from '@/app/lib/animations/motion-variants';
import { cn } from '@/app/styles/utils';
import { Gradient } from '../atoms/Gradient';

interface RoadmapSectionProps {
  className?: string;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ className }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const roadmapItems = [
    {
      quarter: "Q3 2023",
      title: "Research & Development",
      description: "Initial research on Solana Layer 2 solutions, team formation, and concept validation.",
      status: "completed",
      items: [
        "Technical whitepaper publication",
        "Core team assembly",
        "Initial funding secured"
      ]
    },
    {
      quarter: "Q4 2023",
      title: "Prototype Development",
      description: "Building the first working prototype and testing core functionality.",
      status: "completed",
      items: [
        "Proof of concept development",
        "Initial architecture design",
        "Security model formulation"
      ]
    },
    {
      quarter: "Q1 2024",
      title: "Testnet Launch",
      description: "Deploying the first public testnet and opening it to developers.",
      status: "in-progress",
      items: [
        "Public testnet deployment",
        "Developer documentation",
        "Initial partner onboarding"
      ]
    },
    {
      quarter: "Q2 2024",
      title: "Mainnet Beta",
      description: "Limited mainnet launch with selected partners and applications.",
      status: "upcoming",
      items: [
        "Security audits",
        "Performance optimization",
        "Beta partner integration"
      ]
    },
    {
      quarter: "Q3 2024",
      title: "Public Mainnet",
      description: "Full public launch of the Solieum Layer 2 network.",
      status: "upcoming",
      items: [
        "Token generation event",
        "Public mainnet launch",
        "Ecosystem grants program"
      ]
    },
    {
      quarter: "Q4 2024",
      title: "Ecosystem Expansion",
      description: "Focusing on ecosystem growth, partnerships, and protocol improvements.",
      status: "upcoming",
      items: [
        "Cross-chain bridges",
        "Enterprise partnerships",
        "Protocol governance launch"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-blue-500';
      default:
        return 'bg-gray-300 dark:bg-gray-700';
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className={cn("py-16 md:py-20 overflow-hidden relative", className)}
    >
      <Gradient 
        className="absolute -top-40 -left-40 opacity-20" 
        colors={["#8A2BE2", "#4169E1"]} 
      />
      
      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Typography 
            as="h2" 
            variant="h2" 
            className="mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            Project Roadmap
          </Typography>
          <Typography as="p" variant="lead" className="max-w-3xl mx-auto">
            Our development timeline outlines the key milestones in Solieum&apos;s journey from concept to a fully operational Layer 2 solution for Solana.
          </Typography>
        </motion.div>

        <div className="relative px-4 md:px-0">
          {/* Timeline line - adjusted for mobile */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-blue-600 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-16">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeIn}
                custom={index * 0.1}
                className={cn(
                  "relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",
                  index % 2 === 0 ? "md:text-right" : ""
                )}
              >
                {/* Timeline dot - adjusted for mobile */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-1 md:top-6 w-5 h-5 rounded-full border-4 border-background z-10">
                  <div className={cn("w-full h-full rounded-full", getStatusColor(item.status))}></div>
                </div>
                
                <div className={cn(
                  "pl-12 md:pl-0 md:col-span-1",
                  index % 2 === 0 ? "md:pr-16" : "md:order-2 md:pl-16"
                )}>
                  <Typography as="p" variant="label" className="text-blue-500 mb-1 text-left md:text-inherit">
                    {item.quarter}
                  </Typography>
                  <Typography as="h3" variant="h3" className="mb-2 text-left md:text-inherit">
                    {item.title}
                  </Typography>
                  <Typography as="p" variant="body" className="mb-4 text-left md:text-inherit">
                    {item.description}
                  </Typography>
                  <ul className={cn(
                    "space-y-2",
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  )}>
                    {item.items.map((listItem, i) => (
                      <li key={i} className={cn(
                        "flex items-center",
                        index % 2 === 0 ? "justify-start md:justify-end" : "justify-start"
                      )}>
                        <Typography as="p" variant="small" className="text-left md:text-inherit">
                          {listItem}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={cn(
                  "hidden md:block md:col-span-1",
                  index % 2 === 0 ? "md:order-2" : "md:pr-16"
                )}>
                  {/* This space is intentionally left empty for timeline layout */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}; 