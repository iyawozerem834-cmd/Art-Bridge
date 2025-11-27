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
        
        {/* Liquid Metal Background */}
        <div className="absolute inset-0 bg-[#0f1014]">
           <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-holo-purple/20 rounded-full blur-[100px] animate-float opacity-40"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-holo-cyan/20 rounded-full blur-[100px] animate-float opacity-40" style={{animationDelay: '2s'}}></div>
           {/* Metallic Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:120px_120px]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="mb-10 flex justify-center">
             <div className="glass-metal px-6 py-2 rounded-full flex items-center gap-3 animate-float border border-white/10 hover:border-holo-cyan/50 transition-colors cursor-pointer">
               <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse box-shadow-glow"></span>
               <span className="text-xs font-mono text-gray-300 tracking-wider">SYSTEM V2.0 // <span className="text-holo-cyan">AI STYLE DECODER ONLINE</span></span>
             </div>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">
            <span className="text-white block drop-shadow-2xl">链接艺术与智慧</span>
            <span className="text-liquid block text-5xl md:text-8xl mt-2 italic font-serif opacity-90">Bridging Creativity</span>
          </h1>
          
          <p className="mt-8 text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-sans leading-relaxed">
            基于AI大数据集的艺术创作者全链路服务平台。<br/>
            <span className="text-base opacity-60">AI-Powered Ecosystem for Creative Professionals & Brands.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => setPage(PageView.MARKETPLACE)}
              className="px-10 py-4 bg-white text-black font-bold rounded-full hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all flex items-center gap-2 group hover:scale-105"
            >
              探索市集 Explore <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setPage(PageView.ASSESSMENT)}
              className="px-10 py-4 glass-metal text-white font-bold rounded-full hover:bg-white/10 transition-all border border-white/20 hover:border-holo-cyan/50 hover:scale-105"
            >
              创作者入驻 Join Us
            </button>
          </div>
        </div>
      </section>

      {/* Marquee - Chrome Tape Style */}
      <div className="py-4 bg-gradient-to-r from-metal-chrome via-white to-metal-chrome relative overflow-hidden border-y border-white/50">
        <div className="animate-[shine_4s_linear_infinite] absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-12 opacity-60"></div>
        <div className="animate-[scroll_25s_linear_infinite] whitespace-nowrap flex gap-16 items-center">
           {Array(8).fill("AI SMART MATCHING • 数字信用 DIGITAL TRUST • 风格解码 STYLE DECODER • ").map((t, i) => (
             <span key={i} className="text-black font-black text-sm tracking-widest font-mono">{t}</span>
           ))}
        </div>
      </div>

      {/* Features - Holographic Cards */}
      <section className="py-32 relative bg-[#0f1014]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Terminal className="text-holo-cyan" />}
              title="智能匹配 AI Match"
              desc="告别无效沟通。AI引擎解读你的需求黑话，精准推荐。Decode your creative needs."
              color="group-hover:shadow-[0_0_40px_rgba(0,242,234,0.15)] group-hover:border-holo-cyan/30"
            />
            <FeatureCard 
              icon={<ShieldCheck className="text-holo-purple" />}
              title="信用图谱 Trust Profile"
              desc="数字化技能画像与信用分体系，交易透明可溯源。Verified skills & credit scores."
              color="group-hover:shadow-[0_0_40px_rgba(157,0,255,0.15)] group-hover:border-holo-purple/30"
            />
            <FeatureCard 
              icon={<Zap className="text-holo-pink" />}
              title="极速交付 Fast Delivery"
              desc="标准化的SKU服务，像购物一样购买定制。Standardized creative services."
              color="group-hover:shadow-[0_0_40px_rgba(255,0,128,0.15)] group-hover:border-holo-pink/30"
            />
          </div>
        </div>
      </section>

      {/* CTA Section - Liquid Bubble */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden relative border border-white/10 glass-metal p-12 md:p-24 text-center">
           {/* Animated blobs behind */}
           <div className="absolute top-0 left-0 w-64 h-64 bg-holo-cyan/20 rounded-full blur-[80px] animate-blob"></div>
           <div className="absolute bottom-0 right-0 w-64 h-64 bg-holo-pink/20 rounded-full blur-[80px] animate-blob" style={{animationDelay: '2s'}}></div>
           
           <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                准备好升级你的创意生涯了吗？<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-holo-cyan to-holo-silver text-3xl md:text-5xl font-normal mt-4 block italic">Ready to Level Up?</span>
              </h2>
              <p className="text-gray-400 mb-12 max-w-xl mx-auto text-lg">
                解锁VIP数据看板、专属作品集模板与流量扶持。<br/>Unlock data insights and exclusive tools.
              </p>
              
              <button 
                onClick={() => setPage(PageView.VIP_DASHBOARD)} 
                className="px-12 py-5 bg-gradient-to-r from-holo-purple to-holo-pink rounded-2xl text-white font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(157,0,255,0.4)] flex items-center gap-3 mx-auto"
              >
                <Sparkles size={22} className="text-yellow-200 animate-spin-slow"/> 
                查看 VIP 特权 (View VIP)
              </button>
           </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{icon: React.ReactNode, title: string, desc: string, color: string}> = ({ icon, title, desc, color }) => (
  <div className={`p-10 glass-metal rounded-3xl transition-all duration-500 group border border-white/5 ${color}`}>
    <div className="mb-8 p-5 bg-white/5 rounded-2xl w-fit group-hover:bg-white/10 transition-colors backdrop-blur-md">{icon}</div>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

export default Home;