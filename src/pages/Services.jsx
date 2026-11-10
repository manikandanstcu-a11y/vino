import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  Clock, 
  Sparkles, 
  MessageCircle, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  AlertCircle, 
  ShieldCheck, 
  MapPin,
  ArrowRight
} from 'lucide-react';
import { services, faqs, getWhatsAppLink, businessInfo } from '../data/mehendiData';
import SEO from '../components/SEO';
import PageBanner from '../components/PageBanner';
import DecorativeDivider from '../components/DecorativeDivider';

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FCFAF7]">
      <SEO
        title="Services & Pricing | Bridal, Engagement & Festive Mehendi"
        description="Explore luxury mehendi packages in Dindigul by Vino Mehendi Arts. Bridal mehendi from ₹2,500, Engagement from ₹999, Baby shower ₹799, and Festive from ₹49."
      />

      {/* 1. Page Banner */}
      <PageBanner
        title="Services & Pricing"
        subtitle="Transparent pricing, bespoke luxury designs, and doorstep service across Dindigul and nearby locations."
        breadcrumb="Services"
      />

      {/* 2. Short Note Callout */}
      <div className="max-w-5xl mx-auto px-4 -mt-6 sm:-mt-8 relative z-20">
        <div className="bg-[#FAF6F0] border-2 border-[#D4AF37]/50 rounded-2xl p-4 sm:p-5 shadow-xl flex items-center gap-3 text-stone-800 text-xs sm:text-sm">
          <AlertCircle className="w-5 h-5 text-[#997819] flex-shrink-0" />
          <p className="font-medium">
            <strong className="text-[#38070F]">Special Note:</strong> Home service is available across Dindigul town & surrounding districts. Final price may vary based on customization complexity, forearm coverage, and bridal feet detailing.
          </p>
        </div>
      </div>

      {/* 3. 4 Large Luxury Cards */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        {services.map((service, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl border border-[#D4AF37]/40 shadow-xl overflow-hidden hover:border-[#D4AF37] hover:shadow-2xl transition-all duration-300"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Photo Column */}
                <div className={`lg:col-span-5 relative min-h-[320px] lg:min-h-full ${isReversed ? 'lg:order-2' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-[#38070F]/90 backdrop-blur-md text-[#F3E5AB] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-[#D4AF37]/60 shadow-lg">
                    {service.badge}
                  </div>

                  {/* Approximate Duration Tag */}
                  <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Duration: {service.duration}</span>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between ${isReversed ? 'lg:order-1' : ''}`}>
                  <div>
                    {/* Header: Title and Price */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-4 border-b border-stone-100">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#997819]">
                          Service Package 0{index + 1}
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#38070F] mt-1">
                          {service.title}
                        </h2>
                      </div>

                      <div className="text-left sm:text-right">
                        <span className="text-xs text-stone-500 block">Pricing</span>
                        <span className="font-serif text-2xl sm:text-3xl font-bold text-[#997819]">
                          {service.priceDisplay}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-5 text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <div className="mt-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#38070F] mb-3">
                        What's Included:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                            <div className="w-4 h-4 rounded-full bg-[#FAF6F0] border border-[#D4AF37] flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 text-[#997819]" />
                            </div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Booking Footer */}
                  <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-stone-500 text-center sm:text-left">
                      ✓ Free consultation • 100% natural Rajasthani henna
                    </span>

                    <a
                      href={getWhatsAppLink(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-[#2B060C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B38728] shadow-md hover:scale-105 active:scale-95 transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-[#2B060C]" />
                      <span>Book on WhatsApp</span>
                    </a>
                  </div>

                </div>

              </div>
            </motion.div>
          );
        })}
      </section>

      {/* 4. Frequently Asked Questions Accordion */}
      <section className="py-20 bg-[#FAF6F0] border-t border-[#D4AF37]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#997819] font-semibold bg-[#F8F1DC] px-4 py-1 rounded-full border border-[#D4AF37]/40">
              Common Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#38070F] mt-3">
              Frequently Asked Questions
            </h2>
            <DecorativeDivider />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#D4AF37]/40 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-stone-50"
                  >
                    <span className="font-serif text-lg sm:text-xl font-bold text-[#38070F]">
                      {faq.q}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#FAF6F0] border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0 text-[#997819]">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 sm:px-6 pb-6 text-stone-600 text-sm sm:text-base leading-relaxed border-t border-stone-100 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <p className="text-sm text-stone-600">
              Have a custom request or event with multiple bridesmaids?
            </p>
            <a
              href={getWhatsAppLink("Custom Group Booking")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#997819] hover:text-[#38070F] mt-1 underline"
            >
              <span>Contact Vino for custom group packages</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
