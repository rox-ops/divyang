import React, { useState } from 'react';
import { Calculator, CheckCircle2, AlertTriangle, XCircle, Info, Sparkles, Clock, FileCheck } from 'lucide-react';
import { Language } from '../types';

interface EligibilityCheckerProps {
  lang: Language;
}

export const EligibilityChecker: React.FC<EligibilityCheckerProps> = ({ lang }) => {
  const [percentage, setPercentage] = useState<number>(45);
  const [disabilityType, setDisabilityType] = useState<string>('locomotor');
  const [socialCategory, setSocialCategory] = useState<string>('general');
  const [hasUDID, setHasUDID] = useState<string>('yes');

  const isHindi = lang === 'hi';

  const isEligible = percentage >= 40;

  // Age relaxation calculation
  let ageRelaxation = 0;
  if (isEligible) {
    if (socialCategory === 'general' || socialCategory === 'ews') {
      ageRelaxation = 10;
    } else if (socialCategory === 'obc') {
      ageRelaxation = 13;
    } else if (socialCategory === 'sc' || socialCategory === 'st') {
      ageRelaxation = 15;
    }
  }

  // Scribe entitlement
  const isScribeLikely = 
    isEligible && 
    (disabilityType === 'visual' || 
     disabilityType === 'cerebral' || 
     disabilityType === 'locomotor_upper' || 
     disabilityType === 'multiple' || 
     percentage >= 80);

  return (
    <div id="eligibility-checker" className="my-10 rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="flex items-center gap-2.5 border-b border-stone-100 pb-4 mb-5">
        <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900">
            {isHindi ? 'इंटरैक्टिव दिव्यांगता पात्रता चेकर (PwD Eligibility Calculator)' : 'Interactive PwD Govt Job Eligibility Calculator'}
          </h3>
          <p className="text-xs sm:text-sm text-stone-700">
            {isHindi 
              ? 'अपना प्रतिशत और श्रेणी चुनें और तुरंत जानें कि आपको कौन-सी सरकारी नौकरी छूट मिलेंगी।' 
              : 'Select your disability percentage and category to instantly evaluate qualifying concessions.'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-6">
        {/* Percentage Input */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="disability-percentage-slider" className="text-xs sm:text-sm font-semibold text-stone-800">
              {isHindi ? 'दिव्यांगता प्रतिशत (Disability %):' : 'Disability Percentage (%):'}
            </label>
            <span className={`text-base font-bold px-3 py-0.5 rounded-full ${
              isEligible ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
            }`}>
              {percentage}%
            </span>
          </div>
          <input
            id="disability-percentage-slider"
            type="range"
            min="10"
            max="100"
            step="1"
            value={percentage}
            onChange={(e) => setPercentage(Number(e.target.value))}
            className="w-full accent-amber-700 h-2 bg-stone-200 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-stone-600 mt-1">
            <span>10%</span>
            <span className="font-bold text-amber-900">न्यूनतम 40% बेंचमार्क</span>
            <span>100%</span>
          </div>
        </div>

        {/* Disability Type Selection */}
        <div>
          <label htmlFor="disability-type-select" className="block text-xs sm:text-sm font-semibold text-stone-800 mb-1.5">
            {isHindi ? 'दिव्यांगता का प्रकार (Type of Disability):' : 'Disability Category:'}
          </label>
          <select
            id="disability-type-select"
            value={disabilityType}
            onChange={(e) => setDisabilityType(e.target.value)}
            className="w-full rounded-lg border border-stone-300 bg-stone-50/50 p-2 text-xs sm:text-sm text-stone-900 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
          >
            <option value="locomotor">{isHindi ? 'लोकोमोटर / हड्डी या मांसपेशियों की दिव्यांगता (OA, OL)' : 'Locomotor Disability (OA, OL)'}</option>
            <option value="locomotor_upper">{isHindi ? 'हाथ या लेखन अंग प्रभावित (OAL, BL, Both Arms)' : 'Arms Affected / Writing Impaired'}</option>
            <option value="visual">{isHindi ? 'दृष्टिबाधित / कम दृष्टि (Blindness / Low Vision)' : 'Visual Impairment / Low Vision'}</option>
            <option value="hearing">{isHindi ? 'मूक एवं बधिर (Deaf / Hard of Hearing)' : 'Hearing Impairment (Deaf / HH)'}</option>
            <option value="cerebral">{isHindi ? 'सेरेब्रल पाल्सी (Cerebral Palsy)' : 'Cerebral Palsy'}</option>
            <option value="intellectual">{isHindi ? 'बौद्धिक या सीखने की अक्षमता (Dyslexia/ID)' : 'Intellectual / Learning Disability'}</option>
            <option value="multiple">{isHindi ? 'बहु-दिव्यांगता (Multiple Disabilities)' : 'Multiple Disabilities'}</option>
          </select>
        </div>

        {/* Social Category Selection */}
        <div>
          <label htmlFor="social-category-select" className="block text-xs sm:text-sm font-semibold text-stone-800 mb-1.5">
            {isHindi ? 'आपकी मूल सामाजिक श्रेणी (Social Category):' : 'Social Category:'}
          </label>
          <select
            id="social-category-select"
            value={socialCategory}
            onChange={(e) => setSocialCategory(e.target.value)}
            className="w-full rounded-lg border border-stone-300 bg-stone-50/50 p-2 text-xs sm:text-sm text-stone-900 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
          >
            <option value="general">{isHindi ? 'सामान्य / अनारक्षित (General / UR)' : 'General / Unreserved (UR)'}</option>
            <option value="ews">{isHindi ? 'आर्थिक रूप से कमजोर वर्ग (EWS)' : 'Economically Weaker Section (EWS)'}</option>
            <option value="obc">{isHindi ? 'अन्य पिछड़ा वर्ग (OBC Non-Creamy Layer)' : 'Other Backward Class (OBC-NCL)'}</option>
            <option value="sc">{isHindi ? 'अनुसूचित जाति (SC)' : 'Scheduled Caste (SC)'}</option>
            <option value="st">{isHindi ? 'अनुसूचित जनजाति (ST)' : 'Scheduled Tribe (ST)'}</option>
          </select>
        </div>

        {/* UDID Status */}
        <div>
          <label htmlFor="udid-status-select" className="block text-xs sm:text-sm font-semibold text-stone-800 mb-1.5">
            {isHindi ? 'क्या आपके पास UDID कार्ड या मेडिकल प्रमाण पत्र है?' : 'Do you possess a UDID Card or Certificate?'}
          </label>
          <select
            id="udid-status-select"
            value={hasUDID}
            onChange={(e) => setHasUDID(e.target.value)}
            className="w-full rounded-lg border border-stone-300 bg-stone-50/50 p-2 text-xs sm:text-sm text-stone-900 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
          >
            <option value="yes">{isHindi ? 'हाँ, वैध UDID कार्ड / मेडिकल सर्टिफिकेट उपलब्ध है' : 'Yes, valid UDID / Certificate ready'}</option>
            <option value="applied">{isHindi ? 'आवेदन किया हुआ है, जारी होना शेष है' : 'Applied, under assessment'}</option>
            <option value="no">{isHindi ? 'नहीं, अभी तक नहीं बनवाया है' : 'No, not yet applied'}</option>
          </select>
        </div>
      </div>

      {/* Result Display Box */}
      <div className={`rounded-xl border p-4 sm:p-5 transition-all ${
        isEligible 
          ? 'border-emerald-200 bg-emerald-50/70 text-emerald-950' 
          : 'border-red-200 bg-red-50/70 text-red-950'
      }`}>
        <div className="flex items-start gap-3">
          {isEligible ? (
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
          ) : (
            <XCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
          )}

          <div className="space-y-3 w-full">
            <div>
              <h4 className="text-base sm:text-lg font-bold">
                {isEligible ? (
                  isHindi 
                    ? `बधाई! आपका ${percentage}% दिव्यांगता सरकारी नौकरी 4% PwD आरक्षण के लिए पूर्णतः पात्र है।`
                    : `Eligible! Your ${percentage}% disability qualifies for 4% PwD Govt Job Reservation.`
                ) : (
                  isHindi 
                    ? `अपात्र: ${percentage}% दिव्यांगता पर 4% PwD आरक्षण का लाभ नहीं मिलेगा।`
                    : `Ineligible: ${percentage}% disability falls below the mandatory 40% benchmark.`
                )}
              </h4>
              <p className="text-xs sm:text-sm mt-1 text-stone-700">
                {isEligible ? (
                  isHindi 
                    ? 'RPwD एक्ट 2016 की धारा 34 के अनुसार न्यूनतम 40% बेंचमार्क शर्त पूरी होती है।'
                    : 'Satisfies statutory benchmark criterion under Section 34 of RPwD Act 2016.'
                ) : (
                  isHindi 
                    ? 'सरकारी नौकरी में दिव्यांग कोटे के लिए न्यूनतम 40% होना अनिवार्य है। आप सामान्य नियमों के तहत अपनी मूल सामाजिक श्रेणी में आवेदन कर सकते हैं।'
                    : 'Minimum 40% benchmark is statutory. You may still apply under regular open merit or your social category.'
                )}
              </p>
            </div>

            {isEligible && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2 border-t border-emerald-200/60">
                <div className="bg-white/80 rounded-lg p-2.5 border border-emerald-100">
                  <span className="text-[11px] font-semibold text-emerald-800 uppercase block">
                    {isHindi ? 'आयु सीमा में अतिरिक्त छूट' : 'Age Relaxation'}
                  </span>
                  <span className="text-base font-bold text-emerald-950">
                    +{ageRelaxation} {isHindi ? 'वर्ष' : 'Years'}
                  </span>
                  <span className="text-[11px] text-stone-600 block mt-0.5">
                    {isHindi ? `(आपकी श्रेणी ${socialCategory.toUpperCase()} के अनुसार)` : `(Under ${socialCategory.toUpperCase()})`}
                  </span>
                </div>

                <div className="bg-white/80 rounded-lg p-2.5 border border-emerald-100">
                  <span className="text-[11px] font-semibold text-emerald-800 uppercase block">
                    {isHindi ? 'परीक्षा आवेदन शुल्क' : 'Exam Application Fee'}
                  </span>
                  <span className="text-base font-bold text-emerald-950">
                    100% {isHindi ? 'निःशुल्क (Zero Fee)' : 'Free (Exempt)'}
                  </span>
                  <span className="text-[11px] text-stone-600 block mt-0.5">
                    {isHindi ? 'UPSC, SSC, रेलवे व बैंकों में' : 'Across UPSC, SSC, RRB, IBPS'}
                  </span>
                </div>

                <div className="bg-white/80 rounded-lg p-2.5 border border-emerald-100">
                  <span className="text-[11px] font-semibold text-emerald-800 uppercase block">
                    {isHindi ? 'स्क्राइब व अतिरिक्त समय' : 'Scribe & Compensatory Time'}
                  </span>
                  <span className="text-sm font-bold text-emerald-950 block">
                    {isScribeLikely 
                      ? (isHindi ? 'स्क्राइब + 20 मिनट/घंटा अनुमत' : 'Scribe + 20 min/hr Permitted')
                      : (isHindi ? '20 मिनट/घंटा अतिरिक्त समय' : '20 min/hr Extra Time')}
                  </span>
                  <span className="text-[11px] text-stone-600 block mt-0.5">
                    {isHindi ? 'परीक्षा अवधि में क्षतिपूरक समय' : 'Compensatory exam time'}
                  </span>
                </div>
              </div>
            )}

            {hasUDID === 'no' && (
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-amber-100/90 text-amber-950 text-xs mt-2">
                <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
                <span>
                  {isHindi 
                    ? 'सलाह: आरक्षण का लाभ उठाने के लिए तुरंत स्वावलंबन पोर्टल (www.swavlambancard.gov.in) पर UDID कार्ड के लिए आवेदन करें।'
                    : 'Tip: Apply immediately on www.swavlambancard.gov.in to acquire your mandatory digital UDID card.'}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
