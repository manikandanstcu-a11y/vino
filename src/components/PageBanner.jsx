import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DecorativeDivider from './DecorativeDivider';

export default function PageBanner({ title, subtitle, breadcrumb = "Home" }) {
  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-[#2E050B] via-[#4A0E17] to-[#38070F] text-center text-white overflow-hidden border-b border-[#D4AF37]/30 shadow-lg">
      {/* Background Decorative Mandala Rings */}
      <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full border-2 border-dashed border-[#D4AF37] animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[450px] h-[450px] rounded-full border border-[#D4AF37]" />
        <div className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-[#D4AF37]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 z-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs md:text-sm tracking-widest uppercase text-[#F3E5AB]/80 mb-4 bg-black/30 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 backdrop-blur-sm"
        >
          <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
          <span className="text-[#D4AF37]">/</span>
          <span className="text-[#D4AF37] font-semibold">{breadcrumb}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold tracking-wide text-white drop-shadow-md"
        >
          {title}
        </motion.h1>

        <DecorativeDivider light className="my-3" />

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-[#F3E5AB]/90 max-w-2xl mx-auto font-light leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Bottom Subtle Gold Wave accent */}
      <div className="absolute -bottom-px left-0 right-0 h-3 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
    </div>
  );
}
