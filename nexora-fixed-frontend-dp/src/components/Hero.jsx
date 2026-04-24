import { motion } from 'framer-motion';
import { Link } from '../lib/router';
import { stats } from '../data/content';

export default function Hero() {
  return (
    <section id="hero" className="hero section section-first">
      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-copy"
        >
          <div className="hero-badge">Premium digital studio for ambitious companies</div>
          <h2>
            We design routes, screens, and systems that make your business look <span>serious</span>.
          </h2>
          <p>
            RickCpm helps founders, startups, and growing businesses launch products that
            look credible, feel premium, and convert with confidence across every page.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Request a quote
            </Link>
            <Link to="/work" className="btn btn-secondary">
              Explore the visual standard
            </Link>
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
                <p>Multi-page experience</p>
                <strong>Sharper positioning</strong>
              </div>
              <div className="metrics-row">
                <div className="mini-card">
                  <p>Routes</p>
                  <strong>Home · Services · Contact</strong>
                </div>
                <div className="mini-card">
                  <p>Consultation</p>
                  <strong>Dedicated conversion flow</strong>
                </div>
              </div>
              <div className="chart-line"></div>
              <div className="bottom-cards">
                <div className="mini-panel">
                  <span>Premium navigation</span>
                </div>
                <div className="mini-panel highlighted">
                  <span>Conversion-ready structure</span>
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
            Business-first structure
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
