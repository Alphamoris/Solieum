import React from 'react';
import { PageLayout } from './components/templates/PageLayout';
import { HeroSection } from './components/organisms/HeroSection';
import { FeaturesSection } from './components/organisms/FeaturesSection';
import { StatsSection } from './components/organisms/StatsSection';
import { Button } from './components/atoms/Button';
import { Heading, Text } from './components/atoms/Typography';
import { Container } from './components/atoms/Container';
import { Gradient } from './components/atoms/Gradient';

export default function Home() {
  return (
    <PageLayout>
      <HeroSection
        title="Next-Generation Layer 2 Protocol for Solana"
        subtitle="Introducing Solieum"
        description="Solieum enhances Solana's scalability, speed, and resilience through innovative Layer 2 technology. Experience infinite throughput, zero downtime, and seamless interoperability."
      />
      
      <StatsSection />
      
      <FeaturesSection
        title="Revolutionary Technology"
        subtitle="Key Features"
        description="Solieum addresses Solana's scalability bottlenecks, ensuring the network can continue to support rapid growth without sacrificing user experience or performance."
        features={[
          {
            title: "Infinite Scalability",
            description: "Designed to handle massive transaction volumes, making it ideal for high-frequency DeFi applications, NFT marketplaces, and trading platforms with zero bottlenecks.",
            iconBackground: "purple",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>
            )
          },
          {
            title: "Zero Downtime",
            description: "By processing transactions off-chain and only committing final results to Solana, the network remains operational even during high-stress events and peak usage periods.",
            iconBackground: "blue",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            )
          },
          {
            title: "Lower Fees",
            description: "Offloading transaction processing from the mainnet significantly reduces fees, making microtransactions economically viable and improving cost efficiency across all applications.",
            iconBackground: "green",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 01-.75.75h-.75m-6-1.5H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
            )
          },
          {
            title: "Multi-Chain Interoperability",
            description: "Built with cross-chain compatibility in mind, enabling seamless asset transfers and communications between Solana and other blockchains through secure bridging technology.",
            iconBackground: "purple",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>
            )
          },
          {
            title: "Developer-Friendly",
            description: "Comprehensive SDK and API suite makes integration simple for developers, with full compatibility with existing Solana tooling and minimal learning curve for builders.",
            iconBackground: "blue",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            )
          },
          {
            title: "Future-Proof Design",
            description: "The modular architecture enables continuous upgrades and enhancements without disrupting the ecosystem, ensuring long-term adaptability as technology evolves.",
            iconBackground: "green",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
              </svg>
            )
          }
        ]}
      />
      
      {/* Call to Action Section */}
      <section className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-purple-500/5 to-transparent"></div>
        </div>
        
        <Gradient 
          variant="purple-blue" 
          intensity="medium" 
          position="bottom-left" 
          blur="xl"
          className="opacity-20 -z-10"
        />
        
        {/* Decorative lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-purple-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-blue-500/30 to-transparent"></div>
        
        {/* Content */}
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-8">
            <div className="max-w-xl">
              <Heading level="h2" className="mb-4 gradient-text gradient-purple-blue">
                Ready to Build the Future?
              </Heading>
              <Text variant="large" className="text-gray-300">
                Join us in revolutionizing the Solana ecosystem with Layer 2 technology that takes scalability to new heights.
              </Text>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gradient" size="lg" href="/contact" glow>
                Contact Us
              </Button>
              <Button variant="outline" size="lg" href="/technology">
                Explore Technology
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
