import { Link } from '../lib/router';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>RickCpm</strong>
          <p>Premium web, mobile, AI, and workflow automation services.</p>
        </div>
        <div className="footer-links">
          <Link to="/services">Services</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/consultation">Consultation</Link>
        </div>
      </div>
    </footer>
  );
}
