import React from 'react';
import { DESIGNER_BIO, DESIGNER_ROLE, SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-[4/5] relative overflow-hidden rounded-3xl border border-white/10 glass">
            <img 
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200" 
              alt="Workspace aesthetic" 
              className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="mb-6 inline-block text-purple-500 font-black tracking-[0.4em] uppercase text-xs">Philosophy</div>
          <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-8 tracking-tighter uppercase">The Art of <br />Kinetic Design.</h2>
          <div className="space-y-6 text-gray-400 leading-relaxed text-lg mb-16 font-light">
            <p>{DESIGNER_BIO}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-black uppercase tracking-widest text-[10px] group-hover:text-purple-400 transition-colors">{skill.name}</span>
                  <span className="text-purple-500 text-xs font-mono font-bold">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 overflow-hidden rounded-full">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-600 to-blue-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;