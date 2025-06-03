"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from '../atoms/Container';
import { Typography } from '../atoms/Typography';
import { fadeIn } from '@/app/lib/animations/motion-variants';
import { cn } from '@/app/styles/utils';
import { Gradient } from '../atoms/Gradient';

interface TokenomicsSectionProps {
  className?: string;
}

interface TokenAllocationItem {
  name: string;
  percentage: number;
  color: string;
}

// SVG Pie/Donut Chart Component
const DonutChart: React.FC<{
  data: TokenAllocationItem[];
  size: number;
  thickness: number;
  hoverIndex: number | null;
  setHoverIndex: (index: number | null) => void;
}> = ({ data, size, thickness, hoverIndex, setHoverIndex }) => {
  // Calculate total for percentages
  const total = data.reduce((sum, item) => sum + item.percentage, 0);
  
  // Starting angle is -90 degrees (top of circle)
  let startAngle = -90;
  
  // Calculate radiuses first to avoid reference issues
  const outerRadius = size / 2;
  const innerRadius = outerRadius - thickness;
  
  // Calculate arc paths for each segment
  const segments = data.map((item, index) => {
    // Calculate angle for this segment
    const angle = (item.percentage / total) * 360;
    const endAngle = startAngle + angle;
    
    // Calculate SVG arc path
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    
    // Calculate points
    const startOuterX = outerRadius + Math.cos(startRad) * outerRadius;
    const startOuterY = outerRadius + Math.sin(startRad) * outerRadius;
    const endOuterX = outerRadius + Math.cos(endRad) * outerRadius;
    const endOuterY = outerRadius + Math.sin(endRad) * outerRadius;
    
    const startInnerX = outerRadius + Math.cos(startRad) * innerRadius;
    const startInnerY = outerRadius + Math.sin(startRad) * innerRadius;
    const endInnerX = outerRadius + Math.cos(endRad) * innerRadius;
    const endInnerY = outerRadius + Math.sin(endRad) * innerRadius;
    
    // For angles larger than 180 degrees, we need to use the large arc flag
    const largeArcFlag = angle > 180 ? 1 : 0;
    
    // Create the SVG path
    const path = [
      `M ${startOuterX} ${startOuterY}`,
      `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${endOuterX} ${endOuterY}`,
      `L ${endInnerX} ${endInnerY}`,
      `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${startInnerX} ${startInnerY}`,
      'Z'
    ].join(' ');
    
    // Update start angle for next segment
    startAngle = endAngle;
    
    // Calculate segment midpoint for label positioning
    const midAngle = startAngle - angle / 2;
    const midRad = (midAngle * Math.PI) / 180;
    const labelRadius = (innerRadius + outerRadius) / 2;
    const labelX = outerRadius + Math.cos(midRad) * labelRadius;
    const labelY = outerRadius + Math.sin(midRad) * labelRadius;
    
    return {
      path,
      color: item.color,
      name: item.name,
      percentage: item.percentage,
      labelX,
      labelY,
      index
    };
  });
  
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <g>
        {segments.map((segment, i) => (
          <path
            key={i}
            d={segment.path}
            fill={segment.color}
            stroke="#070710"
            strokeWidth="1"
            opacity={hoverIndex === null || hoverIndex === i ? 1 : 0.5}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
            className="transition-all duration-200 hover:opacity-90 cursor-pointer"
            style={{ 
              transform: hoverIndex === i ? 'scale(1.03)' : 'scale(1)',
              transformOrigin: 'center'
            }}
          />
        ))}
      </g>
      
      {/* Center circle for better aesthetics */}
      <circle 
        cx={size / 2} 
        cy={size / 2} 
        r={innerRadius * 0.8} 
        fill="#070710"
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="1"
      />
      
      {/* Center text showing selected percentage or total */}
      <text 
        x="50%" 
        y="50%" 
        textAnchor="middle" 
        dominantBaseline="middle" 
        fill="white"
        fontSize="24"
        fontWeight="bold"
        className="font-sans"
      >
        {hoverIndex !== null ? `${data[hoverIndex].percentage}%` : '100%'}
      </text>
    </svg>
  );
};

export const TokenomicsSection: React.FC<TokenomicsSectionProps> = ({ className }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);
  
  const tokenAllocation = [
    { name: "Ecosystem Development", percentage: 30, color: "#4169E1" },
    { name: "Team & Advisors", percentage: 20, color: "#8A2BE2" },
    { name: "Public Sale", percentage: 15, color: "#32CD32" },
    { name: "Private Sale", percentage: 15, color: "#FF8C00" },
    { name: "Treasury", percentage: 10, color: "#FF6347" },
    { name: "Liquidity", percentage: 10, color: "#1E90FF" },
  ];

  const tokenUtility = [
    {
      title: "Transaction Fees",
      description: "SLEUM tokens are used to pay for transaction fees on the Solieum Layer 2 network, with a portion of fees burned to create deflationary pressure."
    },
    {
      title: "Staking Rewards",
      description: "Token holders can stake SLEUM to secure the network and earn rewards from transaction fees and new token emissions."
    },
    {
      title: "Governance",
      description: "SLEUM tokens grant voting rights in the Solieum DAO, allowing holders to participate in protocol decisions and upgrades."
    },
    {
      title: "Protocol Access",
      description: "Certain premium features and services within the Solieum ecosystem require holding or spending SLEUM tokens."
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className={cn("overflow-hidden relative", className)}
    >
      <Gradient 
        className="absolute -bottom-40 -right-40 opacity-20" 
        colors={["#FF8C00", "#FF6347"]} 
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
            className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
          >
            Tokenomics
          </Typography>
          <Typography as="p" variant="lead" className="max-w-3xl mx-auto">
            The SLEUM token is designed to align incentives across the ecosystem and drive sustainable growth of the Solieum network.
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Token Allocation Chart */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="flex flex-col items-center"
          >
            <Typography as="h3" variant="h3" className="mb-6 text-center">
              Token Allocation
            </Typography>
            
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Replace placeholder with actual chart */}
              <DonutChart 
                data={tokenAllocation} 
                size={320} 
                thickness={60} 
                hoverIndex={hoveredSegment}
                setHoverIndex={setHoveredSegment}
              />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {tokenAllocation.map((item, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "flex items-center p-2 rounded-lg transition-all duration-200",
                    hoveredSegment === index ? "bg-white/10" : ""
                  )}
                  onMouseEnter={() => setHoveredSegment(index)}
                  onMouseLeave={() => setHoveredSegment(null)}
                >
                  <div 
                    className="w-4 h-4 rounded-full mr-2" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div>
                    <Typography as="p" variant="small" className="font-medium">
                      {item.name}
                    </Typography>
                    <Typography as="p" variant="small" className="text-gray-500">
                      {item.percentage}%
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Token Utility */}
          <div>
            <Typography as="h3" variant="h3" className="mb-6">
              Token Utility
            </Typography>
            
            <div className="space-y-6">
              {tokenUtility.map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={fadeIn}
                  custom={index * 0.1}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
                >
                  <Typography as="h4" variant="h4" className="mb-2">
                    {item.title}
                  </Typography>
                  <Typography as="p" variant="body">
                    {item.description}
                  </Typography>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          custom={0.4}
          className="mt-16 p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Typography as="p" variant="h2" className="text-gradient mb-1">
                1,000,000,000
              </Typography>
              <Typography as="p" variant="label" className="text-orange-500">
                Total Supply
              </Typography>
            </div>
            
            <div className="text-center">
              <Typography as="p" variant="h2" className="text-gradient mb-1">
                4 Years
              </Typography>
              <Typography as="p" variant="label" className="text-orange-500">
                Token Release Schedule
              </Typography>
            </div>
            
            <div className="text-center">
              <Typography as="p" variant="h2" className="text-gradient mb-1">
                2% Annual
              </Typography>
              <Typography as="p" variant="label" className="text-orange-500">
                Inflation Rate
              </Typography>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}; 