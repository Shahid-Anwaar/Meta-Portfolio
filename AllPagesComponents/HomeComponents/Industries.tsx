"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShoppingBag,
  GraduationCap,
  Heart,
  Home,
  Rocket,
  Truck,
  DollarSign,
  Film,
  ArrowRight,
  Building,
  Zap,
  Star,
  TrendingUp,
  Globe,
  Users,
  Target,
} from "lucide-react";
import Link from "next/link";
import type { IndustriesProps, IndustryIconMap, IndustriesPageContent } from "@/Utils/types";
import { INDUSTRIES_LIST, INDUSTRIES_PAGE_CONTENT } from "@/Utils/data";
import { scrollToId } from "@/Utils/constant";

const Industries = ({ pageContent, industriesData }: IndustriesProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });

  // Icon mapping for industries (same icons, typed)
  const iconMap: IndustryIconMap = {
    ShoppingBag: <ShoppingBag className="w-8 h-8" />,
    GraduationCap: <GraduationCap className="w-8 h-8" />,
    Heart: <Heart className="w-8 h-8" />,
    Home: <Home className="w-8 h-8" />,
    Rocket: <Rocket className="w-8 h-8" />,
    Truck: <Truck className="w-8 h-8" />,
    DollarSign: <DollarSign className="w-8 h-8" />,
    Film: <Film className="w-8 h-8" />,
    Building: <Building className="w-8 h-8" />,
    Zap: <Zap className="w-8 h-8" />,
    Globe: <Globe className="w-8 h-8" />,
    Users: <Users className="w-8 h-8" />,
  };

  // ✅ merge defaults + props (no UI change)
  const finalPageContent: IndustriesPageContent = {
    ...INDUSTRIES_PAGE_CONTENT,
    ...(pageContent ?? {}),
  };

  const finalIndustriesData = industriesData?.length ? industriesData : INDUSTRIES_LIST;

  // Use the data prop for industries (same logic)
  const industries =
    finalIndustriesData?.map((industry) => ({
      ...industry,
      icon: iconMap[industry.icon] || iconMap.Building,
    })) || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  return (
    <section id="industries" ref={ref} className="industries-section">
      {/* Always Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360], opacity: [0.02, 0.08, 0.02] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="industries-bg-element-1"
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1], rotate: [360, 180, 0], opacity: [0.02, 0.06, 0.02] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="industries-bg-element-2"
        />

        {/* Floating Industry Icons */}
        {[Building, Globe, Users, Target, TrendingUp].map((Icon, index) => (
          <motion.div
            key={index}
            className="industries-floating-icon"
            style={{ left: `${10 + index * 20}%`, top: `${20 + index * 15}%` }}
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
            <Icon className="industries-floating-icon-inner" />
          </motion.div>
        ))}

        {/* Animated Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="industries-floating-particle"
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

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div variants={containerVariants} className="text-center mb-20">
          <motion.div className="subtitle-container">
            <motion.div
              animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              <Building className="subtitle-icon" />
            </motion.div>
            <span className="section-subtitle">{finalPageContent.industry_badge}</span>
          </motion.div>

          <div
            className="about-description"
            dangerouslySetInnerHTML={{ __html: finalPageContent.industry_description || "" }}
          />
        </motion.div>

        {/* Industries Grid */}
        <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {industries?.map((industry, index) => {
            const colorVariant = industry?.colorVariant || "pink";

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
                className={`industries-card industries-card-border-${colorVariant} group`}
              >
                {/* BG */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360], opacity: [0.05, 0.15, 0.05] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                  className={`industries-card-bg industries-card-bg-${colorVariant}`}
                />

                {/* Mini Particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="industries-mini-particle"
                    style={{ left: `${20 + i * 25}%`, top: `${15 + i * 20}%` }}
                    animate={{ y: [0, -15, 0], x: [0, 8, 0], scale: [0.5, 1, 0.5], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                  />
                ))}

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative mb-4">
                    <motion.div
                      animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: index * 0.2 }}
                      className={`industries-card-icon industries-card-icon-${colorVariant}`}
                    >
                      <div className="text-white">{industry.icon}</div>
                    </motion.div>

                    <motion.div
                      className="industries-orbiting-particle"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: index * 0.3 }}
                    />

                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0, 0.2, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                      className={`industries-pulsing-glow industries-pulsing-glow-${colorVariant}`}
                    />
                  </div>

                  {/* Content */}
                  <motion.h5
                    animate={{ color: ["#374151", "#1f2937", "#374151"] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
                    className="industries-card-title"
                  >
                    {industry.title}
                  </motion.h5>

                  <p className="industries-card-description">{industry.description}</p>

                  {/* Stats */}
                  <div className="industries-stats-container">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
                      className={`industries-stat-projects industries-stat-projects-${colorVariant}`}
                    >
                      <Star className="industries-stat-icon" />
                      <span>{industry.projects}</span>
                    </motion.div>

                    <motion.div
                      animate={{ x: [0, 3, 0], rotate: [0, 10, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.15 }}
                      className="industries-stat-growth"
                    >
                      <TrendingUp className="industries-stat-icon" />
                    </motion.div>
                  </div>

                  {/* Progress Line */}
                  <motion.div
                    animate={{ scaleX: [0, 1, 0.7, 1], opacity: [0.5, 1, 0.8, 1] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
                    className={`industries-progress-line industries-progress-line-${colorVariant}`}
                  />

                  {/* Hover Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="industries-hover-arrow"
                  >
                    <ArrowRight className="industries-hover-arrow-icon" />
                  </motion.div>

                  {/* Corner Decoration */}
                  <motion.div
                    animate={{ rotate: [0, 360], scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                    className="industries-corner-decoration"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} className="industries-cta-section">
          <motion.div
            animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="industries-cta-bg-pattern"
            style={{ backgroundSize: "200% 200%" }}
          />

          <div className="industries-cta-floating-icons">
            {[ShoppingBag, GraduationCap, Heart, Home, Truck, DollarSign].map((Icon, index) => (
              <motion.div
                key={index}
                className="industries-cta-floating-icon"
                style={{ left: "50%", top: "50%", transformOrigin: "0 0" }}
                animate={{ rotate: [0, 360], scale: [0.8, 1.3, 0.8], opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 15 + index * 2, repeat: Infinity, ease: "linear", delay: index * 0.8 }}
              >
                <motion.div
                  style={{ transform: `translateX(${80 + index * 25}px) translateY(-12px)` }}
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 15 + index * 2, repeat: Infinity, ease: "linear", delay: index * 0.8 }}
                >
                  <Icon className="w-full h-full" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="relative z-10">
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 360], scale: [1, 1.3, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="industries-cta-rocket-container"
            >
              <Rocket className="industries-cta-rocket" />
            </motion.div>

            <div
              className="cta-description"
              dangerouslySetInnerHTML={{ __html: finalPageContent.industry_call_to_action_button_text || "" }}
            />

            <div className="industries-cta-buttons">
              {/* <Link href={finalPageContent.contact_button_link || "#contact"}> */}
              <motion.button
                whileHover={{ scale: 1.05, y: -3, boxShadow: "0 10px 40px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToId(finalPageContent.contact_button_link)}
                animate={{
                  boxShadow: [
                    "0 4px 20px rgba(59, 130, 246, 0.2)",
                    "0 8px 30px rgba(59, 130, 246, 0.4)",
                    "0 4px 20px rgba(59, 130, 246, 0.2)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="button-primary group"
              >
                <span>{finalPageContent.contact_button_text || "Contact Me"}</span>
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <ArrowRight className="industries-cta-button-icon group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </motion.button>
              {/* </Link> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
