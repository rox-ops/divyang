import React from 'react';
import { ExternalLink, Phone, ShieldCheck, HeartHandshake, FileText, Globe } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isHindi = lang === 'hi';

  return (
    <footer id="official-links" className="mt-16 border-t border-stone-200 bg-stone-100/90 text-stone-700 pt-12 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Official Links & Grievance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-stone-200">
          <div>
            <div className="flex items-center gap-2 text-stone-900 font-bold text-base mb-3">
              <Globe className="w-4 h-4 text-amber-700" />
              <span>{isHindi ? 'आधिकारिक सरकारी पोर्टल्स' : 'Official Govt Portals'}</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a 
                  href="https://www.swavlambancard.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-stone-800 hover:text-amber-800 font-medium hover:underline"
                >
                  <span>{isHindi ? 'स्वावलंबन पोर्टल (UDID कार्ड आवेदन)' : 'Swavlamban Portal (UDID Apply)'}</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://disabilityaffairs.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-stone-800 hover:text-amber-800 font-medium hover:underline"
                >
                  <span>{isHindi ? 'दिव्यांगजन सशक्तिकरण विभाग (DEPwD)' : 'Dept of Empowerment of Persons with Disabilities'}</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://dopt.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-stone-800 hover:text-amber-800 font-medium hover:underline"
                >
                  <span>{isHindi ? 'कार्मिक एवं प्रशिक्षण विभाग (DoPT - भर्ती नियम)' : 'DoPT Official Website (Recruitment Rules)'}</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://upsc.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-stone-800 hover:text-amber-800 font-medium hover:underline"
                >
                  <span>{isHindi ? 'संघ लोक सेवा आयोग (UPSC PwD दिशानिर्देश)' : 'UPSC PwD Guidelines & Notifications'}</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 text-stone-900 font-bold text-base mb-3">
              <Phone className="w-4 h-4 text-amber-700" />
              <span>{isHindi ? 'हेल्पलाइन एवं सहायता केंद्र' : 'National Helplines & Support'}</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 mb-3 leading-relaxed">
              {isHindi 
                ? 'यदि किसी भी सरकारी भर्ती में आरक्षण या स्क्राइब से संबंधित कोई कठिनाई हो तो राष्ट्रीय हेल्पडेस्क पर संपर्क करें:'
                : 'For grievances concerning reservation, scribe denial, or exam accessibility, contact national helpdesks:'}
            </p>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div className="flex items-center justify-between bg-white px-3 py-1.5 rounded-lg border border-stone-200">
                <span className="font-semibold text-stone-800">{isHindi ? 'टोल-फ्री हेल्पलाइन' : 'Toll-Free Helpline'}:</span>
                <span className="font-mono font-bold text-amber-800">1800-11-2001</span>
              </div>
              <div className="flex items-center justify-between bg-white px-3 py-1.5 rounded-lg border border-stone-200">
                <span className="font-semibold text-stone-800">{isHindi ? 'किरण मानसिक स्वास्थ्य हेल्पलाइन' : 'KIRAN Mental Health'}:</span>
                <span className="font-mono font-bold text-amber-800">1800-599-0019</span>
              </div>
              <div className="flex items-center justify-between bg-white px-3 py-1.5 rounded-lg border border-stone-200">
                <span className="font-semibold text-stone-800">{isHindi ? 'स्वावलंबन सपोर्ट ईमेल' : 'UDID Support Email'}:</span>
                <span className="font-mono text-xs text-stone-700">support@swavlambancard.gov.in</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-stone-900 font-bold text-base mb-3">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>{isHindi ? 'कानूनी वैधानिक संदर्भ' : 'Statutory Legal References'}</span>
            </div>
            <ul className="space-y-1.5 text-xs text-stone-600">
              <li>• Rights of Persons with Disabilities Act (RPwD Act, 2016) - Section 34</li>
              <li>• DoPT Office Memorandum No. 36035/02/2017-Estt (Res)</li>
              <li>• Ministry of Social Justice & Empowerment Gazette Guidelines 2018</li>
              <li>• Supreme Court Judgment in Union of India vs. National Federation of the Blind (2013)</li>
            </ul>
          </div>
        </div>

        {/* SEO Keywords Cloud */}
        <div className="py-6 border-b border-stone-200">
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-2">
            {isHindi ? 'महत्वपूर्ण कीवर्ड्स (SEO Keywords)' : 'Relevant Keywords (SEO):'}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {[
              'सरकारी नौकरी के लिए कितना प्रतिशत विकलांग होना चाहिए',
              'सरकारी नौकरी में दिव्यांग आरक्षण प्रतिशत',
              '40 प्रतिशत विकलांगता नियम 2025',
              'PwD Quota in Govt Jobs',
              'UDID कार्ड ऑनलाइन आवेदन',
              'RPwD Act 2016 सरकारी भर्ती नियम',
              'दिव्यांगों के लिए आयु सीमा में छूट',
              'विकलांग कोटा परीक्षा शुल्क छूट',
              'स्क्राइब और क्षतिपूरक समय नियम DoPT',
              'UPSC SSC PwD Reservation Policy',
              'सरकारी नौकरी 4 प्रतिशत दिव्यांग आरक्षण',
              'Disability Certificate 40 percent benchmark',
            ].map((keyword, idx) => (
              <span 
                key={idx}
                className="text-[11px] bg-white border border-stone-200 text-stone-600 px-2 py-0.5 rounded-md"
              >
                #{keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-6 text-center text-xs text-stone-500 space-y-2">
          <p className="max-w-3xl mx-auto leading-relaxed">
            {isHindi 
              ? 'अस्वीकरण (Disclaimer): यह वेबसाइट विशुद्ध रूप से शैक्षणिक एवं मार्गदर्शन के उद्देश्य से तैयार की गई है। सभी जानकारी RPwD अधिनियम 2016, DoPT के आधिकारिक ज्ञापनों और भारत सरकार के गजट पर आधारित है। किसी भी भर्ती में आवेदन करने से पूर्व संबंधित आयोग/विभाग के आधिकारिक भर्ती विज्ञापन की पुष्टि अवश्य करें।'
              : 'Disclaimer: This platform is created purely for educational and career advisory purposes. Rules are grounded in the RPwD Act 2016, DoPT circulars, and the Gazette of India. Candidates are advised to cross-check latest notices in official recruitment notifications.'}
          </p>
          <p className="font-medium text-stone-600">
            © {new Date().getFullYear()} दिव्यांग सरकारी रोजगार मार्गदर्शन पोर्टल | Cloudflare Pages Ready & Mobile Optimized
          </p>
        </div>
      </div>
    </footer>
  );
};
