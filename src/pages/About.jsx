import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Heart, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  MessageCircle, 
  Palette, 
  HeartHandshake, 
  Leaf, 
  Award,
  ArrowRight
} from 'lucide-react';
import { businessInfo, bookingProcess, getWhatsAppLink } from '../data/mehendiData';
import SEO from '../components/SEO';
import PageBanner from '../components/PageBanner';
import DecorativeDivider from '../components/DecorativeDivider';

export default function About() {
  const iconStepMap = {
    MessageCircle: MessageCircle,
    Palette: Palette,
    HeartHandshake: HeartHandshake,
  };

  return (
    <div className="min-h-screen bg-[#FCFAF7]">
      <SEO
        title="About Vino | Professional Bridal Henna Artist"
        description="Meet Vino, Dindigul's premier bridal mehendi artist with 6+ years of experience crafting bespoke royal henna with 100% natural organic ingredients."
      />

      {/* 1. Page Banner */}
      <PageBanner
        title="About The Artist"
        subtitle="Passionate about transforming your most cherished wedding dreams into intricate, royal henna storytelling."
        breadcrumb="About"
      />

      {/* 2. Main Story Section with Artist Portrait */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Artist Portrait with royal frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold border */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-dashed border-[#D4AF37]/50 transform -rotate-2 pointer-events-none" />
              
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37] bg-stone-100">
                <img
                  src="/images/artist-vino.jpg"
                  alt="Vino - Mehendi Artist in Dindigul"
                  className="w-full h-auto object-cover aspect-square"
                />
                
                {/* Floating Experience Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#38070F]/90 backdrop-blur-md p-4 rounded-xl border border-[#D4AF37]/60 text-white shadow-xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] block font-semibold">
                      Master Mehendi Artist
                    </span>
                    <h4 className="font-serif text-lg font-bold text-white">Vino Mehendi Arts</h4>
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-2xl font-bold text-[#F3E5AB]">6+</span>
                    <span className="text-[10px] uppercase tracking-wider text-stone-300 block">Years Exp.</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Artist Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8F1DC] border border-[#D4AF37]/40 text-[#997819] text-xs uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Meet Your Mehendi Artist</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#38070F] leading-tight">
              "Every Stroke is Handcrafted with Deep Love & Tradition"
            </h2>

            <DecorativeDivider className="justify-start" />

            <div className="text-stone-700 space-y-4 text-base sm:text-lg font-light leading-relaxed">
              <p>
                Hello! I am <strong className="text-[#38070F] font-semibold">Vino</strong>, the founder and lead artist behind <strong>Vino Mehendi Arts</strong> in Dindigul, Tamil Nadu.
              </p>
              <p>
                What began years ago as a fascination with intricate Indian folk art and bridal adornment quickly blossomed into my lifelong calling. Over the last 6+ years, I have had the immense blessing of adorning more than 500 brides across Dindigul, Palani, Madurai, Kodaikanal, and nearby regions.
              </p>
              <p>
                To me, bridal mehendi is never a rushed commercial appointment. It is an intimate celebration where your personal love journey, wedding dates, customized portraits, and ancestral Tamil traditions are woven onto your hands with utter precision.
              </p>
              <p>
                I personally formulate every single henna cone from fresh organic Sojat Rajasthani henna leaves, pure essential oils (eucalyptus, cajeput & tea tree), and natural lemon juice. No chemicals, no toxic dyes — only the purest blessing of nature for your sensitive skin and an unmatched, deeply rich mahogany stain.
              </p>
            </div>

            {/* Quick Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Custom bride & groom portrait motifs</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Doorstep service at home & venues</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Pure triple-filtered organic paste</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Complimentary aftercare guidance</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppLink("Personal Consultation")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider font-bold text-[#2B060C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B38728] shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#2B060C]" />
                <span>Chat Directly with Vino</span>
              </a>

              <a
                href={businessInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider text-[#38070F] bg-white border border-[#D4AF37]/50 shadow-sm hover:bg-[#FAF6F0] transition-colors"
              >
                <span>View My Instagram Work</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </a>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 3. Stats Row */}
      <section className="py-16 bg-[#38070F] text-white border-y border-[#D4AF37]/30 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="px-4 py-2"
            >
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#F3E5AB] block mb-1">
                {businessInfo.happyBrides}
              </span>
              <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                Happy Brides
              </p>
              <span className="text-[11px] text-stone-300 mt-1 block">In Dindigul & Tamil Nadu</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="px-4 py-2"
            >
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#F3E5AB] block mb-1">
                {businessInfo.experienceYears}
              </span>
              <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                Years of Experience
              </p>
              <span className="text-[11px] text-stone-300 mt-1 block">Continuous Artistry</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="px-4 py-2"
            >
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#F3E5AB] block mb-1">
                {businessInfo.designsCreated}
              </span>
              <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                Designs Created
              </p>
              <span className="text-[11px] text-stone-300 mt-1 block">Unique & Freehand</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="px-4 py-2"
            >
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#F3E5AB] block mb-1">
                4.9 ★
              </span>
              <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                Client Satisfaction
              </p>
              <span className="text-[11px] text-stone-300 mt-1 block">100% Organic Henna</span>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Our Process: 3 Steps (Message us, Choose your design, Get beautiful mehendi) */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#997819] font-semibold bg-[#F8F1DC] px-4 py-1 rounded-full border border-[#D4AF37]/40">
            Effortless Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#38070F] mt-3">
            Our Simple 3-Step Process
          </h2>
          <DecorativeDivider />
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            Booking your mehendi session is smooth, transparent, and completely stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {bookingProcess.map((item, index) => {
            const IconComponent = iconStepMap[item.icon] || Sparkles;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative bg-white rounded-3xl p-8 border border-[#D4AF37]/35 shadow-lg hover:shadow-2xl hover:border-[#D4AF37] transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#D4AF37]">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#38070F] flex items-center justify-center text-[#F3E5AB] group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#38070F] mb-3 group-hover:text-[#997819] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-stone-600 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-[#997819] font-semibold">
                  <span>Step {item.step} of 03</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. Natural Henna Secrets & Stain Tips */}
      <section className="py-16 bg-[#FAF6F0] border-t border-[#D4AF37]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/40 shadow-xl flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-full bg-[#38070F] flex-shrink-0 flex items-center justify-center text-[#D4AF37] shadow-lg">
              <Leaf className="w-10 h-10" />
            </div>

            <div className="space-y-3 text-center md:text-left flex-1">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#38070F]">
                Our Promise: 100% Herbal & Chemical-Free
              </h3>
              <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
                We never use store-bought pre-mixed chemical cones that burn or fade prematurely. Every batch is prepared fresh with natural essential oils to ensure maximum color depth and complete safety for you and your family.
              </p>
              <div className="pt-2">
                <a
                  href={getWhatsAppLink("Inquire About Henna")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#997819] hover:text-[#38070F]"
                >
                  <span>Have questions about bridal skin preparation? Ask Vino</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
