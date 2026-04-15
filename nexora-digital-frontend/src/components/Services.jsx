import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { services } from '../data/content';

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Services"
          title="Everything you need to digitize, automate, and elevate your business"
          description="A clear offer for launching a premium website, business app, mobile product, or practical AI-powered system."
          center
        />
        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="glass-card service-card"
              >
                <div className="icon-wrap">
                  <Icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
