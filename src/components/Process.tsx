import React, { useState } from 'react';
import { Page, PipelineStep } from '../types';
import FadingVideo from './FadingVideo';
import {
  QrCode,
  Users,
  Coins,
  Warehouse,
  Hammer,
  Truck,
  LockKeyhole,
  Briefcase,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ShieldCheck,
  Zap,
  FileCheck,
  CheckCircle2,
} from 'lucide-react';
import { motion, AnimatePresence, easeOut } from 'motion/react';

interface ProcessProps {
  onNavigate: (page: Page) => void;
}

interface ExtendedPipelineStep extends PipelineStep {
  sla?: string;
  verification?: string;
  badge?: string;
}

export default function Process({ onNavigate }: ProcessProps) {
  const [activeStep, setActiveStep] = useState<number | null>(0);

  const steps: ExtendedPipelineStep[] = [
    {
      act: 'ACT.01',
      displayNum: '00',
      title: 'Trigger Scan & Intake',
      description:
        'The customer journey initiates when a client scans a unique QR code from an authorized referral partner (Agent). The intake telemetry instantly provisions a lead entry in our digital pipeline.',
      icon: 'QrCode',
      role: 'Partner Agent',
      sla: 'Instantaneous (< 60s)',
      verification: 'Cryptographic Lead ID generated in cloud database',
      badge: 'Digital Intake',
    },
    {
      act: 'ACT.02',
      displayNum: '01',
      title: 'Algorithmic Estimation & Customer Engagement',
      description:
        'A dedicated Business Executive contacts the client with algorithmic pricing, precise millimeter dimensions, structural wind-load recommendations, and formalized job specs.',
      role: 'Biz Exec',
      icon: 'Users',
      sla: 'Within 30 Minutes',
      verification: 'Systemized quotation with 0-Paper digital audit trail',
      badge: 'Parametric Quoting',
    },
    {
      act: 'ACT.03',
      displayNum: '02',
      title: 'Material Pickup & 75% Advance',
      description:
        'A Logistics Executive arrives at client premises to inspect and collect the raw physical banner media, verifying tensile parameters and securing the 75% advance deposit to trigger CNC fabrication.',
      role: 'Logistics Exec',
      icon: 'Coins',
      sla: 'Same-Day Pickup',
      verification: 'Digital invoice & physical intake receipt generated',
      badge: 'Secure Deposit',
    },
    {
      act: 'ACT.04',
      displayNum: '03',
      title: 'Kadawatha Warehouse Handover',
      description:
        'The Logistics Exec checks the media into the Kadawatha fabrication plant. This handover event unlocks and dispatches immediate referral commission disbursements to the partner agent.',
      role: 'Logistics Exec',
      icon: 'Warehouse',
      sla: 'Immediate Check-in',
      verification: 'Automated agent commission credit notification',
      badge: 'Automated Commission',
    },
    {
      act: 'ACT.05',
      displayNum: '04',
      title: 'Galvanized Steel Arc Welding & Flex Fixing',
      description:
        'Galvanized steel is precisely cut and arc welded to form rigid, corrosion-resistant exoskeleton frames at our contact center. Following structural fabrication and subrogation, the digital print canvas is mechanically tension-mounted via industrial flex fixing, ensuring zero crease tolerance.',
      role: 'Factory Fabrication',
      icon: 'Hammer',
      sla: '12-24 Hour Turnaround',
      verification: 'Arc weld integrity & tension gauge inspection',
      badge: 'Heavy Fabrication',
    },
    {
      act: 'ACT.06',
      displayNum: '05',
      title: 'Final-Mile Doorstep Delivery',
      description:
        'Our specialized logistics vehicle transports the rigid, fully framed assembly directly to the customer installation site, capturing high-resolution verification photography.',
      role: 'Logistics Exec',
      icon: 'Truck',
      sla: 'Express Transport',
      verification: 'Geotagged photographic handover verification',
      badge: 'Islandwide Logistics',
    },
    {
      act: 'ACT.07',
      displayNum: '06',
      title: 'The Hard Close & Immutable Audit',
      description:
        'The final 25% balance payment is reconciled. The Business Executive executes the "Hard Close", locking all transactional data permanently in RAMIS-compliant digital ledgers.',
      role: 'Biz Exec',
      icon: 'LockKeyhole',
      sla: 'Instant Reconciliation',
      verification: 'Permanent digital ledger entry & client receipt',
      badge: '0-Paper Audit',
    },
  ];

  const getIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 sm:w-6 sm:h-6 text-[#00daf3]' };
    switch (iconName) {
      case 'QrCode':
        return <QrCode {...props} />;
      case 'Users':
        return <Users {...props} />;
      case 'Coins':
        return <Coins {...props} />;
      case 'Warehouse':
        return <Warehouse {...props} />;
      case 'Hammer':
        return <Hammer {...props} />;
      case 'Truck':
        return <Truck {...props} />;
      case 'LockKeyhole':
        return <LockKeyhole {...props} />;
      default:
        return <Briefcase {...props} />;
    }
  };

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
        className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#00daf3]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-[#00daf3]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Badge & Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 liquid-glass rounded-full px-3 sm:px-4 py-1.5 mb-4 border border-[#00daf3]/30 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#00daf3] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#00daf3]">
              // Service Delivery Protocol · Active
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading italic text-[#f4f4f5] mb-4 tracking-tight leading-[1.05]">
            From Digital Print to <br />
            <span className="text-[#00daf3] not-italic">Engineered Steel Frame</span>
          </h1>

          <p className="text-sm sm:text-base text-[#a1a1aa] font-light leading-relaxed max-w-2xl mx-auto">
            Our 7-stage operational pipeline guarantees millimeter precision, transparent real-time tracking,
            and flawless fabrication without traditional industrial guesswork.
          </p>
        </motion.div>

        {/* Operational Highlights Pill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
            className="liquid-glass rounded-2xl p-4 sm:p-5 border border-[#1e2838] flex items-center gap-3.5 shadow-xl"
          >
            <div className="w-10 h-10 rounded-xl liquid-glass flex items-center justify-center shrink-0 border border-[#00daf3]/30">
              <Zap className="w-5 h-5 text-[#00daf3]" />
            </div>
            <div>
              <p className="text-xs font-mono text-[#00daf3] uppercase tracking-wider">24-Hour Express</p>
              <p className="text-xs text-[#a1a1aa] mt-0.5">Rapid turnaround from intake to final delivery</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
            className="liquid-glass rounded-2xl p-4 sm:p-5 border border-[#1e2838] flex items-center gap-3.5 shadow-xl"
          >
            <div className="w-10 h-10 rounded-xl liquid-glass flex items-center justify-center shrink-0 border border-[#00daf3]/30">
              <ShieldCheck className="w-5 h-5 text-[#00daf3]" />
            </div>
            <div>
              <p className="text-xs font-mono text-[#00daf3] uppercase tracking-wider">Zinc Preservation</p>
              <p className="text-xs text-[#a1a1aa] mt-0.5">Corrosion-proof Galvanized Steel (GS) framing</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: easeOut, delay: 0.3 }}
            className="liquid-glass rounded-2xl p-4 sm:p-5 border border-[#1e2838] flex items-center gap-3.5 shadow-xl"
          >
            <div className="w-10 h-10 rounded-xl liquid-glass flex items-center justify-center shrink-0 border border-[#00daf3]/30">
              <FileCheck className="w-5 h-5 text-[#00daf3]" />
            </div>
            <div>
              <p className="text-xs font-mono text-[#00daf3] uppercase tracking-wider">0-Paper Policy</p>
              <p className="text-xs text-[#a1a1aa] mt-0.5">100% digital telemetry and immutable audit logs</p>
            </div>
          </motion.div>
        </div>

        {/* 7-Step Interactive Pipeline List */}
        <div className="space-y-3.5 sm:space-y-4 mb-16">
          {steps.map((step, idx) => {
            const isOpen = activeStep === idx;
            return (
              <motion.div
                key={step.act}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
                className={`liquid-glass rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#00daf3]/50 shadow-[0_0_30px_rgba(0,218,243,0.15)] bg-[#121822]/40 backdrop-blur-md'
                    : 'border-[#1e2838] hover:border-[#00daf3]/30 bg-[#121822]/20'
                }`}
              >
                {/* Header button: Clicking toggles detail accordion */}
                <button
                  type="button"
                  onClick={() => setActiveStep(isOpen ? null : idx)}
                  className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-4 cursor-pointer select-none group min-h-[56px]"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 sm:gap-5 flex-1 min-w-0">
                    {/* Step Icon */}
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl liquid-glass flex items-center justify-center shrink-0 border transition-colors ${
                        isOpen ? 'border-[#00daf3] shadow-[0_0_15px_rgba(0,218,243,0.4)]' : 'border-[#1e2838]'
                      }`}
                    >
                      {getIcon(step.icon)}
                    </div>

                    {/* Step Title & Index */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[10px] sm:text-xs font-mono text-[#00daf3] tracking-widest uppercase font-semibold">
                          {step.act} · STEP {step.displayNum}
                        </span>
                        {step.role && (
                          <span className="liquid-glass rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] font-mono text-[#a1a1aa] border border-[#1e2838]">
                            {step.role}
                          </span>
                        )}
                        {step.badge && (
                          <span className="hidden sm:inline-block border border-[#00daf3]/20 bg-[#00daf3]/5 text-[9px] font-mono text-[#00daf3] px-2 py-0.5 rounded-full">
                            {step.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-heading text-[#f4f4f5] group-hover:text-[#00daf3] transition-colors truncate">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Toggle Indicator */}
                  <div className="w-8 h-8 rounded-full liquid-glass flex items-center justify-center shrink-0 border border-[#1e2838] group-hover:border-[#00daf3]/50 transition-colors">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#00daf3]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#a1a1aa] group-hover:text-[#00daf3]" />
                    )}
                  </div>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="border-t border-[#1e2838]/80 px-4 sm:px-6 pb-5 sm:pb-6 pt-4"
                    >
                      <p className="text-xs sm:text-sm text-[#a1a1aa] font-light leading-relaxed mb-5">
                        {step.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#1e2838]/60 text-xs">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00daf3] mt-0.5 shrink-0" />
                          <div>
                            <span className="font-mono text-[#00daf3] uppercase text-[10px] block">Operational SLA</span>
                            <span className="text-[#f4f4f5] font-light">{step.sla || 'Standard Operational Velocity'}</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#00daf3] mt-0.5 shrink-0" />
                          <div>
                            <span className="font-mono text-[#00daf3] uppercase text-[10px] block">Protocol Checkpoint</span>
                            <span className="text-[#f4f4f5] font-light">{step.verification || 'System verified'}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Call to Action Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="liquid-glass rounded-3xl p-6 sm:p-10 border border-[#00daf3]/30 bg-[#121822]/35 backdrop-blur-md shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00daf3]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-xl">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#00daf3] block mb-2">
              // Ready To Deploy Your Frame?
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading italic text-[#f4f4f5] mb-2">
              Have a digital print that needs framing?
            </h2>
            <p className="text-xs sm:text-sm text-[#a1a1aa] font-light">
              Submit your dimensions or project specifications for an instant algorithmic estimate and rapid pickup.
            </p>
          </div>

          <div className="flex flex-col xs:flex-row gap-3 relative z-10 w-full sm:w-auto shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#00daf3] text-black hover:bg-[#00daf3]/90 rounded-full px-6 py-3 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-[0_0_18px_rgba(0,218,243,0.5)] hover:shadow-[0_0_28px_rgba(0,218,243,0.8)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group min-h-[48px]"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('capabilities')}
              className="liquid-glass hover:bg-[#00daf3]/10 text-[#f4f4f5] border border-[#1e2838] hover:border-[#00daf3]/40 rounded-full px-5 py-3 text-xs sm:text-sm font-medium flex items-center justify-center transition-all cursor-pointer min-h-[48px]"
            >
              <span>Explore Why Us</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
