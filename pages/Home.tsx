import React from 'react';
import Hero from '../components/Hero';
import WhyChoose from '../components/WhyChoose';
import { ArrowRight, Trophy, Users } from 'lucide-react';

interface HomeProps {
  navigate: (path: string) => void;
}

const Home: React.FC<HomeProps> = ({ navigate }) => {
  return (
    <div>
      <Hero />

      {/* Quick Summary Highlights */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h3 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8 leading-tight">
              Bridge the <span className="text-teal-600 italic">Skill Gap</span> with the Best.
            </h3>
            <p className="text-lg text-slate-600 font-light mb-10 leading-relaxed">
              Hyderabad's premier consultancy for IT career transitions. Whether you are a fresher or coming from a non-IT background, we provide the platform to soar.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('journey')}
                className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold luxury-hover flex items-center gap-3"
              >
                Our Formula
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate('placements')}
                className="px-8 py-4 bg-teal-50 text-teal-700 border border-teal-100 rounded-full font-bold luxury-hover flex items-center gap-3"
              >
                Hall of Fame
                <Trophy className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="relative reveal" style={{ transitionDelay: '300ms' }}>
            <div className="bg-slate-50 rounded-[50px] p-12 border border-slate-100 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-teal-500/10 scale-150 rotate-12">
                <Users className="w-32 h-32" />
              </div>
              <h4 className="text-2xl font-display font-bold text-slate-900 mb-6 italic">Why Swhizz Training?</h4>
              <ul className="space-y-6">
                {[
                  { t: "100% Mentorship", d: "Until you are successfully placed." },
                  { t: "Live Production Access", d: "Work on real servers, not just code." },
                  { t: "Interview Mastery", d: "Mock drills with top-tier HRs." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900">{item.t}</p>
                      <p className="text-sm text-slate-500">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WhyChoose />

      <section className="py-32 px-6 bg-[#fcfbf7]">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h4 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-10 leading-[0.9] tracking-tighter">
            Transform Your <span className="text-teal-600">IT Career</span> Today.
          </h4>
          <button
            onClick={() => navigate('contact')}
            className="px-12 py-6 teal-gradient text-white rounded-full text-2xl font-bold luxury-hover shimmer-effect shadow-2xl"
          >
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;