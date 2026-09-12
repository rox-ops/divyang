import { DisabilityCategory, BenefitItem, StepGuideItem, FAQItem, TOCItem } from '../types';

export const tocItems: TOCItem[] = [
  { id: 'core-answer', title: '1. मुख्य उत्तर: कितना प्रतिशत अनिवार्य है?', titleEn: '1. Core Answer: Required Percentage' },
  { id: 'four-percent-quota', title: '2. 4% PwD आरक्षण की 5 श्रेणियां', titleEn: '2. 5 Categories of 4% PwD Reservation' },
  { id: 'recognized-disabilities', title: '3. RPwD एक्ट की 21 मान्यता प्राप्त दिव्यांगताएं', titleEn: '3. 21 Recognized Disabilities under RPwD Act' },
  { id: 'govt-job-benefits', title: '4. सरकारी नौकरी में मिलने वाली 6 बड़ी छूट व लाभ', titleEn: '4. 6 Major Concessions & Benefits in Govt Jobs' },
  { id: 'step-by-step-guide', title: '5. स्टेप-बाय-स्टेप: UDID कार्ड व प्रमाण पत्र बनवाने की प्रक्रिया', titleEn: '5. Step-by-Step: UDID Card & Certificate Process' },
  { id: 'exam-specific-rules', title: '6. UPSC, SSC, रेलवे और बैंकिंग के विशेष नियम', titleEn: '6. Rules for UPSC, SSC, Railways & Banking' },
  { id: 'eligibility-checker', title: '7. इंटरैक्टिव दिव्यांगता पात्रता कैलकुलेटर', titleEn: '7. Interactive PwD Eligibility Checker' },
  { id: 'medical-board-rules', title: '8. मेडिकल बोर्ड जांच, री-असेसमेंट व वैधता नियम', titleEn: '8. Medical Board Rules & Validity' },
  { id: 'faq-section', title: '9. अक्सर पूछे जाने वाले सवाल (FAQ)', titleEn: '9. Frequently Asked Questions (FAQ)' },
  { id: 'official-links', title: '10. सरकारी पोर्टल, हेल्पलाइन व शिकायत निवारण', titleEn: '10. Official Portals & Grievance Helpline' },
];

export const disabilityCategories: DisabilityCategory[] = [
  {
    code: 'Cat-A',
    quotaPercent: '1% आरक्षण',
    titleHi: 'श्रेणी (ए): दृष्टिबाधित (Blindness & Low Vision)',
    titleEn: 'Category (A): Visual Impairment (VI)',
    subtypesHi: [
      'पूर्ण अंधापन (Total Blindness)',
      'कम दृष्टि / आंशिक दृष्टिबाधित (Low Vision - विजन 6/18 से कम या दृश्य क्षेत्र 40 डिग्री से कम)'
    ],
    subtypesEn: [
      'Total Blindness',
      'Low Vision (Visual acuity less than 6/18 or visual field less than 40 degrees)'
    ],
    noteHi: 'प्रशासनिक व शैक्षणिक पदों पर 1% आरक्षित। कंप्यूटर आधारित परीक्षणों में मैग्निफायर, स्क्रीन रीडर व स्क्राइब की सुविधा मिलती है।',
    noteEn: '1% reserved in administrative & teaching posts. Provided with screen reader, magnifier, and scribe in exams.'
  },
  {
    code: 'Cat-B',
    quotaPercent: '1% आरक्षण',
    titleHi: 'श्रेणी (बी): मूक एवं बधिर (Deaf & Hard of Hearing)',
    titleEn: 'Category (B): Hearing Impairment (HI / HH)',
    subtypesHi: [
      'बहरापन (Deafness - दोनों कानों में बातचीत की आवृत्तियों में 70 dB या उससे अधिक श्रवण हानि)',
      'सुनने में भारी कठिनाई (Hard of Hearing - दोनों कानों में 60 dB से 70 dB श्रवण हानि)'
    ],
    subtypesEn: [
      'Deafness (70 dB or greater hearing loss in speech frequencies in both ears)',
      'Hard of Hearing (60 dB to 70 dB hearing loss in conversational frequencies)'
    ],
    noteHi: 'इंटरव्यू व मौखिक परीक्षाओं में सांकेतिक भाषा (Sign Language) दुभाषिया की अनुमति होती है।',
    noteEn: 'Permitted to use sign language interpreters during oral examinations and job interviews.'
  },
  {
    code: 'Cat-C',
    quotaPercent: '1% आरक्षण',
    titleHi: 'श्रेणी (सी): चलन निशक्तता (Locomotor Disability & Orthopedic)',
    titleEn: 'Category (C): Locomotor Disability (LD / OH)',
    subtypesHi: [
      'चलन दिव्यांगता (हड्डियों, जोड़ों या मांसपेशियों की अक्षमता - OA, OL, OAL, BL आदि)',
      'कुष्ठ रोग मुक्त (Leprosy Cured Persons)',
      'बौनापन (Dwarfism - वयस्क कद 4 फीट 10 इंच (147 सेमी) या उससे कम)',
      'एसिड अटैक पीड़ित (Acid Attack Victims)',
      'मस्कुलर डिस्ट्रॉफी (Muscular Dystrophy - मांसपेशियों का अनुवांशिक क्षय)'
    ],
    subtypesEn: [
      'Locomotor Disability (OA, OL, OAL, BL conditions impacting joints/bones)',
      'Leprosy Cured Persons',
      'Dwarfism (Adult height of 4 feet 10 inches / 147 cm or less)',
      'Acid Attack Victims',
      'Muscular Dystrophy (Genetic degenerative muscle disorder)'
    ],
    noteHi: 'कार्यालयी पदों, बैंकिंग, क्लर्क, पीएसयू में सर्वाधिक पहचान किए गए पद इसी श्रेणी में शामिल हैं।',
    noteEn: 'Largest number of identified posts in banking, clerical, administrative and PSU sectors belong to this group.'
  },
  {
    code: 'Cat-D & E',
    quotaPercent: '1% आरक्षण (संयुक्त)',
    titleHi: 'श्रेणी (डी और ई): बौद्धिक, न्यूरोलॉजिकल एवं बहु-दिव्यांगता',
    titleEn: 'Category (D & E): Intellectual, Neurological & Multiple Disabilities',
    subtypesHi: [
      'ऑटिज्म स्पेक्ट्रम विकार (Autism Spectrum Disorder)',
      'बौद्धिक दिव्यांगता (Intellectual Disability / Mental Retardation)',
      'विशिष्ट सीखने की अक्षमता (Specific Learning Disability - डिस्लेक्सिया, डिस्ग्राफिया)',
      'मानसिक बीमारी (Mental Illness - गंभीर अवसाद, बाइपोलर डिसऑर्डर)',
      'बहु-दिव्यांगता (Multiple Disabilities - उपर्युक्त श्रेणियों में से दो या अधिक का संयोजन)',
      'बधिर-अंधापन (Deaf-Blindness)'
    ],
    subtypesEn: [
      'Autism Spectrum Disorder (ASD)',
      'Intellectual Disability',
      'Specific Learning Disability (Dyslexia, Dysgraphia)',
      'Mental Illness',
      'Multiple Disabilities (Combination of two or more qualifying conditions)',
      'Deaf-Blindness'
    ],
    noteHi: 'RPwD एक्ट 2016 के तहत इन आधुनिक श्रेणियों को पहली बार सरकारी भर्ती आरक्षण में शामिल किया गया।',
    noteEn: 'Included for the very first time in direct government recruitment reservations under the 2016 Act.'
  }
];

export const all21DisabilitiesList = [
  { num: 1, hi: 'अंधापन (Blindness)', en: 'Blindness', groupHi: 'दृष्टिबाधित', groupEn: 'Visual' },
  { num: 2, hi: 'कम दृष्टि (Low Vision)', en: 'Low Vision', groupHi: 'दृष्टिबाधित', groupEn: 'Visual' },
  { num: 3, hi: 'कुष्ठ रोग मुक्त व्यक्ति (Leprosy Cured)', en: 'Leprosy Cured Persons', groupHi: 'चलन अक्षमता', groupEn: 'Locomotor' },
  { num: 4, hi: 'श्रवण हानि / बहरापन (Hearing Impairment - Deaf)', en: 'Hearing Impairment (Deaf)', groupHi: 'श्रवण बाधित', groupEn: 'Hearing' },
  { num: 5, hi: 'सुनने में कठिनाई (Hard of Hearing)', en: 'Hard of Hearing', groupHi: 'श्रवण बाधित', groupEn: 'Hearing' },
  { num: 6, hi: 'चलन दिव्यांगता (Locomotor Disability)', en: 'Locomotor Disability', groupHi: 'चलन अक्षमता', groupEn: 'Locomotor' },
  { num: 7, hi: 'बौनापन (Dwarfism)', en: 'Dwarfism', groupHi: 'चलन अक्षमता', groupEn: 'Locomotor' },
  { num: 8, hi: 'बौद्धिक दिव्यांगता (Intellectual Disability)', en: 'Intellectual Disability', groupHi: 'मानसिक/बौद्धिक', groupEn: 'Intellectual' },
  { num: 9, hi: 'मानसिक बीमारी (Mental Illness)', en: 'Mental Illness', groupHi: 'मानसिक/बौद्धिक', groupEn: 'Mental' },
  { num: 10, hi: 'ऑटिज्म स्पेक्ट्रम विकार (Autism Spectrum Disorder)', en: 'Autism Spectrum Disorder', groupHi: 'न्यूरोलॉजिकल', groupEn: 'Neurological' },
  { num: 11, hi: 'सेरेब्रल पाल्सी (Cerebral Palsy)', en: 'Cerebral Palsy', groupHi: 'चलन/न्यूरोलॉजिकल', groupEn: 'Locomotor/Neuro' },
  { num: 12, hi: 'मस्कुलर डिस्ट्रॉफी (Muscular Dystrophy)', en: 'Muscular Dystrophy', groupHi: 'चलन अक्षमता', groupEn: 'Locomotor' },
  { num: 13, hi: 'क्रोनिक न्यूरोलॉजिकल स्थितियां (Chronic Neurological Conditions)', en: 'Chronic Neurological Conditions', groupHi: 'न्यूरोलॉजिकल', groupEn: 'Neurological' },
  { num: 14, hi: 'विशिष्ट सीखने की अक्षमता (Specific Learning Disabilities - Dyslexia)', en: 'Specific Learning Disabilities', groupHi: 'बौद्धिक', groupEn: 'Learning' },
  { num: 15, hi: 'मल्टीपल स्केलेरोसिस (Multiple Sclerosis)', en: 'Multiple Sclerosis', groupHi: 'न्यूरोलॉजिकल', groupEn: 'Neurological' },
  { num: 16, hi: 'वाक् एवं भाषा दिव्यांगता (Speech and Language Disability)', en: 'Speech & Language Disability', groupHi: 'भाषा/वाक्', groupEn: 'Speech' },
  { num: 17, hi: 'थैलेसीमिया (Thalassemia)', en: 'Thalassemia', groupHi: 'रक्त विकार', groupEn: 'Blood Disorder' },
  { num: 18, hi: 'हीमोफिलिया (Hemophilia)', en: 'Hemophilia', groupHi: 'रक्त विकार', groupEn: 'Blood Disorder' },
  { num: 19, hi: 'सिकल सेल रोग (Sickle Cell Disease)', en: 'Sickle Cell Disease', groupHi: 'रक्त विकार', groupEn: 'Blood Disorder' },
  { num: 20, hi: 'बहु-दिव्यांगता जिसमें बधिर-अंधापन शामिल है (Multiple Disabilities)', en: 'Multiple Disabilities including Deaf-Blindness', groupHi: 'बहु-दिव्यांगता', groupEn: 'Multiple' },
  { num: 21, hi: 'एसिड अटैक पीड़ित (Acid Attack Victims)', en: 'Acid Attack Victims', groupHi: 'चलन अक्षमता', groupEn: 'Locomotor' },
];

export const govtBenefits: BenefitItem[] = [
  {
    id: 'age-relaxation',
    titleHi: '1. ऊपरी आयु सीमा में भारी छूट (10 से 15 वर्ष)',
    titleEn: '1. Massive Upper Age Limit Relaxation (10 to 15 Years)',
    summaryHi: 'सरकारी परीक्षाओं में सामान्य PwD को 10 वर्ष, OBC PwD को 13 वर्ष और SC/ST PwD को 15 वर्ष की अतिरिक्त छूट मिलती है।',
    summaryEn: 'General PwD candidates receive 10 years, OBC PwD 13 years, and SC/ST PwD 15 years relaxation in maximum age limit.',
    detailsHi: [
      'सामान्य श्रेणी PwD (General/UR PwD): निर्धारित आयु सीमा + 10 वर्ष (उदा. 32 + 10 = 42 वर्ष)',
      'ओबीसी PwD (OBC Non-Creamy Layer): निर्धारित आयु सीमा + 13 वर्ष',
      'अनुसूचित जाति/जनजाति PwD (SC/ST PwD): निर्धारित आयु सीमा + 15 वर्ष',
      'EWS PwD अभ्यर्थियों को भी सामान्य PwD की तरह 10 वर्ष की छूट का लाभ मिलता है।'
    ],
    detailsEn: [
      'General/UR PwD: Prescribed age limit + 10 years (e.g. 32 + 10 = 42 years for UPSC CSE)',
      'OBC PwD (Non-Creamy Layer): Prescribed age limit + 13 years',
      'SC/ST PwD: Prescribed age limit + 15 years',
      'EWS PwD candidates also receive the standard 10 years relaxation.'
    ],
    badgeHi: '10 से 15 वर्ष अतिरिक्त छूट',
    badgeEn: '+10 to +15 Years Relaxation',
    iconName: 'Clock'
  },
  {
    id: 'fee-exemption',
    titleHi: '2. परीक्षा आवेदन शुल्क से 100% पूर्ण छूट',
    titleEn: '2. 100% Exemption from Application Examination Fees',
    summaryHi: 'UPSC, SSC, रेलवे, बैंक और अधिकांश राज्य लोक सेवा आयोगों में PwD उम्मीदवारों से कोई आवेदन शुल्क नहीं लिया जाता।',
    summaryEn: 'No application fee is charged from benchmark PwD candidates in UPSC, SSC, Railways, IBPS & most state PSCs.',
    detailsHi: [
      'UPSC सिविल सेवा और अन्य संघ लोक सेवा आयोग परीक्षाओं में शून्य फीस।',
      'कर्मचारी चयन आयोग (SSC CGL, CHSL, MTS, CPO आदि) में 100% शुल्क माफी।',
      'रेलवे भर्ती बोर्ड (RRB NTPC, Group D, ALP) में परीक्षा शुल्क नाममात्र अथवा पूर्णतः रिफंडेबल।',
      'महिला PwD अभ्यर्थियों को भी पूर्ण निःशुल्क आवेदन का दोहरा लाभ।'
    ],
    detailsEn: [
      'Zero application fees across all UPSC recruitment notifications.',
      '100% examination fee waiver across all SSC examinations (CGL, CHSL, MTS).',
      'Railway Recruitment Boards provide full fee waiver / refund upon attending exams.',
      'Equal zero-fee benefit applies across all female and male benchmark PwD candidates.'
    ],
    badgeHi: '100% निःशुल्क आवेदन',
    badgeEn: '100% Free Application',
    iconName: 'CreditCard'
  },
  {
    id: 'scribe-extra-time',
    titleHi: '3. परीक्षा में अतिरिक्त समय और स्क्राइब (लेखक) की सुविधा',
    titleEn: '3. Compensatory Time & Scribe Facility in Exams',
    summaryHi: 'प्रत्येक 1 घंटे की परीक्षा पर 20 मिनट का अतिरिक्त क्षतिपूरक समय (Compensatory Time) और स्क्राइब का कानूनी अधिकार।',
    summaryEn: 'Right to 20 minutes compensatory extra time per 1 hour of exam duration along with official scribe access.',
    detailsHi: [
      'नियम के अनुसार: 3 घंटे की परीक्षा में 60 मिनट (1 पूरा घंटा) अतिरिक्त समय मिलता है।',
      'दृष्टिबाधित, दोनों हाथों से दिव्यांग, सेरेब्रल पाल्सी या लिखने में असमर्थ अभ्यर्थियों को स्क्राइब की अनुमति।',
      'अभ्यर्थी स्वयं का स्क्राइब ला सकते हैं या परीक्षा केंद्र से स्क्राइब उपलब्ध कराने का अनुरोध कर सकते हैं।',
      'स्क्राइब के शैक्षणिक योग्यता का नियम भर्ती बोर्ड के नोटिफिकेशन अनुसार लागू होता है।'
    ],
    detailsEn: [
      'Statutory Rule: 20 minutes compensatory time per 1 hour of exam (60 minutes extra in a 3-hour exam).',
      'Scribe allowed for visually impaired, cerebral palsy, locomotor disability affecting dominant hand or writing speed.',
      'Candidates can either bring their own scribe or request the exam center to arrange one.',
      'Scribe academic qualification norms are strictly governed by DoPT / recruitment agency guidelines.'
    ],
    badgeHi: '+20 मिनट प्रति घंटा अतिरिक्त',
    badgeEn: '+20 Mins / Hour Extra',
    iconName: 'Timer'
  },
  {
    id: 'cutoff-marks',
    titleHi: '4. कट-ऑफ मार्क्स और क्वालीफाइंग अंकों में विशेष छूट',
    titleEn: '4. Lower Cut-Off Marks and Qualifying Relaxation',
    summaryHi: 'PwD अभ्यर्थियों के लिए भर्ती परीक्षाओं में पासिंग मार्क्स और अंतिम मेरिट कट-ऑफ सामान्य वर्ग से काफी कम होती है।',
    summaryEn: 'Passing marks and final selection cut-offs for PwD candidates are substantially lower than unreserved benchmarks.',
    detailsHi: [
      'UPSC सिविल सेवा प्रीलिम्स और मेन्स में PwD कट-ऑफ सामान्य वर्ग से 20 से 40 अंक तक कम रहती है।',
      'एसएससी और बैंकिंग में न्यूनतम अहर्ता अंकों (Minimum Qualifying Marks) में 5% से 10% तक की छूट मिलती है।',
      'यदि PwD उम्मीदवार अपनी योग्यता से सामान्य वर्ग की कट-ऑफ पार करता है, तो उसे अनारक्षित (UR) सीट दी जाती है और 4% कोटा सुरक्षित रहता है।'
    ],
    detailsEn: [
      'UPSC Civil Services prelims & mains cutoffs for PwD categories are significantly relaxed.',
      'Minimum qualifying marks lowered by 5% to 10% in SSC, IBPS, and State PSC screenings.',
      'If a PwD candidate clears unreserved cut-offs without availing concessions, they are accommodated in General quota without eating up reserved seats.'
    ],
    badgeHi: 'कम कट-ऑफ पर चयन',
    badgeEn: 'Significantly Lower Cutoffs',
    iconName: 'Award'
  },
  {
    id: 'posting-transfer',
    titleHi: '5. गृह जिले / पसंदीदा स्थान पर पोस्टिंग और ट्रांसफर में वरीयता',
    titleEn: '5. Preference in Home Posting & Exemption from Rotational Transfer',
    summaryHi: 'DoPT के दिशा-निर्देशों के अनुसार PwD कर्मचारियों को उनके गृह स्थान के यथासंभव निकट पदस्थापित किया जाता है।',
    summaryEn: 'DoPT guidelines mandate posting PwD employees close to their native residence and exempting from routine transfers.',
    detailsHi: [
      'प्रारंभिक नियुक्ति के समय सुगम आवागमन वाले स्थान या गृह नगर के पास पदस्थापना की प्राथमिकता।',
      'सामान्य रूटीन रोटेशनल ट्रांसफर (Rotational Transfer Policy) से कानूनी छूट।',
      'यदि दोनों पति-पत्नी में से कोई एक दिव्यांग है, तो दोनों को एक ही स्टेशन पर पदस्थ करने का स्पष्ट दिशा-निर्देश।',
      'कार्यालय परिसर में रैंप, सुलभ लिफ्ट और दिव्यांग-अनुकूल शौचालय उपलब्ध कराने की वैधानिक बाध्यता।'
    ],
    detailsEn: [
      'Priority consideration for native district or accessible office locations at initial appointment.',
      'Exempted from mandatory hardship rotational transfer policies.',
      'Spouses of disabled personnel or disabled couples given priority for co-located postings.',
      'Statutory obligation for offices to provide barrier-free infrastructure, ramps, lifts, and accessible restrooms.'
    ],
    badgeHi: 'गृह जिले में प्राथमिकता',
    badgeEn: 'Home District Priority',
    iconName: 'MapPin'
  },
  {
    id: 'transport-allowance',
    titleHi: '6. दोहरा परिवहन भत्ता (Double Transport Allowance) व आयकर छूट',
    titleEn: '6. Double Transport Allowance (DA on TA) & Tax Exemptions',
    summaryHi: 'सरकारी सेवा में चयनित होने के बाद दिव्यांग कर्मचारियों को सामान्य कर्मचारियों की तुलना में दोगुना ट्रांसपोर्ट अलाउंस मिलता है।',
    summaryEn: 'Central government PwD employees are entitled to Double Transport Allowance alongside Section 80U income tax deductions.',
    detailsHi: [
      '7वें वेतन आयोग के तहत पात्र दिव्यांग कर्मचारियों को दोगुना परिवहन भत्ता (2x Transport Allowance) प्रदान किया जाता है।',
      'आयकर अधिनियम की धारा 80U के तहत ₹75,000 (40% से 79% दिव्यांगता) तथा ₹1,25,000 (80% या अधिक गंभीर दिव्यांगता) की अतिरिक्त कर कटौती।',
      'कार्यालय में सुलभ तकनीकी उपकरण, ब्रेल प्रिंटर या सहायक उपकरण खरीदने के लिए विशेष अनुदान सुविधा।'
    ],
    detailsEn: [
      'Double Transport Allowance (2x TA + applicable Dearness Allowance) under 7th Central Pay Commission.',
      'Income Tax Section 80U statutory deduction of ₹75,000 (40%-79%) and ₹1,25,000 (80%+ severe disability).',
      'Access to special grants for assistive computing devices, braille printers, and ergonomic workstations.'
    ],
    badgeHi: 'दोगुना परिवहन भत्ता',
    badgeEn: '2x Transport Allowance',
    iconName: 'DollarSign'
  }
];

export const stepByStepProcess: StepGuideItem[] = [
  {
    stepNumber: 1,
    titleHi: 'चरण 1: ऑनलाइन आवेदन करें (स्वावलंबन पोर्टल)',
    titleEn: 'Step 1: Apply Online on Swavlamban Portal',
    durationHi: 'समय: 15-20 मिनट (ऑनलाइन)',
    durationEn: 'Time: 15-20 mins (Online)',
    descriptionHi: 'भारत सरकार के सामाजिक न्याय एवं अधिकारिता मंत्रालय द्वारा संचालित आधिकारिक स्वावलंबन पोर्टल पर जाएं और नया पंजीकरण करें।',
    descriptionEn: 'Visit the official Swavlamban portal run by the Ministry of Social Justice and Empowerment and complete registration.',
    actionItemsHi: [
      'वेबसाइट www.swavlambancard.gov.in पर जाएं।',
      '"Apply for Disability Certificate & UDID Card" लिंक पर क्लिक करें।',
      'व्यक्तिगत विवरण, पता, आधार कार्ड नंबर, पासपोर्ट साइज फोटो और हस्ताक्षर/अंगूठे का निशान अपलोड करें।',
      'यदि पूर्व में कोई पुराना ऑफलाइन मेडिकल सर्टिफिकेट है तो उसकी प्रति संलग्न करें।'
    ],
    actionItemsEn: [
      'Navigate to www.swavlambancard.gov.in.',
      'Click on "Apply for Disability Certificate & UDID Card".',
      'Upload personal information, Aadhaar number, recent passport photograph, and digital signature/thumb impression.',
      'Attach existing local hospital certificates if previously assessed offline.'
    ],
    officialPortalUrl: 'https://www.swavlambancard.gov.in/',
    portalLabelHi: 'स्वावलंबन पोर्टल पर जाएं (swavlambancard.gov.in)',
    portalLabelEn: 'Visit Swavlamban Portal (swavlambancard.gov.in)'
  },
  {
    stepNumber: 2,
    titleHi: 'चरण 2: सरकारी मेडिकल बोर्ड में शारीरिक परीक्षण (Assessment)',
    titleEn: 'Step 2: Physical Evaluation by Govt Medical Board',
    durationHi: 'समय: निर्धारित तारीख पर 1 दिन',
    durationEn: 'Time: 1 Day on Scheduled Appointment',
    descriptionHi: 'ऑनलाइन आवेदन के बाद आपको आपके जिले के मुख्य चिकित्सा अधिकारी (CMO / District Hospital) के पास जांच हेतु तारीख और समय मिलेगा।',
    descriptionEn: 'Following online submission, you will receive an appointment date at your district hospital / Chief Medical Officer (CMO) office.',
    actionItemsHi: [
      'आवेदन रसीद और मूल पहचान पत्र (आधार कार्ड/वोटर कार्ड) लेकर अस्पताल पहुंचें।',
      'विशेषज्ञ डॉक्टरों की मेडिकल समिति (ऑर्थोपेडिक सर्जन, नेत्र रोग विशेषज्ञ, ईएनटी विशेषज्ञ या न्यूरोलॉजिस्ट) द्वारा विस्तृत परीक्षण किया जाएगा।',
      'भारतीय राजपत्र 2018 के वैज्ञानिक दिशा-निर्देशों के अनुसार दिव्यांगता का सटीक प्रतिशत मापा जाता है।',
      'यदि प्रतिशत 40% या उससे अधिक पाया जाता है, तो बोर्ड अपनी मंजूरी स्वावलंबन पोर्टल पर अपलोड करता है।'
    ],
    actionItemsEn: [
      'Arrive at the district hospital with the application acknowledgment printout and original Aadhaar card.',
      'The designated panel of specialist medical officers (Orthopedic, Ophthalmologist, ENT, or Psychiatrist) conducts clinical tests.',
      'Disability percentage is calculated strictly according to Gazette of India 2018 clinical assessment formulas.',
      'Once verified at 40% or higher, the medical board uploads approvals directly to the centralized database.'
    ]
  },
  {
    stepNumber: 3,
    titleHi: 'चरण 3: डिजिटल UDID कार्ड और ई-प्रमाण पत्र डाउनलोड',
    titleEn: 'Step 3: Download Digital UDID Card & Certificate',
    durationHi: 'समय: बोर्ड मंजूरी के 7 से 15 दिन बाद',
    durationEn: 'Time: 7 to 15 Days Post Medical Approval',
    descriptionHi: 'मेडिकल बोर्ड के सत्यापन के बाद आपका डिजिटल दिव्यांगता प्रमाण पत्र और यूनीक डिसेबिलिटी आईडी (UDID) कार्ड ऑनलाइन जनरेट हो जाता है।',
    descriptionEn: 'Following verification, your digitally signed disability certificate and 18-digit UDID card are generated online.',
    actionItemsHi: [
      'स्वावलंबन पोर्टल पर अपने Enrolment / Application Number से लॉगिन करें।',
      '"Download e-Disability Certificate" और "Download e-UDID Card" पर क्लिक करें।',
      'इस प्रमाण पत्र पर एक अद्वितीय QR कोड, प्रतिशत (उदा. 45%, 60%) और वैधता अवधि (स्थायी या अस्थायी) अंकित होती है।',
      'प्लास्टिक लैमिनेटेड UDID कार्ड डाक द्वारा आपके पंजीकृत पते पर भी भेजा जाता है।'
    ],
    actionItemsEn: [
      'Log into the Swavlamban portal with your application registration number.',
      'Download your tamper-proof PDF e-Disability Certificate and e-UDID Card.',
      'The certificate contains an encrypted verification QR code, certified percentage (e.g. 45%, 60%), and validity type.',
      'A physical laminated chip-embedded UDID card is dispatched via speed post to your home address.'
    ]
  },
  {
    stepNumber: 4,
    titleHi: 'चरण 4: सरकारी भर्ती फॉर्म में आरक्षण का दावा करना',
    titleEn: 'Step 4: Claiming Reservation in Govt Job Applications',
    durationHi: 'समय: भर्ती अधिसूचना के दौरान',
    durationEn: 'Time: During Official Job Notification Period',
    descriptionHi: 'UPSC, SSC, रेलवे, बैंक या राज्य भर्ती फॉर्म भरते समय अपने UDID और दिव्यांगता श्रेणी का सही-सही चयन करें।',
    descriptionEn: 'Carefully input your 18-digit UDID number and designated disability subcategory during recruitment applications.',
    actionItemsHi: [
      'फॉर्म में "Are you a Person with Benchmark Disability (PwD)?" विकल्प में "Yes" चुनें।',
      'अपनी सटीक श्रेणी (VH, HH, OH, Other PwD) और 18-अंकों का UDID नंबर दर्ज करें।',
      'सटीक प्रतिशत (न्यूनतम 40%) दर्ज करें और प्रमाण पत्र की स्कैन कॉपी अपलोड करें।',
      'यदि परीक्षा के लिए स्क्राइब (लेखक) या अतिरिक्त समय की आवश्यकता है, तो फॉर्म में संबंधित चेकबॉक्स पर टिक करें।'
    ],
    actionItemsEn: [
      'Select "Yes" under the "Are you a Person with Benchmark Disability (PwD)?" question.',
      'Select your exact category (VH, HH, OH, Others) and input your verified 18-digit UDID number.',
      'Accurately state the percentage figure (40% minimum) and upload the digital PDF/JPG copy.',
      'Indicate whether you require a scribe or compensatory extra time during the written test.'
    ]
  }
];

export const examRules = [
  {
    nameHi: 'UPSC सिविल सेवा परीक्षा (IAS / IPS / IFS)',
    nameEn: 'UPSC Civil Services Examination',
    ruleHi: 'आईएएस, आईएफएस, आईआरएस सहित अधिकांश प्रशासनिक सेवाओं में 4% PwD आरक्षण पूर्णतः लागू होता है। आईपीएस, दानिप्स जैसी पुलिस सेवाओं में केवल सीमित शारीरिक योग्यता वाले पद ही अनुमत हैं। प्रीलिम्स और मेन्स दोनों में 20 मिनट/घंटा अतिरिक्त समय मिलता है।',
    ruleEn: '4% PwD reservation strictly applies across IAS, IFS, IRS and administrative services. Police cadres like IPS have restricted physical eligibility. 20 min/hour compensatory time provided in Prelims & Mains.'
  },
  {
    nameHi: 'कर्मचारी चयन आयोग (SSC CGL / CHSL / MTS)',
    nameEn: 'Staff Selection Commission (SSC)',
    ruleHi: 'एसएससी की प्रत्येक भर्ती में दिव्यांगों के लिए पद कोड वार (Post Code Wise) स्पष्ट आरक्षण सूची जारी होती है। कंप्यूटर टाइपिंग टेस्ट में हाथों से दिव्यांग अभ्यर्थियों को नियमों के तहत टाइपिंग टेस्ट से छूट (Exemption from Typing) का प्रावधान है।',
    ruleEn: 'Post-code wise reservations notified for each cadre. Locomotor disabled candidates unable to type due to physical impairment are granted exemption from mandatory typing skill tests upon medical certification.'
  },
  {
    nameHi: 'रेलवे भर्ती बोर्ड (RRB NTPC / Group D / ALP)',
    nameEn: 'Railway Recruitment Boards (RRB)',
    ruleHi: 'रेलवे में स्टेशन मास्टर, क्लर्क, गुड्स गार्ड और वर्कशॉप में पद-विशिष्ट दिव्यांगता कोटा होता है। हालांकि रनिंग स्टाफ (जैसे लोको पायलट/ट्रेन ड्राइवर) में सुरक्षा कारणों से दृष्टि या गंभीर चलन दिव्यांगता की अनुमति नहीं होती है।',
    ruleEn: 'Special reservation across non-technical popular categories (NTPC), ministerial, and workshop posts. Train running staff (like Assistant Loco Pilot) are exempt from visual and major physical disabilities due to railway safety acts.'
  },
  {
    nameHi: 'बैंकिंग भर्ती (IBPS PO / Clerk / SBI)',
    nameEn: 'Banking Recruitment (IBPS / SBI)',
    ruleHi: 'बैंक प्रोबेशनरी ऑफिसर (PO) और क्लर्क पदों पर 4% क्षैतिज आरक्षण लागू होता है। दृष्टिबाधित अभ्यर्थियों को कंप्यूटर स्क्रीन पर फॉन्ट ज़ूम करने और विशेष स्क्रीन-रीडर फ्रेंडली इंटरफेस प्रदान किया जाता है।',
    ruleEn: '4% horizontal reservation applies across SBI and nationalized bank PO and clerk vacancies. Visually impaired candidates receive screen-magnification software and tailored user interfaces.'
  }
];

export const faqsList: FAQItem[] = [
  {
    id: 'faq-1',
    questionHi: 'सरकारी नौकरी के लिए कितना प्रतिशत विकलांग होना अनिवार्य है?',
    questionEn: 'What minimum percentage of disability is required for government jobs?',
    answerHi: 'भारत के कानून "दिव्यांगजन अधिकार अधिनियम 2016" (RPwD Act 2016) की धारा 34 के अनुसार, किसी भी सरकारी नौकरी में दिव्यांग (PwD) आरक्षण और संबंधित रियायतों का लाभ पाने के लिए न्यूनतम 40% (चालीस प्रतिशत) बेंचमार्क दिव्यांगता होना कानूनी रूप से अनिवार्य है।',
    answerEn: 'Under Section 34 of the Rights of Persons with Disabilities Act (RPwD Act) 2016, a minimum of 40% (forty percent) benchmark disability is legally mandated to qualify for PwD reservations and concessions in government jobs.',
    categoryTagHi: 'पात्रता नियम',
    categoryTagEn: 'Eligibility'
  },
  {
    id: 'faq-2',
    questionHi: 'क्या 30% या 35% विकलांगता होने पर सरकारी नौकरी में आरक्षण मिल सकता है?',
    questionEn: 'Can someone with 30% or 35% disability get reservation in government jobs?',
    answerHi: 'नहीं। 40% से कम दिव्यांगता (उदा. 20%, 30%, 38%) होने पर उम्मीदवार को PwD कोटे की 4% आरक्षित सीटों, आयु सीमा में 10 वर्ष की छूट या परीक्षा फीस छूट का लाभ नहीं मिल सकता। ऐसा अभ्यर्थी सामान्य (UR) या अपनी सामाजिक श्रेणी (SC/ST/OBC/EWS) के अंतर्गत सामान्य नियमों से ही आवेदन कर सकता है।',
    answerEn: 'No. Candidates with less than 40% disability (such as 20%, 30%, or 38%) are legally not eligible for the 4% PwD reservation, 10-year age relaxation, or fee exemptions. They may only apply as standard candidates under their respective social categories.',
    categoryTagHi: 'कट-ऑफ नियम',
    categoryTagEn: 'Criteria'
  },
  {
    id: 'faq-3',
    questionHi: 'क्या अस्थायी (Temporary) दिव्यांगता प्रमाण पत्र सरकारी नौकरी में मान्य होता है?',
    questionEn: 'Is a temporary disability certificate valid for government jobs?',
    answerHi: 'हां, बशर्ते कि आवेदन की अंतिम तिथि और दस्तावेज सत्यापन (DV) के समय वह प्रमाण पत्र वैध (Valid / Not Expired) हो। हालांकि, अस्थायी प्रमाण पत्र धारकों को निश्चित अवधि (आमतौर पर 1 से 5 वर्ष) के बाद मेडिकल बोर्ड से पुनः जांच (Re-assessment) करवाकर नया प्रमाण पत्र जमा करना होता है। स्थायी (Permanent) प्रमाण पत्र जीवनभर मान्य रहता है।',
    answerEn: 'Yes, provided the certificate is within its validity period as on the closing date of application and during Document Verification (DV). Temporary certificate holders must undergo re-assessment by the medical board prior to expiration. Permanent certificates remain valid for life.',
    categoryTagHi: 'प्रमाण पत्र',
    categoryTagEn: 'Certificate'
  },
  {
    id: 'faq-4',
    questionHi: 'क्या केवल UDID कार्ड से सरकारी नौकरी में आवेदन किया जा सकता है?',
    questionEn: 'Can one apply for government jobs using only the UDID card?',
    answerHi: 'हां। केंद्र सरकार के सामाजिक न्याय एवं अधिकारिता मंत्रालय के निर्देशानुसार, स्वावलंबन पोर्टल द्वारा जारी डिजिटल UDID कार्ड (Unique Disability ID) पूरे भारत के सभी केंद्रीय मंत्रालयों, यूपीएससी, एसएससी, रेलवे और राज्य लोक सेवा आयोगों में पूर्ण रूप से मान्य और पर्याप्त दस्तावेज है।',
    answerEn: 'Yes. The digital UDID card issued by the Department of Empowerment of Persons with Disabilities is a single, universally accepted national document recognized across all central and state recruitment boards.',
    categoryTagHi: 'UDID कार्ड',
    categoryTagEn: 'UDID Card'
  },
  {
    id: 'faq-5',
    questionHi: 'क्या PwD अभ्यर्थी सामान्य (General/UR) मेरिट सीट पर भी चयनित हो सकते हैं?',
    questionEn: 'Can a PwD candidate be selected on an unreserved (General) merit seat?',
    answerHi: 'हां, बिल्कुल! माननीय सर्वोच्च न्यायालय और DoPT के नियमों के अनुसार यदि कोई दिव्यांग उम्मीदवार बिना किसी रियायत (जैसे आयु छूट या कट-ऑफ छूट) के अपनी विशुद्ध योग्यता के आधार पर सामान्य वर्ग की मेरिट लिस्ट में आता है, तो उसका चयन अनारक्षित (General/UR) सीट पर होगा और आरक्षित 4% PwD सीट अन्य दिव्यांग साथियों के लिए सुरक्षित रहेगी।',
    answerEn: 'Yes. As per Supreme Court judgments and DoPT guidelines, if a PwD candidate qualifies on standard merit without availing relaxed standards (like age or marks concessions), they are adjusted against an unreserved seat without exhausting the 4% reserved quota.',
    categoryTagHi: 'आरक्षण नियम',
    categoryTagEn: 'Reservation Law'
  },
  {
    id: 'faq-6',
    questionHi: 'एक आंख से न दिखने (One-eyed / Monocular vision) पर कितना प्रतिशत बनता है?',
    questionEn: 'What disability percentage is granted for single-eye vision loss (monocular)?',
    answerHi: 'भारत सरकार के मेडिकल असेसमेंट गजट (2018) के अनुसार, यदि एक आंख पूरी तरह से दृष्टिहीन है और दूसरी आंख पूरी तरह स्वस्थ (6/6 दृष्टि) है, तो आमतौर पर 30% दृष्टि दिव्यांगता आंकी जाती है। चूंकि यह 40% से कम है, इसलिए केवल एक आंख खराब होने पर सामान्यतः 4% PwD कोटा नहीं मिलता जब तक कि दूसरी आंख में भी कोई दृष्टि दोष न हो।',
    answerEn: 'Under the 2018 Gazette guidelines, complete loss of vision in one eye while the other eye remains normal (6/6) typically assesses to around 30% disability. Because this falls below the 40% benchmark threshold, it alone generally does not qualify for the 4% reservation unless the other eye is also impaired.',
    categoryTagHi: 'दृष्टि नियम',
    categoryTagEn: 'Visual Norms'
  },
  {
    id: 'faq-7',
    questionHi: 'दिव्यांगता प्रतिशत कौन और कैसे तय करता है?',
    questionEn: 'Who determines the disability percentage and how is it calculated?',
    answerHi: 'दिव्यांगता का प्रतिशत किसी निजी डॉक्टर या क्लिनिक द्वारा तय नहीं किया जा सकता। यह केवल सरकारी जिला अस्पताल के मुख्य चिकित्सा अधिकारी (CMO) द्वारा गठित 3 से 4 विशेषज्ञ डॉक्टरों के अधिकृत मेडिकल बोर्ड द्वारा स्वास्थ्य मंत्रालय के वैज्ञानिक दिशा-निर्देशों (Gazette of India 2018) के अनुसार तय किया जाता है।',
    answerEn: 'Disability percentage cannot be issued by private practitioners. It can only be evaluated and certified by an authorized medical board formed by the Chief Medical Officer (CMO) at a recognized government district hospital or medical college.',
    categoryTagHi: 'मेडिकल बोर्ड',
    categoryTagEn: 'Medical Board'
  },
  {
    id: 'faq-8',
    questionHi: 'परीक्षा में स्क्राइब (लेखक) लेने की क्या शर्तें हैं?',
    questionEn: 'What are the conditions for taking a scribe during the examination?',
    answerHi: 'दृष्टिबाधित अभ्यर्थी, दोनों हाथों से अक्षम अभ्यर्थी या सेरेब्रल पाल्सी से पीड़ित अभ्यर्थी, जो लिखने में असमर्थ हैं, वे स्क्राइब की सुविधा ले सकते हैं। स्क्राइब की योग्यता आमतौर पर परीक्षा की न्यूनतम योग्यता से एक स्तर नीचे होनी चाहिए। अभ्यर्थी स्वयं का स्क्राइब ला सकते हैं या परीक्षा केंद्र से स्क्राइब की मांग कर सकते हैं।',
    answerEn: 'Candidates with blindness, locomotor disability affecting writing arms, or cerebral palsy who cannot physically write can utilize a scribe. As per DoPT guidelines, the scribe should generally not possess qualifications higher than one step below the required minimum exam criteria.',
    categoryTagHi: 'परीक्षा सुविधा',
    categoryTagEn: 'Exam Support'
  }
];
