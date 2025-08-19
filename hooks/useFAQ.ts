import { useState, useMemo } from 'react';
import { FAQS } from '../constants/faqData';
import { CurrencyService } from '../services/CurrencyService';
import { useGeolocation } from './useGeolocation';
import { FAQItem } from '../types/sections';
import { SectionHeadersService } from '../services/SectionHeadersService';
import { SectionBGImagesService } from '../services/SectionBGImagesService';

export const useFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { location } = useGeolocation();

  const faqs = useMemo(() => {
    const availableCurrencies = CurrencyService.getAvailableCurrencies(location);
    const currencyNames = CurrencyService.getCurrencyNames(availableCurrencies);
    
    const currencyFAQ: FAQItem = {
      question: "В каких валютах можно оплатить курс?",
      answer: `Мы принимаем оплату в следующих валютах: ${currencyNames}.`
    };

    return [...FAQS, currencyFAQ];
  }, [location]);

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