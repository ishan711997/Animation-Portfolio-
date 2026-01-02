import React from 'react';
import { DESIGNER_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-3xl font-heading font-extrabold">
          <span className="text-gradient">ISHAN SRIVASTAVA</span><span className="text-purple-500">.</span>
        </div>
        <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">
          &copy; 2025 Motion Aesthetic Engineering
        </p>
      </div>
    </footer>
  );
};

export default Footer;