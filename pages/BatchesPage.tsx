
import React, { useEffect } from 'react';
import { 
  ArrowLeft, Calendar, Clock, Sparkles, BookOpen, 
  CheckCircle2, Trophy, UserPlus, Star, ArrowRight, ShieldCheck 
} from 'lucide-react';

interface BatchesPageProps {
  onBack: () => void;
  onEnroll: () => void;
  theme?: 'light' | 'dark';
}

const BatchesPage: React.FC<BatchesPageProps> = ({ onBack, onEnroll, theme }) => {
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

  const batchData = [
    { course: "Java Full Stack", training: "Offline/Online", date: "15/05/2024", time: "08:00 AM", price: "35,000" },
    { course: "Salesforce CRM", training: "Offline/Online", date: "22/05/2024", time: "10:00 AM", price: "40,000" },
    { course: "DevOps + AWS", training: "Offline/Online", date: "28/05/2024", time: "07:30 PM", price: "30,000" },
    { course: "Cybersecurity (VAPT)", training: "Offline/Online", date: "05/06/2024", time: "10:00 AM", price: "30,000" },
    { course: "Data Science (AI+ML)", training: "Offline/Online", date: "12/06/2024", time: "09:00 AM", price: "50,000" },
    { course: "Software Testing Pro", training: "Offline/Online", date: "18/06/2024", time: "08:00 AM", price: "25,000" },
    { course: "Internships (Real-Time)", training: "Project Based", date: "Ongoing", time: "Flexible", price: "10,000" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pb-24 overflow-x-hidden selection:bg-teal-500/30">
      {/* Page Header */}
      <nav className="fixed top-0 left-0 w-full z-[100] glass-effect py-4 px-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
         <button onClick={onBack} className="group flex items-center gap-3 text-slate-900 dark:text-white font-bold text-[10px] uppercase tracking-[0.3em] transition-all">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
            <span>Return to Hub</span>
          </button>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-teal-500" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">Schedule Center</span>
             </div>
          </div>
      </nav>

      {/* Hero Section inspired by ref image */}
      <section className="relative pt-32 pb-16 px-6 sm:px-12 bg-[#0d9488] dark:bg-[#020617] overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-[0.2] pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 reveal active">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-[10px] tracking-[0.4em] uppercase">
              <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
              Enrollment Is Live
            </div>
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-8xl font-display font-bold text-white leading-[0.85] italic tracking-tighter">
                Upcoming <span className="opacity-60">Batches.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-teal-100 font-serif italic font-light">Get Your Expert Solution for Professional IT Career.</p>
            </div>
            <p className="text-lg text-teal-50 leading-relaxed font-light max-w-xl border-l-4 border-white/30 pl-8">
              Every batch at Swhizz is a curated experience. We maintain small groups to ensure 1:1 mentorship and deep project involvement.
            </p>
          </div>
          <div className="reveal active hidden lg:flex justify-end">
             {/* Luxury Illustration Card */}
             <div className="relative w-full max-w-lg aspect-[4/3] rounded-[60px] bg-white p-12 shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 blur-3xl rounded-full" />
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center gap-8">
                   <div className="w-24 h-24 rounded-[32px] bg-teal-500 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-700">
                      <BookOpen className="w-12 h-12" />
                   </div>
                   <div>
                      <h4 className="text-3xl font-display font-bold text-slate-900 italic">Academy Excellence.</h4>
                      <p className="text-slate-500 text-sm mt-2 uppercase tracking-widest font-bold">Validated by 200+ Partners</p>
                   </div>
                   <div className="flex gap-4">
                      {Array.from({length: 3}).map((_, i) => (
                         <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-100 overflow-hidden shadow-sm">
                            <img src={`https://i.pravatar.cc/150?u=user${i}`} alt="user" />
                         </div>
                      ))}
                      <div className="w-10 h-10 rounded-full bg-teal-50 border-2 border-teal-100 flex items-center justify-center text-[10px] font-bold text-teal-600">
                        +5k
                      </div>
                   </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-teal-500" />
             </div>
          </div>
        </div>
      </section>

      {/* Main Table Section */}
      <section className="py-24 px-6 sm:px-12 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
             <h2 className="text-[10px] uppercase tracking-[0.5em] text-teal-600 font-bold mb-4">Official Schedule</h2>
             <h3 className="text-4xl sm:text-6xl font-display font-bold text-slate-900 dark:text-white italic tracking-tighter">Availability Wall.</h3>
          </div>

          <div className="reveal">
            <div className="bg-white dark:bg-slate-950 rounded-[56px] shadow-2xl border-2 border-slate-50 dark:border-slate-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-900/50">
                      <th className="px-10 py-10 text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 dark:text-slate-500">Course Program</th>
                      <th className="px-10 py-10 text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 dark:text-slate-500">Training Mode</th>
                      <th className="px-10 py-10 text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 dark:text-slate-500">Batch Start</th>
                      <th className="px-10 py-10 text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 dark:text-slate-500">Time</th>
                      <th className="px-10 py-10 text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 dark:text-slate-500">Price (INR)</th>
                      <th className="px-10 py-10 text-right"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {batchData.map((batch, i) => (
                      <tr key={i} className="group hover:bg-teal-500/[0.03] transition-colors">
                        <td className="px-10 py-10">
                          <span className="text-2xl font-display font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors italic">
                            {batch.course}
                          </span>
                        </td>
                        <td className="px-10 py-10">
                          <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{batch.training}</span>
                        </td>
                        <td className="px-10 py-10">
                          <div className="flex items-center gap-3">
                            <Calendar className="w-4 h-4 text-teal-500" />
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{batch.date}</span>
                          </div>
                        </td>
                        <td className="px-10 py-10">
                          <div className="flex items-center gap-3">
                            <Clock className="w-4 h-4 text-teal-500" />
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{batch.time}</span>
                          </div>
                        </td>
                        <td className="px-10 py-10">
                          <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                            ₹{batch.price}
                          </span>
                        </td>
                        <td className="px-10 py-10 text-right">
                          <button 
                            onClick={onEnroll}
                            className="px-8 py-3 bg-teal-500 text-slate-900 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-slate-900 hover:text-white transition-all transform hover:-translate-y-1"
                          >
                            Enroll Now
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Trust Banner */}
      <section className="py-20 px-6 sm:px-12 bg-slate-50 dark:bg-slate-900/50">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 reveal">
            <div className="flex items-center gap-6">
               <div className="w-16 h-16 rounded-2xl bg-teal-500 text-white flex items-center justify-center shadow-lg"><Trophy className="w-8 h-8" /></div>
               <div>
                  <h4 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Success Verified.</h4>
                  <p className="text-slate-500 text-sm font-light">Rated 4.9/5 by 9k+ Alumni Worldwide.</p>
               </div>
            </div>
            <div className="flex gap-12">
               <div className="text-center">
                  <p className="text-3xl font-display font-bold text-slate-900 dark:text-white">100%</p>
                  <p className="text-[9px] uppercase tracking-widest text-teal-600 font-bold">Placement Support</p>
               </div>
               <div className="text-center">
                  <p className="text-3xl font-display font-bold text-slate-900 dark:text-white">200+</p>
                  <p className="text-[9px] uppercase tracking-widest text-teal-600 font-bold">Hiring Partners</p>
               </div>
            </div>
         </div>
      </section>

      <style>{`
        .reveal.active { opacity: 1; transform: translateY(0) scale(1); }
        .reveal { opacity: 0; transform: translateY(20px) scale(0.98); transition: all 1s cubic-bezier(0.22, 1, 0.36, 1); }
      `}</style>
    </div>
  );
};

export default BatchesPage;
