
import React from 'react';
import { UserPlus, BookOpen, Layers, Search, ChevronRight, CheckCircle2, Sparkles, Star, Zap } from 'lucide-react';

interface JourneyProps {
  onEnroll?: () => void;
}

const Journey: React.FC<JourneyProps> = ({ onEnroll }) => {
  const steps = [
    {
      title: "Step 1",
      label: "Profile Building",
      icon: UserPlus,
      color: "bg-teal-50",
      items: [
        "ATS-Optimized Resume & LinkedIn Profile",
        "Trailhead, GitHub & Portfolio Project Setup",
        "Personalized Guidance on Career Positioning"
      ]
    },
    {
      title: "Step 2",
      label: "Technical Skill Development",
      icon: BookOpen,
      color: "bg-slate-50",
      items: [
        "Salesforce Administration & Apex Programming",
        "Lightning Web Components (LWC)",
        "Integrations & Real-Time Projects",
        "Mentorship of Experienced Professionals"
      ]
    },
    {
      title: "Step 3",
      label: "IT Environment Exposure",
      icon: Layers,
      color: "bg-teal-50",
      items: [
        "Agile Methodology & Scrum Management",
        "Jira Tracking & Collaboration Tools",
        "Deployment Workflows mirroring corporate environments"
      ]
    },
    {
      title: "Step 4",
      label: "Job Search & Interview Strategy",
      icon: Search,
      color: "bg-slate-50",
      items: [
        "Mock Technical & HR Interviews",
        "Resume Marketing & Referral Assistance",
        "Continuous Guidance until you get placed"
      ]
    }
  ];

  return (
    <section id="journey" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[#fcfcf7] overflow-hidden relative">
      {/* Background Polish */}
      <div className="absolute inset-0 cyber-grid opacity-[0.2] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] luxury-gradient opacity-20" />

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="text-center mb-24 reveal">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white border border-slate-100 shadow-sm">
            <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-teal-600 font-bold">The Blueprint</span>
          </div>
          <h3 className="text-5xl md:text-8xl font-display font-bold text-slate-900 leading-[0.85] tracking-tighter italic">
            4-Step Success Formula
          </h3>
          <p className="text-slate-500 mt-8 max-w-2xl mx-auto font-light text-lg">
            At Swhizz Technologies, we don't just train — we ensure every learner becomes <span className="font-bold text-slate-900">job-ready</span> with our proprietary success architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-reveal">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col h-full group">
              <div className={`p-10 rounded-[50px] h-full border border-slate-100 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-3 ${step.color} relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 blur-[40px] rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />
                
                <div className="w-16 h-16 rounded-2xl luxury-gradient flex items-center justify-center text-white mb-10 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10">
                  <step.icon className="w-8 h-8" />
                </div>
                
                <div className="space-y-4 relative z-10">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">{step.title}</span>
                  <h4 className="text-2xl font-display font-bold text-slate-900 group-hover:text-teal-600 transition-colors">{step.label}</h4>
                  
                  <ul className="space-y-4 pt-6">
                    {step.items.map((item, idx) => (
                      <li key={idx} className="flex gap-4 text-sm text-slate-600 font-light leading-relaxed group/item">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 z-10 w-10 h-10 bg-white border border-slate-100 rounded-full items-center justify-center shadow-md -translate-y-1/2 group-hover:translate-x-4 transition-all duration-500 group-hover:bg-teal-500 group-hover:text-white">
                   <ChevronRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Career Transition Panel */}
        <div className="mt-24 p-12 sm:p-20 rounded-[60px] bg-white border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-12 reveal shadow-xl hover:shadow-2xl transition-all duration-500">
           <div className="space-y-4 text-center md:text-left lg:w-3/5">
              <h4 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 italic">Your Elite Transition Path</h4>
              <p className="text-slate-500 text-lg font-light leading-relaxed">Watch your profile evolve from a student to an industry leader: <span className="font-bold text-teal-600">Admin → Dev → Architect.</span></p>
              <div className="flex gap-2 pt-4 justify-center md:justify-start">
                 {Array.from({length: 5}).map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
           </div>
           <div className="lg:w-2/5 flex flex-col items-center gap-4">
              <button 
                onClick={onEnroll}
                className="px-14 py-6 bg-[#020617] text-white rounded-full font-bold text-xl shadow-2xl hover:scale-110 transition-all group flex items-center gap-3"
              >
                 <span className="relative z-10">Start the Formula</span>
                 <Zap className="w-6 h-6 animate-pulse text-teal-500" />
              </button>
              <p className="text-[10px] uppercase font-bold text-slate-300 tracking-[0.2em]">Validated by 9,000+ Alumni</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
