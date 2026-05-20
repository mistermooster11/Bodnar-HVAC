export interface Testimonial {
  name: string;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Erica M.",
    content:
      "We used Bodnar for an HVAC repair and could not be happier with our experience. We had initially hired another company who honestly made the problem worse. John was super professional and knowledgeable. He fixed everything in a timely manner and even managed to get our replacement part under warranty. I'd use Bodnar again any day!",
  },
  {
    name: "Ryan L.",
    content:
      "The team really went above and beyond on our job. They did an excellent job with the recommendation and installation of our heat pump system. I am super happy with the work that the Bodnar team did. I only wish we had done it sooner! I highly highly recommend this company for any HVAC work you need done. Thanks guys!",
  },
  {
    name: "Verified Client",
    content:
      "Bodnar visited recently to perform annual maintenance on our furnace. Their technicians were on-time, courteous, and knowledgeable. After performing the service, they explained everything they found in plain language. Highly recommend.",
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
