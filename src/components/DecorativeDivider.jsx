import React from 'react';

/**
 * Royal Paisley / Mandala ornament line divider
 */
export default function DecorativeDivider({ className = "", light = false }) {
  const strokeColor = light ? "#E5C158" : "#D4AF37";
  const lineColor = light ? "bg-amber-200/30" : "bg-amber-600/30";

  return (
    <div className={`flex items-center justify-center gap-3 my-4 ${className}`}>
      <span className={`h-[1px] w-12 sm:w-20 ${lineColor}`} />
      
      {/* Central Henna Paisley / Lotus Motif */}
      <svg
        className="w-8 h-8 flex-shrink-0 animate-pulse"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="18" stroke={strokeColor} strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="20" cy="20" r="14" stroke={strokeColor} strokeWidth="0.75" />
        <path
          d="M20 8C21.5 14 26 18.5 32 20C26 21.5 21.5 26 20 32C18.5 26 14 21.5 8 20C14 18.5 18.5 14 20 8Z"
          fill={strokeColor}
          fillOpacity="0.85"
        />
        <circle cx="20" cy="20" r="3.5" fill={light ? "#4A0E17" : "#FCFAF7"} />
      </svg>

      <span className={`h-[1px] w-12 sm:w-20 ${lineColor}`} />
    </div>
  );
}
