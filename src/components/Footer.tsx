import React from 'react';
import { DESIGNER_NAME } from '../constants';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-3xl font-heading font-extrabold text-white mb-2">
            {DESIGNER_NAME}<span className="text-purple-500">.</span>
          </div>
          <p className="text-gray-600 text-[10px] font-bold tracking-[0.3em] uppercase">Visual Aesthetic Engineering</p>
        </div>
        
        <div className="flex flex-col items-center space-y-4">
          <p className="text-gray-500 text-[10px] font-medium tracking-[0.2em] uppercase">
            &copy; {year} Crafted with Precision in India
          </p>
        </div>
        
        <div className="flex space-x-10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
          <a href="#" className="hover:text-purple-500 transition-colors">Journal</a>
          <a href="#" className="hover:text-purple-500 transition-colors">Vault</a>
          <a href="#" className="hover:text-purple-500 transition-colors">Studio</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;