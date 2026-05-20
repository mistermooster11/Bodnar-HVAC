/**
 * ApplyNowSection
 * Source: elementor-5903 — container-89c1ab9
 * 3 steps: Employment Application → Resume Upload → Predictive Index Assessment
 */

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
  </svg>
);

export default function ApplyNowSection() {
  return (
    <section className="apply-now">
      {/* Intro */}
      <h2 className="apply-now__intro">
        Ready to Get a Quote?<br />
        Here&apos;s how to reach us.
      </h2>

      {/* Option 1 */}
      <h2 className="apply-now__step">
        1. Book online — available 24/7, nothing due at booking.
      </h2>
      <a
        className="apply-now__btn"
        href="https://book.housecallpro.com/book/Bodnar-Heating-Air-Conditioning-Inc/18daf492b58446fc81924a0346ae2dfe?v2=true"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ArrowIcon />
        Book Online Now
      </a>

      {/* Option 2 */}
      <h2 className="apply-now__step">2. Or call / text us directly</h2>
      <a
        className="apply-now__btn"
        href="tel:6503684408"
      >
        <ArrowIcon />
        (650) 368-4408
      </a>

      {/* Option 3 */}
      <h2 className="apply-now__step">3. Or send us an email</h2>
      <a
        className="apply-now__btn"
        href="mailto:info@bodnarhvac.com"
      >
        <ArrowIcon />
        info@bodnarhvac.com
      </a>

      {/* Closing */}
      <p className="apply-now__closing">
        We typically respond within one business day. Free estimates available
        for equipment replacement — diagnostic visits are billable to keep our
        advice 100% objective.
      </p>
    </section>
  );
}
