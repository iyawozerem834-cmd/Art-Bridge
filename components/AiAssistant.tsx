import React, { useState } from 'react';
import { Sparkles, Send, X, Bot, Image as ImageIcon, Wand2, Search } from 'lucide-react';
import { analyzeRequest } from '../services/geminiService';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'match' | 'create' | 'analyze'>('match');
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [analyzingImage, setAnalyzingImage] = useState(false);

  const handleAction = async () => {
    if (!prompt.trim() && mode !== 'analyze') return;
    
    setLoading(true);
    setResponse(null);

    let finalPrompt = prompt;

    if (mode === 'analyze') {
       // Mock image analysis prompt construction
       finalPrompt = "ANALYZE_IMAGE_REQUEST: [Mock Image Data] Please identify art style, visual techniques, and industry jargon.";
    } else if (mode === 'create') {
       finalPrompt = "CO_CREATE_REQUEST: " + prompt;
    }

    const result = await analyzeRequest(finalPrompt);
    setResponse(result);
    setLoading(false);
  };

  // Mock Image Upload Handler
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAnalyzingImage(true);
      setTimeout(() => {
        setAnalyzingImage(false);
        setPrompt("已上传图片: " + e.target.files![0].name);
      }, 1500);
    }
  };

  return (
    <>
      {/* Trigger Button - Liquid Orb */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 group ${isOpen ? 'hidden' : 'flex'}`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-holo-cyan to-holo-purple rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
        <div className="relative flex items-center justify-center w-14 h-14 bg-black rounded-full border border-white/20 shadow-2xl">
          <Sparkles className="text-white w-6 h-6 animate-spin-slow" />
        </div>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg glass-metal rounded-3xl p-6 shadow-[0_0_50px_rgba(112,0,255,0.2)] animate-float border border-white/20">
            
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-holo-cyan to-holo-purple flex items-center justify-center">
                   <Bot className="text-white w-6 h-6" />
                 </div>
                 <div>
                   <h3 className="text-lg font-bold text-white leading-none">AI 智配助手</h3>
                   <span className="text-[10px] text-gray-400 font-mono uppercase">ArtBridge AI Core</span>
                 </div>
               </div>
               <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                 <X size={20} />
               </button>
            </div>

            {/* Mode Switcher */}
            <div className="flex gap-2 p-1 bg-white/5 rounded-xl mb-6">
              {[
                { id: 'match', label: '智能匹配', icon: Search },
                { id: 'analyze', label: '风格分析', icon: ImageIcon },
                { id: 'create', label: '辅助创作', icon: Wand2 }
              ].map((m) => {
                const Icon = m.icon;
                return (
                  <button
                    key={m.id}
                    onClick={() => { setMode(m.id as any); setResponse(null); setPrompt(''); }}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition-all ${
                      mode === m.id 
                      ? 'bg-gradient-to-r from-holo-cyan/20 to-holo-purple/20 text-white border border-white/10' 
                      : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    <Icon size={12} /> {m.label}
                  </button>
                );
              })}
            </div>

            {/* Content Area */}
            <div className="space-y-4">
              
              {mode === 'analyze' && (
                <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:bg-white/5 transition-colors relative">
                   <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleImageUpload} />
                   {analyzingImage ? (
                     <div className="flex flex-col items-center">
                       <div className="w-8 h-8 border-2 border-holo-cyan border-t-transparent rounded-full animate-spin mb-2"></div>
                       <span className="text-xs text-holo-cyan">Scanning Pixels...</span>
                     </div>
                   ) : prompt ? (
                      <div className="flex items-center justify-center gap-2 text-green-400">
                        <ImageIcon size={16} /> <span>{prompt}</span>
                      </div>
                   ) : (
                     <>
                       <ImageIcon className="mx-auto text-gray-500 mb-2" size={32} />
                       <p className="text-sm text-gray-300">上传作品图</p>
                       <p className="text-xs text-gray-500 mt-1">AI将解析风格黑话并推荐类似创作者</p>
                     </>
                   )}
                </div>
              )}

              {(mode === 'match' || mode === 'create') && (
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={mode === 'match' ? "描述需求，如：'想要一个赛博朋克风的Logo，预算2k'..." : "输入创意灵感，AI帮你完善Prompt..."}
                  className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-holo-purple/50 resize-none h-24"
                />
              )}

              <button
                onClick={handleAction}
                disabled={loading || (!prompt && mode !== 'analyze')}
                className="w-full py-3 bg-gradient-to-r from-holo-cyan to-holo-purple rounded-xl text-white font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <>
                     <div className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin" />
                     <span>Thinking...</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={16} /> 开始生成 (Generate)
                  </>
                )}
              </button>

              {/* Response Display */}
              {response && (
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 animate-in fade-in slide-in-from-bottom-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-holo-cyan animate-pulse"></div>
                    <span className="text-xs font-bold text-gray-300 uppercase">AI Insight</span>
                  </div>
                  <div className="text-sm text-gray-200 whitespace-pre-wrap leading-relaxed font-sans">
                    {response}
                  </div>
                  {mode === 'analyze' && (
                    <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                      {['#Cyberpunk', '#GlitchArt', '#NeonNoir'].map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-1 bg-holo-purple/20 text-holo-purple rounded border border-holo-purple/30">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AiAssistant;