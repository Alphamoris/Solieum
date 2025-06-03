"use client";

import React, { useEffect } from 'react';
import { PageLayout } from '../components/templates/PageLayout';
import { InvestorsSection } from '../components/organisms/InvestorsSection';
import { TokenomicsSection } from '../components/organisms/TokenomicsSection';
import { RoadmapSection } from '../components/organisms/RoadmapSection';
import { InvestorsFAQ } from '../components/organisms/InvestorsFAQ';
import { InvestorContactForm } from '../components/organisms/InvestorContactForm';
import { InvestmentCaseStudies } from '../components/organisms/InvestmentCaseStudies';
import { Gradient } from '../components/atoms/Gradient';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function InvestorsPage() {
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.8], [0.2, 0.1]);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <div className="relative overflow-hidden">
        {/* Dynamic floating background elements */}
        <motion.div 
          style={{ opacity: backgroundOpacity }}
          className="fixed inset-0 -z-10 overflow-hidden"
        >
          {/* Primary gradient */}
          <Gradient 
            variant="purple-blue"
            position="top-left"
            size="lg"
            className="-top-40 -left-40 opacity-20"
            blur="xl"
            animated
          />
          
          {/* Secondary gradient */}
          <Gradient 
            variant="blue-green"
            position="bottom-right"
            size="lg"
            className="-bottom-40 -right-40 opacity-20"
            blur="xl"
            animated
          />
          
          {/* Accent gradients */}
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-primary-green-500/5 animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-primary-blue-500/5 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </motion.div>
        
        {/* Page sections */}
        <InvestorsSection className="mt-10 md:mt-20" />
        
        {/* Case studies from existing investors */}
        <InvestmentCaseStudies className="mt-16 md:mt-24" />
        
        {/* Tokenomics information */}
        <div className="relative py-1">
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 -z-10"></div>
          <TokenomicsSection className="mt-16 md:mt-24" />
        </div>
        
        {/* Roadmap showing development timeline */}
        <RoadmapSection className="mt-16 md:mt-24" />
        
        {/* FAQ section */}
        <div className="relative py-1">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/10 -z-10"></div>
          <InvestorsFAQ className="mt-16 md:mt-24" />
        </div>
        
        {/* Contact form */}
        <InvestorContactForm className="mt-16 md:mt-24 mb-20" />
      </div>
    </PageLayout>
  );
} 