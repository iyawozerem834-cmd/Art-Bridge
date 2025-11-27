import React from 'react';
import { ArrowRight, Terminal, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { PageView } from '../types';

interface HomeProps {
  setPage: (page: PageView) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center">
        
        {/* Dreamy Background */}
        <div className="absolute inset-0 bg-[#0a0a0c]">
           <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-holo-purple/20 rounded-full blur-[120px] animate-float"></div>
           <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-holo-cyan/10 rounded-full blur-[120px] animate-float" style={{animationDelay: '2s'}}></div>
           {/* Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8 flex justify-center">
             <div className="glass-metal px-4 py-2 rounded-full flex items-center gap-2 animate-float">
               <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
               <span className="text-xs font-mono text-gray-300">SYSTEM ONLINE // <span className="text-holo-cyan">AI MATCHING READY</span></span>
             </div>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-tight">
            <span className="text-white block">链接艺术与智慧</span>
            <span className="text-chrome block text-6xl md:text-9xl mt-2 italic">Bridging Creativity</span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-sans leading-relaxed">
            基于AI大数据集的艺术创作者全链路服务平台。<br/>
            <span className="text-sm opacity-60 font-mono">AI-Powered Ecosystem for Creative Professionals & Brands.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => setPage(PageView.MARKETPLACE)}
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all flex items-center gap-2 group"
            >
              探索市集 Explore <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setPage(PageView.ASSESSMENT)}
              className="px-8 py-4 glass-metal text-white font-bold rounded-full hover:bg-white/10 transition-all border border-white/20"
            >
              创作者入驻 Join Us
            </button>
          </div>
        </div>
      </section>

      {/* Marquee - Liquid Style */}
      <div className="py-6 bg-gradient-to-r from-holo-silver via-white to-holo-silver relative overflow-hidden">
        <div className="animate-[shine_3s_linear_infinite] absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 opacity-50"></div>
        <div className="animate-[scroll_20s_linear_infinite] whitespace-nowrap flex gap-12 items-center">
           {Array(8).fill("AI SMART MATCHING • 数字信用 DIGITAL TRUST • 标准化服务 STANDARDIZED SERVICE • ").map((t, i) => (
             <span key={i} className="text-black/80 font-bold text-lg tracking-widest font-mono">{t}</span>
           ))}
        </div>
      </div>

      {/* Features - Glass Cards */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Terminal className="text-holo-cyan" />}
              title="智能匹配 AI Match"
              desc="告别无效沟通。AI引擎解读你的需求黑话，精准推荐。Decode your creative needs."
              glow="shadow-[0_0_30px_rgba(0,242,234,0.1)]"
            />
            <FeatureCard 
              icon={<ShieldCheck className="text-holo-purple" />}
              title="信用图谱 Trust Profile"
              desc="数字化技能画像与信用分体系，交易透明可溯源。Verified skills & credit scores."
              glow="shadow-[0_0_30px_rgba(112,0,255,0.1)]"
            />
            <FeatureCard 
              icon={<Zap className="text-holo-pink" />}
              title="极速交付 Fast Delivery"
              desc="标准化的SKU服务，像购物一样购买定制。Standardized creative services."
              glow="shadow-[0_0_30px_rgba(255,0,80,0.1)]"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative border border-white/10">
           <div className="absolute inset-0 bg-liquid-metal opacity-10"></div>
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
           
           <div className="relative z-10 p-12 md:p-20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">准备好升级你的创意生涯了吗？<br/><span className="text-2xl opacity-70 font-normal mt-2 block">Ready to Level Up?</span></h2>
              <p className="text-gray-400 mb-10 max-w-2xl mx-auto">解锁VIP数据看板、专属作品集模板与流量扶持。Unlock data insights and exclusive tools.</p>
              
              <button 
                onClick={() => setPage(PageView.VIP_DASHBOARD)} 
                className="px-10 py-4 bg-gradient-to-r from-holo-purple to-holo-pink rounded-xl text-white font-bold hover:scale-105 transition-transform shadow-lg flex items-center gap-3 mx-auto"
              >
                <Sparkles size={20} className="text-yellow-200 animate-spin-slow"/> 
                查看 VIP 特权 (View VIP)
              </button>
           </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{icon: React.ReactNode, title: string, desc: string, glow: string}> = ({ icon, title, desc, glow }) => (
  <div className={`p-8 glass-metal rounded-2xl hover:-translate-y-2 transition-transform duration-500 group ${glow}`}>
    <div className="mb-6 p-4 bg-white/5 rounded-full w-fit group-hover:bg-white/10 transition-colors">{icon}</div>
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
  </div>
);

export default Home;