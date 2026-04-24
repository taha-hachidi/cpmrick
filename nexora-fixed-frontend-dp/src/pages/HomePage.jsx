import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import WhyUs from '../components/WhyUs';
import ContactPreview from '../components/ContactPreview';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <WhyUs />
      <ContactPreview />
    </>
  );
}
