import React from 'react';

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Globe Grid */}
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="50" cy="50" rx="20" ry="45" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <ellipse cx="50" cy="50" rx="45" ry="20" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        
        {/* Plane Path (Red) */}
        <path 
          d="M20 70 Q 40 85 60 50" 
          stroke="#ef4444" 
          strokeWidth="3" 
          strokeLinecap="round" 
          fill="none"
        />
        
        {/* Plane Shape */}
        <g transform="translate(55, 45) rotate(-35)">
          <path 
            d="M0 0 L25 10 L10 12 L12 25 L0 0Z" 
            fill="currentColor" 
          />
          <path 
            d="M5 5 L15 10 L8 11 L5 5Z" 
            fill="#ef4444" 
          />
        </g>
      </svg>
    </div>
  );
}
