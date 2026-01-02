import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <div className="flex flex-col w-full relative">
    <Hero />
    <PortfolioGrid />
    <About />
    <Contact />
  </div>
);

const WorkPage = () => (
  <div className="pt-28">
    <PortfolioGrid />
  </div>
);

const AboutPage = () => (
  <div className="pt-28">
    <About />
  </div>
);

const ContactPage = () => (
  <div className="pt-28">
    <Contact />
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#050505] text-white flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;