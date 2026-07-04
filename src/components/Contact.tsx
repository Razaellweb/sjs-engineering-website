import { IconPhone, IconMail, IconPin } from './icons';

const OFFICES = [
  { city: 'Lagos', addr: '21 Iseyin Street, Onipanu, Lagos State' },
  { city: 'Port Harcourt', addr: 'Close 22, House 5, Trans-Amadi Gardens, Rivers State' },
  { city: 'Warri', addr: 'Plot 18–33, Ubeji Road, Warri, Delta State' }
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">09 · Contact Us</div>
          <h2>Get in Touch With Our Team</h2>
          <p>Reach us at any of our three Nigerian offices, or contact us directly for engineering consultation and project enquiries.</p>
        </div>
        <div className="contact-grid">
          <div>
            <div className="contact-item">
              <div className="contact-ico"><IconPhone /></div>
              <div>
                <h4>Phone</h4>
                <p>+234 901 557 1868</p>
                <p>+234 701 342 4125</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-ico"><IconMail /></div>
              <div>
                <h4>Email</h4>
                <p><a href="mailto:sjsengr@gmail.com">sjsengr@gmail.com</a></p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-ico"><IconPin /></div>
              <div>
                <h4>Headquarters</h4>
                <p>Port Harcourt, Rivers State — Nigeria</p>
              </div>
            </div>
          </div>
          <div className="offices-grid">
            {OFFICES.map((o) => (
              <div className="office-card" key={o.city}>
                <div className="office-city">{o.city}</div>
                <div className="office-tag">Office</div>
                <div className="office-addr">{o.addr}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
