const IMAGES = [
  { src: '/media/amphibious-excavator.jpg', alt: 'CAT 320C amphibious excavator', cls: 'span2' },
  { src: '/media/commercial-diver.jpg', alt: 'Commercial diver in operation' },
  { src: '/media/diver-surface.jpg', alt: 'Diver surfacing' },
  { src: '/media/underwater-cutting.jpg', alt: 'Underwater cutting works', cls: 'tall' },
  { src: '/media/river-dredge.jpg', alt: 'River dredging site' },
  { src: '/media/sediment-removal.jpg', alt: 'Environmental sediment removal' },
  { src: '/media/pipeline-work.jpg', alt: 'Pipeline installation' },
  { src: '/media/marine-diving.jpg', alt: 'Marine diving from vessel' },
  { src: '/media/team-marine.jpg', alt: 'Marine engineering team on site' }
];

export default function Gallery() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Project Gallery</div>
          <h2>Delivering Across Land, Water &amp; Swamp</h2>
          <p>Dredging, marine contracting, commercial diving, and civil works — a look at recent field operations.</p>
        </div>
        <div className="gallery-grid">
          {IMAGES.map((img) => (
            <div className={`gallery-item ${img.cls || ''}`} key={img.src}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
