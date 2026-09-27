# The Colorist — Website Update & Implementation Guide

This guide maps each page and component of the current website template to the extracted real-world content of **The Colorist**.

---

## Global Design & CSS Tokens

### Colors (Defined in `assets/css/` or custom CSS overrides)
Update root theme colors or CSS utility classes:
```css
:root {
  --color-primary: #506458;      /* The Colorist Deep Sage Green */
  --color-secondary: #f5e3d3;    /* The Colorist Soft Peach Cream */
  --color-dark: #2a342e;         /* Deep Slate Contrast */
  --color-light: #faf7f4;        /* Off-white background */
}
```

> **Note on Fonts & Logos**: Per instructions, existing fonts (`Montserrat`, `Open Sans`, `Inconsolata`, `Inter`) and existing logo paths remain intact.

---

## 1. Homepage (`index.html`)

### A. Meta & Title
* **Current**: `<title>Colorist - Hair Salon & Grooming</title>`
* **Replacement**: `<title>The Colorist — Patented 21-Type Color Analysis & Personal Styling</title>`
* **Meta Description**: `"Discover India's most detailed patented 21-type color analysis process. In-person studio sessions in Coimbatore and worldwide virtual consultations by certified analyst at The Colorist. Stop guessing, start knowing."`

### B. Header & Announcement Marquee (`#tool-section`)
* **Current**: Hair dryer, comb, scissors, and hairbrush cards.
* **Replacement**: 4 Core Pillars of The Colorist:
  1. **Patented 21-Type Color Analysis**: India's most nuanced seasonal color check across 21 types, undertones, and contrasts.
  2. **12-Point Body Analysis**: Scientific body measurements to define your most flattering silhouettes, waist rises, and hemlines.
  3. **5-Point Face Analysis**: Precise mapping for necklines, hairstyles, hair partings, eyewear, and jewelry shapes.
  4. **Detailed PDF Roadmap**: Comprehensive 24–28+ page personal styling report delivered within 48–72 hours with lifetime value.

### C. Big Fill Typography
* **Current**: `Colorist Best Hair Salon`
* **Replacement**: `The Colorist Personal Styling Studio`

### D. About Section (`.about-section`)
* **Current Heading**: `Crafting Style, Defining Confidence`
* **Current Text**: `"At Colorist, we specialize in expert grooming services designed for the man..."`
* **Replacement Content**:
  * **Heading**: `Stop Guessing. Start Knowing.`
  * **Text**: `"We've all stood in front of the mirror wondering why an outfit isn't working, or scrolled through a full wardrobe with nothing that feels right. The Colorist changes that with India's only patented 21-type color analysis process. We don't just hand you one palette — we give you the clarity and freedom to wear colors you truly love."`
  * **Button CTA**: `Explore Our Services` -> `./services/index.html`
  * **Images**:
    * Main photo: `Colorist x Bhogan Mediasoft/Photos /9205B628-E3A0-4E32-BB5A-740F3C9D58D7 2.jpg`
    * Secondary slider: `Colorist x Bhogan Mediasoft/Photos /EE8B5803-41EF-473A-B286-E0D0C961064C.jpg` and `FFF5E052-F207-4D0C-A41A-B37E0ECEBA19.jpg`

### E. Services Section (`.service-section`)
* **Current Cards**: Precision Haircuts, Beard Trimming, Classic Shaves, Hair Wash, Hair Coloring.
* **Replacement Cards**:
  1. **Women's Color Analysis (In-Person & Online)**: 21-type seasonal color check, machine skintone test, jewelry, makeup, and hair color guidance.
  2. **Women's Body & Silhouette Analysis**: 12-point body measurements, pants/tops/outerwear lengths, and Indian & Western outfit guides.
  3. **Complete Styling Bundles (Color + Face + Body)**: The ultimate transformation bundle including full face feature analysis and 30–60 days WhatsApp support.
  4. **Men's Online Color Analysis (Rs. 3,699)**: Patented 21-type process tailored for men's suiting, casuals, metals, and hair, delivered in 72 hours.
  5. **In-Person Men's Add-On Styling**: Exclusive add-on services for men accompanying female clients in our Coimbatore studio.

### F. Testimonials Section (`.testimonial-section`)
Replace template testimonials with real reviews extracted from `testimonials.json`:
1. **Priyanka (USA / India)**: *"In USA color analysis is nowhere less than $300, that too very basic not even this detailed... Thankyou for the detailed report. I have so much more clarity now ❤️"*
2. **Divya RP**: *"This is actually a total eye opener. I could never understand why bold cold tones looked better on me than warm and nude tones... This report has been very insightful!"*
3. **VK Chartered Accountant (Google Review ⭐⭐⭐⭐⭐)**: *"The consultation wasn't limited to just colour analysis, it covered a complete revamp, from hairstyles and makeup to outfits and overall styling... The Colorist patiently listened to all my questions and cleared every doubt."*
4. **Aliya Varma (Google Local Guide ⭐⭐⭐⭐⭐)**: *"After getting my analysis and wearing the colours that suit me, I have only been receiving endless compliments and also feeling better!"*

### G. Gallery / Studio Showcase (`.gallery-section`)
* Replace stock grooming photos with:
  * `F91F4874-3F28-4F74-AD99-AB99FEF5DB45.PNG` (Studio drape rack)
  * `IMG_0452.jpg` (Consultation desk & color palettes)
  * `IMG_0453.jpg` (Seasonal swatch tags)
  * `28C4FB41-ED9D-4C54-984A-BDC7B1D442A6.jpg` (Spring Pale close-up)

---

## 2. About Us Page (`about-us.html` & `about-us/index.html`)

### A. Narrative & Mission
* Replace the generic barbershop milestone timeline (`1960: The Humble Beginning...`) with:
  * **Our Mission**: Freeing individuals from fashion anxiety, impulse shopping mistakes, and cookie-cutter style rules.
  * **The 21-Type Difference**: Why 4 or 12 seasons aren't enough for Indian and diverse global skin tones.
  * **Meet The Colorist**: Certified analyst, founder, and personal stylist dedicated to practical, empowering guidance.
  * **Holistic Styling**: Explaining why style requires the trifecta: **Color + Face Shape + Body Architecture**.

### B. Numbers / Counter Section
* **Clients Helped**: Hundreds of women and men globally across USA, UK, Middle East, and India.
* **Palette Depth**: 21 Patented Color Types — India's widest range.
* **Analysis Points**: 12 Body measurement points & 5 Face measurement points.
* **Support Duration**: 30 to 60 days of direct WhatsApp access after every session.

---

## 3. Services Page (`services.html` & `services/index.html`)

Organize the page into two clear toggle tabs or dedicated sections:

### Section 1: In-Person Coimbatore Studio Services
* Women's Color Analysis (Silver, Gold, Platinum)
* Women's Body Analysis (Gold, Platinum)
* Women's Styling Bundle (Gold Bundle, Platinum Bundle)
* Men's Add-on Services *(Clearly marked with disclaimer: "Only available as an add-on to female services")*

### Section 2: Worldwide Virtual Consultations
* Women's Virtual Color Analysis (Silver, Gold, Platinum)
* Women's Virtual Body Analysis (Silver, Gold, Platinum)
* Women's Virtual Bundles (Gold Bundle, Platinum Bundle)
* Men's Virtual Color Analysis — **Fixed Price: Rs. 3,699** (72h delivery, 30m video call, photos protected)
* Men's Virtual Gold Bundle

---

## 4. Pricing Page (`pricing.html` & `pricing/index.html`)

Replace the haircut and shave price list with clean, comparative pricing tables based on `services_catalog.json`:

### Comparative Table 1: Women's In-Person Color Analysis
* **Silver (30–45m)**: Theory, 8-type seasonal check, machine skintone check, jewelry check, color sheet & cards, 30d WhatsApp support.
* **Gold (1h)**: Adds 17-type detailed check, hair color recommendations, color combinations tips, 48h PDF report.
* **Platinum (1.5h)**: Adds makeup color, nail polish, contacts color, makeup pouch check, personalized product list.

### Comparative Table 2: Virtual Color Analysis
* Compare Silver vs. Gold vs. Platinum features side-by-side with checkmarks.

### Feature Box: Men's Online Color Analysis
* **Price**: **Rs. 3,699**
* **Inclusions**: Best tones, sub-tones, worst tones, neutral tones, best metals, hair color recommendations, 30m Google call, downloadable PDF report.

---

## 5. FAQ Section (`index.html` & `about-us.html`)
Inject the 6 questions and answers from `content_data/faq_data.json` directly into the `.faq-section` accordion dropdowns.

---

## 6. Location & Contact Pages (`location.html`, `appointment.html`)
* **Physical Location**: The Colorist Studio, Coimbatore, Tamil Nadu, India.
* **Virtual Consultations**: Hosted via Google Meet / Zoom across all time zones.
* **Booking System**: Update form options to choose between In-Person (Coimbatore) or Virtual (Worldwide), and select the desired styling package.
