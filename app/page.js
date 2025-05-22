'use client';

import Image from 'next/image';
import { Instagram, Music, Star, Sparkles } from 'lucide-react';

export default function Home() {
  const links = [
    { label: 'Instagram', icon: <Instagram size={16} />, url: '#' },
    { label: 'My Music', icon: <Music size={16} />, url: '#' },
    { label: 'Fanpage 💖', icon: <Star size={16} />, url: '#' },
  ];

  return (
    <main className="min-h-screen bg-pink-100 text-pink-800 flex items-center justify-center px-4 py-8 font-sans">
      <div className="w-full max-w-xs bg-white border-4 border-pink-300 rounded-[24px] p-5 shadow-[4px_4px_0px_#ff80ab] relative">
        {/* Badge */}
        <div className="absolute top-3 left-3 rotate-12 bg-yellow-200 text-yellow-800 px-2 py-0.5 text-[10px] rounded-full">
          ✨NEW!
        </div>

        {/* Avatar & Info */}
        <div className="text-center mb-4">
          <div className="w-20 h-20 mx-auto mb-2 relative rounded-full overflow-hidden border-4 border-pink-400">
            <Image
              src="/images/p1.jpg"
              alt="Kawaii"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-xl font-bold tracking-wide">CutieNamaAnda</h1>
          <p className="text-xs text-pink-500">Kawaii Vibes Only 🧁🎀</p>
          <p className="text-xs mt-1 italic text-pink-400">
            {`"Spreading sparkles & smiles 💕"`}
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3">
          {links.map(({ label, icon, url }, i) => (
            <a
              key={i}
              href={url}
              className="block px-4 py-2 bg-pink-200 border border-pink-400 rounded-full text-center hover:bg-pink-300 transition text-sm font-semibold shadow-inner"
            >
              <div className="flex justify-center items-center gap-1.5">
                {icon} {label}
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-center mt-5 text-pink-500 text-[10px] items-center gap-1">
          <Sparkles size={12} /> made with extra sprinkles
        </div>
      </div>
    </main>
  );
}
