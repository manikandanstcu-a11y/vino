import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { businessInfo, getWhatsAppLink } from '../data/mehendiData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Floating Tooltip Pill */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#38070F] text-[#F3E5AB] text-xs font-medium py-2 px-3.5 rounded-full border border-[#D4AF37]/50 shadow-2xl animate-bounce">
          <span>Book on WhatsApp</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="text-stone-400 hover:text-white ml-1"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Vino Mehendi Arts on WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/60"
      >
        {/* Glowing pulse rings */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping group-hover:opacity-100 opacity-75" />
        <span className="absolute -inset-0.5 rounded-full border-2 border-[#D4AF37] opacity-60" />

        <MessageCircle className="w-7 h-7 relative z-10 text-white fill-white/20" />
      </a>
    </div>
  );
}
