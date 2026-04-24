import { useEffect, useState } from 'react';
import { NavLink, Link } from '../lib/router';
import { navLinks } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">RC</span>
          <div>
            <strong>RickCpm</strong>
            <small>Web • Mobile • AI</small>
          </div>
        </Link>

        <nav>
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => (isActive ? 'active' : '')}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/consultation" className="btn btn-sm btn-primary">
          Book a call
        </Link>
      </div>
    </header>
  );
}
