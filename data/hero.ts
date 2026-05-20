// Hero slider data — 3 slides
// All 3 slides share the same title & desc (per original template pattern)

import { images } from "@/data/images";

export interface HeroSlide {
  bg: string;
  title: string;
  desc: string;
}

export const heroSlides: HeroSlide[] = [
  {
    bg: images.heroSlide1,
    title: "Redwood City's Trusted HVAC Experts Since 1976",
    desc: "Family-owned. Repair-first. John personally handles every estimate, consultation, and repair — no commission reps, no surprises.",
  },
  {
    bg: images.heroSlide2,
    title: "Redwood City's Trusted HVAC Experts Since 1976",
    desc: "Family-owned. Repair-first. John personally handles every estimate, consultation, and repair — no commission reps, no surprises.",
  },
  {
    bg: images.heroSlide3,
    title: "Redwood City's Trusted HVAC Experts Since 1976",
    desc: "Family-owned. Repair-first. John personally handles every estimate, consultation, and repair — no commission reps, no surprises.",
  },
];
