'use client';

import { Heart, Instagram, Music, Star, Sparkles } from 'lucide-react';
import img from 'next/image';

export default function Home() {
  const links = [
    { label: 'Instagram', icon: <Instagram size={18} />, url: '#' },
    { label: 'My Music', icon: <Music size={18} />, url: '#' },
    { label: 'Fanpage 💖', icon: <Star size={18} />, url: '#' },
  ];

  return (
    <main className="min-h-screen bg-pink-100 text-pink-800 flex items-center justify-center px-4 font-sans">
      <div className="max-w-sm w-full bg-white border-4 border-pink-300 rounded-[30px] p-6 shadow-[6px_6px_0px_#ff80ab] relative">
        <div className="absolute top-4 left-4 rotate-12 bg-yellow-200 text-yellow-800 px-2 py-1 text-xs rounded-full">✨NEW!</div>
        <div className="text-center mb-5">
          <img src="/images/p1.jpg" alt="Kawaii" className="w-24 h-24 mx-auto rounded-full border-4 border-pink-400 mb-2 object-cover" />
          <h1 className="text-3xl font-bold tracking-wide">CutieNamaAnda</h1>
          <p className="text-sm text-pink-500">Kawaii Vibes Only 🧁🎀</p>
          <p className="text-sm mt-1 italic text-pink-400">"Spreading sparkles & smiles 💕"</p>
        </div>
        <div className="space-y-4">
          {links.map(({ label, icon, url }, i) => (
            <a key={i} href={url} className="block px-5 py-3 bg-pink-200 border border-pink-400 rounded-full text-center hover:bg-pink-300 transition text-lg font-semibold shadow-inner">
              <div className="flex justify-center gap-2 items-center">{icon} {label}</div>
            </a>
          ))}
        </div>
        <div className="flex justify-center mt-6 text-pink-500 text-xs items-center gap-1">
          <Sparkles size={14} /> made with extra sprinkles
        </div>
      </div>
    </main>
  );
}
