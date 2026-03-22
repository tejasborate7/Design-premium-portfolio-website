import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HomeAboutTeaser } from './components/HomeAboutTeaser';
import { WorkSection } from './components/WorkSection';
import { VideoSection } from './components/VideoSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage({
  isDark,
  toggleTheme,
}: {
  isDark: boolean;
  toggleTheme: () => void;
}) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} isAboutPage={false} />
      <main>
        <HeroSection
          onExploreWork={() => scrollToSection('work')}
          onContact={() => scrollToSection('contact')}
        />
        <HomeAboutTeaser />
        <WorkSection />
        <VideoSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function AboutPageWrapper({
  isDark,
  toggleTheme,
}: {
  isDark: boolean;
  toggleTheme: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <AboutPage />
    </div>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<HomePage isDark={isDark} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/about"
          element={<AboutPageWrapper isDark={isDark} toggleTheme={toggleTheme} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
