# Vino Mehendi Arts - Premium Web Application

A luxurious, responsive multi-page website built for **Vino Mehendi Arts**, a professional bridal and festive mehendi (henna) artist based in **Dindigul, Tamil Nadu, India**.

---

## 🌟 Key Highlights & Design

- **Royal Aesthetic:** Deep maroon/burgundy (`#38070F`), warm ivory/cream (`#FCFAF7`), and antique gold accents (`#D4AF37`).
- **Typography:** Google Fonts *Cormorant Garamond* & *Playfair Display* for headings, *Poppins* for clean modern body text.
- **Micro-Interactions:** Smooth page transitions and scroll animations powered by **Framer Motion**.
- **Mobile-First Responsiveness:** Optimized for visitors discovering Vino from Instagram on smartphones, featuring a sticky navbar, mobile drawer, and bottom-right floating WhatsApp button.
- **SEO Ready:** Unique, keyword-rich `<title>` and `<meta description>` on every page.

---

## 📂 Project Structure

```
vino-mehandi/
├── public/
│   ├── images/
│   │   ├── hero.jpg                   # Full-screen bridal hero background
│   │   ├── artist-vino.jpg            # Studio portrait of Vino for About page
│   │   └── gallery/                   # Gallery photos (auto-categorized by prefix)
│   │       ├── bridal-1.jpg
│   │       ├── bridal-2.jpg
│   │       ├── bridal-3.jpg
│   │       ├── bridal-4.jpg
│   │       ├── bridal-full-forearm.jpg
│   │       ├── engagement-1.jpg
│   │       ├── engagement-2.jpg
│   │       ├── festive-1.jpg
│   │       ├── festive-2.jpg
│   │       ├── babyshower-1.jpg
│   │       └── babyshower-2.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                 # Sticky header with mobile drawer
│   │   ├── Footer.jsx                 # Royal burgundy footer with links & contact
│   │   ├── FloatingWhatsApp.jsx       # Floating action button at bottom-right
│   │   ├── PageBanner.jsx             # Royal inner page header banner
│   │   ├── ScrollToTop.jsx            # Scroll reset on route change
│   │   ├── SEO.jsx                    # Dynamic page title & meta manager
│   │   ├── DecorativeDivider.jsx      # Royal paisley/mandala line ornament
│   │   └── InstagramIcon.jsx          # Custom SVG Instagram icon
│   ├── pages/
│   │   ├── Home.jsx                   # Hero, services preview, why choose us, gallery preview, testimonials
│   │   ├── About.jsx                  # Artist story, stats, 3-step process, herbal henna guarantee
│   │   ├── Services.jsx               # 4 luxury cards, prices, duration, inclusions, FAQ accordion
│   │   ├── Gallery.jsx                # Category filter tabs, responsive grid, lightbox modal
│   │   └── Contact.jsx                # Contact cards, pre-filled WhatsApp booking form, Dindigul map
│   ├── data/
│   │   └── mehendiData.js             # Central data file for prices, text, photos & details
│   ├── App.jsx                        # Routing configuration
│   ├── index.css                      # Tailwind v4 configuration & design tokens
│   └── main.jsx                       # Entry point
├── index.html                         # HTML template with SEO tags & Google Fonts
├── vite.config.js                     # Vite + Tailwind configuration
└── package.json
```

---

## ✏️ How to Edit Content, Prices & Images

All text, pricing, phone numbers, and gallery details are centralized in:
👉 `src/data/mehendiData.js`

- **Update Phone / WhatsApp:** Change `phone` and `whatsappNumber` in `businessInfo`.
- **Update Prices:** Edit `startingPrice` and `priceDisplay` in the `services` array.
- **Add New Photos:** Drop `.jpg` or `.png` files into `public/images/gallery/` and add an entry in the `galleryImages` array (use prefix `bridal-`, `engagement-`, `festive-`, or `babyshower-`).

---

## 🚀 Running the Project Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📞 Business Information

- **Artist:** Vino
- **Studio:** Vino Mehendi Arts
- **Location:** Dindigul, Tamil Nadu, India (Doorstep service across district)
- **WhatsApp / Phone:** +91 9688126294
- **Instagram:** [@dindigul_mehandi_artist_vino](https://instagram.com/dindigul_mehandi_artist_vino)
