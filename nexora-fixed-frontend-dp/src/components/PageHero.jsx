import { motion } from 'framer-motion';

export default function PageHero({ eyebrow, title, description, aside }) {
  return (
    <section className="page-hero section section-first compact">
      <div className="container page-hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-eyebrow">{eyebrow}</span>
          <h1 className="page-hero-title">{title}</h1>
          <p className="page-hero-description">{description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="glass-card page-hero-card"
        >
          {aside}
        </motion.div>
      </div>
    </section>
  );
}
