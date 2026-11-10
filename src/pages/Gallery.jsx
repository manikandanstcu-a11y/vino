import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Filter, 
  Sparkles,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { Instagram } from '../components/InstagramIcon';
import { galleryImages, businessInfo, getWhatsAppLink } from '../data/mehendiData';
import SEO from '../components/SEO';
import PageBanner from '../components/PageBanner';
import DecorativeDivider from '../components/DecorativeDivider';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Available filter tabs
  const categories = ['All', 'Bridal', 'Engagement', 'Festive', 'Baby Shower'];

  // Filter gallery items based on category or file name prefix
  const filteredImages = galleryImages.filter((img) => {
    if (activeCategory === 'All') return true;

    // Categorization via metadata or filename prefix
    const nameLower = img.fileName.toLowerCase();
    if (activeCategory === 'Bridal') {
      return nameLower.startsWith('bridal') || img.category === 'Bridal';
    }
    if (activeCategory === 'Engagement') {
      return nameLower.startsWith('engagement') || img.category === 'Engagement';
    }
    if (activeCategory === 'Festive') {
      return nameLower.startsWith('festive') || img.category === 'Festive';
    }
    if (activeCategory === 'Baby Shower') {
      return nameLower.startsWith('babyshower') || img.category === 'Baby Shower';
    }
    return true;
  });

  // Lightbox navigation helpers
  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const showNext = (e) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length);
    }
  };

  const showPrev = (e) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + filteredImages.length) % filteredImages.length
      );
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredImages.length]);

  return (
    <div className="min-h-screen bg-[#FCFAF7]">
      <SEO
        title="Photo Gallery | Real Bridal & Festive Mehendi Designs"
        description="Explore Vino Mehendi Arts photo gallery. Real bride photos, intricate lotus motifs, couple portraits, engagement rings, and baby shower henna in Dindigul."
      />

      {/* 1. Page Banner */}
      <PageBanner
        title="Henna Art Gallery"
        subtitle="Browse our collection of hand-drawn masterpieces. Filter by bridal, engagement, festive, and baby shower celebrations."
        breadcrumb="Gallery"
      />

      {/* 2. Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedImageIndex(null);
                }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-[#38070F] text-[#F3E5AB] border border-[#D4AF37] shadow-lg scale-105'
                    : 'bg-white text-stone-700 hover:bg-[#FAF6F0] border border-stone-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <p className="text-center text-xs text-stone-500 mt-4">
          Showing {filteredImages.length} authentic design {filteredImages.length === 1 ? 'photograph' : 'photographs'}
        </p>
      </div>

      {/* 3. Responsive Masonry-Style Grid with Hover Zoom Effect */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id || image.fileName}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(index)}
                className="group relative rounded-3xl overflow-hidden bg-white border border-[#D4AF37]/40 shadow-md hover:shadow-2xl hover:border-[#D4AF37] transition-all duration-300 cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Dark gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-40 group-hover:opacity-75 transition-opacity duration-300" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 bg-[#38070F]/90 backdrop-blur-md text-[#F3E5AB] text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-[#D4AF37]/50 shadow-md">
                    {image.category}
                  </div>

                  {/* Top Zoom Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-[#F3E5AB]" />
                  </div>

                  {/* Bottom Title & Tag */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] block font-semibold mb-1">
                      {image.tag}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-white drop-shadow leading-snug">
                      {image.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 4. Button at bottom: "Follow us on Instagram for more designs" */}
        <div className="mt-16 text-center bg-white rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/40 shadow-xl max-w-3xl mx-auto">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#997819] via-[#D4AF37] to-[#F3E5AB] p-[1.5px] mx-auto mb-4 shadow-lg">
            <div className="w-full h-full rounded-full bg-[#38070F] flex items-center justify-center text-[#F3E5AB]">
              <Instagram className="w-6 h-6 text-[#D4AF37]" />
            </div>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#38070F]">
            Want to See More Daily Bridal Stories?
          </h3>
          <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl mx-auto font-light">
            We post fresh bride transformations, muhurtham reels, and behind-the-scenes henna mixing every week on our official Instagram page.
          </p>

          <div className="mt-6">
            <a
              href={businessInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider font-bold text-white bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              <Instagram className="w-4 h-4 text-white" />
              <span>Follow us on Instagram for more designs ({businessInfo.instagramHandle})</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. LIGHTBOX MODAL WITH NEXT / PREV / CLOSE BUTTONS
         ========================================================================= */}
      <AnimatePresence>
        {selectedImageIndex !== null && filteredImages[selectedImageIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 select-none"
          >
            {/* Top Bar with Counter and Close Button */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20">
              <div className="bg-black/60 px-4 py-1.5 rounded-full border border-white/20 text-xs sm:text-sm text-[#F3E5AB]">
                <span>
                  {selectedImageIndex + 1} of {filteredImages.length}
                </span>
                <span className="mx-2">•</span>
                <span className="font-semibold text-white">
                  {filteredImages[selectedImageIndex].category}
                </span>
              </div>

              <button
                onClick={closeLightbox}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 flex items-center justify-center text-white transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Previous Button */}
            <button
              onClick={showPrev}
              className="absolute left-4 sm:left-8 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/30 flex items-center justify-center text-white transition-all hover:scale-110 active:scale-90"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Next Button */}
            <button
              onClick={showNext}
              className="absolute right-4 sm:right-8 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/30 flex items-center justify-center text-white transition-all hover:scale-110 active:scale-90"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Image and Caption Container */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[85vh] flex flex-col items-center z-10"
            >
              <img
                src={filteredImages[selectedImageIndex].src}
                alt={filteredImages[selectedImageIndex].title}
                className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full rounded-2xl shadow-2xl border border-[#D4AF37]/50 object-contain"
              />

              {/* Caption Card */}
              <div className="mt-4 text-center max-w-xl text-white">
                <h4 className="font-serif text-lg sm:text-xl font-bold text-[#F3E5AB]">
                  {filteredImages[selectedImageIndex].title}
                </h4>
                <div className="mt-2 flex items-center justify-center gap-3">
                  <a
                    href={getWhatsAppLink(`Design: ${filteredImages[selectedImageIndex].title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2B060C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B38728] px-4 py-1.5 rounded-full shadow hover:scale-105 transition-transform"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#2B060C]" />
                    <span>Inquire About This Design</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
