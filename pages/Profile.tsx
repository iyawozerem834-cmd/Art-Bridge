import React, { useState } from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { MapPin, Mail, Link as LinkIcon, Award, Star, CheckCircle } from 'lucide-react';
import { Artist, Product, Review } from '../types';

// Mock Data
const MOCK_PRODUCTS: Product[] = [
  { id: 'p1', title: '赛博朋克头像定制 Cyber Avatar', price: 500, image: 'https://picsum.photos/300/300?random=1', sales: 120, rating: 5.0 },
  { id: 'p2', title: 'Twitch/B站 直播间UI Stream UI', price: 1200, image: 'https://picsum.photos/300/300?random=2', sales: 45, rating: 4.8 },
];

const PROFILE_DATA: Artist = {
  id: 'a1',
  name: 'Kira.Arts',
  title: 'Visual Futurist | 3D Generalist',
  avatar: 'https://picsum.photos/200/200?random=88',
  coverImage: 'https://picsum.photos/1200/400?random=99',
  tags: ['Cyberpunk', 'Character', 'Unreal 5'],
  rating: 4.9,
  creditScore: 785,
  isVip: true,
  priceStart: 500,
  skills: { creativity: 92, technique: 88, speed: 95, communication: 80, style: 96, software: 90 },
  products: MOCK_PRODUCTS,
  reviews: []
};

const CHART_DATA = [
  { subject: '创意 Creativity', A: PROFILE_DATA.skills.creativity, fullMark: 100 },
  { subject: '技法 Tech', A: PROFILE_DATA.skills.technique, fullMark: 100 },
  { subject: '速度 Speed', A: PROFILE_DATA.skills.speed, fullMark: 100 },
  { subject: '沟通 Comm', A: PROFILE_DATA.skills.communication, fullMark: 100 },
  { subject: '风格 Style', A: PROFILE_DATA.skills.style, fullMark: 100 },
  { subject: '软件 Soft', A: PROFILE_DATA.skills.software, fullMark: 100 },
];

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'works' | 'shop'>('works');

  return (
    <div className="min-h-screen bg-[#0f1014] pb-20">
      {/* Cover Image with Glass Overlay */}
      <div className="h-80 w-full relative overflow-hidden group">
        <img src={PROFILE_DATA.coverImage} alt="Cover" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1014] via-[#0f1014]/40 to-transparent"></div>
        {PROFILE_DATA.isVip && (
           <div className="absolute top-24 right-8 glass-metal px-4 py-2 rounded-full text-xs font-bold text-white shadow-[0_0_20px_rgba(255,0,128,0.4)] flex items-center gap-2 border border-holo-pink/30">
             <Star size={12} fill="#ff0080" className="text-holo-pink" /> PRO CREATOR VIP
           </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Sidebar */}
          <div className="col-span-1 space-y-6">
             {/* Profile Card */}
             <div className="glass-metal p-8 rounded-[2rem] relative overflow-hidden backdrop-blur-3xl border border-white/10">
                {/* Liquid Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-holo-cyan/10 rounded-full blur-[40px]"></div>

                {/* Avatar */}
                <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-holo-cyan via-white to-holo-purple mb-6 mx-auto lg:mx-0 shadow-xl relative">
                  <img src={PROFILE_DATA.avatar} alt={PROFILE_DATA.name} className="w-full h-full rounded-full object-cover border-4 border-[#0f1014]" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-[#0f1014] flex items-center justify-center">
                    <CheckCircle size={10} className="text-black" />
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold text-white mb-1 text-center lg:text-left tracking-tight">{PROFILE_DATA.name}</h1>
                <p className="text-holo-cyan text-sm mb-6 text-center lg:text-left font-mono">{PROFILE_DATA.title}</p>
                
                <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
                  {PROFILE_DATA.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10 hover:border-holo-cyan/50 transition-colors cursor-default">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-4 text-sm text-gray-400 mb-8 font-mono">
                  <div className="flex items-center gap-3"><MapPin size={16} className="text-gray-500" /> Cyber City, Net</div>
                  <div className="flex items-center gap-3"><LinkIcon size={16} className="text-gray-500" /> artbridge.io/kira</div>
                </div>

                <div className="flex gap-3">
                   <button className="flex-1 py-3 bg-white text-black font-bold rounded-xl hover:bg-holo-silver transition-colors shadow-lg shadow-white/10">
                     雇佣 Hire
                   </button>
                   <button className="p-3 glass-metal rounded-xl border border-white/20 hover:bg-white/10 text-white transition-colors">
                     <Mail size={20} />
                   </button>
                </div>
             </div>

             {/* Skills Chart - Cyan Theme */}
             <div className="glass-metal p-6 rounded-[2rem]">
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <Award size={16} className="text-holo-cyan"/> 技能雷达 Skill Radar
                </h3>
                <div className="h-64 -ml-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={CHART_DATA}>
                      <PolarGrid stroke="rgba(255,255,255,0.1)" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10, fontFamily: 'monospace' }} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                      <Radar name={PROFILE_DATA.name} dataKey="A" stroke="#00f2ea" strokeWidth={3} fill="#00f2ea" fillOpacity={0.2} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
             </div>
          </div>

          {/* Right Content */}
          <div className="col-span-1 lg:col-span-2">
             {/* Stats Row */}
             <div className="flex gap-4 mb-8 overflow-x-auto pb-2 custom-scrollbar">
                <div className="glass-metal px-8 py-5 rounded-2xl border border-white/5 min-w-[160px] relative overflow-hidden">
                   <div className="absolute right-0 top-0 p-3 opacity-10"><Award size={40} /></div>
                   <span className="text-gray-400 text-xs uppercase block mb-1 font-bold tracking-wider">信用分 Credit</span>
                   <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-holo-cyan to-holo-purple">{PROFILE_DATA.creditScore}</span>
                </div>
                <div className="glass-metal px-8 py-5 rounded-2xl border border-white/5 min-w-[160px]">
                   <span className="text-gray-400 text-xs uppercase block mb-1 font-bold tracking-wider">评分 Rating</span>
                   <span className="text-3xl font-black text-white flex items-center gap-2">4.9 <Star size={20} fill="white" className="text-white"/></span>
                </div>
             </div>

             {/* Tabs */}
             <div className="flex gap-8 mb-8 border-b border-white/10 px-2">
               {[
                 { id: 'works', label: '作品集 Portfolio' },
                 { id: 'shop', label: '服务橱窗 Services' },
               ].map(tab => (
                 <button 
                   key={tab.id}
                   onClick={() => setActiveTab(tab.id as any)}
                   className={`pb-4 font-bold text-sm transition-all relative ${
                     activeTab === tab.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                   }`}
                 >
                   {tab.label}
                   {activeTab === tab.id && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-holo-cyan to-holo-purple shadow-[0_0_10px_#00f2ea]"></div>}
                 </button>
               ))}
             </div>

             {/* Content */}
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
               {activeTab === 'works' && (
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer border border-white/5">
                        <img src={`https://picsum.photos/600/400?random=${i + 200}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                           <span className="text-white border border-white/30 bg-white/10 px-6 py-2 rounded-full text-sm font-bold backdrop-blur-md">View Project</span>
                        </div>
                     </div>
                   ))}
                 </div>
               )}

               {activeTab === 'shop' && (
                 <div className="space-y-4">
                   {PROFILE_DATA.products.map(product => (
                     <div key={product.id} className="flex gap-6 p-4 glass-metal rounded-2xl hover:border-holo-cyan/30 transition-all group">
                        <img src={product.image} className="w-28 h-28 rounded-xl object-cover" />
                        <div className="flex-1 flex flex-col justify-between py-1">
                           <div>
                             <h3 className="text-lg font-bold text-white group-hover:text-holo-cyan transition-colors">{product.title}</h3>
                             <p className="text-gray-500 text-xs mt-1">Standardized Service SKU</p>
                           </div>
                           <div className="flex justify-between items-end">
                             <span className="text-white font-black text-xl">¥{product.price}</span>
                             <button className="px-6 py-2 bg-white text-black font-bold rounded-lg text-sm hover:scale-105 transition-transform">购买 Buy</button>
                           </div>
                        </div>
                     </div>
                   ))}
                 </div>
               )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;