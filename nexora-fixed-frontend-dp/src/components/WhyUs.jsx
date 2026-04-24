import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { differentiators } from '../data/content';

export default function WhyUs() {
  return (
    <section className="section why-section">
      <div className="container two-col">
        <div>
          <SectionTitle
            eyebrow="Why us"
            title="A site that feels premium and an offer that speaks the language of business"
            description="The goal is not just to look good. The goal is to look credible, premium, and immediately relevant to the right client."
          />
        </div>

        <div className="stack-cards">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-card feature-row"
              >
                <div className="icon-wrap alt">
                  <Icon />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
