"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Award,
  TrendingUp,
  MessageCircle,
  Heart,
  ThumbsUp,
  Building,
  Clock,
  Target,
  Pause,
  Play,
} from "lucide-react";

import type {
  TestimonialsSectionProps,
  TestimonialsPageContent,
  TestimonialItem,
} from "@/Utils/types";
import { TESTIMONIALS_DATA, TESTIMONIALS_PAGE_CONTENT } from "@/Utils/data";

const clampRating = (rating: number) => {
  if (!Number.isFinite(rating)) return 5;
  return Math.max(1, Math.min(5, Math.round(rating)));
};

const TestimonialsSection = ({ pageContent, testimonials }: TestimonialsSectionProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const finalPageContent: TestimonialsPageContent = {
    ...TESTIMONIALS_PAGE_CONTENT,
    ...(pageContent ?? {}),
  };

  const finalTestimonials: TestimonialItem[] = useMemo(() => {
    const list = (testimonials && testimonials.length ? testimonials : TESTIMONIALS_DATA) ?? [];
    // normalize rating to avoid odd values breaking stars
    return list.map((t) => ({ ...t, rating: clampRating(t.rating) }));
  }, [testimonials]);

  const hasTestimonials = finalTestimonials.length > 0;

  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // keep index valid if array size changes
  useEffect(() => {
    if (!hasTestimonials) return;
    if (currentTestimonial > finalTestimonials.length - 1) {
      setCurrentTestimonial(0);
    }
  }, [hasTestimonials, finalTestimonials.length, currentTestimonial]);

  const nextTestimonial = useCallback(() => {
    if (!hasTestimonials) return;
    setCurrentTestimonial((prev) => (prev + 1) % finalTestimonials.length);
  }, [hasTestimonials, finalTestimonials.length]);

  const prevTestimonial = useCallback(() => {
    if (!hasTestimonials) return;
    setCurrentTestimonial((prev) => (prev - 1 + finalTestimonials.length) % finalTestimonials.length);
  }, [hasTestimonials, finalTestimonials.length]);

  useEffect(() => {
    if (!isAutoPlaying || !hasTestimonials) return;
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, hasTestimonials, nextTestimonial]);

  const currentClient = hasTestimonials ? finalTestimonials[currentTestimonial] : null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <section id="testmonials" ref={ref} className="testimonials-section">
      {/* Always Animated Background Elements */}
      <div className="testimonials-bg-elements">
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360], opacity: [0.02, 0.08, 0.02] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="testimonials-bg-element-1"
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1], rotate: [360, 180, 0], opacity: [0.02, 0.06, 0.02] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="testimonials-bg-element-2"
        />

        {[MessageCircle, Heart, ThumbsUp, Star, Award].map((Icon, index) => (
          <motion.div
            key={index}
            className="testimonials-floating-icon"
            style={{ left: `${15 + index * 18}%`, top: `${20 + index * 15}%` }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{ duration: 8 + index * 2, repeat: Infinity, delay: index * 1.5, ease: "easeInOut" }}
          >
            <Icon className="testimonials-floating-icon-inner" />
          </motion.div>
        ))}

        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="testimonials-floating-particle"
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div className="subtitle-container">
            <motion.div
              animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              <MessageCircle className="subtitle-icon" />
            </motion.div>
            <span className="section-subtitle">{finalPageContent.testimonial_badge}</span>
          </motion.div>
          <div
            className="about-description"
            dangerouslySetInnerHTML={{ __html: finalPageContent.testimonial_detail || "" }}
          />
        </motion.div>

        {/* Empty state (no crash) */}
        {!hasTestimonials ? (
          <div className="text-center py-16">
            <p className="text-gray-600">No testimonials available right now.</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left: Client Navigation Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="lg:col-span-4 space-y-4"
            >
              {finalTestimonials.map((testimonial, index) => (
                <motion.button
                  key={`${testimonial.name}-${index}`}
                  onClick={() => setCurrentTestimonial(index)}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`testimonials-client-card ${
                    currentTestimonial === index ? "testimonials-client-active" : ""
                  }`}
                >
                  {currentTestimonial === index && (
                    <motion.div
                      animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className={`absolute inset-0 testimonials-bg-${testimonial.colorVariant} rounded-2xl`}
                    />
                  )}

                  <div className="relative z-10 flex items-center p-4">
                    <div className="relative">
                      <motion.img
                        animate={
                          currentTestimonial === index
                            ? { scale: [1, 1.05, 1], rotate: [0, 2, 0] }
                            : {}
                        }
                        transition={{ duration: 4, repeat: Infinity }}
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="testimonials-client-image"
                      />

                      <motion.div
                        animate={
                          currentTestimonial === index
                            ? { rotate: [0, 360], scale: [1, 1.1, 1] }
                            : {}
                        }
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className={`testimonials-status-ring ${
                          currentTestimonial === index
                            ? `testimonials-color-${testimonial.colorVariant}`
                            : "bg-gray-300"
                        }`}
                      />
                    </div>

                    <div className="testimonials-client-info">
                      <motion.p
                        animate={currentTestimonial === index ? { x: [0, 2, 0] } : {}}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="testimonials-client-name"
                      >
                        {testimonial.name}
                      </motion.p>
                      <p className="testimonials-client-company">{testimonial.company}</p>

                      <div className="testimonials-rating">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={
                              currentTestimonial === index
                                ? { scale: [1, 1.2, 1], rotate: [0, 180, 360] }
                                : {}
                            }
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                          >
                            <Star className="w-3 h-3 fill-current" style={{ color: "var(--accent-yellow)" }} />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {currentTestimonial === index && (
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="testimonials-active-indicator"
                      />
                    )}
                  </div>
                </motion.button>
              ))}
            </motion.div>

            {/* Right: Main Testimonial Display */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="lg:col-span-8"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="testimonials-main-card"
                >
                  <motion.div
                    animate={{ scale: [1, 1.02, 1], opacity: [0.05, 0.1, 0.05] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className={`absolute inset-0 testimonials-bg-${currentClient!.colorVariant} rounded-3xl`}
                  />

                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute opacity-20"
                      style={{ left: `${20 + i * 15}%`, top: `${15 + i * 20}%` }}
                      animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 180, 360], scale: [0.5, 1, 0.5] }}
                      transition={{ duration: 6 + i, repeat: Infinity, delay: i * 0.5 }}
                    >
                      <Quote className="w-4 h-4" style={{ color: "var(--accent-blue)" }} />
                    </motion.div>
                  ))}

                  <div className="testimonials-main-content">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="testimonials-quote-icon"
                    >
                      <Quote className="w-16 h-16 text-gray-300" />
                    </motion.div>

                    <motion.blockquote
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="testimonials-text"
                    >
                      <div dangerouslySetInnerHTML={{ __html: currentClient!.text }} />
                    </motion.blockquote>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="testimonials-rating-display"
                    >
                      <div className="flex items-center space-x-1">
                        {[...Array(currentClient!.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
                          >
                            <Star className="w-6 h-6 fill-current" style={{ color: "var(--accent-yellow)" }} />
                          </motion.div>
                        ))}
                      </div>
                      <span className="ml-3 text-gray-600 font-semibold">
                        {currentClient!.rating}.0 / 5.0
                      </span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="testimonials-details-grid"
                    >
                      <div className="testimonials-client-details">
                        <motion.img
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 4, repeat: Infinity }}
                          src={currentClient!.image}
                          alt={currentClient!.name}
                          className="testimonials-client-main-image"
                        />
                        <div>
                          <p className="testimonials-client-main-name">{currentClient!.name}</p>
                          <p className="testimonials-client-position">{currentClient!.position}</p>
                          <p className="testimonials-client-main-company">{currentClient!.company}</p>
                        </div>
                      </div>

                      <div className="testimonials-metrics">
                        <div className="testimonials-metric-item">
                          <Building className="w-4 h-4" style={{ color: "var(--accent-blue)" }} />
                          <span className="testimonials-metric-label">Project:</span>
                          <span className="testimonials-metric-value">{currentClient!.project}</span>
                        </div>
                        <div className="testimonials-metric-item">
                          <Clock className="w-4 h-4" style={{ color: "var(--accent-green)" }} />
                          <span className="testimonials-metric-label">Duration:</span>
                          <span className="testimonials-metric-value">{currentClient!.duration}</span>
                        </div>
                        <div className="testimonials-metric-item">
                          <Target className="w-4 h-4" style={{ color: "var(--accent-purple)" }} />
                          <span className="testimonials-metric-label">Industry:</span>
                          <span className="testimonials-metric-value">{currentClient!.industry}</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 }}
                      className="testimonials-results-badge"
                    >
                      <motion.div
                        animate={{
                          boxShadow: [
                            "0 4px 15px rgba(59,130,246,0.3)",
                            "0 8px 25px rgba(59,130,246,0.4)",
                            "0 4px 15px rgba(59,130,246,0.3)",
                          ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className={`inline-flex items-center px-6 py-3 testimonials-color-${currentClient!.colorVariant} text-white rounded-full font-semibold`}
                      >
                        <TrendingUp className="w-5 h-5 mr-2" />
                        {currentClient!.results}
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <motion.div className="testimonials-controls">
                <motion.button
                  onClick={prevTestimonial}
                  whileHover={{ scale: 1.1, x: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="testimonials-nav-btn"
                >
                  <ChevronLeft className="w-6 h-6" style={{ color: "var(--gray-600)" }} />
                </motion.button>

                <div className="testimonials-control-center">
                  <motion.button
                    onClick={() => setIsAutoPlaying((v) => !v)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      backgroundColor: isAutoPlaying ? ["#ffffff", "#f0f9ff", "#ffffff"] : "#ffffff",
                    }}
                    transition={{ backgroundColor: { duration: 2, repeat: Infinity } }}
                    className="testimonials-play-btn"
                  >
                    {isAutoPlaying ? (
                      <Pause className="w-5 h-5 text-gray-600" />
                    ) : (
                      <Play className="w-5 h-5 text-gray-600" />
                    )}
                  </motion.button>

                  <div className="testimonials-indicators">
                    {finalTestimonials.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        animate={{
                          scale: index === currentTestimonial ? [1, 1.3, 1] : 1,
                          opacity: index === currentTestimonial ? [0.8, 1, 0.8] : 0.5,
                        }}
                        transition={{
                          scale: { duration: 2, repeat: Infinity },
                          opacity: { duration: 2, repeat: Infinity },
                        }}
                        className={`testimonials-indicator ${
                          index === currentTestimonial
                            ? `testimonials-color-${currentClient!.colorVariant}`
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <motion.button
                  onClick={nextTestimonial}
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.9 }}
                  className="testimonials-nav-btn"
                >
                  <ChevronRight className="w-6 h-6" style={{ color: "var(--gray-600)" }} />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;