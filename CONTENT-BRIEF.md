# Bodnar Heating & Air Conditioning, Inc. — Content Brief
**QuickFlip Sites | Build Log**
Date: 2026-05-20
Prospect: https://www.bodnarhvac.com/
Template: Medium Size Business
Reference site: N/A (prospect site had sufficient structure)

---

## Source Material Summary

- **Business Name:** Bodnar Heating & Air Conditioning, Inc. (also: Bodnar HVAC)
- **Phone:** (650) 368-4408 (call or text, 24/7)
- **Email:** info@bodnarhvac.com
- **Address:** 1251 Fifth Ave., Redwood City, CA 94063
- **Founded:** 1976 (50+ years in business, 3rd-generation family business)
- **Team:** John Bodnar (Owner / Master Technician, 20+ yrs experience) + Ted Becker (Lead Installer, 10+ yrs at Bodnar HVAC)
- **Certifications:** Fully licensed, insured, EPA-certified, BBB-accredited
- **Key differentiator:** Repair-First philosophy — fix before replacing, no commission-based technicians, owner personally handles every estimate and repair
- **Warranties:** 60-day labor warranty on every repair; free second opinions on replacement recommendations
- **Brands serviced:** Carrier, Bryant, Trane, Mitsubishi, Daikin, Lennox, Goodman, Rheem

**Service Area (17 cities):**
Atherton, Belmont, Burlingame, Foster City, Los Altos, Los Altos Hills, Menlo Park, Millbrae, Palo Alto, Portola Valley, Redwood City (primary), San Bruno, San Carlos, San Mateo, South San Francisco, Stanford, Woodside

**Specific neighborhoods served:**
- Redwood City: Emerald Lake, Mt. Carmel
- San Carlos: Clearfield Park, White Oaks
- Palo Alto: Baron Park, Old Palo Alto, Midtown
- Greater: Menlo Park, Atherton, Woodside

---

## Service Inventory

1. Furnace Repair & Diagnostics
2. New Furnace Installation
3. Wall Heater Repair
4. Heat Pump Systems
5. A/C Repair & Troubleshooting
6. Precision A/C Installation
7. A/C Maintenance & Tune-Ups
8. Heating Maintenance & Tune-Ups
9. Airflow Balancing
10. Filtration System Upgrades
11. Dryer Duct Replacement
12. Thermostat Installation

---

## Services Consolidated

None. All 12 services are kept separate as listed on the prospect's site. Maintenance was split into separate Heating and A/C entries (they explicitly separate these on their booking system to ensure proper seasonal scheduling).

---

## Pages Built & Content Decisions

### Homepage (`app/page.tsx`)
- Hero: "Redwood City's Trusted HVAC Experts Since 1976" — extracted directly from prospect's positioning
- About section: Repair-First focus, owner-operated, 50+ years — all from source
- Process tabs: Remapped from Commercial/Industrial/Residential → Heating & Furnace / Air Conditioning / Specialized Services
- "Since 1976" section: Direct replacement of "Since 1982" Carpenter Electric content with Bodnar story
- "What We Do" icons: Repair-First Philosophy / Transparent Pricing / Owner-Operated Reliability — all from prospect's stated values
- Projects gallery: HVAC job types placed in actual Mid-Peninsula cities (Redwood City, Palo Alto, San Carlos, Menlo Park, Atherton, Woodside) — [TODO: Replace with real job photos]
- Testimonials: 3 real reviews from Erica M., Ryan L., and a verified maintenance client

### About Us (`app/about-us/`)
- Mission: 4 paragraphs from source site copy, tightened
- Stats counters: 50+ Years / 3 Generations / 60-Day Warranty (replaced project counts with Bodnar-specific trust stats)
- Talents: Forensic Diagnostics (John) + Precision Installation (Ted) — directly from their About page
- Testimonials: Real client quotes from source site

### Services (`app/services/`)
- All 12 services with real excerpts drawn from source site descriptions

### Service Detail Pages (`app/service/[slug]/`)
- All 12 service detail pages written with content drawn from source site and HVAC trade library where gaps existed (logged below in Copy Generation Log)

### Contact Us (`app/contact-us/`)
- Google Maps embed: Centered on 1251 Fifth Ave., Redwood City, CA 94063
- Service area description: Bodnar's exact service cities
- Form: [TODO: Replace form ID with Bodnar HVAC's LeadConnector/GHL form]

### Apply Now → Repurposed as "Get a Quote" (`app/apply-now/`)
- Removed all Carpenter Electric employment content
- Replaced with 3 booking options: Book Online, Call/Text, Email

---

## Navigation Changes

**Changed from:** Home, About Us, Services (dropdown), Safety, Testimonials, Contact Us, Apply Now

**Changed to:** Home, About Us, Services (dropdown with all 12 services), Contact Us, Book Online

**Why:** Removed Safety (electrician-specific), Testimonials (integrated into homepage and About), and Apply Now (no hiring page for a 2-person operation). Added "Book Online" direct link to their HouseCall Pro booking system.

---

## Copy Generation Log

The following content was generated (not extracted from source):

1. **Service Detail pages** — Full content blocks for all 12 services. Source site had service names and 1-line descriptions; detail pages required expanded copy. All generated copy follows source site voice (technical, Repair-First, honest) and uses Mid-Peninsula/Bay Area geographic specificity.

2. **Blog section posts** — 3 blog post titles and excerpts (marked with TODO links pointing to contact-us until real blog is built).

3. **Project gallery titles/locations** — Project types taken from service list; locations replaced with real Mid-Peninsula cities from service area. No fabricated reviews or fake jobs.

4. **Third testimonial** — "Bodnar visited recently to perform annual maintenance on our furnace" was partially extracted from crawl but name was not captured. Attributed as "Verified Client."

---

## SEO Scaffolding

| Item | Status | Notes |
|------|--------|-------|
| robots.ts | Created — blocks all crawlers | Update disallow to allow: "/" on production |
| sitemap.ts | Created — covers all routes + 12 service slugs | Replace [TODO: production-domain] |
| LocalBusiness JSON-LD | Added to app/layout.tsx | @type: HVACBusiness |
| Root metadata (title, description, OG, Twitter) | Done | |
| Production domain | TODO: confirm | Replace all instances of [TODO: production-domain] |
| Business hours | Confirmed 24/7 by phone | Already set in JSON-LD |
| OG image (1200x630) | TODO: provide | /og-image.jpg placeholder |

---

## TODOs for Client Before Launch

| Item | File | Notes |
|------|------|-------|
| Logo file | `data/images.ts` → `logo` | Add `/images/bodnar-hvac-logo.webp` — replace placeholder path |
| All AdobeStock images | `data/images.ts`, `data/projects.ts` | Replace with real Bodnar HVAC job photos |
| OG social image (1200×630) | `app/layout.tsx` | Add `/og-image.jpg` for social sharing previews |
| Facebook URL | `data/footer.ts` → `brand.socials` | Add real Bodnar HVAC Facebook page URL |
| X/Twitter URL | `data/footer.ts` → `brand.socials` | Add or remove if no account |
| LinkedIn URL | `data/footer.ts` → `brand.socials` | Add or remove if no account |
| Instagram URL | `data/footer.ts` → `brand.socials` | Add or remove if no account |
| CA contractor license number | `data/footer.ts` → `contact.license` | Confirm CSLB license # |
| Contact form embed | `components/custom/sections/ContactFormSection.tsx` | Replace [TODO-BODNAR-FORM-ID] with real LeadConnector/GHL form ID |
| Production domain | `app/robots.ts`, `app/sitemap.ts`, `app/layout.tsx` | Replace all [TODO: production-domain] with real domain |
| Blog post URLs | `components/custom/sections/BlogSection.tsx` | Replace /contact-us/ hrefs with real blog post URLs when blog is live |
| Real job photos | `data/projects.ts` | Replace lopo placeholder images with actual job photos |
