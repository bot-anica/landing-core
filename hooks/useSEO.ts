import { useMemo } from "react";
import type { SEOHeadProps } from "../components/common/SEOHead";
import { AVAILABLE_PAGES, SEOConfig } from "../types/sections";
import { SEOService } from "../services/SEOService";

export const useSEO = (
  pageKey?: AVAILABLE_PAGES,
  customConfig?: SEOConfig
): SEOHeadProps => {
  return useMemo(() => {
    const { defaultSEOConfig, pageSEOConfigs } = SEOService.getData();

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
  }, [pageKey, customConfig]);
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
