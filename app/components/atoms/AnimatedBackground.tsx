"use client";

import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-40 overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      {/* Static gradient background */}
      <div className="absolute inset-0">
        {/* Main background gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-black"></div>
        <div className="absolute -top-40 -right-40 w-[40vw] h-[40vw] bg-primary-purple-500/10 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-[40vw] h-[40vw] bg-primary-blue-500/10 blur-[100px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-primary-green-500/5 blur-[120px] rounded-full"></div>
      </div>
      
      {/* Subtle radial gradients */}
      <div 
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full opacity-10 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(220, 31, 255, 0.2) 0%, transparent 70%)',
        }}
      />
      
      <div
        className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full opacity-10 blur-[80px]"
        style={{
          background: 'radial-gradient(circle, rgba(3, 225, 255, 0.2) 0%, transparent 70%)',
        }}
      />
      
      <div
        className="absolute top-2/3 left-1/2 w-[25vw] h-[25vw] rounded-full opacity-10 blur-[60px]"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 163, 0.2) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}; 