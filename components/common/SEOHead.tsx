import { Helmet } from '@dr.pogodin/react-helmet';
import type { FC } from 'react';

export interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  siteName?: string;
  locale?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  noIndex?: boolean;
}

const SEOHead: FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  siteName = 'Курс по созданию Telegram-ботов',
  locale = 'ru_RU',
  twitterCard = 'summary_large_image',
  noIndex = false
}) => {
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const defaultImage = '/og-cover.jpg';
  const metaImage = image || defaultImage;

  return (
    <Helmet prioritizeSeoTags>
      {/* Основные мета-теги */}
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      {metaImage && <meta property="og:image" content={metaImage} />}
      {currentUrl && <meta property="og:url" content={currentUrl} />}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      {metaImage && <meta name="twitter:image" content={metaImage} />}
      
      {/* Дополнительные мета-теги */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Canonical URL */}
      {currentUrl && <link rel="canonical" href={currentUrl} />}
    </Helmet>
  );
};

export default SEOHead;