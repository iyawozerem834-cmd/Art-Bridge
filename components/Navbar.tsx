import React, { useState } from 'react';
import { PageView } from '../types';
import { LayoutGrid, Users, UserCircle, Swords, Trophy, Search, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  currentPage: PageView;
  setPage: (page: PageView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [searchFocused, setSearchFocused] = useState(false);

  const navItems = [
    { id: PageView.HOME, label: '首页', sub: 'Home', icon: LayoutGrid },
    { id: PageView.MARKETPLACE, label: '市集', sub: 'Market', icon: LayoutGrid },
    { id: PageView.CHALLENGE, label: '对决', sub: 'Jam', icon: Swords },
    { id: PageView.COMMUNITY, label: '部落', sub: 'Social', icon: Users },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-metal h-20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between gap-4">
        
        {/* Logo Section */}
        <div 
          className="flex items-center gap-3 cursor-pointer group min-w-[140px]"
          onClick={() => setPage(PageView.HOME)}
        >
          <div className="w-14 h-10 group-hover:scale-110 transition-transform duration-500">
            <Logo />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-holo-cyan transition-colors">艺智桥</span>
            <span className="text-[10px] text-gray-400 font-mono tracking-widest">ArtBridge</span>
          </div>
        </div>

        {/* Center Interactive Search Bar */}
        <div className={`hidden md:flex flex-1 max-w-xl relative transition-all duration-500 ${searchFocused ? 'scale-105' : 'scale-100'}`}>
          <div className="relative w-full group">
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-holo-cyan via-holo-purple to-holo-pink rounded-full opacity-30 blur transition duration-500 ${searchFocused ? 'opacity-70' : 'group-hover:opacity-50'}`}></div>
            <div className="relative flex items-center bg-[#0f1014] rounded-full border border-white/10">
              <div className="pl-4 text-gray-400">
                <Search size={18} />
              </div>
              <input 
                type="text" 
                placeholder="搜索风格、价格或创作者... (Search Style/Price)" 
                className="w-full bg-transparent border-none py-2.5 px-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-0"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <button className="mr-2 p-1.5 bg-white/10 rounded-full hover:bg-white/20 hover:text-holo-cyan transition-colors text-gray-400">
                <Sparkles size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 group overflow-hidden ${
                  isActive ? 'bg-white/5' : 'hover:bg-white/5'
                }`}
              >
                <div className="flex flex-col items-center">
                  <span className={`text-sm font-bold transition-colors ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                    {item.label}
                  </span>
                  <span className="text-[9px] uppercase font-mono text-gray-600 group-hover:text-holo-cyan transition-colors">
                    {item.sub}
                  </span>
                </div>
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-holo-cyan to-holo-purple shadow-[0_0_10px_#00f2ea]"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setPage(PageView.ASSESSMENT)}
            className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-holo-cyan/50 bg-white/5 hover:bg-white/10 transition-all group"
          >
            <Trophy size={16} className="text-yellow-500 group-hover:animate-bounce" />
            <div className="flex flex-col leading-none text-left">
              <span className="text-xs font-bold text-gray-200">创作者入驻</span>
              <span className="text-[8px] text-gray-500 uppercase">Apply</span>
            </div>
          </button>

          <button 
            onClick={() => setPage(PageView.PROFILE)}
            className={`p-0.5 rounded-full transition-all ${currentPage === PageView.PROFILE ? 'bg-gradient-to-r from-holo-cyan to-holo-purple' : 'bg-transparent hover:bg-white/10'}`}
          >
            <div className="bg-[#0f1014] rounded-full p-1">
              <UserCircle size={28} className={currentPage === PageView.PROFILE ? 'text-white' : 'text-gray-400'} />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;