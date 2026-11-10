import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageCircle, Heart, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { Instagram } from './InstagramIcon';
import { businessInfo, getWhatsAppLink, services } from '../data/mehendiData';
import DecorativeDivider from './DecorativeDivider';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#26050B] text-stone-300 pt-16 pb-12 border-t-2 border-[#D4AF37]/40 overflow-hidden">
      {/* Decorative Gold Glow Circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4A0E17]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#997819] via-[#D4AF37] to-[#F3E5AB] p-[1.5px] shadow-lg">
                <div className="w-full h-full rounded-full bg-[#38070F] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                  {businessInfo.name}
                </h3>
                <p className="text-[11px] uppercase tracking-widest text-[#D4AF37]">
                  {businessInfo.subTagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed font-light">
              Crafting timeless bridal memories and royal henna traditions in Dindigul. We use 100% natural, triple-filtered Rajasthani organic henna with guaranteed deep, dark stains.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={businessInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-[#D4AF37]/40 flex items-center justify-center text-[#F3E5AB] hover:bg-[#D4AF37] hover:text-[#26050B] transition-all duration-300 shadow-md"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-md"
                aria-label="WhatsApp Chat"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={`tel:${businessInfo.phone}`}
                className="w-10 h-10 rounded-full bg-white/5 border border-[#D4AF37]/40 flex items-center justify-center text-[#F3E5AB] hover:bg-[#D4AF37] hover:text-[#26050B] transition-all duration-300 shadow-md"
                aria-label="Call Vino Mehendi Arts"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#F3E5AB] mb-4 pb-1 border-b border-[#D4AF37]/30 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Vino', path: '/about' },
                { name: 'Services & Pricing', path: '/services' },
                { name: 'Photo Gallery', path: '/gallery' },
                { name: 'Book an Appointment', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 hover:text-[#F3E5AB] transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick List */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#F3E5AB] mb-4 pb-1 border-b border-[#D4AF37]/30 inline-block">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((srv) => (
                <li key={srv.id}>
                  <a
                    href={getWhatsAppLink(srv.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between hover:text-[#F3E5AB] transition-colors"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {srv.title}
                    </span>
                    <span className="text-xs text-[#D4AF37] font-medium bg-[#38070F] px-2 py-0.5 rounded border border-[#D4AF37]/30">
                      ₹{srv.startingPrice}+
                    </span>
                  </a>
                </li>
              ))}
              <li className="pt-2 text-xs text-[#F3E5AB]/80 italic">
                * Doorstep service available across Dindigul
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3.5">
            <h4 className="font-serif text-lg font-semibold text-[#F3E5AB] mb-4 pb-1 border-b border-[#D4AF37]/30 inline-block">
              Contact Us
            </h4>

            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-medium text-white block">Location</span>
                <span className="text-stone-300">Dindigul, Tamil Nadu, India</span>
                <span className="text-xs text-amber-200/70 block mt-0.5">(Home service across Dindigul district)</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm">
              <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-medium text-white block">Phone / WhatsApp</span>
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="text-stone-300 hover:text-[#F3E5AB] transition-colors"
                >
                  +91 {businessInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm">
              <Instagram className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-medium text-white block">Instagram</span>
                <a
                  href={businessInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-[#F3E5AB] transition-colors break-all"
                >
                  {businessInfo.instagramHandle}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm pt-1">
              <Clock className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-medium text-white block">Operating Hours</span>
                <span className="text-xs text-stone-300">Mon - Sun: 7:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {currentYear} {businessInfo.name}. All rights reserved.</span>
          </p>

          <p className="flex items-center gap-1 text-center sm:text-right">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline mx-0.5" />
            <span>for beautiful brides in Dindigul & beyond</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
