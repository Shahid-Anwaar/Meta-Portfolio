import type { ReactNode } from "react";

export type HeroIconKey = "Globe" | "Smartphone" | "Cloud" | "Code";

export interface HeroPageContent {
  get_stated_bttuon_link: string;
  get_stated_bttuon_text: string;

  view_portfolio_button_link: string;
  viw_portfolio_button: string;

  hero_badge: string;
  hero_heading: string;

  // NOTE: this is HTML string used in dangerouslySetInnerHTML
  hero_description: string;

  hero_services_heading: string;
  services_growth_text: string;

  secure_reliable_text: string;
  fast_deliver_text: string;
}

export interface HeroService {
  id: number;
  icon: HeroIconKey;
  title: string;
  description: string;
  progress: string; // e.g. "92%"
  delay: number;

  iconClass: string;     // e.g. "bg-blue-600"
  progressClass: string; // e.g. "h-2 bg-blue-600"
}

export interface HeroStat {
  number: string;
  label: string;
  color: string; // gradient tailwind string e.g. "from-blue-400 to-blue-600"
}

export interface HeroProps {
  pageContent?: Partial<HeroPageContent>;
  heroServices?: HeroService[];
  heroStats?: HeroStat[];
}

export type HeroIconMap = Record<HeroIconKey, ReactNode>;

export type AboutIconKey =
  | "Lightbulb"
  | "Shield"
  | "Rocket"
  | "Award"
  | "Target"
  | "Code"
  | "Zap"
  | "TrendingUp"
  | "Globe"
  | "Star"
  | "Heart"
  | "Users"
  | "Eye";

export interface AboutPageContent {
  about_badge: string;
  about_detail: string; // HTML string
  ready_transform_business_button_text: string;
  ready_transform_business_button_link: string; // id without # is ok
}

export interface AboutFeature {
  name: string;
  icon: AboutIconKey;
}

export interface AboutStat {
  icon: "Users" | "Award" | "TrendingUp" | "Globe";
  number: string;
  label: string;
  color: string; // used for class checks: "blue", "green", "purple", "orange"
}

export interface AboutUsContent {
  our_story_title: string;
  our_story_description: string; // HTML string

  what_we_do_title: string;
  features: AboutFeature[];

  our_vision_title: string;
  our_vision_description: string; // HTML string

  mission_title: string;
  mission_description: string; // HTML string

  stats: AboutStat[];
}

export interface AboutProps {
  pageContent?: Partial<AboutPageContent>;
  aboutUs?: Partial<AboutUsContent>;
}

export type AboutIconMap = Record<AboutIconKey, ReactNode>;

export type ServicesIconKey =
  | "Code"
  | "Smartphone"
  | "Palette"
  | "Megaphone"
  | "ShoppingCart"
  | "Cloud";

export interface ServicesPageContent {
  service_badge: string;

  services_call_to_action_description: string; // HTML string
  services_cta_description: string; // HTML string

  get_stated_bttuon_link: string;
  get_stated_bttuon_text: string;

  view_portfolio_button_link: string;
  view_our_work_button_text: string;
}

export interface ServiceItem {
  icon: ServicesIconKey;
  title: string;
  projects: string;      // shown as badge text
  description: string;   // can contain HTML (you already parse)
  features: string[];    // key features list
  gradient: string;      // used for class checks (blue/green/pink/orange/purple)
}

export interface ServicesProps {
  pageContent?: Partial<ServicesPageContent>;
  services?: ServiceItem[];
}

export type ServicesIconMap = Record<ServicesIconKey, ReactNode>;

export type IndustryIconKey =
  | "ShoppingBag"
  | "GraduationCap"
  | "Heart"
  | "Home"
  | "Rocket"
  | "Truck"
  | "DollarSign"
  | "Film"
  | "Building"
  | "Zap"
  | "Globe"
  | "Users";

export type IndustryColorVariant = "pink" | "blue" | "green" | "purple" | "orange";

export interface IndustriesPageContent {
  industry_badge: string;
  industry_description: string; // HTML string
  industry_call_to_action_button_text: string; // HTML string

  contact_button_link: string;
  contact_button_text: string;
}

export interface IndustryItem {
  title: string;
  description: string;
  projects: string;
  icon: IndustryIconKey;
  colorVariant?: IndustryColorVariant;
}

export interface IndustriesProps {
  pageContent?: Partial<IndustriesPageContent>;
  industriesData?: IndustryItem[];
}

export type IndustryIconMap = Record<IndustryIconKey, ReactNode>;

export interface PortfolioPageContent {
  portfolio_badge: string;
  portfolio_detail: string; // HTML string

  portfolio_call_to_action_description: string; // HTML string

  portfolio_get_started_button_link: string;
  portfolio_get_started_button_text: string;

  view_portfolio_button_link: string;

  portfolio_view_all_projects_button_text: string;
}

export type PortfolioProjectImage = {
  src: string;
  alt: string;
};

export interface PortfolioProject {
  title: string;
  slug: string;
  category: string;
  description: string;
  images: PortfolioProjectImage[];
  link: string;
}

export interface PortfolioProps {
  pageContent?: Partial<PortfolioPageContent>;
  portfolioData?: PortfolioProject[];
}
export type TechnologyIconKey =
  | "Code"
  | "Settings"
  | "Smartphone"
  | "Database"
  | "Cloud"
  | "Globe"
  | "Layers"
  | "Palette"
  | "Zap";

export interface TechnologyItem {
  name: string;
  category: string; // must match category.name (e.g. "Frontend")
  icon: TechnologyIconKey;
  logo: string; // image url/path
  colorVariant: string; // e.g. "blue" | "green" | "purple" etc. (your CSS handles it)
  Performance: number; // keeping your exact key "Performance"
}

export interface TechnologyCategory {
  name: string; // include "All"
  icon: TechnologyIconKey | "Star";
}

export interface TechStackData {
  technologies: TechnologyItem[];
  categories: TechnologyCategory[];
}

export interface TechnologiesPageContent {
  technology_badge: string;
  technology_detail: string; // HTML string
}

export interface TechnologiesSectionProps {
  techStack?: TechStackData;
  pageContent?: Partial<TechnologiesPageContent>;
}

export type TestimonialColorVariant = "blue" | "green" | "purple" | "orange" | "pink" | "gray";

export interface TestimonialItem {
  name: string;
  company: string;
  position: string;
  image: string; // url/path
  rating: number; // 1-5
  text: string; // HTML string
  project: string;
  duration: string;
  industry: string;
  results: string;
  colorVariant: TestimonialColorVariant;
}

export interface TestimonialsPageContent {
  testimonial_badge: string;
  testimonial_detail: string; // HTML string
}

export interface TestimonialsSectionProps {
  pageContent?: Partial<TestimonialsPageContent>;
  testimonials?: TestimonialItem[];
}
export type ContactInfoItem = {
  icon: "Mail" | "MapPin" | "Phone" | "Send" | string;
  info: string;
  link?: string;
};

export type ContactUsContent = {
  contact_us_badge?: string;
  contact_us_detail?: string; // HTML string

  send_message_title?: string;
  send_message_description?: string;

  visit_message_title?: string;
  visit_message_description?: string;

  success_message_title?: string;
  success_message_description?: string;
  success_message_badge?: string;

  // Optional map overrides (if you want dynamic map later)
  map_iframe_src?: string;
  map_title?: string;
  map_company?: string;
  map_address_line1?: string;
  map_address_line2?: string;
};

export type ContactProps = {
  pageContent?: any; // not used in component (you can remove)
  contactUs: ContactUsContent;
  contactInfo?: ContactInfoItem[];
};

export type FooterServiceItem = string | { name: string; href?: string };


// ✅ Footer.types.ts (or keep in same file)

// keep icons as string keys because you map them in component via `iconsMap[...]`
export type FooterIconKey =
  | "Facebook"
  | "Twitter"
  | "Instagram"
  | "LinkedIn"
  | "Mail"
  | "Phone"
  | "MapPin"
  | string;

export type FooterQuickLink = {
  name: string;
  href: string; // "/about" | "/#contact" | "#contact" etc.
};

export type FooterMenuItems = {
  services?: string[];
  quickLinks?: FooterQuickLink[];
};

export type FooterMenuGroup = {
  menu_items?: FooterMenuItems;
};

export type FooterMenu = {
  title: "metalogix-menu" | string;
  menus: FooterMenuGroup[]; // [0]=services, [1]=quickLinks (as your component expects)
};

export type FooterData = {
  // brand
  footer_logo: string; // s3 path (without base), e.g. "/images/metalogix/footer-logo.png"
  footer_alt_text?: string;
  footer_website_description_text: string;

  // headings
  footer_services_menu_heading: string;
  footer_quick_links_text: string;
  footer_contact_info_text: string;

  // social icon keys (these must match your iconsMap keys)
  facebook_icon?: FooterIconKey;  // usually "Facebook"
  insta_icon?: FooterIconKey;     // usually "Instagram"
  linkedin_icon?: FooterIconKey;  // usually "LinkedIn"

  // social links
  footer_facbook_icon_link?: string;
  footer_insta_icon_link?: string;
  footer_linkedin_icon_link?: string;

  // copyright
  copyright_text: string;
};

export type FooterContactInfoItem = {
  id: string | number;
  icon: FooterIconKey; // "Mail" | "Phone" | "MapPin"
  info: string;        // text shown
  link?: string;       // "mailto:", "tel:", "https://maps..." etc.
};

export type FooterProps = {
  menuItems: FooterMenu[];
  data: FooterData;
  contactInfo: FooterContactInfoItem[];
};
export type HeaderData = {
  header_logo_link?: string; // e.g. "/"
  header_logo_1?: string; // scrolled logo path (S3 path)
  header_logo_2?: string; // transparent header logo path (S3 path)

  header_button_text?: string; // e.g. "Let’s Talk"
  header_button_link?: string; // section id, e.g. "contact" (without #)
};

export type HeaderIconSvg = string; // API returns SVG string

export type HeaderMenuItem = {
  name: string;
  slug: string; // used in /services/[slug], /industry/[slug], /[slug]
  icon?: HeaderIconSvg;
};

export type HeaderMenuCategory = {
  title: string;
  items: HeaderMenuItem[];
};

export type HeaderIndustriesWrapper = {
  items: HeaderMenuItem[];
};

export type HeaderMenu = {
  title: string; // "What I Do
  menu_link?: string; // for Portfolio/Career direct link
  menu_items_title?: string; // heading inside dropdown
  menu_items?: HeaderMenuCategory[] | HeaderIndustriesWrapper[] | any; // API varies
};

export type HeaderMenuGroup = {
  title: string; // expects "metalogix-header"
  menus: HeaderMenu[];
};

export type HeaderProps = {
  menuItems?: HeaderMenuGroup[];
  data?: HeaderData;
};

