import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { faqsList } from '../data/contentData';
import { Language } from '../types';

interface FAQSectionProps {
  lang: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [searchTerm, setSearchTerm] = useState('');

  const isHindi = lang === 'hi';

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqsList.filter((faq) => {
    const q = isHindi ? faq.questionHi : faq.questionEn;
    const a = isHindi ? faq.answerHi : faq.answerEn;
    return q.toLowerCase().includes(searchTerm.toLowerCase()) || a.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <section id="faq-section" className="my-12 scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full mb-1">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{isHindi ? 'अक्सर पूछे जाने वाले सवाल' : 'Frequently Asked Questions'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
            {isHindi ? 'सरकारी नौकरी और दिव्यांगता प्रतिशत से जुड़े महत्वपूर्ण प्रश्न' : 'Frequently Asked Questions on PwD Govt Job Criteria'}
          </h2>
        </div>

        {/* Search inside FAQs */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={isHindi ? 'प्रश्नों में खोजें...' : 'Search questions...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-stone-200 text-xs sm:text-sm bg-white focus:outline-none focus:border-amber-600"
          />
        </div>
      </div>

      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = openIds.includes(faq.id);
          const question = isHindi ? faq.questionHi : faq.questionEn;
          const answer = isHindi ? faq.answerHi : faq.answerEn;
          const tag = isHindi ? faq.categoryTagHi : faq.categoryTagEn;

          return (
            <div
              key={faq.id}
              className="rounded-xl border border-stone-200 bg-white overflow-hidden transition-all shadow-2xs hover:border-stone-300"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-4 sm:px-5 py-3.5 text-left flex items-start justify-between gap-3 focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-start gap-2.5">
                  <span className="inline-block mt-0.5 px-2 py-0.5 text-[11px] font-semibold text-stone-600 bg-stone-100 rounded">
                    {tag}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-stone-900 leading-snug">
                    {question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-stone-500 shrink-0 mt-1 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-amber-700' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-stone-100 bg-stone-50/40">
                  <p>{answer}</p>
                </div>
              )}
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <p className="text-center py-6 text-sm text-stone-500">
            {isHindi ? 'कोई सवाल नहीं मिला।' : 'No matching questions found.'}
          </p>
        )}
      </div>
    </section>
  );
};
