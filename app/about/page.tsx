"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { PageLayout } from '../components/templates/PageLayout';
import { Container } from '../components/atoms/Container';
import { Typography } from '../components/atoms/Typography';
import { Button } from '../components/atoms/Button';
import { Gradient } from '../components/atoms/Gradient';

// Team member data
const teamMembers = [
  {
    name: "Dr. Alex Chen",
    role: "Founder & CEO",
    bio: "Former researcher at MIT with over 10 years of experience in distributed systems and blockchain architecture.",
    image: "/images/team/alex-chen.jpg"
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    bio: "Previously led engineering at Solana Labs, focusing on scalability and performance optimization.",
    image: "/images/team/sarah-johnson.jpg"
  },
  {
    name: "Michael Park",
    role: "Head of Research",
    bio: "PhD in Computer Science specializing in zero-knowledge proofs and Layer 2 scaling solutions.",
    image: "/images/team/michael-park.jpg"
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Business Development",
    bio: "10+ years in blockchain business development with previous roles at major exchanges and protocols.",
    image: "/images/team/emily-rodriguez.jpg"
  },
  {
    name: "David Kim",
    role: "Lead Protocol Engineer",
    bio: "Core contributor to multiple Layer 1 protocols with expertise in consensus mechanisms and network security.",
    image: "/images/team/david-kim.jpg"
  },
  {
    name: "Lisa Chen",
    role: "Product Manager",
    bio: "Experienced in bringing complex blockchain products to market with a background in UX and technical product management.",
    image: "/images/team/lisa-chen.jpg"
  }
];

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="relative overflow-hidden">
        {/* Background elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <Gradient 
            variant="purple-blue"
            position="top-left"
            size="lg"
            className="opacity-20"
            blur="xl"
            animated
          />
          
          <Gradient 
            variant="blue-green"
            position="bottom-right"
            size="lg"
            className="opacity-20"
            blur="xl"
            animated
          />
        </div>
        
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <Typography as="h1" variant="h1" className="text-gradient mb-6">
                About Solieum
              </Typography>
              <Typography as="p" variant="lead" className="mb-10">
                Building the future of scalable infrastructure for the Solana ecosystem, enabling 
                infinite transaction throughput, enhanced security, and lower fees.
              </Typography>
            </div>
          </Container>
        </section>

        {/* Mission & Vision */}
        <section className=" relative">
          <div className="absolute inset-0 bg-black/20 -z-10"></div>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Mission */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-purple-blue flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <Typography as="h2" variant="h3" className="mb-4">
                  Our Mission
                </Typography>
                <Typography as="p" variant="body" className="text-gray-300">
                  To democratize access to high-performance blockchain infrastructure by creating a seamless 
                  Layer 2 solution that empowers developers to build scalable applications on Solana 
                  without compromising on security or decentralization.
                </Typography>
              </motion.div>

              {/* Vision */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-blue-green flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
                <Typography as="h2" variant="h3" className="mb-4">
                  Our Vision
                </Typography>
                <Typography as="p" variant="body" className="text-gray-300">
                  We envision a future where blockchain technology seamlessly powers the next generation 
                  of internet applications with the speed, security, and cost-efficiency required for 
                  mass adoption. Solieum will be the critical infrastructure enabling this transition.
                </Typography>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Company History */}
        <section className="py-20">
          <Container>
            <div className="text-center mb-16">
              <Typography as="h2" variant="h2" className="mb-4">
                Our Journey
              </Typography>
              <Typography as="p" variant="lead" className="max-w-2xl mx-auto">
                The story of how Solieum evolved from a research project to a leading Layer 2 protocol
              </Typography>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 via-blue-600 to-green-600"></div>
              
              {/* Timeline events */}
              <div className="space-y-16">
                {/* Event 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  <div className="md:text-right md:pr-16">
                    <Typography as="p" variant="label" className="text-blue-500 mb-1">
                      Q3 2022
                    </Typography>
                    <Typography as="h3" variant="h4" className="mb-2">
                      Research Beginnings
                    </Typography>
                    <Typography as="p" variant="body">
                      Founded as a research project at MIT focusing on Layer 2 scaling solutions specifically for Solana&apos;s architecture.
                    </Typography>
                  </div>
                  
                  <div className="hidden md:block">
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 border-background bg-blue-500"></div>
                  </div>
                </motion.div>

                {/* Event 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  <div className="hidden md:block"></div>
                  
                  <div className="md:pl-16">
                    <Typography as="p" variant="label" className="text-purple-500 mb-1">
                      Q1 2023
                    </Typography>
                    <Typography as="h3" variant="h4" className="mb-2">
                      Company Formation
                    </Typography>
                    <Typography as="p" variant="body">
                      Officially incorporated as Solieum Labs with initial seed funding from leading blockchain investors and technologists.
                    </Typography>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 border-background bg-purple-500"></div>
                </motion.div>

                {/* Event 3 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  <div className="md:text-right md:pr-16">
                    <Typography as="p" variant="label" className="text-green-500 mb-1">
                      Q3 2023
                    </Typography>
                    <Typography as="h3" variant="h4" className="mb-2">
                      Prototype Development
                    </Typography>
                    <Typography as="p" variant="body">
                      Completed the first working prototype demonstrating the core technology and scalability advantages of our Layer 2 solution.
                    </Typography>
                  </div>
                  
                  <div className="hidden md:block"></div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 border-background bg-green-500"></div>
                </motion.div>

                {/* Event 4 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  <div className="hidden md:block"></div>
                  
                  <div className="md:pl-16">
                    <Typography as="p" variant="label" className="text-blue-400 mb-1">
                      Present
                    </Typography>
                    <Typography as="h3" variant="h4" className="mb-2">
                      Testnet Launch
                    </Typography>
                    <Typography as="p" variant="body">
                      Public testnet now available for developers, with over 50 projects actively integrating our scaling solution ahead of mainnet.
                    </Typography>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 border-background bg-blue-400"></div>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>

        {/* Team Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-black/20 -z-10"></div>
          <Container>
            <div className="text-center mb-16">
              <Typography as="h2" variant="h2" className="mb-4">
                Our Team
              </Typography>
              <Typography as="p" variant="lead" className="max-w-2xl mx-auto">
                Meet the experts behind Solieum&apos;s innovative technology
              </Typography>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl overflow-hidden"
                >
                  <div className="h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                    {/* Replace with actual images when available */}
                    <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center text-white text-3xl">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <div className="p-6">
                    <Typography as="h3" variant="h4" className="mb-1">
                      {member.name}
                    </Typography>
                    <Typography as="p" variant="label" className="text-blue-400 mb-3">
                      {member.role}
                    </Typography>
                    <Typography as="p" variant="body" className="text-gray-300">
                      {member.bio}
                    </Typography>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <Container>
            <div className="glass border-gradient rounded-3xl p-12 text-center">
              <Typography as="h2" variant="h3" className="mb-4">
                Join Our Mission
              </Typography>
              <Typography as="p" variant="lead" className="mb-8 max-w-2xl mx-auto">
                We&apos;re always looking for talented individuals passionate about blockchain technology and scaling solutions.
              </Typography>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="gradient" href="/about/#">
                  View Open Positions
                </Button>
                <Button size="lg" variant="outline" href="/contact">
                  Contact Us
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PageLayout>
  );
} 