import About from "@/AllPagesComponents/HomeComponents/About";
import Contact from "@/AllPagesComponents/HomeComponents/ContactUs";
import Footer from "@/AllPagesComponents/HomeComponents/Footer";
import Header from "@/AllPagesComponents/HomeComponents/Header";
import Hero from "@/AllPagesComponents/HomeComponents/Hero";
import Industries from "@/AllPagesComponents/HomeComponents/Industries";
import Portfolio from "@/AllPagesComponents/HomeComponents/Portfolio";
import Services from "@/AllPagesComponents/HomeComponents/Services";
import TechnologiesSection from "@/AllPagesComponents/HomeComponents/Technologies";
import TestimonialsSection from "@/AllPagesComponents/HomeComponents/Testmonials";
import { ABOUT_PAGE_CONTENT, ABOUT_US, contactInfo, contactUs, defaultHeaderData, defaultHeaderMenuItems, footerContactInfo, footerData, footerMenuItems, HERO_PAGE_CONTENT, HERO_SERVICES, HERO_STATS, INDUSTRIES_LIST, INDUSTRIES_PAGE_CONTENT, PORTFOLIO_PAGE_CONTENT, PORTFOLIO_PROJECTS, SERVICES_LIST, SERVICES_PAGE_CONTENT, TECH_STACK_DATA, TECHNOLOGIES_PAGE_CONTENT, TESTIMONIALS_DATA, TESTIMONIALS_PAGE_CONTENT } from "@/Utils/data";

export default function Home() {
  return (
    <div className="min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      <Header menuItems={defaultHeaderMenuItems} data={defaultHeaderData} />
      <Hero pageContent={HERO_PAGE_CONTENT} heroServices={HERO_SERVICES} heroStats={HERO_STATS} />
      <About pageContent={ABOUT_PAGE_CONTENT} aboutUs={ABOUT_US} />
      <Services pageContent={SERVICES_PAGE_CONTENT} services={SERVICES_LIST} />
      <Industries pageContent={INDUSTRIES_PAGE_CONTENT} industriesData={INDUSTRIES_LIST} />
      <Portfolio
        pageContent={PORTFOLIO_PAGE_CONTENT}
        portfolioData={PORTFOLIO_PROJECTS}
      />
      <TechnologiesSection techStack={TECH_STACK_DATA} pageContent={TECHNOLOGIES_PAGE_CONTENT} />
      <TestimonialsSection
        pageContent={TESTIMONIALS_PAGE_CONTENT}
        testimonials={TESTIMONIALS_DATA}
      />
      <Contact contactUs={contactUs} contactInfo={contactInfo} />
      <Footer menuItems={footerMenuItems} data={footerData} contactInfo={footerContactInfo} />
    </div>
  );
}
