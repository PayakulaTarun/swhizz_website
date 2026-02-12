
import React, { useState, useEffect, useRef } from 'react';
import { Trophy, TrendingUp, Briefcase, Zap, Building2, Sparkles } from 'lucide-react';

const Counter: React.FC<{ end: number; suffix?: string; duration?: number }> = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return <span ref={countRef}>{count.toLocaleString()}{suffix}</span>;
};

const BrandLogo: React.FC<{ name: string; slug: string }> = ({ name, slug }) => {
  const [hasError, setHasError] = useState(false);
  const logoUrl = `https://cdn.simpleicons.org/${slug}/white`;

  return (
    <div className="flex-shrink-0 w-64 h-36 sm:w-80 sm:h-48 bg-[#020617] rounded-[56px] border border-white/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex items-center justify-center p-4 mx-4 luxury-hover group transition-all duration-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      <div className="relative z-10 w-full h-full flex items-center justify-center rounded-[44px] bg-[#0f172a]/50 border border-white/5 group-hover:bg-white/10 group-hover:border-teal-500/30 transition-all duration-700 shadow-inner overflow-hidden">
        {!hasError ? (
          <img
            src={logoUrl}
            alt={name}
            onError={() => setHasError(true)}
            className="max-h-[35%] max-w-[50%] object-contain filter brightness-200 contrast-125 group-hover:scale-110 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        ) : (
          <span className="text-white/30 font-display font-bold tracking-[0.2em] text-[10px] uppercase text-center px-4">
            {name}
          </span>
        )}
      </div>
      <div className="absolute inset-0 border-2 border-teal-500/0 group-hover:border-teal-500/20 rounded-[56px] transition-all duration-700" />
    </div>
  );
};

const Placements: React.FC = () => {
  const partnersRow1 = [
    { name: "Google", slug: "google" },
    { name: "Microsoft", slug: "microsoft" },
    { name: "Amazon", slug: "amazon" },
    { name: "Netflix", slug: "netflix" },
    { name: "Meta", slug: "meta" },
    { name: "Apple", slug: "apple" },
    { name: "Uber", slug: "uber" },
    { name: "Airbnb", slug: "airbnb" },
  ];

  const partnersRow2 = [
    { name: "Tesla", slug: "tesla" },
    { name: "SpaceX", slug: "spacex" },
    { name: "Intel", slug: "intel" },
    { name: "Nvidia", slug: "nvidia" },
    { name: "Adobe", slug: "adobe" },
    { name: "Spotify", slug: "spotify" },
    { name: "Slack", slug: "slack" },
    { name: "Notion", slug: "notion" },
  ];

  return (
    <section id="placements" className="py-24 sm:py-32 bg-transparent overflow-hidden relative transition-colors duration-1000">
      <div className="absolute inset-0 cyber-grid dark:text-white opacity-[0.1] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-24 reveal">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#020617] border border-white/10 shadow-xl text-teal-400 font-bold text-[10px] tracking-[0.5em] uppercase mb-12">
          <Building2 className="w-4 h-4" />
          Swhizz Hiring Network
        </div>
        <h3 className="text-6xl md:text-9xl font-display font-bold text-slate-900 dark:text-white italic leading-[0.85] tracking-tighter mb-12">
          Leader's <span className="text-teal-600 block sm:inline">Wall.</span>
        </h3>
        <p className="text-slate-500 dark:text-slate-400 max-w-3xl mx-auto font-light text-xl leading-relaxed">
          We bridge the gap between raw talent and the world's most innovative giants. Our graduates are selected for their precision and technical mastery.
        </p>
      </div>

      <div className="w-full relative py-12 space-y-12">
        <div className="absolute inset-y-0 left-0 w-32 sm:w-64 bg-gradient-to-r from-[#fdfdfb] dark:from-[#0f172a] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 sm:w-64 bg-gradient-to-l from-[#fdfdfb] dark:from-[#0f172a] to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap">
          {[...partnersRow1, ...partnersRow1, ...partnersRow1].map((partner, i) => (
            <BrandLogo key={i} name={partner.name} slug={partner.slug} />
          ))}
        </div>
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {[...partnersRow2, ...partnersRow2, ...partnersRow2].map((partner, i) => (
            <BrandLogo key={i} name={partner.name} slug={partner.slug} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 reveal">
          {[
            { label: "Placements", value: 9000, icon: TrendingUp, detail: "Careers Transformed" },
            { label: "Partners", value: 200, icon: Briefcase, detail: "Global Tech Giants" },
            { label: "Experts", value: 30, icon: Sparkles, detail: "Veteran Mentors" },
            { label: "Legacy", value: 10, icon: Trophy, suffix: " Years", detail: "Excellence Heritage" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-[#020617] p-12 rounded-[56px] shadow-2xl border border-white/5 text-center luxury-hover group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-20 h-20 bg-teal-500/10 rounded-[28px] flex items-center justify-center text-teal-400 mx-auto mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-inner">
                <stat.icon className="w-10 h-10" />
              </div>
              <div className="text-6xl font-display font-bold text-white mb-3">
                <Counter end={stat.value} suffix={stat.suffix || "+"} />
              </div>
              <p className="text-[10px] uppercase font-bold text-teal-400 tracking-[0.4em] mb-6">{stat.label}</p>
              <div className="h-0.5 w-12 bg-white/10 mx-auto mb-6 group-hover:w-32 transition-all duration-700" />
              <p className="text-xs text-white/30 font-light italic">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          display: flex;
          width: fit-content;
          animation: marquee-reverse 40s linear infinite;
        }
        .animate-marquee:hover, .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Placements;
