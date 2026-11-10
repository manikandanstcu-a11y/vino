import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Calendar, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  HeartHandshake,
  User,
  HelpCircle
} from 'lucide-react';
import { Instagram } from '../components/InstagramIcon';
import { businessInfo } from '../data/mehendiData';
import SEO from '../components/SEO';
import PageBanner from '../components/PageBanner';
import DecorativeDivider from '../components/DecorativeDivider';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Bridal Mehendi',
    eventDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const eventTypes = [
    'Bridal Mehendi',
    'Engagement Mehendi',
    'Baby Shower Mehendi (Seamandham)',
    'Festive / Family Group Mehendi',
    'Bridesmaid / Guest Henna',
    'Other Custom Event'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please fill in your name and phone number so Vino can contact you.');
      return;
    }

    // Build formatted WhatsApp message
    const formattedDate = formData.eventDate || 'To be decided';
    const messageLines = [
      `🌺 *New Mehendi Booking Inquiry - Vino Mehendi Arts* 🌺`,
      ``,
      `*Client Name:* ${formData.name}`,
      `*Phone Number:* ${formData.phone}`,
      `*Event Type:* ${formData.eventType}`,
      `*Event Date:* ${formattedDate}`,
      formData.message ? `*Message / Location:* ${formData.message}` : null,
      ``,
      `I would love to check your availability and confirm pricing for Dindigul!`
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(messageLines)}`;
    
    setSubmitted(true);
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FCFAF7]">
      <SEO
        title="Contact & Bookings | Vino Mehendi Arts Dindigul"
        description="Book your mehendi appointment with Vino Mehendi Arts in Dindigul. Call 9688126294 or send an instant WhatsApp booking request with event date and type."
      />

      {/* 1. Page Banner */}
      <PageBanner
        title="Contact & Appointments"
        subtitle="Let's make your special day unforgettable. Reach out for availability, packages, or doorstep home service in Dindigul."
        breadcrumb="Contact"
      />

      {/* 2. 4 Contact Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Phone */}
          <a
            href={`tel:${businessInfo.phone}`}
            className="group bg-white rounded-3xl p-6 border border-[#D4AF37]/40 shadow-xl hover:border-[#D4AF37] hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center hover:translate-y-[-4px]"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#38070F] flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform shadow-md">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#997819] font-bold">
              Direct Call
            </span>
            <h3 className="font-serif text-lg font-bold text-[#38070F] mt-1">
              {businessInfo.displayPhone}
            </h3>
            <span className="text-xs text-stone-500 mt-1">Click to call immediately</span>
          </a>

          {/* Card 2: WhatsApp */}
          <a
            href={`https://wa.me/${businessInfo.whatsappNumber}?text=Hi%20Vino,%20I%20want%20to%20inquire%20about%20mehendi%20booking`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-3xl p-6 border border-[#D4AF37]/40 shadow-xl hover:border-[#D4AF37] hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center hover:translate-y-[-4px]"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-700 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-md">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-emerald-800 font-bold">
              WhatsApp Chat
            </span>
            <h3 className="font-serif text-lg font-bold text-[#38070F] mt-1">
              Chat with Vino
            </h3>
            <span className="text-xs text-stone-500 mt-1">Instant replies & photo quotes</span>
          </a>

          {/* Card 3: Instagram */}
          <a
            href={businessInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-3xl p-6 border border-[#D4AF37]/40 shadow-xl hover:border-[#D4AF37] hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center hover:translate-y-[-4px]"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-md">
              <Instagram className="w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#997819] font-bold">
              Instagram DM
            </span>
            <h3 className="font-serif text-sm font-bold text-[#38070F] mt-1 break-all line-clamp-1">
              {businessInfo.instagramHandle}
            </h3>
            <span className="text-xs text-stone-500 mt-1">Explore daily reels & photos</span>
          </a>

          {/* Card 4: Location */}
          <div className="bg-white rounded-3xl p-6 border border-[#D4AF37]/40 shadow-xl flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#FAF6F0] border border-[#D4AF37]/60 flex items-center justify-center text-[#997819] mb-4 shadow-md">
              <MapPin className="w-6 h-6 text-[#997819]" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#997819] font-bold">
              Base Location
            </span>
            <h3 className="font-serif text-lg font-bold text-[#38070F] mt-1">
              Dindigul, Tamil Nadu
            </h3>
            <span className="text-xs text-stone-500 mt-1">Home visits across district</span>
          </div>

        </div>
      </section>

      {/* 3. Booking Form & Location Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Booking Form Card (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#D4AF37]/40 shadow-2xl relative"
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F8F1DC] border border-[#D4AF37]/40 text-[#997819] text-xs uppercase tracking-widest font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Instant Online Inquiry</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#38070F]">
                Book Your Mehendi Session
              </h2>
              <p className="text-stone-600 text-sm mt-2 font-light">
                Fill out the quick form below. Clicking submit will automatically open WhatsApp with all your details pre-formatted for Vino!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#38070F] mb-2">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Priyadarshini"
                      className="w-full px-4 py-3.5 rounded-xl border border-stone-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm transition-all bg-stone-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#38070F] mb-2">
                    Phone / WhatsApp <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 98765 43210"
                    className="w-full px-4 py-3.5 rounded-xl border border-stone-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm transition-all bg-stone-50/50"
                  />
                </div>
              </div>

              {/* Row 2: Event Type and Event Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#38070F] mb-2">
                    Event Type
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-stone-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm transition-all bg-white"
                  >
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#38070F] mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-stone-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm transition-all bg-stone-50/50"
                  />
                </div>
              </div>

              {/* Row 3: Message / Venue Location */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#38070F] mb-2">
                  Venue Address / Special Requirements
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mention your hall/residence location in Dindigul, customized portraits you want, or number of hands..."
                  className="w-full px-4 py-3.5 rounded-xl border border-stone-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm transition-all bg-stone-50/50"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-8 rounded-full text-sm sm:text-base font-bold uppercase tracking-wider text-[#2B060C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B38728] shadow-xl hover:shadow-[#D4AF37]/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-[#2B060C]" />
                <span>Submit & Open WhatsApp Confirmation</span>
              </button>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>WhatsApp opened! You can now send the pre-filled message directly to Vino.</span>
                </div>
              )}
            </form>
          </motion.div>

          {/* Map & Venue Coverage Info (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Embedded Google Map of Dindigul */}
            <div className="bg-white rounded-3xl p-4 border border-[#D4AF37]/40 shadow-xl overflow-hidden">
              <div className="p-3">
                <span className="text-[10px] uppercase tracking-widest text-[#997819] font-bold block">
                  Service Area
                </span>
                <h3 className="font-serif text-xl font-bold text-[#38070F]">
                  Dindigul & Surrounding Districts
                </h3>
              </div>

              {/* Google Map Iframe */}
              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-stone-200">
                <iframe
                  title="Vino Mehendi Arts Service Area - Dindigul"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62744.757876807494!2d77.94086822831518!3d10.366472016254415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00ab9b071720d1%3A0x72a5a0cb0819a69b!2sDindigul%2C%20Tamil%20Nadu!5e0!3m2!1en!2sin!4v1700000000000!5m2!1en!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Travel Coverage Details */}
            <div className="bg-[#FAF6F0] rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/40 shadow-lg space-y-4">
              <h4 className="font-serif text-xl font-bold text-[#38070F] flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#997819]" />
                <span>Doorstep Travel Coverage</span>
              </h4>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                We travel directly to your wedding mandapam, resort, or private residence throughout:
              </p>

              <div className="flex flex-wrap gap-2 text-xs">
                {['Dindigul Town', 'Palani', 'Kodaikanal', 'Batlagundu', 'Oddanchatram', 'Natham', 'Vedasandur', 'Madurai'].map((loc) => (
                  <span
                    key={loc}
                    className="bg-white px-3 py-1.5 rounded-full border border-[#D4AF37]/40 text-[#38070F] font-medium shadow-sm"
                  >
                    📍 {loc}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-stone-200/60 text-xs text-stone-500 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#997819]" />
                <span>Appointments available 7 days a week from 7:00 AM to 10:00 PM.</span>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
