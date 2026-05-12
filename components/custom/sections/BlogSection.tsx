"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const PLACEHOLDER_IMG = "https://carpenter-electric.com/wp-content/uploads/2025/05/placeholder-786x629.jpg";

const blogPosts = [
  {
    title: "The Role of Smart Electrical Systems in Modern Homes",
    date: "May 14, 2025",
    categories: ["Accessories", "Power Tools"],
    excerpt: "Going green and reducing your carbon footprint are important steps towards creating a more sustainable future for our planet…",
    href: "https://carpenter-electric.com/accessories/the-role-of-smart-electrical-systems-in-modern-homes/",
    img: PLACEHOLDER_IMG,
  },
  {
    title: "How to Identify Signs of Electrical Wear and Tear at Home",
    date: "May 14, 2025",
    categories: ["Home Appliance", "Uncategorized"],
    excerpt: "Understanding the warning signs of electrical wear and tear can help you prevent costly repairs and keep your family safe…",
    href: "https://carpenter-electric.com/uncategorized/how-to-identify-signs-of-electrical-wear-and-tear-at-home/",
    img: PLACEHOLDER_IMG,
  },
  {
    title: "Energy Efficiency Tips for Homeowners",
    date: "May 14, 2025",
    categories: ["Accessories"],
    excerpt: "Making your home more energy efficient doesn't have to be complicated. Discover practical tips that can reduce your bills…",
    href: "https://carpenter-electric.com/blog/",
    img: PLACEHOLDER_IMG,
  },
];

export default function BlogSection() {
  return (
    <section className="blog-section section-block">
      <div className="container-site">
        <div className="blog-header">
          <p className="subtitle-badge" style={{ justifyContent: "center" }}>Blogs &amp; Articles</p>
          <h2 className="section-heading blog-heading">
            Recent blog posts and news insignt
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          loop={false}
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            0:   { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024:{ slidesPerView: 3 },
          }}
        >
          {blogPosts.map((post) => (
            <SwiperSlide key={post.title}>
              <div className="blog-card">
                <div className="blog-card-thumb">
                  <div className="blog-card-categories">
                    {post.categories.map((cat, i) => (
                      <span key={cat}>
                        <a href="/blog/">{cat}</a>
                        {i < post.categories.length - 1 && <span className="blog-dot" />}
                      </span>
                    ))}
                  </div>
                  <div className="blog-card-meta">{post.date}</div>
                  <img src={post.img} alt={post.title} className="blog-card-img" loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-card-title">
                    <a href={post.href}>{post.title}</a>
                  </h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <a href={post.href} className="blog-card-link">Read More</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
