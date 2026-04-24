import ContactSection from '../components/ContactSection';
import PageHero from '../components/PageHero';
import { pageIntros } from '../data/content';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={pageIntros.contact.eyebrow}
        title={pageIntros.contact.title}
        description={pageIntros.contact.description}
        aside={
          <div>
            <strong>Useful before you submit</strong>
            <ul className="page-hero-list">
              <li>What you want to build</li>
              <li>Your business context</li>
              <li>Your timeline and budget</li>
              <li>The result you want to achieve</li>
            </ul>
          </div>
        }
      />
      <ContactSection />
    </>
  );
}
