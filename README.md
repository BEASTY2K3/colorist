# The Colorist — Patented 21-Type Color Analysis & Personal Styling

Welcome to the production repository for **The Colorist Styling Studio**.

This repository contains the complete website, booking calendar, and client consultation hub for The Colorist, optimized for lightning-fast static rendering and seamless 1-click deployment on **Vercel**.

---

## 🌟 Key Highlights & Architecture

- **Patented 21-Type Seasonal Color Analysis**: India's most nuanced seasonal matrix (Spring, Summer, Autumn, Winter sub-seasons).
- **12-Point Body Architecture & 5-Point Face Framing**: Precision silhouettes, necklines, hair geometry, and jewelry scales.
- **Consultation & Appointment Flow** (`/appointment.html` or `/appointment/`):
  - In-Person Coimbatore Studio sessions and Worldwide Virtual Google Meet consultations.
  - Transparent pricing matrices (Platinum, Gold, Silver tiers, Men's Online Analysis ₹3,699).
  - WhatsApp Support integration (`https://wa.me/...`).
- **Mobile-First Responsive Design**: Fluid layouts, responsive typography, and touch-optimized navigation across iPhones, Android devices, tablets, and desktops.
- **Vercel-Ready**: Pre-configured with `vercel.json` (Clean URLs, routing, long-term asset caching, security headers).

---

## 🚀 Quick Start (Local Development)

### Option 1: Using Node / npx (Port 3000)
```bash
npm run dev
# or
npx serve -s . -l 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 2: Using Python HTTP Server (Port 8000)
```bash
python3 -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

---

## 🌐 Deploying to Vercel

### Method A: Deploy via Vercel CLI (Fastest)
1. Install the Vercel CLI if you haven't already:
   ```bash
   npm i -g vercel
   ```
2. Run from this repository directory:
   ```bash
   vercel
   ```
3. For direct production deployment:
   ```bash
   vercel --prod
   ```

### Method B: Deploy via GitHub / GitLab / Bitbucket
1. Push this git repository to your GitHub account:
   ```bash
   git remote add origin https://github.com/your-username/the-colorist.git
   git branch -M main
   git push -u origin main
   ```
2. Log into [vercel.com](https://vercel.com).
3. Click **Add New... &rarr; Project** and select your repository.
4. Leave framework preset as **Other** (static HTML/CSS/JS).
5. Click **Deploy**. Vercel will build and assign your production URL in seconds!

---

## 📂 Project Directory Structure

```
Gitfolder/
├── index.html                    # Homepage (Hero, 4 Pillars, Seasonal Swatches, Testimonials)
├── about-us.html                 # About The Colorist & Studio Philosophy
├── services.html                 # Full Service Menu (Color, Body, Styling Bundles)
├── pricing.html                  # Pricing Matrices & Packages
├── appointment.html              # Public Consultation Booking Page
├── location.html                 # Coimbatore Studio Directions & Map
├── assets/
│   ├── css/                      # colorist.shared.min.css (Dark luxury design system)
│   ├── js/                       # Webflow engine, webfont.js, colorist-shared.js
│   ├── fonts/                    # Google Fonts & custom typography
│   └── images/
│       └── colorist/             # Studio photography, seasonal palettes, logos
├── vercel.json                   # Vercel cleanUrls, routing, and caching rules
├── package.json                  # Scripts for local development
└── .gitignore                    # OS and build cache ignores
```

---

## 📞 Studio Contact & Support

- **Coimbatore Studio**: Avinashi Road, Coimbatore, Tamil Nadu, India
- **WhatsApp Support**: [+91 98765 43210](https://wa.me/919876543210)
- **Official Email**: [contact@thecolorist.in](mailto:contact@thecolorist.in)
- **Deliverables**: 24–28+ page customized PDF roadmap within 48–72 hours of consultation.
