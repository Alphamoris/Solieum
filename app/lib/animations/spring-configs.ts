import { SpringConfig } from 'react-spring';

// Spring configurations for different animation types
export const springConfigs: Record<string, SpringConfig> = {
  // Default configuration with medium bounce
  default: {
    tension: 170,
    friction: 26
  },
  
  // Gentle animation with minimal bounce
  gentle: {
    tension: 120,
    friction: 14
  },
  
  // Wobbly animation with more bounce
  wobbly: {
    tension: 180,
    friction: 12
  },
  
  // Stiff animation with minimal bounce
  stiff: {
    tension: 210,
    friction: 20
  },
  
  // Slow animation with minimal bounce
  slow: {
    tension: 20,
    friction: 10
  },
  
  // Molasses-like, very slow animation
  molasses: {
    tension: 20,
    friction: 40
  },
  
  // Bouncy animation with significant bounce
  bouncy: {
    tension: 300,
    friction: 10
  },
  
  // Subtle animation with minimal movement
  subtle: {
    tension: 100,
    friction: 30
  }
};

// Custom spring configurations for specific UI elements
export const uiSpringConfigs = {
  // Button press animation
  buttonPress: {
    tension: 400,
    friction: 15,
    mass: 1.5
  },
  
  // Button release animation
  buttonRelease: {
    tension: 200,
    friction: 10,
    mass: 1
  },
  
  // Modal enter animation
  modalEnter: {
    tension: 120,
    friction: 14,
    mass: 1
  },
  
  // Modal exit animation
  modalExit: {
    tension: 500,
    friction: 25,
    mass: 1
  },
  
  // Dropdown menu animation
  dropdown: {
    tension: 400,
    friction: 28,
    mass: 1
  },
  
  // Card hover animation
  cardHover: {
    tension: 300,
    friction: 20,
    mass: 1
  },
  
  // Notification enter animation
  notificationEnter: {
    tension: 250,
    friction: 18,
    mass: 1
  },
  
  // Notification exit animation
  notificationExit: {
    tension: 500,
    friction: 25,
    mass: 1
  }
};

// Animation timing configurations in milliseconds
export const animationTiming = {
  fast: 150,
  medium: 300,
  slow: 500,
  verySlow: 800
};

// Helper functions for common spring animations

// Create a trail configuration for staggered animations
export const createTrailConfig = (
  items: unknown[],
  delay: number = 100,
  config: SpringConfig = springConfigs.default
) => {
  return {
    keys: items.map((_, i) => i),
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: delay,
    config
  };
};

// Create a number counter configuration
export const createCounterConfig = (
  from: number,
  to: number,
  duration: number = 2000,
  config: SpringConfig = springConfigs.default
) => {
  return {
    from: { value: from },
    to: { value: to },
    config: { ...config, duration }
  };
};

// Create a parallax effect configuration
export const createParallaxConfig = (
  scrollY: number,
  strength: number = 100,
  config: SpringConfig = springConfigs.default
) => {
  return {
    to: { y: scrollY / strength },
    config
  };
};

// Create a hover effect configuration
export const createHoverConfig = (
  isHovered: boolean,
  config: SpringConfig = springConfigs.default
) => {
  return {
    scale: isHovered ? 1.05 : 1,
    y: isHovered ? -5 : 0,
    config
  };
}; 