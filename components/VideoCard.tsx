
import React, { useState } from 'react';
import { Play, Eye, X } from 'lucide-react';
import { PortfolioItem } from '../types';

interface VideoCardProps {
  item: PortfolioItem;
}

const VideoCard: React.FC<VideoCardProps> = ({ item }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Helper to extract ID regardless of whether the source is already an embed or a standard link
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(item.youtubeUrl);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  // Standard high-compatibility embed URL construction
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&modestbranding=1`;

  return (
    <div className="group relative bg-[#111] border border-white/5 overflow-hidden transition-all duration-500 hover:border-purple-500/50 rounded-lg">
      {/* Thumbnail / Hover State */}
      <div className="aspect-video relative overflow-hidden bg-black">
        <img 
          src={thumbnailUrl} 
          alt={item.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
        
        {/* Play Button */}
        <button 
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
            <Play className="text-white fill-current ml-1" size={24} />
          </div>
        </button>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="text-[9px] font-bold tracking-widest uppercase bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-purple-400 border border-purple-500/20">
            {item.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-heading font-bold text-white group-hover:text-purple-400 transition-colors">
            {item.title}
          </h3>
          <div className="flex items-center space-x-1 text-gray-500 text-xs shrink-0 ml-2">
            <Eye size={14} />
            <span>{item.viewCount}</span>
          </div>
        </div>
        <p className="text-sm text-gray-400 line-clamp-2 font-light">
          {item.description}
        </p>
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 md:p-10">
          <button 
            onClick={() => setIsPlaying(false)}
            className="absolute top-6 right-6 text-white hover:text-purple-500 transition-colors z-10"
          >
            <X size={40} />
          </button>
          <div className="w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10">
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
              <div className="w-full h-full flex items-center justify-center text-gray-500 uppercase tracking-widest">
                Video Unavailable
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCard;
