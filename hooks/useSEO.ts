import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import type { SEOHeadProps } from "../components/common/SEOHead";
import { AVAILABLE_PAGES, SEOConfig, SEOData } from "../types/sections";
import { SEOService } from "../services/SEOService";

export const useSEO = (
  pageKey?: AVAILABLE_PAGES,
  customConfig?: SEOConfig
): SEOHeadProps | null => {
  const { courseUrlParam } = useParams<{ courseUrlParam: string }>();
  const [seoData, setSeoData] = useState<SEOData | null>(null);

  useEffect(() => {
    if (courseUrlParam) {
      SEOService.getData(courseUrlParam).then(setSeoData);
    }
  }, [courseUrlParam]);

  return useMemo(() => {
    if (!seoData) {
      return null;
    }

    const { defaultSEOConfig, pageSEOConfigs } = seoData;

    let config = { ...defaultSEOConfig };

    if (pageKey && pageSEOConfigs[pageKey]) {
      config = { ...config, ...pageSEOConfigs[pageKey] };
    }

    if (customConfig) {
      config = { ...config, ...customConfig };
    }

    return {
      title: config.title,
      description: config.description,
      keywords: config.keywords,
      image: config.image,
      url: config.url,
      type: config.type,
      siteName: config.siteName,
      locale: config.locale,
      twitterCard: config.twitterCard,
      noIndex: config.noIndex,
    };
  }, [seoData, pageKey, customConfig]);
};

// Хук для динамического обновления метаданных
export const useDynamicSEO = () => {
  const updateSEO = (config: SEOConfig) => {
    // Эта функция может быть использована для динамического обновления SEO
    // в зависимости от состояния приложения
    return useSEO(undefined, config);
  };

  return { updateSEO };
};
