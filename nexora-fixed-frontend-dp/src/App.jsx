import SiteLayout from './layouts/SiteLayout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
import ConsultationPage from './pages/ConsultationPage';
import NotFoundPage from './pages/NotFoundPage';
import { RouterProvider, useRouter } from './lib/router';

function RoutedApp() {
  const { path } = useRouter();

  let Page = NotFoundPage;
  if (path === '/') Page = HomePage;
  if (path === '/services') Page = ServicesPage;
  if (path === '/work') Page = WorkPage;
  if (path === '/contact') Page = ContactPage;
  if (path === '/consultation') Page = ConsultationPage;

  return (
    <SiteLayout>
      <Page />
    </SiteLayout>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <RoutedApp />
    </RouterProvider>
  );
}
