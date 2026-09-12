import React from 'react';
import { Languages, Printer, Bookmark, Sparkles, BookOpen, Share2, Check } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  readingProgress: number;
  fontSize: 'normal' | 'large' | 'xlarge';
  onChangeFontSize: (size: 'normal' | 'large' | 'xlarge') => void;
  onOpenMobileToc: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  readingProgress,
  fontSize,
  onChangeFontSize,
  onOpenMobileToc,
}) => {
  const [copied, setCopied] = React.useState(false);
  const isHindi = lang === 'hi';

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: isHindi 
          ? 'सरकारी नौकरी के लिए कितना प्रतिशत विकलांग होना चाहिए?'
          : 'What percentage of disability is required for government jobs?',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-50 bg-[#fcfbf9]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      {/* Top Reading Progress Bar */}
      <div 
        role="progressbar"
        aria-valuenow={Math.round(readingProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={isHindi ? "लेख पढ़ने की प्रगति" : "Reading Progress"}
        className="w-full h-1 bg-stone-200/80"
      >
        <div 
          className="h-full bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 transition-[width] duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand / Title */}
        <div className="flex items-center gap-2.5 min-w-0">
          <a href="#" className="flex items-center gap-2.5 focus:outline-none group">
            <span className="w-9 h-9 rounded-lg bg-amber-700 text-white flex items-center justify-center font-bold text-base shadow-sm group-hover:bg-amber-800 transition-colors shrink-0">
              दिव्यांग
            </span>
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-base font-bold text-stone-900 tracking-tight truncate group-hover:text-amber-800 transition-colors">
                {isHindi ? 'दिव्यांग रोजगार मार्गदर्शन' : 'PwD Govt Career Hub'}
              </span>
              <span className="text-[11px] text-stone-700 hidden sm:inline truncate">
                {isHindi ? 'RPwD एक्ट 2016 व DoPT प्रमाणित जानकारी' : 'RPwD Act 2016 & DoPT Verified Portal'}
              </span>
            </div>
          </a>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Quick TOC Button for Mobile */}
          <button
            onClick={onOpenMobileToc}
            className="lg:hidden inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-100 text-xs font-medium transition-colors"
            title={isHindi ? 'विषय सूची देखें' : 'View Table of Contents'}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-700" />
            <span className="hidden xs:inline">{isHindi ? 'विषय सूची' : 'Contents'}</span>
          </button>

          {/* Font Size Adjuster (Low-vision accessible) */}
          <div className="hidden md:flex items-center border border-stone-200 rounded-lg p-0.5 bg-stone-100/60 text-xs text-stone-600">
            <button
              onClick={() => onChangeFontSize('normal')}
              className={`px-2 py-1 rounded transition-colors ${fontSize === 'normal' ? 'bg-white font-bold text-stone-900 shadow-xs' : 'hover:text-stone-900'}`}
              title={isHindi ? 'सामान्य फॉन्ट साइज़' : 'Normal font size'}
            >
              A
            </button>
            <button
              onClick={() => onChangeFontSize('large')}
              className={`px-2 py-1 rounded transition-colors ${fontSize === 'large' ? 'bg-white font-bold text-stone-900 shadow-xs' : 'hover:text-stone-900'}`}
              title={isHindi ? 'बड़ा फॉन्ट साइज़' : 'Large font size'}
            >
              A+
            </button>
            <button
              onClick={() => onChangeFontSize('xlarge')}
              className={`px-2 py-1 rounded transition-colors ${fontSize === 'xlarge' ? 'bg-white font-bold text-stone-900 shadow-xs' : 'hover:text-stone-900'}`}
              title={isHindi ? 'अति-बड़ा फॉन्ट साइज़' : 'Extra large font size'}
            >
              A++
            </button>
          </div>

          {/* Print Article Button */}
          <button
            onClick={handlePrint}
            className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-stone-200 text-stone-700 hover:bg-stone-100 text-xs transition-colors"
            title={isHindi ? 'यह लेख प्रिंट / PDF सेव करें' : 'Print / Save Article'}
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{isHindi ? 'प्रिंट' : 'Print'}</span>
          </button>

          {/* Share Article Button */}
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-stone-200 text-stone-700 hover:bg-stone-100 text-xs transition-colors"
            title={isHindi ? 'शेयर करें' : 'Share link'}
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">{copied ? (isHindi ? 'कॉपी हुआ!' : 'Copied!') : (isHindi ? 'शेयर' : 'Share')}</span>
          </button>

          {/* BILINGUAL TRANSLATE BUTTON (Hindi <-> English) */}
          <button
            onClick={onToggleLang}
            id="translate-button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
            aria-label={isHindi ? "Switch page language to English" : "पेज की भाषा बदलकर हिंदी करें"}
          >
            <Languages className="w-4 h-4 text-amber-200" />
            <span>
              {isHindi ? 'English में पढ़ें' : 'हिंदी में पढ़ें'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
