import React from 'react';
import { Link } from 'react-router-dom';
import { DESIGNER_ROLE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden scanlines">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-purple-600/5 rounded-full blur-[160px] pointer-events-none opacity-40 animate-pulse" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-10 inline-flex items-center space-x-3 py-1.5 px-5 border border-purple-500/20 bg-purple-500/5 rounded-full backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-ping" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-300">Available for Freelance Work</span>
        </div>
        
        <h1 className="text-[4.2rem] md:text-[10.2rem] font-heading font-black text-white mb-6 leading-[0.95] tracking-tighter uppercase italic select-none overflow-visible">
          Design<br />
          <span className="text-gradient pr-8 md:pr-12">In Motion</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-400 mb-14 max-w-2xl mx-auto font-light leading-relaxed tracking-wide opacity-70 italic">
          {DESIGNER_ROLE} redefining visual communication through cinematic precision.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <Link 
            to="/work" 
            className="group relative w-full sm:w-auto px-16 py-6 bg-white text-black font-black uppercase tracking-[0.3em] text-[11px] transition-all duration-500 hover:bg-purple-600 hover:text-white overflow-hidden"
          >
            <span className="relative z-10">Showreel 2025</span>
            <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
          <Link 
            to="/contact" 
            className="w-full sm:w-auto px-16 py-6 border border-white/10 text-white font-black uppercase tracking-[0.3em] text-[11px] transition-all duration-300 hover:border-purple-500 hover:text-purple-400 glass"
          >
            Collaborate
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;