export type Review = {
  name: string;
  rating: number;
  text: string;
  avatar: string;
};

export interface Testimonial {
  name: string;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Erica M.",
    content: "We used Bodnar for an HVAC repair and could not be happier with our experience. John was super professional and knowledgeable. He fixed everything in a timely manner and even managed to get our replacement part under warranty. I'd use Bodnar again any day!",
  },
  {
    name: "Ryan L.",
    content: "The team really went above and beyond on our job. They did an excellent job with the recommendation and installation of our heat pump system. I am super happy with the work that the Bodnar team did. I highly highly recommend this company for any HVAC work you need done.",
  },
  {
    name: "Verified Client",
    content: "Bodnar visited recently to perform annual maintenance on our furnace. Their technicians were on-time, courteous, and knowledgeable. After performing the service, they explained everything they found in plain language. Highly recommend.",
  },
];

export const testimonialsSectionContent = {
  subtitle: "Our clients'",
  heading: "Here's What Our Clients Say",
  rating: "4.8",
  avatars: [
    "/images/testimo-avatar-4.jpg",
    "/images/testimo-avatar-5.jpg",
    "/images/testimo-avatar-6.jpg",
  ],
  sideImage: "/images/AdobeStock_913726797-e1774388913262.jpg",
};

export const reviews: Review[] = [
  {
    name: "Erica M.",
    rating: 5,
    text: "We used Bodnar for an HVAC repair and could not be happier with our experience. We had initially hired another company who honestly made the problem worse. John was super professional and knowledgeable. He fixed everything in a timely manner and even managed to get our replacement part under warranty. I'd use Bodnar again any day!",
    avatar: "/images/testimo-avatar-4.jpg",
  },
  {
    name: "Ryan L.",
    rating: 5,
    text: "The team really went above and beyond on our job. They did an excellent job with the recommendation and installation of our heat pump system. I am super happy with the work that the Bodnar team did. I only wish we had done it sooner! I highly highly recommend this company for any HVAC work you need done. Thanks guys!",
    avatar: "/images/testimo-avatar-5.jpg",
  },
  {
    name: "Verified Client",
    rating: 5,
    text: "John was knowledgeable, kind, and fair. He diagnosed the issue quickly and fixed it the same day. As a homeowner in Palo Alto dealing with an older furnace, it was refreshing to work with someone who actually tried to repair before recommending a replacement.",
    avatar: "/images/testimo-avatar-6.jpg",
  },
  {
    name: "David K.",
    rating: 5,
    text: "Bodnar HVAC came out the same day I called. John diagnosed a failing capacitor on my AC unit, replaced it on the spot, and the system has been running perfectly ever since. Fair pricing, no upselling. This is how home service should work.",
    avatar: "",
  },
  {
    name: "Patricia W.",
    rating: 5,
    text: "I've been using Bodnar for annual maintenance on my Carrier system for three years now. John is always on time, thorough, and honest. He flagged a small issue last year that would have become a costly repair — caught it early and saved me money. Highly recommend.",
    avatar: "",
  },
  {
    name: "Michael T.",
    rating: 5,
    text: "After another company quoted me $6,000 for a new furnace, I called Bodnar for a second opinion. John found the actual problem — a cracked heat exchanger seal — and repaired it for a fraction of the cost. Honest, skilled, and trustworthy. Don't call anyone else.",
    avatar: "",
  },
  {
    name: "Sandra L.",
    rating: 5,
    text: "Bodnar installed a new heat pump system in our Menlo Park home. Ted engineered the whole install around our existing ductwork and the system runs flawlessly. Energy bills are noticeably lower. Professional from start to finish.",
    avatar: "",
  },
];
