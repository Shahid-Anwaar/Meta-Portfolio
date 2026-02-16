"use client";

import React, { JSX, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code,
  Database,
  Cloud,
  Smartphone,
  Palette,
  Settings,
  Zap,
  Layers,
  Globe,
  Star,
  Sparkles,
  Atom,
  Braces,
  Terminal,
  LucideIcon,
} from "lucide-react";

import type {
  TechnologiesSectionProps,
  TechnologyIconKey,
  TechnologiesPageContent,
} from "@/Utils/types";
import { TECH_STACK_DATA, TECHNOLOGIES_PAGE_CONTENT } from "@/Utils/data";

const LUCIDE_LOGOS: Record<string, LucideIcon> = {
  Atom,
  Layers,
  Braces,
  Terminal,
  Database,
  Cloud,
};

const getLogoIcon = (name: string): LucideIcon => LUCIDE_LOGOS[name] ?? Code;

const TechnologiesSection = ({ techStack, pageContent }: TechnologiesSectionProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const finalPageContent: TechnologiesPageContent = {
    ...TECHNOLOGIES_PAGE_CONTENT,
    ...(pageContent ?? {}),
  };

  const finalTechStack = techStack ?? TECH_STACK_DATA;

  // ✅ type-safe icon mapping (no TS indexing error)
  const iconMap: Record<TechnologyIconKey, JSX.Element> = {
    Code: <Code className="w-5 h-5" />,
    Settings: <Settings className="w-5 h-5" />,
    Smartphone: <Smartphone className="w-5 h-5" />,
    Database: <Database className="w-5 h-5" />,
    Cloud: <Cloud className="w-5 h-5" />,
    Globe: <Globe className="w-5 h-5" />,
    Layers: <Layers className="w-5 h-5" />,
    Palette: <Palette className="w-5 h-5" />,
    Zap: <Zap className="w-5 h-5" />,
  };

  const [activeCategory, setActiveCategory] = useState<string>("All");

  const technologies = useMemo(
    () =>
      (finalTechStack?.technologies ?? []).map((tech) => ({
        ...tech,
        iconEl: iconMap[tech.icon] ?? iconMap.Code,
      })),
    [finalTechStack, iconMap]
  );

  const categories = useMemo(
    () =>
      (finalTechStack?.categories ?? []).map((category) => ({
        ...category,
        iconEl:
          category.icon === "Star"
            ? <Star className="w-4 h-4" />
            : (iconMap[category.icon] ?? <Star className="w-4 h-4" />),
      })),
    [finalTechStack, iconMap]
  );

  const filteredTechnologies =
    activeCategory === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <section ref={ref} id="technologies" className="technologies-section">
      {/* Always Animated Background Elements */}
      <div className="technologies-bg-elements">
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360], opacity: [0.02, 0.08, 0.02] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="technologies-bg-element-1"
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1], rotate: [360, 180, 0], opacity: [0.02, 0.06, 0.02] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="technologies-bg-element-2"
        />

        {[Code, Database, Cloud, Zap, Globe].map((Icon, index) => (
          <motion.div
            key={index}
            className="technologies-floating-icon"
            style={{
              left: `${10 + index * 18}%`,
              top: `${15 + index * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              delay: index * 1.5,
              ease: "easeInOut",
            }}
          >
            <Icon className="technologies-floating-icon-inner" />
          </motion.div>
        ))}

        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="technologies-floating-particle"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div className="subtitle-container">
            <motion.div
              animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="subtitle-icon" />
            </motion.div>
            <span className="section-subtitle">{finalPageContent.technology_badge}</span>
          </motion.div>

          <div
            className="about-description"
            dangerouslySetInnerHTML={{ __html: finalPageContent.technology_detail || "" }}
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="technologies-categories"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`technologies-category-btn ${activeCategory === category.name ? "technologies-category-active" : ""
                }`}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, delay: index * 0.3 }}
              >
                {category.iconEl}
              </motion.div>
              <span>{category.name}</span>

              {activeCategory === category.name && (
                <motion.div layoutId="activeCategory" className="technologies-category-indicator" />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="technologies-grid"
        >
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${activeCategory}`}
              whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
              className={`technologies-card technologies-card-${tech.colorVariant}`}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360], opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                className="technologies-card-bg"
              />

              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="technologies-card-particle"
                  style={{ left: `${20 + i * 25}%`, top: `${15 + i * 20}%` }}
                  animate={{ y: [0, -15, 0], x: [0, 8, 0], scale: [0.5, 1, 0.5], opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                />
              ))}

              <div className="technologies-card-content">
                <div className="technologies-card-logo-wrapper">
                  <motion.div
                    animate={{ rotate: [0, 360], scale: [1, 1.05, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: index * 0.2 }}
                    className="technologies-card-icon-container"
                  >
                    <motion.div
                      animate={{ rotate: [0, -360], scale: [1, 1.1, 1] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: index * 0.15 }}
                      className="technologies-card-icon-ring"
                    />

                    {/* <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="technologies-card-icon-inner"
                    >
                      <img src={tech.logo} alt={tech.name} className="technologies-card-logo-img" />

                      <motion.div
                        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
                        className="technologies-card-glow"
                      />
                    </motion.div> */}

                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="technologies-card-icon-inner"
                    >
                      {(() => {
                        const LogoIcon = getLogoIcon(String(tech.logo));
                        return <LogoIcon aria-label={tech.name} className="technologies-card-logo-img" />;
                      })()}

                      <motion.div
                        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
                        className="technologies-card-glow"
                      />
                    </motion.div>

                    <motion.div
                      animate={{ rotate: [0, 360], scale: [0.8, 1.2, 0.8] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.05 }}
                      className="technologies-corner-element technologies-corner-top-left"
                    />
                    <motion.div
                      animate={{ rotate: [360, 0], scale: [1.2, 0.8, 1.2] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.1 }}
                      className="technologies-corner-element technologies-corner-top-right"
                    />
                    <motion.div
                      animate={{ rotate: [0, 360], scale: [0.9, 1.1, 0.9] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.15 }}
                      className="technologies-corner-element technologies-corner-bottom-left"
                    />
                    <motion.div
                      animate={{ rotate: [360, 0], scale: [1.1, 0.9, 1.1] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
                      className="technologies-corner-element technologies-corner-bottom-right"
                    />
                  </motion.div>

                  <motion.div
                    className="technologies-orbit-ring"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: index * 0.1 }}
                  >
                    <div className="technologies-orbit-dot technologies-orbit-dot-1" />
                    <div className="technologies-orbit-dot technologies-orbit-dot-2" />
                    <div className="technologies-orbit-dot technologies-orbit-dot-3" />
                  </motion.div>

                  <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.05 }}
                    className="technologies-category-icon-overlay"
                  >
                    {tech.iconEl}
                  </motion.div>
                </div>

                <motion.h4
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.05 }}
                  className="technologies-card-name"
                >
                  {tech.name}
                </motion.h4>

                <motion.span
                  animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
                  className="technologies-card-category"
                >
                  {tech.iconEl}
                  {tech.category}
                </motion.span>

                <div className="technologies-performance-stats">
                  <motion.div
                    animate={{ width: ["0%", "90%", "0%"] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
                    className="technologies-performance-bar"
                  />
                  <span className="technologies-performance-text">{tech.Performance}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
