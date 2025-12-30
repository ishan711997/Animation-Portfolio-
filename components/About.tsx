
import React from 'react';
import { DESIGNER_BIO, DESIGNER_ROLE, SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Visual Element */}
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-square relative overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
            <img 
              src="https://picsum.photos/seed/motion-designer/800/800" 
              alt="Designer working" 
              className="w-full h-full object-cover grayscale opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-transparent" />
          </div>
          {/* Decorative shapes */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-8 border-purple-600/20 rounded-full" />
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-600/10 backdrop-blur-sm border border-purple-500/20 rotate-12" />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6">BEHIND THE MOTION</h2>
          <p className="text-purple-500 font-bold tracking-[0.3em] uppercase mb-8 text-sm">{DESIGNER_ROLE}</p>
          
          <div className="space-y-6 text-gray-400 leading-relaxed text-lg mb-12">
            <p>{DESIGNER_BIO}</p>
            <p>I believe that every frame counts. My design process begins with a deep dive into the narrative, ensuring that motion isn't just decoration, but a functional extension of the brand's voice.</p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {SKILLS.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-bold uppercase tracking-tighter text-sm">{skill.name}</span>
                  <span className="text-purple-500 text-xs font-mono">{skill.level}%</span>
                </div>
                <div className="h-1 w-full bg-white/10 overflow-hidden">
                  <div 
                    className="h-full bg-purple-600 transition-all duration-1000 ease-out"
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
