import { Variants } from 'framer-motion';

// Animation variants for Framer Motion

export const fadeIn: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

export const slideInBottom: Variants = {
  hidden: { 
    y: 50, 
    opacity: 0 
  },
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

export const slideInLeft: Variants = {
  hidden: { 
    x: -50, 
    opacity: 0 
  },
  visible: (delay = 0) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

export const slideInRight: Variants = {
  hidden: { 
    x: 50, 
    opacity: 0 
  },
  visible: (delay = 0) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const listItem: Variants = {
  hidden: { 
    y: 20, 
    opacity: 0 
  },
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export const scaleUp: Variants = {
  hidden: { 
    scale: 0.8, 
    opacity: 0 
  },
  visible: (delay = 0) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export const buttonHover: Variants = {
  initial: {},
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.98
  }
};

export const cardHover: Variants = {
  initial: {},
  hover: {
    y: -4,
    boxShadow: "0 8px 24px -8px rgba(0,0,0,0.15)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      mass: 0.8
    }
  }
}; 