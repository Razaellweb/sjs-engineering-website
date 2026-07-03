export default function Stats() {
  const stats = [
    { num: '20+', label: 'Years Experience' },
    { num: '3', label: 'Nigerian Offices' },
    { num: '10+', label: 'Major Clients' },
    { num: '4', label: 'Core Sectors' }
  ];
  return (
    <section className="stats-bar">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
