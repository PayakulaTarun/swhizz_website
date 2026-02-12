import React from 'react';
import { MapPin, Phone, Mail, Globe, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12 reveal">
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-[0.4em] text-teal-600 font-bold">Reach Out</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Connect with Experts</h3>
              <p className="text-slate-600 font-light text-lg">Your transformation journey starts with a simple conversation. Visit us or call for a free career roadmap.</p>
            </div>

            <div className="space-y-8 stagger-reveal">
              <div className="flex gap-6 group cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-teal-600 group-hover:scale-110 group-hover:shadow-lg hover:text-white hover:bg-teal-600 transition-all duration-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Head Office (Madhapur)</p>
                  <p className="text-slate-700 font-medium leading-relaxed group-hover:text-teal-600 transition-colors">
                    Plot No: 809, #502, Venkoti Building, Ayyappa Society,<br />
                    Madhapur, Hyderabad, Telangana — 500081
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-teal-600 group-hover:scale-110 group-hover:shadow-lg hover:text-white hover:bg-teal-600 transition-all duration-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Phone Support</p>
                  <p className="text-slate-700 font-medium group-hover:text-teal-600 transition-colors">+91 9059002244 | +91 9059931901</p>
                </div>
              </div>

              <div className="flex gap-6 group cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-teal-600 group-hover:scale-110 group-hover:shadow-lg hover:text-white hover:bg-teal-600 transition-all duration-500">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Digital Presence</p>
                  <p className="text-slate-700 font-medium group-hover:text-teal-600 transition-colors">www.swhizz.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-12 relative overflow-hidden reveal hover:shadow-teal-500/5 transition-all duration-700" style={{ transitionDelay: '300ms' }}>
            <div className="absolute top-0 left-0 w-2 h-full teal-gradient" />
            <div className="space-y-6">
              <h4 className="text-2xl font-display font-bold text-slate-900">Quick Inquiry</h4>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-inner transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:bg-white focus:border-teal-500" 
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-inner transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:bg-white focus:border-teal-500" 
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Phone Number" 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-inner transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:bg-white focus:border-teal-500" 
                />
                <div className="relative">
                  <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-inner transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:bg-white focus:border-teal-500 appearance-none">
                    <option>Select Course Interested</option>
                    <option>Java Full Stack</option>
                    <option>Salesforce CRM</option>
                    <option>Cybersecurity</option>
                    <option>Data Science & AI</option>
                    <option>Software Testing</option>
                    <option>DevOps + AWS</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <Send className="w-4 h-4 rotate-90" />
                  </div>
                </div>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your background (e.g., Non-IT, Career Gap)" 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-inner transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:bg-white focus:border-teal-500"
                ></textarea>
                <button className="w-full py-5 teal-gradient text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-xl hover:scale-[1.02] transition-all shimmer-effect group">
                  <span className="relative z-10">Send Inquiry</span>
                  <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;