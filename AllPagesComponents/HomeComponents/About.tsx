"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Target,
  Eye,
  Award,
  Users,
  Zap,
  Shield,
  TrendingUp,
  Globe,
  Heart,
  Code,
  Lightbulb,
  Rocket,
  Star,
} from "lucide-react";
import type { AboutProps, AboutIconMap, AboutPageContent, AboutUsContent }  from "@/Utils/Types";
import { ABOUT_PAGE_CONTENT, ABOUT_US } from "@/Utils/data";

const About = ({ pageContent, aboutUs }: AboutProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  // ✅ merge defaults + props (no UI change)
  const finalPageContent: AboutPageContent = {
    ...ABOUT_PAGE_CONTENT,
    ...(pageContent ?? {}),
  };

  const finalAboutUs: AboutUsContent = {
    ...ABOUT_US,
    ...(aboutUs ?? {}),
    features: aboutUs?.features?.length ? aboutUs.features : ABOUT_US.features,
    stats: aboutUs?.stats?.length ? aboutUs.stats : ABOUT_US.stats,
  };

  const scrollToContact = () => {
    const element = document.getElementById(finalPageContent?.ready_transform_business_button_link || "contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Icon mapping for values
  const iconMap: AboutIconMap = {
    Lightbulb: <Lightbulb className="w-5 h-5" />,
    Shield: <Shield className="w-5 h-5" />,
    Rocket: <Rocket className="w-5 h-5" />,
    Award: <Award className="w-5 h-5" />,
    Target: <Target className="w-5 h-5" />,
    Code: <Code className="w-5 h-5" />,
    Zap: <Zap className="w-5 h-5" />,
    TrendingUp: <TrendingUp className="w-5 h-5" />,
    Globe: <Globe className="w-5 h-5" />,
    Star: <Star className="w-5 h-5" />,
    Heart: <Heart className="w-5 h-5" />,
    Users: <Users className="w-5 h-5" />,
    Eye: <Eye className="w-5 h-5" />,
  };

  // Icon mapping for stats
  const statsIconMap = {
    Users: <Users className="w-6 h-6" />,
    Award: <Award className="w-6 h-6" />,
    TrendingUp: <TrendingUp className="w-6 h-6" />,
    Globe: <Globe className="w-6 h-6" />,
  } as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  return (
    <section id="about" className="about-section relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="about-bg-element-1 absolute"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="about-bg-element-2 absolute"
        />
      </div>

      <div ref={ref} className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="text-center mb-20">
          <motion.div className="subtitle-container">
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
              <Heart className="subtitle-icon" />
            </motion.div>
            <span className="section-subtitle">{finalPageContent.about_badge}</span>
          </motion.div>

          <div className="about-description" dangerouslySetInnerHTML={{ __html: finalPageContent.about_detail }} />
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="space-y-8">
            {/* Story */}
            <motion.div className="about-story-card">
              <div className="about-story-card-accent"></div>

              <div className="flex items-center space-x-4 mb-6">
                <motion.div whileHover={{ scale: 1.1, rotate: 360 }} transition={{ duration: 0.6 }} className="about-story-icon">
                  <Heart className="w-6 h-6" />
                </motion.div>
                <h3 className="about-story-title">{finalAboutUs.our_story_title}</h3>
              </div>

              <div className="space-y-4 about-story-text" dangerouslySetInnerHTML={{ __html: finalAboutUs.our_story_description }} />

              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="about-story-floating-dot" />
            </motion.div>

            {/* Features */}
            <motion.div className="about-features-card">
              <h4 className="about-features-title flex items-center">
                <Code className="about-feature-icon w-6 h-6 mr-3" />
                {finalAboutUs.what_we_do_title}
              </h4>

              <div className="grid grid-cols-2 gap-4">
                {finalAboutUs.features.map((feature, index) => (
                  <motion.div
                    key={`${feature.name}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="about-feature-item flex items-center space-x-3"
                  >
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className="about-feature-icon w-5 h-5 flex-shrink-0">
                      {iconMap[feature.icon] || iconMap.Code}
                    </motion.div>
                    <span className="about-feature-text">{feature.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="space-y-8">
            {/* Vision */}
            <motion.div whileHover={{ y: -10, scale: 1.02 }} className="about-vision-card">
              <motion.div className="about-vision-bg-blur" animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 4, repeat: Infinity }} />
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.6 }} className="about-vision-icon">
                    <Eye className="w-7 h-7" />
                  </motion.div>
                  <h4 className="about-card-title">{finalAboutUs.our_vision_title}</h4>
                </div>
                <div dangerouslySetInnerHTML={{ __html: finalAboutUs.our_vision_description }} />
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div whileHover={{ y: -10, scale: 1.02 }} className="about-mission-card">
              <motion.div className="about-mission-bg-blur" animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.7, 0.5] }} transition={{ duration: 5, repeat: Infinity }} />
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.6 }} className="about-mission-icon">
                    <Target className="w-7 h-7" />
                  </motion.div>
                  <h4 className="about-card-title">{finalAboutUs.mission_title}</h4>
                </div>
                <div dangerouslySetInnerHTML={{ __html: finalAboutUs.mission_description }} />
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div className="grid grid-cols-2 gap-4">
              {finalAboutUs.stats.map((stat, index) => {
                const getStatColorClasses = (colorClass: string) => {
                  if (colorClass.includes("blue")) return { bg: "about-stat-icon-bg-blue", number: "about-stat-number-blue" };
                  if (colorClass.includes("green")) return { bg: "about-stat-icon-bg-green", number: "about-stat-number-green" };
                  if (colorClass.includes("purple")) return { bg: "about-stat-icon-bg-purple", number: "about-stat-number-purple" };
                  if (colorClass.includes("orange")) return { bg: "about-stat-icon-bg-orange", number: "about-stat-number-orange" };
                  return { bg: "about-stat-icon-bg-blue", number: "about-stat-number-blue" };
                };

                const colorClasses = getStatColorClasses(stat.color);

                return (
                  <motion.div
                    key={`${stat.label}-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="about-stat-card"
                  >
                    <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.6 }} className={`about-stat-icon ${colorClasses.bg}`}>
                      <div>{statsIconMap[stat.icon] || statsIconMap.Users}</div>
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                      className={colorClasses.number}
                    >
                      {stat.number}
                    </motion.div>

                    <p className="about-stat-label">{stat.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} className="text-center mt-20">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={scrollToContact} className="about-cta-button">
            <span>{finalPageContent.ready_transform_business_button_text}</span>
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <Rocket className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
