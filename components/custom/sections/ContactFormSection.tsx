/**
 * ContactFormSection
 * Bodnar Heating & Air Conditioning, Inc. — Redwood City, CA
 */
export default function ContactFormSection() {
  return (
    <section className="contact-main">
      {/* ── Left: Form card ────────────────────────────────── */}
      <div className="contact-form-col">
        <div className="section-subtitle">
          <i className="caren-icon- caren-icon-breadcrumb" aria-hidden="true" />
          Call or Text Us!
        </div>
        <h2>Contact us &amp; let&apos;s get your system running right.</h2>
        <p className="contact-desc">
          Bodnar HVAC serves Redwood City and the entire Mid-Peninsula — including Atherton, Belmont,
          Burlingame, Foster City, Los Altos, Menlo Park, Millbrae, Palo Alto, Portola Valley,
          San Bruno, San Carlos, San Mateo, South San Francisco, Stanford, and Woodside.
        </p>
        <hr className="contact-form-divider" />
        {/* [TODO: Replace with Bodnar HVAC LeadConnector or booking embed form ID] */}
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/[TODO-BODNAR-FORM-ID]"
          className="contact-form-iframe"
          id="inline-bodnar-contact-form"
          data-layout='{"id":"INLINE"}'
          data-form-name="Bodnar HVAC Contact Form"
          data-height="719"
          data-form-id="[TODO-BODNAR-FORM-ID]"
          title="Contact Form"
        />
        <script src="https://link.msgsndr.com/js/form_embed.js" async />
      </div>

      {/* ── Right: Google Map ──────────────────────────────── */}
      <div className="contact-map-col">
        <iframe
          loading="lazy"
          src="https://maps.google.com/maps?q=1251%20Fifth%20Ave%2C%20Redwood%20City%2C%20CA%2094063&t=m&z=13&output=embed&iwloc=near"
          title="1251 Fifth Ave., Redwood City, CA 94063 — Bodnar HVAC"
          aria-label="Bodnar Heating & Air Conditioning — 1251 Fifth Ave., Redwood City, CA 94063"
        />
      </div>
    </section>
  );
}
