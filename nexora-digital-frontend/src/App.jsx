import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import ContactSection from './components/ContactSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <div className="page-shell">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-grid"></div>
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Process />
          <Portfolio />
          <WhyUs />
          <ContactSection />
          <BookingSection />
        </main>
        <Footer />
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
}
