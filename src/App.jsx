import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';  // ← Changed here
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

function App() {
  return (
    <HelmetProvider>  {/* ← This now works */}
      <Router>
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white font-serif">
          <Navbar />
          <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;