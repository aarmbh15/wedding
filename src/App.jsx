import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx'; // ← Import the new component
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const WeddingPage = lazy(() => import('./pages/WeddingPage.jsx'));
const Portfolio = lazy(() => import('./pages/Portfolio.jsx'));
const Films = lazy(() => import('./pages/Films.jsx'));


// ─── WhatsApp FAB (hidden on specific routes) ─────────────────────────
function WhatsAppFab() {
  const { pathname } = useLocation();
  const hideOn = ["/login", "/checkout", "/careers", "/dashboard"];
  if (hideOn.includes(pathname)) return null;
  return (
    <FloatingWhatsApp
      phone="9579328262"
      message="Hello! I'm interested in your services. Can we discuss?"
      label="WhatsApp us"
      position="br"
      showLabel={false}
      showOnScroll={false}
      size={56}
    />
  );
}


function App() {
  return (
    <HelmetProvider>
      <Router>
        {/* ScrollToTop sits here to monitor navigation */}
        <ScrollToTop /> 
        
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white font-serif">
          <Navbar />
          <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/wedding/:slug" element={<WeddingPage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/films" element={<Films />} />
            </Routes>
          </Suspense>
          <WhatsAppFab />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;