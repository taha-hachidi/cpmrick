import { Link } from '../lib/router';

export default function NotFoundPage() {
  return (
    <section className="section section-first compact">
      <div className="container not-found-card glass-card">
        <span className="section-eyebrow">404</span>
        <h1>That page does not exist.</h1>
        <p>The route may have changed while the site was being refined.</p>
        <Link to="/" className="btn btn-primary">Back to home</Link>
      </div>
    </section>
  );
}
