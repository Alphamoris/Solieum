"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import { cn } from '@/app/styles/utils';
import { fadeIn } from '@/app/lib/animations/motion-variants';

interface FAQItem {
  question: string;
  answer: string;
}

interface InvestorsFAQProps {
  className?: string;
}

export const InvestorsFAQ: React.FC<InvestorsFAQProps> = ({ className }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqItems: FAQItem[] = [
    {
      question: "What is the investment structure for Solieum?",
      answer: "Solieum offers several investment tiers for different types of investors, including seed round, private sale, and strategic partnerships. Each tier comes with different token allocations, vesting periods, and governance rights. Our team is available to discuss specific investment opportunities tailored to your portfolio needs."
    },
    {
      question: "What is the projected ROI timeline?",
      answer: "While we cannot guarantee specific returns, our financial projections indicate significant growth potential within 24-36 months post-mainnet launch. Revenue streams include transaction fees, enterprise licensing, and protocol service fees. The token model includes deflationary mechanisms designed to support long-term value appreciation as network usage increases."
    },
    {
      question: "How does Solieum differentiate from other Layer 2 solutions?",
      answer: "Solieum is specifically optimized for the Solana ecosystem, leveraging Solana's high throughput while adding enhanced scalability, improved security guarantees, and cross-chain interoperability. Our unique data availability solution and parallel transaction processing give us competitive advantages in transaction throughput and cost efficiency compared to other Layer 2 protocols."
    },
    {
      question: "What are the planned use of funds?",
      answer: "Investment capital will be allocated approximately as follows: 40% for technical development and R&D, 25% for business development and partnerships, 20% for marketing and community growth, 10% for legal and compliance, and 5% for operational expenses. A detailed breakdown is available in our investment prospectus."
    },
    {
      question: "What is the vesting schedule for investors?",
      answer: "Investor tokens follow a vesting schedule designed to align incentives for long-term growth. Typically, this includes a 6-12 month cliff followed by a 24-36 month linear vesting period. Strategic investors may have customized schedules based on partnership agreements and involvement level in protocol governance."
    },
    {
      question: "How will Solieum achieve adoption in the Solana ecosystem?",
      answer: "We've developed a comprehensive go-to-market strategy focusing on three primary verticals: DeFi protocols requiring higher throughput, gaming applications needing lower transaction costs, and enterprise solutions demanding enhanced reliability. We have already secured letters of intent from several major Solana projects to integrate with our testnet."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };
  
  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        height: { 
          duration: 0.4, 
          ease: "easeInOut" 
        },
        opacity: { 
          duration: 0.25, 
          delay: 0.15 
        }
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { 
        height: { 
          duration: 0.3, 
          ease: "easeInOut" 
        },
        opacity: { 
          duration: 0.2 
        }
      }
    }
  };

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45, transition: { duration: 0.3 } }
  };

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
            as="h2" 
            variant="h2" 
            className="mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"
            align="center"
          >
            Investor FAQ
          </Typography>
          <Typography as="p" align="center" variant="lead" className="max-w-3xl mx-auto">
            Answers to common questions from our investors and partners.
          </Typography>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index * 0.1}
              variants={itemVariants}
              className="overflow-hidden rounded-xl backdrop-blur-lg border border-white/10 bg-white/5 hover:bg-white/8 transition-colors"
            >
              <button
                onClick={() => handleToggle(index)}
                className={cn(
                  "w-full text-left p-6 flex justify-between items-center transition-all",
                  openIndex === index && "border-b border-white/10"
                )}
              >
                <Typography as="h3" variant="h4" className="flex-1">
                  {item.question}
                </Typography>
                <motion.div
                  variants={iconVariants}
                  animate={openIndex === index ? "open" : "closed"}
                  className="w-6 h-6 flex items-center justify-center flex-shrink-0 ml-4"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </motion.div>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key={`content-${index}`}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-white/5">
                      <Typography as="p" variant="body" className="text-gray-300">
                        {item.answer}
                      </Typography>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}; 