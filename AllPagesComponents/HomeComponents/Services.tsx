"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code,
  Smartphone,
  Palette,
  Megaphone,
  ShoppingCart,
  Cloud,
  ArrowRight,
  CheckCircle,
  Zap,
  Star,
  Sparkles,
  Rocket,
  Globe,
  Monitor,
} from "lucide-react";
import Link from "next/link";
import type { ServicesProps, ServicesIconMap, ServicesPageContent } from "@/Utils/types";
import { SERVICES_PAGE_CONTENT, SERVICES_LIST } from "@/Utils/data";
import { parseHtmlContent } from "@/lib/html-parser";

const Services = ({ pageContent, services }: ServicesProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });

  // ✅ merge defaults + props (no UI change)
  const finalPageContent: ServicesPageContent = {
    ...SERVICES_PAGE_CONTENT,
    ...(pageContent ?? {}),
  };

  const finalServices = services?.length ? services : SERVICES_LIST;

  // Icon mapping for services
  const iconMap: ServicesIconMap = {
    Code: <Code className="w-8 h-8" />,
    Smartphone: <Smartphone className="w-8 h-8" />,
    Palette: <Palette className="w-8 h-8" />,
    Megaphone: <Megaphone className="w-8 h-8" />,
    ShoppingCart: <ShoppingCart className="w-8 h-8" />,
    Cloud: <Cloud className="w-8 h-8" />,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  return (
    <section ref={ref} id="services" className="services-section relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360], opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="services-bg-element-1 absolute"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0], opacity: [0.02, 0.06, 0.02] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="services-bg-element-2 absolute"
        />

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="services-floating-particle"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="text-center mb-20">
          <motion.div className="subtitle-container">
            <motion.div
              animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="subtitle-icon text-indigo-600" />
            </motion.div>
            <span className="section-subtitle text-indigo-800">{finalPageContent?.service_badge}</span>
          </motion.div>

          <div
            className="about-description"
            dangerouslySetInnerHTML={{ __html: finalPageContent?.services_call_to_action_description }}
          />

          {/* Always Animated Tech Icons */}
          <motion.div className="flex justify-center items-center space-x-6 mt-12">
            {[Code, Smartphone, Monitor, Cloud, Globe].map((Icon, index) => (
              <motion.div
                key={index}
                animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.2, ease: "easeInOut" }}
                className="services-tech-icon"
              >
                <Icon className="services-tech-icon-inner" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20"
        >
          {finalServices.map((service, index) => {
            const getServiceColorClasses = (gradient: string) => {
              if (gradient.includes("blue"))
                return {
                  card: "services-card-border-blue services-card-glow-blue",
                  bg: "services-card-bg-blue",
                  icon: "services-card-icon-blue",
                  project: "services-card-project-count-blue",
                  arrow: "services-card-arrow-blue",
                  progress: "services-progress-line-blue",
                };
              if (gradient.includes("green"))
                return {
                  card: "services-card-border-green services-card-glow-green",
                  bg: "services-card-bg-green",
                  icon: "services-card-icon-green",
                  project: "services-card-project-count-green",
                  arrow: "services-card-arrow-green",
                  progress: "services-progress-line-green",
                };
              if (gradient.includes("pink"))
                return {
                  card: "services-card-border-pink services-card-glow-pink",
                  bg: "services-card-bg-pink",
                  icon: "services-card-icon-pink",
                  project: "services-card-project-count-pink",
                  arrow: "services-card-arrow-pink",
                  progress: "services-progress-line-pink",
                };
              if (gradient.includes("orange"))
                return {
                  card: "services-card-border-orange services-card-glow-orange",
                  bg: "services-card-bg-orange",
                  icon: "services-card-icon-orange",
                  project: "services-card-project-count-orange",
                  arrow: "services-card-arrow-orange",
                  progress: "services-progress-line-orange",
                };
              if (gradient.includes("purple"))
                return {
                  card: "services-card-border-purple services-card-glow-purple",
                  bg: "services-card-bg-purple",
                  icon: "services-card-icon-purple",
                  project: "services-card-project-count-purple",
                  arrow: "services-card-arrow-purple",
                  progress: "services-progress-line-purple",
                };

              return {
                card: "services-card-border-gray services-card-glow-gray",
                bg: "services-card-bg-gray",
                icon: "services-card-icon-gray",
                project: "services-card-project-count-gray",
                arrow: "services-card-arrow-gray",
                progress: "services-progress-line-gray",
              };
            };

            const colorClasses = getServiceColorClasses(service.gradient);

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
                className={`services-card group ${colorClasses.card}`}
              >
                {/* Animated BG */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360], opacity: [0.05, 0.15, 0.05] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                  className={`services-card-bg ${colorClasses.bg}`}
                />

                {/* Card Particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="services-card-particle"
                    style={{ left: `${20 + i * 30}%`, top: `${10 + i * 20}%` }}
                    animate={{ y: [0, -20, 0], x: [0, 10, 0], scale: [0.5, 1, 0.5], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                  />
                ))}

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: index * 0.3 }}
                        className={`services-card-icon ${colorClasses.icon} flex items-center justify-center w-16 h-16 flex-shrink-0 rounded-full`}
                      >
                        <div className="flex items-center justify-center">
                          {iconMap[service.icon] || iconMap.Code}
                        </div>
                      </motion.div>

                      <div>
                        <h4 className="services-card-title">{service.title}</h4>
                        <motion.span
                          animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                          className={`services-card-project-count ${colorClasses.project}`}
                        >
                          {service.projects}
                        </motion.span>
                      </div>
                    </div>

                    <motion.div
                      animate={{ x: [0, 5, 0], rotate: [0, 15, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
                      className={`services-card-arrow ${colorClasses.arrow}`}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="services-card-description">
                    {parseHtmlContent(service.description)}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h5 className="services-features-title">
                      <Star className="services-features-title-icon" />
                      Key Features
                    </h5>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.5, delay: 0.1 * idx + index * 0.05 }}
                          whileHover={{ scale: 1.05, x: 5 }}
                          className="services-feature-item"
                        >
                          <motion.div
                            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                            transition={{ duration: 4, repeat: Infinity, delay: idx * 0.2 }}
                          >
                            <CheckCircle className="services-feature-check" />
                          </motion.div>
                          <span className="services-feature-item-text">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Progress Line */}
                  <motion.div
                    animate={{ scaleX: [0, 1, 0.8, 1], opacity: [0.5, 1, 0.7, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                    className={`services-progress-line ${colorClasses.progress}`}
                  />

                  {/* Corner Decoration */}
                  <motion.div
                    animate={{ rotate: [0, 360], scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: index * 0.4 }}
                    className="services-corner-decoration"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} className="services-cta-section">
          <motion.div
            animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="services-cta-bg-pattern"
            style={{ backgroundSize: "200% 200%" }}
          />

          {/* Floating Icons */}
          <div className="absolute inset-0">
            {[Code, Smartphone, Palette, Cloud, Globe, Zap].map((Icon, index) => (
              <motion.div
                key={index}
                className="services-cta-floating-icon absolute"
                style={{ left: "50%", top: "50%", transformOrigin: "0 0" }}
                animate={{ rotate: [0, 360], scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 12 + index * 2, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
              >
                <motion.div
                  style={{ transform: `translateX(${60 + index * 20}px) translateY(-16px)` }}
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 12 + index * 2, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                >
                  <Icon className="w-full h-full" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="relative z-10">
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="services-cta-sparkles-container"
            >
              <Sparkles className="services-cta-sparkles" />
            </motion.div>

            <div className="cta-description" dangerouslySetInnerHTML={{ __html: finalPageContent?.services_cta_description }} />

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href={finalPageContent?.get_stated_bttuon_link}>
                <motion.button
                  whileHover={{ scale: 1.05, y: -3, boxShadow: "0 10px 40px rgba(255, 255, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 4px 20px rgba(255, 255, 255, 0.1)",
                      "0 8px 30px rgba(255, 255, 255, 0.2)",
                      "0 4px 20px rgba(255, 255, 255, 0.1)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="button-primary group"
                >
                  <span>{finalPageContent?.get_stated_bttuon_text}</span>
                  <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <Rocket className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </Link>

              <Link href={finalPageContent?.view_portfolio_button_link}>
                <motion.button
                  whileHover={{ scale: 1.05, y: -3, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    borderColor: [
                      "rgba(255, 255, 255, 0.3)",
                      "rgba(255, 255, 255, 0.6)",
                      "rgba(255, 255, 255, 0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="button-secondary"
                >
                  <span>{finalPageContent?.view_our_work_button_text}</span>
                  <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    <Star className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
