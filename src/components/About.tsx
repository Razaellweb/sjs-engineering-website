export default function About() {
  const facts: [string, string][] = [
    ['Incorporation', 'CAMA — Nigeria'],
    ['Specialisation', 'Dredging & Marine'],
    ['HQ', 'Port Harcourt, Nigeria'],
    ['Offices', 'Lagos · PH · Warri'],
    ['Partnerships', 'International & Local'],
    ['Sectors', 'Civil, Marine, Oil & Gas']
  ];
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div>
            <div className="eyebrow">01 · Introduction</div>
            <h2>A Full-Service Engineering & Marine Contractor</h2>
            <div className="divider-gold" />
            <p style={{ marginBottom: 18 }}>
              SJS Engineering Nigeria Limited is a fully indigenous company incorporated under
              the Companies and Allied Matters Act (CAMA) to carry on businesses in civil
              engineering, marine engineering services, and the oil &amp; gas sector.
            </p>
            <p>
              We operate in strategic partnership and collaboration with international and local
              technical partners, bringing world-class expertise to every project we undertake
              — from excavation and logistics to recycling and finished product delivery.
            </p>
            <div className="keyfacts">
              <h4>Key Facts</h4>
              {facts.map(([k, v]) => (
                <div key={k} className="keyfacts-row">
                  <span>{k}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-media">
            <img src="/media/dredging-site.jpg" alt="Hydraulic dredger vessel in operation" />
            <div className="about-badge">
              <b>20+</b>
              <span>Years Delivering Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
