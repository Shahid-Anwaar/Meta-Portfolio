'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderProps } from '@/Utils/types';

const Header: React.FC<HeaderProps> = ({ menuItems = [], data }) => {

  const currentMenus = menuItems?.[0]?.menus ?? [];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
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


  const headerLogoLink = data?.header_logo_link ?? '/';
  // const headerLogoScrolled = (data?.header_logo_1 ?? '');
  // const headerLogoTop = (data?.header_logo_2 ?? '');

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
            <Link href={headerLogoLink} className="flex items-center">
              {/* Responsive logo wrapper */}
              <span className="relative block w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-16 lg:h-16">
                <Image
                  src="/images/11.png"
                  alt="Metalogix"
                  fill
                  priority
                  sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, (max-width: 1024px) 56px, 64px"
                  className="object-contain"
                />
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8">
            {currentMenus.map((menu, i) => (
              <button key={i} onClick={() => scrollToSection(menu.menu_link)}
                className={`flex items-center space-x-1 font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#040364]' : 'text-white hover:text-[#EEAD0E]'
                  }`}
              >
                {menu.title?.trim() || 'Portfolio'}
              </button>
            ))}
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
              <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 pt-1 pb-6 bg-white">
                {/* Mobile What I Do */}
                <div className="space-y-0 mb-3">
                  {currentMenus.map((menu, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => scrollToSection(menu.menu_link)}
                      className="flex items-center justify-between w-full px-2 py-2 text-gray-700 hover:text-[#040364] font-medium text-sm sm:text-base rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {menu.title?.trim() || 'Portfolio'}
                    </button>
                  ))}
                </div>
                <button onClick={() => scrollToSection(data?.header_button_link)} className="header-mobile">
                  {data?.header_button_text}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {activeDropdown && <div className="fixed inset-0 bg-black/20 z-30" onClick={() => setActiveDropdown(null)} />}
    </motion.header>
  );
};

export default Header;
