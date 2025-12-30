
import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { Category } from '../types';
import VideoCard from './VideoCard';

const PortfolioGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('All');

  const categories: Category[] = ['All', 'Explainer', 'Social Media', 'Corporate', 'UI Animation'];

  const filteredItems = activeFilter === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">SELECTED WORK</h2>
            <div className="w-20 h-1.5 bg-purple-600"></div>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-full border ${
                  activeFilter === cat 
                    ? 'bg-purple-600 border-purple-600 text-white' 
                    : 'bg-transparent border-white/10 text-gray-400 hover:border-purple-500/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <VideoCard key={item.id} item={item} />
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="py-20 text-center text-gray-500 italic">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGrid;
