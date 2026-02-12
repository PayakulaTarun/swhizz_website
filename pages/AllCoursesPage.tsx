
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Search, Code, Layout, Shield, Database, Cloud, 
  Search as SearchIcon, ArrowUpRight, Sparkles, Star, Zap, Filter
} from 'lucide-react';

interface AllCoursesPageProps {
  onBack: () => void;
  onSelectCourse: (id: string) => void;
  theme?: 'light' | 'dark';
}

const allCourses = [
  {
    title: "Java Full Stack Development",
    id: "java-full-stack",
    icon: Code,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    skills: "Core Java, Spring Boot, React, SQL, DevOps Basics",
    outcome: "Full Stack Engineer",
    color: "from-blue-500/10 to-blue-600/10",
    accent: "text-blue-600 dark:text-blue-400",
    accentBg: "bg-blue-600",
  },
  {
    title: "Salesforce CRM",
    id: "salesforce-crm",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    skills: "Admin, Development, LWC, Integrations, CPQ, FSL",
    outcome: "Salesforce Developer",
    color: "from-sky-500/10 to-sky-600/10",
    accent: "text-sky-600 dark:text-sky-400",
    accentBg: "bg-sky-600",
  },
  {
    title: "Cybersecurity (VAPT)",
    id: "cybersecurity-vapt",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    skills: "Vulnerability Assessment, Penetration Testing, Ethical Hacking",
    outcome: "Security Analyst",
    color: "from-red-500/10 to-red-600/10",
    accent: "text-red-600 dark:text-red-400",
    accentBg: "bg-red-600",
  },
  {
    title: "Data Science & AI",
    id: "data-science-ai",
    icon: Database,
    image: "https://images.unsplash.com/photo-1551288560-12939103c80a?auto=format&fit=crop&q=80&w=800",
    skills: "Python, ML, Deep Learning, NLP, Data Visualization",
    outcome: "AI/Data Scientist",
    color: "from-purple-500/10 to-purple-600/10",
    accent: "text-purple-600 dark:text-purple-400",
    accentBg: "bg-purple-600",
  },
  {
    title: "Software Testing",
    id: "software-testing",
    icon: Search,
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800",
    skills: "Manual Testing + Automation (Selenium with Java/Python)",
    outcome: "QA Automation Lead",
    color: "from-emerald-500/10 to-emerald-600/10",
    accent: "text-emerald-600 dark:text-emerald-400",
    accentBg: "bg-emerald-600",
  },
  {
    title: "DevOps + AWS Cloud",
    id: "devops-aws-cloud",
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800",
    skills: "CI/CD, Docker, Kubernetes, AWS Services, Infrastructure as Code",
    outcome: "Cloud DevOps Engineer",
    color: "from-orange-500/10 to-orange-600/10",
    accent: "text-orange-600 dark:text-orange-400",
    accentBg: "bg-orange-600",
  },
];

const AllCoursesPage: React.FC<AllCoursesPageProps> = ({ onBack, onSelectCourse, theme }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(allCourses);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const q = searchQuery.toLowerCase();
    const filtered = allCourses.filter(course => 
      course.title.toLowerCase().includes(q) || 
      course.skills.toLowerCase().includes(q) ||
      course.outcome.toLowerCase().includes(q)
    );
    setFilteredCourses(filtered);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pb-24 overflow-x-hidden selection:bg-teal-500/30">
      {/* Header */}
      <nav className="fixed top-0 left-0 w-full z-[100] glass-effect py-4 px-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
         <button onClick={onBack} className="group flex items-center gap-3 text-slate-900 dark:text-white font-bold text-[10px] uppercase tracking-[0.3em] transition-all">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
            <span>Return to Hub</span>
          </button>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-teal-500" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">Complete Catalog</span>
             </div>
          </div>
      </nav>

      {/* Hero & Search Hub */}
      <section className="relative pt-32 pb-16 px-6 sm:px-12 bg-[#fcfcf7] dark:bg-[#020617] overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-[0.1] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center reveal active">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm text-teal-600 dark:text-teal-400 font-bold text-[10px] tracking-[0.4em] uppercase mb-10">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            Future-Proof Skills
          </div>
          <h1 className="text-6xl sm:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[0.85] italic tracking-tighter mb-12">
            The <span className="text-teal-600">Academy.</span>
          </h1>
          
          {/* Main Search Input - Luxury Styled */}
          <div className="relative group max-w-2xl mx-auto mb-16">
            <div className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#020617] dark:bg-teal-500 text-white dark:text-slate-900 rounded-full flex items-center justify-center shadow-xl group-focus-within:scale-110 transition-transform">
              <SearchIcon className="w-6 h-6" />
            </div>
            <input 
              type="text" 
              placeholder="Search by tech, role, or skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-24 pr-10 py-8 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 focus:border-[#020617] dark:focus:border-teal-500 focus:ring-8 focus:ring-teal-500/5 outline-none text-2xl font-display italic text-slate-900 dark:text-white shadow-2xl transition-all"
            />
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-12 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {filteredCourses.map((course, i) => (
                <div 
                  key={i} 
                  className="group relative overflow-hidden rounded-[50px] bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-transparent hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all duration-700 flex flex-col luxury-hover"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                    <div className={`absolute bottom-6 left-8 w-16 h-16 rounded-[24px] bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center ${course.accent} z-10 border border-slate-50 dark:border-slate-700`}>
                      <course.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="p-10 pt-4 flex flex-col flex-grow">
                    <h4 className="text-2xl font-display font-bold mb-6 text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">{course.title}</h4>
                    <div className="space-y-6 flex-grow">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Skills</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">{course.skills}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Career Path</p>
                        <p className={`text-sm font-bold ${course.accent}`}>{course.outcome}</p>
                      </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-slate-50 dark:border-slate-800 flex justify-between items-center">
                      <button 
                        onClick={() => onSelectCourse(course.id)}
                        className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-[0.2em] text-slate-900 dark:text-white hover:text-teal-600 transition-colors"
                      >
                        Explore Curriculum <ArrowUpRight className="w-4 h-4" />
                      </button>
                      <div className={`w-3 h-3 rounded-full ${course.accentBg} animate-pulse`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 space-y-8">
              <div className="w-24 h-24 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-300">
                <Search className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white italic">No programs found for "{searchQuery}"</h3>
              <p className="text-slate-500 font-light">Try searching for Java, Salesforce, or DevOps.</p>
              <button onClick={() => setSearchQuery("")} className="text-teal-600 font-bold uppercase tracking-widest text-[10px]">Clear Search</button>
            </div>
          )}
        </div>
      </section>

      <style>{`
        .reveal.active { opacity: 1; transform: translateY(0); }
        .reveal { opacity: 0; transform: translateY(20px); transition: all 1s cubic-bezier(0.22, 1, 0.36, 1); }
      `}</style>
    </div>
  );
};

export default AllCoursesPage;
