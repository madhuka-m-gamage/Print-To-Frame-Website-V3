import React from 'react';
import { Page } from '../types';
import FadingVideo from './FadingVideo';
import BlurText from './BlurText';
import MagneticButton from './MagneticButton';
import { ArrowUpRight, Play, PenTool, Layers, Zap, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion, easeOut } from 'motion/react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="w-full min-h-screen bg-[#0b0e14] text-[#f4f4f5] selection:bg-[#00daf3]/20 selection:text-[#00daf3] relative overflow-x-hidden">
      {/* Background Video Preview (Single continuous background across all home sections) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* 25% base tint for enhanced video visibility */}
        <div className="absolute inset-0 bg-[#0b0e14]/25 pointer-events-none" />
        {/* Top and bottom shaders for header and footer readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0e14]/80 via-transparent to-[#0b0e14]/85 pointer-events-none" />
      </div>

      {/* =========================================================================
          SECTION 1: HERO (Mobile-optimized, 100svh/100vh, liquid-glass)
         ========================================================================= */}
      <section className="relative z-10 min-h-[100svh] lg:h-screen w-full flex flex-col justify-between overflow-hidden pt-20 sm:pt-24 pb-6 sm:pb-8 px-4 sm:px-8">
        {/* Hero Content (Centered, px-2 sm:px-4 relative z-10) */}
        <div className="relative z-10 max-w-5xl mx-auto px-2 sm:px-4 flex-1 flex flex-col items-center justify-center text-center my-auto w-full">
          {/* Badge (delay 0.4s): liquid-glass pill with brand cyan badge */}
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: easeOut }}
            className="liquid-glass rounded-2xl sm:rounded-full p-1.5 sm:p-1 pl-2 sm:pl-1 pr-3 sm:pr-4 inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-2.5 mb-5 sm:mb-8 shadow-xl border border-[#1e2838] max-w-full"
          >
            <span className="bg-[#00daf3] text-black px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold font-mono tracking-wider uppercase shadow-[0_0_12px_rgba(0,218,243,0.5)] shrink-0">
              GS
            </span>
            <span className="text-[11px] sm:text-xs sm:text-sm text-[#f4f4f5]/90 font-body font-normal text-center sm:text-left">
              Digital Flex Printing &amp; Galvanized Steel (GS) Frames
            </span>
          </motion.div>

          {/* Headline — BlurText component with word-by-word animation */}
          <div className="max-w-4xl mx-auto mb-3 sm:mb-4 px-1">
            <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-[5rem] font-heading italic text-[#f4f4f5] leading-[1.05] sm:leading-[0.9] tracking-tight sm:tracking-[-3px]">
              <BlurText
                text="High-Impact Digital Prints & Precision Steel Frames"
                className="justify-center text-center"
              />
            </h1>
          </div>

          {/* Subheading (delay 0.8s) */}
          <motion.p
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: easeOut }}
            className="mt-2 sm:mt-4 text-xs sm:text-base md:text-lg text-[#a1a1aa] max-w-xl sm:max-w-2xl font-body font-light leading-relaxed mx-auto text-center px-2"
          >
            Professional galvanized steel (GS) frame fabrication and flex fixing for business billboards, tuition class banners, and event backdrops. Custom-built in Kadawatha with precision accuracy.
          </motion.p>

          {/* CTAs (delay 1.1s) — full width on mobile for effortless touch */}
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: easeOut }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-8 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
          >
            {/* Primary CTA: liquid-glass-strong with brand cyan hover */}
            <MagneticButton
              onClick={() => onNavigate('contact')}
              className="liquid-glass-strong rounded-full px-6 sm:px-7 py-3 text-xs sm:text-sm font-semibold text-[#f4f4f5] flex items-center justify-center gap-2 hover:bg-[#00daf3]/10 hover:border-[#00daf3]/50 transition-all duration-300 cursor-pointer group shadow-2xl hover:scale-105 active:scale-95 hover:shadow-[0_0_25px_rgba(0,218,243,0.3)] min-h-[48px]"
            >
              <span>Start Your Project Now</span>
              <ArrowUpRight className="w-4 h-4 text-[#00daf3] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>

            {/* Secondary CTA: matching Portal button style */}
            <MagneticButton
              onClick={() => onNavigate('process')}
              className="bg-[#00daf3] text-black hover:bg-[#00daf3]/90 rounded-full px-6 sm:px-7 py-3 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-[0_0_18px_rgba(0,218,243,0.5)] hover:shadow-[0_0_28px_rgba(0,218,243,0.8)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group min-h-[48px]"
            >
              <span>Explore Our Process</span>
              <Play className="w-3.5 h-3.5 fill-black text-black transition-transform group-hover:scale-110" />
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CAPABILITIES (Responsive height & cards)
         ========================================================================= */}
      <section className="relative z-10 min-h-screen lg:h-screen w-full flex flex-col justify-between overflow-x-hidden px-4 sm:px-12 md:px-16 lg:px-20 py-12 sm:py-20 lg:py-12">
        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-between flex-1 max-w-7xl mx-auto w-full my-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="mb-6 sm:mb-8 lg:mb-6"
          >
            <p className="text-xs sm:text-sm font-mono text-[#00daf3] mb-2 sm:mb-3 tracking-widest uppercase">
              // Industrial Superiority
            </p>
            <h2 className="font-heading italic text-[#f4f4f5] text-3xl sm:text-5xl lg:text-[5.5rem] leading-[0.92] sm:leading-[0.88] tracking-tight sm:tracking-[-3px]">
              Fabrication<br />
              evolved
            </h2>
          </motion.div>

          {/* Three Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 my-auto">
            {/* Card 1: Custom Fabrication */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
              className="liquid-glass rounded-[1.25rem] p-4 sm:p-6 min-h-0 sm:min-h-[260px] lg:min-h-[290px] flex flex-col justify-between group shadow-2xl border border-[#1e2838] hover:border-[#00daf3]/40 hover:shadow-[0_0_20px_rgba(0,218,243,0.2)] active:border-[#00daf3]/30 transition-colors"
            >
              {/* Top Row: Icon + Pill Tags */}
              <div className="flex items-start justify-between gap-2.5 sm:gap-3 mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 liquid-glass rounded-[0.75rem] flex items-center justify-center shrink-0 border border-[#00daf3]/30">
                  <PenTool className="w-4 h-4 sm:w-5 sm:h-5 text-[#00daf3]" />
                </div>
                <div className="flex flex-wrap justify-end gap-1 max-w-full sm:max-w-[80%]">
                  <span className="liquid-glass rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] text-[#00daf3] font-mono whitespace-nowrap border border-[#00daf3]/20">
                    Custom Scale
                  </span>
                  <span className="liquid-glass rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] text-[#a1a1aa] font-mono whitespace-nowrap">
                    Galvanized Steel
                  </span>
                  <span className="liquid-glass rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] text-[#a1a1aa] font-mono whitespace-nowrap">
                    GS Framing
                  </span>
                  <span className="liquid-glass rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] text-[#a1a1aa] font-mono whitespace-nowrap">
                    High Durability
                  </span>
                </div>
              </div>

              {/* Bottom: Title + Description */}
              <div>
                <h3 className="font-heading italic text-[#f4f4f5] text-xl sm:text-2xl lg:text-3xl tracking-[-0.5px] leading-none mb-2">
                  Custom Fabrication
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a1aa] font-body font-light leading-relaxed max-w-[34ch]">
                  Tailored galvanized steel (GS) frames for any scale. From small storefront signboards to massive roadside commercial billboards, we construct the physical backbone of your visibility.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Precision Flex Fixing */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
              className="liquid-glass rounded-[1.25rem] p-4 sm:p-6 min-h-0 sm:min-h-[260px] lg:min-h-[290px] flex flex-col justify-between group shadow-2xl border border-[#1e2838] hover:border-[#00daf3]/40 hover:shadow-[0_0_20px_rgba(0,218,243,0.2)] active:border-[#00daf3]/30 transition-colors"
            >
              {/* Top Row: Icon + Pill Tags */}
              <div className="flex items-start justify-between gap-2.5 sm:gap-3 mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 liquid-glass rounded-[0.75rem] flex items-center justify-center shrink-0 border border-[#00daf3]/30">
                  <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#00daf3]" />
                </div>
                <div className="flex flex-wrap justify-end gap-1 max-w-full sm:max-w-[80%]">
                  <span className="liquid-glass rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] text-[#00daf3] font-mono whitespace-nowrap border border-[#00daf3]/20">
                    100% Fit
                  </span>
                  <span className="liquid-glass rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] text-[#a1a1aa] font-mono whitespace-nowrap">
                    Wrinkle-Free
                  </span>
                  <span className="liquid-glass rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] text-[#a1a1aa] font-mono whitespace-nowrap">
                    Wind Resistance
                  </span>
                  <span className="liquid-glass rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] text-[#a1a1aa] font-mono whitespace-nowrap">
                    Exoskeleton
                  </span>
                </div>
              </div>

              {/* Bottom: Title + Description */}
              <div>
                <h3 className="font-heading italic text-[#f4f4f5] text-xl sm:text-2xl lg:text-3xl tracking-[-0.5px] leading-none mb-2">
                  Precision Flex Fixing
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a1aa] font-body font-light leading-relaxed max-w-[34ch]">
                  Expert tension mounting of digital prints onto engineered exoskeleton steel frames for a crisp, wrinkle-free finish that withstands extreme monsoon conditions.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Rapid Delivery & Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.5, ease: easeOut, delay: 0.3 }}
              className="liquid-glass rounded-[1.25rem] p-4 sm:p-6 min-h-0 sm:min-h-[260px] lg:min-h-[290px] flex flex-col justify-between group shadow-2xl border border-[#1e2838] hover:border-[#00daf3]/40 hover:shadow-[0_0_20px_rgba(0,218,243,0.2)] active:border-[#00daf3]/30 transition-colors"
            >
              {/* Top Row: Icon + Pill Tags */}
              <div className="flex items-start justify-between gap-2.5 sm:gap-3 mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 liquid-glass rounded-[0.75rem] flex items-center justify-center shrink-0 border border-[#00daf3]/30">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#00daf3]" />
                </div>
                <div className="flex flex-wrap justify-end gap-1 max-w-full sm:max-w-[80%]">
                  <span className="liquid-glass rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] text-[#00daf3] font-mono whitespace-nowrap border border-[#00daf3]/20">
                    24HR Express
                  </span>
                  <span className="liquid-glass rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] text-[#a1a1aa] font-mono whitespace-nowrap">
                    SME Priority
                  </span>
                  <span className="liquid-glass rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] text-[#a1a1aa] font-mono whitespace-nowrap">
                    Material-Exact
                  </span>
                  <span className="liquid-glass rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] text-[#a1a1aa] font-mono whitespace-nowrap">
                    Direct Rates
                  </span>
                </div>
              </div>

              {/* Bottom: Title + Description */}
              <div>
                <h3 className="font-heading italic text-[#f4f4f5] text-xl sm:text-2xl lg:text-3xl tracking-[-0.5px] leading-none mb-2">
                  Rapid Turnaround
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a1aa] font-body font-light leading-relaxed max-w-[34ch]">
                  Fast turnaround times tailored for time-sensitive business openings, educational schedules, and campaign deadlines with transparent, material-exact pricing.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WHY US (Strategic Advantage, Liquid-Glass Showcase)
         ========================================================================= */}
      <section className="relative z-10 min-h-screen lg:h-screen w-full flex flex-col justify-center overflow-x-hidden px-4 sm:px-12 md:px-16 lg:px-20 py-14 sm:py-20 lg:py-0">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-14 w-full my-auto">
          {/* Left Column: Why Us Value Propositions */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="w-full lg:w-1/2"
          >
            <span className="text-xs font-mono text-[#00daf3] tracking-widest uppercase block mb-2 sm:mb-3">
              // Why Print To Frame · The Strategic Advantage
            </span>
            <h2 className="font-heading italic text-2xl sm:text-3xl md:text-5xl text-[#f4f4f5] mb-3 sm:mb-4 leading-tight tracking-tight sm:tracking-[-1px]">
              Precision engineering.<br />
              Zero analog guesswork.
            </h2>
            <p className="text-[#a1a1aa] text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-light">
              Traditional fabrication shops rely on manual estimations, subjective lead times, and fragile hand-welded seams. Print To Frame delivers systematic certainty: instant algorithmic quoting, factory zinc-preserved steel frames, wrinkle-free flex tensioning, and doorstep delivery across Sri Lanka.
            </p>

            {/* 4 Feature Highlights in a 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#f4f4f5]/90">
                <CheckCircle2 className="w-4 h-4 text-[#00daf3] shrink-0" />
                <span>Algorithmic Quoting &amp; Direct Rates</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#f4f4f5]/90">
                <CheckCircle2 className="w-4 h-4 text-[#00daf3] shrink-0" />
                <span>Factory Zinc Preservation (Anti-Rust)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#f4f4f5]/90">
                <CheckCircle2 className="w-4 h-4 text-[#00daf3] shrink-0" />
                <span>140 km/h Monsoon Wind Rating</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#f4f4f5]/90">
                <CheckCircle2 className="w-4 h-4 text-[#00daf3] shrink-0" />
                <span>Doorstep Islandwide Delivery</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('capabilities')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 liquid-glass-strong hover:bg-[#00daf3]/10 border border-[#00daf3]/40 text-[#f4f4f5] px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 group cursor-pointer shadow-xl hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(0,218,243,0.3)] min-h-[48px]"
            >
              <span>Explore Why Choose Us</span>
              <ChevronRight className="w-4 h-4 text-[#00daf3] transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Right Column: Physical Installation Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
            className="w-full lg:w-1/2 mt-4 lg:mt-0"
          >
            <div className="liquid-glass rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 border border-[#1e2838] shadow-2xl overflow-hidden">
              <div className="aspect-[16/10] sm:aspect-video rounded-xl sm:rounded-2xl overflow-hidden relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWSeaxYR67rwH18ImgKSg1P7jOQfdI-8pJBwgLQTV_6W2mDiXQLjj4LiH8AVXTrCZ9QY0460Zyms0LZ0W1PWOVJQinQwX7ObNDYrCEScMvu7yrGZg--rcryz_FF_atLvRqU3wMNRwGkhCIa7DMAq5nJfi5jRFMFbclBVCZaH88zvObyY0DoeF5DrIZGBg8_oZu-qVY2AYNLjZfM31pwaSpmE_IztqTviS6HIWtCIU-WmIEuh4mCLqXvQ"
                  alt="Completed retail storefront precision steel frame installation"
                  className="w-full h-full object-cover grayscale-[20%] contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14]/90 via-[#0b0e14]/30 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 liquid-glass rounded-full px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-mono text-[#00daf3] border border-[#00daf3]/30">
                  // KADAWATHA FABRICATION HUB
                </div>
                <div className="absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-4 right-2.5 sm:right-4 flex flex-col sm:flex-row gap-1.5 sm:gap-0 items-start sm:items-center justify-between text-[10px] sm:text-xs font-mono text-[#f4f4f5]/90 bg-[#0b0e14]/90 backdrop-blur-md px-3 py-2 rounded-lg sm:rounded-xl border border-[#1e2838]">
                  <span>ESTIMATION: ALGORITHMIC</span>
                  <span className="text-[#00daf3]">FINISH: ZINC PRESERVED</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
