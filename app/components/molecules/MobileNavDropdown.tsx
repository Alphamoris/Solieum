import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/app/styles/utils';
import { DropdownItem } from './NavDropdown';

interface MobileNavDropdownProps {
  label: string;
  items: DropdownItem[];
  isActive: boolean;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const MobileNavDropdown: React.FC<MobileNavDropdownProps> = ({
  label,
  items,
  isActive,
  onNavClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className={cn(
          "font-medium py-2 px-3 rounded-lg transition-colors duration-300 relative w-full text-left flex justify-between items-center",
          isActive 
            ? "text-white bg-primary-purple-500/20 border-l-2 border-primary-purple-500" 
            : "text-gray-200 hover:text-primary-blue-300 hover:bg-primary-blue-500/10"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className={cn("transition-transform duration-200", isOpen ? "rotate-180" : "")}
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="py-2 pl-5">
              {items.map((item, index) => (
                <Link 
                  key={index} 
                  href={item.href}
                  className="block py-2 px-3 hover:bg-primary-purple-500/10 transition-colors duration-200 rounded-lg"
                  onClick={(e) => {
                    onNavClick(e, item.href);
                    setIsOpen(false);
                  }}
                >
                  <div className="font-medium text-white">{item.label}</div>
                  {item.description && (
                    <div className="text-sm text-gray-400">{item.description}</div>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 