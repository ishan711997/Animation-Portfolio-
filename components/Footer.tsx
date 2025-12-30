
import React from 'react';
import { DESIGNER_NAME } from '../constants';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-xl font-heading font-extrabold text-white">
          {DESIGNER_NAME}<span className="text-purple-500">.</span>
        </div>
        
        <p className="text-gray-500 text-sm tracking-widest uppercase">
          &copy; {year} All Rights Reserved
        </p>
        
        <div className="flex space-x-6 text-xs font-bold uppercase tracking-widest text-gray-400">
          <a href="#" className="hover:text-purple-500 transition-colors">Privacy</a>
          <a href="#" className="hover:text-purple-500 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
