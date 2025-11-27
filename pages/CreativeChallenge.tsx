import React from 'react';
import { Swords, Zap } from 'lucide-react';

const CreativeChallenge: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-4 bg-[#0a0a0c] pb-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-holo-pink to-holo-purple text-white text-[10px] font-bold uppercase tracking-widest mb-4 rounded-full">
            LIVE EVENT • 直播中
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4">
            每日灵感对决 <span className="text-transparent bg-clip-text bg-gradient-to-r from-holo-cyan to-holo-silver">Art Jam</span>
          </h1>
          <p className="text-gray-400 text-lg font-mono">Theme: "Neon Apocalypse" // Time Remaining: 04:22:10</p>
        </div>

        {/* The Battle Arena */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 relative">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-16 h-16 bg-[#0a0a0c] border border-white/20 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <Swords size={24} className="text-white" />
          </div>

          {/* Left Side */}
          <div className="relative group cursor-pointer rounded-2xl overflow-hidden border border-white/10 hover:border-holo-cyan/50 transition-colors">
             <div className="aspect-[3/4]">
                <img src="https://picsum.photos/600/800?random=888" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                   <h3 className="text-3xl font-bold text-white uppercase mb-2">Team Cyber</h3>
                   <div className="text-holo-cyan font-mono text-sm">1,204 Votes (支持)</div>
                </div>
             </div>
          </div>

          {/* Right Side */}
          <div className="relative group cursor-pointer rounded-2xl overflow-hidden border border-white/10 hover:border-holo-pink/50 transition-colors">
             <div className="aspect-[3/4]">
                <img src="https://picsum.photos/600/800?random=999" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-right">
                   <h3 className="text-3xl font-bold text-white uppercase mb-2">Team Retro</h3>
                   <div className="text-holo-pink font-mono text-sm">1,198 Votes (支持)</div>
                </div>
             </div>
          </div>
        </div>

        {/* Submission Area */}
        <div className="glass-metal p-12 text-center rounded-3xl border border-white/10 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-r from-holo-cyan/10 to-holo-purple/10 pointer-events-none"></div>
           <h2 className="text-3xl font-bold text-white mb-4">加入挑战 Join the Jam</h2>
           <p className="text-gray-400 mb-8 max-w-xl mx-auto">Upload your sketch or final render. Top voted submissions get 500 Credit Score points. 上传作品赢取积分。</p>
           <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-3 mx-auto shadow-lg">
             <Zap size={20} className="text-black" /> 提交作品 Submit Entry
           </button>
        </div>

      </div>
    </div>
  );
};

export default CreativeChallenge;