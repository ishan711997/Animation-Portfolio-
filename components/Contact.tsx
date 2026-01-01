
import React, { useState } from 'react';
import { Mail, Instagram, Linkedin, Send, Github } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submit
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-4 italic tracking-tighter">LET'S START MOVING.</h2>
          <p className="text-gray-500 uppercase tracking-[0.4em] text-xs">Collaboration is just a click away</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Contact Details</h3>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#111] flex items-center justify-center border border-white/5 rounded-full group-hover:border-purple-500 transition-colors">
                  <Mail className="text-purple-500" size={20} />
                </div>
                <span className="text-lg text-gray-300 group-hover:text-white transition-colors">{SOCIAL_LINKS.email}</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Social Networks</h3>
              <div className="flex space-x-4">
                {[
                  // { icon: Instagram, url: SOCIAL_LINKS.instagram },
                  { icon: Linkedin, url: SOCIAL_LINKS.linkedin },
                  // { icon: Github, url: "#" }, // Adding a generic one
                ].map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-[#111] flex items-center justify-center border border-white/5 rounded-lg text-gray-400 hover:text-purple-500 hover:border-purple-500 transition-all transform hover:-translate-y-1"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 bg-purple-600/5 border border-purple-500/20 rounded-2xl">
              <p className="text-gray-400 italic">"Good motion design isn't just about moving pixels; it's about moving people."</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-[#0a0a0a] p-8 md:p-12 border border-white/5 rounded-2xl relative overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 tracking-widest mb-2">Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full bg-black border border-white/10 px-4 py-4 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 tracking-widest mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com"
                  className="w-full bg-black border border-white/10 px-4 py-4 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 tracking-widest mb-2">Message</label>
                <textarea 
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-black border border-white/10 px-4 py-4 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-lg uppercase tracking-widest transition-all flex items-center justify-center space-x-2 shadow-lg shadow-purple-600/20"
              >
                <span>{submitted ? 'Message Sent!' : 'Send Inquiry'}</span>
                {!submitted && <Send size={18} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
