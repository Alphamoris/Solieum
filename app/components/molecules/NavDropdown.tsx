import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/app/styles/utils';
import { IconType } from 'react-icons';

export interface DropdownItem {
  label: string;
  href: string;
  description?: string;
  icon?: IconType;
}

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
  isActive: boolean;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const NavDropdown: React.FC<NavDropdownProps> = ({
  label,
  items,
  isActive,
  onNavClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={cn(
          "font-medium relative group transition-colors cursor-pointer duration-300 flex items-center",
          isActive 
            ? "text-primary-purple-300" 
            : "text-gray-200 hover:text-primary-blue-300"
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
          className={cn("ml-1 transition-transform duration-200", isOpen ? "rotate-180" : "")}
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
        <span 
          className={cn(
            "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-purple-500 via-primary-blue-500 to-primary-green-500 transition-all duration-300",
            isActive ? "w-full" : "w-0 group-hover:w-full"
          )}
        ></span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-64 bg-[rgba(0,0,0,0.9)] backdrop-blur-xl border border-[rgba(220,31,255,0.2)] rounded-xl shadow-xl z-50"
          >
            <div className="py-2">
              {items.map((item, index) => (
                <Link 
                  key={index} 
                  href={item.href}
                  className="block px-4 py-3 hover:bg-primary-purple-500/20 transition-colors duration-200"
                  onClick={(e) => {
                    onNavClick(e, item.href);
                    setIsOpen(false);
                  }}
                >
                  <div className="flex items-center">
                    {item.icon && (
                      <span className="mr-2 text-primary-purple-400">
                        <item.icon size={18} />
                      </span>
                    )}
                    <div>
                      <div className="font-medium text-white">{item.label}</div>
                      {item.description && (
                        <div className="text-sm text-gray-400">{item.description}</div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 