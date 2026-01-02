import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { Category } from '../types';
import VideoCard from './VideoCard';

const PortfolioGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('All');

  const categories: Category[] = [
    'All', 
    '3D Product Showcase', 
    'Technical Explainer Motion Graphics',
    'Math Explainer',
    'Explainer', 
    'UI Animation'
  ];

  const filteredItems = activeFilter === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-md">
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6 tracking-tighter uppercase">Selected <br />Director's Cut</h2>
            <p className="text-gray-500 font-medium text-sm leading-relaxed">A curation of projects defining technical precision and visual narrative.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 max-w-2xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-full border ${
                  activeFilter === cat 
                    ? 'bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-600/20' 
                    : 'bg-transparent border-white/10 text-gray-500 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredItems.map((item) => (
            <VideoCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;