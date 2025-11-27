import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`relative group ${className}`}>
    <svg viewBox="0 0 100 60" className="w-full h-full overflow-visible">
      {/* Glow Effect */}
      <path 
        d="M 10 10 Q 50 60 90 10" 
        fill="none" 
        stroke="url(#logoGradient)" 
        strokeWidth="8" 
        strokeLinecap="round"
        className="blur-md opacity-50"
      />
      
      {/* The Bridge (Smile) */}
      <path 
        d="M 10 10 Q 50 60 90 10" 
        fill="none" 
        stroke="url(#logoGradient)" 
        strokeWidth="6" 
        strokeLinecap="round"
      />

      {/* Left Eye */}
      <circle cx="35" cy="0" r="6" fill="white" className="animate-blink origin-center" />
      <circle cx="35" cy="0" r="2" fill="#0a0a0c" className="animate-pulse" />

      {/* Right Eye */}
      <circle cx="65" cy="0" r="6" fill="white" className="animate-blink origin-center" style={{ animationDelay: '0.2s' }} />
      <circle cx="65" cy="0" r="2" fill="#0a0a0c" className="animate-pulse" />
      
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00f2ea" />
          <stop offset="50%" stopColor="#7000ff" />
          <stop offset="100%" stopColor="#ff0050" />
        </linearGradient>
      </defs>
    </svg>
    
    {/* Text Label - only visible on hover or large screens ideally, but keeping clean here */}
  </div>
);