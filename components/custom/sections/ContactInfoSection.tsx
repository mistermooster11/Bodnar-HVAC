/**
 * ContactInfoSection
 * Source: elementor-88 container-4e317f4
 * "Need More Information?" + 4-col grid: Address / Phone / Email / License
 */
export default function ContactInfoSection() {
  return (
    <section className="contact-info">
      {/* heading */}
      <div className="section-subtitle">
        <i className="caren-icon- caren-icon-breadcrumb" aria-hidden="true" />
        get in touch
      </div>
      <h2 className="section-title">Need More Information?</h2>

      {/* 4-col info grid */}
      <div className="contact-info-grid">
        <div className="contact-info-item">
          <h3>Address:</h3>
          <p>1333 53rd St, West Palm Beach, FL 33407</p>
        </div>

        <div className="contact-info-item">
          <h3>Phone:</h3>
          <p>
            <a href="tel:561-848-7881">561-848-7881</a>
          </p>
        </div>

        <div className="contact-info-item">
          <h3>Email:</h3>
          <p>
            <a href="mailto:info@carpenter-electric.com">
              info@carpenter-electric.com
            </a>
          </p>
        </div>

        <div className="contact-info-item">
          <h3>License#:</h3>
          <p>EC13011405</p>
        </div>
      </div>
    </section>
  );
}
