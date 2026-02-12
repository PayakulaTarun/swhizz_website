
import React from 'react';
import { Calendar, Clock, UserPlus, Sparkles, Trophy, BookOpen } from 'lucide-react';

interface BatchesProps {
  onEnroll?: () => void;
}

const Batches: React.FC<BatchesProps> = ({ onEnroll }) => {
  const batchData = [
    { course: "DevOps", training: "Offline/Online", date: "28/01/2026", time: "08:00 AM", price: "30,000" },
    { course: "Cybersecurity", training: "Offline/Online", date: "25/02/2026", time: "10:00 AM", price: "30,000" },
    { course: "Networking Training", training: "Offline/Online", date: "12/09/2025", time: "10:00 AM", price: "20,000" },
    { course: "Core Java", training: "Offline/Online", date: "12/02/2025", time: "08:00 AM", price: "10,000" },
    { course: "Manual and Automation", training: "Offline/Online", date: "06/11/2025", time: "08:00 AM", price: "30,000" },
    { course: "Salesforce Admin", training: "Offline/Online", date: "04/02/2026", time: "10:00 AM", price: "30,000" },
    { course: "Data Science (AI+ML)", training: "Offline/Online", date: "02/02/2026", time: "09:30 AM", price: "50,000" },
  ];

  return (
    <section id="batches" className="py-24 px-6 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-[0.1] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero-like Header inspired by reference */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20 reveal">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 font-bold text-[10px] tracking-[0.4em] uppercase">
              <Sparkles className="w-4 h-4" />
              Direct Entry Path
            </div>
            <h3 className="text-5xl md:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[0.9] tracking-tighter italic">
              Upcoming <span className="text-teal-600">Batches.</span>
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xl font-light leading-relaxed italic border-l-4 border-teal-500 pl-8">
              Get Your Expert Solution for Professional IT Career in Software industry.
            </p>
          </div>
          
          <div className="lg:w-1/2 relative">
             {/* Decorative illustration-like structure using icons and glass panels */}
             <div className="relative aspect-video bg-teal-600 rounded-[60px] flex items-center justify-center shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-900 opacity-90" />
                <div className="relative z-10 flex flex-col items-center text-white p-12 text-center gap-6">
                   <div className="w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-700">
                      <BookOpen className="w-12 h-12" />
                   </div>
                   <p className="text-3xl font-display font-bold italic">Reserved for Excellence.</p>
                   <p className="text-sm font-light opacity-80 uppercase tracking-widest">Enrollment strictly limited per batch.</p>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 blur-3xl rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-black/20 blur-3xl rounded-full" />
             </div>
          </div>
        </div>

        {/* The Batch Table */}
        <div className="reveal">
          <div className="bg-white dark:bg-slate-900 rounded-[56px] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden relative">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50">
                    <th className="px-10 py-8 text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 dark:text-slate-500">Course</th>
                    <th className="px-10 py-8 text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 dark:text-slate-500">Training</th>
                    <th className="px-10 py-8 text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 dark:text-slate-500">Demo / Batch</th>
                    <th className="px-10 py-8 text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 dark:text-slate-500">Time</th>
                    <th className="px-10 py-8 text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 dark:text-slate-500">Price</th>
                    <th className="px-10 py-8 text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                  {batchData.map((batch, i) => (
                    <tr key={i} className="group hover:bg-teal-500/[0.02] transition-colors">
                      <td className="px-10 py-8">
                        <span className="text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors italic">
                          {batch.course}
                        </span>
                      </td>
                      <td className="px-10 py-8">
                        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{batch.training}</span>
                      </td>
                      <td className="px-10 py-8">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-4 h-4 text-teal-500" />
                          <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{batch.date}</span>
                        </div>
                      </td>
                      <td className="px-10 py-8">
                        <div className="flex items-center gap-3">
                          <Clock className="w-4 h-4 text-teal-500" />
                          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{batch.time}</span>
                        </div>
                      </td>
                      <td className="px-10 py-8">
                        <span className="text-lg font-bold text-teal-600 dark:text-teal-400 tracking-tight">
                          ₹{batch.price}
                        </span>
                      </td>
                      <td className="px-10 py-8 text-right">
                        <button 
                          onClick={onEnroll}
                          className="px-8 py-3 bg-teal-500 text-slate-900 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-slate-900 hover:text-white transition-all luxury-hover"
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

        {/* Quick Legend / Callouts */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 reveal">
           <div className="p-8 rounded-[40px] bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center gap-6 group luxury-hover">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center text-teal-500 shadow-inner group-hover:scale-110 transition-transform">
                 <Trophy className="w-6 h-6" />
              </div>
              <div>
                 <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">Success Verified</p>
                 <p className="text-slate-900 dark:text-white font-bold">Industry Standard</p>
              </div>
           </div>
           <div className="p-8 rounded-[40px] bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center gap-6 group luxury-hover">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center text-teal-500 shadow-inner group-hover:scale-110 transition-transform">
                 <UserPlus className="w-6 h-6" />
              </div>
              <div>
                 <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">Batch Availability</p>
                 <p className="text-slate-900 dark:text-white font-bold">Filling Fast (90%+)</p>
              </div>
           </div>
           <div className="p-8 rounded-[40px] luxury-gradient text-white flex items-center gap-6 group luxury-hover">
              <div className="w-14 h-14 rounded-2xl bg-teal-500/20 flex items-center justify-center text-teal-400 shadow-inner group-hover:scale-110 transition-transform">
                 <Sparkles className="w-6 h-6" />
              </div>
              <div>
                 <p className="text-[9px] uppercase tracking-widest text-teal-100/50 font-bold mb-1">Exclusive</p>
                 <p className="text-white font-bold">Custom Pathing</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Batches;
