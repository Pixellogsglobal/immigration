import React, { useState, useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import BookingSystem from './components/BookingSystem';
import UniversityPartnerships from './components/UniversityPartnerships';
import ReviewSystem from './components/ReviewSystem';
import ContactSupport from './components/ContactSupport';
import AITutor from './features/ai-assistant/AITutor';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import TermsModal from './components/Footer/TermsModal';
import PrivacyModal from './components/Footer/PrivacyModal';

function App() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(() => {
    const saved = localStorage.getItem('cookieConsent');
    return saved === 'true';
  });

  useEffect(() => {
    // Check for cookie consent after a short delay
    const timer = setTimeout(() => {
      const saved = localStorage.getItem('cookieConsent');
      if (saved !== 'true') {
        setCookieConsent(false);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setCookieConsent(true);
  };

  const handleOpenTerms = () => setIsTermsOpen(true);
  const handleCloseTerms = () => setIsTermsOpen(false);
  const handleOpenPrivacy = () => setIsPrivacyOpen(true);
  const handleClosePrivacy = () => setIsPrivacyOpen(false);

  return (
    <ParallaxProvider>
      <div className="relative min-h-screen bg-[#0A0A0B] text-white">
        <Navbar />
        <main className="md:ml-[80px] lg:ml-[240px]">
          <div className="space-y-0">
            <section id="home">
              <Hero />
            </section>
            <section id="about">
              <AboutUs />
            </section>
            <section id="universities">
              <UniversityPartnerships />
            </section>
            <section id="booking">
              <BookingSystem />
            </section>
            <section id="reviews">
              <ReviewSystem />
            </section>
            <section id="contact">
              <ContactSupport />
            </section>
          </div>
        </main>

        <Footer 
          onOpenTerms={handleOpenTerms}
          onOpenPrivacy={handleOpenPrivacy}
        />
        <AITutor />

        {!cookieConsent && (
          <CookieConsent
            onAccept={handleAcceptCookies}
            onOpenTerms={handleOpenTerms}
            onOpenPrivacy={handleOpenPrivacy}
          />
        )}

        <TermsModal 
          isOpen={isTermsOpen}
          onClose={handleCloseTerms}
        />
        <PrivacyModal
          isOpen={isPrivacyOpen}
          onClose={handleClosePrivacy}
        />
      </div>
    </ParallaxProvider>
  );
}

export default App;