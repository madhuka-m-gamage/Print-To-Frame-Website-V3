import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Process from './components/Process';
import Capabilities from './components/Capabilities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FadingVideo from './components/FadingVideo';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import { ArrowUp } from 'lucide-react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';

interface AppProps {
  initialPage?: Page;
}

export default function App({ initialPage = 'home' }: AppProps) {
  const [activePage, setActivePage] = useState<Page>(initialPage);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleNavigate = (page: Page) => {
    setActivePage(page);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Scroll Progress Tracking with smooth spring animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (typeof window !== 'undefined') {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight > 0) {
              const progress = scrollTop / scrollHeight;
              setShowBackToTop(progress > 0.6);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePage]);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Sync with browser URL changes if any
  useEffect(() => {
    try {
      if (
        typeof window !== 'undefined' &&
        typeof window.scrollTo === 'function' &&
        !navigator.userAgent.includes('jsdom')
      ) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch {
      // noop in test environments
    }
  }, [activePage]);

  return (
    <div className="v3-root min-h-screen bg-[#0b0e14] text-[#f4f4f5] relative">
      {/* Smooth flowing Scroll Progress Bar in brand cyan */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00daf3] via-white to-[#00daf3] origin-left z-[100] pointer-events-none shadow-[0_0_12px_rgba(0,218,243,0.8)]"
        aria-hidden="true"
      />

      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      <main className="w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="w-full"
          >
            {activePage === 'home' ? (
              <Home onNavigate={handleNavigate} />
            ) : activePage === 'process' || activePage === 'pipeline' ? (
              <Process onNavigate={handleNavigate} />
            ) : activePage === 'capabilities' ? (
              <Capabilities onNavigate={handleNavigate} />
            ) : activePage === 'contact' ? (
              <Contact onNavigate={handleNavigate} />
            ) : activePage === 'privacy' ? (
              <div className="pt-24 px-4 sm:px-8 pb-16 bg-[#0b0e14] text-[#f4f4f5] min-h-screen relative overflow-hidden">
                <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                  <FadingVideo
                    src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0b0e14]/25 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0b0e14]/80 via-transparent to-[#0b0e14]/85 pointer-events-none" />
                </div>
                <div className="relative z-10">
                  <PrivacyPolicy onNavigate={handleNavigate} />
                </div>
              </div>
            ) : activePage === 'terms' ? (
              <div className="pt-24 px-4 sm:px-8 pb-16 bg-[#0b0e14] text-[#f4f4f5] min-h-screen relative overflow-hidden">
                <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                  <FadingVideo
                    src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0b0e14]/25 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0b0e14]/80 via-transparent to-[#0b0e14]/85 pointer-events-none" />
                </div>
                <div className="relative z-10">
                  <TermsOfService onNavigate={handleNavigate} />
                </div>
              </div>
            ) : (
              <Home onNavigate={handleNavigate} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6, y: 24, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.6, y: 24, filter: 'blur(8px)' }}
            transition={{
              type: 'spring',
              stiffness: 280,
              damping: 24,
              mass: 0.8,
            }}
            onClick={scrollToTop}
            className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 bg-[#00daf3] text-black hover:bg-[#00daf3]/90 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 active:scale-90 transition-all duration-200 shadow-[0_0_18px_rgba(0,218,243,0.5)] hover:shadow-[0_0_28px_rgba(0,218,243,0.8)] cursor-pointer group"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-black stroke-[2.5] transition-transform group-hover:-translate-y-0.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
