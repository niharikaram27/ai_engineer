import { Users, Lightbulb, CheckCircle2, Trophy, Compass, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#fafaf9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">
            Collegiate Engagement
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Experience &amp; Activities
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Active participation in student innovation events, developing teamwork, creative ideation, and rapid prototype delivery.
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3"></div>
        </div>

        {/* 2 Activities Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXPERIENCES.map((exp, idx) => {
            const isHackathon = exp.title.toLowerCase().includes('hackathon');
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Badge & Title Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                        {isHackathon ? (
                          <Users className="w-5 h-5" />
                        ) : (
                          <Lightbulb className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          {exp.title}
                        </h3>
                        <p className="text-xs text-blue-600 font-medium">
                          {exp.role}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      College Events
                    </span>
                  </div>

                  {/* Subtitle & Narrative */}
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-slate-800">
                      {exp.subtitle}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Key Learnings List */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider block mb-3">
                      Key Competencies Developed
                    </span>
                    <ul className="space-y-2.5">
                      {exp.keyLearnings.map((learning, lIdx) => (
                        <li key={lIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Actively preparing for upcoming college hackathons &amp; challenges</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
