import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  MessageCircle, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Leaf, 
  Home as HomeIcon, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Heart,
  PhoneCall
} from 'lucide-react';
import { Instagram } from '../components/InstagramIcon';
import { 
  businessInfo, 
  services, 
  whyChooseUs, 
  testimonials, 
  galleryImages, 
  getWhatsAppLink 
} from '../data/mehendiData';
import SEO from '../components/SEO';
import DecorativeDivider from '../components/DecorativeDivider';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Preview 6 images for home
  const previewGallery = galleryImages.slice(0, 6);

  // Icon mapping for Why Choose Us
  const iconMap = {
    Leaf: Leaf,
    Sparkles: Sparkles,
    ShieldCheck: ShieldCheck,
    Home: HomeIcon,
  };

  return (
    <div className="min-h-screen bg-[#FCFAF7] overflow-hidden">
      <SEO
        title="Home | Premium Bridal & Festive Mehendi in Dindigul"
        description="Vino Mehendi Arts in Dindigul offers bespoke royal bridal mehendi, engagement henna, and festive designs. 100% natural organic henna with guaranteed deep dark stains."
      />

      {/* =========================================================================
          1. HERO SECTION (Full Screen with /images/hero.jpg & Dark Overlay)
         ========================================================================= */}
      <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background Image with dark luxury gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.jpg"
            alt="Royal Bridal Henna Art by Vino Mehendi Arts Dindigul"
            className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          />
          {/* Multi-layered dark maroon & vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#200307] via-[#35070E]/80 to-[#180205]/85" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(20,2,4,0.7)_100%)]" />
        </div>

        {/* Ambient floating gold sparkles effect */}
        <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
          <div className="w-[800px] h-[800px] rounded-full border border-[#D4AF37]/15 animate-[spin_120s_linear_infinite]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          
          {/* Animated Gold Tag */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/60 text-[#F3E5AB] text-xs sm:text-sm font-medium tracking-widest uppercase mb-6 backdrop-blur-md shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Dindigul's Premier Bridal Henna Studio</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.15] drop-shadow-lg"
          >
            {businessInfo.tagline}
          </motion.h1>

          <DecorativeDivider light className="my-5" />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-2xl text-[#F3E5AB]/95 max-w-3xl mx-auto font-light leading-relaxed drop-shadow"
          >
            {businessInfo.subTagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-2 text-xs sm:text-sm text-stone-300 font-normal tracking-wide"
          >
            ✨ 100% Herbal & Chemical-Free Henna • Doorstep Service in Dindigul & Surrounding Towns
          </motion.p>

          {/* Buttons: "Book on WhatsApp" & "View Gallery" */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <a
              href={getWhatsAppLink("Bridal Mehendi")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm sm:text-base font-bold uppercase tracking-wider text-[#2B060C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B38728] shadow-xl hover:shadow-[#D4AF37]/40 hover:scale-105 active:scale-95 transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5 text-[#2B060C] group-hover:rotate-12 transition-transform" />
              <span>Book on WhatsApp</span>
            </a>

            <Link
              to="/gallery"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-semibold tracking-wider text-white bg-white/10 hover:bg-white/20 border border-[#D4AF37]/50 backdrop-blur-md shadow-lg hover:border-[#D4AF37] transition-all duration-300"
            >
              <span>View Gallery</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </Link>
          </motion.div>

          {/* Quick Stats Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
          >
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#F3E5AB]">500+</span>
              <p className="text-[11px] uppercase tracking-wider text-stone-300">Happy Brides</p>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#F3E5AB]">6+ Years</span>
              <p className="text-[11px] uppercase tracking-wider text-stone-300">Experience</p>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#F3E5AB]">100% Organic</span>
              <p className="text-[11px] uppercase tracking-wider text-stone-300">No Chemicals</p>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#F3E5AB]">4.9 ★</span>
              <p className="text-[11px] uppercase tracking-wider text-stone-300">Google & Insta Rating</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================================================
          2. SHORT SERVICES PREVIEW (4 Cards + See All Services Button)
         ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#997819] font-semibold bg-[#F8F1DC] px-4 py-1 rounded-full border border-[#D4AF37]/40">
            Artisanal Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#38070F] mt-3">
            Mehendi For Every Celebration
          </h2>
          <DecorativeDivider />
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            From intricate bridal storytelling to graceful festive accents, discover custom hand-poured henna tailored for your special day.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-md hover:shadow-2xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image container with hover zoom */}
                <div className="relative h-56 overflow-hidden bg-stone-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 right-3 bg-[#38070F]/90 backdrop-blur-sm text-[#F3E5AB] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#D4AF37]/60 shadow-md">
                    {service.badge}
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="text-xs text-[#F3E5AB] font-light">Price</span>
                    <p className="text-lg font-serif font-bold text-white drop-shadow">
                      {service.priceDisplay}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="font-serif text-xl font-bold text-[#38070F] group-hover:text-[#997819] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-0">
                <a
                  href={getWhatsAppLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider font-semibold text-[#38070F] bg-[#FAF6F0] hover:bg-[#38070F] hover:text-[#F3E5AB] border border-[#D4AF37]/50 flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Book Now</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* "See all services" button */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wider font-bold text-[#38070F] hover:text-[#997819] border-b-2 border-[#D4AF37] pb-1 hover:gap-3 transition-all"
          >
            <span>See All Packages & Detailed Inclusions</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          3. WHY CHOOSE US (Organic Henna, Custom Designs, Dark Color, Home Service)
         ========================================================================= */}
      <section className="py-20 bg-gradient-to-b from-[#38070F] via-[#4A0E17] to-[#2B050B] text-white relative overflow-hidden border-y border-[#D4AF37]/30">
        {/* Subtle decorative mandala pattern */}
        <div className="absolute inset-0 bg-mandala-pattern opacity-5 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#F3E5AB] font-semibold bg-white/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 backdrop-blur-sm">
              The Vino Difference
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mt-3">
              Why Brides In Dindigul Trust Us
            </h2>
            <DecorativeDivider light />
            <p className="text-[#F3E5AB]/90 text-base sm:text-lg font-light leading-relaxed">
              We understand that your wedding mehendi is not just a pattern — it is an emotional tradition that represents happiness and eternal love.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Sparkles;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 hover:translate-y-[-4px] shadow-xl group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#997819] via-[#D4AF37] to-[#F3E5AB] p-[1.5px] mb-5 shadow-lg">
                    <div className="w-full h-full rounded-2xl bg-[#38070F] flex items-center justify-center group-hover:scale-95 transition-transform">
                      <IconComponent className="w-7 h-7 text-[#D4AF37]" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#F3E5AB] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Guarantee Pill */}
          <div className="mt-14 text-center">
            <div className="inline-flex items-center gap-3 bg-black/40 border border-[#D4AF37]/50 rounded-full px-6 py-3 text-xs sm:text-sm text-[#F3E5AB]">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Skin Safety Guarantee: Patch-tested herbal henna, completely free of chemicals or black dyes.</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. GALLERY PREVIEW (6 Photos from gallery folder + "View full gallery")
         ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#997819] font-semibold bg-[#F8F1DC] px-4 py-1 rounded-full border border-[#D4AF37]/40">
              Real Work & Moments
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#38070F] mt-3">
              Captivating Henna Portfolio
            </h2>
            <DecorativeDivider className="justify-start" />
            <p className="text-stone-600 text-sm sm:text-base font-light">
              Explore authentic mehendi creations applied for real brides and festive clients in Dindigul.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-[#38070F] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B38728] shadow-md hover:scale-105 active:scale-95 transition-all self-start md:self-auto"
          >
            <span>View Full Gallery ({galleryImages.length} Photos)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewGallery.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg border border-[#D4AF37]/30 bg-stone-100 aspect-[4/5]"
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Hover Dark Overlay with Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#26050B]/90 via-[#38070F]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#D4AF37] mb-1">
                  {img.category}
                </span>
                <h4 className="font-serif text-lg font-bold text-white leading-snug">
                  {img.title}
                </h4>
                <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/20">
                  <span className="text-xs text-[#F3E5AB]">{img.tag}</span>
                  <Link
                    to="/gallery"
                    className="text-xs font-semibold text-white hover:text-[#D4AF37] flex items-center gap-1"
                  >
                    <span>Zoom photo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Always-visible top category badge */}
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-[#F3E5AB] text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full border border-[#D4AF37]/50">
                {img.category}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          5. TESTIMONIALS CAROUSEL (3 Sample Reviews)
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF6F0] relative overflow-hidden border-t border-[#D4AF37]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#997819] font-semibold bg-[#F8F1DC] px-4 py-1 rounded-full border border-[#D4AF37]/40">
              Words of Love
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#38070F] mt-3">
              What Our Brides Say
            </h2>
            <DecorativeDivider />
          </div>

          {/* Testimonial Card */}
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/40 shadow-xl">
            {/* Large decorative quotation mark */}
            <span className="absolute top-6 right-8 font-serif text-7xl text-[#D4AF37]/20 select-none pointer-events-none">
              “
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* 5 Stars */}
                <div className="flex items-center gap-1.5 text-amber-500">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                  <span className="text-xs text-stone-500 ml-2 font-medium">5.0 Verified Review</span>
                </div>

                {/* Review Text */}
                <p className="font-serif text-lg sm:text-2xl text-[#2B060C] italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>

                {/* Author Info */}
                <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#38070F]">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-xs text-stone-500">
                      {testimonials[currentTestimonial].event} • {testimonials[currentTestimonial].location} ({testimonials[currentTestimonial].date})
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Bride</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-8 pt-4">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`h-2 rounded-full transition-all ${
                      currentTestimonial === i ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-stone-300'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#38070F] hover:bg-[#38070F] hover:text-[#F3E5AB] transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#38070F] hover:bg-[#38070F] hover:text-[#F3E5AB] transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. INSTAGRAM & CALL-TO-ACTION BANNER
         ========================================================================= */}
      <section className="py-16 bg-[#2B050B] text-white relative border-t border-[#D4AF37]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
            Reserve Your Auspicious Muhurtham Date
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white">
            Ready to Adorn Your Hands With Royal Henna?
          </h2>
          <p className="text-stone-300 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Muhurtham and wedding season dates fill up quickly. Reach out on WhatsApp with your date and venue to check Vino's availability.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppLink("Wedding Consultation")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-[#2B060C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B38728] shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              <MessageCircle className="w-5 h-5 text-[#2B060C]" />
              <span>Chat with Vino on WhatsApp</span>
            </a>

            <a
              href={businessInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wider text-white bg-white/10 hover:bg-white/20 border border-[#D4AF37]/50 backdrop-blur-md transition-all"
            >
              <Instagram className="w-4 h-4 text-[#D4AF37]" />
              <span>Follow on Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
