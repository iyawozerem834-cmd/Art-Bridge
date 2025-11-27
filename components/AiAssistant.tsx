import React, { useState, useRef } from 'react';
import { Sparkles, X, Bot, Image as ImageIcon, Wand2, Search, UploadCloud, ChevronRight } from 'lucide-react';
import { analyzeRequest, AnalysisResult } from '../services/geminiService';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'match' | 'analyze' | 'create'>('match');
  const [prompt, setPrompt] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setPrompt("请分析这张作品的风格与黑话 (Analyze style & jargon)");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!prompt.trim() && !selectedImage) return;
    
    setLoading(true);
    setResult(null);

    // Prepare prompt prefix based on mode
    let fullPrompt = prompt;
    if (mode === 'create') fullPrompt = "CO_CREATE: " + prompt;

    // Separate base64 data from string (e.g., "data:image/png;base64,...")
    let imageBase64 = undefined;
    if (selectedImage) {
        const parts = selectedImage.split(',');
        if (parts.length === 2) {
            imageBase64 = parts[1];
        }
    }

    const res = await analyzeRequest(fullPrompt, imageBase64);
    setResult(res);
    setLoading(false);
  };

  const reset = () => {
    setPrompt('');
    setSelectedImage(null);
    setResult(null);
  };

  return (
    <>
      {/* Floating Orb Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 group ${isOpen ? 'hidden' : 'flex'} flex-col items-center gap-2`}
      >
        <div className="relative">
            <div className="absolute inset-0 bg-holo-cyan rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity animate-pulse"></div>
            <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-md rounded-full border border-white/30 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-liquid-silver opacity-20 animate-liquid-morph"></div>
                <Sparkles className="text-white w-7 h-7 relative z-10" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-holo-pink opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-holo-pink"></span>
            </span>
        </div>
        <span className="text-[10px] font-bold text-white bg-black/50 px-2 py-1 rounded-full backdrop-blur-sm">AI 智配</span>
      </button>

      {/* Main Interface */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg glass-metal rounded-3xl p-0 shadow-[0_0_60px_rgba(0,242,234,0.15)] animate-in slide-in-from-bottom-10 overflow-hidden flex flex-col max-h-[85vh]">
            
            {/* Liquid Header */}
            <div className="relative p-6 bg-gradient-to-r from-white/5 to-transparent border-b border-white/10">
               <div className="absolute top-0 right-0 p-4">
                  <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                     <X size={24} />
                  </button>
               </div>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-holo-cyan to-holo-purple flex items-center justify-center shadow-lg">
                   <Bot className="text-white w-7 h-7" />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-white">艺智桥 AI</h3>
                   <p className="text-xs text-holo-cyan font-mono uppercase tracking-wider">Style Decoder & Matcher</p>
                 </div>
               </div>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
                
                {/* Tabs */}
                <div className="grid grid-cols-3 gap-2 mb-6 bg-black/20 p-1 rounded-xl">
                    {[
                        { id: 'match', label: '智能匹配', en: 'Match', icon: Search },
                        { id: 'analyze', label: '风格分析', en: 'Analyze', icon: ImageIcon },
                        { id: 'create', label: '辅助创作', en: 'Co-Create', icon: Wand2 },
                    ].map(t => (
                        <button
                            key={t.id}
                            onClick={() => { setMode(t.id as any); reset(); }}
                            className={`py-3 rounded-lg flex flex-col items-center justify-center transition-all ${
                                mode === t.id 
                                ? 'bg-white/10 text-white shadow-inner border border-white/10' 
                                : 'text-gray-500 hover:text-gray-300'
                            }`}
                        >
                            <t.icon size={18} className="mb-1" />
                            <span className="text-xs font-bold">{t.label}</span>
                        </button>
                    ))}
                </div>

                {/* Input Area */}
                <div className="space-y-4">
                    {mode === 'analyze' && (
                        <div 
                            onClick={() => fileInputRef.current?.click()}
                            className="border-2 border-dashed border-white/20 rounded-2xl p-8 text-center hover:bg-white/5 hover:border-holo-cyan/50 transition-all cursor-pointer relative group overflow-hidden"
                        >
                            <input 
                                type="file" 
                                ref={fileInputRef} 
                                className="hidden" 
                                accept="image/*"
                                onChange={handleImageUpload}
                            />
                            {selectedImage ? (
                                <img src={selectedImage} alt="Preview" className="h-32 mx-auto rounded-lg object-contain shadow-lg" />
                            ) : (
                                <>
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                        <UploadCloud className="text-holo-cyan" />
                                    </div>
                                    <p className="text-sm text-gray-300 font-bold">上传参考图 / Upload Image</p>
                                    <p className="text-xs text-gray-500 mt-1">AI将解析视觉黑话与风格流派</p>
                                </>
                            )}
                        </div>
                    )}

                    <div className="relative">
                        <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder={
                                mode === 'match' ? "输入需求，如：'想要一个赛博朋克风的Logo，预算2k'..." :
                                mode === 'analyze' ? "输入补充描述 (可选)..." :
                                "输入你的灵感碎片，AI帮你完善..."
                            }
                            className="w-full bg-black/30 border border-white/10 rounded-2xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-holo-purple/50 resize-none h-28 text-sm"
                        />
                    </div>

                    <button
                        onClick={handleGenerate}
                        disabled={loading || (!prompt && !selectedImage)}
                        className="w-full py-4 bg-gradient-to-r from-holo-cyan via-holo-purple to-holo-pink rounded-xl text-white font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(157,0,255,0.3)]"
                    >
                        {loading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                <span>AI 正在解码... (Decoding)</span>
                            </>
                        ) : (
                            <>
                                <Sparkles size={18} /> 开始生成 (Generate)
                            </>
                        )}
                    </button>
                </div>

                {/* Result Area */}
                {result && (
                    <div className="mt-6 animate-in slide-in-from-bottom-5 fade-in duration-300">
                        <div className="bg-gradient-to-b from-white/10 to-white/5 rounded-2xl p-1">
                            <div className="bg-[#0f1014]/90 rounded-xl p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-2 h-2 rounded-full bg-holo-cyan animate-pulse"></div>
                                    <span className="text-xs font-bold text-holo-cyan uppercase tracking-widest">AI Analysis Report</span>
                                </div>
                                
                                <div className="prose prose-invert prose-sm max-w-none text-gray-300 leading-relaxed whitespace-pre-wrap font-sans">
                                    {result.text}
                                </div>

                                {result.tags && result.tags.length > 0 && (
                                    <div className="mt-4 pt-4 border-t border-white/10">
                                        <p className="text-xs text-gray-500 mb-2">推荐搜索标签 (Recommended Tags):</p>
                                        <div className="flex flex-wrap gap-2">
                                            {result.tags.map((tag, i) => (
                                                <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-holo-silver hover:border-holo-cyan transition-colors cursor-pointer flex items-center gap-1">
                                                    {tag} <ChevronRight size={10} />
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
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