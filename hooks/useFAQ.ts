import { useState, useMemo } from 'react';
import { FAQS } from '../../constants/faqData';
import { useCourse } from './useCourse';
import { FAQItem, Currency } from '../types/sections';
import { SectionHeadersService } from '../services/SectionHeadersService';
import { SectionBGImagesService } from '../services/SectionBGImagesService';

export const useFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { course } = useCourse();

  const faqs = useMemo(() => {
    let currencyNames = '...';
    if (course && course.tariffs.length > 0) {
      const currencies: Currency[] = course.tariffs[0].prices.map(price => price.currency);
      currencyNames = currencies.map(c => c.name).join(', ');
    }

    const currencyFAQ: FAQItem = {
      question: "В каких валютах можно оплатить курс?",
      answer: `Мы принимаем оплату в следующих валютах: ${currencyNames}.`
    };

    return [...FAQS, currencyFAQ];
  }, [course]);

  const header = useMemo(() => SectionHeadersService.getHeader('faq'), []);
  const bgImages = useMemo(() => SectionBGImagesService.getBGImages('faq'), []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return {
    header,
    faqs,
    openIndex,
    bgImages,
    toggleFAQ,
  };
};