import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, Users, DollarSign, Download } from 'lucide-react';

const DATA_VISITS = [
  { name: 'Mon', uv: 4000 }, { name: 'Tue', uv: 3000 }, { name: 'Wed', uv: 2000 },
  { name: 'Thu', uv: 2780 }, { name: 'Fri', uv: 1890 }, { name: 'Sat', uv: 2390 }, { name: 'Sun', uv: 3490 },
];

const VipDashboard: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">VIP 数据中台 <span className="opacity-50 font-normal ml-2">Command Center</span></h1>
            <p className="text-gray-500">Welcome back, Pro Creator.</p>
          </div>
          <button className="bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/10 transition-colors text-sm">
            <Download size={14} /> 导出报告 Export
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: '总收入 Total Revenue', val: '¥42,500', icon: <DollarSign className="text-holo-cyan" />, change: '+12%' },
            { label: '主页访问 Profile Views', val: '8,204', icon: <TrendingUp className="text-holo-purple" />, change: '+5%' },
            { label: '粉丝 Followers', val: '1,203', icon: <Users className="text-holo-pink" />, change: '+24%' },
            { label: '转化率 Conversion', val: '4.2%', icon: <TrendingUp className="text-white" />, change: '-1%' },
          ].map((stat, i) => (
            <div key={i} className="glass-metal p-6 rounded-2xl border border-white/5">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-white/5 rounded-lg">{stat.icon}</div>
                <span className={`text-xs font-bold ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{stat.change}</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">{stat.val}</h3>
              <p className="text-gray-500 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 glass-metal p-6 rounded-2xl border border-white/5">
            <h3 className="text-white font-bold mb-6 text-sm">流量趋势 Traffic Analysis</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={DATA_VISITS}>
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00f2ea" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00f2ea" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#333" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#333" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: '#0a0a0c', border: '1px solid #333', borderRadius: '8px' }} />
                  <Area type="monotone" dataKey="uv" stroke="#00f2ea" strokeWidth={3} fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:col-span-1 glass-metal p-6 rounded-2xl border border-white/5">
             <h3 className="text-white font-bold mb-6 text-sm">收入曲线 Revenue Stream</h3>
             <div className="h-64">
               <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={[
                    { name: 'W1', val: 500 }, { name: 'W2', val: 1200 }, { name: 'W3', val: 900 }, { name: 'W4', val: 2400 },
                  ]}>
                    <XAxis dataKey="name" stroke="#333" fontSize={10} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ backgroundColor: '#0a0a0c', border: '1px solid #333', borderRadius: '8px' }} />
                    <Line type="monotone" dataKey="val" stroke="#7000ff" strokeWidth={3} dot={{ fill: '#7000ff' }} />
                  </LineChart>
               </ResponsiveContainer>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VipDashboard;