/**
 * ContactInfoSection
 * Bodnar Heating & Air Conditioning, Inc. — Redwood City, CA
 */
export default function ContactInfoSection() {
  return (
    <section className="contact-info">
      <div className="section-subtitle">
        <i className="caren-icon- caren-icon-breadcrumb" aria-hidden="true" />
        get in touch
      </div>
      <h2 className="section-title">Need More Information?</h2>

      <div className="contact-info-grid">
        <div className="contact-info-item">
          <h3>Address:</h3>
          <p>1251 Fifth Ave., Redwood City, CA 94063</p>
        </div>

        <div className="contact-info-item">
          <h3>Phone:</h3>
          <p>
            <a href="tel:6503684408">(650) 368-4408</a>
          </p>
        </div>

        <div className="contact-info-item">
          <h3>Email:</h3>
          <p>
            <a href="mailto:info@bodnarhvac.com">
              info@bodnarhvac.com
            </a>
          </p>
        </div>

        <div className="contact-info-item">
          <h3>Hours:</h3>
          <p>Available 24/7 by Call or Text</p>
        </div>
      </div>
    </section>
  );
}
