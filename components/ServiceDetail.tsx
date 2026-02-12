
import React, { useEffect } from 'react';
import { ArrowLeft, Award, Laptop, Users, ShieldCheck, CheckCircle2, Clock, Globe, Target, Sparkles, Star, Briefcase, TrendingUp } from 'lucide-react';

interface ServiceDetailProps {
  serviceId: string;
  onBack: () => void;
  theme?: 'light' | 'dark';
}

const serviceContent: Record<string, any> = {
  'classroom': {
    title: "Classroom Training",
    subtitle: "Immersive In-Person Excellence",
    icon: Award,
    description: "Experience the power of traditional learning with our state-of-the-art classroom sessions. Located in the heart of Hyderabad, our labs are designed for focused innovation.",
    features: [
      "Interactive face-to-face sessions",
      "Dedicated high-end lab access",
      "Immediate doubt clarification",
      "Networking with fellow aspirants",
      "Personalized focus from trainers"
    ],
    image: "https://images.unsplash.com/photo-1524178232363-1fb28f74b081?auto=format&fit=crop&q=80&w=1000",
    stats: [{ label: "Capacity", value: "30 per batch" }, { label: "Success Rate", value: "98%" }]
  },
  'online': {
    title: "Online Training",
    subtitle: "Global Learning, Local Impact",
    icon: Laptop,
    description: "Learn from the best mentors in the industry from the comfort of your home. Our live online sessions are designed to be as interactive as physical classrooms.",
    features: [
      "Live instructor-led sessions",
      "Recorded sessions for review",
      "Digital lab environment",
      "Flexible evening/weekend batches",
      "Global community access"
    ],
    image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=1000",
    stats: [{ label: "Global Reach", value: "15+ Countries" }, { label: "Platform", value: "HD Live Sync" }]
  },
  'mentorship': {
    title: "Industry Mentorship",
    subtitle: "Elite 1:1 Professional Guidance",
    icon: Users,
    description: "Don't just learn skills; understand the industry. Get mentored by professionals currently working at top-tier tech giants like Amazon, Salesforce, and Google.",
    features: [
      "1-on-1 career pathing",
      "Resume & Portfolio reviews",
      "Direct industry insights",
      "Soft skill & leadership training",
      "Weekly progress audits"
    ],
    image: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=1000",
    stats: [{ label: "Mentors", value: "50+ Experts" }, { label: "Experience", value: "10+ Years" }]
  },
  'corporate': {
    title: "Professional Internships",
    subtitle: "Hands-on real-time projects 5 k to 10 k",
    icon: Sparkles,
    description: "Bridge the gap between learning and employment with our hands-on internship programs. Work on actual production-level projects that mirror the challenges of top IT firms.",
    features: [
      "Real-time project implementation",
      "Industrial workflow exposure",
      "Agile/Scrum practice",
      "Code review & feedback",
      "Experience certificate provided"
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000",
    stats: [{ label: "Stipend Range", value: "5k - 10k" }, { label: "Success", value: "Real Projects" }]
  },
  'placement': {
    title: "Placement Support",
    subtitle: "Resume, Mock Interviews & Job Assistance",
    icon: Briefcase,
    description: "Our dedicated placement cell works tirelessly to bridge the gap between your training and your first paycheck. We don't stop until you're placed at your dream firm.",
    features: [
      "ATS-friendly resume branding",
      "Unlimited mock technical drills",
      "HR interview psychology training",
      "Direct job referral network",
      "Post-placement onboarding help"
    ],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1000",
    stats: [{ label: "Partners", value: "200+ Firms" }, { label: "Hired", value: "9k+ Alumni" }]
  },
  'marketing': {
    title: "Profile Marketing",
    subtitle: "Strategic Branding for High Visibility",
    icon: TrendingUp,
    description: "In a competitive market, being skilled isn't enough—you must be seen. We strategically market your profile to top headhunters and HR heads of global MNCs.",
    features: [
      "LinkedIn profile optimization",
      "GitHub & portfolio showcase",
      "Direct reach to HR decision makers",
      "Personal brand narrative build",
      "Global recruiter visibility boost"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    stats: [{ label: "Reach", value: "Global" }, { label: "Visibility", value: "Top 1%" }]
  }
};

const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId, onBack, theme }) => {
  const content = serviceContent[serviceId] || serviceContent['classroom'];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
        else entry.target.classList.remove('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [serviceId]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pb-24 overflow-x-hidden">
      {/* Detail Nav */}
      <nav className="fixed top-0 left-0 w-full z-[90] glass-effect py-4 px-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
         <button onClick={onBack} className="group flex items-center gap-3 text-slate-900 dark:text-white font-bold text-[10px] uppercase tracking-[0.3em] transition-all">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
            <span>Back to Services</span>
          </button>
          <div className="flex items-center gap-4">
             <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="px-8 py-3 teal-gradient text-white rounded-full text-[10px] font-bold uppercase tracking-[0.3em] shadow-lg hover:scale-105 transition-all">
                Book Consultation
             </button>
          </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 sm:px-12 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-[0.1] pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 reveal active">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm text-teal-600 dark:text-teal-400 font-bold text-[10px] tracking-[0.3em] uppercase">
              <Star className="w-4 h-4 fill-teal-600" />
              Swhizz Signature Service
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl font-display font-bold text-slate-900 dark:text-white leading-[0.9] italic tracking-tighter">
                {content.title}
              </h1>
              <p className="text-xl text-slate-400 font-serif italic font-light">{content.subtitle}</p>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light max-w-2xl border-l-4 border-teal-500 pl-8">
              {content.description}
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
               {content.stats.map((stat: any, i: number) => (
                  <div key={i} className="space-y-1">
                     <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">{stat.label}</p>
                     <p className="text-slate-900 dark:text-white font-bold text-lg">{stat.value}</p>
                  </div>
               ))}
            </div>
          </div>
          <div className="reveal active hidden lg:block">
            <div className="aspect-[4/3] rounded-[48px] overflow-hidden border-[10px] border-slate-50 dark:border-slate-800 shadow-2xl">
              <img src={content.image} alt={content.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 sm:px-12 bg-[#020617] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 reveal">
            <div className="space-y-4">
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-teal-400 font-bold">Key Deliverables</h2>
              <h3 className="text-4xl sm:text-6xl font-display font-bold italic tracking-tighter">Service Blueprint.</h3>
            </div>
            <p className="text-slate-400 text-lg font-light max-w-md border-l-4 border-teal-500 pl-6 italic">Built for immediate career impact.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
            {content.features.map((feature: string, idx: number) => (
              <div key={idx} className="p-8 rounded-[40px] bg-white/5 border border-white/5 hover:border-teal-500/30 transition-all duration-700 flex flex-col gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white transition-all">
                   <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold italic">{feature}</h4>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Professional Delivery</p>
              </div>
            ))}
            <div className="p-8 rounded-[40px] bg-teal-500 text-slate-900 flex flex-col justify-center items-center text-center gap-4 group cursor-default">
               <Target className="w-12 h-12 animate-pulse" />
               <h4 className="text-2xl font-display font-bold italic">Career Obsessed</h4>
               <p className="text-sm font-bold uppercase tracking-widest opacity-60">Verified Support</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .reveal.active { opacity: 1; transform: translateY(0) scale(1); }
        .reveal { opacity: 0; transform: translateY(20px) scale(0.98); transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1); }
      `}</style>
    </div>
  );
};

export default ServiceDetail;
