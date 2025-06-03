"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import { cn } from '@/app/styles/utils';
import { fadeIn } from '@/app/lib/animations/motion-variants';

interface InvestorContactFormProps {
  className?: string;
}

export const InvestorContactForm: React.FC<InvestorContactFormProps> = ({ className }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  return (
    <section 
      ref={sectionRef} 
      className={cn(" overflow-hidden relative", className)}
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <Typography 
              as="h2" 
              variant="h2" 
              className="mb-4"
            >
              Ready to Join Our Investment Round?
            </Typography>
            <Typography as="p" variant="lead" className="mb-6">
              Schedule a call with our team to discuss investment opportunities, receive our detailed investment deck, and learn about our strategic roadmap.
            </Typography>
            
            <div className="space-y-4 mb-6">
              {[
                "Private investment rounds now open",
                "Detailed financial projections available upon request",
                "Direct access to founding team members",
                "Exclusive investor community and events"
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
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            custom={0.3}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
          >
            <Typography as="h3" variant="h3" className="mb-6 text-center">
              Contact Our Investment Team
            </Typography>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block mb-2 text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block mb-2 text-sm font-medium">Company / Organization</label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="investmentLevel" className="block mb-2 text-sm font-medium">Investment Level (USD)</label>
                <select
                  id="investmentLevel"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="" className="text-black">Select investment range</option>
                  <option value="50k-100k" className="text-black">$50,000 - $100,000</option>
                  <option value="100k-500k" className="text-black">$100,000 - $500,000</option>
                  <option value="500k-1m" className="text-black">$500,000 - $1,000,000</option>
                  <option value="1m+" className="text-black">$1,000,000+</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your investment interests and any specific questions you have..."
                ></textarea>
              </div>
              
              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full h-12 px-6 py-3 text-lg inline-flex items-center justify-center rounded-full font-medium bg-gradient-purple-blue text-white hover:shadow-glow-purple transition-colors"
                >
                  Request Investment Information
                </button>
              </div>
              
              <Typography as="p" variant="small" className="text-center text-neutral-400">
                Your information will remain confidential and will only be used to contact you regarding investment opportunities.
              </Typography>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}; 