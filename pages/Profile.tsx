import React, { useState } from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { MapPin, Mail, Link as LinkIcon, Award, ShoppingBag, Star, MessageSquare } from 'lucide-react';
import { Artist, Product, Review } from '../types';

// Mock Data
const MOCK_PRODUCTS: Product[] = [
  { id: 'p1', title: '赛博朋克头像定制 Cyber Avatar', price: 500, image: 'https://picsum.photos/300/300?random=1', sales: 120, rating: 5.0 },
  { id: 'p2', title: 'Twitch/B站 直播间UI Stream UI', price: 1200, image: 'https://picsum.photos/300/300?random=2', sales: 45, rating: 4.8 },
];

const MOCK_REVIEWS: Review[] = [
  { id: 'r1', user: 'CyberPunk_Fan', avatar: 'https://picsum.photos/50/50?random=10', rating: 5, comment: '交付速度超级快！风格完全符合我的要求，爱了爱了！Fast delivery!', date: '2d ago' },
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
  reviews: MOCK_REVIEWS
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
  const [activeTab, setActiveTab] = useState<'works' | 'shop' | 'reviews'>('works');

  return (
    <div className="min-h-screen bg-[#0a0a0c] pb-20">
      {/* Cover Image */}
      <div className="h-72 w-full relative overflow-hidden">
        <img src={PROFILE_DATA.coverImage} alt="Cover" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] to-transparent"></div>
        {PROFILE_DATA.isVip && (
           <div className="absolute top-24 right-8 bg-gradient-to-r from-holo-purple to-holo-pink px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-[0_0_20px_rgba(255,0,80,0.5)] flex items-center gap-2">
             <Star size={12} fill="currentColor" /> Pro Artist VIP
           </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Sidebar */}
          <div className="col-span-1 space-y-6">
             {/* Profile Card */}
             <div className="glass-metal p-8 rounded-3xl relative overflow-hidden backdrop-blur-2xl">
                {/* Avatar */}
                <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-holo-cyan to-holo-purple mb-6 mx-auto lg:mx-0">
                  <img src={PROFILE_DATA.avatar} alt={PROFILE_DATA.name} className="w-full h-full rounded-full object-cover border-4 border-[#0a0a0c]" />
                </div>
                
                <h1 className="text-3xl font-bold text-white mb-1 text-center lg:text-left">{PROFILE_DATA.name}</h1>
                <p className="text-holo-cyan text-sm mb-6 text-center lg:text-left font-mono">{PROFILE_DATA.title}</p>
                
                <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
                  {PROFILE_DATA.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 text-sm text-gray-400 mb-8">
                  <div className="flex items-center gap-3"><MapPin size={16} /> Cyber City</div>
                  <div className="flex items-center gap-3"><LinkIcon size={16} /> kira.art</div>
                </div>

                <div className="flex gap-3">
                   <button className="flex-1 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors">
                     雇佣 Hire
                   </button>
                   <button className="p-3 glass-metal rounded-xl border border-white/20 hover:text-white text-gray-400">
                     <Mail size={20} />
                   </button>
                </div>
             </div>

             {/* Skills Chart */}
             <div className="glass-metal p-6 rounded-3xl">
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <Award size={16} className="text-holo-purple"/> 技能雷达 Skill Radar
                </h3>
                <div className="h-64 -ml-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={CHART_DATA}>
                      <PolarGrid stroke="#333" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#888', fontSize: 10 }} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                      <Radar name={PROFILE_DATA.name} dataKey="A" stroke="#00f2ea" strokeWidth={2} fill="#00f2ea" fillOpacity={0.3} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
             </div>
          </div>

          {/* Right Content */}
          <div className="col-span-1 lg:col-span-2">
             {/* Stats Row */}
             <div className="flex gap-4 mb-8 overflow-x-auto pb-2 no-scrollbar">
                <div className="glass-metal px-6 py-4 rounded-2xl border border-white/5 min-w-[140px]">
                   <span className="text-gray-400 text-xs uppercase block mb-1">信用分 Credit</span>
                   <span className="text-2xl font-bold text-holo-cyan">{PROFILE_DATA.creditScore}</span>
                </div>
                <div className="glass-metal px-6 py-4 rounded-2xl border border-white/5 min-w-[140px]">
                   <span className="text-gray-400 text-xs uppercase block mb-1">评分 Rating</span>
                   <span className="text-2xl font-bold text-white flex items-center gap-1">4.9 <Star size={16} fill="white" className="text-white"/></span>
                </div>
             </div>

             {/* Tabs */}
             <div className="flex gap-8 mb-8 border-b border-white/10 px-2">
               {[
                 { id: 'works', label: '作品集 Portfolio' },
                 { id: 'shop', label: '橱窗 Shop' },
                 { id: 'reviews', label: '评价 Reviews' }
               ].map(tab => (
                 <button 
                   key={tab.id}
                   onClick={() => setActiveTab(tab.id as any)}
                   className={`pb-4 font-bold text-sm transition-all relative ${
                     activeTab === tab.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                   }`}
                 >
                   {tab.label}
                   {activeTab === tab.id && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-holo-purple shadow-[0_0_10px_#7000ff]"></div>}
                 </button>
               ))}
             </div>

             {/* Content */}
             <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
               {activeTab === 'works' && (
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer">
                        <img src={`https://picsum.photos/600/400?random=${i + 200}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                           <span className="text-white border border-white px-4 py-2 rounded-full text-sm">View Project</span>
                        </div>
                     </div>
                   ))}
                 </div>
               )}

               {activeTab === 'shop' && (
                 <div className="space-y-4">
                   {PROFILE_DATA.products.map(product => (
                     <div key={product.id} className="flex gap-4 p-4 glass-metal rounded-2xl hover:border-white/20 transition-colors">
                        <img src={product.image} className="w-24 h-24 rounded-lg object-cover" />
                        <div className="flex-1">
                           <h3 className="text-lg font-bold text-white">{product.title}</h3>
                           <div className="flex justify-between items-end mt-4">
                             <span className="text-holo-cyan font-bold text-xl">¥{product.price}</span>
                             <button className="px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm transition-colors">购买 Buy</button>
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