const CLIENTS = [
  { code: 'NIWA', name: 'National Inland Waterways Authority', sub: 'Warri · Port Harcourt · Lagos' },
  { code: 'NPA', name: 'Nigerian Ports Authority', sub: 'Onne · Warri' },
  { code: 'CVX', name: 'Chevron Nigeria Limited', sub: 'Oil & Gas Sector' },
  { code: 'SHELL', name: 'Shell Petroleum', sub: 'Upstream Operations' },
  { code: 'NNPC', name: 'NNPC', sub: 'National Oil Corporation' },
  { code: 'NNS', name: 'NNS Pathfinder', sub: 'Port Harcourt' },
  { code: 'ASM', name: 'African Steel Mills', sub: 'National Operations' },
  { code: 'GOV', name: 'State Governments', sub: 'South-South Region' }
];

export default function Clients() {
  return (
    <section id="clients" className="section clients-section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">07 · Key Clients</div>
          <h2>Trusted by Nigeria's Leading Organisations</h2>
          <p>Federal agencies, oil majors, and state governments partner with us for mission-critical dredging and engineering programmes.</p>
        </div>
        <div className="clients-grid">
          {CLIENTS.map((c) => (
            <div className="client-card" key={c.code}>
              <div className="client-head">{c.code}</div>
              <div className="client-body">
                <b>{c.name}</b>
                <span>{c.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
