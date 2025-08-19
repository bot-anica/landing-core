import { ButtonVariant, ButtonSize, ButtonIconPosition } from "./common";

export interface Stat {
  number: string;
  label: string;
}

export interface WhySpecialPoint {
  icon: any;
  color: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface WhySpecialSectionData {
  header: SectionHeaderProps,
  whySpecialPoints: WhySpecialPoint[];
  stats: Stat[];
  bgImages: PartialSectionBGImagesProps;
}

export interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export interface BGImages {
  small?: string;
  smallVertical?: string;
  medium?: string;
  mediumVertical?: string;
  large?: string;
  extraLarge?: string;
}

export interface SectionBGProps {
  images: BGImages;
  lazy?: boolean;
}

export enum BackgroundImagePositions {
  TOP_LEFT = "topLeft",
  TOP = "top",
  TOP_RIGHT = "topRight",
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
  BOTTOM_LEFT = "bottomLeft",
  BOTTOM = "bottom",
  BOTTOM_RIGHT = "bottomRight"
}

export type SectionBGImagesProps = Record<BackgroundImagePositions, BGImages>
export type PartialSectionBGImagesProps = Partial<Record<BackgroundImagePositions, BGImages>>

export interface Feature {
  icon: any,
  iconColor: string,
  title: string,
  subtitle: string,
  description: string,
}

export interface FeaturesSectionData {
  header: SectionHeaderProps;
  features: Feature[];
  bgImages: PartialSectionBGImagesProps;
}

export interface CTAItem {
  text: string;
  link: string;
  buttonVariant: ButtonVariant;
  buttonSize: ButtonSize;
  buttonIcon?: any;
  buttonIconColor?: string;
  buttonIconPosition?: ButtonIconPosition;
}

export interface HeroTitle {
  main: string;
  highlight: string;
  additional: string;
}

export interface HeroImages {
  extraLarge?: string,
  large?: string,
  medium?: string,
  mediumVertical?: string,
  small?: string,
  smallVertical?: string,
}

export interface HeroData {
  title: HeroTitle;
  subtitle: string;
  benefits: string[];
  cta: {
    primary: CTAItem;
    secondary: CTAItem;
  };
  images: Record<'rightImages' | 'imagesInText', HeroImages>;
  bgImages: PartialSectionBGImagesProps;
}

export interface PathToSuccessStep {
  id: number;
  title: string;
  description: string;
  result: string;
}

export type PathToSuccessImages = Record<string, string>

export interface PathToSuccessData {
  header: SectionHeaderProps;
  steps: PathToSuccessStep[];
  images: PathToSuccessImages;
  bgImages: PartialSectionBGImagesProps;
}

export interface ProblemSolutionItem {
  problem: string;
  solution: string;
  icon: any;
}

export interface ProblemSolutionCTABlock {
  title: string;
  subtitle: string;
  cta: CTAItem;
}

export interface ProblemSolutionData {
  header: SectionHeaderProps;
  items: ProblemSolutionItem[];
  ctaBlock: ProblemSolutionCTABlock;
  bgImages: PartialSectionBGImagesProps;
}

export interface Statistic {
  icon: any;
  iconColor: string;
  number: string;
  label: string;
}

export interface Testimonial {
  icon: any;
  iconColor: string;
  name: string;
  role: string;
  quote: string;
  achievement: string;
}

export interface SuccessStoriesCTABlock {
  text: string;
  description: string;
  icon: any;
  iconColor: string;
}

export interface SuccessStoriesData {
  header: SectionHeaderProps;
  stats: Statistic[];
  testimonials: Testimonial[];
  ctaBlock: SuccessStoriesCTABlock;
  bgImages: PartialSectionBGImagesProps;
}

export interface Lesson {
  id: number;
  title: string;
  description: string;
  result: string;
  icon: any;
}

export interface CourseProgramData {
  header: SectionHeaderProps;
  lessons: Lesson[];
  breakpoints: any;
  bgImages: PartialSectionBGImagesProps
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQData {
  header: SectionHeaderProps;
  faqs: FAQItem[];
}

export interface PricingPlan {
  id: string;
  title: string;
  price: string;
  tagline: string;
  icon: React.ComponentType<any>;
  features: string[];
  buttonText: string;
  buttonStyle: ButtonVariant;
  popular: boolean;
  originalPrice?: string;
}

export interface PricingSectionData {
  header: SectionHeaderProps;
  plans: PricingPlan[];
  bgImages: PartialSectionBGImagesProps;
}

export interface FooterData {
  courseDescription: string;
  navigationLinks: LinkItem[];
}

export interface LinkItem {
  text: string;
  link: string;
}

export interface HeaderData {
  navigationLinks: LinkItem[];
  ctaButtons: CTAItem[];
}

export interface SEOConfig {
  title: string | undefined,
  siteName: string,
  description: string,
  keywords: string,
  image: string,
  url: string | undefined,
  locale: string,
  twitterCard: 'summary_large_image',
  type: 'website' | 'article',
  noIndex: boolean | undefined
}

export interface PageSEOCongfig {
  title: string
  description: string
  keywords: string
  noIndex?: boolean
}

export type AVAILABLE_PAGES = 'home' | 'payment'

export interface SEOData {
  defaultSEOConfig: SEOConfig;
  pageSEOConfigs: Record<AVAILABLE_PAGES, PageSEOCongfig>;
}