import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

// Animation timing constants
export const ANIMATION_TIMING = {
  FAST: 0.3,
  MEDIUM: 0.6,
  SLOW: 1,
  VERY_SLOW: 1.5,
};

// Animation easing constants
export const ANIMATION_EASE = {
  SMOOTH: 'power2.out',
  BOUNCE: 'bounce.out',
  ELASTIC: 'elastic.out(1, 0.3)',
  SINE: 'sine.inOut',
  EXPO_OUT: 'expo.out',
  EXPO_IN_OUT: 'expo.inOut',
};

// Parallax effect
export const useParallax = (ref: React.RefObject<HTMLElement>, speed: number = 0.5) => {
  useEffect(() => {
    if (!ref.current) return;
    
    const element = ref.current;
    
    gsap.to(element, {
      y: `${speed * 100}%`,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [ref, speed]);
};

// Text reveal animation
export const useTextReveal = (ref: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!ref.current || typeof window === 'undefined') return;
    
    const element = ref.current;
    const splitText = new SplitText(element, { type: 'words,chars' });
    
    gsap.from(splitText.chars, {
      opacity: 0,
      y: 20,
      stagger: 0.02,
      duration: 0.8,
      ease: ANIMATION_EASE.EXPO_OUT,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
      },
    });
    
    return () => {
      if (splitText) splitText.revert();
    };
  }, [ref]);
};

// Counter animation
export const useCounterAnimation = (
  ref: React.RefObject<HTMLElement>,
  endValue: number,
  duration: number = 2,
  startValue: number = 0
) => {
  const counterRef = useRef({ value: startValue });
  
  useEffect(() => {
    if (!ref.current) return;
    
    const element = ref.current;
    
    gsap.to(counterRef.current, {
      value: endValue,
      duration,
      ease: ANIMATION_EASE.EXPO_OUT,
      onUpdate: () => {
        if (element) {
          element.textContent = Math.round(counterRef.current.value).toLocaleString();
        }
      },
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
      },
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [ref, endValue, duration, startValue]);
};

// Staggered reveal animation for lists
export const useStaggeredReveal = (containerRef: React.RefObject<HTMLElement>, staggerAmount: number = 0.1) => {
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const items = container.children;
    
    gsap.from(items, {
      y: 30,
      opacity: 0,
      duration: ANIMATION_TIMING.MEDIUM,
      stagger: staggerAmount,
      ease: ANIMATION_EASE.EXPO_OUT,
      scrollTrigger: {
        trigger: container,
        start: 'top 75%',
      },
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [containerRef, staggerAmount]);
};

// Fade in animation
export const useFadeIn = (ref: React.RefObject<HTMLElement>, delay: number = 0) => {
  useEffect(() => {
    if (!ref.current) return;
    
    const element = ref.current;
    
    gsap.from(element, {
      opacity: 0,
      y: 20,
      duration: ANIMATION_TIMING.MEDIUM,
      delay,
      ease: ANIMATION_EASE.SMOOTH,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
      },
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [ref, delay]);
}; 