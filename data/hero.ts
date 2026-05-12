// Hero slider data — 3 slides
// Nguồn: carpenter-electric.com — tất cả slides có cùng title & desc (theo site gốc)

import { images } from "@/data/images";

export interface HeroSlide {
  bg: string;
  title: string;
  desc: string;
}

export const heroSlides: HeroSlide[] = [
  {
    bg: images.heroSlide1,
    title: "Leaders In Electrical Solutions Since 1982",
    desc: "Carpenter Electric provides fast, high-quality service, delivering secure lighting and power solutions daily.",
  },
  {
    bg: images.heroSlide2,
    title: "Leaders In Electrical Solutions Since 1982",
    desc: "Carpenter Electric provides fast, high-quality service, delivering secure lighting and power solutions daily.",
  },
  {
    bg: images.heroSlide3,
    title: "Leaders In Electrical Solutions Since 1982",
    desc: "Carpenter Electric provides fast, high-quality service, delivering secure lighting and power solutions daily.",
  },
];
