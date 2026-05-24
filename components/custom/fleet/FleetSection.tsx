"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

export default function FleetSection() {
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
        gsap.from(".fleet-section__text", {
          x: -50, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
        gsap.from(".fleet-section__img", {
          scale: 0.92, opacity: 0, duration: 0.7, ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="fleet-section" ref={sectionRef}>
      <div className="fleet-section__container">
        {/* LEFT — text */}
        <div className="fleet-section__text">
          <div className="fleet-section__eyebrow">Our Team</div>
          <h2 className="fleet-section__heading">
            3rd-Generation Expertise, Owner-Operated Service
          </h2>
          <p className="fleet-section__intro">
            John Bodnar personally handles every repair and first-time diagnostic visit.
            Ted, our lead installer with 10+ years at Bodnar HVAC, engineers every
            installation around your home&apos;s specific ductwork and load requirements.
            You get the same expert faces every time — no rotating crews, no subcontractors.
          </p>
        </div>

        {/* RIGHT — images */}
        <div className="fleet-section__images">
          <Image
            src="/images/john-bodnar.webp"
            alt="John Bodnar, owner and lead technician"
            width={1024}
            height={909}
            className="fleet-section__img"
          />
          <Image
            src="/images/about-team.webp"
            alt="Bodnar Heating & Air Conditioning team"
            width={1024}
            height={683}
            className="fleet-section__img"
          />
        </div>
      </div>
    </section>
  );
}
