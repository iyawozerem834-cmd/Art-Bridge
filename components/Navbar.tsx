import React from 'react';
import { PageView } from '../types';
import { LayoutGrid, Users, UserCircle, Swords, Trophy, Search } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  currentPage: PageView;
  setPage: (page: PageView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const navItems = [
    { id: PageView.HOME, label: '首页', sub: 'Home', icon: LayoutGrid }, // Using LayoutGrid as generic home icon or change if preferred
    { id: PageView.MARKETPLACE, label: '市集', sub: 'Market', icon: LayoutGrid },
    { id: PageView.CHALLENGE, label: '对决', sub: 'Jam', icon: Swords },
    { id: PageView.COMMUNITY, label: '部落', sub: 'Social', icon: Users },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-metal border-b-0 border-white/5 h-20">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between gap-4">
        
        {/* Logo Section */}
        <div 
          className="flex items-center gap-3 cursor-pointer group min-w-[140px]"
          onClick={() => setPage(PageView.HOME)}
        >
          <div className="w-12 h-8">
            <Logo />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight text-white">艺智桥</span>
            <span className="text-[10px] text-gray-400 font-mono tracking-widest group-hover:text-holo-cyan transition-colors">ArtBridge</span>
          </div>
        </div>

        {/* Center Search Bar */}
        <div className="hidden md:flex flex-1 max-w-lg relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search size={16} className="text-gray-400 group-focus-within:text-holo-cyan transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="搜索风格 / 创作者 / 价格 (Search Style/Artist)..." 
            className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:bg-white/10 focus:border-holo-cyan/50 transition-all shadow-inner"
          />
          <div className="absolute inset-y-0 right-2 flex items-center">
             <span className="text-[10px] text-gray-500 border border-white/10 px-2 py-0.5 rounded-full">⌘K</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 group overflow-hidden ${
                  isActive ? 'bg-white/10' : 'hover:bg-white/5'
                }`}
              >
                <div className="flex flex-col items-center">
                  <span className={`text-sm font-bold ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                    {item.label}
                  </span>
                  <span className="text-[9px] uppercase font-mono text-gray-600 group-hover:text-holo-cyan transition-colors">
                    {item.sub}
                  </span>
                </div>
                {isActive && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-holo-cyan to-holo-purple"></div>}
              </button>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setPage(PageView.ASSESSMENT)}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 hover:border-holo-cyan/50 bg-white/5 hover:bg-white/10 transition-all group"
          >
            <Trophy size={14} className="text-yellow-500 group-hover:animate-bounce" />
            <div className="flex flex-col leading-none text-left">
              <span className="text-xs font-bold text-gray-300 group-hover:text-white">入驻</span>
              <span className="text-[8px] text-gray-600 uppercase">Verify</span>
            </div>
          </button>

          <button 
            onClick={() => setPage(PageView.PROFILE)}
            className={`p-1 rounded-full border border-transparent transition-all ${currentPage === PageView.PROFILE ? 'bg-gradient-to-r from-holo-cyan to-holo-purple p-[1px]' : 'hover:bg-white/10'}`}
          >
            <div className="bg-[#0a0a0c] rounded-full p-1">
              <UserCircle size={24} className={currentPage === PageView.PROFILE ? 'text-white' : 'text-gray-400'} />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;