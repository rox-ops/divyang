import React from 'react';
import { ListFilter, ChevronRight, CheckCircle2, BookOpen, Clock } from 'lucide-react';
import { TOCItem, Language } from '../types';

interface TableOfContentsProps {
  items: TOCItem[];
  activeId: string;
  lang: Language;
  onItemClick?: () => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
  activeId,
  lang,
  onItemClick
}) => {
  const isHindi = lang === 'hi';

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // account for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <nav 
      aria-label={isHindi ? "लेख की विषय सूची" : "Table of contents"} 
      className="rounded-2xl border border-stone-200 bg-stone-50/80 p-5 shadow-xs transition-all"
    >
      <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-3">
        <div className="flex items-center gap-2 text-stone-900 font-bold text-sm sm:text-base">
          <ListFilter className="w-4 h-4 text-amber-700" />
          <span>{isHindi ? 'विषय सूची (Table of Contents)' : 'Table of Contents'}</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] font-medium text-stone-500">
          <Clock className="w-3 h-3 text-stone-400" />
          <span>{isHindi ? '7 मिनट का समय' : '7 min read'}</span>
        </div>
      </div>

      <p className="text-[12px] text-stone-700 mb-3">
        {isHindi 
          ? 'किसी भी अनुभाग पर सीधे जाने के लिए नीचे दिए गए बिंदुओं पर क्लिक करें:' 
          : 'Click any topic below to jump directly to that section:'}
      </p>

      <ul className="space-y-1 text-xs sm:text-sm">
        {items.map((item) => {
          const isActive = activeId === item.id;
          const label = isHindi ? item.title : item.titleEn;

          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`group flex items-start gap-2 py-1.5 px-2.5 rounded-lg transition-all ${
                  isActive
                    ? 'bg-amber-100/90 text-amber-900 font-semibold shadow-xs'
                    : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100/80 font-normal'
                }`}
              >
                <ChevronRight 
                  className={`w-3.5 h-3.5 mt-0.5 shrink-0 transition-transform ${
                    isActive ? 'text-amber-700 translate-x-0.5' : 'text-stone-400 group-hover:text-stone-600'
                  }`} 
                />
                <span className="leading-snug">{label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
