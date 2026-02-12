
import React from 'react';
import { Code, Cloud, Shield, Database, Layout, Search, ArrowUpRight, ArrowRight } from 'lucide-react';

interface CoursesProps {
  onSelectCourse?: (id: string) => void;
  onViewAll?: () => void;
}

const Courses: React.FC<CoursesProps> = ({ onSelectCourse, onViewAll }) => {
  const courses = [
    {
      title: "Java Full Stack Development",
      id: "java-full-stack",
      icon: Code,
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800",
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
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
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
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800",
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
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800",
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
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
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
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800",
      skills: "CI/CD, Docker, Kubernetes, AWS Services, Infrastructure as Code",
      outcome: "Cloud DevOps Engineer",
      color: "from-orange-500/10 to-orange-600/10",
      accent: "text-orange-600 dark:text-orange-400",
      accentBg: "bg-orange-600",
    },
  ];

  return (
    <section id="courses" className="py-20 sm:py-24 px-4 sm:px-8 lg:px-12 bg-transparent transition-colors duration-1000">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8 reveal">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-[0.4em] text-teal-600 font-bold">Programs Offered</h2>
            <h3 className="text-4xl sm:text-6xl xl:text-7xl font-display font-bold text-slate-900 dark:text-white italic leading-tight">Courses That Matter.</h3>
          </div>
          <div className="max-w-md p-6 border-l-4 border-yellow-400 bg-white dark:bg-slate-900 shadow-sm rounded-r-2xl hidden sm:block">
            <p className="text-slate-600 dark:text-slate-400 font-bold mb-1 uppercase tracking-wider text-xs">Industry Standard Training</p>
            <p className="text-slate-500 dark:text-slate-500 text-sm font-light">Join the top 1% of IT professionals with our production-grade curriculum.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10 stagger-reveal">
          {courses.map((course, i) => (
            <div
              key={i}
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`group relative overflow-hidden rounded-[50px] bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-transparent hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all duration-700 flex flex-col luxury-hover`}
            >
              <div className="relative h-64 overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent opacity-60 dark:opacity-40" />
                <div className={`absolute bottom-6 left-8 w-16 h-16 rounded-[24px] bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center ${course.accent} group-hover:scale-110 transition-all duration-500 z-10 border border-slate-50 dark:border-slate-700`}>
                  <course.icon className="w-8 h-8" />
                </div>
              </div>

              <div className="p-8 sm:p-10 pt-4 flex flex-col flex-grow relative z-10">
                <h4 className="text-2xl font-display font-bold mb-6 text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors duration-300">{course.title}</h4>
                <div className="space-y-6 mb-10 flex-grow">
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 font-bold">Technical Stack</p>
                    <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed font-light">{course.skills}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50 dark:border-slate-800">
                  <button
                    onClick={() => onSelectCourse && onSelectCourse(course.id)}
                    className="flex items-center gap-2 font-bold text-xs uppercase tracking-[0.2em] text-slate-900 dark:text-white hover:text-teal-600 transition-all group/btn"
                  >
                    Course Details
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                  <div className={`w-2.5 h-2.5 rounded-full ${course.accentBg} group-hover:animate-ping shadow-lg shadow-teal-500/20`} />
                </div>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`} />
            </div>
          ))}
        </div>

        {/* View All Courses CTA */}
        <div className="mt-20 flex justify-center reveal">
          <button
            onClick={onViewAll}
            className="px-16 py-8 bg-[#020617] text-white rounded-full font-bold text-xl shadow-2xl hover:scale-110 transition-all group flex items-center gap-4 group"
          >
            <span className="relative z-10">Explore All Programs</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
