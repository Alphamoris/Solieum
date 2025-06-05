"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/app/styles/utils';
import { Button } from '../atoms/Button';
import { Container } from '../atoms/Container';
import { Logo } from '../atoms/Logo';
import { useRouter } from 'next/navigation';
import { NavDropdown, DropdownItem } from '../molecules/NavDropdown';
import { MobileNavDropdown } from '../molecules/MobileNavDropdown';
import {
  RiDashboardLine, RiTeamLine, RiBriefcaseLine, RiNewspaperLine,
  RiRocketLine, RiGroupLine, RiAppsLine, RiMoneyDollarCircleLine,
  RiShieldCheckLine, RiLineChartLine,RiRoadMapLine, RiQuestionLine, RiPresentationLine, RiBuildingLine
} from 'react-icons/ri';

interface NavItem {
  label: string;
  href: string;
  dropdownItems?: DropdownItem[];
}

interface NavbarProps {
  className?: string;
  logoVariant?: 'default' | 'small' | 'medium' | 'large';
  navItems?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  className,
  logoVariant = 'default',
  navItems = [
    { 
      label: 'Technology', 
      href: '/technology',
      dropdownItems: [
        { label: 'Overview', href: '/technology', description: 'Learn about our Layer 2 technology', icon: RiDashboardLine },
        { label: 'Architecture', href: '/technology/architecture', description: 'Technical architecture of Solieum', icon: RiBuildingLine },
        { label: 'Performance', href: '/technology/performance', description: 'Benchmarks and performance metrics', icon: RiLineChartLine },
        { label: 'Security', href: '/technology/security', description: 'Our security model and audits', icon: RiShieldCheckLine }
      ] 
    },
    { 
      label: 'Ecosystem', 
      href: '/ecosystem',
      dropdownItems: [
        { label: 'Overview', href: '/ecosystem', description: 'Explore the Solieum ecosystem', icon: RiAppsLine },
        { label: 'Partners', href: '/ecosystem/partners', description: 'Strategic and integration partners', icon: RiGroupLine },
        { label: 'Projects', href: '/ecosystem/projects', description: 'Projects building on Solieum', icon: RiRocketLine },
        { label: 'Grants', href: '/ecosystem/grants', description: 'Funding opportunities for developers', icon: RiMoneyDollarCircleLine }
      ] 
    },
    { 
      label: 'About', 
      href: '/about',
      dropdownItems: [
        { label: 'Mission', href: '/about', description: 'Our vision and mission', icon: RiPresentationLine },
        { label: 'Team', href: '/about/team', description: 'Meet the Solieum team', icon: RiTeamLine },
        { label: 'Careers', href: '/about/careers', description: 'Join our team', icon: RiBriefcaseLine },
        { label: 'Blog', href: '/blog', description: 'Latest news and articles', icon: RiNewspaperLine }
      ] 
    },
    { 
      label: 'Investors', 
      href: '/investors',
      dropdownItems: [
        { label: 'Overview', href: '/investors', description: 'Investment opportunities', icon: RiMoneyDollarCircleLine },
        { label: 'Tokenomics', href: '/investors/tokenomics', description: 'Token distribution and economics', icon: RiLineChartLine },
        { label: 'Roadmap', href: '/investors/roadmap', description: 'Project development roadmap', icon: RiRoadMapLine },
        { label: 'FAQs', href: '/investors/faqs', description: 'Frequently asked questions', icon: RiQuestionLine }
      ] 
    },
  ],
  ctaLabel = 'Get Started',
  ctaHref = '/contact',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState('/');
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActiveRoute(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle smooth scrolling for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Close mobile menu when a link is clicked
    setIsMobileMenuOpen(false);
    
    // Only handle internal links
    if (href.startsWith('/')) {
      const currentPath = window.location.pathname;
      
      // If it's the current page with an anchor
      if (href.includes('#') && (href.split('#')[0] === currentPath || href.split('#')[0] === '')) {
        e.preventDefault();
        const targetId = href.split('#')[1];
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      } else {
        // For page navigation, let the router handle it
        e.preventDefault();
        router.push(href);
      }
    }
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 md:px-8',
          isScrolled
            ? 'bg-[rgba(0,0,0,0.9)] backdrop-blur-xl shadow-lg border-b border-[rgba(220,31,255,0.2)] py-3'
            : 'bg-[rgba(0,0,0,0.7)] backdrop-blur-sm border-b border-[rgba(220,31,255,0.1)] shadow-md py-5',
          className
        )}
      >
        <Container className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Logo variant={logoVariant} withText={true} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => {
                const isActive = activeRoute === item.href || 
                                (item.dropdownItems?.some(subItem => activeRoute === subItem.href) ?? false);
                
                return item.dropdownItems ? (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <NavDropdown
                      label={item.label}
                      items={item.dropdownItems}
                      isActive={isActive}
                      onNavClick={handleNavClick}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "font-medium relative group transition-colors duration-300",
                        isActive 
                          ? "text-primary-purple-300" 
                          : "text-gray-200 hover:text-primary-blue-300"
                      )}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.label}
                      <span 
                        className={cn(
                          "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-purple-500 via-primary-blue-500 to-primary-green-500 transition-all duration-300",
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        )}
                      ></span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* CTA Button */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <Button variant="gradient-tri" size="md" href={ctaHref}>
                {ctaLabel}
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="h-0.5 w-full bg-primary-purple-500"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="h-0.5 w-full bg-primary-blue-500"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="h-0.5 w-full bg-primary-green-500"
                />
              </div>
            </button>
          </div>
        </Container>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[rgba(0,0,0,0.95)] backdrop-blur-xl border-b border-[rgba(220,31,255,0.2)] shadow-lg"
            >
              <Container className="py-6">
                <nav className="flex flex-col space-y-5">
                  {navItems.map((item) => {
                    const isActive = activeRoute === item.href || 
                                    (item.dropdownItems?.some(subItem => activeRoute === subItem.href) ?? false);
                    
                    return item.dropdownItems ? (
                      <MobileNavDropdown
                        key={item.href}
                        label={item.label}
                        items={item.dropdownItems}
                        isActive={isActive}
                        onNavClick={handleNavClick}
                      />
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "font-medium py-2 px-3 rounded-lg transition-colors duration-300 relative",
                          isActive 
                            ? "text-white bg-primary-purple-500/20 border-l-2 border-primary-purple-500" 
                            : "text-gray-200 hover:text-primary-blue-300 hover:bg-primary-blue-500/10"
                        )}
                        onClick={(e) => handleNavClick(e, item.href)}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                  <div className="pt-3">
                    <Button variant="gradient-tri" size="md" fullWidth href={ctaHref}>
                      {ctaLabel}
                    </Button>
                  </div>
                </nav>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      {/* Header-Content Separator */}
      <div className="w-full h-20"></div> {/* This creates space between header and content */}
    </>
  );
}; 