import { IconArrow } from './icons';

export default function CTAStrip() {
  return (
    <section className="cta-strip">
      <div className="container cta-inner">
        <div>
          <h2>From conception to completion — delivering engineering excellence across Nigeria and West Africa.</h2>
          <p>Discuss your project with our engineering team today.</p>
        </div>
        <a href="#contact" className="btn btn-primary">Start a Conversation <IconArrow /></a>
      </div>
    </section>
  );
}
