"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cancelled = false;
    let ctx: any;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.from(".contact-section__info", {
          x: -50, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
        gsap.from(".contact-section__form-wrap", {
          x: 50, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="contact-section" ref={sectionRef}>
      <div className="contact-section__container">

        {/* LEFT: Contact Info */}
        <div className="contact-section__info">
          <div className="contact-section__eyebrow">Contact Us</div>
          <h2 className="contact-section__heading">
            We are ready to help <br />you with all your HVAC needs
          </h2>

          <div className="contact-section__details">
            <div className="contact-section__details-col">
              <h5 className="contact-detail__label">Address</h5>
              <p className="contact-detail__value">
                1251 Fifth Ave., Redwood City, CA 94063
              </p>

              <h5 className="contact-detail__label">Follow Us</h5>
              <div className="contact-section__social">
                <Link href="https://www.facebook.com/" className="contact-social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg aria-hidden="true" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </Link>
                <Link href="https://www.yelp.com/" className="contact-social-icon" aria-label="Yelp" target="_blank" rel="noopener noreferrer">
                  <svg aria-hidden="true" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor">
                    <path d="M42.9 240.32l99.62 48.61c19.2 9.4 16.2 37.51-4.5 42.71L30.5 358.45a22.79 22.79 0 0 1-28.21-19.6 197.16 197.16 0 0 1 9-85.32 22.8 22.8 0 0 1 31.61-13.21zm44 239.25a199.45 199.45 0 0 0 79.42 32.11A22.78 22.78 0 0 0 192.94 490l3.9-110.82c.7-21.3-25.5-31.91-39.81-16.1l-74.21 82.4a22.82 22.82 0 0 0 4.09 34.09zm145.34-109.92l58.81 94a22.93 22.93 0 0 0 34 5.5 198.36 198.36 0 0 0 52.71-67.61A23 23 0 0 0 364.17 370l-105.42-34.26c-20.31-6.5-37.81 15.8-26.51 33.91zm148.33-132.23a197.44 197.44 0 0 0-50.41-69.31 22.85 22.85 0 0 0-34 4.4l-62 91.92c-11.9 17.7 4.7 40.61 25.2 34.71L366 268.63a23 23 0 0 0 14.61-31.21zM62.11 30.18a22.86 22.86 0 0 0-9.9 32l104.12 180.44c11.7 20.2 42.61 11.9 42.61-11.4V22.88a22.67 22.67 0 0 0-24.5-22.8 320.37 320.37 0 0 0-112.33 30.1z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="contact-section__details-col">
              <h5 className="contact-detail__label">Phone</h5>
              <p className="contact-detail__value">
                <Link href="tel:+16503684408">(650) 368-4408</Link>
              </p>

              <h5 className="contact-detail__label">Email</h5>
              <p className="contact-detail__value">
                <Link href="mailto:info@bodnarhvac.com">info@bodnarhvac.com</Link>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="contact-section__form-wrap">
          <h3 className="contact-section__form-heading">Schedule Service</h3>
          <form className="contact-section__form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              className="contact-section__input"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            />
            <div className="contact-section__row">
              <input
                type="tel"
                placeholder="Phone"
                className="contact-section__input"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="contact-section__input"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="contact-section__row">
              <input
                type="text"
                placeholder="City"
                className="contact-section__input"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              />
              <input
                type="text"
                placeholder="Subject"
                className="contact-section__input"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </div>
            <textarea
              placeholder="Message"
              rows={5}
              className="contact-section__textarea"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button type="submit" className="contact-section__submit">
              Schedule Service
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
