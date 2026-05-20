"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const PLACEHOLDER_IMG = "/images/lopo1-1.jpg"; // [TODO: Replace with Bodnar HVAC blog images]

const blogPosts = [
  {
    title: "Why Your Furnace Short-Cycles — And What to Do About It",
    date: "May 2025",
    categories: ["Heating", "Furnace Repair"],
    excerpt: "Short-cycling is one of the most common furnace complaints on the Mid-Peninsula. Here's what causes it and when to call a technician...",
    href: "/contact-us/", // [TODO: Replace with real blog post URL when blog is live]
    img: PLACEHOLDER_IMG,
  },
  {
    title: "Heat Pump vs. Gas Furnace: What Makes Sense in the Bay Area?",
    date: "May 2025",
    categories: ["Heat Pumps", "Installation"],
    excerpt: "The Bay Area's mild winters make heat pumps a compelling option for many homeowners. Here's how to evaluate whether the switch makes sense for your home...",
    href: "/contact-us/", // [TODO: Replace with real blog post URL when blog is live]
    img: PLACEHOLDER_IMG,
  },
  {
    title: "5 Signs Your HVAC System Needs Maintenance Before Summer",
    date: "April 2025",
    categories: ["A/C", "Maintenance"],
    excerpt: "By the time your A/C fails on the first 90-degree day, it's too late for a tune-up. These warning signs mean it's time to schedule a visit now...",
    href: "/contact-us/", // [TODO: Replace with real blog post URL when blog is live]
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
            HVAC Tips &amp; Insights for Mid-Peninsula Homeowners
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
                        <a href="/contact-us/">{cat}</a>
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
