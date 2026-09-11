import React, { useState } from 'react';
import { Page } from '../types';
import FadingVideo from './FadingVideo';
import SpotlightCard from './SpotlightCard';
import {
  Zap,
  Truck,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  XCircle,
  Users,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Layers,
} from 'lucide-react';
import { motion, AnimatePresence, easeOut } from 'motion/react';
import AnimatedCounter from './AnimatedCounter';

interface CapabilitiesProps {
  onNavigate: (page: Page) => void;
}

export default function Capabilities({ onNavigate }: CapabilitiesProps) {
  const [activeTab, setActiveTab] = useState<'system' | 'clients' | 'printers'>('system');

  const marketComparisons = [
    {
      feature: 'Operational Velocity',
      analog: 'Paralyzed by manual guesswork, vague quotes, and 5-10 day delayed lead times.',
      p2f: 'Algorithmic instant quoting and 12-24 hour CNC fabrication turnaround.',
    },
    {
      feature: 'Documentation & Compliance',
      analog: 'Choked by handwritten paper slips, physical ledgers, and lost order specs.',
      p2f: 'Strict 0-Paper Policy; RAMIS-compliant cloud telemetry and immutable job audits.',
    },
    {
      feature: 'Structural Precision',
      analog: 'Volatile reliance on individual master welder mood and hand cutting variance.',
      p2f: 'Automated roll-forming machinery with sub-millimeter structural tolerances.',
    },
    {
      feature: 'Corrosion Resistance',
      analog: 'Inferior manual spray primers that peel and oxidize within 6-12 months.',
      p2f: 'Zinc Preservation strategy; hot-dip galvanized steel (GS) built for decades.',
    },
    {
      feature: 'Pricing Transparency',
      analog: 'Arbitrary markups, hidden extras, and shifting fabrication costs.',
      p2f: 'Transparent algorithmic pricing calibrated directly to material dimensions.',
    },
    {
      feature: 'Logistics Responsibility',
      analog: 'The "delivery nightmare" dumped onto the client to arrange transport.',
      p2f: 'Integrated doorstep pickup and final-mile delivery across Sri Lanka.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#0b0e14] text-[#f4f4f5] pt-24 sm:pt-28 pb-20 px-4 sm:px-8 lg:px-16 font-body relative overflow-hidden">
      {/* Background Video Preview (Continuous background synchronized across Version 3) */}
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

      {/* Background ambient lighting */}
      <div
        className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-[#00daf3]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-10 w-[450px] h-[450px] bg-[#00daf3]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Badge & Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 liquid-glass rounded-full px-3 sm:px-4 py-1.5 mb-4 border border-[#00daf3]/30 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#00daf3] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#00daf3]">
              // Operational Intelligence · Active
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading italic text-[#f4f4f5] mb-4 tracking-tight leading-[1.05]">
            Why Choose <br />
            <span className="text-[#00daf3] not-italic">Print To Frame?</span>
          </h1>

          <p className="text-sm sm:text-base text-[#a1a1aa] font-light leading-relaxed max-w-2xl mx-auto">
            Traditional metal workshops are plagued by delays, rust, and guesswork. We operate as a
            Digital Systematic Executor—bringing parametric engineering and industrial speed to skeletal framing.
          </p>
        </motion.div>

        {/* Tab Switcher Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
          className="flex justify-center mb-10 sm:mb-12"
        >
          <div className="liquid-glass p-1.5 rounded-full border border-[#1e2838] flex items-center gap-1 sm:gap-2 shadow-2xl max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab('system')}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer min-h-[44px] whitespace-nowrap ${
                activeTab === 'system'
                  ? 'bg-[#00daf3] text-black shadow-[0_0_15px_rgba(0,218,243,0.5)] font-semibold'
                  : 'text-[#a1a1aa] hover:text-[#f4f4f5]'
              }`}
            >
              Our System
            </button>
            <button
              onClick={() => setActiveTab('clients')}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer min-h-[44px] whitespace-nowrap ${
                activeTab === 'clients'
                  ? 'bg-[#00daf3] text-black shadow-[0_0_15px_rgba(0,218,243,0.5)] font-semibold'
                  : 'text-[#a1a1aa] hover:text-[#f4f4f5]'
              }`}
            >
              For Direct Clients
            </button>
            <button
              onClick={() => setActiveTab('printers')}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer min-h-[44px] whitespace-nowrap ${
                activeTab === 'printers'
                  ? 'bg-[#00daf3] text-black shadow-[0_0_15px_rgba(0,218,243,0.5)] font-semibold'
                  : 'text-[#a1a1aa] hover:text-[#f4f4f5]'
              }`}
            >
              For Print Shops & Agents
            </button>
          </div>
        </motion.div>

        {/* Tab Content Display */}
        <div className="min-h-[420px] mb-16">
          <AnimatePresence mode="wait">
            {activeTab === 'system' && (
              <motion.div
                key="system"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.28 }}
                className="space-y-12 sm:space-y-16"
              >
                {/* 3 Key Advantages Cards */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-heading text-[#f4f4f5] mb-6 flex items-center gap-2.5">
                    <Sparkles className="w-5 h-5 text-[#00daf3]" />
                    <span>Engineered Strategic Advantages</span>
                  </h2>

                  <motion.div 
                    initial="hidden" 
                    animate="visible" 
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
                  >
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}>
                      <SpotlightCard className="liquid-glass rounded-2xl sm:rounded-3xl p-6 border border-[#1e2838] hover:border-[#00daf3]/40 transition-all shadow-xl flex flex-col justify-between h-full">
                        <div>
                          <div className="w-12 h-12 rounded-2xl liquid-glass flex items-center justify-center mb-4 border border-[#00daf3]/30">
                            <Cpu className="w-6 h-6 text-[#00daf3]" />
                          </div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#00daf3] block mb-1">
                            01 · Algorithmic Workflow
                          </span>
                          <h3 className="text-lg font-heading text-[#f4f4f5] mb-2">Parametric Precision</h3>
                          <p className="text-xs sm:text-sm text-[#a1a1aa] font-light leading-relaxed">
                            We replace guesswork with automated engineering calculations. Every joint, span, and wind-load
                            tolerance is modeled before steel is rolled.
                          </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-[#1e2838] flex items-center justify-between text-[11px] font-mono text-[#00daf3]">
                          <span>TOLERANCE</span>
                          <span>± <AnimatedCounter value={0.5} decimals={1} duration={2.5} /> MM</span>
                        </div>
                      </SpotlightCard>
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}>
                      <SpotlightCard className="liquid-glass rounded-2xl sm:rounded-3xl p-6 border border-[#1e2838] hover:border-[#00daf3]/40 transition-all shadow-xl flex flex-col justify-between h-full">
                        <div>
                          <div className="w-12 h-12 rounded-2xl liquid-glass flex items-center justify-center mb-4 border border-[#00daf3]/30">
                            <ShieldCheck className="w-6 h-6 text-[#00daf3]" />
                          </div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#00daf3] block mb-1">
                            02 · Zinc Preservation
                          </span>
                          <h3 className="text-lg font-heading text-[#f4f4f5] mb-2">Galvanized Superiority</h3>
                          <p className="text-xs sm:text-sm text-[#a1a1aa] font-light leading-relaxed">
                            Factory-coated galvanized steel coils prevent surface oxidization. Unlike welded black iron that
                            rusts internally, our frames withstand monsoonal humidity.
                          </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-[#1e2838] flex items-center justify-between text-[11px] font-mono text-[#00daf3]">
                          <span>COATING</span>
                          <span>ZINC GS FACTORY</span>
                        </div>
                      </SpotlightCard>
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}>
                      <SpotlightCard className="liquid-glass rounded-2xl sm:rounded-3xl p-6 border border-[#1e2838] hover:border-[#00daf3]/40 transition-all shadow-xl flex flex-col justify-between h-full">
                        <div>
                          <div className="w-12 h-12 rounded-2xl liquid-glass flex items-center justify-center mb-4 border border-[#00daf3]/30">
                            <Truck className="w-6 h-6 text-[#00daf3]" />
                          </div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#00daf3] block mb-1">
                            03 · Full Lifecycle Logistics
                          </span>
                          <h3 className="text-lg font-heading text-[#f4f4f5] mb-2">Turnkey Logistics</h3>
                          <p className="text-xs sm:text-sm text-[#a1a1aa] font-light leading-relaxed">
                            Doorstep banner pickup, factory flex mounting, and direct client site delivery eliminate the hassle
                            of managing transport for oversize physical structures.
                          </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-[#1e2838] flex items-center justify-between text-[11px] font-mono text-[#00daf3]">
                          <span>SQFT FRAMED</span>
                          <span><AnimatedCounter value={10000} prefix="" suffix="+" duration={3} /> SQFT</span>
                        </div>
                      </SpotlightCard>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Industrial Comparison Table */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-heading text-[#f4f4f5] flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-[#00daf3]" />
                        <span>System Comparison Matrix</span>
                      </h2>
                      <p className="text-xs text-[#a1a1aa] mt-1 font-light">
                        How Print To Frame fundamentally alters the unit economics of frame fabrication.
                      </p>
                    </div>
                    <span className="text-[10px] font-mono uppercase text-[#00daf3] border border-[#00daf3]/30 px-3 py-1 rounded-full w-fit">
                      // Benchmarking 2026
                    </span>
                  </div>

                  <div className="liquid-glass rounded-2xl sm:rounded-3xl border border-[#1e2838] overflow-hidden shadow-2xl">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
                        <thead>
                          <tr className="border-b border-[#1e2838] bg-[#121822]/60 font-mono text-[11px] uppercase tracking-wider">
                            <th className="p-4 sm:p-5 text-[#a1a1aa] w-1/4">Operational Vector</th>
                            <th className="p-4 sm:p-5 text-red-400 w-3/8 flex items-center gap-1.5">
                              <XCircle className="w-3.5 h-3.5" /> Traditional Analog Shops
                            </th>
                            <th className="p-4 sm:p-5 text-[#00daf3] w-3/8">
                              <span className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5" /> Print To Frame (P2F)
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#1e2838]/60 font-light">
                          {marketComparisons.map((row, i) => (
                            <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                              <td className="p-4 sm:p-5 font-mono text-xs text-[#f4f4f5] font-normal">
                                {row.feature}
                              </td>
                              <td className="p-4 sm:p-5 text-[#a1a1aa] pr-6">
                                <span className="text-red-300/80 block">{row.analog}</span>
                              </td>
                              <td className="p-4 sm:p-5 text-[#f4f4f5] bg-[#00daf3]/[0.02]">
                                <span className="text-[#00daf3] font-normal">{row.p2f}</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'clients' && (
              <motion.div
                key="clients"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.28 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="liquid-glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#1e2838] shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl liquid-glass flex items-center justify-center mb-4 border border-[#00daf3]/30">
                      <Zap className="w-6 h-6 text-[#00daf3]" />
                    </div>
                    <h3 className="text-xl font-heading text-[#f4f4f5] mb-2">Eliminate Fabrication Headaches</h3>
                    <p className="text-xs sm:text-sm text-[#a1a1aa] font-light leading-relaxed mb-4">
                      Direct corporate clients, event producers, and retailers frequently encounter unreliable local fabricators.
                      We offer a structured corporate procurement path with instant digital estimates, milestone visibility, and zero surprises.
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#f4f4f5]/90">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00daf3] shrink-0" />
                        <span>Fixed parametric pricing without surprise markups</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00daf3] shrink-0" />
                        <span>Turnkey doorstep delivery to your office or venue</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00daf3] shrink-0" />
                        <span>High-tension flex banner mounting that never sags</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#1e2838]">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="text-xs font-mono uppercase text-[#00daf3] hover:underline flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Request a custom corporate quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="liquid-glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#1e2838] shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl liquid-glass flex items-center justify-center mb-4 border border-[#00daf3]/30">
                      <ShieldCheck className="w-6 h-6 text-[#00daf3]" />
                    </div>
                    <h3 className="text-xl font-heading text-[#f4f4f5] mb-2">Weather-Hardened Structural Durability</h3>
                    <p className="text-xs sm:text-sm text-[#a1a1aa] font-light leading-relaxed mb-4">
                      Sri Lanka’s humid coastal climate rapidly destroys painted iron frames. Our galvanized steel framework
                      preserves structural rigidity in heavy rain, direct coastal sunlight, and wind load.
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#f4f4f5]/90">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00daf3] shrink-0" />
                        <span>Factory-bonded zinc shielding halts oxidation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00daf3] shrink-0" />
                        <span>Bespoke engineering for shop fronts, stages, and hoardings</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00daf3] shrink-0" />
                        <span>Photographic proof of installation and handover</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#1e2838]">
                    <button
                      onClick={() => onNavigate('portfolio')}
                      className="text-xs font-mono uppercase text-[#00daf3] hover:underline flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Inspect completed frame projects</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'printers' && (
              <motion.div
                key="printers"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.28 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="liquid-glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#1e2838] shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl liquid-glass flex items-center justify-center mb-4 border border-[#00daf3]/30">
                      <Users className="w-6 h-6 text-[#00daf3]" />
                    </div>
                    <h3 className="text-xl font-heading text-[#f4f4f5] mb-2">Automated Agent Referral Model</h3>
                    <p className="text-xs sm:text-sm text-[#a1a1aa] font-light leading-relaxed mb-4">
                      Digital print shops specialize in large-format printing, not welding and steel logistics. Partner with us
                      to offer your customers turnkey framed signage while earning structured commissions on every square foot.
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#f4f4f5]/90">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00daf3] shrink-0" />
                        <span>Unique QR intake code for effortless customer referrals</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00daf3] shrink-0" />
                        <span>Automatic commission payout on warehouse check-in</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00daf3] shrink-0" />
                        <span>We handle 100% of the heavy metal fabrication & transport</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#1e2838]">
                    <a
                      href="https://portal.print2frame.xyz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono uppercase text-[#00daf3] hover:underline flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Access partner agent portal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="liquid-glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#1e2838] shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl liquid-glass flex items-center justify-center mb-4 border border-[#00daf3]/30">
                      <Layers className="w-6 h-6 text-[#00daf3]" />
                    </div>
                    <h3 className="text-xl font-heading text-[#f4f4f5] mb-2">Expand Your Service Portfolio</h3>
                    <p className="text-xs sm:text-sm text-[#a1a1aa] font-light leading-relaxed mb-4">
                      Offer complete, installation-ready signage to high-ticket clients without investing in roll-forming
                      machinery, welding permits, raw steel inventory, or logistics trucks.
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#f4f4f5]/90">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00daf3] shrink-0" />
                        <span>Free pickup of printed flex banners directly from your shop</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00daf3] shrink-0" />
                        <span>Professional flex fixing and drum-tight canvas stretching</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00daf3] shrink-0" />
                        <span>Delivery under your brand identity or direct co-branding</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#1e2838]">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="text-xs font-mono uppercase text-[#00daf3] hover:underline flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Connect with our partner manager</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="liquid-glass rounded-3xl p-6 sm:p-10 border border-[#00daf3]/30 bg-[#121822]/35 backdrop-blur-md shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#00daf3] block mb-1.5">
              // Kadawatha Advanced Manufacturing Facility
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading italic text-[#f4f4f5]">
              Experience precision steel framing firsthand
            </h2>
          </div>
          <button
            onClick={() => onNavigate('process')}
            className="bg-[#00daf3] text-black hover:bg-[#00daf3]/90 rounded-full px-6 py-3 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-[0_0_18px_rgba(0,218,243,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer min-h-[48px] whitespace-nowrap"
          >
            <span>Review The 7-Stage Process</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
