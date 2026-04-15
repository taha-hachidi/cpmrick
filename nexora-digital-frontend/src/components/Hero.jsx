import { motion } from 'framer-motion';
import { stats } from '../data/content';

export default function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-copy"
        >
          <div className="hero-badge">Premium digital studio for ambitious companies</div>
          <h2>
            We build <span>web</span>, <span>mobile</span>, <span>AI</span>, and
            <span> automated</span> experiences that make your brand look exceptional.
          </h2>
          <p>
            Nexora Digital helps founders, startups, and growing businesses launch products that
            look credible, feel premium, and perform with confidence.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Request a quote
            </a>
            <a href="#portfolio" className="btn btn-secondary">
              Explore the visual standard
            </a>
          </div>

          <div className="stats-grid">
            {stats.map((item) => (
              <div key={item.label} className="stat-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="hero-visual"
        >
          <div className="screen large">
            <div className="screen-top">
              <span></span><span></span><span></span>
            </div>
            <div className="screen-content">
              <div className="mini-card gradient-card">
                <p>Launch dashboard</p>
                <strong>+38% qualified leads</strong>
              </div>
              <div className="metrics-row">
                <div className="mini-card">
                  <p>Automations</p>
                  <strong>12 live workflows</strong>
                </div>
                <div className="mini-card">
                  <p>AI agents</p>
                  <strong>24/7 responses</strong>
                </div>
              </div>
              <div className="chart-line"></div>
              <div className="bottom-cards">
                <div className="mini-panel">
                  <span>Premium web product</span>
                </div>
                <div className="mini-panel highlighted">
                  <span>Consultation booked</span>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="floating-card top-right"
          >
            High-end UX
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="floating-card bottom-left"
          >
            Scalable architecture
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
