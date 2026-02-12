
import React from 'react';
import { Facebook, Linkedin, Instagram, Twitter, Send } from 'lucide-react';

interface FooterProps {
  onNavigateToSection?: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateToSection }) => {
  const handleLinkClick = (id: string) => {
    if (onNavigateToSection) {
      onNavigateToSection(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleLinkClick('home')}>
              <img
                src="/images/logo.png"
                alt="Swhizz Technologies Logo"
                className="h-12 w-auto object-contain bg-white/10 p-1 rounded-lg backdrop-blur-sm border border-white/5 group-hover:scale-105 transition-transform duration-500"
              />
              <div>
                <h4 className="text-2xl font-display font-bold tracking-tight text-white group-hover:text-teal-400 transition-colors">Swhizz Technologies</h4>
                <p className="text-[9px] tracking-[0.2em] uppercase text-teal-400 font-bold -mt-1">Training & Placement Consultancy</p>
              </div>
            </div>
            <p className="text-slate-400 font-light leading-relaxed max-w-sm italic text-sm">
              "We don't just teach skills; we build IT professionals. Join the ranks of Swhizz graduates."
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { Icon: Facebook, link: "https://www.facebook.com/SwhizzTechnologies/" },
                { Icon: Linkedin, link: "https://www.linkedin.com/company/swhizz-technologies" },
                { Icon: Instagram, link: "https://www.instagram.com/swhizz/" },
                { Icon: Twitter, link: "https://twitter.com/Swhizz1" },
                { Icon: Send, link: "https://t.me/TrainingsPlacementsSwhizz" },
              ].map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white luxury-hover transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-sm font-bold mb-6 text-white/90 uppercase tracking-widest">Platform</h5>
            <ul className="space-y-3 text-slate-400 font-light text-sm">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Courses', id: 'courses' },
                { name: 'Journey', id: 'journey' },
                { name: 'Placements', id: 'placements' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className="hover:text-teal-400 cursor-pointer transition-colors flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 rounded-full bg-teal-500 group-hover:w-2 transition-all" />
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-bold mb-6 text-white/90 uppercase tracking-widest">Support</h5>
            <ul className="space-y-3 text-slate-400 font-light text-sm">
              {[
                { name: 'FAQ', id: 'faq' },
                { name: 'Inquiry', id: 'contact' },
                { name: 'Mentorship', id: 'services' },
                { name: 'Resume Branding', id: 'journey' },
                { name: 'Mock Interviews', id: 'whyus' }
              ].map((item) => (
                <li
                  key={item.name}
                  onClick={() => handleLinkClick(item.id)}
                  className="hover:text-teal-400 cursor-pointer transition-colors flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 rounded-full bg-teal-500 group-hover:w-2 transition-all" />
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold">
          <p>© 2024 Swhizz Technologies.</p>
          <div className="flex gap-8">
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
