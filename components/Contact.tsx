import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
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

  const contactLinkClass = "text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white hover:text-purple-500 transition-colors break-words leading-tight";

  return (
    <section className="py-20 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-heading font-extrabold text-white mb-6 italic tracking-tighter uppercase leading-[0.85]">Let's Shape <br />Reality.</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-16">
            <div>
              <h3 className="text-xs font-black uppercase text-gray-600 tracking-[0.3em] mb-12">Contact Details</h3>
              
              <div className="space-y-12">
                {/* Email Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 group">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-purple-500/10 border border-white/10 rounded-full text-purple-500 group-hover:border-purple-500 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">Email</span>
                    <a 
                      href={`mailto:${SOCIAL_LINKS.email}`} 
                      className={contactLinkClass}
                    >
                      {SOCIAL_LINKS.email}
                    </a>
                  </div>
                </div>

                {/* Phone Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 group">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-purple-500/10 border border-white/10 rounded-full text-purple-500 group-hover:border-purple-500 transition-colors">
                    <Phone size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">Mobile</span>
                    <a 
                      href="tel:+919140311121" 
                      className={contactLinkClass}
                    >
                      +91 9140311121
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-14 border border-white/5 rounded-[2.5rem]">
            <form onSubmit={handleSubmit} className="space-y-8">
              <input 
                placeholder="Name"
                className="w-full bg-black/40 border border-white/10 px-6 py-5 rounded-2xl text-white focus:outline-none focus:border-purple-500 transition-colors"
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
              />
              <input 
                placeholder="Email"
                type="email"
                className="w-full bg-black/40 border border-white/10 px-6 py-5 rounded-2xl text-white focus:outline-none focus:border-purple-500 transition-colors"
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
              />
              <textarea 
                rows={5}
                placeholder="Project Brief"
                className="w-full bg-black/40 border border-white/10 px-6 py-5 rounded-2xl text-white focus:outline-none focus:border-purple-500 transition-colors"
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
              />
              <button className="w-full font-black py-6 bg-white text-black rounded-2xl uppercase tracking-[0.3em] hover:bg-purple-600 hover:text-white transition-all transform active:scale-[0.98]">
                {submitted ? 'Inquiry Sent' : 'Send Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;