
import React, { useState, useEffect } from 'react';
import { Trophy, Sparkles } from 'lucide-react';

interface Student {
  url: string;
  name: string;
  company: string;
  tag: string;
}

const Gallery: React.FC = () => {
  const [setIndex, setSetIndex] = useState(0);
  const [animationState, setAnimationState] = useState<'entering' | 'exiting' | 'idle'>('idle');

  const allStudents: Student[] = [
    // Set 1
    { url: "/images/1.png", name: "Ananya Iyer", company: "Salesforce", tag: "PLACED @ SALESFORCE" },
    { url: "/images/2.jpg", name: "Rohan Verma", company: "Google", tag: "HIRED @ GOOGLE" },
    { url: "/images/3.jpg", name: "Sandeep Rao", company: "Microsoft", tag: "PLACED @ MSFT" },
    { url: "/images/4.jpg", name: "Meghna Reddy", company: "Accenture", tag: "HIRED @ ACCENTURE" },
    { url: "/images/5.jpg", name: "Karthik S", company: "Infosys", tag: "PLACED @ INFOSYS" },
    { url: "/images/6.jpg", name: "Divya Sharma", company: "Deloitte", tag: "HIRED @ DELOITTE" },
    // Set 2
    { url: "/images/7.jpg", name: "Vikram Singh", company: "Amazon", tag: "PLACED @ AMAZON" },
    { url: "/images/8.jpg", name: "Sita G.", company: "Oracle", tag: "HIRED @ ORACLE" },
    { url: "/images/9.jpg", name: "Arjun M.", company: "IBM", tag: "PLACED @ IBM" },
    { url: "/images/10.jpg", name: "Punit J.", company: "Capgemini", tag: "HIRED @ CAPGEMINI" },
    { url: "/images/11.jpg", name: "Rahul M.", company: "TCS", tag: "PLACED @ TCS" },
    { url: "/images/12.jpg", name: "Sneha K.", company: "Cognizant", tag: "HIRED @ CTS" },
    // Set 3 (New Set)
    { url: "/images/13.jpg", name: "Amit Patel", company: "Wipro", tag: "PLACED @ WIPRO" },
    { url: "/images/14.jpg", name: "Priya Das", company: "HCL", tag: "HIRED @ HCL" },
    { url: "/images/15.jpg", name: "Karan Johar", company: "Tech Mahindra", tag: "PLACED @ TECHM" },
    { url: "/images/16.jpg", name: "Simran Kaur", company: "Mindtree", tag: "HIRED @ MINDTREE" },
    { url: "/images/17.jpg", name: "Rajesh Kumar", company: "LTI", tag: "PLACED @ LTI" },
    { url: "/images/18.jpg", name: "Neha Gupta", company: "Mphasis", tag: "HIRED @ MPHASIS" }
  ];

  const studentsPerPage = 6;
  const totalSets = Math.ceil(allStudents.length / studentsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger Exit
      setAnimationState('exiting');

      setTimeout(() => {
        // Change Set
        setSetIndex((prev) => (prev + 1) % totalSets);
        // Trigger Entry
        setAnimationState('entering');

        setTimeout(() => {
          setAnimationState('idle');
        }, 1000);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSets]);

  const currentStudents = allStudents.slice(
    setIndex * studentsPerPage,
    (setIndex + 1) * studentsPerPage
  );

  // Mapping array order to visual grid order to match screenshot exactly
  // Visual positions: [Big Left, Small Top Mid, Small Top Right, Big Bottom Right, Small Bottom Left, Small Bottom Mid]
  const gridPositions = [
    "md:col-span-2 md:row-span-2", // 0: Ananya/Vikram (Top Left)
    "md:col-span-1 md:row-span-1", // 1: Rohan/Sita (Top Mid)
    "md:col-span-1 md:row-span-1", // 2: Sandeep/Arjun (Top Right)
    "md:col-span-2 md:row-span-2", // 3: Meghna/Punit (Bottom Right)
    "md:col-span-1 md:row-span-1", // 4: Karthik/Rahul (Bottom Left)
    "md:col-span-1 md:row-span-1", // 5: Divya/Sneha (Bottom Mid)
  ];

  return (
    <section id="gallery" className="py-24 px-6 sm:px-12 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16 reveal active">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
            <Sparkles className="w-4 h-4 text-teal-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-teal-600 font-bold">Industry Transitions</span>
          </div>
          <h3 className="text-5xl md:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[0.9] tracking-tighter italic">
            Placement <span className="text-teal-600">Gallary.</span>
          </h3>
        </div>

        {/* Precise Bento Grid matching user's Image 1 & 2 */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[1000px]">
          {currentStudents.map((student, i) => (
            <div
              key={`${setIndex}-${i}`}
              className={`${gridPositions[i]} group relative overflow-hidden rounded-[48px] shadow-2xl transition-all duration-700
                ${animationState === 'exiting' ? 'animate-backOutDown' : ''} 
                ${animationState === 'entering' ? 'animate-backInUp' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img
                src={student.url}
                alt={student.name}
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s] ease-out"
              />

              {/* Luxury High-Contrast Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85 group-hover:opacity-100 transition-opacity" />

              {/* Content Panel */}
              <div className="absolute bottom-0 left-0 p-8 sm:p-12 w-full">
                <div className="space-y-1">
                  <span className="text-[10px] text-teal-400 font-bold uppercase tracking-[0.4em] block mb-2 group-hover:translate-x-1 transition-transform">
                    {student.tag}
                  </span>
                  <h4 className="text-3xl sm:text-5xl font-display font-bold text-white italic leading-none group-hover:translate-x-2 transition-transform duration-700">
                    {student.name}
                  </h4>
                </div>
              </div>

              {/* Hover Badge */}
              <div className="absolute top-8 right-8 scale-0 group-hover:scale-100 transition-transform duration-500">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-teal-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Luxury Set Indicator */}
        <div className="flex justify-center gap-4 mt-16 reveal active">
          {Array.from({ length: totalSets }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setAnimationState('exiting');
                setTimeout(() => {
                  setSetIndex(i);
                  setAnimationState('entering');
                  setTimeout(() => setAnimationState('idle'), 1000);
                }, 1000);
              }}
              className={`h-1.5 rounded-full transition-all duration-1000 ${setIndex === i ? 'w-20 bg-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.5)]' : 'w-4 bg-slate-200 dark:bg-slate-800'}`}
            />
          ))}
        </div>

        {/* Global Keyframes for Specific Back animations */}
        <style>{`
          @keyframes backOutDown {
            0% { transform: scale(1); opacity: 1; }
            20% { transform: scale(0.7); opacity: 0.7; }
            100% { transform: translateY(1200px) scale(0.7); opacity: 0; }
          }
          @keyframes backInUp {
            0% { transform: translateY(1200px) scale(0.7); opacity: 0; }
            80% { transform: translateY(-40px) scale(0.7); opacity: 0.7; }
            100% { transform: translateY(0) scale(1); opacity: 1; }
          }
          .animate-backOutDown {
            animation: backOutDown 1s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;
          }
          .animate-backInUp {
            animation: backInUp 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          }
          /* Ensure cards maintain aspect ratio during animation on mobile */
          @media (max-width: 768px) {
            #gallery .grid { aspect-ratio: auto; }
            #gallery .grid > div { aspect-ratio: 1/1; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Gallery;
