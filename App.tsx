
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Projects from './components/Projects';
import WhyChoose from './components/WhyChoose';
import Journey from './components/Journey';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Placements from './components/Placements';
import FAQ from './components/FAQ';
import Batches from './components/Batches';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CourseDetail from './components/CourseDetail';
import ServiceDetail from './components/ServiceDetail';
import EnrollmentForm from './components/EnrollmentForm';
import AboutPage from './pages/AboutPage';
import BatchesPage from './pages/BatchesPage';
import AllCoursesPage from './pages/AllCoursesPage';
import PlacementsPage from './pages/PlacementsPage';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [showAboutPage, setShowAboutPage] = useState(false);
  const [showBatchesPage, setShowBatchesPage] = useState(false);
  const [showAllCoursesPage, setShowAllCoursesPage] = useState(false);
  const [showPlacementsPage, setShowPlacementsPage] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    if (isLoading || selectedCourse || selectedService || isEnrolling || showAboutPage || showBatchesPage || showAllCoursesPage || showPlacementsPage) return;

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');

          const target = entry.target as HTMLElement;
          const lightBg = target.dataset.bgLight;
          const darkBg = target.dataset.bgDark;

          if (theme === 'light' && lightBg) {
            document.body.style.backgroundColor = lightBg;
          } else if (theme === 'dark' && darkBg) {
            document.body.style.backgroundColor = darkBg;
          }
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.section-reveal, .reveal, .stagger-reveal');
    revealElements.forEach(el => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, [isLoading, selectedCourse, selectedService, isEnrolling, showAboutPage, showBatchesPage, showAllCoursesPage, showPlacementsPage, theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleCloseDetail = () => {
    setSelectedCourse(null);
    setSelectedService(null);
    setIsEnrolling(false);
    setShowAboutPage(false);
    setShowBatchesPage(false);
    setShowAllCoursesPage(false);
    setShowPlacementsPage(false);
    window.scrollTo(0, 0);
    document.body.style.backgroundColor = theme === 'light' ? '#fcfbf7' : '#0f172a';
  };

  const handleSelectCourse = (id: string) => {
    setSelectedCourse(id);
    setSelectedService(null);
    setIsEnrolling(false);
    setShowAboutPage(false);
    setShowBatchesPage(false);
    setShowAllCoursesPage(false);
    setShowPlacementsPage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.style.backgroundColor = theme === 'light' ? '#ffffff' : '#020617';
  };

  const handleSelectService = (id: string) => {
    setSelectedService(id);
    setSelectedCourse(null);
    setIsEnrolling(false);
    setShowAboutPage(false);
    setShowBatchesPage(false);
    setShowAllCoursesPage(false);
    setShowPlacementsPage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.style.backgroundColor = theme === 'light' ? '#ffffff' : '#020617';
  };

  const handleOpenEnrollment = () => {
    setIsEnrolling(true);
    setSelectedCourse(null);
    setSelectedService(null);
    setShowAboutPage(false);
    setShowBatchesPage(false);
    setShowAllCoursesPage(false);
    setShowPlacementsPage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.style.backgroundColor = theme === 'light' ? '#ffffff' : '#020617';
  };

  const handleOpenAbout = () => {
    setShowAboutPage(true);
    setSelectedCourse(null);
    setSelectedService(null);
    setIsEnrolling(false);
    setShowBatchesPage(false);
    setShowAllCoursesPage(false);
    setShowPlacementsPage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.style.backgroundColor = theme === 'light' ? '#ffffff' : '#020617';
  };

  const handleOpenBatches = () => {
    setShowBatchesPage(true);
    setShowAboutPage(false);
    setSelectedCourse(null);
    setSelectedService(null);
    setIsEnrolling(false);
    setShowAllCoursesPage(false);
    setShowPlacementsPage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.style.backgroundColor = theme === 'light' ? '#ffffff' : '#020617';
  };

  const handleOpenPlacements = () => {
    setShowPlacementsPage(true);
    setShowAllCoursesPage(false);
    setShowBatchesPage(false);
    setShowAboutPage(false);
    setSelectedCourse(null);
    setSelectedService(null);
    setIsEnrolling(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.style.backgroundColor = theme === 'light' ? '#ffffff' : '#020617';
  };

  const handleOpenAllCourses = () => {
    setShowAllCoursesPage(true);
    setShowBatchesPage(false);
    setShowAboutPage(false);
    setSelectedCourse(null);
    setSelectedService(null);
    setIsEnrolling(false);
    setShowPlacementsPage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.style.backgroundColor = theme === 'light' ? '#ffffff' : '#020617';
  };

  const handleNavigateToSection = (id: string) => {
    if (id === 'batches') {
      handleOpenBatches();
      return;
    }
    if (id === 'placements') {
      handleOpenPlacements();
      return;
    }

    if (selectedCourse || selectedService || isEnrolling || showAboutPage || showBatchesPage || showAllCoursesPage || showPlacementsPage) {
      setSelectedCourse(null);
      setSelectedService(null);
      setIsEnrolling(false);
      setShowAboutPage(false);
      setShowBatchesPage(false);
      setShowAllCoursesPage(false);
      setShowPlacementsPage(false);

      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[9999] bg-[#fcfbf7] dark:bg-[#020617] flex flex-col items-center justify-center transition-colors duration-1000">
        <div className="relative mb-8">
          <img
            src="/images/logo.png"
            alt="Swhizz Technologies"
            className="w-60 h-auto animate-pulse"
          />
          <div className="absolute -inset-4 border-2 border-teal-500/20 rounded-full animate-[spin_4s_linear_infinite]" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative transition-colors duration-1000">
      {(!selectedCourse && !selectedService && !isEnrolling && !showAboutPage && !showBatchesPage && !showAllCoursesPage && !showPlacementsPage) && (
        <Navbar
          theme={theme}
          onToggleTheme={toggleTheme}
          onNavigateToService={handleSelectService}
          onNavigateToCourse={handleSelectCourse}
          onNavigateToAbout={handleOpenAbout}
          onNavigateToBatches={handleOpenBatches}
          onNavigateToAllCourses={handleOpenAllCourses}
          onNavigateToPlacements={handleOpenPlacements}
        />
      )}
      <main>
        {isEnrolling ? (
          <EnrollmentForm onBack={handleCloseDetail} theme={theme} />
        ) : selectedCourse ? (
          <CourseDetail
            courseId={selectedCourse}
            onBack={handleCloseDetail}
            onNavigateToCourse={handleSelectCourse}
            theme={theme}
          />
        ) : selectedService ? (
          <ServiceDetail
            serviceId={selectedService}
            onBack={handleCloseDetail}
            theme={theme}
          />
        ) : showAboutPage ? (
          <AboutPage onBack={handleCloseDetail} theme={theme} />
        ) : showBatchesPage ? (
          <BatchesPage onBack={handleCloseDetail} onEnroll={handleOpenEnrollment} theme={theme} />
        ) : showAllCoursesPage ? (
          <AllCoursesPage onBack={handleCloseDetail} onSelectCourse={handleSelectCourse} theme={theme} />
        ) : showPlacementsPage ? (
          <PlacementsPage
            onBack={handleCloseDetail}
            onEnroll={handleOpenEnrollment}
            onContact={() => handleNavigateToSection('contact')}
            theme={theme}
          />
        ) : (
          <>
            <section id="home" className="section-reveal" data-bg-light="#fdfcf0" data-bg-dark="#020617">
              <Hero onEnroll={handleOpenEnrollment} />
            </section>
            <section id="about" className="section-reveal" data-bg-light="#ffffff" data-bg-dark="#0f172a"><About onSeeMore={handleOpenAbout} /></section>
            <section id="courses" className="section-reveal" data-bg-light="#fcfbf7" data-bg-dark="#111827"><Courses onSelectCourse={handleSelectCourse} onViewAll={handleOpenAllCourses} /></section>
            <section id="projects" className="section-reveal" data-bg-light="#fdfcf0" data-bg-dark="#020617"><Projects /></section>
            <section id="whyus" className="section-reveal" data-bg-light="#0f172a" data-bg-dark="#020617"><WhyChoose /></section>
            <section id="journey" className="section-reveal" data-bg-light="#fcfcf7" data-bg-dark="#0f172a"><Journey onEnroll={handleOpenEnrollment} /></section>
            <section id="services" className="section-reveal" data-bg-light="#ffffff" data-bg-dark="#020617"><Services onSelectService={handleSelectService} /></section>
            <section id="gallery" className="section-reveal" data-bg-light="#fcfbf7" data-bg-dark="#0f172a"><Gallery /></section>
            <section id="placements" className="section-reveal" data-bg-light="#fdfdfb" data-bg-dark="#111827"><Placements /></section>
            <section id="faq" className="section-reveal" data-bg-light="#ffffff" data-bg-dark="#0f172a"><FAQ /></section>
            <section id="contact" className="section-reveal" data-bg-light="#f8fafc" data-bg-dark="#020617"><Contact /></section>
          </>
        )}
      </main>
      <Footer onNavigateToSection={handleNavigateToSection} />
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default App;
