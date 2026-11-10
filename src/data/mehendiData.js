/**
 * Vino Mehendi Arts - Central Data Store
 * All business details, service packages, pricing, images, and content
 * are organized here for effortless editing and maintenance.
 */

export const businessInfo = {
  name: "Vino Mehendi Arts",
  tagline: "Where Every Design Tells Your Story",
  subTagline: "Premium Bridal & Festive Mehendi Artist in Dindigul",
  artistName: "Vino",
  phone: "9688126294",
  displayPhone: "+91 96881 26294",
  whatsappNumber: "919688126294",
  instagramHandle: "@dindigul_mehandi_artist_vino",
  instagramUrl: "https://instagram.com/dindigul_mehandi_artist_vino",
  location: "Dindigul, Tamil Nadu, India",
  experienceYears: "6+",
  happyBrides: "500+",
  designsCreated: "1,200+",
  rating: "4.9",
  organicGuarantee: "100% Herbal & Chemical-Free Henna Paste",
  homeServiceNote: "Doorstep home service available across Dindigul & surrounding districts",
};

/**
 * Helper to construct WhatsApp direct booking link
 */
export const getWhatsAppLink = (serviceName = "") => {
  const message = serviceName
    ? `Hi, I want to book ${serviceName} from Vino Mehendi Arts`
    : `Hi Vino, I would like to inquire about booking mehendi services.`;
  return `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

/**
 * Service Packages & Pricing
 */
export const services = [
  {
    id: "bridal",
    title: "Bridal Mehendi",
    shortTitle: "Bridal",
    startingPrice: 2500,
    priceDisplay: "Starting from ₹2,500",
    image: "/images/gallery/bridal-1.jpg",
    alt: "Intricate Bridal Mehendi by Vino Mehendi Arts",
    category: "Bridal",
    badge: "Most Popular",
    duration: "4 - 6 Hours",
    description:
      "Exclusive bespoke royal bridal designs featuring customized bride-groom portraits, wedding dates, traditional doli-baraat motifs, intricate peacocks, and temple architecture with guarantee of deep mahogany color.",
    features: [
      "Custom couple initials & wedding date engraving",
      "Full palms, wrists & up to elbows (front & back)",
      "Coordinated intricate bridal feet design",
      "Freshly prepared triple-filtered organic henna",
      "Special essential oil aftercare balm included",
      "Complimentary trial consultation before the big day"
    ],
  },
  {
    id: "engagement",
    title: "Engagement Mehendi",
    shortTitle: "Engagement",
    startingPrice: 999,
    priceDisplay: "Starting from ₹999",
    image: "/images/gallery/engagement-2.jpg",
    alt: "Delicate Engagement Henna Art",
    category: "Engagement",
    badge: "Trending",
    duration: "2 - 3 Hours",
    description:
      "Delicate modern Arabic-Indian fusion patterns crafted specifically to spotlight the bride's engagement ring and jewellery with sophisticated symmetry and fine detailing.",
    features: [
      "Ring-accentuating negative space designs",
      "Both palms & wrists with floral mandala focus",
      "Contemporary Arabic laces & lotus motifs",
      "Chemical-free soothing formula for sensitive skin",
      "Fast-staining dark henna blend"
    ],
  },
  {
    id: "babyshower",
    title: "Baby Shower Mehendi",
    shortTitle: "Baby Shower",
    startingPrice: 799,
    priceDisplay: "₹799",
    image: "/images/gallery/babyshower-1.jpg",
    alt: "Baby Shower Seamandham Henna Art",
    category: "Baby Shower",
    badge: "Gentle & Pure",
    duration: "1.5 - 2 Hours",
    description:
      "Cherish the auspicious Seamandham / ValaiKaappu ceremony with gentle, calming auspicious motifs such as baby footprints, blooming lotuses, cradles, and blessing symbols.",
    features: [
      "100% natural, mild essential oil recipe safe for expectant mothers",
      "Auspicious cradle, peacock & kalash motifs",
      "Relaxed application with utmost care and comfort",
      "Front & back palms up to mid-forearms"
    ],
  },
  {
    id: "festive",
    title: "Festive Mehendi",
    shortTitle: "Festive",
    startingPrice: 49,
    priceDisplay: "Starting from ₹49",
    image: "/images/gallery/festive-1.jpg",
    alt: "Festive Mehendi Art for Diwali, Eid, Pongal",
    category: "Festive",
    badge: "Budget Friendly",
    duration: "15 - 30 Mins",
    description:
      "Quick, graceful, and expressive single-side or double-side patterns for festivals like Diwali, Eid, Pongal, Karwa Chauth, family functions, and college celebrations.",
    features: [
      "Choice of Arabic bel, traditional round mandala, or cuff style",
      "Ideal for sisters of the bride, bridesmaids & festival crowds",
      "Crisp, clear strokes that stain deep dark brown",
      "Quick-drying natural henna cone"
    ],
  },
];

/**
 * Why Choose Us Highlights
 */
export const whyChooseUs = [
  {
    id: "organic",
    title: "100% Natural Organic Henna",
    description:
      "Zero chemicals, zero PPD, and zero synthetic dyes. We handcraft our cones using fresh Rajasthani Sojat henna powder and therapeutic-grade essential oils (eucalyptus & cajeput).",
    icon: "Leaf",
  },
  {
    id: "intricate",
    title: "Intricate Custom Designs",
    description:
      "Every bride is unique. From couple portraits and love milestones to South Indian temple architecture, each stroke is drawn freehand with flawless precision.",
    icon: "Sparkles",
  },
  {
    id: "dark-color",
    title: "Guaranteed Dark Rich Color",
    description:
      "Our special proprietary henna brewing method and aftercare secrets produce deep mahogany and burgundy stains that stay vibrant for 10-14 days.",
    icon: "ShieldCheck",
  },
  {
    id: "doorstep",
    title: "Doorstep Home Service",
    description:
      "Relax in the comfort of your own home or wedding venue. We travel across Dindigul town, Palani, Kodaikanal, Natham, Batlagundu, and Madurai.",
    icon: "Home",
  },
];

/**
 * 3-Step Booking Process
 */
export const bookingProcess = [
  {
    step: "01",
    title: "Message Us on WhatsApp",
    description:
      "Send your event date, venue location, and the type of mehendi package you are looking for.",
    icon: "MessageCircle",
  },
  {
    step: "02",
    title: "Choose Your Dream Design",
    description:
      "Browse our catalog or share your Pinterest inspiration photos. We customize every element to match your wedding attire.",
    icon: "Palette",
  },
  {
    step: "03",
    title: "Get Beautiful Henna at Home",
    description:
      "Vino arrives punctually at your doorstep. Sit back, relax, and watch your love story unfold in rich henna art.",
    icon: "HeartHandshake",
  },
];

/**
 * Authentic Client Testimonials
 */
export const testimonials = [
  {
    id: 1,
    name: "Revathi Venkataraman",
    event: "Bridal Mehendi",
    location: "Dindigul",
    rating: 5,
    date: "August 2025",
    text: "Vino akka did my bridal mehendi and customized our names ('Reva & Venkat') and wedding date so neatly on my wrists! The color stain was so dark and stayed bright for more than 12 days. Everyone at our wedding reception was asking who the artist was!",
    verified: true,
  },
  {
    id: 2,
    name: "Pooja Sundaram",
    event: "Engagement Mehendi",
    location: "Palani Road, Dindigul",
    rating: 5,
    date: "January 2026",
    text: "Her lines are so neat and clean! She accommodated my request for a delicate Arabic jewelry style to match my pastel lehenga. Completely organic henna without any burning sensation or chemical smell. Highly recommended in Dindigul!",
    verified: true,
  },
  {
    id: 3,
    name: "Kavitha Murugesan",
    event: "Baby Shower (ValaiKaappu)",
    location: "Dindigul",
    rating: 5,
    date: "February 2026",
    text: "I was looking for safe, chemical-free henna for my Seamandham. Vino was so gentle and patient, giving me breaks in between. The blooming lotus and cradle design were divine. Thank you so much Vino!",
    verified: true,
  },
];

/**
 * Gallery Items with category prefixes
 */
export const galleryImages = [
  {
    id: 1,
    fileName: "bridal-1.jpg",
    src: "/images/gallery/bridal-1.jpg",
    title: "Signature Bridal Palms & Forearms with Wedding Date",
    category: "Bridal",
    aspect: "tall",
    tag: "Client Favorite",
  },
  {
    id: 2,
    fileName: "bridal-2.jpg",
    src: "/images/gallery/bridal-2.jpg",
    title: "Royal Temple Arch & Lotus Blossom Bridal Henna",
    category: "Bridal",
    aspect: "tall",
    tag: "Intricate Work",
  },
  {
    id: 3,
    fileName: "bridal-3.jpg",
    src: "/images/gallery/bridal-3.jpg",
    title: "Traditional South Indian Peacock & Jali Netting",
    category: "Bridal",
    aspect: "tall",
    tag: "Bridal Classic",
  },
  {
    id: 4,
    fileName: "bridal-4.jpg",
    src: "/images/gallery/bridal-4.jpg",
    title: "Crimson Silk Saree & Full Royal Bridal Hands",
    category: "Bridal",
    aspect: "wide",
    tag: "Royal Luxury",
  },
  {
    id: 5,
    fileName: "engagement-1.jpg",
    src: "/images/gallery/engagement-1.jpg",
    title: "Symmetrical Floral Mandala with Fresh Fingertip Paste",
    category: "Engagement",
    aspect: "square",
    tag: "Mandala",
  },
  {
    id: 6,
    fileName: "engagement-2.jpg",
    src: "/images/gallery/engagement-2.jpg",
    title: "Diamond Ring Accentuation with Modern Arabic Lace",
    category: "Engagement",
    aspect: "tall",
    tag: "Modern Fusion",
  },
  {
    id: 7,
    fileName: "festive-1.jpg",
    src: "/images/gallery/festive-1.jpg",
    title: "Artistic Swan & Peacock Palms with Delicate Shading",
    category: "Festive",
    aspect: "square",
    tag: "Festive Joy",
  },
  {
    id: 8,
    fileName: "festive-2.jpg",
    src: "/images/gallery/festive-2.jpg",
    title: "Contemporary Minimalist Vine & Finger Patterns",
    category: "Festive",
    aspect: "square",
    tag: "Express Henna",
  },
  {
    id: 9,
    fileName: "babyshower-1.jpg",
    src: "/images/gallery/babyshower-1.jpg",
    title: "Traditional South Indian Seamandham ValaiKaappu Henna",
    category: "Baby Shower",
    aspect: "tall",
    tag: "Auspicious",
  },
  {
    id: 10,
    fileName: "babyshower-2.jpg",
    src: "/images/gallery/babyshower-2.jpg",
    title: "Blooming Lotus & Cradle Motif Palms",
    category: "Baby Shower",
    aspect: "tall",
    tag: "Gentle Touch",
  },
  {
    id: 11,
    fileName: "bridal-full-forearm.jpg",
    src: "/images/gallery/bridal-full-forearm.jpg",
    title: "Detailed Geometric Checkered Jaal Forearm Bridal Work",
    category: "Bridal",
    aspect: "tall",
    tag: "Full Coverage",
  },
];

/**
 * Frequently Asked Questions
 */
export const faqs = [
  {
    q: "How far in advance should I book my bridal mehendi in Dindigul?",
    a: "We recommend booking 2 to 6 months in advance for peak Tamil wedding and muhurtham dates to reserve your slot, especially if you require doorstep venue service.",
  },
  {
    q: "Is your henna paste 100% natural and safe?",
    a: "Yes, absolutely! We strictly use fresh, organic Rajasthani henna leaf powder and natural essential oils like Eucalyptus, Tea Tree, and Cajeput. We never use black henna or chemical accelerators (PPD).",
  },
  {
    q: "Do you travel outside Dindigul for destination weddings?",
    a: "Yes! We frequently cater to weddings and functions in Palani, Kodaikanal, Batlagundu, Oddanchatram, Theni, and Madurai. Travel allowance may apply based on distance.",
  },
  {
    q: "How can I achieve the darkest possible henna stain for my wedding day?",
    a: "Apply mehendi 48 hours prior to your wedding day. Keep the paste on for 6 to 8 hours, apply lemon-sugar syrup dab lightly once dry, gently scrape off (do not wash with water for 12 hours), and apply our complimentary clove fumes or eucalyptus balm.",
  },
];
