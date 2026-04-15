import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { processSteps } from '../data/content';

export default function Process() {
  return (
    <section id="process" className="section process-section">
      <div className="container">
        <SectionTitle
          eyebrow="Process"
          title="A clear, premium workflow built for real business outcomes"
          description="Every step is designed to reduce uncertainty, speed up delivery, and protect product quality."
        />

        <div className="timeline">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="timeline-card glass-card"
            >
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
