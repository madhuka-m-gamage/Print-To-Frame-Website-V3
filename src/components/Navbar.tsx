import React, { useState, useEffect, useRef } from 'react';
import { Page } from '../types';
import { ArrowUpRight, Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const PORTAL_URL = 'https://portal.print2frame.xyz/';

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY || document.documentElement.scrollTop;

          // When near the top, always keep navbar visible
          if (currentScrollY < 60) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY.current + 8) {
            // Scrolling down past threshold -> hide header smoothly
            if (!mobileMenuOpen) {
              setIsVisible(false);
            }
          } else if (currentScrollY < lastScrollY.current - 8) {
            // Scrolling back up past threshold -> show header smoothly
            setIsVisible(true);
          }

          lastScrollY.current = Math.max(0, currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Our Process', page: 'process' },
    { label: 'Why Us', page: 'capabilities' },
    { label: 'Contact Us', page: 'contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isVisible || mobileMenuOpen ? 0 : -90,
          opacity: isVisible || mobileMenuOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.28,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="fixed top-2.5 sm:top-4 left-0 right-0 z-50 px-3 sm:px-8 lg:px-16 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between relative pointer-events-auto">
          {/* Left: Brand Logo in liquid-glass capsule */}
          <div className="flex items-center justify-start flex-1">
            <a
              id="navbar-logo-link"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 group cursor-pointer liquid-glass px-2.5 sm:px-3.5 py-1.5 rounded-full hover:border-[#00daf3]/40 transition-all duration-300 shadow-lg"
            >
              <img
                src="/logo-dark.png"
                alt="Print To Frame Logo"
                className="h-6 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Center (Desktop): Perfectly centered liquid-glass pill with navigation links */}
          <nav
            id="desktop-navigation-bar"
            className="hidden md:flex items-center liquid-glass rounded-full px-2 py-1.5 shadow-2xl border border-[#1e2838]"
          >
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activePage === item.page;
                return (
                  <button
                    key={item.page}
                    onClick={() => onNavigate(item.page)}
                    className={`px-3.5 py-1.5 text-xs md:text-sm font-medium rounded-full transition-all duration-200 font-body whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'text-[#00daf3] bg-[#00daf3]/10 border border-[#00daf3]/30 shadow-[0_0_12px_rgba(0,218,243,0.3)]'
                        : 'text-[#a1a1aa] hover:text-[#f4f4f5] hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Right: Portal Button with identical capsule spacing + Mobile Hamburger */}
          <div className="flex items-center justify-end gap-2 sm:gap-3 flex-1">
            {/* Dedicated Top-Right Portal Button */}
            <a
              id="navbar-portal-btn"
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 group cursor-pointer liquid-glass px-2.5 sm:px-3.5 py-1.5 rounded-full hover:border-[#00daf3]/40 transition-all duration-300 shadow-lg"
            >
              <span className="text-xs sm:text-sm font-semibold text-[#f4f4f5] group-hover:text-[#00daf3] transition-colors pl-1">
                Portal
              </span>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#00daf3] text-black flex items-center justify-center group-hover:scale-105 transition-transform shadow-[0_0_10px_rgba(0,218,243,0.4)]">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </div>
            </a>

            {/* Mobile Hamburger Toggle (Touch target 44px min) */}
            <button
              id="mobile-nav-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden liquid-glass w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center cursor-pointer text-[#f4f4f5] active:scale-95 transition-transform border border-[#1e2838]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#00daf3]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Backdrop overlay for mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md md:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 30,
              mass: 0.8,
            }}
            className="fixed inset-x-3 sm:inset-x-6 top-16 sm:top-20 z-50 liquid-glass-strong rounded-3xl p-5 sm:p-6 md:hidden border border-[#1e2838] shadow-2xl backdrop-blur-3xl max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain"
          >
            <div className="flex flex-col gap-2.5 font-body">
              {/* Top brand info in mobile menu */}
              <div className="flex items-center justify-between pb-3 mb-1 border-b border-[#1e2838]">
                <img
                  src="/logo-dark.png"
                  alt="Print To Frame Logo"
                  className="h-6 w-auto object-contain"
                />
                <span className="text-[10px] font-mono text-[#00daf3] uppercase tracking-wider bg-[#00daf3]/10 px-2 py-0.5 rounded border border-[#00daf3]/30">
                  Kadawatha, LK
                </span>
              </div>

              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between min-h-[44px] cursor-pointer ${
                    activePage === item.page
                      ? 'text-[#00daf3] bg-[#00daf3]/10 border border-[#00daf3]/30'
                      : 'text-[#a1a1aa] hover:text-[#f4f4f5] active:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {activePage === item.page && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00daf3]" />
                  )}
                </button>
              ))}

              <div className="pt-3 mt-2 border-t border-[#1e2838] flex flex-col gap-2.5">
                <a
                  href={PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#00daf3] text-black py-3 rounded-full text-sm font-semibold shadow-[0_0_15px_rgba(0,218,243,0.4)] min-h-[44px] active:scale-[0.98] transition-transform"
                >
                  <span>Fabrication Portal Login</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="tel:+94711419027"
                  className="flex items-center justify-center gap-2 liquid-glass py-3 rounded-full text-sm font-medium text-[#f4f4f5] border border-[#1e2838] min-h-[44px] active:scale-[0.98] transition-transform"
                >
                  <Phone className="w-4 h-4 text-[#00daf3]" />
                  <span className="font-mono text-xs">+94 71 141 9027</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
