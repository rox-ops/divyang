import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  Calendar, 
  UserCheck, 
  Share2, 
  Award, 
  FileText, 
  BookOpen, 
  Scale, 
  Building2, 
  ArrowRight, 
  Info, 
  HeartHandshake, 
  BadgePercent,
  X,
  Clock,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Check
} from 'lucide-react';

import { Language } from './types';
import { 
  tocItems, 
  disabilityCategories, 
  all21DisabilitiesList, 
  govtBenefits, 
  stepByStepProcess, 
  examRules 
} from './data/contentData';

import { Header } from './components/Header';
import { TableOfContents } from './components/TableOfContents';
import { AdSlot } from './components/AdSlot';
import { EligibilityChecker } from './components/EligibilityChecker';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('hi');
  const [readingProgress, setReadingProgress] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>('core-answer');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState<boolean>(false);
  const [showAllDisabilities, setShowAllDisabilities] = useState<boolean>(false);

  const isHindi = lang === 'hi';

  // Toggle Language and update document lang attribute
  const toggleLanguage = () => {
    const nextLang = lang === 'hi' ? 'en' : 'hi';
    setLang(nextLang);
    document.documentElement.lang = nextLang;
  };

  // Scroll and reading progress listener
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.pageYOffset / totalScroll) * 100;
        setReadingProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Track active section for Table of Contents
      const sections = tocItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.pageYOffset + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tocItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic font size classes
  const contentFontSizeClass = {
    normal: 'text-base sm:text-[17px] leading-relaxed',
    large: 'text-lg sm:text-[19px] leading-relaxed',
    xlarge: 'text-xl sm:text-[22px] leading-relaxed'
  }[fontSize];

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-stone-900 selection:bg-amber-200 selection:text-amber-950 font-['Noto_Sans_Devanagari','Inter',sans-serif]">
      {/* Sticky Header with Reading Progress & Translation Toggle */}
      <Header
        lang={lang}
        onToggleLang={toggleLanguage}
        readingProgress={readingProgress}
        fontSize={fontSize}
        onChangeFontSize={setFontSize}
        onOpenMobileToc={() => setIsMobileTocOpen(true)}
      />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-16">
        
        {/* Top Notification / Ad Leaderboard Slot */}
        <AdSlot
          id="ad-slot-header-leaderboard"
          slotName="Header Leaderboard Banner"
          format="leaderboard"
          lang={lang}
        />

        {/* Article Breadcrumbs & Metadata Bar */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-stone-500 mb-4 overflow-x-auto whitespace-nowrap">
          <a href="#" className="hover:text-amber-800 transition-colors">
            {isHindi ? 'मुख्य पृष्ठ' : 'Home'}
          </a>
          <span>/</span>
          <a href="#" className="hover:text-amber-800 transition-colors">
            {isHindi ? 'सरकारी नौकरी एवं आरक्षण' : 'Govt Jobs & Reservation'}
          </a>
          <span>/</span>
          <span className="text-stone-800 font-medium">
            {isHindi ? 'विकलांगता प्रतिशत नियम' : 'Disability Percentage Norms'}
          </span>
        </nav>

        {/* PRIMARY ARTICLE HEADER (Strict SEO Focus) */}
        <article className="relative">
          <header className="mb-8 border-b border-stone-200 pb-8">
            {/* Topic Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 text-xs font-semibold mb-3 border border-amber-200/60">
              <Scale className="w-3.5 h-3.5 text-amber-700" />
              <span>
                {isHindi ? 'RPwD एक्ट 2016 व DoPT अधिकृत नियम' : 'RPwD Act 2016 & DoPT Official Rules'}
              </span>
            </div>

            {/* Main H1 Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-stone-900 tracking-tight leading-[1.25] sm:leading-[1.2] mb-4">
              {isHindi 
                ? 'सरकारी नौकरी के लिए कितना प्रतिशत विकलांग होना चाहिए? जानिए नियम, आरक्षण और सभी छूट'
                : 'How Much Percentage Disability is Required for Govt Jobs? Complete Rules, Reservation & Concessions'}
            </h1>

            {/* Sub-headline / Executive Summary */}
            <p className="text-base sm:text-lg text-stone-700 font-medium max-w-4xl leading-relaxed mb-5">
              {isHindi 
                ? 'भारत में केंद्र व राज्य सरकार की नौकरियों में दिव्यांग (PwD) कोटे का लाभ उठाने के लिए न्यूनतम 40% बेंचमार्क दिव्यांगता (Benchmark Disability) होना कानूनी रूप से अनिवार्य है। जानें 4% आरक्षण, 21 श्रेणियां, UDID कार्ड और 10-15 वर्ष आयु छूट की संपूर्ण जानकारी।'
                : 'Under Indian service rules, a minimum of 40% benchmark disability is legally required to claim the 4% PwD reservation in central and state government recruitments. Discover categories, UDID process, and age relaxation rules.'}
            </p>

            {/* Editorial Metadata */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-stone-600">
              <div className="flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-emerald-700" />
                <span>
                  {isHindi ? 'सत्यापित: भर्ती विशेषज्ञ समिति' : 'Verified: Recruitment Legal Committee'}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-amber-700" />
                <span>
                  {isHindi ? 'अंतिम अपडेट: 2025-2026 DoPT नियम अनुसार' : 'Last Updated: As per 2025-2026 DoPT Norms'}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-stone-500" />
                <span>
                  {isHindi ? 'पढ़ने का समय: 7 से 9 मिनट' : 'Estimated Read: 7-9 minutes'}
                </span>
              </div>
            </div>
          </header>

          {/* TWO COLUMN LAYOUT: Content on Left, Sticky TOC & Sidebar on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* LEFT MAIN ARTICLE COLUMN (8 cols) */}
            <main className={`lg:col-span-8 ${contentFontSizeClass} text-stone-800 space-y-10`}>
              
              {/* SECTION 1: CORE ANSWER */}
              <section id="core-answer" className="scroll-mt-24">
                <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/60 p-5 sm:p-7 shadow-xs">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-700 text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                      <BadgePercent className="w-6 h-6" />
                    </div>
                    <div className="space-y-3">
                      <h2 className="text-xl sm:text-2xl font-bold text-stone-950">
                        {isHindi 
                          ? 'सीधा और सटीक उत्तर: सरकारी नौकरी के लिए कम से कम 40% दिव्यांगता अनिवार्य है'
                          : 'The Direct Answer: Minimum 40% Disability is Statutorily Mandatory'}
                      </h2>
                      <p className="text-stone-800">
                        {isHindi ? (
                          <>
                            भारत सरकार के <strong>दिव्यांगजन अधिकार अधिनियम 2016 (Rights of Persons with Disabilities Act, 2016)</strong> की धारा 34 के अनुसार, किसी भी सरकारी भर्ती में दिव्यांग आरक्षण का लाभ लेने के लिए उम्मीदवार के पास अधिकृत सरकारी मेडिकल बोर्ड द्वारा प्रमाणित <strong>न्यूनतम 40% (चालीस प्रतिशत)</strong> या उससे अधिक की दिव्यांगता होनी चाहिए। कानून में इसे <strong>"बेंचमार्क दिव्यांगता" (Person with Benchmark Disability - PwBD)</strong> कहा जाता है।
                          </>
                        ) : (
                          <>
                            Under Section 34 of the <strong>Rights of Persons with Disabilities (RPwD) Act, 2016</strong>, to claim government job reservations and age concessions, a candidate must possess a certified <strong>minimum of 40% (forty percent)</strong> impairment issued by an authorized government medical board. In Indian law, this is officially designated as <strong>"Person with Benchmark Disability" (PwBD)</strong>.
                          </>
                        )}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="bg-white/90 rounded-xl p-3 border border-amber-100 flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-stone-900 text-sm block">
                              {isHindi ? '40% या उससे अधिक प्रतिशत' : '40% or Higher Impairment'}
                            </span>
                            <span className="text-xs text-stone-600">
                              {isHindi 
                                ? '4% कोटा, 10-15 वर्ष आयु छूट, शून्य आवेदन शुल्क, स्क्राइब सुविधा सभी लागू।' 
                                : 'Eligible for 4% quota, 10-15 yrs age relaxation, zero exam fee, scribe & extra time.'}
                            </span>
                          </div>
                        </div>

                        <div className="bg-white/90 rounded-xl p-3 border border-amber-100 flex items-start gap-2.5">
                          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-stone-900 text-sm block">
                              {isHindi ? '40% से कम प्रतिशत (उदा. 35%)' : 'Less than 40% (e.g., 35%)'}
                            </span>
                            <span className="text-xs text-stone-600">
                              {isHindi 
                                ? 'दिव्यांग कोटे का कोई लाभ नहीं मिलेगा। सामान्य मेरिट में आवेदन करना होगा।' 
                                : 'Ineligible for PwD quota. Must apply under unreserved or standard social category.'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* IN-ARTICLE AD SLOT 1 */}
              <AdSlot
                id="ad-slot-in-article-middle"
                slotName="In-Article Content Ad #1"
                format="in-article"
                lang={lang}
              />

              {/* SECTION 2: 4% RESERVATION CATEGORIES */}
              <section id="four-percent-quota" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
                  <Building2 className="w-5 h-5 text-amber-700" />
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    {isHindi 
                      ? 'सरकारी नौकरियों में 4% PwD आरक्षण और उसकी 5 प्रमुख श्रेणियां'
                      : '4% PwD Reservation Structure across 5 Functional Categories'}
                  </h2>
                </div>

                <p>
                  {isHindi 
                    ? 'RPwD एक्ट 2016 के लागू होने से पहले सरकारी नौकरियों में केवल 3% आरक्षण मिलता था, जिसे बढ़ाकर अब 4% कर दिया गया है। यह आरक्षण सीधी भर्ती (Direct Recruitment) में ग्रुप A, B, C और D के सभी पदों पर क्षैतिज (Horizontal Reservation) रूप से दिया जाता है। इसे निम्नलिखित 5 श्रेणियों में बांटा गया है:'
                    : 'Prior to the 2016 Act, reservation was pegged at 3%, which was raised to 4% across all Direct Recruitment posts in Groups A, B, C, and D. It functions horizontally across 5 distinct sub-allocations:'}
                </p>

                <div className="space-y-4 pt-2">
                  {disabilityCategories.map((cat, idx) => (
                    <div 
                      key={cat.code}
                      className="rounded-xl border border-stone-200 bg-white p-4 sm:p-5 shadow-2xs hover:border-amber-300 transition-colors"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-2 mb-3">
                        <span className="font-bold text-stone-900 text-base sm:text-lg">
                          {isHindi ? cat.titleHi : cat.titleEn}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold text-xs">
                          {cat.quotaPercent}
                        </span>
                      </div>

                      <div className="space-y-2 text-xs sm:text-sm">
                        <span className="font-semibold text-stone-800 block">
                          {isHindi ? 'शामिल दिव्यांगताएं:' : 'Covered Disabilities:'}
                        </span>
                        <ul className="list-disc pl-5 space-y-1 text-stone-700">
                          {(isHindi ? cat.subtypesHi : cat.subtypesEn).map((st, i) => (
                            <li key={i}>{st}</li>
                          ))}
                        </ul>
                        <p className="mt-2 text-stone-600 bg-stone-50 p-2 rounded-lg text-xs italic">
                          ℹ️ {isHindi ? cat.noteHi : cat.noteEn}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 3: 21 RECOGNIZED DISABILITIES */}
              <section id="recognized-disabilities" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
                  <FileText className="w-5 h-5 text-amber-700" />
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    {isHindi 
                      ? 'RPwD एक्ट 2016 के तहत 21 मान्यता प्राप्त दिव्यांगताएं'
                      : '21 Recognized Disabilities under the RPwD Act 2016'}
                  </h2>
                </div>

                <p>
                  {isHindi 
                    ? '1995 के पुराने कानून में केवल 7 प्रकार की दिव्यांगताएं शामिल थीं। 2016 के ऐतिहासिक कानून में भारत सरकार ने वैज्ञानिक दृष्टिकोण अपनाते हुए इसे बढ़ाकर 21 कर दिया। यदि आपका मेडिकल सर्टिफिकेट इनमें से किसी भी श्रेणी में 40% या अधिक प्रमाणित करता है, तो आप आरक्षण के हकदार हैं:'
                    : 'The old 1995 legislation recognized merely 7 disability types. The modernized 2016 Act expanded this list to 21 comprehensive medical conditions eligible for benchmark certification:'}
                </p>

                {/* 21 Disabilities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {all21DisabilitiesList
                    .slice(0, showAllDisabilities ? 21 : 10)
                    .map((item) => (
                      <div 
                        key={item.num}
                        className="flex items-center gap-2.5 p-3 rounded-lg border border-stone-200 bg-white text-xs sm:text-sm"
                      >
                        <span className="w-6 h-6 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center font-bold text-xs shrink-0">
                          {item.num}
                        </span>
                        <div className="min-w-0">
                          <span className="font-semibold text-stone-900 block truncate">
                            {isHindi ? item.hi : item.en}
                          </span>
                          <span className="text-[11px] text-amber-800 font-medium">
                            {isHindi ? item.groupHi : item.groupEn}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Show more/less button */}
                <button
                  onClick={() => setShowAllDisabilities(!showAllDisabilities)}
                  className="w-full py-2.5 px-4 rounded-xl border border-stone-300 bg-stone-50 hover:bg-stone-100 text-xs sm:text-sm font-semibold text-stone-800 transition-colors flex items-center justify-center gap-2"
                >
                  <span>
                    {showAllDisabilities
                      ? (isHindi ? 'कम दिखाएं (Show Less)' : 'Show Less')
                      : (isHindi ? `सभी 21 दिव्यांगताएं देखें (+${21 - 10} और)` : `View All 21 Disabilities (+${21 - 10} More)`)}
                  </span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${showAllDisabilities ? '-rotate-90' : 'rotate-90'}`} />
                </button>
              </section>

              {/* SECTION 4: 6 MAJOR CONCESSIONS & BENEFITS */}
              <section id="govt-job-benefits" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
                  <Award className="w-5 h-5 text-amber-700" />
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    {isHindi 
                      ? 'सरकारी नौकरी में मिलने वाली 6 सबसे बड़ी छूट और विशेष लाभ'
                      : '6 Major Statutory Concessions & Benefits in Govt Employment'}
                  </h2>
                </div>

                <p>
                  {isHindi 
                    ? '40% बेंचमार्क दिव्यांगता होने पर न केवल 4% आरक्षित पदों पर चयन का अवसर मिलता है, बल्कि आवेदन से लेकर सेवा निवृत्ति (रिटायरमेंट) तक कई असाधारण सुविधाएं मिलती हैं:'
                    : 'Attaining the 40% threshold unlocks comprehensive statutory entitlements extending from recruitment exams to career postings:'}
                </p>

                <div className="grid grid-cols-1 gap-4 pt-2">
                  {govtBenefits.map((benefit) => (
                    <div 
                      key={benefit.id}
                      className="rounded-xl border border-stone-200 bg-white p-4 sm:p-5 shadow-2xs hover:border-amber-300 transition-all"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-base sm:text-lg font-bold text-stone-900">
                          {isHindi ? benefit.titleHi : benefit.titleEn}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-bold text-xs">
                          {isHindi ? benefit.badgeHi : benefit.badgeEn}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-700 mb-3 font-medium">
                        {isHindi ? benefit.summaryHi : benefit.summaryEn}
                      </p>

                      <ul className="space-y-1.5 pl-4 border-l-2 border-amber-500/40 text-xs sm:text-sm text-stone-600">
                        {(isHindi ? benefit.detailsHi : benefit.detailsEn).map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 5: STEP-BY-STEP PROCESS FOR CERTIFICATE & UDID */}
              <section id="step-by-step-guide" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
                  <ShieldCheck className="w-5 h-5 text-amber-700" />
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    {isHindi 
                      ? 'स्टेप-बाय-स्टेप गाइड: 40% दिव्यांगता प्रमाण पत्र और UDID कार्ड कैसे बनवाएं?'
                      : 'Step-by-Step Guide: How to Obtain 40% Certificate & Digital UDID Card'}
                  </h2>
                </div>

                <p>
                  {isHindi 
                    ? 'सरकारी नौकरी के फॉर्म में केवल मुंहजबानी दावा मान्य नहीं होता। इसके लिए केंद्र सरकार के स्वावलंबन पोर्टल द्वारा जारी डिजिटल UDID कार्ड होना अनिवार्य है। यहाँ देखें पूरी आवेदन प्रक्रिया:'
                    : 'Job notifications require verified proof via a digital 18-digit UDID card. Here is the verified 4-step administrative workflow:'}
                </p>

                <div className="space-y-5 pt-2">
                  {stepByStepProcess.map((step) => (
                    <div 
                      key={step.stepNumber}
                      className="relative pl-6 sm:pl-8 border-l-2 border-amber-600/60 pb-4 last:pb-0"
                    >
                      {/* Step Circle Marker */}
                      <span className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-amber-700 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                        {step.stepNumber}
                      </span>

                      <div className="bg-white rounded-xl border border-stone-200 p-4 sm:p-5 shadow-2xs">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <h3 className="text-base sm:text-lg font-bold text-stone-900">
                            {isHindi ? step.titleHi : step.titleEn}
                          </h3>
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                            {isHindi ? step.durationHi : step.durationEn}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-stone-700 mb-3">
                          {isHindi ? step.descriptionHi : step.descriptionEn}
                        </p>

                        <div className="bg-stone-50 rounded-lg p-3 text-xs sm:text-sm space-y-1.5 mb-3">
                          <span className="font-semibold text-stone-900 block">
                            {isHindi ? 'मुख्य क्रियाएं (Action Items):' : 'Key Action Items:'}
                          </span>
                          <ul className="list-disc pl-4 space-y-1 text-stone-700">
                            {(isHindi ? step.actionItemsHi : step.actionItemsEn).map((action, idx) => (
                              <li key={idx}>{action}</li>
                            ))}
                          </ul>
                        </div>

                        {step.officialPortalUrl && (
                          <a
                            href={step.officialPortalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-700 text-white hover:bg-amber-800 text-xs font-semibold shadow-2xs transition-colors"
                          >
                            <span>{isHindi ? step.portalLabelHi : step.portalLabelEn}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* IN-ARTICLE AD SLOT 2 */}
              <AdSlot
                id="ad-slot-post-step-guide"
                slotName="Mid-Article Rectangular Unit"
                format="rectangle"
                lang={lang}
              />

              {/* SECTION 6: EXAM SPECIFIC RULES */}
              <section id="exam-specific-rules" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
                  <Scale className="w-5 h-5 text-amber-700" />
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    {isHindi 
                      ? 'विभिन्न प्रमुख सरकारी परीक्षाओं (UPSC, SSC, Railway, Bank) में विशेष नियम'
                      : 'Special Rules Across Major Recruiters (UPSC, SSC, RRB & Banking)'}
                  </h2>
                </div>

                <p>
                  {isHindi 
                    ? 'अलग-अलग आयोगों में दिव्यांग अभ्यर्थियों के लिए कुछ विशिष्ट छूट और कार्य-अनुकूलन (Job Functional Requirements) नियम निर्धारित होते हैं:'
                    : 'Recruitment boards maintain cadre-specific guidelines to balance functional job requirements with statutory quotas:'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {examRules.map((exam, idx) => (
                    <div 
                      key={idx}
                      className="rounded-xl border border-stone-200 bg-white p-4 sm:p-5 shadow-2xs flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="text-base font-bold text-stone-900 mb-2 text-amber-900">
                          {isHindi ? exam.nameHi : exam.nameEn}
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                          {isHindi ? exam.ruleHi : exam.ruleEn}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 7: INTERACTIVE ELIGIBILITY CHECKER */}
              <section id="eligibility-checker-wrapper" className="scroll-mt-24">
                <EligibilityChecker lang={lang} />
              </section>

              {/* SECTION 8: MEDICAL BOARD RULES & RE-ASSESSMENT */}
              <section id="medical-board-rules" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
                  <ShieldCheck className="w-5 h-5 text-amber-700" />
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    {isHindi 
                      ? 'मेडिकल बोर्ड, प्रतिशत गणना और प्रमाण पत्र की वैधता (Validity Rules)'
                      : 'Medical Board Evaluation, Percent Calculation & Validity Guidelines'}
                  </h2>
                </div>

                <p>
                  {isHindi 
                    ? 'सरकारी नौकरी के लिए मेडिकल बोर्ड जांच से जुड़ी इन तीन बातों को जानना हर अभ्यर्थी के लिए अति आवश्यक है:'
                    : 'Every candidate must be well aware of these statutory parameters regarding medical boards:'}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="rounded-xl border border-stone-200 bg-white p-4 text-xs sm:text-sm">
                    <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1">
                      {isHindi ? '1. स्थायी (Permanent) बनाम अस्थायी (Temporary) प्रमाण पत्र' : '1. Permanent vs Temporary Disability Certificates'}
                    </h3>
                    <p className="text-stone-700 leading-relaxed">
                      {isHindi 
                        ? 'यदि आपकी शारीरिक स्थिति ऐसी है जिसमें भविष्य में सुधार संभव नहीं है (जैसे अंग विच्छेदन या स्थायी दृष्टि दोष), तो बोर्ड स्थायी प्रमाण पत्र देता है जो आजीवन मान्य रहता है। यदि स्थिति में सुधार की संभावना हो (जैसे बच्चों में कुछ विकार या रिकवर होने वाली चोट), तो 1 से 5 वर्ष का अस्थायी प्रमाण पत्र दिया जाता है। एक्सपायरी से पहले री-असेसमेंट कराना आवश्यक है।'
                        : 'If an impairment is non-progressive with no clinical scope of recovery (e.g. amputation), a permanent certificate valid for life is issued. In conditions with potential for recovery or developmental progression, temporary certificates valid for 1-5 years are issued and require periodic re-assessment.'}
                    </p>
                  </div>

                  <div className="rounded-xl border border-stone-200 bg-white p-4 text-xs sm:text-sm">
                    <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1">
                      {isHindi ? '2. मेडिकल बोर्ड की संरचना और अधिकार' : '2. Medical Board Composition & Statutory Authority'}
                    </h3>
                    <p className="text-stone-700 leading-relaxed">
                      {isHindi 
                        ? 'प्रमाण पत्र केवल जिला अस्पताल के मुख्य चिकित्सा अधिकारी (CMO / Civil Surgeon) द्वारा अधिकृत मेडिकल बोर्ड ही जारी कर सकता है। किसी भी प्राइवेट डॉक्टर, अस्पताल या क्लिनिक द्वारा दिया गया प्रमाण पत्र सरकारी नौकरी में 100% अमान्य होता है।'
                        : 'Only a competent medical board constituted under the CMO / Chief Medical Officer / Medical Superintendent of a recognized district hospital possesses the statutory power to certify disability. Private clinic certificates are legally invalid for government recruitments.'}
                    </p>
                  </div>

                  <div className="rounded-xl border border-stone-200 bg-white p-4 text-xs sm:text-sm">
                    <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1">
                      {isHindi ? '3. अंतिम चयन से पहले भर्ती बोर्ड का विशेष मेडिकल टेस्ट' : '3. Pre-Appointment Verification Medical Test'}
                    </h3>
                    <p className="text-stone-700 leading-relaxed">
                      {isHindi 
                        ? 'अंतिम मेरिट सूची में नाम आने के बाद संबंधित विभाग (जैसे रेलवे, रक्षा या गृह मंत्रालय) अभ्यर्थी को अपने निर्दिष्ट सेंट्रल मेडिकल बोर्ड (उदा. AIIMS या रेलवे सेंट्रल हॉस्पिटल) में सत्यापन के लिए भेज सकता है ताकि प्रतिशत की दोबारा पुष्टि की जा सके।'
                        : 'Following recommendation in the final merit list, recruiting bodies (such as UPSC, Railways, Defence) mandate a final verification examination before their designated central medical board (e.g., AIIMS or central railway hospitals) to re-verify benchmark authenticity.'}
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 9: FREQUENTLY ASKED QUESTIONS */}
              <FAQSection lang={lang} />

              {/* SUMMARY BOX */}
              <div className="rounded-2xl border border-stone-300 bg-stone-100/70 p-5 sm:p-6 text-xs sm:text-sm text-stone-800">
                <h3 className="font-bold text-base text-stone-900 mb-2 flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-700" />
                  <span>{isHindi ? 'निष्कर्ष और अंतिम सलाह' : 'Conclusion & Strategic Takeaways'}</span>
                </h3>
                <p className="leading-relaxed mb-3">
                  {isHindi 
                    ? 'सरकारी नौकरी में आरक्षण के लिए न्यूनतम 40% बेंचमार्क दिव्यांगता ही एकमात्र वैधानिक पैमाना है। यदि आप इस मापदंड को पूरा करते हैं, तो अविलंब स्वावलंबन पोर्टल पर अपना UDID कार्ड बनवाएं और आगामी प्रतियोगी परीक्षाओं में आत्मविश्वास के साथ आवेदन करें।'
                    : 'The statutory 40% benchmark disability remains the indispensable threshold for claiming government job reservations in India. Secure your verified digital UDID card early and leverage the comprehensive concessions guaranteed under the RPwD Act 2016.'}
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-amber-900">
                  <span className="bg-white px-2.5 py-1 rounded-md border border-stone-200">
                    ✓ {isHindi ? 'न्यूनतम 40% अनिवार्य' : 'Min 40% Mandatory'}
                  </span>
                  <span className="bg-white px-2.5 py-1 rounded-md border border-stone-200">
                    ✓ {isHindi ? '4% क्षैतिज आरक्षण' : '4% Horizontal Quota'}
                  </span>
                  <span className="bg-white px-2.5 py-1 rounded-md border border-stone-200">
                    ✓ {isHindi ? '10-15 वर्ष आयु छूट' : '10-15 Yrs Age Relaxation'}
                  </span>
                  <span className="bg-white px-2.5 py-1 rounded-md border border-stone-200">
                    ✓ {isHindi ? 'डिजिटल UDID मान्य' : 'Digital UDID Card'}
                  </span>
                </div>
              </div>

            </main>

            {/* RIGHT SIDEBAR (4 cols) - Sticky TOC & Sidebar Ads */}
            <aside className="lg:col-span-4 space-y-6">
              
              {/* Desktop Sticky Table of Contents */}
              <div className="hidden lg:block sticky top-20">
                <TableOfContents
                  items={tocItems}
                  activeId={activeSection}
                  lang={lang}
                />

                {/* Quick Help Card */}
                <div className="mt-4 rounded-xl border border-amber-200/90 bg-amber-50/70 p-4 text-xs text-stone-800">
                  <div className="flex items-center gap-1.5 font-bold text-amber-950 mb-1">
                    <Info className="w-3.5 h-3.5 text-amber-700" />
                    <span>{isHindi ? 'महत्वपूर्ण हेल्पलाइन' : 'National Helpline'}</span>
                  </div>
                  <p className="text-stone-700 mb-2">
                    {isHindi 
                      ? 'UDID या दिव्यांग आरक्षण से संबंधित शिकायत के लिए टोल-फ्री कॉल करें:' 
                      : 'For UDID registration grievances or query escalation:'}
                  </p>
                  <a 
                    href="tel:1800112001" 
                    className="inline-block font-mono font-bold text-amber-800 bg-white px-2.5 py-1 rounded border border-amber-200 hover:bg-amber-100 transition-colors"
                  >
                    📞 1800-11-2001
                  </a>
                </div>

                {/* SIDEBAR ADSENSE PLACEHOLDER */}
                <AdSlot
                  id="ad-slot-sidebar-desktop"
                  slotName="Sidebar Sticky Rectangle Ad"
                  format="sidebar"
                  lang={lang}
                />
              </div>

            </aside>

          </div>
        </article>

        {/* BOTTOM FULL-WIDTH AD BANNER */}
        <div className="mt-12">
          <AdSlot
            id="ad-slot-footer-banner"
            slotName="Pre-Footer Responsive Banner"
            format="leaderboard"
            lang={lang}
          />
        </div>

      </div>

      {/* MOBILE TABLE OF CONTENTS DRAWER / MODAL */}
      {isMobileTocOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200"
          onClick={() => setIsMobileTocOpen(false)}
        >
          <div 
            className="w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-2xl p-5 max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-3">
              <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                <BookOpen className="w-4 h-4 text-amber-700" />
                <span>{isHindi ? 'विषय सूची (Table of Contents)' : 'Table of Contents'}</span>
              </div>
              <button 
                onClick={() => setIsMobileTocOpen(false)}
                className="w-7 h-7 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <TableOfContents
              items={tocItems}
              activeId={activeSection}
              lang={lang}
              onItemClick={() => setIsMobileTocOpen(false)}
            />
          </div>
        </div>
      )}

      {/* COMPREHENSIVE FOOTER WITH LINKS, STATUTORY REFERENCES & HELPLINES */}
      <Footer lang={lang} />
    </div>
  );
}
