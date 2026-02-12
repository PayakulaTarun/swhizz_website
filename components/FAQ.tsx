
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "I have a long career gap. Can I still get an IT job?",
      a: "Yes! Many students with 5–10 years of gap have successfully restarted their careers through Swhizz. Our mentors specialize in bridging these gaps with relevant project experience and strategic technical branding."
    },
    {
      q: "I'm from a non-IT background. Can I switch to IT?",
      a: "Absolutely. Our structured programs are designed to take you from absolute basics to a professional level, regardless of your educational background. We focus on building your logic from the ground up."
    },
    {
      q: "How long does it take to get placed?",
      a: "On average, learners get placed within 2–4 months after completing the course and successfully finishing our intensive mock interview series and profile marketing phase."
    },
    {
      q: "Is placement guaranteed?",
      a: "We provide 100% Placement Support—which includes Swhizz resume branding, intensive interview preparation, and direct job referrals through our network of 200+ hiring partners until you get hired."
    },
    {
      q: "Do you provide offline and online training?",
      a: "Yes, we offer Offline (at our Madhapur campus), Online Instructor-led, and Hybrid learning options to suit your personal schedule and learning preference."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 sm:px-12 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-[0.05] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 shadow-sm">
            <Sparkles className="w-4 h-4 text-teal-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-teal-600 font-bold">Curiosity & Clarity</span>
          </div>
          <h3 className="text-4xl md:text-7xl font-display font-bold text-slate-900 dark:text-white leading-[0.9] tracking-tighter italic">
            Career <span className="text-teal-600">Questions.</span>
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-8 max-w-xl mx-auto font-light text-lg">
            Find the answers you need to start your Swhizz transition into the global IT sector.
          </p>
        </div>

        <div className="space-y-4 stagger-reveal active">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-[32px] border transition-all duration-500 overflow-hidden ${openIndex === i
                  ? 'border-teal-500/50 bg-teal-50/20 dark:bg-teal-900/5 shadow-xl'
                  : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-200 dark:hover:border-slate-700 shadow-sm'
                }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-7 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${openIndex === i ? 'bg-teal-500 text-white rotate-12' : 'bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:bg-teal-50 dark:group-hover:bg-teal-900/20 group-hover:text-teal-500'
                    }`}>
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <span className={`text-lg sm:text-xl font-bold transition-colors ${openIndex === i ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'
                    }`}>
                    {faq.q}
                  </span>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${openIndex === i ? 'bg-teal-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                  }`}>
                  {openIndex === i ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              <div className={`transition-all duration-700 ease-in-out ${openIndex === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}>
                <div className="px-8 pb-8 pt-2 pl-24">
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light italic border-l-2 border-teal-500/30 pl-6">
                    {faq.a}
                  </p>
                  <div className="mt-6 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-teal-500" />
                    <span className="text-[10px] uppercase tracking-widest text-teal-600 font-bold">Verified Expert Solution</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Transition CTA */}
        <div className="mt-16 text-center reveal">
          <p className="text-slate-400 text-sm italic font-light">Still have questions? Our mentors are ready for a 1:1 roadmap session.</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-6 text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest text-[10px] hover:translate-x-3 transition-transform inline-flex items-center gap-2"
          >
            Ask a specific question <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
