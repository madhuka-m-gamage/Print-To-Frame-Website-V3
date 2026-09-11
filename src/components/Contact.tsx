import React, { useState } from 'react';
import { Page } from '../types';
import { motion, AnimatePresence, easeOut } from 'motion/react';
import FadingVideo from './FadingVideo';
import MagneticButton from './MagneticButton';
import {
  User,
  Phone,
  Send,
  CheckCircle2,
  PhoneCall,
  MapPin,
  Clock,
  Loader2,
  Building2,
  ExternalLink,
} from 'lucide-react';
import { submitLead } from '../../src/lib/leads';

interface ContactProps {
  onNavigate?: (page: Page) => void;
}

export default function Contact({ onNavigate: _onNavigate }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    intent: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const intents = [
    {
      id: 'agent',
      label: 'Print Shop / Agent Partnership',
      sub: 'Earn automated commissions on every client banner frame',
    },
    {
      id: 'client_order',
      label: 'Direct Client Framing Order',
      sub: 'Have a printed flex banner that needs precision framing & delivery',
    },
    {
      id: 'custom_steel',
      label: 'Custom Structural Exoskeleton',
      sub: 'Large-scale hoardings, stage backdrops, or bespoke architectural signage',
    },
    {
      id: 'general',
      label: 'General Inquiry / Estimation',
      sub: 'Algorithmic quotation and technical specifications consultation',
    },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Please enter your full name (at least 3 characters)';
    } else if (!/^[a-zA-Z\s.-]+$/.test(formData.name)) {
      newErrors.name = 'Name can only contain letters, spaces, dots, and hyphens';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required';
    } else if (!/^[7][0-9]{8}$/.test(formData.phone)) {
      newErrors.phone =
        'Please enter a valid Sri Lankan mobile number starting with 7 (e.g. 771234567)';
    }

    if (!formData.intent) {
      newErrors.intent = 'Please select your project requirement';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSubmitError(null);
    setIsSubmitting(true);
    try {
      await submitLead({
        name: formData.name.trim(),
        phone: formData.phone,
        intent: formData.intent,
      });
      setSubmitted(true);
    } catch {
      setSubmitError('Unable to connect to service. Please try calling directly or retry in a moment.');
    } finally {
      setIsSubmitting(false);
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
        className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-[#00daf3]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#00daf3]/5 rounded-full blur-3xl pointer-events-none"
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
              // Client Intake Telemetry · Online
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading italic text-[#f4f4f5] mb-4 tracking-tight leading-[1.05]">
            Initiate Your Project <br />
            <span className="text-[#00daf3] not-italic">With Millimeter Precision</span>
          </h1>

          <p className="text-sm sm:text-base text-[#a1a1aa] font-light leading-relaxed max-w-2xl mx-auto">
            Submit your contact details and requirement below. Our engineering dispatch will provide algorithmic
            pricing, arrange banner pickup, or schedule an onsite technical survey.
          </p>
        </motion.div>

        {/* 2-Column Layout: Form on Left/Top, Facility Info on Right/Bottom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Lead Intake Form (7 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="lg:col-span-7"
          >
            <div className="liquid-glass rounded-3xl p-6 sm:p-8 md:p-10 border border-[#00daf3]/25 bg-[#121822]/40 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#00daf3]/10 rounded-full blur-2xl pointer-events-none" />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#00daf3]/10 border border-[#00daf3] flex items-center justify-center mx-auto mb-5 shadow-[0_0_25px_rgba(0,218,243,0.4)]">
                      <CheckCircle2 className="w-8 h-8 text-[#00daf3]" />
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-heading italic text-[#f4f4f5] mb-2">
                      Telemetry Logged Successfully
                    </h2>
                    <p className="text-xs sm:text-sm text-[#a1a1aa] font-light max-w-md mx-auto mb-6">
                      Thank you, <span className="text-[#00daf3] font-medium">{formData.name}</span>. Your intake request has
                      been dispatched to our Business Executives at the Kadawatha facility.
                    </p>

                    <div className="liquid-glass rounded-2xl p-4 max-w-md mx-auto mb-8 border border-[#1e2838] text-xs font-mono text-left space-y-1.5">
                      <div className="flex justify-between text-[#a1a1aa]">
                        <span>DISPATCH TARGET:</span>
                        <span className="text-[#f4f4f5]">KADAWATHA LOGISTICS</span>
                      </div>
                      <div className="flex justify-between text-[#a1a1aa]">
                        <span>CONTACT MOBILE:</span>
                        <span className="text-[#00daf3]">+94 {formData.phone}</span>
                      </div>
                      <div className="flex justify-between text-[#a1a1aa]">
                        <span>EXPECTED RESPONSE:</span>
                        <span className="text-[#f4f4f5]">&lt; 30 MINUTES</span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', phone: '', intent: '' });
                      }}
                      className="liquid-glass hover:bg-[#00daf3]/10 border border-[#00daf3]/40 text-[#f4f4f5] px-6 py-2.5 rounded-full text-xs font-mono uppercase cursor-pointer"
                    >
                      Submit Another Requirement
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <span className="text-[10px] font-mono text-[#00daf3] uppercase tracking-wider block mb-1">
                        Step 1 · Identification
                      </span>
                      <h3 className="text-lg font-heading text-[#f4f4f5]">Contact Information</h3>
                    </div>

                    {/* Name Input */}
                    <div className="pt-2">
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#a1a1aa] peer-focus:text-[#00daf3] transition-colors z-10">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder=" "
                          className="peer w-full pl-10 pr-4 py-3 bg-[#0b0e14]/70 border border-[#1e2838] rounded-xl text-sm text-[#f4f4f5] focus:outline-none focus:border-[#00daf3] focus:ring-1 focus:ring-[#00daf3] transition-all min-h-[48px] relative z-10"
                        />
                        <label 
                          htmlFor="name" 
                          className="absolute left-10 top-3.5 text-sm text-[#a1a1aa] font-body pointer-events-none transition-all duration-300 origin-left peer-focus:-translate-y-7 peer-focus:-translate-x-10 peer-focus:scale-[0.8] peer-focus:text-[#00daf3] peer-focus:font-mono peer-focus:uppercase peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:-translate-x-10 peer-[:not(:placeholder-shown)]:scale-[0.8] peer-[:not(:placeholder-shown)]:font-mono peer-[:not(:placeholder-shown)]:uppercase z-0"
                        >
                          Full Name / Business Entity <span className="text-[#00daf3]">*</span>
                        </label>
                      </div>
                      {errors.name && <p className="text-red-400 text-xs mt-1.5 font-mono">{errors.name}</p>}
                    </div>

                    {/* Phone Input with +94 Sri Lanka prefix */}
                    <div className="pt-2">
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 flex items-center z-10 pointer-events-none">
                          <span className="inline-flex items-center px-3.5 h-full bg-[#121822] text-[#00daf3] font-mono text-xs border-r border-[#1e2838] rounded-l-xl peer-focus:border-[#00daf3]">
                            +94
                          </span>
                        </div>
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                          placeholder=" "
                          maxLength={9}
                          className="peer w-full pl-[56px] pr-4 py-3 bg-[#0b0e14]/70 border border-[#1e2838] rounded-xl text-sm text-[#f4f4f5] focus:outline-none focus:border-[#00daf3] focus:ring-1 focus:ring-[#00daf3] transition-all min-h-[48px] relative z-10"
                        />
                        <label 
                          htmlFor="phone" 
                          className="absolute left-[56px] top-3.5 text-sm text-[#a1a1aa] font-body pointer-events-none transition-all duration-300 origin-left peer-focus:-translate-y-7 peer-focus:-translate-x-[56px] peer-focus:scale-[0.8] peer-focus:text-[#00daf3] peer-focus:font-mono peer-focus:uppercase peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:-translate-x-[56px] peer-[:not(:placeholder-shown)]:scale-[0.8] peer-[:not(:placeholder-shown)]:font-mono peer-[:not(:placeholder-shown)]:uppercase z-0"
                        >
                          Mobile Telephone <span className="text-[#00daf3]">*</span>
                        </label>
                      </div>
                      {errors.phone && <p className="text-red-400 text-xs mt-1.5 font-mono">{errors.phone}</p>}
                    </div>

                    {/* Requirement Intent Selection */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-xs font-mono text-[#a1a1aa] uppercase">
                          Project Intent / Requirement <span className="text-[#00daf3]">*</span>
                        </label>
                        <span className="text-[10px] font-mono text-[#00daf3]">Select one</span>
                      </div>

                      <div className="grid grid-cols-1 gap-2.5">
                        {intents.map((item) => {
                          const isSelected = formData.intent === item.label;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, intent: item.label })}
                              className={`w-full text-left p-3 sm:p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-start gap-3 select-none ${
                                isSelected
                                  ? 'bg-[#00daf3]/10 border-[#00daf3] shadow-[0_0_15px_rgba(0,218,243,0.2)]'
                                  : 'bg-[#0b0e14]/40 border-[#1e2838] hover:border-[#00daf3]/30'
                              }`}
                            >
                              <div
                                className={`w-4 h-4 rounded-full border mt-0.5 shrink-0 flex items-center justify-center transition-colors ${
                                  isSelected ? 'border-[#00daf3] bg-[#00daf3]' : 'border-[#a1a1aa]'
                                }`}
                              >
                                {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs sm:text-sm font-medium text-[#f4f4f5]">{item.label}</p>
                                <p className="text-[11px] text-[#a1a1aa] font-light mt-0.5">{item.sub}</p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                      {errors.intent && <p className="text-red-400 text-xs mt-1.5 font-mono">{errors.intent}</p>}
                    </div>

                    {/* Submission Error Banner */}
                    {submitError && (
                      <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-xs text-red-400 font-mono">
                        {submitError}
                      </div>
                    )}

                    {/* Submit Button */}
                    <MagneticButton
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#00daf3] text-black hover:bg-[#00daf3]/90 disabled:opacity-50 rounded-full py-3.5 px-6 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_18px_rgba(0,218,243,0.5)] hover:shadow-[0_0_28px_rgba(0,218,243,0.8)] transition-all duration-300 cursor-pointer min-h-[50px] relative overflow-hidden"
                    >
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.div
                            key="submitting"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center gap-2"
                          >
                            <Loader2 className="w-4 h-4 animate-spin text-black" />
                            <span>Dispatching Telemetry...</span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="idle"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center gap-2"
                          >
                            <span>Submit Project Telemetry</span>
                            <Send className="w-4 h-4 text-black" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </MagneticButton>

                    <p className="text-[10px] text-center font-mono text-[#a1a1aa]/70">
                      Zero SPAM guarantee · All client data is encrypted & RAMIS audit compliant.
                    </p>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Facility Location & Quick Hotline (5 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
            className="lg:col-span-5 space-y-4 sm:space-y-5"
          >
            {/* Rapid Hotline Card */}
            <div className="liquid-glass rounded-3xl p-6 sm:p-7 border border-[#1e2838] shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl liquid-glass flex items-center justify-center border border-[#00daf3]/30">
                  <PhoneCall className="w-5 h-5 text-[#00daf3]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#00daf3] tracking-wider block">
                    Direct Operational Line
                  </span>
                  <h3 className="text-base font-heading text-[#f4f4f5]">Urgent Inquiries & Dispatch</h3>
                </div>
              </div>

              <p className="text-xs text-[#a1a1aa] font-light leading-relaxed mb-4">
                Need immediate estimation or banner pickup assistance? Connect directly with our operations desk.
              </p>

              <a
                href="tel:+94771234567"
                className="liquid-glass rounded-2xl p-3 sm:p-3.5 border border-[#00daf3]/40 bg-[#121822]/40 backdrop-blur-md flex items-center justify-between hover:bg-[#00daf3]/10 transition-colors group cursor-pointer block"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#00daf3] block">HOTLINE (LK)</span>
                  <span className="text-sm font-semibold text-[#f4f4f5] group-hover:text-[#00daf3] transition-colors">
                    +94 77 123 4567
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#00daf3] text-black flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 fill-black" />
                </div>
              </a>
            </div>

            {/* Kadawatha Facility Card */}
            <div className="liquid-glass rounded-3xl p-6 sm:p-7 border border-[#1e2838] shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl liquid-glass flex items-center justify-center border border-[#00daf3]/30">
                  <MapPin className="w-5 h-5 text-[#00daf3]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#00daf3] tracking-wider block">
                    Manufacturing Facility
                  </span>
                  <h3 className="text-base font-heading text-[#f4f4f5]">Kadawatha Fabrication Plant</h3>
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#a1a1aa] font-light leading-relaxed mb-4">
                <p className="text-[#f4f4f5]">No. 58/33 Church Road, Eldeniya,</p>
                <p>Kadawatha 11850, Western Province, Sri Lanka</p>
                <div className="flex items-center gap-2 pt-2 text-[11px] font-mono text-[#00daf3]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>MON - SAT: 08:00 - 18:00 IST</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#1e2838] flex items-center justify-between text-xs">
                <span className="font-mono text-[#a1a1aa]">COORDINATES</span>
                <span className="font-mono text-[#00daf3]">7.0016° N, 79.9535° E</span>
              </div>
            </div>

            {/* Partner Agent Portal Link Card */}
            <div className="liquid-glass rounded-3xl p-6 border border-[#1e2838] shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase text-[#00daf3] tracking-wider">
                  Partner Portal
                </span>
                <Building2 className="w-4 h-4 text-[#00daf3]" />
              </div>
              <h3 className="text-base font-heading text-[#f4f4f5] mb-1.5">Already a Registered Agent?</h3>
              <p className="text-xs text-[#a1a1aa] font-light leading-relaxed mb-4">
                Log into the agent portal to inspect live commission ledgers, client banner check-ins, and automated payouts.
              </p>
              <a
                href="https://portal.print2frame.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono uppercase text-[#00daf3] hover:underline inline-flex items-center gap-1.5"
              >
                <span>Launch Agent Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
