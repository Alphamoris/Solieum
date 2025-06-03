# Solieum - Modern Blockchain Technology Website

This README provides comprehensive instructions to recreate the Solieum website, a modern blockchain/Solana scaling solution with advanced UI animations, gradient effects, and responsive design.

## Project Overview

Solieum is a cutting-edge blockchain technology website featuring:
- Animated particle backgrounds with dynamic interactive elements
- Smooth scrolling behavior throughout the site
- Advanced gradient text and UI components
- Responsive layouts optimized for all devices
- Beautiful Contact form and styled sections

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **UI Library**: React 18+
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Typography**: Geist Sans & Geist Mono
- **Icons**: Custom SVG icons

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm

### Installation

```bash
# Create a new Next.js project with App Router
npx create-next-app@latest solieum
# Select the following options:
# - Would you like to use TypeScript? › Yes
# - Would you like to use ESLint? › Yes
# - Would you like to use Tailwind CSS? › Yes
# - Would you like to use `src/` directory? › No
# - Would you like to use App Router? › Yes
# - Would you like to customize the default import alias? › Yes
# - What import alias would you like configured? › @/*

# Navigate to project directory
cd solieum

# Install dependencies
npm install framer-motion

# Install Geist font (if using next-fonts)
npm install @vercel/fonts
```

## Project Structure

Create the following folder structure:

```
solieum/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── ecosystem/
│   │   └── page.tsx
│   ├── investors/
│   │   └── page.tsx
│   ├── technology/
│   │   └── page.tsx
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── Button.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── Gradient.tsx
│   │   │   ├── Logo.tsx
│   │   │   ├── LogoBackground.tsx
│   │   │   ├── ScrollToTopButton.tsx
│   │   │   └── Typography.tsx
│   │   ├── molecules/
│   │   │   ├── FeatureCard.tsx
│   │   │   └── [other molecule components]
│   │   ├── organisms/
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── [other organism components]
│   │   └── templates/
│   │       └── PageLayout.tsx
│   ├── lib/
│   │   ├── animations/
│   │   │   └── motion-variants.ts
│   │   └── utils/
│   │       └── smoothScroll.ts
│   ├── styles/
│   │   └── utils.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── [images and assets]
├── package.json
└── tailwind.config.js
```

## Key Component Implementation

### 1. PageLayout Component

This is the main template that provides the animated background and layout structure:

```tsx
// app/components/templates/PageLayout.tsx
"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Footer } from '../organisms/Footer';
import { Navbar } from '../organisms/Navbar';
import { cn } from '@/app/styles/utils';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ScrollToTopButton } from '../atoms/ScrollToTopButton';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  withFooter?: boolean;
  withNavbar?: boolean;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  className,
  withFooter = true,
  withNavbar = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  // Mouse tracking with smooth physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Add a state variable to track client-side mounting
  const [isMounted, setIsMounted] = useState(false);
  
  // Create interactive flow fields and particle animations
  // ...
  
  // Render the layout with animated backgrounds and content
  // ...
}
```

### 2. Styling with TailwindCSS

Configure TailwindCSS with custom colors and animations:

```js
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': {
          50: '#faf0ff',
          // ... other shades
          500: '#DC1FFF',
          // ... other shades
        },
        'primary-blue': {
          50: '#e0feff',
          // ... other shades
          500: '#03E1FF',
          // ... other shades
        },
        'primary-green': {
          50: '#e9fff6',
          // ... other shades
          500: '#00FFA3',
          // ... other shades
        },
      },
      // Animation configurations
    },
  },
  plugins: [],
}
```

### 3. Smooth Scrolling Implementation

```ts
// app/lib/utils/smoothScroll.ts
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Additional scrolling utilities
// ...
```

## Recent UI Enhancements

The website has been enhanced with the following UI improvements:

1. **Animated Background**
   - Added a canvas-based particle animation that creates a dynamic, interactive background
   - Implemented floating gradient orbs with subtle animations
   - Added a grid pattern overlay for visual depth
   - All animations are optimized for performance

2. **Enhanced Hero Section**
   - Improved the hero section with a glass-panel design
   - Added animated floating elements and decorative shapes
   - Enhanced the logo with animation options
   - Added floating stats cards

3. **Interactive Button Effects**
   - Added glow effects to primary buttons
   - Enhanced hover states and transitions

4. **Call-to-Action Section**
   - Added a new CTA section with gradient backgrounds and glass effects
   - Improved visual hierarchy and user flow

5. **Performance Optimizations**
   - Client-side rendering for animations to improve initial load time
   - Optimized particle effects for better performance

These enhancements create a more engaging, modern user experience while maintaining the website's professional appearance and brand identity.

## Recreation Prompts

Use the following prompts with an AI assistant to recreate specific parts of the website:

### 1. Creating the Animated Background

```
Create a React component for a dynamic animated background with the following features:
- Particle animations with glowing effects in purple, blue, and green
- Interactive mouse tracking that affects the background
- Flowing gradient curves that move slowly
- Dynamic data flow lines that appear and disappear
- All animations should only render on the client-side to prevent hydration errors
Use Framer Motion for animations and TailwindCSS for styling.
```

### 2. Creating the Navbar

```
Create a responsive navbar component with the following:
- Logo on the left
- Navigation links in the center with active state highlighting
- A gradient CTA button on the right
- Mobile responsive with a hamburger menu
- Semi-transparent background that becomes more opaque on scroll
- Smooth scrolling when clicking navigation links
- Animated underlines for menu items on hover
```

### 3. Creating the Contact Page

```
Create a beautiful contact page with the following features:
- Gradient heading text
- Two-column layout on desktop (form on left, contact info on right)
- Form with name, email, subject dropdown, and message fields
- Animated success message after form submission
- Contact cards with icons for email, live chat, and community
- Social media links with hover effects
- Glowing borders and shadow effects on the form and info cards
```

### 4. Creating Gradient Text Effects

```
Create utility components and CSS for beautiful gradient text effects with the following features:
- Text with gradient backgrounds that work across browsers
- Support for different gradient directions and color combinations
- Proper handling of webkit prefixes for cross-browser compatibility
- Text that properly clips the gradient background
```

## Common Issues and Solutions

1. **Hydration Errors**: Ensure all components that use random values or browser APIs are only rendered on the client-side by using the `isMounted` pattern.

2. **Gradient Text Issues**: Use both `-webkit-background-clip: text` and `background-clip: text` together with explicit styles to ensure cross-browser compatibility.

3. **Animation Performance**: For particle animations, limit the number of particles and use `will-change` properties for better performance.

## Full Page Implementation Example

To create a complete home page:

```tsx
// app/page.tsx
"use client";

import React from 'react';
import { PageLayout } from './components/templates/PageLayout';
import { HeroSection } from './components/organisms/HeroSection';
import { FeaturesSection } from './components/organisms/FeaturesSection';
// Import other sections

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <FeaturesSection 
        title="Advanced Scaling Technology"
        subtitle="FEATURES"
        description="Our scaling solutions provide unparalleled performance and security for next-generation blockchain applications."
        features={[
          {
            title: "High Throughput",
            description: "Process thousands of transactions per second with minimal latency and fees.",
            iconBackground: "purple"
          },
          // Additional features
        ]}
      />
      {/* Additional sections */}
    </PageLayout>
  );
}
```

## License

This project template is available for personal and commercial use.

## Acknowledgements

- Next.js team for the amazing framework
- Framer Motion for the powerful animation library
- TailwindCSS for the utility-first CSS framework

---

By following this README, you should be able to recreate the Solieum website with all its features, animations, and styling. Adjust component implementations as needed to match the specific design requirements.
