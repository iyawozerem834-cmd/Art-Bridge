import React, { useState } from 'react';
import { Search, Filter, Star, Heart } from 'lucide-react';
import { Artwork } from '../types';

const MOCK_WORKS: Artwork[] = Array.from({ length: 12 }).map((_, i) => ({
  id: `work-${i}`,
  title: ['Neon City', 'Abstract Mind', 'Future UI', 'Character Design', 'Landscape', 'Portrait'][i % 6] + ` #${i+1}`,
  artistId: `artist-${i}`,
  artistName: ['Alex Chen', 'Sarah Wu', 'DaVinci AI', 'Pixel Master', 'Ink Flow'][i % 5],
  imageUrl: `https://picsum.photos/600/400?random=${i + 100}`,
  category: ['插画 Illustration', 'UI设计 UI/UX', '3D建模 3D Art', '摄影 Photo'][i % 4],
  likes: Math.floor(Math.random() * 1000)
}));

const Marketplace: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('全部 All');
  const filters = ['全部 All', '插画 Illustration', 'UI设计 UI/UX', '3D建模 3D Art', '摄影 Photo'];

  // Simple filter logic for demo
  const filteredWorks = activeFilter === '全部 All' 
    ? MOCK_WORKS 
    : MOCK_WORKS; // In real app, match category string

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">发现创意 <span className="text-lg font-normal text-gray-400 ml-2">Discover</span></h1>
          <p className="text-gray-400">浏览经过“艺能AI”认证的优质作品 Browse verified creative works</p>
        </div>
        
        <div className="flex items-center gap-4">
           <button className="flex items-center gap-2 px-4 py-2 glass-metal rounded-lg text-sm text-gray-300 hover:text-white transition-colors">
             <Filter size={16} /> 筛选 Filter
           </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-6 mb-2 no-scrollbar">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${
              activeFilter === f 
                ? 'bg-white/10 text-white border-holo-cyan/50 shadow-[0_0_15px_rgba(0,242,234,0.2)]' 
                : 'bg-transparent text-gray-500 border-transparent hover:text-gray-300'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredWorks.map((work) => (
          <div key={work.id} className="group glass-metal rounded-2xl overflow-hidden border border-white/5 hover:border-holo-cyan/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:-translate-y-1">
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={work.imageUrl} 
                alt={work.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] to-transparent opacity-60"></div>
              
              <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 border border-white/10">
                <Star size={10} className="text-yellow-400 fill-yellow-400" />
                4.9
              </div>
            </div>
            
            <div className="p-5">
              <div className="flex justify-between items-start mb-3">
                <div className="overflow-hidden">
                   <h3 className="text-white font-bold truncate group-hover:text-holo-cyan transition-colors">{work.title}</h3>
                   <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">{work.category}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-holo-purple to-holo-cyan"></div>
                  <span className="text-xs text-gray-300 hover:text-white cursor-pointer transition-colors">{work.artistName}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                  <Heart size={12} className="group-hover:text-holo-pink transition-colors" />
                  {work.likes}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;