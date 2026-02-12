
import React, { useEffect } from 'react';
import Placements from '../components/Placements';
import Gallery from '../components/Gallery';
import { ArrowLeft, Trophy, ShieldCheck, Sparkles, Quote, CheckCircle2, ArrowRight, Zap, CalendarDays } from 'lucide-react';

interface PlacementsPageProps {
  onBack: () => void;
  onEnroll?: () => void;
  onContact?: () => void;
  theme?: 'light' | 'dark';
}

const PlacementsPage: React.FC<PlacementsPageProps> = ({ onBack, onEnroll, onContact, theme }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .stagger-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const eliteAlumni = [
    { name: "Rahul Mehra", company: "Accenture", quote: "The 3-year gap in my resume was my biggest fear. Swhizz turned it into my strength with technical branding.", course: "Salesforce Admin & Dev", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" },
    { name: "Sneha Kapur", company: "Infosys", quote: "From a non-IT background to a Full Stack Engineer at Infosys. The mock interviews were the turning point for me.", course: "Java Full Stack", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" },
    { name: "Vikram Singh", company: "Amazon", quote: "The real-time project exposure mirrored exactly what I do now at Amazon. It was the perfect bridge to the industry.", course: "DevOps + AWS", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" },
    { name: "Ananya Iyer", company: "Google", quote: "Swhizz mentorship and a direct referral network. Swhizz isn't just a training center; it's a career launchpad.", course: "Cybersecurity", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200" },
    { name: "Manoj T", company: "Microsoft", quote: "The profile marketing service got me noticed by headhunters I couldn't reach on my own. Truly professional.", course: "Salesforce CRM", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pb-24 overflow-x-hidden selection:bg-teal-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[100] glass-effect py-4 px-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
        <button onClick={onBack} className="group flex items-center gap-3 text-slate-900 dark:text-white font-bold text-[10px] uppercase tracking-[0.3em] transition-all">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
          <span>Return to Hub</span>
        </button>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-teal-500" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">Placement Hub</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 sm:px-12 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-[0.1] pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="reveal active space-y-10">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm text-teal-600 dark:text-teal-400 font-bold text-[10px] tracking-[0.4em] uppercase">
              <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
              Swhizz Technologies
            </div>
            <h1 className="text-6xl sm:text-9xl font-display font-bold text-slate-900 dark:text-white leading-[0.85] italic tracking-tighter">
              Career <span className="text-teal-600">Evolution.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-500 dark:text-slate-400 font-light leading-relaxed italic border-l-4 border-teal-500 pl-10 text-left">
              From diverse backgrounds to technical dominance. We don't just find you a job; we build your professional legacy.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="space-y-2">
                <p className="text-4xl font-display font-bold text-slate-900 dark:text-white">9,000+</p>
                <p className="text-[10px] uppercase tracking-widest text-teal-600 font-bold">Placed Alumni</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-display font-bold text-slate-900 dark:text-white">200+</p>
                <p className="text-[10px] uppercase tracking-widest text-teal-600 font-bold">Hiring Giants</p>
              </div>
            </div>
          </div>
          <div className="reveal active hidden lg:block relative">
            <div className="w-full aspect-square rounded-[80px] overflow-hidden border-[20px] border-slate-50 dark:border-slate-900 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-1000 group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                alt="Success Story"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 p-12 bg-[#020617] text-white rounded-[50px] shadow-2xl border border-white/10 animate-float-badge">
              <ShieldCheck className="w-12 h-12 text-teal-500 mb-4" />
              <p className="text-2xl font-display font-bold italic">100% Guaranteed</p>
              <p className="text-[10px] uppercase tracking-widest text-teal-400 font-bold">Industry Transition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leader's Wall */}
      <section className="bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800 overflow-hidden">
        <Placements />
      </section>

      {/* Alumni Testimonials Marquee */}
      <section className="py-32 px-6 sm:px-12 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto mb-20 reveal">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="space-y-4">
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-teal-600 font-bold">Voices of Victory</h2>
              <h3 className="text-4xl sm:text-7xl font-display font-bold text-slate-900 dark:text-white italic tracking-tighter">Swhizz Feedback.</h3>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-light italic max-w-sm border-r-4 border-teal-500 pr-10 text-right">
              Our results speak through the words of those who lived the transformation.
            </p>
          </div>
        </div>

        <div className="w-full py-10 relative">
          <div className="flex animate-marquee-fast whitespace-nowrap gap-8">
            {[...eliteAlumni, ...eliteAlumni].map((alumni, i) => (
              <div key={i} className="inline-block w-[450px] p-10 rounded-[64px] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl luxury-hover group">
                <div className="flex items-center gap-6 mb-8">
                  <img src={alumni.img} alt={alumni.name} className="w-20 h-20 rounded-[28px] object-cover border-4 border-white dark:border-slate-800 shadow-lg group-hover:scale-110 transition-transform" />
                  <div>
                    <h5 className="text-2xl font-display font-bold text-slate-900 dark:text-white italic leading-tight">{alumni.name}</h5>
                    <p className="text-[10px] text-teal-600 font-bold uppercase tracking-widest mt-1">Hired @ {alumni.company}</p>
                  </div>
                </div>
                <Quote className="w-12 h-12 text-teal-500/10 mb-4" />
                <p className="text-lg text-slate-600 dark:text-slate-300 font-light italic leading-relaxed whitespace-normal h-24 overflow-hidden">
                  "{alumni.quote}"
                </p>
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">{alumni.course}</span>
                  <CheckCircle2 className="w-4 h-4 text-teal-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Gallery - Positioned for Impact */}
      <section className="bg-transparent border-t border-slate-100 dark:border-slate-800 overflow-hidden">
        <Gallery />
      </section>

      {/* Final Call to Action - MATCHING HERO STYLE */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h4 className="text-5xl sm:text-8xl font-display font-bold text-slate-900 dark:text-white leading-tight italic tracking-tighter mb-12">
            Your Seat <span className="text-teal-600">Reserved.</span>
          </h4>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={onEnroll}
              className="px-8 sm:px-14 py-5 sm:py-7 bg-[#020617] text-white rounded-full font-bold text-lg sm:text-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:scale-110 transition-all flex items-center justify-center gap-4 group shimmer-effect"
            >
              <span className="relative z-10">Join Swhizz</span>
              <ArrowRight className="w-6 h-6 text-teal-500 group-hover:translate-x-3 transition-transform relative z-10" />
            </button>
            <button
              onClick={onContact}
              className="px-8 sm:px-14 py-5 sm:py-7 bg-white dark:bg-slate-900/50 border-2 border-teal-600/30 dark:border-teal-600/50 text-teal-700 dark:text-teal-400 rounded-full font-bold text-lg sm:text-xl hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:border-teal-600 luxury-hover transition-all flex items-center justify-center gap-3 group shadow-sm"
            >
              <CalendarDays className="w-6 h-6 group-hover:scale-110 transition-transform text-teal-600" />
              Request Callback
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-fast {
          display: flex;
          width: fit-content;
          animation: marquee-fast 30s linear infinite;
        }
        .animate-marquee-fast:hover {
          animation-play-state: paused;
        }
        .reveal.active { opacity: 1; transform: translateY(0); }
        .reveal { opacity: 0; transform: translateY(20px); transition: all 1s cubic-bezier(0.22, 1, 0.36, 1); }
      `}</style>
    </div>
  );
};

export default PlacementsPage;
