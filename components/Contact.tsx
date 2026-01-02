import React, { useState } from 'react';
import { Linkedin, Send, ArrowUpRight } from 'lucide-react';
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
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-16">
            <div>
              <h3 className="text-xs font-black uppercase text-gray-600 tracking-[0.3em] mb-8">Contact</h3>
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-3xl md:text-5xl font-heading font-bold text-white hover:text-purple-500 transition-colors break-all">
                {SOCIAL_LINKS.email}
              </a>
            </div>
          </div>

          <div className="glass p-8 md:p-14 border border-white/5 rounded-[2.5rem]">
            <form onSubmit={handleSubmit} className="space-y-8">
              <input 
                placeholder="Name"
                className="w-full bg-black/40 border border-white/10 px-6 py-5 rounded-2xl text-white focus:outline-none focus:border-purple-500"
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
              />
              <input 
                placeholder="Email"
                className="w-full bg-black/40 border border-white/10 px-6 py-5 rounded-2xl text-white focus:outline-none focus:border-purple-500"
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
              />
              <textarea 
                rows={5}
                placeholder="Project Brief"
                className="w-full bg-black/40 border border-white/10 px-6 py-5 rounded-2xl text-white focus:outline-none focus:border-purple-500"
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
              />
              <button className="w-full font-black py-6 bg-white text-black rounded-2xl uppercase tracking-[0.3em] hover:bg-purple-600 hover:text-white transition-all">
                {submitted ? 'Sent' : 'Send Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;