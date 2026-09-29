import { GraduationCap, Lightbulb, Compass, Award, Code, Users } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Background",
      detail: "B.Tech 1st Semester Student focusing on core engineering principles and algorithmic foundations."
    },
    {
      icon: Code,
      title: "Hands-on Learning",
      detail: "Building beginner Python utilities and web components to translate theoretical knowledge into real practice."
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      detail: "Active participant in hackathons and ideathons, working with teams to turn ideas into functional prototypes."
    },
    {
      icon: Lightbulb,
      title: "AI Curiosity",
      detail: "Exploring how modern Generative AI and intelligent systems can augment human capabilities and solve problems."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-y border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">
            Background &amp; Focus
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            About Me
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3"></div>
        </div>

        {/* Narrative & Positioning */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Paragraph */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p className="font-normal text-slate-800">
              {PERSONAL_INFO.aboutBio}
            </p>
            <p className="text-sm sm:text-base text-slate-600">
              As a fresher entering computer science and engineering, I believe that building lasting expertise in Artificial Intelligence begins with disciplined fundamentals — mastering logical thinking, writing clean code, understanding user input, and continuously experimenting.
            </p>
            <p className="text-sm sm:text-base text-slate-600">
              Whether it is writing my first CLI banking simulation in Python, designing responsive web layouts, or brainstorming innovative concepts during weekend ideathons, my goal is consistent growth: transforming curiosity into functional, helpful code.
            </p>

            {/* Quick Unboxed Stats/Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-100">
              <div>
                <span className="block text-2xl font-bold text-slate-900 font-mono tabular-nums">1st</span>
                <span className="text-xs text-slate-500 font-medium">B.Tech Semester</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-blue-600 font-mono tabular-nums">3+</span>
                <span className="text-xs text-slate-500 font-medium">Completed Projects</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-slate-900 font-mono tabular-nums">2+</span>
                <span className="text-xs text-slate-500 font-medium">Sprint Events (Hack/Idea)</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Clean Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="p-4 bg-slate-50/80 border border-slate-200/80 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white border border-slate-200 text-blue-600 shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-normal">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
