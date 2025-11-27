import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Community from './pages/Community';
import Profile from './pages/Profile';
import Assessment from './pages/Assessment';
import VipDashboard from './pages/VipDashboard';
import CreativeChallenge from './pages/CreativeChallenge';
import AiAssistant from './components/AiAssistant';
import { PageView } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>(PageView.HOME);

  // Hash-based routing logic simulation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'marketplace') setCurrentPage(PageView.MARKETPLACE);
      else if (hash === 'community') setCurrentPage(PageView.COMMUNITY);
      else if (hash === 'profile') setCurrentPage(PageView.PROFILE);
      else if (hash === 'assessment') setCurrentPage(PageView.ASSESSMENT);
      else if (hash === 'vip') setCurrentPage(PageView.VIP_DASHBOARD);
      else if (hash === 'challenge') setCurrentPage(PageView.CHALLENGE);
      else setCurrentPage(PageView.HOME);
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const setPage = (page: PageView) => {
    setCurrentPage(page);
    let hash = '';
    if (page === PageView.MARKETPLACE) hash = 'marketplace';
    else if (page === PageView.COMMUNITY) hash = 'community';
    else if (page === PageView.PROFILE) hash = 'profile';
    else if (page === PageView.ASSESSMENT) hash = 'assessment';
    else if (page === PageView.VIP_DASHBOARD) hash = 'vip';
    else if (page === PageView.CHALLENGE) hash = 'challenge';
    window.location.hash = hash;
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-[#050505] text-slate-200 min-h-screen font-sans selection:bg-acid-green selection:text-black">
      <Navbar currentPage={currentPage} setPage={setPage} />
      
      <main>
        {currentPage === PageView.HOME && <Home setPage={setPage} />}
        {currentPage === PageView.MARKETPLACE && <Marketplace />}
        {currentPage === PageView.COMMUNITY && <Community />}
        {currentPage === PageView.PROFILE && <Profile />}
        {currentPage === PageView.ASSESSMENT && <Assessment />}
        {currentPage === PageView.VIP_DASHBOARD && <VipDashboard />}
        {currentPage === PageView.CHALLENGE && <CreativeChallenge />}
      </main>

      {/* Floating AI Match Button */}
      <AiAssistant />

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#050505] py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                 <span className="text-2xl font-black text-white italic">ART<span className="text-hot-pink">BRIDGE</span></span>
              </div>
              <p className="text-gray-600 text-sm max-w-xs font-mono">
                GEN Z CREATIVE UNIVERSE.<br/>
                POWERED BY GEMINI AI.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-500 font-mono">
                <li><button onClick={() => setPage(PageView.ASSESSMENT)} className="hover:text-acid-green transition-colors">Apply as Creator</button></li>
                <li><button onClick={() => setPage(PageView.CHALLENGE)} className="hover:text-acid-green transition-colors">Daily Jams</button></li>
                <li><button onClick={() => setPage(PageView.MARKETPLACE)} className="hover:text-acid-green transition-colors">Marketplace</button></li>
              </ul>
            </div>
             <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-500 font-mono">
                <li><a href="#" className="hover:text-acid-green transition-colors">Smart Contracts</a></li>
                <li><a href="#" className="hover:text-acid-green transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 text-center text-[10px] text-gray-700 font-mono uppercase">
            © 2024 ArtBridge Gen-Z Ecosystem.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;