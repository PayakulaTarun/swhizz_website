
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Sun, Moon, Laptop, Users, Award, ShieldCheck, ChevronDown, Code, Layout, Shield, Database, Search, Cloud, Sparkles, TrendingUp, Briefcase, CalendarDays, ArrowRight } from 'lucide-react';

interface NavbarProps {
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
  onNavigateToService?: (id: string) => void;
  onNavigateToCourse?: (id: string) => void;
  onNavigateToAbout?: () => void;
  onNavigateToBatches?: () => void;
  onNavigateToAllCourses?: () => void;
  onNavigateToPlacements?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  theme, onToggleTheme, onNavigateToService, onNavigateToCourse, onNavigateToAbout, onNavigateToBatches, onNavigateToAllCourses, onNavigateToPlacements
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isCoursesHovered, setIsCoursesHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Courses', id: 'courses' },
    { name: 'Services', id: 'services' },
    { name: 'Batches', id: 'batches' },
    { name: 'Placements', id: 'placements' },
  ];

  const services = [
    { id: 'classroom', name: 'Classroom Training', icon: Award },
    { id: 'online', name: 'Online Training', icon: Laptop },
    { id: 'mentorship', name: 'Industry Mentorship', icon: Users },
    { id: 'corporate', name: 'Internships', icon: Sparkles },
    { id: 'placement', name: 'Placement Support', icon: Briefcase },
    { id: 'marketing', name: 'Profile Marketing', icon: TrendingUp },
  ];

  const coursesList = [
    { id: 'java-full-stack', name: 'Java Full Stack', icon: Code },
    { id: 'salesforce-crm', name: 'Salesforce CRM', icon: Layout },
    { id: 'cybersecurity-vapt', name: 'Cybersecurity', icon: Shield },
    { id: 'data-science-ai', name: 'Data Science & AI', icon: Database },
    { id: 'software-testing', name: 'Software Testing', icon: Search },
    { id: 'devops-aws-cloud', name: 'DevOps + AWS', icon: Cloud },
  ];

  const scrollToSection = (id: string) => {
    if (id === 'about' && onNavigateToAbout) {
      onNavigateToAbout();
      setIsOpen(false);
      return;
    }

    if (id === 'batches' && onNavigateToBatches) {
      onNavigateToBatches();
      setIsOpen(false);
      return;
    }

    if (id === 'placements' && onNavigateToPlacements) {
      onNavigateToPlacements();
      setIsOpen(false);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-effect py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => {
            if (window.scrollY === 0) scrollToSection('home');
            else window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img
            src="/images/logo.png"
            alt="Swhizz Technologies Logo"
            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            if (link.id === 'services') {
              return (
                <div
                  key={link.id}
                  className="relative h-full py-4 group/services"
                  onMouseEnter={() => setIsServicesHovered(true)}
                  onMouseLeave={() => setIsServicesHovered(false)}
                >
                  <button
                    onClick={() => scrollToSection('services')}
                    className={`text-sm font-bold transition-colors hover:text-teal-600 flex items-center gap-1 relative ${scrolled ? 'text-slate-600 dark:text-slate-400' : 'text-slate-800 dark:text-white'}`}
                  >
                    {link.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isServicesHovered ? 'rotate-180' : ''}`} />
                    <span className="absolute -bottom-1 left-0 h-[1.5px] bg-teal-500 transition-all duration-300 w-0 group-hover/services:w-full" />
                  </button>

                  <div className={`absolute top-full left-1/2 -translate-x-1/2 w-72 p-4 bg-white dark:bg-slate-900 rounded-[32px] shadow-2xl border border-slate-100 dark:border-slate-800 transition-all duration-500 origin-top ${isServicesHovered ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}`}>
                    <div className="grid grid-cols-1 gap-1">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => onNavigateToService && onNavigateToService(service.id)}
                          className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-teal-50 dark:hover:bg-teal-900/20 text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-all group/item"
                        >
                          <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover/item:text-teal-600 group-hover/item:bg-white transition-all">
                            <service.icon className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-bold text-left">{service.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            if (link.id === 'courses') {
              return (
                <div
                  key={link.id}
                  className="relative h-full py-4 group/courses"
                  onMouseEnter={() => setIsCoursesHovered(true)}
                  onMouseLeave={() => setIsCoursesHovered(false)}
                >
                  <button
                    onClick={() => scrollToSection('courses')}
                    className={`text-sm font-bold transition-colors hover:text-teal-600 flex items-center gap-1 relative ${scrolled ? 'text-slate-600 dark:text-slate-400' : 'text-slate-800 dark:text-white'}`}
                  >
                    {link.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isCoursesHovered ? 'rotate-180' : ''}`} />
                    <span className="absolute -bottom-1 left-0 h-[1.5px] bg-teal-500 transition-all duration-300 w-0 group-hover/courses:w-full" />
                  </button>

                  <div className={`absolute top-full left-1/2 -translate-x-1/2 w-80 p-5 bg-white dark:bg-slate-900 rounded-[32px] shadow-2xl border border-slate-100 dark:border-slate-800 transition-all duration-500 origin-top ${isCoursesHovered ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}`}>
                    <div className="space-y-1 mb-4">
                      {coursesList.map((course) => (
                        <button
                          key={course.id}
                          onClick={() => onNavigateToCourse && onNavigateToCourse(course.id)}
                          className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-teal-50 dark:hover:bg-teal-900/20 text-slate-700 dark:text-slate-300 hover:text-teal-600 transition-all group/item"
                        >
                          <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover/item:text-teal-600 group-hover/item:bg-white transition-all">
                            <course.icon className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-bold text-left">{course.name}</span>
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => onNavigateToAllCourses && onNavigateToAllCourses()}
                      className="w-full py-4 bg-[#020617] text-white rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-xl"
                    >
                      All Courses <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            }

            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-bold transition-colors hover:text-teal-600 relative group/link ${scrolled ? 'text-slate-600 dark:text-slate-400' : 'text-slate-800 dark:text-white'}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-[1.5px] bg-teal-500 transition-all duration-300 w-0 group-hover/link:w-full" />
              </button>
            );
          })}

          <button
            onClick={onToggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-teal-400"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2.5 bg-[#020617] text-white rounded-full text-sm font-bold hover:shadow-xl hover:scale-110 transition-all flex items-center gap-2 group"
          >
            <span className="relative z-10">Join Now</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform relative z-10" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={onToggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center text-slate-800 dark:text-teal-400"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="text-slate-800 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full glass-effect transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[800px] py-6 border-t border-slate-200 dark:border-slate-800 shadow-2xl' : 'max-h-0'}`}>
        <div className="flex flex-col px-6 gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-lg font-bold text-left text-slate-700 dark:text-slate-300"
            >
              {link.name}
            </button>
          ))}
          <div className="h-px bg-slate-100 dark:bg-slate-800" />
          <p className="text-[10px] uppercase tracking-[0.2em] text-teal-600 font-bold mb-[-12px]">Swhizz Courses</p>
          {coursesList.map((course) => (
            <button
              key={course.id}
              onClick={() => onNavigateToCourse && onNavigateToCourse(course.id)}
              className="flex items-center gap-4 text-slate-600 dark:text-slate-400 font-bold"
            >
              <course.icon className="w-5 h-5 text-teal-500" />
              {course.name}
            </button>
          ))}
          <button
            onClick={() => onNavigateToAllCourses && onNavigateToAllCourses()}
            className="w-full py-4 bg-[#020617] text-white rounded-xl text-center font-bold"
          >
            View All Courses
          </button>
          <div className="h-px bg-slate-100 dark:bg-slate-800" />
          <p className="text-[10px] uppercase tracking-[0.2em] text-teal-600 font-bold mb-[-12px]">Services</p>
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => onNavigateToService && onNavigateToService(service.id)}
              className="flex items-center gap-4 text-slate-600 dark:text-slate-400 font-bold"
            >
              <service.icon className="w-5 h-5 text-teal-500" />
              {service.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full py-4 bg-teal-500 text-slate-900 rounded-xl text-center font-bold"
          >
            Join the Formula
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
