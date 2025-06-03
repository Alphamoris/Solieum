"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageLayout } from '../components/templates/PageLayout';
import { Container } from '../components/atoms/Container';
import { Typography } from '../components/atoms/Typography';
import { Button } from '../components/atoms/Button';
import { Gradient } from '../components/atoms/Gradient';
import { RoadmapSection } from '../components/organisms/RoadmapSection';

// Ecosystem partners data
const partners = [
  {
    name: "SolanaSwap",
    category: "DeFi",
    logo: "/images/partners/solanaswap.svg",
    description: "Leading decentralized exchange utilizing Solieum's L2 for higher throughput and lower transaction costs."
  },
  {
    name: "MetaVerse Labs",
    category: "Gaming",
    logo: "/images/partners/metaverse-labs.svg",
    description: "Virtual world platform handling millions of daily transactions through Solieum's scaling solution."
  },
  {
    name: "SolPay",
    category: "Payments",
    logo: "/images/partners/solpay.svg",
    description: "Payment processor enabling microtransactions with near-zero fees via Solieum's Layer 2."
  },
  {
    name: "DataBlocks",
    category: "Infrastructure",
    logo: "/images/partners/datablocks.svg",
    description: "Decentralized storage solution leveraging Solieum for cost-effective data availability proofs."
  },
  {
    name: "ArtChain",
    category: "NFT",
    logo: "/images/partners/artchain.svg",
    description: "NFT marketplace with gasless minting enabled by Solieum's batch processing capabilities."
  },
  {
    name: "Solana Foundation",
    category: "Infrastructure",
    logo: "/images/partners/solana-foundation.svg", 
    description: "Strategic partnership for native integration with the core Solana protocol."
  },
  {
    name: "CryptoVault",
    category: "DeFi",
    logo: "/images/partners/cryptovault.svg",
    description: "Yield optimization platform using Solieum for high-frequency rebalancing operations."
  },
  {
    name: "GameFi Studios",
    category: "Gaming",
    logo: "/images/partners/gamefi-studios.svg",
    description: "Game studio implementing Solieum for in-game asset transactions and player rewards."
  }
];

// Use case categories
const categories = ['All', 'DeFi', 'Gaming', 'Payments', 'Infrastructure', 'NFT'];

// Integration examples
const integrationExamples = [
  {
    title: "High-Throughput DEX",
    description: "Implementation of a decentralized exchange processing 10,000+ transactions per second with sub-second finality.",
    code: `
// Example code for integrating with Solieum Layer 2
import { Solieum } from '@solieum/sdk';

// Initialize connection to Solieum L2
const solieum = new Solieum({
  endpoint: 'https://rpc.solieum.network',
  wallet: solanaWallet
});

// Execute a token swap on L2
async function executeSwap(tokenA, tokenB, amount) {
  const tx = await solieum.createSwapTransaction({
    fromToken: tokenA,
    toToken: tokenB,
    amount,
    slippage: 0.5 // 0.5% slippage tolerance
  });
  
  // Transaction will be batched and included in the next L2 block
  const result = await solieum.sendTransaction(tx);
  
  // Immediate L2 confirmation with cryptographic guarantee
  console.log(\`Swap confirmed: \${result.transactionId}\`);
  
  // Finality on L1 (Solana) occurs automatically
}`,
    stats: [
      { label: "Transactions Per Second", value: "10,000+" },
      { label: "Cost Reduction", value: "99.8%" },
      { label: "Latency", value: "<100ms" }
    ]
  },
  {
    title: "NFT Marketplace with Gasless Minting",
    description: "Implementation of gasless NFT minting and trading with meta-transactions on Solieum L2.",
    code: `
// Example code for gasless NFT minting
import { Solieum, MetaTxService } from '@solieum/sdk';

// Initialize Solieum L2 connection
const solieum = new Solieum({
  endpoint: 'https://rpc.solieum.network'
});

// Meta-transaction service handles gas fees
const metaTxService = new MetaTxService({
  relayer: 'https://relayer.solieum.network',
  apiKey: process.env.SOLIEUM_API_KEY
});

// User mints NFT without paying gas
async function mintNFT(metadata, creator) {
  // Create the unsigned transaction
  const unsignedTx = await solieum.createNFTMintTransaction({
    metadata,
    creator
  });
  
  // User signs the transaction data, not the full tx
  const signedMessage = await creator.signMessage(
    unsignedTx.getSignatureData()
  );
  
  // Relayer submits and pays for the transaction
  const result = await metaTxService.executeMetaTransaction(
    unsignedTx,
    signedMessage
  );
  
  return result.tokenId;
}`,
    stats: [
      { label: "Gas Cost to User", value: "Zero" },
      { label: "Minting Time", value: "<2 seconds" },
      { label: "Daily Capacity", value: "1M+ NFTs" }
    ]
  },
  {
    title: "High-Frequency Gaming Rewards",
    description: "Real-time in-game rewards and asset transfers for blockchain games with millions of daily active users.",
    code: `
// Example code for game reward distribution
import { Solieum, BatchProcessor } from '@solieum/sdk';

// Initialize Solieum batch processor
const batchProcessor = new BatchProcessor({
  endpoint: 'https://rpc.solieum.network',
  privateKey: process.env.GAME_PRIVATE_KEY,
  batchInterval: 5000 // 5 seconds
});

// Queue reward transactions
function awardPlayerTokens(playerId, amount, reason) {
  // This doesn't send immediately, just queues for batching
  batchProcessor.queueTransaction({
    recipient: playerId,
    amount,
    metadata: {
      reason,
      timestamp: Date.now()
    }
  });
}

// Start the batch processor
batchProcessor.start();

// Example usage in game server
gameServer.on('playerKill', (killer, victim) => {
  awardPlayerTokens(killer.walletAddress, 5, 'playerKill');
});

gameServer.on('questComplete', (player, questId) => {
  awardPlayerTokens(player.walletAddress, 20, \`quest:\${questId}\`);
});`,
    stats: [
      { label: "Rewards Per Second", value: "100,000+" },
      { label: "Cost Per Reward", value: "$0.000001" },
      { label: "Concurrent Users", value: "1M+" }
    ]
  }
];

export default function EcosystemPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredPartners = activeCategory === 'All' 
    ? partners 
    : partners.filter(partner => partner.category === activeCategory);

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
                Solieum Ecosystem
              </Typography>
              <Typography as="p" variant="lead" className="mb-10">
                Discover the growing network of partners, developers, and applications
                building the future of scalable blockchain technology on Solieum.
              </Typography>
            </div>
            
            {/* Ecosystem Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { value: "200+", label: "Ecosystem Projects" },
                { value: "$50M+", label: "Total Value Locked" },
                { value: "1.2M+", label: "Transactions per Second" },
                { value: "50+", label: "Core Partners" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass p-6 rounded-xl text-center"
                >
                  <Typography as="p" variant="h2" className="text-gradient mb-2">
                    {stat.value}
                  </Typography>
                  <Typography as="p" variant="label" className="text-gray-300">
                    {stat.label}
                  </Typography>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Partners Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-black/20 -z-10"></div>
          <Container>
            <div className="text-center mb-12">
              <Typography as="h2" variant="h2" className="mb-4 text-center">
                Our Partners
              </Typography>
              <Typography as="p" variant="lead" className="max-w-2xl mx-auto mb-8">
                Leading projects and organizations building with Solieum technology
              </Typography>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full transition-all ${
                      activeCategory === category
                        ? 'bg-gradient-purple-blue text-white'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Partners Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl overflow-hidden"
                >
                  <div className="h-40 bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center p-6">
                    <div className="w-full h-full bg-white/5 rounded-lg flex items-center justify-center">
                      <Typography as="p" variant="h4" className="text-white">
                        {partner.name}
                      </Typography>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="bg-white/10 rounded-full px-3 py-1 inline-block mb-2">
                      <Typography as="p" variant="small" className="text-primary-purple-400">
                        {partner.category}
                      </Typography>
                    </div>
                    <Typography as="p" variant="body" className="text-gray-300">
                      {partner.description}
                    </Typography>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Become a Partner CTA */}
            <div className="text-center mt-16">
              <Button size="lg" variant="gradient" href="/contact">
                Become a Partner
              </Button>
            </div>
          </Container>
        </section>
        
        {/* Integration Examples Section */}
        <section className="py-20">
          <Container>
            <div className="text-center mb-16">
              <Typography as="h2" variant="h2" className="mb-4">
                Integration Examples
              </Typography>
              <Typography as="p" variant="lead" className="max-w-2xl mx-auto">
                See how different applications are leveraging Solieum&apos;s Layer 2 technology
              </Typography>
            </div>
            
            <div className="space-y-24">
              {integrationExamples.map((example, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Description and Stats - Alternating left/right */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={index % 2 === 0 ? "order-1 lg:order-1" : "order-1 lg:order-2"}
                  >
                    <Typography as="h3" variant="h3" className="mb-4">
                      {example.title}
                    </Typography>
                    <Typography as="p" variant="body" className="mb-8">
                      {example.description}
                    </Typography>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {example.stats.map((stat, statIndex) => (
                        <div key={statIndex}>
                          <Typography as="p" variant="h4" className="text-primary-blue-400">
                            {stat.value}
                          </Typography>
                          <Typography as="p" variant="small" className="text-gray-400">
                            {stat.label}
                          </Typography>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Code Example */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={index % 2 === 0 ? "order-2 lg:order-2" : "order-2 lg:order-1"}
                  >
                    <pre className="glass p-5 rounded-xl overflow-x-auto">
                      <code className="text-sm text-gray-300">{example.code}</code>
                    </pre>
                  </motion.div>
                </div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Roadmap showing development timeline */}
        <RoadmapSection className="py-10" />
        
        {/* Ecosystem Fund */}
        <section className=" relative">
          <div className="absolute inset-0 bg-black/20 -z-10"></div>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Typography as="p" variant="label" className="text-primary-blue-400 mb-2">
                  FUNDING THE FUTURE
                </Typography>
                <Typography as="h2" variant="h2" className="mb-6">
                  Solieum Ecosystem Fund
                </Typography>
                <Typography as="p" variant="lead" className="mb-6">
                  $50M dedicated to supporting developers, startups, and projects building on Solieum Layer 2 technology.
                </Typography>
                <Typography as="p" variant="body" className="mb-8 text-gray-300">
                  The Ecosystem Fund provides grants, investments, and resources to accelerate the growth
                  of the Solieum ecosystem. We support projects at all stages, from early prototypes to
                  established applications looking to scale with our technology.
                </Typography>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Technical development grants from $10K to $500K",
                    "Strategic investments in promising startups",
                    "Marketing and user acquisition support",
                    "Technical advisory and implementation assistance"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-3 mt-1 text-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <Typography as="p" variant="body">
                        {item}
                      </Typography>
                    </div>
                  ))}
                </div>
                
                <Button size="lg" variant="gradient" href="/ecosystem/fund">
                  Apply for Funding
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl"
              >
                <div className="space-y-6">
                  <Typography as="h3" variant="h3" className="mb-4">
                    Funding Categories
                  </Typography>
                  
                  {[
                    {
                      title: "Infrastructure",
                      description: "Core protocol improvements, developer tools, and infrastructure services that enhance the Solieum ecosystem.",
                      allocation: "40%"
                    },
                    {
                      title: "Applications",
                      description: "Consumer and business applications built on Solieum that demonstrate real-world utility.",
                      allocation: "30%"
                    },
                    {
                      title: "Research",
                      description: "Academic and applied research in areas such as zero-knowledge proofs, data availability, and protocol security.",
                      allocation: "20%"
                    },
                    {
                      title: "Community & Education",
                      description: "Developer education, community building, and awareness initiatives that expand the Solieum ecosystem.",
                      allocation: "10%"
                    }
                  ].map((category, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-white/10 rounded-full p-3 mr-4">
                        <Typography as="p" variant="h4" className="text-primary-purple-400">
                          {category.allocation}
                        </Typography>
                      </div>
                      <div>
                        <Typography as="h4" variant="h4" className="mb-1">
                          {category.title}
                        </Typography>
                        <Typography as="p" variant="body" className="text-gray-300">
                          {category.description}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <Container>
            <div className="glass border-gradient rounded-3xl p-12 text-center">
              <Typography as="h2" variant="h3" className="mb-4">
                Ready to Build on Solieum?
              </Typography>
              <Typography as="p" variant="lead" className="mb-8 max-w-2xl mx-auto">
                Join hundreds of developers and companies building the future of scalable blockchain applications.
              </Typography>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="gradient" href="/developers">
                  Developer Resources
                </Button>
                <Button size="lg" variant="outline" href="/ecosystem/fund">
                  Apply for Funding
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PageLayout>
  );
} 