import { useEffect, useState } from 'react';
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
        <a href="#hero" className="brand">
          <span className="brand-mark">N</span>
          <div>
            <strong>Nexora Digital</strong>
            <small>Web • Mobile • AI</small>
          </div>
        </a>

        <nav>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#booking" className="btn btn-sm btn-primary">
          Book a call
        </a>
      </div>
    </header>
  );
}
