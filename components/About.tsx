
import React, { useEffect, useRef } from 'react';
import { Users2, Rocket, Quote, ArrowRight } from 'lucide-react';

interface AboutProps {
  onSeeMore?: () => void;
}

const About: React.FC<AboutProps> = ({ onSeeMore }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 sm:py-24 px-4 sm:px-8 lg:px-12 bg-transparent overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-24 items-center">
          {/* Left Column: Stacked Text and Quote */}
          <div className="flex flex-col gap-16">
            <div className="relative reveal">
              <div className="text-sm uppercase tracking-[0.4em] text-teal-600 font-bold mb-6 border-b-2 border-teal-600 w-fit pb-1">About Us</div>
              <h3 className="text-4xl sm:text-6xl font-display font-bold text-slate-900 dark:text-white leading-tight mb-8">
                Founded in <span className="text-teal-600">2016</span> by Mr. Kodandaramu Karroti.
              </h3>
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                <p>
                  Swhizz Technologies is a leading <span className="font-semibold text-slate-900 dark:text-white">IT Training & Placement Consultancy</span> based in Madhapur, Hyderabad.
                </p>
                <p>
                  We specialize in transforming <span className="font-medium text-slate-900 dark:text-white">Fresh Graduates, non-IT professionals, Career Gap individuals, and Working Professionals</span> into industry-ready IT experts.
                </p>
                <button
                  onClick={onSeeMore}
                  className="inline-flex items-center gap-3 text-teal-600 font-bold text-sm uppercase tracking-widest hover:translate-x-3 transition-transform duration-500 pt-4"
                >
                  Meet the Founder & Team <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative reveal" style={{ transitionDelay: '200ms' }}>
              <div className="bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm p-8 sm:p-12 rounded-[40px] border border-slate-100 dark:border-slate-800 relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote className="w-32 h-32 text-slate-900 dark:text-white" />
                </div>
                <h4 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6 italic leading-tight group-hover:text-teal-600 transition-colors">
                  "At Swhizz, We Firmly Believe —"
                </h4>
                <p className="text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed relative z-10">
                  Landing an IT job is <span className="text-teal-600 font-bold">100% possible</span> with the right mix of profile building, technical skills, and a smart strategy.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative h-[500px] lg:h-full lg:min-h-[600px] rounded-[48px] overflow-hidden shadow-2xl reveal group" style={{ transitionDelay: '400ms' }}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
              alt="Team collaboration in modern office"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/20 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;
