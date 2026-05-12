export interface Testimonial {
  name: string;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Carol B.",
    content:
      "Just called to say how much she loves our company and said that Leighann is very nice and professional and that she always takes care of her very promptly. She also said that Danny was very nice and polite and thanks to him she can feel safe and have a nice weekend he is awesome. She also said she volunteers at the Hobe Sound Chamber of Commerce and they love us as well.",
  },
  {
    name: "Danny I.",
    content:
      "Good morning all, We from the Transwestern team, wanted to take this opportunity to thank your entire team for a job well done over this past weekend. The replacement of the bus duct at 450 Las Olas went seamless from the start to the end considering the difficultness of the project. Miguel really carried his team through without frustration or signs of being tired, their focus and mindset was to get this project started and finished as quickly as possible paying special attention to details, safety, social distancing, and communication with Transwestern at all times. Special Kuddos to Miguel and his team.",
  },
  {
    name: "Sean.",
    content:
      "I was changing my kitchen island from a two-tier island to one flat surface. Therefore, the electrical outlets that were in the backsplash had to be removed and placed on the wall below the counter. George showed up on time, was courteous and professional. The job took about 4 hours and it went smoothly and was reasonably priced. I would use them in the future and recommend them to others.",
  },
];

export const testimonialsSectionContent = {
  subtitle: "Our client's",
  heading: "Here's What our clients say",
  rating: "4.8",
  avatars: [
    "/images/testimo-avatar-4.jpg",
    "/images/testimo-avatar-5.jpg",
    "/images/testimo-avatar-6.jpg",
  ],
  sideImage: "/images/AdobeStock_913726797-e1774388913262.jpg",
};
