import BookingSection from '../components/BookingSection';
import PageHero from '../components/PageHero';
import { pageIntros } from '../data/content';

export default function ConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow={pageIntros.consultation.eyebrow}
        title={pageIntros.consultation.title}
        description={pageIntros.consultation.description}
        aside={
          <div>
            <strong>What the call covers</strong>
            <ul className="page-hero-list">
              <li>Need analysis and project framing</li>
              <li>Product direction and recommendations</li>
              <li>Technical scope and priorities</li>
              <li>Realistic estimate and next steps</li>
            </ul>
          </div>
        }
      />
      <BookingSection />
    </>
  );
}
