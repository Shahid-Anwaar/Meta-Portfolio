"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ExternalLink,
  Eye,
  Star,
  Sparkles,
  Code,
  TrendingUp,
  Globe,
  Palette,
  Layers,
  Award,
  Zap,
  Rocket,
} from "lucide-react";
import Link from "next/link";

// import { s3baseUrl } from "@/config/config";
import type { PortfolioProps, PortfolioPageContent } from "@/Utils/types";
import { PORTFOLIO_PAGE_CONTENT, PORTFOLIO_PROJECTS } from "@/Utils/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const Portfolio = ({ pageContent, portfolioData }: PortfolioProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });

  // ✅ safe defaults (static)
  const finalPageContent: PortfolioPageContent = {
    ...PORTFOLIO_PAGE_CONTENT,
    ...(pageContent ?? {}),
  };

  const finalPortfolioData = portfolioData?.length ? portfolioData : PORTFOLIO_PROJECTS;

  return (
    <section ref={ref} id="projects" className="relative  bg-linear-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Always Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360], opacity: [0.02, 0.08, 0.02] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-32 right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "linear-gradient(to right, rgba(103, 58, 183, 0.3), rgba(33, 150, 243, 0.3))" }}
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1], rotate: [360, 180, 0], opacity: [0.02, 0.06, 0.02] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 left-20 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "linear-gradient(to right, rgba(255, 189, 132, 0.3), rgba(255, 31, 142, 0.3))" }}
        />

        {/* Floating Portfolio Icons */}
        {[Code, Palette, Globe, Layers, Award].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute opacity-10"
            animate={{ y: [0, -40, 0], x: [0, 20, 0], rotate: [0, 180, 360], scale: [0.8, 1.3, 0.8] }}
            transition={{ duration: 10 + index * 2, repeat: Infinity, delay: index * 1.5, ease: "easeInOut" }}
          >
            <Icon className="w-16 h-16" style={{ color: "#673AB7" }} />
          </motion.div>
        ))}

        {/* Animated Particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            animate={{
              y: [0, -120 - Math.random() * 100],
              x: [0, Math.random() * 60 - 30],
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{ duration: Math.random() * 6 + 4, repeat: Infinity, delay: Math.random() * 4, ease: "easeOut" }}
          />
        ))}

        {/* Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute opacity-5"
            animate={{ rotate: [0, 360], scale: [0.8, 1.5, 0.8], opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 12 + i * 2, repeat: Infinity, ease: "linear", delay: i * 0.8 }}
          >
            <div
              className={`w-12 h-12 ${i % 3 === 0 ? "rounded-full" : "rounded-lg rotate-45"}`}
              style={{ backgroundColor: i % 2 === 0 ? "#673AB7" : "#2196F3" }}
            />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Enhanced Header Section */}
        <motion.div variants={containerVariants} className="text-center mb-20">
          <motion.div className="subtitle-container">
            <motion.div
              animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="subtitle-icon" />
            </motion.div>
            <span className="section-subtitle">{finalPageContent.portfolio_badge}</span>
          </motion.div>

          <div className="about-description" dangerouslySetInnerHTML={{ __html: finalPageContent.portfolio_detail || "" }} />
        </motion.div>

        {/* Enhanced Portfolio Grid */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {finalPortfolioData.slice(0, 6).map((project, index) => (
            <motion.div
              key={project.title}
              whileHover={{ scale: 1.03, y: -10, rotateY: 3 }}
              className="portfolio-card group relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50"
            >
              {/* Always Animated Background Gradient */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 180], opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                className="absolute inset-0 rounded-3xl"
                style={{ background: "linear-gradient(to bottom right, rgba(103, 58, 183, 0.1), rgba(33, 150, 243, 0.1))" }}
              />

              {/* Floating Particles for Each Card */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full opacity-50"
                  style={{ backgroundColor: "#673AB7" }}
                  animate={{ y: [0, -20, 0], x: [0, 10, 0], scale: [0.5, 1.2, 0.5], opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
                />
              ))}

              <div className="portfolio-card-inner relative z-10">
                {/* Project Image */}
                <div className="portfolio-image-container portfolio-image-wrapper">
                  <motion.img
                    src={project.image}
                    alt={project.image_description}
                    className="portfolio-image"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />

                  <div className="portfolio-image-overlay" />

                  <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3], backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="portfolio-animated-overlay"
                  />

                  <motion.div
                    animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                    className="portfolio-category-badge"
                  >
                    <span className="px-3 py-1 bg-linear-to-r from-purple-500 to-indigo-500 text-white text-xs font-semibold rounded-full shadow-lg">
                      {project.category}
                    </span>
                  </motion.div>

                  <div className="portfolio-title-wrapper">
                    <motion.h5
                      animate={{ y: [0, -2, 0], opacity: [0.9, 1, 0.9] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.1 }}
                      className="portfolio-title"
                    >
                      {project.title}
                    </motion.h5>
                  </div>

                  <Link href={`/portfolio/${project?.slug}`} className="portfolio-view-overlay">
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} whileHover={{ opacity: 1, scale: 1 }} className="portfolio-view-container">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="portfolio-view-button"
                      >
                        <Eye className="w-6 h-6 text-white" />
                      </motion.div>
                    </motion.div>
                  </Link>
                </div>

                {/* Content */}
                <div className="portfolio-content">
                  <div className="portfolio-content-main">
                    <motion.p
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 5, repeat: Infinity, delay: index * 0.15 }}
                      className="portfolio-description text-gray-600 leading-relaxed"
                    >
                      {project.description}
                    </motion.p>
                  </div>

                  <div className="portfolio-actions flex items-center justify-between pt-4 border-t border-gray-100">
                    <Link href={`/portfolio/${project?.slug}`}>
                      <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{ x: [0, 2, 0], opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
                        className="flex items-center space-x-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors group"
                      >
                        <span>View Details</span>
                        <motion.div animate={{ x: [0, 3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                      </motion.button>
                    </Link>
                  </div>
                </div>

                <motion.div
                  animate={{ scaleX: [0, 1, 0.8, 1], opacity: [0.5, 1, 0.7, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
                  className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-purple-500 to-indigo-500 origin-left"
                />

                <motion.div
                  animate={{ rotate: [0, 360], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: index * 0.3 }}
                  className="absolute -top-1 -right-1 w-4 h-4 border-2 border-purple-300 rounded-full opacity-40"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative bg-linear-to-r from-slate-800 via-gray-800 to-slate-900 rounded-3xl p-12 text-center overflow-hidden"
        >
          <motion.div
            animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-linear-to-r from-white/10 via-transparent to-white/10"
            style={{ backgroundSize: "200% 200%" }}
          />

          <div className="absolute inset-0">
            {[Code, Palette, Globe, Layers, TrendingUp, Zap].map((Icon, index) => (
              <motion.div
                key={index}
                className="absolute w-6 h-6 text-white/20"
                style={{ left: "50%", top: "50%", transformOrigin: "0 0" }}
                animate={{ rotate: [0, 360], scale: [0.8, 1.3, 0.8], opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 12 + index * 2, repeat: Infinity, ease: "linear", delay: index * 0.6 }}
              >
                <motion.div
                  style={{ transform: `translateX(${70 + index * 20}px) translateY(-12px)` }}
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 12 + index * 2, repeat: Infinity, ease: "linear", delay: index * 0.6 }}
                >
                  <Icon className="w-full h-full" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="relative z-10">
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 180, 360], scale: [1, 1.3, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-lg rounded-3xl mb-8 shadow-lg"
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>

            <div
              className="cta-description"
              dangerouslySetInnerHTML={{ __html: finalPageContent.portfolio_call_to_action_description || "" }}
            />

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href={finalPageContent.portfolio_get_started_button_link}>
                <motion.button
                  whileHover={{ scale: 1.05, y: -3, boxShadow: "0 10px 40px rgba(255, 255, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 4px 15px rgba(59, 130, 246, 0.3)",
                      "0 8px 25px rgba(147, 51, 234, 0.4)",
                      "0 4px 15px rgba(59, 130, 246, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-3 group"
                >
                  <span>{finalPageContent.portfolio_get_started_button_text}</span>
                  <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <Rocket className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </Link>

              <Link href={finalPageContent.view_portfolio_button_link}>
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
                  className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors duration-300 flex items-center space-x-3"
                >
                  <span>{finalPageContent.portfolio_view_all_projects_button_text}</span>
                  <motion.div
                    animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
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

export default Portfolio;
