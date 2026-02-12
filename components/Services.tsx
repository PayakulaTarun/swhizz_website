
import React from 'react';
import { Award, Laptop, Users, ShieldCheck, ArrowRight, Sparkles, TrendingUp, Briefcase } from 'lucide-react';

interface ServicesProps {
  onSelectService?: (id: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'classroom',
      title: "Classroom Training",
      desc: "Interactive instructor-led sessions at our Madhapur campus.",
      icon: Award,
      accent: "text-blue-500",
      bg: "bg-blue-500/5",
    },
    {
      id: 'online',
      title: "Online Training",
      desc: "Live interactive learning from anywhere in the world.",
      icon: Laptop,
      accent: "text-teal-500",
      bg: "bg-teal-500/5",
    },
    {
      id: 'mentorship',
      title: "Industry Mentorship",
      desc: "1:1 guidance from currently working IT professionals.",
      icon: Users,
      accent: "text-orange-500",
      bg: "bg-orange-500/5",
    },
    {
      id: 'corporate',
      title: "Internships",
      desc: "Hands-on real-time projects 5k to 10k.",
      icon: Sparkles,
      accent: "text-purple-500",
      bg: "bg-purple-500/5",
    },
    {
      id: 'placement',
      title: "Placement Support",
      desc: "Resume building, mock interviews & end-to-end job assistance.",
      icon: Briefcase,
      accent: "text-rose-500",
      bg: "bg-rose-500/5",
    },
    {
      id: 'marketing',
      title: "Profile Marketing",
      desc: "Strategic personal branding to get noticed by top MNCs.",
      icon: TrendingUp,
      accent: "text-indigo-500",
      bg: "bg-indigo-500/5",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-[0.1] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
            <Sparkles className="w-4 h-4 text-teal-500" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-teal-600 font-bold">Swhizz Services</span>
          </div>
          <h3 className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-white leading-[0.9] tracking-tighter italic">
            Excellence Suites.
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-8 max-w-2xl mx-auto font-light text-lg italic border-l-4 border-teal-500 pl-8 text-left">
            Beyond training—we offer a comprehensive ecosystem designed for career dominance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-reveal">
          {services.map((service, i) => (
            <div
              key={service.id}
              onClick={() => onSelectService && onSelectService(service.id)}
              className="group cursor-pointer p-10 rounded-[48px] bg-white dark:bg-slate-900 border-2 border-slate-50 dark:border-slate-800 hover:border-teal-500 hover:shadow-2xl hover:-translate-y-3 transition-all duration-700 flex flex-col h-full luxury-hover relative overflow-hidden"
            >
              <div className={`absolute inset-0 ${service.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative z-10 flex-grow">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:bg-white shadow-inner">
                  <service.icon className={`w-8 h-8 ${service.accent}`} />
                </div>

                <h4 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4 italic leading-tight group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h4>

                <p className="text-slate-500 dark:text-slate-400 text-base font-light leading-relaxed mb-10">
                  {service.desc}
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest font-bold text-teal-600 group-hover:translate-x-2 transition-transform">Explore Detail</span>
                <ArrowRight className="w-5 h-5 text-teal-500 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
