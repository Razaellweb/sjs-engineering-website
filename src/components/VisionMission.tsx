export default function VisionMission() {
  const mission = [
    'Operate professionally with highly experienced, skilled personnel',
    'Deploy efficient and cost-effective construction methods',
    'Ensure quality delivery and on-time project completion',
    'Uphold ecologically responsible, safe operations at all times'
  ];
  return (
    <section className="section" style={{ background: 'var(--paper-2)' }}>
      <div className="container">
        <div className="section-head" style={{ textAlign: 'center', margin: '0 auto 56px' }}>
          <div className="eyebrow">02 · Vision & Mission</div>
          <h2>Our Purpose &amp; Direction</h2>
        </div>
        <div className="vm-grid">
          <div className="vm-card vm-vision">
            <div className="vm-title">Our Vision</div>
            <div className="vm-underline" />
            <p className="vm-lede">
              To be the leading indigenous firm in dredging, engineering, and environmental
              services — driving the industry through quality-focused, value-oriented solutions.
            </p>
            <p className="vm-sub">
              We aspire to meet the needs of industry and public-service clients through skilled,
              experienced, and locally-delivered integrated solutions — while leading the industry
              in health, safety, and environmental performance.
            </p>
          </div>
          <div className="vm-card vm-mission">
            <div className="vm-title">Our Mission</div>
            <div className="vm-underline" />
            <div>
              {mission.map((m) => (
                <div className="mission-item" key={m}>
                  <div className="mission-dot" />
                  <p>{m}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
