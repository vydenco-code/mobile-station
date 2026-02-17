import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-10" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 160 30" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Vyden Co."
    >
      <text 
        x="0" 
        y="22" 
        fill="#0B2338" 
        style={{ fontSize: '22px', fontWeight: '700', fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em' }}
      >
        VYDEN CO.
      </text>
    </svg>
  );
};