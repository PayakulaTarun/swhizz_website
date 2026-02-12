
import React from 'react';
import { CheckCircle, Briefcase, Users, Cpu, Rocket, ShieldCheck, HeartHandshake, Laptop } from 'lucide-react';

const WhyChoose: React.FC = () => {
  const points = [
    { title: "100% Placement Assistance", icon: Briefcase, desc: "Dedicated career team for job referrals and interviews." },
    { title: "Industry-Oriented Design", icon: Cpu, desc: "Curriculums aligned with current market demands." },
    { title: "Real-Time Project Learning", icon: Rocket, desc: "Gain practical exposure with live industry projects." },
    { title: "Expert Trainers", icon: Users, desc: "Learn from veterans with 8–15 years of industry experience." },
    { title: "Resume & Profile Branding", icon: ShieldCheck, desc: "Expert guidance to build a job-ready digital profile." },
    { title: "Mock Interviews", icon: CheckCircle, desc: "Continuous evaluation to perfect your pitch." },
    { title: "1:1 Mentorship", icon: HeartHandshake, desc: "Personalized guidance for every single learner." },
    { title: "Hybrid Learning Modes", icon: Laptop, desc: "Offline, Online & Hybrid options to suit your schedule." },
  ];

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-8 lg:px-12 luxury-gradient text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-teal-500/10 rounded-full blur-[100px] sm:blur-[120px]" />
      
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="mb-12 sm:mb-16 reveal">
          <h2 className="text-sm uppercase tracking-[0.4em] text-teal-400 font-bold mb-4">Why Us</h2>
          <h3 className="text-3xl sm:text-5xl font-display font-bold leading-tight max-w-3xl italic">
            Success in IT is 100% Possible When You Follow the Right Process.
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 stagger-reveal">
          {points.map((point, i) => (
            <div 
              key={i} 
              style={{ transitionDelay: `${i * 100}ms` }}
              className="group p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-teal-500/30 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white transition-all duration-500">
                <point.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold mb-3 tracking-tight group-hover:text-teal-400 transition-colors">{point.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed font-light">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
