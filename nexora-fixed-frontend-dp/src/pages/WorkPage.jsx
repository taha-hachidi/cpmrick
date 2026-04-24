import Portfolio from '../components/Portfolio';
import WhyUs from '../components/WhyUs';
import ContactPreview from '../components/ContactPreview';
import PageHero from '../components/PageHero';
import { pageIntros, projects } from '../data/content';

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow={pageIntros.work.eyebrow}
        title={pageIntros.work.title}
        description={pageIntros.work.description}
        aside={
          <div>
            <strong>What this page communicates</strong>
            <ul className="page-hero-list">
              {projects.slice(0, 3).map((project) => <li key={project.title}>{project.title} — {project.category}</li>)}
            </ul>
          </div>
        }
      />
      <Portfolio />
      <WhyUs />
      <ContactPreview />
    </>
  );
}
