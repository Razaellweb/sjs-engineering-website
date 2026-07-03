const FLEET = [
  'Barges (800–1,500 tons)',
  'Cranes & Pontoons',
  'Air Compressors',
  'Excavators & Loaders',
  'Pumping Machines (4"/6")',
  'Low Bed Trucks',
  'Swamp Buggies & Rollers',
  'Fiber Boats',
  'Diving & Cutting Kits',
  'Scaffolding & Mixers',
  'Air Lift Pipes',
  'Forklifts'
];

const PERSONNEL: [string, string][] = [
  ['Electrical Engineers', '10–20 yrs'],
  ['Electronics Engineers', '8–10 yrs'],
  ['Technicians', '12–20 yrs'],
  ['Marine Engineers', '10–15 yrs'],
  ['Underwater Cutters', '10–15 yrs'],
  ['Commercial Divers', '15–20 yrs']
];

export default function Equipment() {
  return (
    <section id="equipment" className="section equipment-section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">06 · Equipment & Resources</div>
          <h2>Fleet, Machinery &amp; Expert Personnel</h2>
          <p>Owned equipment paired with decades of hands-on experience — ready for deployment across land, water, and swamp terrain.</p>
        </div>
        <div className="equipment-grid">
          <div className="eq-panel">
            <h3>Equipment <span>Fleet</span></h3>
            <ul className="fleet-list">
              {FLEET.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
          <div className="eq-panel">
            <h3>Expert <span>Personnel</span></h3>
            {PERSONNEL.map(([r, y]) => (
              <div className="personnel-item" key={r}>
                <b>{r}</b>
                <span>{y}</span>
              </div>
            ))}
          </div>
          <div className="eq-media">
            <img src="/media/crane.jpg" alt="Link-Belt RTC-8060 crane on-site" />
            <div className="eq-media-caption">Link-Belt RTC-8060 rough-terrain crane on operational site</div>
          </div>
        </div>
      </div>
    </section>
  );
}
