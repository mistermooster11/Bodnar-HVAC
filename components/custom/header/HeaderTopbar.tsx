export default function HeaderTopbar() {
  return (
    <div className="header-topbar">
      <div className="container-site header-topbar-inner">
        <span className="topbar-item topbar-license">License#: EC13011405</span>
        <span className="topbar-divider" />
        <a href="mailto:info@carpenter-electric.com" className="topbar-item topbar-link">
          <svg className="topbar-svg" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          info@carpenter-electric.com
        </a>
        <span className="topbar-divider" />
        <span className="topbar-item topbar-address">
          <svg className="topbar-svg" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          1333 53rd St, West Palm Beach, FL 33407
        </span>
      </div>
    </div>
  );
}
