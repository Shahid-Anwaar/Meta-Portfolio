'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { FooterIconKey, FooterProps, FooterQuickLink } from '@/Utils/Types';
// import { s3baseUrl } from '@/config/config';

const Footer: React.FC<FooterProps> = ({ menuItems = [], data, contactInfo = [] }) => {
  const footerMenu = (menuItems ?? []).filter((item) => item?.title === 'metalogix-menu');

  // const [ref, inView] = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const router = useRouter();
  const pathname = usePathname();

  // Smooth scroll to section by id
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') || href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('/#', '').replace('#', '');

      if (pathname === '/' || href.startsWith('#')) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push('/' + (href.startsWith('/#') ? href : `#${id}`));
        setTimeout(() => {
          const scrollToEl = () => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            else setTimeout(scrollToEl, 100);
          };
          scrollToEl();
        }, 400);
      }
    }
  };

  // icon mapping
  const iconsMap: Record<FooterIconKey, LucideIcon> = {
    Facebook,
    Twitter,
    Instagram,
    LinkedIn: Linkedin,
    Mail,
    Phone,
    MapPin,
  };

  // social icons
  const FacebookIcon = data?.facebook_icon ? iconsMap[data.facebook_icon] : null;
  const LinkedInIcon = data?.linkedin_icon ? iconsMap[data.linkedin_icon] : null;
  const InstagramIcon = data?.insta_icon ? iconsMap[data.insta_icon] : null;

  // safe access (prevents crash if menus missing)
  const services: string[] = footerMenu?.[0]?.menus?.[0]?.menu_items?.services ?? [];
  const quickLinks: FooterQuickLink[] = footerMenu?.[0]?.menus?.[1]?.menu_items?.quickLinks ?? [];

  return (
    <footer className="footer-section">
      {/* Background Effects */}
      <div className="footer-bg-effects">
        {/* Animated Particles */}
        <div className="footer-particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              animate={{
                y: [0, -80 - Math.random() * 60],
                x: [0, Math.random() * 40 - 20],
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <motion.div
          className="footer-gradient-orb footer-orb-1"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="footer-gradient-orb footer-orb-2"
          animate={{ scale: [1, 1.1, 1], x: [0, -25, 0], y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className="footer-container">
        <div className="footer-main-content">
          {/* Company Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="footer-company-section"
          >
            <div className="footer-brand">
              <motion.div
                className="footer-logo-wrapper"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={(data?.footer_logo || '')}
                  alt={data?.footer_alt_text || 'brand logo'}
                  width={160}
                  height={160}
                />
              </motion.div>
            </div>

            <p className="footer-description">{data?.footer_website_description_text}</p>

            <div className="footer-social-links">
              {FacebookIcon && data?.footer_facbook_icon_link && (
                <Link
                  href={data.footer_facbook_icon_link}
                  className="footer-social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon className="footer-social-icon" />
                </Link>
              )}

              {InstagramIcon && data?.footer_insta_icon_link && (
                <Link
                  href={data.footer_insta_icon_link}
                  className="footer-social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon className="footer-social-icon" />
                </Link>
              )}

              {LinkedInIcon && data?.footer_linkedin_icon_link && (
                <Link
                  href={data.footer_linkedin_icon_link}
                  className="footer-social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon className="footer-social-icon" />
                </Link>
              )}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="footer-section-wrapper"
          >
            <h5 className="footer-section-title">{data?.footer_services_menu_heading}</h5>
            <ul className="footer-links-list">
              {services?.map((service, index) => (
                <motion.li
                  key={`${service}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="footer-link-item"
                >
                  <span className="footer-link">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="footer-section-wrapper"
          >
            <h5 className="footer-section-title">{data?.footer_quick_links_text}</h5>
            <ul className="footer-links-list">
              {quickLinks?.map((link, index) => (
                <motion.li
                  key={`${link.name}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="footer-link-item"
                >
                  {link.href.startsWith('/#') || link.href.startsWith('#') ? (
                    <Link
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="footer-link"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <Link href={link.href} className="footer-link">
                      {link.name}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="footer-section-wrapper"
          >
            <h5 className="footer-section-title">{data?.footer_contact_info_text}</h5>

            <div className="footer-contact-list">
              {contactInfo?.map((info) => {
                const IconComponent = iconsMap[info.icon] ?? Mail;

                if (!info.link || info.link === '#') {
                  return (
                    <div key={info.id} className="footer-contact-item">
                      <IconComponent className="footer-contact-icon" />
                      <span className="footer-contact-text">{info.info}</span>
                    </div>
                  );
                }

                return (
                  <Link
                    key={info.id}
                    href={info.link}
                    className="footer-contact-item"
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    <IconComponent className="footer-contact-icon" />
                    <span className="footer-contact-text">{info.info}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="footer-bottom"
        >
          <div className="footer-bottom-line"></div>
          <p className="footer-copyright">
            © {new Date().getFullYear()} {data?.copyright_text}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
