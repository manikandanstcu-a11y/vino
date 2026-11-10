import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { businessInfo, getWhatsAppLink } from '../data/mehendiData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#38070F]/95 backdrop-blur-md shadow-xl border-b border-[#D4AF37]/30 py-3'
          : 'bg-gradient-to-b from-[#250408]/90 via-[#38070F]/70 to-transparent py-4 md:py-5 border-b border-[#D4AF37]/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#997819] via-[#D4AF37] to-[#F3E5AB] p-[1.5px] shadow-md group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-[#38070F] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
            </div>
          </div>

          <div className="flex flex-col text-left">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white group-hover:text-[#F3E5AB] transition-colors">
              Vino Mehendi Arts
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[#D4AF37] font-medium">
              Dindigul • Tamil Nadu
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-3.5 py-2 text-sm tracking-wide font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-[#F3E5AB] bg-[#D4AF37]/20 border border-[#D4AF37]/50 shadow-sm'
                    : 'text-stone-200 hover:text-[#F3E5AB] hover:bg-white/5'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Action Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${businessInfo.phone}`}
            className="flex items-center gap-1.5 text-xs text-[#F3E5AB] hover:text-white transition-colors px-2 py-1"
            title="Call Vino"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-medium">{businessInfo.phone}</span>
          </a>

          <a
            href={getWhatsAppLink("Bridal Mehendi")}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center px-5 py-2 text-xs uppercase tracking-wider font-semibold text-[#2B060C] transition-all duration-300 rounded-full shadow-md bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B38728] hover:shadow-lg hover:shadow-[#D4AF37]/30 hover:scale-105 active:scale-95"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-[11px] uppercase tracking-wider font-bold text-[#2B060C] rounded-full bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B38728]"
          >
            Book
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-stone-200 hover:text-[#D4AF37] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#38070F] border-b border-[#D4AF37]/30 px-6 pt-4 pb-6 space-y-4 shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'text-[#F3E5AB] bg-[#D4AF37]/20 border-l-4 border-[#D4AF37]'
                        : 'text-stone-200 hover:text-[#F3E5AB] hover:bg-white/5'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="pt-3 border-t border-[#D4AF37]/20 flex flex-col gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 text-sm font-bold uppercase tracking-wider text-[#2B060C] rounded-full bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B38728] shadow-md"
              >
                Book on WhatsApp
              </a>
              <div className="flex justify-between items-center text-xs text-[#F3E5AB]/80 px-2 pt-1">
                <a href={`tel:${businessInfo.phone}`} className="flex items-center gap-1.5 hover:text-white">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Call {businessInfo.phone}</span>
                </a>
                <span>Dindigul, TN</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
