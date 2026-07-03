const SHOW = [
  { src: '/media/showcase-1.mp4', cap: 'Dredging Operations', small: 'On Site' },
  { src: '/media/showcase-2.mp4', cap: 'Marine & River Works', small: 'Field Ops' },
  { src: '/media/showcase-3.mp4', cap: 'Excavation & Land Reclamation', small: 'In Action' },
  { src: '/media/showcase-4.mp4', cap: 'Commercial Diving', small: 'Underwater' }
];

export default function Showcase() {
  return (
    <section className="section showcase">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">08 · Operations in Motion</div>
          <h2>See Our Work In The Field</h2>
          <p>Real footage from active engineering, dredging, and marine operations across our project sites.</p>
        </div>
        <div className="showcase-grid">
          {SHOW.map((v) => (
            <div className="showcase-card" key={v.src}>
              <video src={v.src} muted loop playsInline autoPlay preload="metadata" />
              <div className="cap"><small>{v.small}</small>{v.cap}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
