import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { projects } from '../data/content';

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Positioning"
          title="A visual presence designed to inspire trust from the first seconds"
          description="Even before showing every client case, the site itself should communicate the level of quality you sell."
          center
        />

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="portfolio-card"
            >
              <div className="portfolio-visual gradient-bg">
                <div className="portfolio-overlay">
                  <span>{project.category}</span>
                  <strong>{project.title}</strong>
                </div>
              </div>
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
