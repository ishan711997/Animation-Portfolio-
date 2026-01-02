import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Primary Navigation Bar */}
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled || isOpen ? 'glass py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-[102]">
          <Link 
            to="/" 
            className="text-2xl font-heading font-extrabold tracking-tighter hover:opacity-80 transition-opacity"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-gradient">ISHAN SRIVASTAVA</span><span className="text-purple-500">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] font-black tracking-[0.3em] uppercase transition-all duration-300 hover:text-purple-400 ${
                  location.pathname === link.path ? 'text-purple-500' : 'text-gray-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-all relative z-[103]" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay Menu */}
      <div 
        className={`fixed inset-0 z-[90] bg-[#050505]/98 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full pointer-events-none'
        }`}
      >
        <div className="h-full w-full flex flex-col items-center justify-start p-8 pt-32 space-y-10 overflow-y-auto overflow-x-hidden">
          {/* Centered Navigation Links */}
          <div className="flex flex-col items-center space-y-8 w-full">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-5xl font-heading font-black uppercase transition-all duration-300 tracking-tighter italic ${
                  location.pathname === link.path ? 'text-purple-500 scale-105' : 'text-white hover:text-purple-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile Footer Info */}
          <div className="pt-12 border-t border-white/10 w-full max-w-[280px] text-center space-y-6 pb-12">
            <div className="space-y-3">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">Inquiry</p>
              <div className="space-y-4">
                <a 
                  href="mailto:ishan711997@gmail.com" 
                  className="block text-white font-bold text-sm tracking-widest hover:text-purple-400 transition-colors break-words"
                >
                  ISHAN711997@GMAIL.COM
                </a>
                <a 
                  href="tel:+919140311121" 
                  className="block text-white font-bold text-sm tracking-widest hover:text-purple-400 transition-colors"
                >
                  +91 9140311121
                </a>
              </div>
            </div>
            
            <div className="flex justify-center items-center space-x-3 pt-4">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-purple-300">Available Now</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;