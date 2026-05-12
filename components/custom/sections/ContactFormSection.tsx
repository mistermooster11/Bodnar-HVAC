/**
 * ContactFormSection
 * Source: elementor-88 container-325154c
 * Left: form iframe (leadconnector) + Right: Google Maps iframe
 */
export default function ContactFormSection() {
  return (
    <section className="contact-main">
      {/* ── Left: Form card ────────────────────────────────── */}
      <div className="contact-form-col">
        <div className="section-subtitle">
          <i className="caren-icon- caren-icon-breadcrumb" aria-hidden="true" />
          Call Us!
        </div>
        <h2>Contact us &amp; let&apos;s collaborate!</h2>
        <p className="contact-desc">
          Carpenter-Electric proudly serves the entire Stuart-to-Miami region,
          along with Orlando, Daytona, Tampa, Gainesville, Naples, Cocoa Beach,
          and the Bahamas.
        </p>
        <hr className="contact-form-divider" />
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/HLSTC5x5Hy9qacIBagXI"
          className="contact-form-iframe"
          id="inline-HLSTC5x5Hy9qacIBagXI"
          data-layout='{"id":"INLINE"}'
          data-form-name="Form 0"
          data-height="719"
          data-form-id="HLSTC5x5Hy9qacIBagXI"
          title="Contact Form"
        />
        <script src="https://link.msgsndr.com/js/form_embed.js" async />
      </div>

      {/* ── Right: Google Map ──────────────────────────────── */}
      <div className="contact-map-col">
        <iframe
          loading="lazy"
          src="https://maps.google.com/maps?q=1333%2053rd%20St%2C%20West%20Palm%20Beach%2C%20FL%2033407&t=m&z=10&output=embed&iwloc=near"
          title="1333 53rd St, West Palm Beach, FL 33407"
          aria-label="1333 53rd St, West Palm Beach, FL 33407"
        />
      </div>
    </section>
  );
}
