const AREAS = [
  { head: 'Innovations', items: ['Beach Restoration', 'Trenchless Pipe Replacement', 'Advanced Marine Technology'] },
  { head: 'Environmental', items: ['Pollution Control & Remediation', 'Ecological Impact Management', 'Environmental Construction'] },
  { head: 'Civil & Structural', items: ['Civil & Building Engineering', 'Roads & Transportation', 'Structural Facility Upgrade'] },
  { head: 'Electrical & Instrumentation', items: ['Swamp, Marshland & River Crossing', 'Electrical Systems Installation', 'Instrumentation & Control'] },
  { head: 'Water & Mechanical', items: ['Water Systems (Swamp/River)', 'Mechanical Engineering Services', 'Pumping & Pipeline Systems'] },
  { head: 'Consultancy & Staffing', items: ['Engineering Consultancy', 'Procurement & Inspection', 'Recruitment & Staffing Services'] }
];

export default function Expertise() {
  return (
    <section id="expertise" className="section expertise-section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">05 · Service Areas</div>
          <h2>Areas of Expertise</h2>
          <p>
            Six specialised practice areas — each led by highly experienced engineers, technicians, and marine specialists.
          </p>
        </div>
        <div className="exp-grid">
          {AREAS.map((a) => (
            <div className="exp-card" key={a.head}>
              <div className="exp-head">{a.head}</div>
              <ul className="exp-list">
                {a.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
