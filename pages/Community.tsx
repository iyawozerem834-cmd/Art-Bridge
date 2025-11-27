import React from 'react';
import { MessageCircle, ThumbsUp, Share2, MoreHorizontal } from 'lucide-react';
import { Post } from '../types';

const MOCK_POSTS: Post[] = [
  {
    id: '1',
    author: 'DesignPro_Alice',
    avatar: 'https://picsum.photos/100/100?random=1',
    content: '刚刚完成了这个赛博朋克风格的项目！使用Blender和Photoshop完成。大家觉得光影处理得怎么样？求指教！🎨 Just finished this cyberpunk project!',
    image: 'https://picsum.photos/800/500?random=2',
    likes: 342,
    comments: 56,
    time: '2h ago'
  },
  {
    id: '2',
    author: 'IndieGameDev',
    avatar: 'https://picsum.photos/100/100?random=3',
    content: '正在寻找一位能够绘制像素风角色的画师，项目周期大概2周。Looking for a pixel artist for a 2-week gig.',
    likes: 89,
    comments: 12,
    time: '5h ago'
  },
];

const Community: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">创作者部落 <span className="opacity-50 font-normal ml-2 text-xl">Community</span></h1>
        <p className="text-gray-400">分享灵感，交流技术 Share inspiration & Connect</p>
      </div>

      {/* Create Post Input */}
      <div className="glass-metal p-6 rounded-3xl mb-8 flex gap-4 border border-white/10">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-holo-cyan to-holo-purple flex-shrink-0 animate-pulse"></div>
        <div className="flex-1">
           <input 
             type="text" 
             placeholder="有什么新鲜事？What's on your mind?" 
             className="w-full bg-transparent border-none text-white placeholder-gray-500 focus:ring-0 text-lg mb-4"
           />
           <div className="flex justify-between items-center border-t border-white/5 pt-4">
             <div className="flex gap-4 text-holo-cyan text-sm font-bold">
               <button className="hover:text-white transition-colors">图片 Image</button>
               <button className="hover:text-white transition-colors">视频 Video</button>
             </div>
             <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">
               发布 Post
             </button>
           </div>
        </div>
      </div>

      {/* Feed */}
      <div className="space-y-6">
        {MOCK_POSTS.map(post => (
          <div key={post.id} className="glass-metal p-6 rounded-3xl border border-white/5 relative overflow-hidden">
             {/* Decorative blob */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="flex gap-3">
                <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full object-cover border border-white/20" />
                <div>
                  <h3 className="font-bold text-white text-sm">{post.author}</h3>
                  <p className="text-xs text-gray-500">{post.time}</p>
                </div>
              </div>
              <button className="text-gray-500 hover:text-white">
                <MoreHorizontal size={20} />
              </button>
            </div>

            <p className="text-gray-200 mb-4 leading-relaxed relative z-10">{post.content}</p>

            {post.image && (
              <div className="rounded-2xl overflow-hidden mb-4 border border-white/5 relative z-10">
                <img src={post.image} alt="Post content" className="w-full h-auto object-cover max-h-96" />
              </div>
            )}

            <div className="flex items-center gap-8 pt-2 relative z-10">
              <button className="flex items-center gap-2 text-gray-400 hover:text-holo-pink transition-colors group">
                <ThumbsUp size={18} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-400 hover:text-holo-cyan transition-colors group">
                <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{post.comments}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors ml-auto">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;