import { Link } from '../lib/router';
import { motion } from 'framer-motion';
import { ctaCards } from '../data/content';

export default function ContactPreview() {
  return (
    <section className="section cta-section">
      <div className="container cta-grid">
        {ctaCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-card cta-card"
            >
              <div className="icon-wrap alt"><Icon /></div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <Link className="btn btn-secondary btn-inline" to={card.to}>{card.action}</Link>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
