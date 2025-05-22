'use client';

import Image from 'next/image';
import { Heart, Instagram, Music, Star, Sparkles } from 'lucide-react';

export default function Home() {
  const links = [
    { label: 'Instagram', icon: <Instagram size={18} />, url: '#' },
    { label: 'My Music', icon: <Music size={18} />, url: '#' },
    { label: 'Fanpage 💖', icon: <Star size={18} />, url: '#' },
  ];

  return (
    <main className="min-h-screen bg-pink-100 text-pink-800 flex items-center justify-center px-4 py-8 font-sans">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white border-4 border-pink-300 rounded-[30px] p-6 sm:p-8 shadow-[6px_6px_0px_#ff80ab] relative">
        <div className="absolute top-4 left-4 rotate-12 bg-yellow-200 text-yellow-800 px-2 py-1 text-xs sm:text-sm rounded-full">
          ✨NEW!
        </div>
        <div className="text-center mb-5">
          <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-3 relative rounded-full overflow-hidden border-4 border-pink-400">
            <Image
              src="/images/p1.jpg"
              alt="Kawaii"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">CutieNamaAnda</h1>
          <p className="text-sm sm:text-base text-pink-500">Kawaii Vibes Only 🧁🎀</p>
          <p className="text-sm sm:text-base mt-1 italic text-pink-400">
            {`"Spreading sparkles & smiles 💕"`}
          </p>
        </div>
        <div className="space-y-4">
          {links.map(({ label, icon, url }, i) => (
            <a
              key={i}
              href={url}
              className="block px-4 py-3 sm:px-5 sm:py-3.5 bg-pink-200 border border-pink-400 rounded-full text-center hover:bg-pink-300 transition text-base sm:text-lg font-semibold shadow-inner"
            >
              <div className="flex justify-center gap-2 items-center">{icon} {label}</div>
            </a>
          ))}
        </div>
        <div className="flex justify-center mt-6 text-pink-500 text-xs sm:text-sm items-center gap-1">
          <Sparkles size={14} /> made with extra sprinkles
        </div>
      </div>
    </main>
  );
}
