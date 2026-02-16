"use client";
import { ArrowRight, Sparkles, Code, Smartphone, Globe, Cloud } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

import { HERO_PAGE_CONTENT, HERO_SERVICES, HERO_STATS } from "@/Utils/data";
import type { HeroProps, HeroIconMap, HeroPageContent } from "@/Utils/types";
import { scrollToId } from "@/Utils/constant";

const Hero = ({ pageContent, heroServices, heroStats }: HeroProps) => {
    // ✅ Merge incoming content with defaults (UI unchanged)
    const finalPageContent: HeroPageContent = {
        ...HERO_PAGE_CONTENT,
        ...(pageContent ?? {}),
    };

    const finalHeroServices = heroServices?.length ? heroServices : HERO_SERVICES;
    const finalHeroStats = heroStats?.length ? heroStats : HERO_STATS;

    // Icon mapping for hero services
    const iconMap: HeroIconMap = {
        Globe: <Globe className="w-5 h-5 text-white" />,
        Smartphone: <Smartphone className="w-5 h-5 text-white" />,
        Cloud: <div className="w-5 h-5 text-white">☁️</div>,
        Code: <Code className="w-5 h-5 text-white" />,
    };

    return (
        <section className="hero-section" id="hero">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full h-auto relative hero-main-container"
            >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Modern Geometric Background Animation */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Animated Grid Lines */}
                    <motion.div
                        className="absolute inset-0 opacity-10 hero-animated-grid"
                        animate={{
                            backgroundPosition: ["0px 0px", "80px 80px"],
                            opacity: [0.05, 0.15, 0.05],
                        }}
                        transition={{
                            backgroundPosition: { duration: 20, repeat: Infinity, ease: "linear" },
                            opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                        }}
                    />

                    {/* Floating Geometric Shapes */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={`shape-${i}`}
                            className={`absolute opacity-20 hero-floating-shape-${i + 1}`}
                            animate={{
                                x: [0, Math.random() * 200 - 100, 0],
                                y: [0, Math.random() * 200 - 100, 0],
                                rotate: [0, 360],
                                scale: [1, 1.2, 1],
                                opacity: [0.1, 0.3, 0.1],
                            }}
                            transition={{
                                duration: 15 + Math.random() * 10,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 2,
                            }}
                        />
                    ))}

                    {/* Diagonal Lines Animation */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={`line-${i}`}
                            className={`absolute h-px bg-linear-to-r from-transparent via-white/20 to-transparent hero-diagonal-line hero-diagonal-line-${i + 1}`}
                            animate={{ x: ["-100%", "100%"], opacity: [0, 1, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }}
                        />
                    ))}

                    {/* Floating Code Particles */}
                    <div className="absolute inset-0 pointer-events-none">
                        {["<>", "{ }", "( )", "[ ]", "...", "=>", "&&", "||"].map((symbol, i) => (
                            <motion.div
                                key={`code-${i}`}
                                className={`absolute select-none hero-code-particle-${i + 1}`}
                                animate={{
                                    y: [0, -200],
                                    x: [0, Math.random() * 100 - 50],
                                    opacity: [0, 0.4, 0],
                                    rotate: [0, Math.random() * 360],
                                }}
                                transition={{
                                    duration: 8 + Math.random() * 4,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: i * 1.5,
                                }}
                            >
                                {symbol}
                            </motion.div>
                        ))}
                    </div>

                    {/* Animated Network Connections */}
                    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 800">
                        {[...Array(12)].map((_, i) => (
                            <motion.line
                                key={`connection-${i}`}
                                stroke="rgba(255, 255, 255, 0.3)"
                                strokeWidth="1"
                                strokeDasharray="4,4"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: [0, 1, 0], opacity: [0, 0.6, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
                            />
                        ))}
                    </svg>

                    {/* Curved Wave Lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
                                <stop offset="50%" stopColor="rgba(147, 51, 234, 0.4)" />
                                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.4)" />
                            </linearGradient>
                            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(16, 185, 129, 0.3)" />
                                <stop offset="50%" stopColor="rgba(6, 182, 212, 0.3)" />
                                <stop offset="100%" stopColor="rgba(16, 185, 129, 0.3)" />
                            </linearGradient>
                        </defs>

                        <motion.path
                            d="M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z"
                            fill="url(#waveGradient1)"
                            animate={{
                                d: [
                                    "M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z",
                                    "M0,350 Q300,150 600,350 T1200,350 L1200,800 L0,800 Z",
                                    "M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z",
                                ],
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />

                        <motion.path
                            d="M0,500 Q300,300 600,500 T1200,500 L1200,800 L0,800 Z"
                            fill="url(#waveGradient2)"
                            animate={{
                                d: [
                                    "M0,500 Q300,300 600,500 T1200,500 L1200,800 L0,800 Z",
                                    "M0,450 Q300,250 600,450 T1200,450 L1200,800 L0,800 Z",
                                    "M0,500 Q300,300 600,500 T1200,500 L1200,800 L0,800 Z",
                                ],
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        />
                    </svg>

                    {/* Hexagonal Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        {[...Array(15)].map((_, i) => (
                            <motion.div
                                key={`hex-${i}`}
                                className={`absolute hero-hexagon hero-hexagon-${i + 1}`}
                                animate={{ rotate: [0, 360], scale: [1, 1.1, 1], opacity: [0.05, 0.15, 0.05] }}
                                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
                            />
                        ))}
                    </div>

                    {/* Glowing Orbs */}
                    {[...Array(4)].map((_, i) => (
                        <motion.div
                            key={`orb-${i}`}
                            className={`absolute rounded-full blur-2xl hero-glowing-orb-${i + 1}`}
                            animate={{ x: [0, 100, -50, 0], y: [0, -50, 100, 0], scale: [1, 1.3, 0.8, 1], opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "easeInOut", delay: i * 3 }}
                        />
                    ))}

                    {/* Circuit Pattern */}
                    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
                        <motion.g animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
                            <path d="M100,100 L200,100 L200,200 L300,200 L300,300 L400,300" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" fill="none" strokeDasharray="5,5" />
                            <path d="M500,150 L600,150 L600,250 L700,250 L700,350 L800,350" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" fill="none" strokeDasharray="3,3" />
                            <path d="M150,400 L250,400 L250,500 L350,500 L350,600" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="1" fill="none" strokeDasharray="4,4" />
                            <circle cx="200" cy="200" r="3" fill="rgba(59, 130, 246, 0.5)" />
                            <circle cx="300" cy="300" r="3" fill="rgba(16, 185, 129, 0.5)" />
                            <circle cx="600" cy="250" r="3" fill="rgba(245, 158, 11, 0.5)" />
                            <circle cx="250" cy="500" r="3" fill="rgba(239, 68, 68, 0.5)" />
                        </motion.g>
                    </svg>
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex items-center">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full min-h-screen">
                        {/* Left Content */}
                        <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-7 hero-inner text-center lg:text-left">
                            {/* Badge */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="inline-flex items-center space-x-3 bg-linear-to-r from-white/15 to-white/5 backdrop-blur-lg rounded-full px-6 py-3 mb-8 border border-white/30 shadow-lg"
                            >
                                <motion.div className="hero-badge-icon" animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                                    <Code className="w-8 h-8" />
                                </motion.div>
                                <span className="hero-badge-text">{finalPageContent.hero_badge}</span>
                                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 bg-green-400 rounded-full" />
                            </motion.div>

                            {/* Subtitle */}
                            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }} className="mb-6">
                                <motion.p
                                    className="hero-subtitle"
                                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                >
                                    {finalPageContent.hero_heading}
                                </motion.p>
                                <motion.div className="hero-subtitle-underline" initial={{ width: 0 }} animate={{ width: 80 }} transition={{ duration: 1, delay: 1 }} />
                            </motion.div>

                            {/* Description */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="mb-8 hero-description-container"
                                dangerouslySetInnerHTML={{ __html: finalPageContent.hero_description }}
                            />

                            {/* CTA */}
                            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 1.2 }} className="flex flex-col sm:flex-row gap-4 mb-12 items-center lg:items-start justify-center lg:justify-start relative">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -3, boxShadow: "0 10px 40px rgba(59, 130, 246, 0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToId(finalPageContent.get_stated_bttuon_link)}
                                    className="relative button-primary w-full sm:w-auto overflow-hidden group"
                                >
                                    <span className="relative z-10 flex items-center justify-center space-x-3">
                                        <span>{finalPageContent.get_stated_bttuon_text}</span>
                                        <motion.div className="group-hover:translate-x-1 transition-transform" whileHover={{ x: 5 }}>
                                            <ArrowRight className="w-5 h-5" />
                                        </motion.div>
                                    </span>
                                    <motion.div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" whileHover={{ scale: 1.1 }} />
                                </motion.button>

                                {/* <Link href={finalPageContent?.view_portfolio_button_link}> */}
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -3, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToId(finalPageContent.view_portfolio_button_link)}
                                    className="button-secondary w-full sm:w-auto relative group"
                                >
                                    <span className="flex items-center justify-center space-x-3">
                                        <span>{finalPageContent.viw_portfolio_button}</span>
                                        <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                                            <Sparkles className="w-5 h-5" />
                                        </motion.div>
                                    </span>
                                </motion.button>
                                {/* </Link> */}
                            </motion.div>

                            {/* Stats */}
                            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 1.4 }} className="hero-stats-container">
                                {finalHeroStats.map((stat, index) => (
                                    <motion.div key={index} className="hero-stat-item relative group" whileHover={{ scale: 1.05 }} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}>
                                        <div className="relative">
                                            <motion.div
                                                className={`hero-stat-number bg-linear-to-r ${stat.color} bg-clip-text text-transparent`}
                                                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                                            >
                                                {stat.number}
                                            </motion.div>
                                            <div className="hero-stat-label">{stat.label}</div>
                                            <motion.div className={`w-full h-0.5 bg-linear-to-r ${stat.color} mt-2 rounded-full`} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 2 + index * 0.2 }} />
                                            <motion.div className={`absolute inset-0 bg-linear-to-r ${stat.color} opacity-0 group-hover:opacity-20 rounded-lg blur-xl transition-opacity`} initial={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} />
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Floating dots */}
                            <motion.div className="absolute rounded-full hero-floating-dot-1" animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity }} />
                            <motion.div className="absolute rounded-full hero-floating-dot-2" animate={{ scale: [1, 2, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} />
                        </motion.div>

                        {/* Right Content */}
                        <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="lg:col-span-5 relative hidden lg:block">
                            <div className="relative w-full h-[500px] lg:h-[600px]">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="absolute bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 hero-dashboard-main"
                                >
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center space-x-3">
                                            <div className="flex space-x-1">
                                                <div className="rounded-full hero-dashboard-window-control"></div>
                                                <div className="rounded-full hero-dashboard-window-control-inactive"></div>
                                                <div className="rounded-full hero-dashboard-window-control-inactive"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="hero-dashboard-title">{finalPageContent.hero_services_heading}</span>
                                        </div>
                                    </div>

                                    {/* Growth Badge */}
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 1 }} className="absolute rounded-lg px-3 py-2 flex items-center space-x-2 hero-growth-badge">
                                        <div className="w-4 h-4 text-green-600">📈</div>
                                        <span className="hero-growth-badge-text">{finalPageContent.services_growth_text}</span>
                                    </motion.div>

                                    {/* Service Cards */}
                                    <div className="space-y-4 mt-8">
                                        {finalHeroServices.map((service) => (
                                            <motion.div
                                                key={service.id}
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.6, delay: service.delay }}
                                                className="hero-service-card rounded-2xl p-4 shadow-lg"
                                            >
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <div className={`w-10 h-10 ${service.iconClass} rounded-xl flex items-center justify-center`}>
                                                        {iconMap[service.icon as keyof HeroIconMap] || iconMap.Code}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4>{service.title}</h4>
                                                        <p>{service.description}</p>
                                                    </div>
                                                </div>

                                                <div className="w-full bg-gray-200 rounded-full">
                                                    <motion.div
                                                        className={`rounded-full ${service.progressClass}`}
                                                        initial={{ width: 0 }}
                                                        animate={{ width: service.progress }}
                                                        transition={{ duration: 2, delay: service.delay + 0.6 }}
                                                    />
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Bottom Badges */}
                                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                                        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 2.5 }} className="flex items-center space-x-2 hero-bottom-badge-secure rounded-lg px-3 py-2">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                            <span>{finalPageContent.secure_reliable_text}</span>
                                        </motion.div>

                                        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 2.7 }} className="flex items-center space-x-2 hero-bottom-badge-fast rounded-lg px-3 py-2">
                                            <div className="w-4 h-4 text-purple-600">⚡</div>
                                            <span>{finalPageContent.fast_deliver_text}</span>
                                        </motion.div>
                                    </div>
                                </motion.div>

                                {/* Floating icons */}
                                <motion.div
                                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute backdrop-blur-lg rounded-2xl border border-white/50 flex items-center justify-center shadow-lg hero-floating-icon-container-1"
                                >
                                    <Code className="w-6 h-6 hero-floating-icon-1" />
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, -15, 0], rotate: [0, -3, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute backdrop-blur-lg rounded-xl border border-white/50 flex items-center justify-center shadow-lg hero-floating-icon-container-2"
                                >
                                    <Sparkles className="w-5 h-5 hero-floating-icon-2" />
                                </motion.div>

                                {/* Glow */}
                                <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute rounded-full blur-2xl hero-background-glow-1" />
                                <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute rounded-full blur-2xl hero-background-glow-2" />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-12 right-8 hero-scroll-indicator hidden md:block">
                    <div className="flex flex-col items-center space-y-3">
                        <div className="hero-scroll-indicator-line"></div>
                        <div className="hero-scroll-indicator-text">Scroll</div>
                        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} className="rounded-full hero-scroll-indicator-dot" />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
