import React from 'react';
import { Page } from '../types';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const PORTAL_URL = 'https://portal.print2frame.xyz/';

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer
      id="main-app-footer"
      className="relative z-10 border-t border-[#00daf3]/20 bg-[#0b0e14]/25 backdrop-blur-md pt-7 sm:pt-9 pb-6 sm:pb-8 px-4 sm:px-12 lg:px-16 text-[#f4f4f5] font-body shadow-[0_-8px_32px_rgba(0,0,0,0.25)]"
    >
      {/* Specular top glass light reflection */}
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00daf3]/40 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      {/* Ambient glass lighting */}
      <div
        className="absolute -top-16 left-1/3 w-80 h-24 bg-[#00daf3]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6 md:gap-10 mb-6 sm:mb-8 relative z-10">
        {/* Left column: Brand Logo & Tagline */}
        <div className="max-w-md w-full">
          <div className="flex items-center gap-3 mb-2.5 sm:mb-3">
            <img
              src={`${import.meta.env.BASE_URL}logo-dark.png`}
              alt="Print To Frame Logo"
              className="h-7 sm:h-9 w-auto object-contain"
            />
          </div>
          <p className="text-[#a1a1aa] text-xs sm:text-sm leading-relaxed mb-3 font-light">
            Professional skeletal steel systems custom fabricated from galvanized steel (GS) in Kadawatha. Bringing your designs to life with robust framing solutions.
          </p>
          <div className="mb-3.5 sm:mb-4">
            <span className="inline-block liquid-glass border border-[#00daf3]/30 bg-[#00daf3]/10 text-[10px] sm:text-[11px] font-mono text-[#00daf3] px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              "If there is a print, we make the frame."
            </span>
          </div>
          <div className="space-y-1.5 text-xs text-[#a1a1aa]">
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#00daf3] shrink-0 mt-0.5" />
              <span className="leading-snug">No. 58/33 Church Road, Eldeniya, Kadawatha, Sri Lanka</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#00daf3] shrink-0" />
              <a href="tel:+94711419027" className="hover:text-[#00daf3] transition-colors py-0.5">
                +94 71 141 9027
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#00daf3] shrink-0" />
              <a href="mailto:info@print2frame.xyz" className="hover:text-[#00daf3] transition-colors py-0.5">
                info@print2frame.xyz
              </a>
            </div>
          </div>
        </div>

        {/* Right Columns: Nav & Legal */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-7 w-full md:w-auto">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#00daf3] mb-2 sm:mb-2.5 font-mono border-b border-[#1e2838] pb-1">
              Navigation
            </h4>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-[#a1a1aa] hover:text-[#00daf3] transition-colors cursor-pointer py-0.5 block"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="text-[#a1a1aa] hover:text-[#00daf3] transition-colors cursor-pointer py-0.5 block"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('capabilities')}
                  className="text-[#a1a1aa] hover:text-[#00daf3] transition-colors cursor-pointer py-0.5 block"
                >
                  Why Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-[#a1a1aa] hover:text-[#00daf3] transition-colors cursor-pointer py-0.5 block"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a
                  href={PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#a1a1aa] hover:text-[#00daf3] transition-colors cursor-pointer py-0.5"
                >
                  <span>Portal</span>
                  <ArrowUpRight className="w-3 h-3 text-[#00daf3]/70" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#00daf3] mb-2 sm:mb-2.5 font-mono border-b border-[#1e2838] pb-1">
              Solutions
            </h4>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="inline-flex items-center gap-1 text-[#a1a1aa] hover:text-[#00daf3] transition-colors py-0.5 cursor-pointer text-left"
                >
                  <span>Galvanized Steel (GS)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-[#a1a1aa] hover:text-[#00daf3] transition-colors py-0.5 block text-left"
                >
                  GS Frame Fabrication
                </button>
              </li>
              <li>
                <span className="inline-block text-[10px] sm:text-[11px] border border-[#00daf3]/30 bg-[#00daf3]/10 px-2 py-0.5 rounded-full text-[#00daf3] mt-1 font-mono">
                  Islandwide Delivery
                </span>
              </li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-xs uppercase tracking-widest text-[#00daf3] mb-2 sm:mb-2.5 font-mono border-b border-[#1e2838] pb-1">
              Compliance
            </h4>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="text-[#a1a1aa] hover:text-[#00daf3] transition-colors py-0.5 block"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="text-[#a1a1aa] hover:text-[#00daf3] transition-colors py-0.5 block"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-4 sm:pt-5 border-t border-[#1e2838]/80 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 text-center sm:text-left text-xs text-[#a1a1aa]/60 relative z-10">
        <p>&copy; {new Date().getFullYear()} Print To Frame Pvt Ltd. All rights reserved.</p>
        <p className="font-mono text-[10px] sm:text-[11px] text-[#00daf3]/80">Galvanized Steel (GS) · Kadawatha, LK</p>
      </div>
    </footer>
  );
}
