"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLHRElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let tl: any;

    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return;

      gsap.set([titleRef.current, dividerRef.current, descRef.current, buttonsRef.current], {
        opacity: 0,
      });

      tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(titleRef.current,
          { y: -40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, clearProps: "all" }
        )
        .fromTo(dividerRef.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.5, transformOrigin: "left center", clearProps: "all" },
          "-=0.4"
        )
        .fromTo(descRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, clearProps: "all" },
          "-=0.3"
        )
        .fromTo(buttonsRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, clearProps: "all" },
          "-=0.4"
        );
    })();

    return () => {
      cancelled = true;
      tl?.kill();
    };
  }, []);

  return (
    <section className="hero">
      {/* Cloudflare Stream video background */}
      <div className="hero__video-bg">
        <iframe
          src="https://customer-ip9lnkk65px0t3ak.cloudflarestream.com/d89c4c77e58f76f26c7fe30959501840/iframe?autoplay=true&muted=true&loop=true&controls=false&playsinline=true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "177.78vh",
            height: "56.25vw",
            minWidth: "100%",
            minHeight: "100%",
            transform: "translate(-50%, -50%)",
            border: "none",
            pointerEvents: "none",
          }}
          allow="autoplay; fullscreen"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="hero__content">
        <h1 className="hero__title" ref={titleRef}>
          Mid-Peninsula HVAC Experts
          <br />
          Since 1976
        </h1>

        <hr className="hero__divider" ref={dividerRef} />

        <p className="hero__description" ref={descRef}>
          Repair-first diagnostics. Owner-operated. 60-day labor warranty.
          <br />
          Proudly serving Redwood City, Palo Alto, Menlo Park &amp; surrounding communities.
        </p>

        <div className="hero__buttons" ref={buttonsRef}>
          <Link href="/contact-us" className="hero__btn-primary">
            Schedule Service
          </Link>
          <Link href="/services-page" className="hero__btn-secondary">
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
