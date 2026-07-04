export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand" style={{ marginBottom: 4 }}>
              <div className="brand-mark">SJS</div>
              <div>
                <div className="brand-name">SJS Engineering</div>
                <div className="brand-sub">Nigeria Limited</div>
              </div>
            </div>
            <p>
              A leading indigenous engineering firm delivering world-class dredging, marine,
              and civil engineering solutions across Nigeria and West Africa.
            </p>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              <li><a href="#services">Dredging Services</a></li>
              <li><a href="#services">Civil Engineering</a></li>
              <li><a href="#services">Marine Contracting</a></li>
              <li><a href="#services">Commercial Diving</a></li>
              <li><a href="#services">Environmental Services</a></li>
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#expertise">Expertise</a></li>
              <li><a href="#equipment">Equipment</a></li>
              <li><a href="#clients">Clients</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li><a href="tel:+2349035527231">+234 901 557 1868</a></li>
              <li><a href="tel:+2347013424125">+234 701 342 4125</a></li>
              <li><a href="mailto:sjsengr@gmail.com">sjsengr@gmail.com</a></li>
              <li>Lagos · Port Harcourt · Warri</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} SJS Engineering Nigeria Limited. All rights reserved.</div>
          <div>Incorporated under CAMA — Nigeria</div>
        </div>
      </div>
    </footer>
  );
}
