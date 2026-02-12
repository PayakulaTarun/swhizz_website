
import React, { useState, useEffect } from 'react';
// Added Users to the imports from lucide-react
import { 
  ArrowLeft, Send, CheckCircle2, Star, Sparkles, User, Mail, Phone, 
  MapPin, GraduationCap, Briefcase, Zap, Trophy, ShieldCheck, Users
} from 'lucide-react';

interface EnrollmentFormProps {
  onBack: () => void;
  theme?: 'light' | 'dark';
}

const EnrollmentForm: React.FC<EnrollmentFormProps> = ({ onBack, theme }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    background: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate luxury API call
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-500 mb-8 animate-bounce">
          <Trophy className="w-12 h-12" />
        </div>
        <h2 className="text-4xl sm:text-6xl font-display font-bold text-slate-900 dark:text-white italic mb-6">Application Received.</h2>
        <p className="text-xl text-slate-500 dark:text-slate-400 font-light max-w-2xl mb-12">
          Your path to IT excellence has been registered. Our elite career advisors will contact you within 24 hours to schedule your roadmap session.
        </p>
        <button 
          onClick={onBack}
          className="px-12 py-5 luxury-gradient text-white rounded-full font-bold shadow-2xl hover:scale-105 transition-all shimmer-effect"
        >
          Return to Hub
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 selection:bg-teal-500/30 overflow-x-hidden">
      {/* Premium Navbar */}
      <nav className="fixed top-0 left-0 w-full z-[100] glass-effect py-4 px-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
        <button onClick={onBack} className="group flex items-center gap-3 text-slate-900 dark:text-white font-bold text-[10px] uppercase tracking-[0.3em] transition-all">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
          <span>Exit Application</span>
        </button>
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 fill-teal-500 text-teal-500" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">Elite Series Enrollment</span>
        </div>
      </nav>

      <div className="pt-24 lg:pt-0 lg:flex min-h-screen">
        {/* Left Side: Inspiration & Social Proof */}
        <div className="lg:w-1/3 bg-[#020617] text-white p-12 lg:p-20 relative overflow-hidden flex flex-col justify-center">
          <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/10 blur-[150px] rounded-full" />
          
          <div className="relative z-10 space-y-12">
            <div className="space-y-4">
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-teal-400 font-bold">The Success Blueprint</h2>
              <h3 className="text-4xl xl:text-6xl font-display font-bold italic leading-tight">Start Your Transformation.</h3>
            </div>

            <div className="space-y-8">
              {[
                { icon: ShieldCheck, text: "9,000+ Careers Launched Successfully" },
                { icon: Zap, text: "Production-Grade Hands-on Learning" },
                { icon: Users, text: "1:1 Industry Veteran Mentorship" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-slate-900 transition-all">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className="text-slate-400 font-light text-sm group-hover:text-white transition-colors">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 italic font-light text-slate-400 text-sm">
              <p>"At Swhizz, we don't just train candidates; we build high-performance IT professionals from the ground up."</p>
              <p className="mt-4 font-bold text-teal-400 tracking-widest uppercase text-[10px]">— Kodandaramu Karroti, Founder</p>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="lg:w-2/3 p-6 sm:p-12 lg:p-24 flex items-center">
          <div className="max-w-3xl w-full mx-auto space-y-12">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl font-display font-bold text-slate-900 dark:text-white italic tracking-tighter leading-[0.9]">
                Application of <span className="text-teal-600">Excellence</span>.
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-xl font-light">Complete your profile to secure your spot in our upcoming elite batch.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 stagger-reveal active">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2 group">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 group-focus-within:text-teal-600 transition-colors">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                    <input 
                      required
                      type="text" 
                      placeholder="e.g., Alexander Smith" 
                      className="w-full pl-16 pr-8 py-5 rounded-[24px] bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-teal-500 focus:bg-white dark:focus:bg-slate-800 focus:ring-8 focus:ring-teal-500/5 transition-all outline-none text-slate-900 dark:text-white"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 group-focus-within:text-teal-600 transition-colors">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                    <input 
                      required
                      type="email" 
                      placeholder="alex@example.com" 
                      className="w-full pl-16 pr-8 py-5 rounded-[24px] bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-teal-500 focus:bg-white dark:focus:bg-slate-800 focus:ring-8 focus:ring-teal-500/5 transition-all outline-none text-slate-900 dark:text-white"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2 group">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 group-focus-within:text-teal-600 transition-colors">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                    <input 
                      required
                      type="tel" 
                      placeholder="+91 9059002244" 
                      className="w-full pl-16 pr-8 py-5 rounded-[24px] bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-teal-500 focus:bg-white dark:focus:bg-slate-800 focus:ring-8 focus:ring-teal-500/5 transition-all outline-none text-slate-900 dark:text-white"
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 group-focus-within:text-teal-600 transition-colors">Target Program</label>
                  <div className="relative">
                    <GraduationCap className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                    <select 
                      required
                      className="w-full pl-16 pr-8 py-5 rounded-[24px] bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-teal-500 focus:bg-white dark:focus:bg-slate-800 focus:ring-8 focus:ring-teal-500/5 transition-all outline-none appearance-none text-slate-900 dark:text-white"
                      onChange={(e) => setFormData({...formData, course: e.target.value})}
                    >
                      <option value="" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Select a course...</option>
                      <option value="java" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Java Full Stack Development</option>
                      <option value="salesforce" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Salesforce CRM Mastery</option>
                      <option value="cyber" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Cybersecurity & VAPT</option>
                      <option value="data" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Data Science & AI</option>
                      <option value="testing" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Software Testing Pro</option>
                      <option value="devops" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">DevOps + AWS Cloud</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300">
                      <Send className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 group-focus-within:text-teal-600 transition-colors">Professional Background</label>
                <div className="relative">
                  <Briefcase className="absolute left-6 top-6 w-5 h-5 text-slate-300" />
                  <textarea 
                    placeholder="Briefly describe your background (e.g., Non-IT, Fresh Graduate, 2-Year Career Gap...)" 
                    rows={4}
                    className="w-full pl-16 pr-8 py-5 rounded-[24px] bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-teal-500 focus:bg-white dark:focus:bg-slate-800 focus:ring-8 focus:ring-teal-500/5 transition-all outline-none text-slate-900 dark:text-white"
                    onChange={(e) => setFormData({...formData, background: e.target.value})}
                  ></textarea>
                </div>
              </div>

              <div className="pt-8">
                <button 
                  type="submit"
                  className="w-full py-6 luxury-gradient text-white rounded-[24px] font-bold text-xl luxury-hover shadow-2xl shimmer-effect flex items-center justify-center gap-4 group"
                >
                  <span className="relative z-10">Submit for Excellence</span>
                  <Send className="w-6 h-6 relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </button>
                <p className="text-center mt-6 text-[10px] uppercase tracking-[0.4em] font-bold text-slate-300 dark:text-slate-600">
                  Secured & Private Application Process
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentForm;
