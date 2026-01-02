import React, { useState } from 'react';
import { Play, Eye, X, ArrowUpRight } from 'lucide-react';
import { PortfolioItem } from '../types';

interface VideoCardProps {
  item: PortfolioItem;
}

const VideoCard: React.FC<VideoCardProps> = ({ item }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(item.youtubeUrl);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&modestbranding=1&vq=hd1080&color=white`;

  return (
    <div className="group relative bg-[#080808] border border-white/5 overflow-hidden transition-all duration-700 hover:border-purple-500/40 rounded-2xl flex flex-col h-full">
      <div 
        className="aspect-video relative overflow-hidden bg-black cursor-pointer" 
        onClick={() => setIsPlaying(true)}
      >
        <img 
          src={thumbnailUrl} 
          alt={item.title} 
          className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out group-hover:opacity-100"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-20 h-20 glass rounded-full flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-all duration-700 border border-white/20">
            <Play className="text-white fill-current ml-1" size={32} />
          </div>
        </div>

        <div className="absolute top-6 left-6 flex space-x-2">
          <span className="text-[10px] font-black tracking-[0.2em] uppercase glass px-4 py-1.5 rounded-full text-white border border-white/10">
            {item.category}
          </span>
        </div>
        
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight className="text-purple-400" size={24} />
        </div>
      </div>

      <div className="p-10 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-heading font-black text-white group-hover:text-purple-400 transition-colors tracking-tight leading-tight uppercase italic">
            {item.title}
          </h3>
        </div>
        <p className="text-sm text-gray-500 line-clamp-3 font-light leading-relaxed mb-6 italic">
          {item.description}
        </p>
        <div className="mt-auto flex items-center space-x-3 text-[10px] font-black tracking-[0.3em] uppercase text-gray-600">
          <Eye size={12} className="text-purple-600" />
          <span>Streamed {item.viewCount} Times</span>
        </div>
      </div>

      {isPlaying && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 p-6 md:p-20 animate-in fade-in duration-500">
          <button 
            onClick={(e) => { e.stopPropagation(); setIsPlaying(false); }}
            className="absolute top-10 right-10 text-white/40 hover:text-white transition-all p-3 glass rounded-full hover:rotate-90"
          >
            <X size={32} />
          </button>
          <div className="w-full max-w-7xl aspect-video bg-black rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(147,51,234,0.2)] border border-white/10">
            {videoId ? (
              <iframe
                width="100%"
                height="100%"
                src={embedUrl}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500 uppercase tracking-widest font-black">
                Video Feed Unresponsive
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCard;