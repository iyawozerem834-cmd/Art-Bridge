import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`relative group ${className}`}>
    <svg viewBox="0 0 100 60" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00f2ea" />
          <stop offset="50%" stopColor="#9d00ff" />
          <stop offset="100%" stopColor="#ff0080" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* The Smile (Inverted Bridge) */}
      {/* Background glow */}
      <path 
        d="M 15 20 Q 50 65 85 20" 
        fill="none" 
        stroke="url(#logoGradient)" 
        strokeWidth="8" 
        strokeLinecap="round"
        className="opacity-40 blur-sm"
      />
      {/* Main stroke */}
      <path 
        d="M 15 20 Q 50 65 85 20" 
        fill="none" 
        stroke="url(#logoGradient)" 
        strokeWidth="6" 
        strokeLinecap="round"
      />

      {/* Left Eye */}
      <g className="animate-float" style={{ animationDuration: '3s' }}>
        <circle cx="35" cy="10" r="5" fill="white" />
        <circle cx="37" cy="8" r="1.5" fill="#0f1014" />
      </g>

      {/* Right Eye */}
      <g className="animate-float" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
        <circle cx="65" cy="10" r="5" fill="white" />
        <circle cx="63" cy="8" r="1.5" fill="#0f1014" />
      </g>
    </svg>
  </div>
);