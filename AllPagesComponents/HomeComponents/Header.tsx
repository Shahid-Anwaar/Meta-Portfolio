'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderIndustriesWrapper, HeaderMenuCategory, HeaderMenuItem, HeaderProps } from '@/Utils/types';



const Header: React.FC<HeaderProps> = ({ menuItems = [], data }) => {

  const headerMenu = useMemo(
    () => (menuItems ?? []).filter((item) => item?.title === 'metalogix-header'),
    [menuItems]
  );

  const safeMenuGroup = headerMenu?.[0] ?? null;
  const menus = safeMenuGroup?.menus ?? [];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId?: string) => {
    if (!sectionId) return;
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const renderIcon = (iconSvg?: string) => {
    if (!iconSvg) return null;
    return <span dangerouslySetInnerHTML={{ __html: iconSvg }} />;
  };

  const getMenuStructure = () => {
    const fallback = { capabilities: [] as HeaderMenuCategory[], industries: [] as HeaderMenuItem[], aboutItems: [] as HeaderMenuItem[] };

    if (!menus?.length) return fallback;

    const whatWeDoMenu = menus.find((m) => m.title === 'What I Do');
    const whoWeHelpMenu = menus.find((m) => m.title === 'Who I Help');
    const whoWeAreMenu = menus.find((m) => m.title === 'Who I Am');

    const capabilities = (whatWeDoMenu?.menu_items as HeaderMenuCategory[]) ?? [];
    const industriesData = (whoWeHelpMenu?.menu_items as HeaderIndustriesWrapper[]) ?? [];
    const industries = industriesData?.[0]?.items ?? [];
    const aboutData = (whoWeAreMenu?.menu_items as HeaderIndustriesWrapper[]) ?? [];
    const aboutItems = aboutData?.[0]?.items ?? [];

    return { capabilities, industries, aboutItems };
  };

  const { capabilities, industries, aboutItems } = useMemo(getMenuStructure, [menus]);

  const titleWhatWeDo = menus.find((m) => m.title.includes('What I Do'))?.title?.trim() || 'What I Do';
  const titleWhoWeHelp = menus.find((m) => m.title.includes('Who I Help'))?.title?.trim() || 'Who I Help';
  const titleWhoWeAre = menus.find((m) => m.title.includes('Who I Am'))?.title?.trim() || 'Who I Am';

  const whatWeDoHeading = menus.find((m) => m.title === 'What I Do')?.menu_items_title || 'Capabilities';
  const whoWeHelpHeading = menus.find((m) => m.title === 'Who I Help')?.menu_items_title || 'Industries';

  const servicesMenu = menus.find((m) => m.title.includes('What I Do'));
  const industriesMenu = menus.find((m) => m.title.includes('Who I Help'));
  const portfolioMenu = menus.find((m) => m.title.includes('Projects'));
  const aboutMenu = menus.find((m) => m.title.includes('Who I Am'));

  const headerLogoLink = data?.header_logo_link ?? '/';
  const headerLogoScrolled = (data?.header_logo_1 ?? '');
  const headerLogoTop = (data?.header_logo_2 ?? '');

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Link href={headerLogoLink} className="flex items-center space-x-2">
              <Image
                src={isScrolled ? headerLogoScrolled : headerLogoTop}
                alt="Metalogix"
                width={160}
                height={160}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8">
            {/* What I Do - Mega Menu */}
            {/* <div className="relative group">
              <button
                type="button"
                onClick={() => handleDropdownToggle('capabilities')}
                className={`flex items-center space-x-1 font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#040364]' : 'text-white hover:text-[#EEAD0E]'
                  }`}
              >
                <span>{titleWhatWeDo}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === 'capabilities' && (
                <div className="mega-menu fixed left-1/2 transform -translate-x-1/2 top-16 w-auto max-w-[calc(100vw-1rem)] bg-white rounded-lg shadow-xl border border-gray-100 z-50">
                  <div className="mega-scroll max-h-[70vh] overflow-y-auto">
                    <div className="p-4 xl:p-6 2xl:p-8">
                      <div className="mb-4">
                        <h3 className="mb-4">{whatWeDoHeading}</h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6 2xl:gap-8 min-w-[280px] xl:min-w-[800px] 2xl:min-w-[900px]">
                        {capabilities.map((category, index) => (
                          <div key={`${category.title}-${index}`}>
                            <h5 className="list-heading">{category.title}</h5>
                            <ul>
                              {category.items?.map((item, itemIndex) => (
                                <li key={`${item.slug}-${itemIndex}`}>
                                  <Link
                                    href={`/services/${item.slug}`}
                                    className="flex items-center space-x-2 text-gray-600 hover:text-[#040364] hover:bg-gray-50 p-2 rounded-md transition-colors"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {renderIcon(item.icon)}
                                    <span className="text-xs xl:text-sm">{item.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div> */}

            {/* Who I Help - Industries */}
            {/* <div className="relative group">
              <button
                type="button"
                onClick={() => handleDropdownToggle('industries')}
                className={`flex items-center space-x-1 font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#040364]' : 'text-white hover:text-[#EEAD0E]'
                  }`}
              >
                <span>{titleWhoWeHelp}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === 'industries' && (
                <div className="mega-menu fixed left-1/2 transform -translate-x-1/2 top-16 w-auto max-w-[calc(100vw-1rem)] bg-white rounded-lg shadow-xl border border-gray-100 z-50">
                  <div className="mega-scroll max-h-[70vh] overflow-y-auto">
                    <div className="p-4 xl:p-6">
                      <h3 className="text-base xl:text-lg font-bold text-[#040364] mb-4">{whoWeHelpHeading}</h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 min-w-[280px] md:min-w-[480px] xl:min-w-[640px]">
                        {industries.map((industry, index) => (
                          <Link
                            key={`${industry.slug}-${index}`}
                            href={`/industry/${industry.slug}`}
                            className="flex items-center space-x-2 text-gray-600 hover:text-[#040364] hover:bg-gray-50 p-2 rounded-md transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {renderIcon(industry.icon)}
                            <span className="text-sm">{industry.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div> */}

            {/* Who I Am */}
            {/* <div className="relative group">
              <button
                type="button"
                onClick={() => handleDropdownToggle('about')}
                className={`flex items-center space-x-1 font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#040364]' : 'text-white hover:text-[#EEAD0E]'
                  }`}
              >
                <span>{titleWhoWeAre}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === 'about' && (
                <div className="mega-menu fixed left-1/2 transform -translate-x-1/2 top-16 w-auto max-w-[calc(100vw-1rem)] bg-white rounded-lg shadow-xl border border-gray-100 z-50">
                  <div className="mega-scroll max-h-[70vh] overflow-y-auto">
                    <div className="p-4 min-w-[240px]">
                      <ul>
                        {aboutItems.map((item, index) => (
                          <li key={`${item.slug}-${index}`}>
                            <Link
                              href={`/${item.slug}`}
                              className="flex items-center space-x-2 text-gray-600 hover:text-[#040364] hover:bg-gray-50 p-2 rounded-md transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {renderIcon(item.icon)}
                              <span className="text-sm">{item.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div> */}
             {servicesMenu && (
              <button onClick={() => scrollToSection(servicesMenu.menu_link)}
                className={`flex items-center space-x-1 font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#040364]' : 'text-white hover:text-[#EEAD0E]'
                  }`}
              >
                {servicesMenu.title?.trim() || 'Portfolio'}
              </button>
            )}
             {industriesMenu && (
              <button onClick={() => scrollToSection(industriesMenu.menu_link)}
                className={`flex items-center space-x-1 font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#040364]' : 'text-white hover:text-[#EEAD0E]'
                  }`}
              >
                {industriesMenu.title?.trim() || 'Portfolio'}
              </button>
            )}
            {aboutMenu && (
              <button onClick={() => scrollToSection(aboutMenu.menu_link)}
                className={`flex items-center space-x-1 font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#040364]' : 'text-white hover:text-[#EEAD0E]'
                  }`}
              >
                {aboutMenu.title?.trim() || 'Career'}
              </button>
            )}
            {/* Portfolio */}
            {portfolioMenu && (
              <button onClick={() => scrollToSection(portfolioMenu.menu_link)}
                className={`flex items-center space-x-1 font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#040364]' : 'text-white hover:text-[#EEAD0E]'
                  }`}
              >
                {portfolioMenu.title?.trim() || 'Portfolio'}
              </button>
            )}
          </nav>

          {/* CTA Button */}
          <button onClick={() => scrollToSection(data?.header_button_link)} className="hidden xl:block header-mobile">
            {data?.header_button_text}
          </button>

          {/* Mobile Menu Button */}
          <motion.button
            className="xl:hidden"
            onClick={() => setIsMobileMenuOpen((s) => !s)}
            whileTap={{ scale: 0.95 }}
            type="button"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden fixed inset-0 top-16 z-40">
            <div className="flex flex-col h-auto">
              <div className="flex-1 overflow-y-auto px-3 sm:px-4 pt-4 pb-6 bg-white">
                {/* Mobile What I Do */}
                <div>
                  <button
                    type="button"
                    onClick={() => handleDropdownToggle('mobile-capabilities')}
                    className="flex items-center justify-between w-full px-3 py-3 text-gray-700 hover:text-[#040364] font-medium text-base sm:text-lg rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {titleWhatWeDo}
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {activeDropdown === 'mobile-capabilities' && (
                    <div className="pl-2 space-y-1 max-h-[35vh] overflow-y-auto bg-gray-50 rounded-lg p-3">
                      {capabilities.map((category, index) => (
                        <div key={`${category.title}-${index}`} className="space-y-1">
                          <div className="text-xs sm:text-sm font-semibold text-[#040364] uppercase tracking-wide px-3 py-2 bg-white rounded-md">
                            {category.title}
                          </div>

                          {category.items.map((item, itemIndex) => (
                            <Link
                              key={`${item.slug}-${itemIndex}`}
                              href={`/services/${item.slug}`}
                              className="flex items-center space-x-3 px-3 py-2 text-sm sm:text-base text-gray-600 hover:text-[#040364] hover:bg-white rounded-md transition-colors"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {renderIcon(item.icon)}
                              <span>{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Who I Help */}
                <div>
                  <button
                    type="button"
                    onClick={() => handleDropdownToggle('mobile-industries')}
                    className="flex items-center justify-between w-full px-3 py-3 text-gray-700 hover:text-[#040364] font-medium text-base sm:text-lg rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {titleWhoWeHelp}
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {activeDropdown === 'mobile-industries' && (
                    <div className="pl-2 space-y-1 max-h-[35vh] overflow-y-auto bg-gray-50 rounded-lg p-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        {industries.map((industry, index) => (
                          <Link
                            key={`${industry.slug}-${index}`}
                            href={`/industry/${industry.slug}`}
                            className="flex items-center space-x-2 px-3 py-2 text-sm sm:text-base text-gray-600 hover:text-[#040364] hover:bg-white rounded-md transition-colors"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {renderIcon(industry.icon)}
                            <span>{industry.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile Who I Am */}
                <div>
                  <button
                    type="button"
                    onClick={() => handleDropdownToggle('mobile-about')}
                    className="flex items-center justify-between w-full px-3 py-3 text-gray-700 hover:text-[#040364] font-medium text-base sm:text-lg rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {titleWhoWeAre}
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {activeDropdown === 'mobile-about' && (
                    <div className="pl-2 space-y-1 bg-gray-50 rounded-lg p-3">
                      {aboutItems.map((item, index) => (
                        <Link
                          key={`${item.slug}-${index}`}
                          href={`/${item.slug}`}
                          className="flex items-center space-x-2 px-3 py-2 text-sm sm:text-base text-gray-600 hover:text-[#040364] hover:bg-white rounded-md transition-colors"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                        >
                          {renderIcon(item.icon)}
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                {aboutMenu && (
                  <Link
                    href={aboutMenu.menu_link || 'about'}
                    className="block w-full text-left px-3 py-3 text-gray-700 hover:text-[#040364] font-medium text-base sm:text-lg rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {aboutMenu.title?.trim() || 'Career'}
                  </Link>
                )}
                {portfolioMenu && (
                  <button onClick={() => scrollToSection(portfolioMenu.menu_link)}
                    className="block w-full text-left px-3 py-3 text-gray-700 hover:text-[#040364] font-medium text-base sm:text-lg rounded-lg hover:bg-gray-50 transition-colors"
                  // onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {portfolioMenu.title?.trim() || 'Portfolio'}ttt
                  </button>
                )}

                <button onClick={() => scrollToSection(data?.header_button_link)} className="header-mobile">
                  {data?.header_button_text}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay for dropdowns */}
      {activeDropdown && <div className="fixed inset-0 bg-black/20 z-30" onClick={() => setActiveDropdown(null)} />}

      {/* <PageLoader isLoading={isLoading} /> */}
    </motion.header>
  );
};

export default Header;
