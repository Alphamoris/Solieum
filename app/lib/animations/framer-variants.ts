import { Variants } from 'framer-motion';

// Fade in animation variants
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

// Staggered container variants
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Scale and fade variants
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};

// Slide in from left
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

// Slide in from right
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

// Slide in from bottom
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

// Hover animation variants for buttons
export const buttonHover: Variants = {
  initial: {},
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  },
  tap: {
    scale: 0.98
  }
};

// Card hover effect
export const cardHover: Variants = {
  initial: {},
  hover: {
    y: -5,
    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)",
    transition: {
      duration: 0.3
    }
  }
};

// Page transition variants
export const pageTransition: Variants = {
  initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { 
      duration: 0.5, 
      ease: 'easeInOut',
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.3, 
      ease: 'easeInOut',
      when: 'afterChildren',
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

// Text character stagger animation
export const letterAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

// Morphing shape variants
export const morphShape: Variants = {
  circle: { 
    borderRadius: '50%',
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  },
  square: { 
    borderRadius: '10%',
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  },
  diamond: { 
    borderRadius: '10%',
    rotate: 45,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
};

// List item animation for staggered lists
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