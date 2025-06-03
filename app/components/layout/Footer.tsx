"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden mx-2">
      <div className="w-full bg-black/30 backdrop-blur-sm border-t border-white/5">
        <div className="container mx-auto py-10 px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-8 md:gap-12 mb-12">
            {/* Brand section */}
            <div className="space-y-5">
              <Link href="/" className="inline-flex">
                <h2 className="text-2xl font-bold tracking-tight gradient-text gradient-purple-blue">
                  Solieum
                </h2>
              </Link>
              <p className="text-sm text-neutral-300 max-w-xs">
                Revolutionizing blockchain tech with a unified DeFi ecosystem that bridges the gap between traditional finance and decentralized innovation.
              </p>
              
              {/* Social links with SVG icons */}
              <div className="flex items-center gap-6 pt-3">
                {/* Twitter/X icon */}
                <Link 
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-white/5 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </Link>
                
                {/* Discord icon */}
                <Link 
                  href="https://discord.com"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-white/5 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.977-.608 1.414a17.97 17.97 0 0 0-5.487 0 9.753 9.753 0 0 0-.616-1.414.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.3 13.3 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .078.009c.12.098.246.195.373.288a.075.075 0 0 1-.006.125c-.598.35-1.22.645-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.183 0-2.157-1.068-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.068-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"></path>
                  </svg>
                </Link>
                
                {/* Medium icon */}
                <Link 
                  href="https://medium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-white/5 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Links section 1 */}
            <div>
              <h3 className="text-sm font-semibold mb-5 uppercase tracking-wider">
                Platform
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/features" className="text-neutral-300 hover:text-white transition-colors text-sm cursor-pointer">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/roadmap" className="text-neutral-300 hover:text-white transition-colors text-sm cursor-pointer">
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link href="/tokenomics" className="text-neutral-300 hover:text-white transition-colors text-sm cursor-pointer">
                    Tokenomics
                  </Link>
                </li>
                <li>
                  <Link href="/technology" className="text-neutral-300 hover:text-white transition-colors text-sm cursor-pointer">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Links section 2 */}
            <div>
              <h3 className="text-sm font-semibold mb-5 uppercase tracking-wider">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/docs" className="text-neutral-300 hover:text-white transition-colors text-sm cursor-pointer">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/whitepaper" className="text-neutral-300 hover:text-white transition-colors text-sm cursor-pointer">
                    Whitepaper
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-neutral-300 hover:text-white transition-colors text-sm cursor-pointer">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-neutral-300 hover:text-white transition-colors text-sm cursor-pointer">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-t border-white/5 my-6" />
          
          {/* Copyright */}
          <div className="flex flex-col-reverse sm:flex-row justify-between items-center py-6">
            <p className="text-xs text-neutral-400 mt-6 sm:mt-0">
              © {new Date().getFullYear()} Solieum. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-xs text-neutral-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-neutral-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 