import React, { useState } from 'react';
import { Mail, Linkedin, Send, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-heading font-extrabold text-white mb-6 italic tracking-tighter uppercase leading-[0.85]">Let's Shape <br />Reality.</h2>
            <p className="text-gray-500 uppercase tracking-[0.5em] text-[10px] font-bold">Inquiries open for seasonal slots</p>
          </div>
          <div className="hidden lg:block text-right">
             <div className="inline-flex items-center space-x-2 text-purple-500 font-bold uppercase tracking-widest text-xs mb-2">
               <span>Currently in</span>
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
             </div>
             <p className="text-white/40 text-sm italic uppercase tracking-tighter">Aesthetic Engineering Studio</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col justify-between h-full py-2">
            <div className="space-y-16">
              <div>
                <h3 className="text-xs font-black uppercase text-gray-600 tracking-[0.3em] mb-8">Main Office</h3>
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-3xl md:text-5xl font-heading font-bold text-white hover:text-purple-500 transition-colors break-all">
                  {SOCIAL_LINKS.email}
                </a>
              </div>

              <div className="flex flex-wrap gap-6">
                <a 
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-3 glass px-8 py-5 rounded-2xl border border-white/5 text-white hover:border-purple-500/50 transition-all hover:scale-105"
                >
                  <Linkedin size={24} className="text-purple-500" />
                  <span className="font-bold uppercase tracking-widest text-[10px]">LinkedIn</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              </div>
            </div>

            <div className="hidden lg:block mt-20">
              <p className="text-gray-600 text-sm max-w-sm leading-relaxed font-light">
                By contacting Ishan, you are initiating a dialogue regarding professional creative services, visual direction, or project consulting.
              </p>
            </div>
          </div>

          <div className="glass p-8 md:p-14 border border-white/5 rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-[60px]" />
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-black uppercase text-gray-500 tracking-[0.2em] mb-4">Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="E.g. Elon Musk"
                    className="w-full bg-black/40 border border-white/10 px-6 py-5 rounded-2xl text-white focus:outline-none focus:border-purple-500 transition-all placeholder:text-gray-700"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase text-gray-500 tracking-[0.2em] mb-4">Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="email@studio.com"
                    className="w-full bg-black/40 border border-white/10 px-6 py-5 rounded-2xl text-white focus:outline-none focus:border-purple-500 transition-all placeholder:text-gray-700"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase text-gray-500 tracking-[0.2em] mb-4">Brief Information</label>
                <textarea 
                  rows={5}
                  required
                  placeholder="Describe your creative vision..."
                  className="w-full bg-black/40 border border-white/10 px-6 py-5 rounded-2xl text-white focus:outline-none focus:border-purple-500 transition-all resize-none placeholder:text-gray-700"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                />
              </div>
              <button 
                type="submit"
                disabled={submitted}
                className={`w-full font-black py-6 rounded-2xl uppercase tracking-[0.3em] transition-all flex items-center justify-center space-x-4 shadow-2xl text-[11px] ${
                  submitted 
                  ? 'bg-green-600 text-white cursor-default' 
                  : 'bg-white text-black hover:bg-purple-600 hover:text-white hover:scale-[1.02] active:scale-95'
                }`}
              >
                <span>{submitted ? 'Transmission Successful' : 'Send Project Inquiry'}</span>
                {!submitted && <Send size={14} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;