import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <div className="brand-mark">SJS</div>
          <div>
            <div className="brand-name">SJS Engineering</div>
            <div className="brand-sub">Nigeria Limited</div>
          </div>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#expertise">Expertise</a>
          <a href="#equipment">Equipment</a>
          <a href="#projects">Projects</a>
          <a href="#clients">Clients</a>
        </div>
        <div className="nav-cta">
          <span className="nav-phone">+234 903 552 7231</span>
          <a href="#contact" className="btn btn-primary" style={{ padding: '10px 22px' }}>Get in Touch</a>
        </div>
      </div>
    </nav>
  );
}
