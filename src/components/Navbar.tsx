import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { DESIGNER_NAME } from '../constants';

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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3 border-b border-white/5 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-heading font-extrabold tracking-tighter text-white hover:opacity-80 transition-opacity">
          {DESIGNER_NAME}<span className="text-purple-500">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:text-purple-400 ${location.pathname === link.path ? 'text-purple-500' : 'text-gray-400'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 glass z-40 flex flex-col items-center justify-center space-y-10 transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} md:hidden`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={`text-4xl font-heading font-extrabold uppercase transition-colors ${location.pathname === link.path ? 'text-purple-500' : 'text-white hover:text-purple-400'}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;