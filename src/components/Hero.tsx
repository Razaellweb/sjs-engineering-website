import { IconArrow } from './icons';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <video className="hero-video" autoPlay muted loop playsInline poster="/media/dredging-site.jpg">
        <source src="/media/hero-loop.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-tag">
          <span className="hero-tag-dot" />
          Indigenous · CAMA Registered · 20+ Years
        </div>
        <h1>
          Engineering Excellence
          <span className="accent">from Conception to Completion.</span>
        </h1>
        <p className="hero-lede">
          A leading indigenous engineering firm delivering world-class dredging, marine,
          and civil engineering solutions across Nigeria and West Africa.
        </p>
        <div className="hero-actions">
          <a href="#services" className="btn btn-primary">
            Our Services <IconArrow />
          </a>
          <a href="#contact" className="btn btn-ghost">Request a Quote</a>
        </div>

        <div className="hero-services">
          <div className="hero-chip">Hydraulic Dredging</div>
          <div className="hero-chip">Civil Engineering</div>
          <div className="hero-chip">Marine Operations</div>
        </div>
      </div>
    </section>
  );
}
