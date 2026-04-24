import Services from '../components/Services';
import Process from '../components/Process';
import ContactPreview from '../components/ContactPreview';
import PageHero from '../components/PageHero';
import { pageIntros, trustPoints } from '../data/content';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={pageIntros.services.eyebrow}
        title={pageIntros.services.title}
        description={pageIntros.services.description}
        aside={
          <div>
            <strong>What clients usually need</strong>
            <ul className="page-hero-list">
              {trustPoints.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        }
      />
      <Services />
      <Process />
      <ContactPreview />
    </>
  );
}
