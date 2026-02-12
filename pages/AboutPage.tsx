
import React, { useEffect } from 'react';
import {
   ArrowLeft, Rocket, Users, BookOpen, Building2, Globe, HeartHandshake,
   Mic, Folder, Linkedin, Laptop, Users2, Briefcase, Star, Sparkles, Quote,
   CheckCircle2, Target, Award, Github, Eye
}
   from 'lucide-react';

interface AboutPageProps {
   onBack: () => void;
   theme?: 'light' | 'dark';
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack, theme }) => {
   useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
            else entry.target.classList.remove('active');
         });
      }, { threshold: 0.1 });

      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
      return () => observer.disconnect();
   }, []);

   const whyChoosePoints = [
      { title: "Project-Based Learning", icon: Rocket, desc: "Work on real-world projects designed to tackle actual industry challenges." },
      { title: "Expert Trainers", icon: Users, desc: "Learn from IT professionals with proven experience and domain expertise." },
      { title: "Job-Ready Curriculum", icon: BookOpen, desc: "Stay ahead with a curriculum aligned to the latest market and technology trends." },
      { title: "Backed by IT Companies", icon: Building2, desc: "Our training programs are trusted and supported by top IT organizations." },
      { title: "Global Community", icon: Globe, desc: "Connect with a vibrant network of learners, alumni, and IT professionals worldwide." },
      { title: "1:1 Industry Mentorship", icon: HeartHandshake, desc: "Receive personalized guidance from seasoned IT mentors." },
      { title: "Mock Interviews & Tips", icon: Mic, desc: "Boost your confidence with realistic practice sessions and insider strategies." },
      { title: "Portfolio Building", icon: Folder, desc: "Create and showcase a strong, job-ready project portfolio to impress employers." },
      { title: "LinkedIn Optimization", icon: Linkedin, desc: "Enhance your professional profile to attract recruiters and global opportunities." },
      { title: "Hands-On Lab Support", icon: Laptop, desc: "Gain practical experience in labs and live environments to strengthen skills." },
      { title: "Limited Batch Size", icon: Users2, desc: "Enjoy focused learning with personal attention in small, interactive batches." },
      { title: "Placement Assistance", icon: Briefcase, desc: "Receive end-to-end support to secure your dream IT job with top companies." }
   ];

   return (
      <div className="min-h-screen bg-white dark:bg-slate-900 pb-24 overflow-x-hidden selection:bg-teal-500/30">
         {/* Detail Nav */}
         <nav className="fixed top-0 left-0 w-full z-[100] glass-effect py-4 px-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
            <button onClick={onBack} className="group flex items-center gap-3 text-slate-900 dark:text-white font-bold text-[10px] uppercase tracking-[0.3em] transition-all">
               <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
               <span>Return to Hub</span>
            </button>
            <div className="flex items-center gap-4">
               <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-teal-500" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">Excellence Chronicles</span>
               </div>
            </div>
         </nav>

         {/* Hero Section */}
         <section className="relative pt-32 pb-16 px-6 sm:px-12 bg-white dark:bg-slate-950 overflow-hidden">
            <div className="absolute inset-0 cyber-grid opacity-[0.1] pointer-events-none" />
            <div className="max-w-7xl mx-auto text-center reveal active">
               <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm text-teal-600 dark:text-teal-400 font-bold text-[10px] tracking-[0.4em] uppercase mb-10">
                  <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
                  Elite Success Blueprint
               </div>
               <h1 className="text-6xl sm:text-9xl font-display font-bold text-slate-900 dark:text-white leading-[0.85] italic tracking-tighter mb-8">
                  Success <span className="text-teal-600">Formula.</span>
               </h1>
               <p className="text-xl sm:text-2xl text-slate-500 dark:text-slate-400 font-light max-w-3xl mx-auto leading-relaxed italic">
                  "Landing an IT job is 100% possible with the right mix of technical mastery and industry-aligned profile branding."
               </p>
            </div>
         </section>

         {/* Founder Section */}
         <section className="py-24 px-6 sm:px-12 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
               <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="reveal order-2 lg:order-1">
                     <div className="inline-flex items-center gap-2 text-teal-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-6">
                        <Target className="w-4 h-4" />
                        Our Leadership
                     </div>
                     <h2 className="text-4xl sm:text-6xl font-display font-bold text-slate-900 dark:text-white italic leading-tight mb-8">
                        Meet Mr. Kodandaramu Karroti.
                     </h2>
                     <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                        <p className="border-l-4 border-teal-500 pl-8">
                           A visionary tech leader and industry veteran with over <span className="font-bold text-slate-900 dark:text-white">15 years of deep technical expertise</span> in software architecture and IT consultancy.
                        </p>
                        <p>
                           As the founder of Swhizz Technologies, he has personally mentored thousands of individuals, transforming them from diverse backgrounds into high-performance IT professionals at global giants. His unique pedagogy focuses on <span className="italic font-medium">real-time production environment exposure</span> over mere textbook learning.
                        </p>
                        <div className="pt-6 flex flex-wrap gap-4">
                           <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                              <p className="text-[9px] uppercase tracking-widest text-teal-600 font-bold mb-1">Expertise</p>
                              <p className="text-slate-900 dark:text-white font-bold">IT Strategy & Architecture</p>
                           </div>
                           <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                              <p className="text-[9px] uppercase tracking-widest text-teal-600 font-bold mb-1">Role</p>
                              <p className="text-slate-900 dark:text-white font-bold">Chief Visionary & Founder</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="reveal order-1 lg:order-2 flex justify-center">
                     <div className="relative">
                        <div className="w-80 h-96 sm:w-[450px] sm:h-[550px] rounded-[60px] overflow-hidden border-[15px] border-white dark:border-slate-800 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700">
                           <img
                              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                              alt="Founder Kodandaramu Karroti"
                              className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                           />
                        </div>
                        <div className="absolute -bottom-10 -left-10 p-8 bg-teal-500 rounded-[40px] shadow-2xl text-slate-900 animate-float-badge border-4 border-white dark:border-slate-800">
                           <p className="text-2xl font-display font-bold italic">Kodandaramu Karroti</p>
                           <p className="text-[10px] uppercase font-bold tracking-widest opacity-60">Swhizz Technologies CEO</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Vision & Mission Section */}
         <section className="py-24 px-6 sm:px-12 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto">
               <div className="grid md:grid-cols-2 gap-8 stagger-reveal active">
                  <div className="p-10 rounded-[40px] luxury-gradient text-white space-y-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 shadow-lg group border border-transparent dark:border-slate-800">
                     <div className="w-14 h-14 rounded-2xl bg-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                        <Eye className="w-8 h-8" />
                     </div>
                     <h4 className="text-3xl font-display font-bold">Our Vision</h4>
                     <p className="text-slate-400 text-lg font-light leading-relaxed">
                        To empower 10,000+ individuals every year to achieve their dream IT careers through quality training and mentoring.
                     </p>
                  </div>
                  <div className="p-10 rounded-[40px] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-xl space-y-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group">
                     <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform">
                        <Target className="w-8 h-8" />
                     </div>
                     <h4 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Our Mission</h4>
                     <p className="text-slate-500 dark:text-slate-400 text-lg font-light leading-relaxed">
                        To empower aspiring professionals with <span className="font-semibold text-slate-900 dark:text-white">real-time project exposure</span> and personalized career guidance.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* Why Choose Section */}
         <section className="py-32 px-6 sm:px-12 bg-[#020617] text-white">
            <div className="max-w-7xl mx-auto">
               <div className="text-center mb-24 reveal">
                  <h2 className="text-[10px] uppercase tracking-[0.5em] text-teal-400 font-bold mb-6">Excellence Metrics</h2>
                  <h3 className="text-5xl sm:text-8xl font-display font-bold italic tracking-tighter">Why Choose Swhizz?</h3>
                  <p className="text-slate-400 mt-8 max-w-2xl mx-auto font-light text-xl leading-relaxed">The elite training environment built for high-stakes IT career transformations.</p>
               </div>

               <div className="relative w-full overflow-hidden">
                  <div className="flex animate-marquee gap-8 w-max">
                     {[...whyChoosePoints, ...whyChoosePoints].map((point, i) => (
                        <div key={i} className="group w-[400px] h-[500px] flex-shrink-0 p-10 rounded-[48px] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-teal-500/30 transition-all duration-500 luxury-hover flex flex-col relative overflow-hidden">
                           <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-5 transition-opacity">
                              <point.icon className="w-32 h-32" />
                           </div>
                           <div className="w-20 h-20 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-10 group-hover:bg-teal-500 group-hover:text-slate-900 transition-all duration-500 shadow-inner">
                              <point.icon className="w-10 h-10" />
                           </div>
                           <h4 className="text-3xl font-display font-bold mb-6 italic leading-tight group-hover:text-teal-400 transition-colors">{point.title}</h4>
                           <p className="text-slate-400 text-lg font-light leading-relaxed mb-8 flex-grow">{point.desc}</p>
                           <div className="pt-8 border-t border-white/5 flex items-center gap-3 text-teal-500 font-bold text-xs uppercase tracking-widest">
                              <CheckCircle2 className="w-5 h-5" /> Global Standard
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* Quote Section */}
         <section className="py-32 px-6 bg-white dark:bg-slate-950">
            <div className="max-w-4xl mx-auto text-center reveal">
               <Quote className="w-20 h-20 text-teal-500/20 mx-auto mb-10" />
               <p className="text-3xl sm:text-5xl font-display font-bold text-slate-900 dark:text-white italic leading-tight tracking-tight">
                  "We don't just teach skills; we build IT professionals with the confidence to lead enterprise-grade implementations."
               </p>
               <div className="mt-12 flex flex-col items-center">
                  <div className="w-16 h-1 bg-teal-500 mb-6" />
                  <p className="text-slate-900 dark:text-white font-bold text-lg">Elite Training Hub</p>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-teal-600 font-bold">Madhapur, Hyderabad</p>
               </div>
            </div>
         </section>

         <style>{`
         .reveal.active { opacity: 1; transform: translateY(0) scale(1); }
         .reveal { opacity: 0; transform: translateY(20px) scale(0.98); transition: all 1s cubic-bezier(0.22, 1, 0.36, 1); }
         
         @keyframes marquee {
           0% { transform: translateX(0); }
           100% { transform: translateX(-50%); }
         }
         .animate-marquee {
           animation: marquee 40s linear infinite;
         }
         .animate-marquee:hover {
           animation-play-state: paused;
         }
       `}</style>
      </div>
   );
};

export default AboutPage;
