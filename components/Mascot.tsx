import React from 'react';

export const MascotFace: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#000" stroke="#ccff00" strokeWidth="4"/>
    <rect x="25" y="35" width="15" height="15" fill="#ccff00" className="animate-pulse"/>
    <rect x="60" y="35" width="15" height="15" fill="#ccff00" className="animate-pulse"/>
    <path d="M30 70 Q50 85 70 70" stroke="#ff0099" strokeWidth="4" strokeLinecap="round"/>
    <path d="M15 50 L5 40" stroke="#00f0ff" strokeWidth="3"/>
    <path d="M85 50 L95 40" stroke="#00f0ff" strokeWidth="3"/>
  </svg>
);

export const MascotFull: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`relative group ${className}`}>
    <div className="absolute -inset-1 bg-gradient-to-r from-acid-green to-hot-pink rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
    <div className="relative flex items-center justify-center bg-black rounded-full border-2 border-acid-green p-2">
      <MascotFace className="w-10 h-10" />
    </div>
  </div>
);