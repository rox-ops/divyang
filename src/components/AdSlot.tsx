import React from 'react';
import { Language } from '../types';

interface AdSlotProps {
  id: string;
  slotName: string;
  format?: 'leaderboard' | 'rectangle' | 'in-article' | 'sidebar';
  lang: Language;
}

export const AdSlot: React.FC<AdSlotProps> = ({ id, slotName, format = 'rectangle', lang }) => {
  const isHindi = lang === 'hi';

  const formatStyles = {
    leaderboard: 'min-h-[100px] sm:min-h-[120px] max-w-4xl mx-auto my-6',
    rectangle: 'min-h-[250px] max-w-xl mx-auto my-6',
    'in-article': 'min-h-[140px] my-8 w-full',
    sidebar: 'min-h-[280px] w-full my-4'
  };

  return (
    <aside 
      id={id} 
      aria-label="Advertisement" 
      className={`relative overflow-hidden rounded-xl border border-stone-200/80 bg-stone-50/70 p-4 text-center transition-all ${formatStyles[format]}`}
    >
      {/* 
        =======================================================================
        GOOGLE ADSENSE / CLOUDFLARE PAGES AD SLOT PLACEMENT:
        To activate real ads, replace the inner preview container below with your
        AdSense <ins class="adsbygoogle" ...></ins> code and script snippet.
        Slot ID: ${id} | Format: ${format}
        =======================================================================
      */}
      <div className="flex items-center justify-between border-b border-stone-200/60 pb-2 mb-2">
        <span className="text-[11px] font-semibold tracking-wider text-stone-500 uppercase">
          {isHindi ? 'विज्ञापन / प्रायोजित' : 'Advertisement / Sponsored'}
        </span>
        <span className="text-[11px] text-stone-600 font-mono">
          Ad Slot #{id}
        </span>
      </div>

      <div className="flex flex-col items-center justify-center py-4 px-2 border-2 border-dashed border-stone-200 rounded-lg bg-white/50">
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-50 text-amber-700 font-bold text-xs mb-1.5">
          Ad
        </div>
        <p className="text-xs font-medium text-stone-600">
          {isHindi 
            ? `${slotName} (भविष्य में गूगल एडसेंस विज्ञापन यहाँ प्रदर्शित होगा)`
            : `${slotName} (Google AdSense ad unit will render here)`}
        </p>
        <p className="text-[11px] text-stone-600 mt-1 max-w-md">
          {isHindi 
            ? 'क्लाउडफ्लेयर पेजेस या किसी भी होस्टिंग पर डिप्लॉय करते समय यहाँ अपना AdSense कोड आसानी से पेस्ट करें।'
            : 'Ready for Cloudflare Pages deployment. Replace with your responsive AdSense script.'}
        </p>
      </div>
    </aside>
  );
};
