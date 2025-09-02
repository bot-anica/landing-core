import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCourse } from './useCourse';
import { FAQItem, Currency, SectionHeaderProps, PartialSectionBGImagesProps } from '../types/sections';
import { FaqService } from '../services/FaqService';

export const useFAQ = () => {
  const { courseUrlParam } = useParams<{ courseUrlParam: string }>();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { course } = useCourse(courseUrlParam);
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [header, setHeader] = useState<SectionHeaderProps | null>(null);
  const [bgImages, setBgImages] = useState<PartialSectionBGImagesProps | null>(null);

  useEffect(() => {
    if (courseUrlParam) {
      FaqService.getData(courseUrlParam).then(data => {
        if (data) {
          setHeader(data.header);
          setBgImages(data.bgImages);
          
          let currencyNames = '...';
          if (course && course.tariffs.length > 0) {
            const currencies: Currency[] = course.tariffs[0].prices.map(price => price.currency);
            currencyNames = currencies.map(c => c.name).join(', ');
          }

          const currencyFAQ: FAQItem = {
            question: "В каких валютах можно оплатить курс?",
            answer: `Мы принимаем оплату в следующих валютах: ${currencyNames}.`
          };

          setFaqs([...data.faqs, currencyFAQ]);
        }
      });
    }
  }, [courseUrlParam, course]);

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