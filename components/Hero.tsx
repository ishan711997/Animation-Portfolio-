
import React from 'react';
import { Link } from 'react-router-dom';
import { DESIGNER_NAME, DESIGNER_ROLE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-6 inline-block py-1 px-4 border border-purple-500/30 bg-purple-500/5 rounded-full backdrop-blur-sm">
          <span className="text-xs font-bold tracking-[0.2em] text-purple-400 uppercase">Available for freelance</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-heading font-extrabold text-white mb-6 leading-none tracking-tight">
          CRAFTING <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">MOTION</span> THAT SPEAKS.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          {DESIGNER_ROLE} focusing on storytelling, commercial design, and digital experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link 
            to="/work" 
            className="w-full sm:w-auto px-10 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-sm hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            View Work
          </Link>
          <Link 
            to="/contact" 
            className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest rounded-sm hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-px h-12 bg-white mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;
