import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SiteLayout({ children }) {
  return (
    <>
      <div className="page-shell">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-grid"></div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
}
