import React from 'react';
import { Briefcase, Zap, Search, Layout, HeartPulse, GraduationCap } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Student Enrollment & Fee Management System",
      cloud: "Education Cloud",
      icon: GraduationCap,
      desc: "Streamlines student admissions, course enrollments, and payment tracking for educational institutions.",
      covers: "Custom Objects, Record-Triggered Flows, Validation Rules, Reports & Dashboards."
    },
    {
      title: "Customer Support Case Automation",
      cloud: "Service Cloud",
      icon: HeartPulse,
      desc: "Automates case creation, assignment, escalation, and resolution tracking to enhance customer satisfaction.",
      covers: "Case Management, Queues, Assignment Rules, Approval Processes, SLAs."
    },
    {
      title: "Sales Opportunity & Quotation Management",
      cloud: "Sales Cloud",
      icon: Briefcase,
      desc: "Tracks sales leads, opportunities, and quotation approvals with real-time pipeline visibility.",
      covers: "Lead Conversion, Opportunity Stages, Flow Automation, Approval Process, PDF Quotes."
    },
    {
      title: "Employee Onboarding & HR Portal",
      cloud: "Experience Cloud",
      icon: Layout,
      desc: "Simplifies onboarding workflows and document tracking for new employees, integrating HR data.",
      covers: "Experience Cloud, Flows, Custom Components, Email Alerts, Role-Based Access Control."
    },
    {
      title: "Healthcare Appointment & Patient Management",
      cloud: "Health Cloud",
      icon: Zap,
      desc: "Enables hospitals and clinics to manage appointments, patient details, and doctor schedules efficiently.",
      covers: "LWC UI Forms, Apex Controllers, REST Integrations, Reports, and Scheduler Jobs."
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 lg:px-12 bg-[#fdfcf0]">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24 reveal">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-sm uppercase tracking-[0.4em] text-teal-600 font-bold">Practical Exposure</h2>
            <h3 className="text-5xl sm:text-7xl font-display font-bold text-slate-900 italic leading-tight">
              Real-Time Project Work
            </h3>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              At Swhizz Technologies, every learner participates in <span className="text-slate-900 font-bold">live IT projects</span> that mirror real-world business processes and help build end-to-end implementation expertise.
            </p>
            <div className="grid grid-cols-2 gap-4 stagger-reveal">
               {[
                 "Requirement Gathering",
                 "Design & Configuration",
                 "Custom Development",
                 "Integration Practice",
                 "Testing & Debugging",
                 "Documentation & Handover"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 text-slate-700 text-sm font-medium hover:text-teal-600 transition-colors cursor-default">
                   <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                   {item}
                 </div>
               ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative reveal" style={{ transitionDelay: '300ms' }}>
             <div className="aspect-[4/3] rounded-[60px] overflow-hidden shadow-2xl relative group">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" alt="Team working" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]" />
                <div className="absolute inset-0 bg-slate-900/20" />
             </div>
             <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-[40px] shadow-xl border border-slate-100 max-w-xs animate-float">
                <p className="text-slate-900 font-bold mb-2">Requirement Analysis</p>
                <p className="text-slate-500 text-xs font-light italic">"We guide learners through requirement analysis, design, configuration, development, testing, and deployment."</p>
             </div>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-3xl font-display font-bold text-center text-slate-900 mb-12 reveal italic">Sample Real-Time Projects</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-reveal">
            {projects.map((project, i) => (
              <div key={i} className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-all duration-500">
                  <project.icon className="w-7 h-7" />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex justify-between items-start">
                    <h5 className="text-xl font-display font-bold text-slate-900 leading-tight group-hover:text-teal-600 transition-colors">{project.title}</h5>
                    <span className="text-[10px] uppercase tracking-widest bg-slate-100 px-2 py-1 rounded-md text-slate-500 font-bold">{project.cloud}</span>
                  </div>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">{project.desc}</p>
                  <div className="pt-4 border-t border-slate-50">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-teal-600 mb-2">Covers</p>
                    <p className="text-xs text-slate-400 italic">{project.covers}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;