export type BlogPost = {
  slug: string;
  image: string;
  date: string;
  monthYear: string;
  category: string;
  categoryHref: string;
  title: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "/blog/when-to-repair-vs-replace-your-hvac-system/",
    image: "/images/AdobeStock_1568613684.jpg",
    date: "15",
    monthYear: "May '26",
    category: "HVAC Tips",
    categoryHref: "/blog/",
    title: "When to Repair vs. Replace Your HVAC System: A Mid-Peninsula Homeowner's Guide",
    excerpt:
      "Most HVAC companies push replacement because it pays more. We break down the honest factors — system age, repair cost vs. replacement cost, efficiency gains — so you can make the right call for your home.",
  },
  {
    slug: "/blog/heat-pump-guide-redwood-city/",
    image: "/images/AdobeStock_1429423159.jpg",
    date: "02",
    monthYear: "Apr '26",
    category: "Heat Pumps",
    categoryHref: "/blog/",
    title: "Heat Pumps in the Mid-Peninsula: What Palo Alto & Menlo Park Homeowners Need to Know",
    excerpt:
      "California's climate incentives make heat pumps attractive, but sizing and installation quality determine whether you'll actually save money. Here's what to ask before you commit.",
  },
];
