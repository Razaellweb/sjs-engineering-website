import { IconWave, IconCrane, IconGear, IconTruck, IconPipe, IconLeaf } from './icons';

const SERVICES = [
  {
    icon: <IconWave />,
    title: 'Dredging Services',
    body: 'Sand piling, land reclamation, harbour & river dredging, environmental sediment removal.'
  },
  {
    icon: <IconCrane />,
    title: 'Civil Engineering',
    body: 'Roads, culverts, bridges, structural upgrades, and building construction — delivered end-to-end.'
  },
  {
    icon: <IconGear />,
    title: 'Commissioning',
    body: 'Full commissioning planning, standardised checklists, system classification & spares review.'
  },
  {
    icon: <IconTruck />,
    title: 'Scrapping & Transport',
    body: 'Oil & gas project decommissioning, marine container transport, recycling and logistics.'
  },
  {
    icon: <IconPipe />,
    title: 'Pipeline & Utilities',
    body: 'Underwater pipeline installation, water intakes, and wastewater discharge infrastructure.'
  },
  {
    icon: <IconLeaf />,
    title: 'Environmental Services',
    body: 'Beach restoration, trenchless pipe replacement, pollution control, ecological compliance.'
  }
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">04 · Our Services</div>
          <h2>Comprehensive Engineering Solutions</h2>
          <p>
            We handle projects of any scale — bringing consulting, permitting, project design,
            dredging, spoils containment and project closeout under one roof.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
