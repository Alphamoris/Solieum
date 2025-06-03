import React from 'react';
import { PageLayout } from '../components/templates/PageLayout';
import { Container } from '../components/atoms/Container';
import { Typography } from '../components/atoms/Typography';
import { FeaturesSection } from '../components/organisms/FeaturesSection';
import { cn } from '@/app/styles/utils';

export default function TechnologyPage() {
  return (
    <PageLayout>
      <div className="relative overflow-hidden">
        {/* Static background */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-primary-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-primary-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <section className="relative mb-12">
          <div className="absolute top-[10%] right-[15%] w-32 h-32 border border-primary-purple-500/30 rounded-full"></div>
          <div className="absolute bottom-[15%] left-[10%] w-24 h-24 border border-primary-blue-500/30 rounded-full"></div>
          
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <Typography 
                as="span" 
                variant="label" 
                color="blue"
                className="mb-4 inline-block px-4 py-1.5 rounded-full bg-primary-blue-500/10 border border-primary-blue-500/20"
              >
                Technology
              </Typography>
              
              <Typography 
                as="h1" 
                variant="h1" 
                color="gradient-tri"
                className="mb-6 font-bold text-center"
                align="center"
              >
                Revolutionary Layer 2 Technology
              </Typography>
              
              <Typography 
                as="p" 
                variant="lead" 
                className="text-gray-200 max-w-3xl mx-auto"
                align="center"
              >
                Solieum combines cutting-edge cryptography, distributed systems, and blockchain innovations to create a seamless Layer 2 experience for the Solana ecosystem.
              </Typography>
            </div>
          </Container>
        </section>
        
        {/* Tech Section - Simple static version */}
        <section className="overflow-hidden relative mt-4">
          <div className="absolute inset-0 bg-[rgba(15,10,40,0.3)] -z-10"></div>
          
          <Container className="relative z-10">
            <div className="text-center mb-16">
              <Typography 
                as="h2" 
                variant="h2" 
                className="mb-4 bg-gradient-to-r from-primary-purple-400 via-primary-blue-400 to-primary-green-400 bg-clip-text text-transparent font-bold"
                align="center"
              >
                Advanced Technology Stack
              </Typography>
              <Typography as="p" align="center" variant="lead" className="max-w-3xl mx-auto text-gray-200">
                Solieum&apos;s technology combines cutting-edge cryptography, distributed systems, and blockchain innovations to create a seamless Layer 2 experience.
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {[
                {
                  title: "Zero-Knowledge Proofs",
                  description: "Our Layer 2 solution utilizes advanced cryptographic techniques to enhance privacy while maintaining security and transparency.",
                  color: "purple",
                },
                {
                  title: "Parallel Transaction Processing",
                  description: "Solieum processes transactions in parallel, significantly increasing throughput compared to sequential processing.",
                  color: "blue",
                },
                {
                  title: "State Channels",
                  description: "Off-chain state channels enable instant transactions with minimal gas fees, settling on-chain only when necessary.",
                  color: "green",
                },
                {
                  title: "Optimistic Rollups",
                  description: "Transactions are bundled and processed off-chain, with only the final state committed to the Solana blockchain.",
                  color: "purple",
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className={cn(
                    "rounded-2xl p-8 border border-primary-purple-500/20 transition-all duration-300 relative overflow-hidden group",
                    feature.color === "purple" ? "bg-gradient-to-br from-[rgba(90,30,170,0.2)] to-[rgba(60,20,110,0.1)]" :
                    feature.color === "blue" ? "bg-gradient-to-br from-[rgba(30,90,220,0.2)] to-[rgba(20,60,150,0.1)]" :
                    "bg-gradient-to-br from-[rgba(20,150,100,0.2)] to-[rgba(10,120,80,0.1)]"
                  )}
                >
                  <Typography 
                    as="h3" 
                    variant="h3" 
                    className={cn(
                      "mb-3 font-semibold",
                      feature.color === "purple" ? "text-primary-purple-300" :
                      feature.color === "blue" ? "text-primary-blue-300" :
                      "text-primary-green-300"
                    )}
                  >
                    {feature.title}
                  </Typography>
                  <Typography as="p" align="center" variant="body" className="text-gray-300">
                    {feature.description}
                  </Typography>
                </div>
              ))}
            </div>
          </Container>
        </section>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-purple-500/50 to-transparent my-16"></div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(15,20,50,0.7)] to-[rgba(20,15,50,0.7)] -z-10"></div>
          
          <FeaturesSection
            title="Technical Advantages"
            subtitle="Why Solieum"
            description="Our Layer 2 solution provides significant technical advantages over traditional blockchain architectures."
            features={[
              {
                title: "Optimized Data Availability",
                description: "Solieum implements a novel data availability solution that ensures transaction data is always accessible while minimizing storage requirements.",
                iconBackground: "purple",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                )
              },
              {
                title: "Fraud Proof System",
                description: "Our advanced fraud proof system ensures that invalid state transitions are detected and rejected, maintaining the integrity of the network.",
                iconBackground: "blue",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                )
              },
              {
                title: "Modular Architecture",
                description: "Solieum's modular design allows for independent scaling of different components, enabling targeted optimizations and upgrades.",
                iconBackground: "green",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                  </svg>
                )
              },
              {
                title: "Validator Network",
                description: "Our distributed validator network ensures high availability and resilience against attacks while maintaining decentralization.",
                iconBackground: "purple",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                )
              }
            ]}
          />
        </div>
      </div>
    </PageLayout>
  );
} 