
import React from 'react';
import { ArrowRight, Star, CalendarDays } from 'lucide-react';

interface HeroProps {
  onEnroll?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onEnroll }) => {
  return (
    <section id="home" className="min-h-[90vh] lg:min-h-screen pt-24 pb-12 sm:pt-32 sm:pb-20 px-4 sm:px-8 lg:px-12 relative flex items-center bg-transparent overflow-hidden">
      {/* Refined, Flowing Background Shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-200/20 dark:bg-teal-500/10 rounded-full blur-[120px] animate-blob" />
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-slate-300/20 dark:bg-slate-500/10 rounded-full blur-[130px] animate-blob" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-yellow-100/20 dark:bg-yellow-500/5 rounded-full blur-[150px] animate-blob" style={{ animationDelay: '6s' }} />

      <div className="max-w-screen-2xl mx-auto w-full grid lg:grid-cols-2 gap-12 xl:gap-24 items-center relative z-10">
        <div className="space-y-6 sm:space-y-10 stagger-reveal">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 shadow-sm text-teal-700 dark:text-teal-400 font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase">
            <Star className="w-4 h-4 fill-teal-600 animate-pulse-elegant" />
            10 Years of Excellence
          </div>
          
          <h1 className="text-5xl sm:text-7xl xl:text-9xl font-display font-bold leading-[1.1] text-slate-900 dark:text-white">
            The Key <br /> to <span className="text-teal-600 italic relative inline-block">
              Success
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-teal-500/20 rounded-full" />
            </span>.
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-light">
            Your dream job is just one step away. We specialize in transforming <span className="font-medium text-slate-900 dark:text-white">Freshers, Non-IT, and Career Gap</span> candidates into industry-ready IT experts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={onEnroll}
              className="px-8 sm:px-12 py-4 sm:py-5 bg-[#020617] text-white rounded-full font-bold text-base sm:text-lg hover:scale-105 transition-all flex items-center justify-center gap-3 group shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)]"
            >
              <span className="relative z-10">Join Swhizz Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 sm:px-12 py-4 sm:py-5 bg-white dark:bg-slate-900/50 border-2 border-teal-600/30 dark:border-teal-600/50 text-teal-700 dark:text-teal-400 rounded-full font-bold text-base sm:text-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:border-teal-600 luxury-hover transition-all flex items-center justify-center gap-3 shadow-sm group"
            >
              <CalendarDays className="w-5 h-5 group-hover:scale-110 transition-transform text-teal-600" />
              Book Free Counseling
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-8 sm:gap-12 pt-8 border-t border-slate-100 dark:border-slate-800">
            <div className="luxury-hover cursor-default group">
              <p className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">9k+</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-teal-600 font-bold">Placed</p>
            </div>
            <div className="luxury-hover cursor-default group">
              <p className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">200+</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-teal-600 font-bold">Partners</p>
            </div>
            <div className="luxury-hover cursor-default group">
              <p className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">30+</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-teal-600 font-bold">Trainers</p>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block reveal" style={{ transitionDelay: '500ms' }}>
          <div className="relative z-10 rounded-[40px] xl:rounded-[60px] overflow-hidden border-[15px] xl:border-[20px] border-white dark:border-slate-800 shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700 group">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
              alt="Successful Professional" 
              className="w-full h-auto object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-[2s]"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-40 h-40 xl:w-48 xl:h-48 bg-white dark:bg-slate-800 rounded-full shadow-2xl flex items-center justify-center p-4 z-20 animate-float-badge border border-slate-50 dark:border-slate-700">
            <div className="text-center">
              <span className="block text-3xl xl:text-4xl font-display font-bold text-slate-900 dark:text-white">100%</span>
              <span className="block text-[8px] xl:text-[10px] tracking-widest uppercase font-bold text-teal-600">Placement Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
