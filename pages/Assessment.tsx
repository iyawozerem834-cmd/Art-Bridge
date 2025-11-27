import React, { useState } from 'react';
import { Shield, Upload, Brain, CheckCircle, ChevronRight } from 'lucide-react';

const Assessment: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen pt-24 pb-12 bg-[#0a0a0c] flex items-center justify-center px-4">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-2">创作者入驻考核 <span className="block text-lg font-normal text-gray-500 mt-1">Creator Verification Protocol</span></h1>
        </div>

        {/* Steps */}
        <div className="flex justify-center mb-12 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
              step >= i ? 'bg-white/10 border-holo-cyan text-white' : 'border-white/5 text-gray-600'
            }`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= i ? 'bg-holo-cyan text-black' : 'bg-gray-800'}`}>{i}</div>
              <span className="text-sm hidden sm:inline">{['原创承诺 Identity', '作品分析 Portfolio', '生成画像 Profile'][i-1]}</span>
            </div>
          ))}
        </div>

        {/* Content Card */}
        <div className="glass-metal p-10 rounded-3xl relative overflow-hidden border border-white/10">
          {step === 1 && (
            <div className="animate-in slide-in-from-right duration-300">
               <div className="w-12 h-12 bg-holo-pink/20 rounded-full flex items-center justify-center mb-6">
                 <Shield className="text-holo-pink" />
               </div>
               <h2 className="text-2xl font-bold text-white mb-4">原创与伦理承诺 <span className="opacity-50 text-lg font-normal">Identity & Ethics</span></h2>
               <p className="text-gray-400 mb-8 leading-relaxed">ArtBridge values originality. Please verify your identity and pledge that your submitted works are your own.</p>
               
               <div className="space-y-4 mb-8">
                 <label className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
                   <input type="checkbox" className="w-5 h-5 accent-holo-cyan" />
                   <span className="text-gray-300 text-sm">我承诺所有上传作品均为本人创作 (I confirm originality)</span>
                 </label>
               </div>

               <button onClick={() => setStep(2)} className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors">
                 下一步 Next Step
               </button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in slide-in-from-right duration-300">
               <div className="w-12 h-12 bg-holo-cyan/20 rounded-full flex items-center justify-center mb-6">
                 <Upload className="text-holo-cyan" />
               </div>
               <h2 className="text-2xl font-bold text-white mb-4">作品上传分析 <span className="opacity-50 text-lg font-normal">Portfolio Analysis</span></h2>
               <p className="text-gray-400 mb-8">Upload 3 representative works. Our "ArtBot" will extract style tags.</p>
               
               <div className="grid grid-cols-3 gap-4 mb-8">
                  {[1,2,3].map(i => (
                    <div key={i} className="aspect-square rounded-xl bg-white/5 border border-dashed border-white/20 flex flex-col items-center justify-center hover:bg-white/10 hover:border-holo-cyan transition-colors cursor-pointer text-gray-500 hover:text-white">
                       <Upload size={24} className="mb-2"/>
                       <span className="text-xs">Work {i}</span>
                    </div>
                  ))}
               </div>

               <button onClick={() => setStep(3)} className="w-full py-4 bg-gradient-to-r from-holo-cyan to-holo-purple text-white font-bold rounded-xl shadow-lg transition-transform hover:scale-[1.01]">
                 开始AI分析 Start Analysis
               </button>
            </div>
          )}

           {step === 3 && (
            <div className="animate-in slide-in-from-right duration-300 text-center py-8">
               <div className="relative w-24 h-24 mx-auto mb-8">
                 <div className="absolute inset-0 bg-holo-cyan rounded-full blur-xl opacity-20 animate-pulse"></div>
                 <Brain size={60} className="relative z-10 text-white mx-auto" />
               </div>
               
               <h2 className="text-2xl font-bold text-white mb-2">正在生成数字技能画像...</h2>
               <p className="text-gray-500 mb-8 font-mono">Generating Digital Skill Portrait...</p>
               
               <div className="w-64 h-2 bg-gray-800 rounded-full mx-auto overflow-hidden">
                 <div className="h-full bg-holo-cyan animate-[width_2s_ease-in-out_infinite] w-1/2 rounded-full"></div>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Assessment;