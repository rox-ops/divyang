export type Language = 'hi' | 'en';

export interface TOCItem {
  id: string;
  title: string;
  titleEn: string;
}

export interface DisabilityCategory {
  code: string;
  quotaPercent: string;
  titleHi: string;
  titleEn: string;
  subtypesHi: string[];
  subtypesEn: string[];
  noteHi: string;
  noteEn: string;
}

export interface BenefitItem {
  id: string;
  titleHi: string;
  titleEn: string;
  summaryHi: string;
  summaryEn: string;
  detailsHi: string[];
  detailsEn: string[];
  badgeHi: string;
  badgeEn: string;
  iconName: string;
}

export interface StepGuideItem {
  stepNumber: number;
  titleHi: string;
  titleEn: string;
  durationHi: string;
  durationEn: string;
  descriptionHi: string;
  descriptionEn: string;
  actionItemsHi: string[];
  actionItemsEn: string[];
  officialPortalUrl?: string;
  portalLabelHi?: string;
  portalLabelEn?: string;
}

export interface FAQItem {
  id: string;
  questionHi: string;
  questionEn: string;
  answerHi: string;
  answerEn: string;
  categoryTagHi: string;
  categoryTagEn: string;
}
